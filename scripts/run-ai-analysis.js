const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const projectRoot = path.resolve(__dirname, "..");
const lastRunFile = path.join(projectRoot, "test-results", ".last-run.json");

if (!fs.existsSync(lastRunFile)) {
  console.log("No previous Playwright run was found.");
  console.log("Run `npm test` first. The AI report will be generated automatically.");
  process.exit(0);
}

let lastRun;
try {
  lastRun = JSON.parse(fs.readFileSync(lastRunFile, "utf8"));
} catch (error) {
  console.error(`Could not read ${lastRunFile}: ${error.message}`);
  process.exit(1);
}

if (!Array.isArray(lastRun.failedTests) || lastRun.failedTests.length === 0) {
  console.log("The previous Playwright run has no failed tests to rerun.");
  console.log("Your current AI failure report contains no failures.");
  process.exit(0);
}

console.log(`Rerunning ${lastRun.failedTests.length} previously failed test(s)...`);

const playwrightCli = path.join(
  projectRoot,
  "node_modules",
  "@playwright",
  "test",
  "cli.js",
);
const result = spawnSync(process.execPath, [playwrightCli, "test", "--last-failed"], {
  cwd: projectRoot,
  env: process.env,
  stdio: "inherit",
});

if (result.error) {
  console.error(`Unable to start Playwright: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status ?? 1);
