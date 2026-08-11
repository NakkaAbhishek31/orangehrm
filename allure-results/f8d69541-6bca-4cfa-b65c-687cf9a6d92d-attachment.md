# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_051 - Password mismatch validation should appear @negative @validation @regression
- Location: tests\Admin\admin-users.spec.ts:238:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: /Add/i })

```

```
Error: browserContext.close: Target page, context or browser has been closed
```