# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_173 - Required validation should appear when viewing attendance without selecting an employee @negative @validation @attendance @regression
- Location: tests\Time\time.spec.ts:338:10

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation until "load"
============================================================
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
  8  |   readonly timeMenu: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.PIMLink = page.getByRole("link", { name: "PIM", exact: true });
  13 |     this.adminLink = page.getByRole("link", { name: "Admin", exact: true });
  14 |     this.recruitmentLink=page.getByRole('link', { name: 'Recruitment' });
  15 |     this.timeMenu = page.getByRole(
  16 |   'link',
  17 |   {
  18 |     name: 'Time',
  19 |     exact: true,
  20 |   }
  21 | );
  22 |   }
  23 | 
  24 |   async gotoPIM(): Promise<void> {
  25 |     await this.PIMLink.click();
  26 |     await this.page.waitForURL(/pim\/viewEmployeeList/, {
  27 |       timeout: 20_000,
  28 |     });
  29 |   }
  30 | 
  31 |   async gotoAdmin(): Promise<void> {
  32 |     await this.adminLink.click();
  33 |     await this.page.waitForURL(/admin\/viewSystemUsers/, {
  34 |       timeout: 20_000,
  35 |     });
  36 |   }
  37 | 
  38 |   async gotoLeave(): Promise<void> {
  39 |   await this.page.getByRole('link', {
  40 |     name: 'Leave',
  41 |     exact: true,
  42 |   }).click();
  43 | 
  44 |   await expect(this.page).toHaveURL(
  45 |     /leave\/viewLeaveList/
  46 |   );
  47 | }
  48 | 
  49 |   async gotoRecruitment(): Promise<void> {
  50 |     const href = await this.recruitmentLink.getAttribute('href');
  51 |     const recruitmentUrl = href
  52 |       ? new URL(href, this.page.url()).toString()
  53 |       : null;
  54 | 
  55 |     await this.recruitmentLink.click();
  56 | 
  57 |     try {
  58 |       await expect(this.page).toHaveURL(
  59 |         /recruitment\/viewCandidates/
  60 |       );
  61 |     } catch (error) {
  62 |       if (!recruitmentUrl) {
  63 |         throw error;
  64 |       }
  65 | 
  66 |       await this.page.goto(recruitmentUrl, {
  67 |         waitUntil: 'domcontentloaded',
  68 |       });
  69 | 
  70 |       await expect(this.page).toHaveURL(
  71 |         /recruitment\/viewCandidates/
  72 |       );
  73 |     }
  74 | }
  75 | 
  76 | async gotoTime(): Promise<void> {
  77 |   await this.timeMenu.click();
  78 | 
> 79 |   await this.page.waitForURL(
     |                   ^ Error: page.waitForURL: Target page, context or browser has been closed
  80 |     /\/time\//,
  81 |     {
  82 |       timeout: 30_000,
  83 |     }
  84 |   );
  85 | }
  86 | 
  87 | 
  88 | }
  89 | 
```