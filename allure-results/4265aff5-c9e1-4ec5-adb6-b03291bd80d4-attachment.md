# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_147 - Admin should add a new candidate successfully @positive @create @regression
- Location: tests\Recruitment\recruitment.spec.ts:763:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
TimeoutError: locator.click: Timeout 70000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Recruitment' })
    - locator resolved to <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/recruitment/viewRecruitmentModule">…</a>
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
  1  | import { Locator, Page, expect } from "@playwright/test";
  2  | 
  3  | export class NavigationPage {
  4  |   readonly page: Page;
  5  |   readonly PIMLink: Locator;
  6  |   readonly adminLink: Locator;
  7  |   readonly recruitmentLink:Locator;
  8  | 
  9  |   constructor(page: Page) {
  10 |     this.page = page;
  11 |     this.PIMLink = page.getByRole("link", { name: "PIM", exact: true });
  12 |     this.adminLink = page.getByRole("link", { name: "Admin", exact: true });
  13 |     this.recruitmentLink=page.getByRole('link', { name: 'Recruitment' });
  14 |   }
  15 | 
  16 |   async gotoPIM(): Promise<void> {
  17 |     await this.PIMLink.click();
  18 |     await this.page.waitForURL(/pim\/viewEmployeeList/, {
  19 |       timeout: 20_000,
  20 |     });
  21 |   }
  22 | 
  23 |   async gotoAdmin(): Promise<void> {
  24 |     await this.adminLink.click();
  25 |     await this.page.waitForURL(/admin\/viewSystemUsers/, {
  26 |       timeout: 20_000,
  27 |     });
  28 |   }
  29 | 
  30 |   async gotoLeave(): Promise<void> {
  31 |   await this.page.getByRole('link', {
  32 |     name: 'Leave',
  33 |     exact: true,
  34 |   }).click();
  35 | 
  36 |   await expect(this.page).toHaveURL(
  37 |     /leave\/viewLeaveList/
  38 |   );
  39 | }
  40 | 
  41 |   async gotoRecruitment(): Promise<void> {
  42 |     const href = await this.recruitmentLink.getAttribute('href');
  43 |     const recruitmentUrl = href
  44 |       ? new URL(href, this.page.url()).toString()
  45 |       : null;
  46 | 
> 47 |     await this.recruitmentLink.click();
     |                                ^ TimeoutError: locator.click: Timeout 70000ms exceeded.
  48 | 
  49 |     try {
  50 |       await expect(this.page).toHaveURL(
  51 |         /recruitment\/viewCandidates/
  52 |       );
  53 |     } catch (error) {
  54 |       if (!recruitmentUrl) {
  55 |         throw error;
  56 |       }
  57 | 
  58 |       await this.page.goto(recruitmentUrl, {
  59 |         waitUntil: 'domcontentloaded',
  60 |       });
  61 | 
  62 |       await expect(this.page).toHaveURL(
  63 |         /recruitment\/viewCandidates/
  64 |       );
  65 |     }
  66 | }
  67 | 
  68 | 
  69 | }
  70 | 
```