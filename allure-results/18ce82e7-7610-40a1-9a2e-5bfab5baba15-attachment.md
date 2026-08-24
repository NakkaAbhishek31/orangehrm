# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance\performance.spec.ts >> Performance - Employee Reviews >> TC_PERFORMANCE_201 - Admin should navigate to the Employee Reviews page @smoke @navigation @regression
- Location: tests\Performance\performance.spec.ts:19:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('form').locator('label').filter({ hasText: 'Include Past Employees' })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('form').locator('label').filter({ hasText: 'Include Past Employees' })

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Performance" [level=6]
  - heading "/ Manage Reviews" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Arjun Rao
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configure 
      - listitem: Manage Reviews 
      - listitem:
        - link "My Trackers":
          - /url: "#"
      - listitem:
        - link "Employee Trackers":
          - /url: "#"
      - button ""
- heading "Employee Reviews" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select --  Include Current Employees Only  Review Status -- Select --  From Date
- textbox "mm-dd-yyyy": 01-01-2026
- text:  To Date
- textbox "mm-dd-yyyy": 12-31-2026
- text: 
- separator
- button "Reset"
- button "Search"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row "Employee  Job Title Sub Unit Review Period  Due Date  Review Status  Actions":
      - columnheader "Employee "
      - columnheader "Job Title"
      - columnheader "Sub Unit"
      - columnheader "Review Period "
      - columnheader "Due Date "
      - columnheader "Review Status "
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import { test } from "../../fixtures/baseTest";
  3   | import loginData from "../../test-data/login.data.json";
  4   | import performanceData from "../../test-data/performance.data.json"
  5   | 
  6   | test.describe("Performance - Employee Reviews", () => {
  7   |   test.beforeEach(async ({ loginPage }) => {
  8   |     await loginPage.visitPage();
  9   | 
  10  |     await loginPage.login(
  11  |       loginData.validAdmin.username,
  12  |       loginData.validAdmin.password,
  13  |     );
  14  | 
  15  |     await loginPage.verifyLoginSuccessful();
  16  |   });
  17  | 
  18  | 
  19  | test('TC_PERFORMANCE_201 - Admin should navigate to the Employee Reviews page @smoke @navigation @regression',
  20  |   async ({
  21  |     page,
  22  |     navigationPage,
  23  |     performancePage,
  24  |   }) => {
  25  |     const data =
  26  |       performanceData.TC_PERFORMANCE_201;
  27  | 
  28  |     // Navigate to Performance.
  29  |     await navigationPage.gotoPerformance();
  30  | 
  31  |     // Navigate to Manage Reviews → Employee Reviews.
  32  |     await performancePage.gotoEmployeeReviews();
  33  | 
  34  |     // Verify URL and heading.
  35  |     await expect(page).toHaveURL(
  36  |       new RegExp(`${data.expectedUrlPath}$`)
  37  |     );
  38  | 
  39  |     await expect(
  40  |       performancePage.employeeReviewsHeading
  41  |     ).toHaveText(data.pageHeading);
  42  | 
  43  |     // Verify search filters.
  44  |     await expect(
  45  |       performancePage.employeeNameInput
  46  |     ).toBeVisible();
  47  | 
  48  |     await expect(
  49  |       performancePage.jobTitleDropdown
  50  |     ).toBeVisible();
  51  | 
  52  |     await expect(
  53  |       performancePage.subUnitDropdown
  54  |     ).toBeVisible();
  55  | 
  56  |     await expect(
  57  |       performancePage.includePastEmployeesLabel
> 58  |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  59  | 
  60  |     await expect(
  61  |       performancePage.reviewStatusDropdown
  62  |     ).toBeVisible();
  63  | 
  64  |     await expect(
  65  |       performancePage.fromDateInput
  66  |     ).toBeVisible();
  67  | 
  68  |     await expect(
  69  |       performancePage.toDateInput
  70  |     ).toBeVisible();
  71  | 
  72  |     // Verify action buttons.
  73  |     await expect(
  74  |       performancePage.searchButton
  75  |     ).toBeVisible();
  76  | 
  77  |     await expect(
  78  |       performancePage.resetButton
  79  |     ).toBeVisible();
  80  | 
  81  |     await expect(
  82  |       performancePage.loadingSpinner
  83  |     ).toBeHidden();
  84  | 
  85  |     // The shared demo may contain reviews or
  86  |     // display No Records Found.
  87  |     await expect(
  88  |       performancePage.reviewRows
  89  |         .first()
  90  |         .or(performancePage.noRecordsFound)
  91  |     ).toBeVisible({
  92  |       timeout: 15_000,
  93  |     });
  94  |   }
  95  | );
  96  | 
  97  | test('TC_PERFORMANCE_202 - Admin should search reviews without an employee-name filter @positive @search @regression',
  98  |   async ({
  99  |     page,
  100 |     navigationPage,
  101 |     performancePage,
  102 |   }) => {
  103 |     const data = performanceData.TC_PERFORMANCE_202;
  104 | 
  105 |     await navigationPage.gotoPerformance();
  106 | 
  107 |     await performancePage.gotoEmployeeReviews();
  108 | 
  109 |     // Leave Employee Name empty.
  110 |     await performancePage.employeeNameInput.fill('');
  111 | 
  112 |     await performancePage.searchButton.click();
  113 | 
  114 |     await expect(
  115 |       performancePage.employeeNameInput
  116 |     ).toHaveValue('');
  117 | 
  118 |     await expect(page).toHaveURL(
  119 |       new RegExp(`${data.expectedUrlPath}$`)
  120 |     );
  121 | 
  122 |     await expect(
  123 |       performancePage.loadingSpinner
  124 |     ).toBeHidden({
  125 |       timeout: 30_000,
  126 |     });
  127 | 
  128 |     await expect(
  129 |       performancePage.reviewRows
  130 |         .first()
  131 |         .or(performancePage.noRecordsFound.first())
  132 |     ).toBeVisible({
  133 |       timeout: 20_000,
  134 |     });
  135 |   }
  136 | );
  137 | 
  138 | test('TC_PERFORMANCE_203 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression',
  139 |   async ({
  140 |     page,
  141 |     navigationPage,
  142 |     performancePage,
  143 |   }) => {
  144 |     const data =
  145 |       performanceData.TC_PERFORMANCE_203;
  146 | 
  147 |     const invalidEmployeeName =
  148 |       `${data.employeeNamePrefix}${Date.now()}`;
  149 | 
  150 |     await navigationPage.gotoPerformance();
  151 | 
  152 |     await performancePage.gotoEmployeeReviews();
  153 | 
  154 |     await performancePage.employeeNameInput.fill(
  155 |       invalidEmployeeName
  156 |     );
  157 | 
  158 |     await expect(
```