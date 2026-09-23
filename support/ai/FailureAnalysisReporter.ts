import fs from "node:fs";
import path from "node:path";
import type {
  FullConfig,
  Reporter,
  TestCase,
  TestResult,
} from "@playwright/test/reporter";

type FailureRecord = {
  title: string;
  file: string;
  line: number;
  project: string;
  retry: number;
  durationMs: number;
  category: string;
  error: string;
};

type ReporterOptions = {
  outputDir?: string;
};

const ANSI_PATTERN = /\u001b\[[0-9;]*m/g;
const MAX_ERROR_LENGTH = 2_000;

const clean = (value: string): string =>
  value.replace(ANSI_PATTERN, "").replace(/\r/g, "").trim();

const classify = (message: string): string => {
  const normalized = message.toLowerCase();

  if (normalized.includes("timeout")) return "timeout-or-slow-response";
  if (normalized.includes("strict mode violation")) return "ambiguous-locator";
  if (normalized.includes("element(s) not found")) return "missing-element";
  if (normalized.includes("tohaveurl")) return "navigation-or-session";
  if (normalized.includes("expected") && normalized.includes("received")) {
    return "assertion-mismatch";
  }
  if (normalized.includes("net::") || normalized.includes("econn")) {
    return "network-or-environment";
  }

  return "unclassified";
};

/**
 * Produces deterministic, AI-ready failure context without calling an AI API.
 * The generated prompt can be reviewed before it is shared with any model.
 */
export default class FailureAnalysisReporter implements Reporter {
  private readonly failures: FailureRecord[] = [];
  private readonly outputDir: string;
  private startedAt = new Date();

  constructor(options: ReporterOptions = {}) {
    this.outputDir = options.outputDir ?? "ai-results";
  }

  onBegin(_config: FullConfig): void {
    this.startedAt = new Date();
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    if (result.status === "passed" || result.status === "skipped") return;

    const errorText = clean(
      result.errors
        .map((error) => error.message ?? "Unknown error")
        .join("\n\n"),
    ).slice(0, MAX_ERROR_LENGTH);

    this.failures.push({
      title: test.titlePath().join(" > "),
      file: path.relative(process.cwd(), test.location.file),
      line: test.location.line,
      project: test.parent.project()?.name ?? "unknown",
      retry: result.retry,
      durationMs: result.duration,
      category: classify(errorText),
      error: errorText || "No error message was provided.",
    });
  }

  onEnd(): void {
    fs.mkdirSync(this.outputDir, { recursive: true });

    const summaryPath = path.join(this.outputDir, "failure-summary.md");
    const promptPath = path.join(this.outputDir, "ai-debug-prompt.md");
    const metadata = {
      generatedAt: new Date().toISOString(),
      startedAt: this.startedAt.toISOString(),
      failureCount: this.failures.length,
      failures: this.failures,
    };

    fs.writeFileSync(
      path.join(this.outputDir, "failures.json"),
      `${JSON.stringify(metadata, null, 2)}\n`,
      "utf8",
    );
    fs.writeFileSync(summaryPath, this.buildSummary(), "utf8");
    fs.writeFileSync(promptPath, this.buildPrompt(), "utf8");
  }

  private buildSummary(): string {
    if (this.failures.length === 0) {
      return "# Playwright Failure Analysis\n\nNo failed tests were detected.\n";
    }

    const grouped = new Map<string, FailureRecord[]>();
    for (const failure of this.failures) {
      const category = grouped.get(failure.category) ?? [];
      category.push(failure);
      grouped.set(failure.category, category);
    }
    const categoryRows = [...grouped.entries()]
      .map(([category, failures]) => `| ${category} | ${failures.length} |`)
      .join("\n");
    const details = this.failures
      .map(
        (failure, index) =>
          `## ${index + 1}. ${failure.title}\n\n` +
          `- Location: \`${failure.file}:${failure.line}\`\n` +
          `- Project: \`${failure.project}\`\n` +
          `- Retry: ${failure.retry}\n` +
          `- Duration: ${failure.durationMs} ms\n` +
          `- Likely category: \`${failure.category}\`\n\n` +
          `\`\`\`text\n${failure.error}\n\`\`\``,
      )
      .join("\n\n");

    return (
      "# Playwright Failure Analysis\n\n" +
      `Failures captured: **${this.failures.length}**\n\n` +
      "| Category | Count |\n|---|---:|\n" +
      `${categoryRows}\n\n${details}\n`
    );
  }

  private buildPrompt(): string {
    return (
      "# AI debugging prompt\n\n" +
      "Review these Playwright failures. Group cascading failures, identify the most likely root cause, and propose the smallest maintainable fix. " +
      "Prefer accessible locators, reusable page-object methods, explicit state isolation, and web-first assertions. " +
      "Do not recommend fixed sleeps. Distinguish application defects from test defects and environment instability.\n\n" +
      this.buildSummary()
    );
  }
}
