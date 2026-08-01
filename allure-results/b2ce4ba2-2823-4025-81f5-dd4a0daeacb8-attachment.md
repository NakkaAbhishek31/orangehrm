# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_007 - Admin should delete an employee successfully @positive @regression
- Location: tests\PIM\pim-employee-list.spec.ts:132:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('PIM', { exact: true })

```

# Test source

```ts
  1  | import{Locator, Page,expect} from "@playwright/test"
  2  | 
  3  | export class NavigationPage{
  4  | 
  5  |     readonly page:Page;
  6  |     readonly PIMLink:Locator;
  7  | 
  8  | 
  9  |     constructor(page:Page)
  10 |     {
  11 |         this.page=page;
  12 |         this.PIMLink=page.getByText('PIM', { exact: true })
  13 |     }
  14 | 
  15 |     async gotoPIM():Promise<void>
  16 |     {
> 17 |         await this.PIMLink.click();
     |                            ^ Error: locator.click: Test ended.
  18 |     }
  19 | 
  20 | 
  21 | 
  22 | }
```