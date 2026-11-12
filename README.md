# OrangeHRM Playwright Automation

Production-style UI and REST API automation for OrangeHRM using Playwright, TypeScript, shared authentication, parallel execution, Jenkins, HTML reports, and Allure.

The framework also includes an AI-ready failure triage reporter. It performs local, deterministic failure classification and prepares a reviewable debugging prompt without sending test data to an external service.

## Project documentation

See [work completed so far](docs/PROJECT_DOCUMENTATION.md) for the platforms and tools used, basic and advanced concepts, module coverage, Jenkins/Allure integration, commands, and current limitations. The [complete test inventory](docs/TEST_CASE_INVENTORY.md) lists 533 discovered scenarios plus one authentication setup entry. Discovery does not verify passing execution.

## Structure

```text
components/       Reusable OrangeHRM UI controls
config/           Environment and runtime configuration
fixtures/         Typed Playwright fixtures
pages/            Page objects and page workflows
scripts/          Repository maintenance scripts
support/          Reusable API assertions and test infrastructure
test-data/        Scenario data without credentials
tests/            Module specs, API specs, and auth setup
utils/            Routes and stateless data/date helpers
```

## Setup

```powershell
npm ci
npm run install:chromium
```

Copy the values from `.env.example` into the CI environment or local shell. Credentials are read from `ORANGEHRM_ADMIN_USERNAME` and `ORANGEHRM_ADMIN_PASSWORD`; generated authentication state is ignored by Git.

## Run tests with Docker

Install and start Docker Desktop, then run these commands from the repository root:

```powershell
docker compose build
docker compose run --rm playwright
```

The first command builds the Playwright test image. The second runs the tests in a container and saves the HTML report, test results, Allure results, and AI analysis under the corresponding folders in the repository. Docker Compose uses the public demo URL and demo credentials by default. To use another OrangeHRM instance, create a local `.env` file from `.env.example` and set its URL and credentials; do not commit real credentials.

## Run tests

```powershell
npm test
npm run test:smoke
npm run test:regression
npm run test:api
npm run test:dashboard
npm run test:directory
npm run test:claim
```

The worker count defaults to one because the public OrangeHRM demo uses shared data. For an isolated test environment, choose a worker count per run:

```powershell
npx playwright test --workers=6
```

Or set `PLAYWRIGHT_WORKERS` for the current PowerShell session before running the usual command:

```powershell
$env:PLAYWRIGHT_WORKERS = "7"
npm test
```

Any positive worker count is accepted by the Playwright configuration, including in CI. Jenkins accepts `WORKERS` from 1 to 15 and honors that value for every target URL. Parallel execution against the shared public demo logs a warning because concurrent data changes can cause conflicts; an isolated instance is recommended.

To run two workers in Jenkins, select `WORKERS=2` and leave `SPLIT_TESTS` unchecked. To run two shards with two workers each, enable `SPLIT_TESTS`, choose `SHARD_COUNT=2`, and select `WORKERS=2`. Each shard runs in a separate workspace on the current agent, without requesting extra Jenkins executors. This allows up to four concurrent test workers and requires sufficient CPU and memory on that agent. With `fullyParallel: false`, tests are distributed by file; selecting a single file may not use every worker or shard.

## Reports

```powershell
npm run report
npm run allure:generate
npm run allure:open
npm run clean:reports
```

Allure reports use the Node.js-based Allure 3 CLI installed by `npm ci`. The existing `allure-playwright` reporter writes compatible results to `allure-results`.

Jenkins generates Allure reports through `npm run allure:generate`, using the project-local CLI installed by `npm ci`. This avoids the Windows plugin error `Cannot run program allure.cmd`. Single runs and sharded runs archive `allure-report/**` under Build > Artifacts. Download the report folder and run `npm run allure:open` locally to view it. This pipeline does not add the Allure plugin sidebar or trend view.

See [automation standards](docs/TESTING_STANDARDS.md) before adding pages, reusable components, data, or tests.

## AI-ready failure analysis

The custom reporter in `support/ai/FailureAnalysisReporter.ts` can write the following ignored artifacts to `ai-results/` once registered in `playwright.config.ts`. It is not currently in the active reporter list:

- `failure-summary.md` — categorized failures with source locations and errors.
- `failures.json` — machine-readable failure records for CI or dashboards.
- `ai-debug-prompt.md` — a ready-to-review prompt for root-cause analysis.

The reporter never calls an external AI service and does not require an API key. Review a generated prompt before sharing it with any model. The following command reruns only Playwright's last failures; producing the analysis additionally requires registering the custom reporter:

```powershell
npm run test:ai-analysis
```

Run `npm test` first. When the previous run has no failures—or its results were cleaned—the command exits successfully and explains that there is nothing to rerun.
