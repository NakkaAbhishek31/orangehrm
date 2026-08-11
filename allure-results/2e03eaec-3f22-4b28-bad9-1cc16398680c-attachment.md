# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_031 - Password mismatch validation should appear @negative @validation @account @regression
- Location: tests\PIM\pim-employee.spec.ts:130:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: /Add Employee/i })

```

```
Error: browserContext.close: Target page, context or browser has been closed
```