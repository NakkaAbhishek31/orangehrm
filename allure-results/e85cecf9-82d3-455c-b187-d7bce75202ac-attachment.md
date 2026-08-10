# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_009 - Invalid profile picture format should be rejected @negative @upload @validation
- Location: tests\PIM\pim-employee.spec.ts:66:7

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('input[type="file"]')
Expected: attached
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 10000ms
  - waiting for locator('input[type="file"]')
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

```
Error: browserContext.close: Target page, context or browser has been closed
```