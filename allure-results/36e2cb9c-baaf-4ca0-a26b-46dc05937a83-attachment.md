# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression
- Location: tests\Admin\admin-users.spec.ts:217:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Test source

```ts
  1  | import{Locator, Page,expect} from "@playwright/test"
  2  | 
  3  | export class NavigationPage{
  4  | 
  5  |     readonly page:Page;
  6  |     readonly PIMLink:Locator;
  7  |     readonly adminLink:Locator 
  8  | 
  9  | 
  10 |     constructor(page:Page)
  11 |     {
  12 |         this.page=page;
  13 |         this.PIMLink=page.getByText('PIM', { exact: true });
  14 |         this.adminLink=page.getByRole('link', { name: /Admin/i })
  15 |     }
  16 | 
  17 |     async gotoPIM():Promise<void>
  18 |     {
  19 |         await this.PIMLink.click();
  20 |     }
  21 | 
  22 |     async gotoAdmin():Promise<void>
  23 |     {
  24 |      await this.adminLink.click();
> 25 |      await this.page.waitForURL(
     |                      ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
  26 |     /admin\/viewSystemUsers/,
  27 |     {
  28 |       timeout: 20_000,
  29 |     }
  30 |      )
  31 |     }
  32 | 
  33 | 
  34 | 
  35 | }
```