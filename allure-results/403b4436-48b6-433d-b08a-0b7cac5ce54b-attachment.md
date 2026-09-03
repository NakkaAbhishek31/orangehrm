# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_154 - Admin should cancel candidate deletion @negative @cancel @delete @regression
- Location: tests\Recruitment\recruitment.spec.ts:1450:7

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
  1   | import { Locator, Page, expect } from "@playwright/test";
  2   | 
  3   | export class NavigationPage {
  4   |   readonly page: Page;
  5   |   readonly PIMLink: Locator;
  6   |   readonly adminLink: Locator;
  7   |   readonly recruitmentLink:Locator;
  8   |   readonly timeMenu: Locator;
  9   |   readonly  performance:Locator;
  10  | 
  11  |   constructor(page: Page) {
  12  |     this.page = page;
  13  |     this.PIMLink = page.getByRole("link", { name: "PIM", exact: true });
  14  |     this.adminLink = page.getByRole("link", { name: "Admin", exact: true });
  15  |     this.recruitmentLink=page.getByRole('link', { name: 'Recruitment' });
  16  |     this.timeMenu = page.getByRole(
  17  |   'link',
  18  |   {
  19  |     name: 'Time',
  20  |     exact: true,
  21  |   }
  22  | );
  23  | this.performance=page.getByRole('link', { name: 'Performance' });
  24  | 
  25  |   }
  26  | 
  27  |   async gotoPIM(): Promise<void> {
  28  |     await this.PIMLink.click();
  29  |     await this.page.waitForURL(/pim\/viewEmployeeList/, {
  30  |       timeout: 20_000,
  31  |     });
  32  |   }
  33  | 
  34  |   async gotoAdmin(): Promise<void> {
  35  |     await this.adminLink.click();
  36  |     await this.page.waitForURL(/admin\/viewSystemUsers/, {
  37  |       timeout: 20_000,
  38  |     });
  39  |   }
  40  | 
  41  |   async gotoLeave(): Promise<void> {
  42  |   await this.page.getByRole('link', {
  43  |     name: 'Leave',
  44  |     exact: true,
  45  |   }).click();
  46  | 
  47  |   await expect(this.page).toHaveURL(
  48  |     /leave\/viewLeaveList/
  49  |   );
  50  | }
  51  | 
  52  |   async gotoRecruitment(): Promise<void> {
  53  |     const href = await this.recruitmentLink.getAttribute('href');
  54  |     const recruitmentUrl = href
  55  |       ? new URL(href, this.page.url()).toString()
  56  |       : null;
  57  | 
> 58  |     await this.recruitmentLink.click();
      |                                ^ TimeoutError: locator.click: Timeout 70000ms exceeded.
  59  | 
  60  |     try {
  61  |       await expect(this.page).toHaveURL(
  62  |         /recruitment\/viewCandidates/
  63  |       );
  64  |     } catch (error) {
  65  |       if (!recruitmentUrl) {
  66  |         throw error;
  67  |       }
  68  | 
  69  |       await this.page.goto(recruitmentUrl, {
  70  |         waitUntil: 'domcontentloaded',
  71  |       });
  72  | 
  73  |       await expect(this.page).toHaveURL(
  74  |         /recruitment\/viewCandidates/
  75  |       );
  76  |     }
  77  | }
  78  | 
  79  | async gotoTime(): Promise<void> {
  80  |   await this.timeMenu.click();
  81  | 
  82  |   await this.page.waitForURL(
  83  |     /\/time\//,
  84  |     {
  85  |       timeout: 30_000,
  86  |     }
  87  |   );
  88  | }
  89  | 
  90  | async gotoPerformance(): Promise<void> {
  91  |   await this.performance.click();
  92  | 
  93  |   await this.page.waitForURL(
  94  |     /\/performance\//,
  95  |     {
  96  |       timeout: 30_000,
  97  |     }
  98  |   );
  99  | }
  100 | 
  101 | }
  102 | 
```