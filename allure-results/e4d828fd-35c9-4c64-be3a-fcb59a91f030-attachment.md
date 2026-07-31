# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> TC_LOGIN_002 - User should see an error for invalid username @negative @regression
- Location: tests\login.spec.ts:17:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "domcontentloaded"

```

```
Error: browserContext.close: Target page, context or browser has been closed
```