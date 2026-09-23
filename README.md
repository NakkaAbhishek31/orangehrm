# OrangeHRM Playwright Automation

Production-style UI and REST API automation for OrangeHRM using Playwright, TypeScript, shared authentication, parallel execution, Jenkins, HTML reports, and Allure.

The framework also includes an AI-ready failure triage reporter. It performs local, deterministic failure classification and prepares a reviewable debugging prompt without sending test data to an external service.

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

The worker count defaults to six and can be overridden with `PLAYWRIGHT_WORKERS`. Jenkins passes its `WORKERS` parameter to Playwright.

## Reports

```powershell
npm run report
npm run clean:reports
```

See [automation standards](docs/TESTING_STANDARDS.md) before adding pages, reusable components, data, or tests.

## AI-ready failure analysis

Every Playwright run writes the following ignored artifacts to `ai-results/`:

- `failure-summary.md` — categorized failures with source locations and errors.
- `failures.json` — machine-readable failure records for CI or dashboards.
- `ai-debug-prompt.md` — a ready-to-review prompt for root-cause analysis.

The reporter never calls an external AI service and does not require an API key. Review the generated prompt before sharing it with any model. To rerun only Playwright's last failures and regenerate the analysis:

```powershell
npm run test:ai-analysis
```

Run `npm test` first. When the previous run has no failures—or its results were cleaned—the command exits successfully and explains that there is nothing to rerun.
