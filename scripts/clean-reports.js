const fs = require("node:fs");
const path = require("node:path");

const reportDirectories = [
  "allure-results",
  "allure-report",
  "playwright-report",
  "test-results",
  "blob-report",
];

for (const directory of reportDirectories) {
  const target = path.resolve(process.cwd(), directory);
  fs.rmSync(target, { recursive: true, force: true });
  process.stdout.write(`Removed ${directory}\n`);
}
