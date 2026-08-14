# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_134 - Admin should search Candidates using a valid application date range @positive @search @regression
- Location: tests\Recruitment\recruitment.spec.ts:74:8

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByRole('textbox', { name: 'From', exact: true })
Expected: "2026-14-08"
Received: "2026-15-07"
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for getByRole('textbox', { name: 'From', exact: true })
    42 × locator resolved to <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="From" class="oxd-input oxd-input--active"/>
       - unexpected value "2026-15-07"

```

```yaml
- textbox "From": 2026-15-07
```

# Test source

```ts
  4   | import recruitmentData from "../../test-data/recruitment.data.json";
  5   | 
  6   | const dateFromOffset = (daysOffset: number): string => {
  7   |   const date = new Date();
  8   | 
  9   |   date.setDate(date.getDate() + daysOffset);
  10  | 
  11  |   const year = date.getFullYear();
  12  | 
  13  |   const day = String(date.getDate()).padStart(2, "0");
  14  | 
  15  |   const month = String(date.getMonth() + 1).padStart(2, "0");
  16  | 
  17  |   // OrangeHRM format: yyyy-dd-mm
  18  |   return `${year}-${day}-${month}`;
  19  | };
  20  | 
  21  | test.describe("PIM Employee List", () => {
  22  |   test.beforeEach(async ({ loginPage }) => {
  23  |     await loginPage.visitPage();
  24  |     await loginPage.login(
  25  |       loginData.validAdmin.username,
  26  |       loginData.validAdmin.password,
  27  |     );
  28  |     await loginPage.verifyLoginSuccessful();
  29  |   });
  30  | 
  31  |   test.only("TC_RECRUITMENT_133 - Admin should navigate to the Candidates page @smoke @navigation @regression", async ({
  32  |     page,
  33  |     navigationPage,
  34  |     recruitmentPage,
  35  |   }) => {
  36  |     const data = recruitmentData.TC_RECRUITMENT_133;
  37  |     // Click Recruitment in the main navigation.
  38  |     await navigationPage.gotoRecruitment();
  39  |     // Navigate to Candidates.
  40  |     await recruitmentPage.navigateToCandidate();
  41  |     // Verify the Candidates URL.
  42  |     await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  43  |     // Verify the Candidates heading.
  44  | 
  45  |     await expect(recruitmentPage.candidatePageHeading).toHaveText(
  46  |       data.pageHeading,
  47  |     );
  48  |     // Verify Job Title filter.
  49  |     await expect(recruitmentPage.jobTitleDropdown).toBeVisible();
  50  |     // Verify Vacancy filter.
  51  |     await expect(recruitmentPage.vacancyDropdown).toBeVisible();
  52  | 
  53  |     // Verify Hiring Manager filter.
  54  |     await expect(recruitmentPage.hiringManagerDropdown).toBeVisible();
  55  | 
  56  |     // Verify Candidate Status filter.
  57  |     await expect(recruitmentPage.candidateStatusDropdown).toBeVisible();
  58  | 
  59  |     // Verify Candidate Name input.
  60  |     await expect(recruitmentPage.candidateNameInput).toBeVisible();
  61  | 
  62  |     // Verify From Date and To Date.
  63  |     await expect(recruitmentPage.fromDateInput).toBeVisible();
  64  |     await expect(recruitmentPage.toDateInput).toBeVisible();
  65  |     // Verify Search and Reset buttons.
  66  |     await expect(recruitmentPage.restButton).toBeVisible();
  67  |     await expect(recruitmentPage.searchButton).toBeVisible();
  68  | 
  69  |     // Verify the Candidates results table.
  70  |     expect(await recruitmentPage.candidateRows.count()).toBeGreaterThan(0);
  71  |     await expect(recruitmentPage.candidateRows.first()).toBeVisible();
  72  |   });
  73  | 
  74  |   test.only("TC_RECRUITMENT_134 - Admin should search Candidates using a valid application date range @positive @search @regression", async ({
  75  |     navigationPage,
  76  |     recruitmentPage,
  77  |   }) => {
  78  |     // Read the date offsets from recruitment JSON data.
  79  |     const data = recruitmentData.TC_RECRUITMENT_134;
  80  |     // Generate From Date and To Date dynamically.
  81  |     const fromDate = dateFromOffset(data.fromDaysOffset);
  82  | 
  83  |     const toDate = dateFromOffset(data.toDaysOffset);
  84  | 
  85  |     // Navigate to Recruitment → Candidates.
  86  |     await navigationPage.gotoRecruitment();
  87  |     await recruitmentPage.navigateToCandidate();
  88  |     // Wait until both application date fields are visible.
  89  |     await expect(recruitmentPage.fromDateInput).toBeVisible();
  90  |     await expect(recruitmentPage.toDateInput).toBeVisible();
  91  |     // Fill the From Date.
  92  |     // Fill the To Date.
  93  |     await recruitmentPage.fromDateInput.fill(fromDate);
  94  |     await recruitmentPage.toDateInput.fill(toDate);
  95  |     // Click Search.
  96  |     await recruitmentPage.searchButton.click();
  97  | 
  98  |     // Wait for the loading spinner to disappear.
  99  |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  100 |       timeout: 20_000,
  101 |     });
  102 |     // Verify both entered date values remain displayed.
  103 |       await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);
> 104 |       await expect(recruitmentPage.fromDateInput).toHaveValue(toDate);
      |                                                   ^ Error: expect(locator).toHaveValue(expected) failed
  105 | 
  106 |     await expect(
  107 |   recruitmentPage.candidateRows
  108 |     .first()
  109 |     .or(recruitmentPage.noRecordsFound)
  110 | ).toBeVisible({
  111 |   timeout: 15_000,
  112 | });
  113 | 
  114 |     // Verify no date-validation messages appear.
  115 |     await expect(
  116 |   recruitmentPage.dateValidationMessages
  117 | ).toHaveCount(0);
  118 | 
  119 |     // Reset the filters.
  120 |      await recruitmentPage.restButton.click();
  121 |   });
  122 | });
  123 | 
```