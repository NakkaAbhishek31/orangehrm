# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_PIM_069 - Admin should find a newly created employee by name @positive @search @regression
- Location: tests\Admin\admin-users.spec.ts:2276:6

# Error details

```
TimeoutError: locator.click: Timeout 25000ms exceeded.
Call log:
  - waiting for getByText('PIM', { exact: true })
    - locator resolved to <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">PIM</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

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
> 19 |         await this.PIMLink.click();
     |                            ^ TimeoutError: locator.click: Timeout 25000ms exceeded.
  20 |     }
  21 | 
  22 |     async gotoAdmin():Promise<void>
  23 |     {
  24 |      await this.adminLink.click();
  25 |      await this.page.waitForURL(
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