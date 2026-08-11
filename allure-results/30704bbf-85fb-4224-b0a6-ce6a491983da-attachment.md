# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_110 - Admin should search the Leave List using a valid date range @positive @search @regression
- Location: tests\Leave\leave.spec.ts:60:6

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('From Date', { exact: true }) }).locator('input')
Expected: "2026-07-12"
Received: "12-07-2026"
Timeout:  10000ms

Call log:
  - Expect "toHaveValue" with timeout 10000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('From Date', { exact: true }) }).locator('input')
    23 × locator resolved to <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="dd-mm-yyyy" class="oxd-input oxd-input--active"/>
       - unexpected value "12-07-2026"

```

```yaml
- textbox "dd-mm-yyyy": 12-07-2026
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import { test } from "../../fixtures/baseTest";
  3   | import loginData from "../../test-data/login.data.json";
  4   | import leaveData from "../../test-data/leave.data.json"
  5   | 
  6   | const dateFromOffset = (
  7   |   daysOffset: number
  8   | ): string => {
  9   |   const date = new Date();
  10  | 
  11  |   date.setDate(
  12  |     date.getDate() + daysOffset
  13  |   );
  14  | 
  15  |   const year = date.getFullYear();
  16  | 
  17  |   const month = String(
  18  |     date.getMonth() + 1
  19  |   ).padStart(2, '0');
  20  | 
  21  |   const day = String(
  22  |     date.getDate()
  23  |   ).padStart(2, '0');
  24  | 
  25  |   return `${year}-${month}-${day}`;
  26  | };
  27  | 
  28  | const unique = () => `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  29  | const employeeFrom = (
  30  |   d: { firstNamePrefix: string; middleName: string; lastName: string },
  31  |   value = unique(),
  32  | ) => ({
  33  |   firstName: `${d.firstNamePrefix}${value}`,
  34  |   middleName: d.middleName,
  35  |   lastName: d.lastName,
  36  | });
  37  | 
  38  | test.describe("Leaves - leaves for  Users", () => {
  39  |   test.beforeEach(async ({ loginPage }) => {
  40  |     await loginPage.visitPage();
  41  |     await loginPage.login(
  42  |       loginData.validAdmin.username,
  43  |       loginData.validAdmin.password,
  44  |     );
  45  |     await loginPage.verifyLoginSuccessful();
  46  |   });
  47  | 
  48  | test('TC_LEAVE_109 - Admin should navigate to the Leave List page @smoke @navigation @regression',
  49  |   async ({ page ,loginPage, navigationPage, leavepage }) => {
  50  |    
  51  |     // Click Leave in the main navigation.
  52  |        await  navigationPage.gotoLeave();
  53  |     // Verify the Leave List URL and heading and inputs.
  54  |       await expect(page).toHaveURL( /leave\/viewLeaveList/);
  55  |       await leavepage.verifyLeaveListPage();
  56  |   }
  57  | );
  58  | 
  59  | 
  60  | test.only( 'TC_LEAVE_110 - Admin should search the Leave List using a valid date range @positive @search @regression',
  61  |   async ({ page, navigationPage, leavepage }) => {
  62  | 
  63  |     const fromDate = dateFromOffset(
  64  |       leaveData.validDateRange
  65  |         .fromDaysOffset
  66  |     );
  67  | 
  68  |     const toDate = dateFromOffset(
  69  |       leaveData.validDateRange
  70  |         .toDaysOffset
  71  |     );
  72  |     
  73  |     // Navigate to Leave → Leave List.
  74  |        await navigationPage.gotoLeave();
  75  |        
  76  |         await leavepage.fromDateInput.fill(fromDate);
  77  |         await leavepage.toDateInput.fill(toDate);
> 78  |         await expect(leavepage.fromDateInput).toHaveValue(fromDate);
      |                                               ^ Error: expect(locator).toHaveValue(expected) failed
  79  |         await expect(leavepage.toDateInput).toHaveValue(toDate);
  80  |     // Click Search.
  81  |        await leavepage.searchButton.click();
  82  |     // Wait for the Leave List request and loading spinner.
  83  |         await expect(leavepage.loadingSpinner).toBeHidden();
  84  |     // Verify the entered date values remain displayed.
  85  |       await expect(
  86  |       leavepage.fromDateInput
  87  |     ).toHaveValue(fromDate);
  88  | 
  89  |     await expect(
  90  |       leavepage.toDateInput
  91  |     ).toHaveValue(toDate);
  92  | 
  93  |     await expect(
  94  |       leavepage.leaveRows
  95  |         .first()
  96  |         .or(leavepage.noRecordsFound)
  97  |     ).toBeVisible({
  98  |       timeout: 15_000,
  99  |     });
  100 | 
  101 |     await expect(
  102 |       leavepage.dateValidationMessages
  103 |     ).toHaveCount(0);
  104 |   }
  105 | );
  106 | 
  107 | test.only( 'TC_LEAVE_111 - Validation should appear when From Date is later than To Date @negative @validation @regression',
  108 |   async ({page, navigationPage, leavepage }) => {
  109 | 
  110 |     // Generate From Date using invalidDateRange.fromDaysOffset.
  111 |       const fromDate = dateFromOffset(
  112 |       leaveData.invalidDateRange
  113 |         .fromDaysOffset
  114 |     );
  115 | 
  116 | 
  117 |      // Generate To Date using invalidDateRange.toDaysOffset.
  118 | 
  119 |     const toDate = dateFromOffset(
  120 |       leaveData.invalidDateRange
  121 |         .toDaysOffset
  122 |     );
  123 |     
  124 |     // Navigate to Leave → Leave List.
  125 |       await navigationPage.gotoLeave();
  126 |     // Enter the future From Date.
  127 |        await leavepage.fromDateInput.fill(fromDate);
  128 |     // Enter the earlier To Date.
  129 |        await leavepage.toDateInput.fill(toDate);
  130 |     // Click Search.
  131 |      await leavepage.searchButton.click();
  132 |     // Verify the date-range validation appears.
  133 |          await expect(
  134 |       leavepage.toDateValidation
  135 |     ).toBeVisible();
  136 |     // Verify the validation message says:
  137 |     // “To date should be after from date”.
  138 |      await expect(
  139 |       leavepage.toDateValidation
  140 |     ).toHaveText(
  141 |       'To date should be after from date'
  142 |     );
  143 | 
  144 |     // Search should be blocked.
  145 |     await expect(page).toHaveURL(
  146 |       /leave\/viewLeaveList/
  147 |     );
  148 | 
  149 |     // Verify no search results are loaded.
  150 | 
  151 |         await expect(leavepage.noRecordsFound).toBeVisible()
  152 |     // Verify the entered dates remain unchanged.
  153 |      await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  154 |       await expect(leavepage.toDateInput).toHaveValue(toDate);
  155 | 
  156 |   }
  157 | );
  158 | });
```