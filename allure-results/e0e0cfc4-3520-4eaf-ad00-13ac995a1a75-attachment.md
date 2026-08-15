# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_110 - Admin should search the Leave List using a valid date range @positive @search @regression
- Location: tests\Leave\leave.spec.ts:53:7

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'Username' })

```

```
Error: browserContext.close: Target page, context or browser has been closed
```