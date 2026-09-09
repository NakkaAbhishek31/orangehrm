# Automation standards

## Naming

- Page objects: `PascalCasePage.ts` and `PascalCasePage`.
- Shared UI controls: `PascalCase.ts` under `components/`.
- Specs: `kebab-case.spec.ts` under `tests/<Module>/`.
- Test data: `kebab-case.data.json` under `test-data/`.
- Test IDs: `TC_<MODULE>_<NUMBER>`.
- Tests include classification tags such as `@smoke`, `@positive`, `@negative`, and `@regression`.

## Test design

- Keep assertions in specs and reusable interactions in page objects/components.
- Prefer role, label, placeholder, or stable application selectors over CSS structure.
- Never use fixed sleeps. Wait for a URL, visible state, API response, or explicit list state.
- Generate unique data for parallel mutation tests.
- A test owns and cleans up the records it creates.
- Tests must run independently and must not rely on execution order.

## Project boundaries

- `components/`: reusable controls shared by multiple pages.
- `config/`: environment parsing and runtime configuration.
- `fixtures/`: dependency injection for page objects and services.
- `pages/`: page-specific selectors and workflows.
- `support/`: reusable API assertions and test infrastructure.
- `test-data/`: immutable scenario data; no secrets.
- `tests/`: executable UI, API, and setup specs grouped by module.
- `utils/`: stateless helpers, routes, and data builders.

## Credentials and environments

Use environment variables shown in `.env.example`. Never commit real credentials or generated authentication state. CI should inject secrets through its credential store.
