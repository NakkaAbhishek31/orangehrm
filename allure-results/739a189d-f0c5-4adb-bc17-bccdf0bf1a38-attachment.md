# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_135 - Validation should appear when From Date is later than To Date @negative @validation @regression
- Location: tests\Recruitment\recruitment.spec.ts:117:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByRole('textbox', { name: 'To', exact: true }).locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]').locator('.oxd-input-field-error-message')
Expected: "To date should be after from date"
Received: "Should be a valid date in yyyy-mm-dd format"
Timeout:  20000ms

Call log:
  - Expect "toHaveText" with timeout 20000ms
  - waiting for getByRole('textbox', { name: 'To', exact: true }).locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]').locator('.oxd-input-field-error-message')
    42 × locator resolved to <span data-v-7b563373="" data-v-957b4417="" class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message">Should be a valid date in yyyy-mm-dd format</span>
       - unexpected value "Should be a valid date in yyyy-mm-dd format"

```

```yaml
- text: Should be a valid date in yyyy-mm-dd format
```

# Test source

```ts
  46  |     );
  47  |     // Verify Job Title filter.
  48  |     await expect(recruitmentPage.jobTitleDropdown).toBeVisible();
  49  |     // Verify Vacancy filter.
  50  |     await expect(recruitmentPage.vacancyDropdown).toBeVisible();
  51  | 
  52  |     // Verify Hiring Manager filter.
  53  |     await expect(recruitmentPage.hiringManagerDropdown).toBeVisible();
  54  | 
  55  |     // Verify Candidate Status filter.
  56  |     await expect(recruitmentPage.candidateStatusDropdown).toBeVisible();
  57  | 
  58  |     // Verify Candidate Name input.
  59  |     await expect(recruitmentPage.candidateNameInput).toBeVisible();
  60  | 
  61  |     // Verify From Date and To Date.
  62  |     await expect(recruitmentPage.fromDateInput).toBeVisible();
  63  |     await expect(recruitmentPage.toDateInput).toBeVisible();
  64  |     // Verify Search and Reset buttons.
  65  |     await expect(recruitmentPage.restButton).toBeVisible();
  66  |     await expect(recruitmentPage.searchButton).toBeVisible();
  67  | 
  68  |     // Verify the Candidates results table.
  69  |     await expect(recruitmentPage.candidatesTable).toBeVisible();
  70  |   });
  71  | 
  72  |   test("TC_RECRUITMENT_134 - Admin should search Candidates using a valid application date range @positive @search @regression", async ({
  73  |     navigationPage,
  74  |     recruitmentPage,
  75  |   }) => {
  76  |     // Read the date offsets from recruitment JSON data.
  77  |     const data = recruitmentData.TC_RECRUITMENT_134;
  78  |     // Generate From Date and To Date dynamically.
  79  |     const fromDate = dateFromOffset(data.fromDaysOffset);
  80  | 
  81  |     const toDate = dateFromOffset(data.toDaysOffset);
  82  | 
  83  |     // Navigate to Recruitment → Candidates.
  84  |     await navigationPage.gotoRecruitment();
  85  |     await recruitmentPage.navigateToCandidate();
  86  |     // Wait until both application date fields are visible.
  87  |     await expect(recruitmentPage.fromDateInput).toBeVisible();
  88  |     await expect(recruitmentPage.toDateInput).toBeVisible();
  89  |     // Fill the From Date.
  90  |     // Fill the To Date.
  91  |     await recruitmentPage.fromDateInput.fill(fromDate);
  92  |     await recruitmentPage.toDateInput.fill(toDate);
  93  |     // Click Search.
  94  |     await recruitmentPage.searchCandidates();
  95  | 
  96  |     // Wait for the loading spinner to disappear.
  97  |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  98  |       timeout: 20_000,
  99  |     });
  100 |     // Verify both entered date values remain displayed.
  101 |     await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);
  102 |     await expect(recruitmentPage.toDateInput).toHaveValue(toDate);
  103 | 
  104 |     await expect(
  105 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  106 |     ).toBeVisible({
  107 |       timeout: 15_000,
  108 |     });
  109 | 
  110 |     // Verify no date-validation messages appear.
  111 |     await expect(recruitmentPage.dateValidationMessages).toHaveCount(0);
  112 | 
  113 |     // Reset the filters.
  114 |     await recruitmentPage.restButton.click();
  115 |   });
  116 | 
  117 |   test("TC_RECRUITMENT_135 - Validation should appear when From Date is later than To Date @negative @validation @regression", async ({
  118 |     navigationPage,
  119 |     recruitmentPage,
  120 |   }) => {
  121 |     // Read the invalid date offsets from JSON.
  122 |     const data = recruitmentData.TC_RECRUITMENT_135;
  123 | 
  124 |     // Generate a future From Date.
  125 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  126 | 
  127 |     // Generate an earlier To Date.
  128 |     const toDate = dateFromOffset(data.toDaysOffset);
  129 |     // Navigate to Recruitment → Candidates.
  130 |     await navigationPage.gotoRecruitment();
  131 |     await recruitmentPage.navigateToCandidate();
  132 |     // Fill the From Date with the later date.
  133 |     await recruitmentPage.fromDateInput.fill(fromDate);
  134 |     // Fill the To Date with the earlier date.
  135 | 
  136 |     await recruitmentPage.toDateInput.fill(toDate);
  137 | 
  138 |     await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);
  139 | 
  140 |     await expect(recruitmentPage.toDateInput).toHaveValue(toDate);
  141 | 
  142 |     // Click Search.
  143 |     await recruitmentPage.searchCandidates();
  144 |     // Verify the To Date validation message appears.
  145 |     await expect(recruitmentPage.toDateValidation).toBeVisible();
> 146 |     await expect(recruitmentPage.toDateValidation).toHaveText(
      |                                                    ^ Error: expect(locator).toHaveText(expected) failed
  147 |       data.validationMessage,
  148 |     );
  149 | 
  150 |     // Reset the filters.
  151 |     await recruitmentPage.restButton.click();
  152 | 
  153 |     await expect(recruitmentPage.toDateValidation).toBeHidden();
  154 |   });
  155 | 
  156 |   test("TC_RECRUITMENT_136 - Admin should reset Candidate search filters @positive @filter @regression", async ({
  157 |     navigationPage,
  158 |     recruitmentPage,
  159 |   }) => {
  160 |     const data = recruitmentData.TC_RECRUITMENT_136;
  161 | 
  162 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  163 | 
  164 |     const toDate = dateFromOffset(data.toDaysOffset);
  165 | 
  166 |     await navigationPage.gotoRecruitment();
  167 |     await recruitmentPage.navigateToCandidate();
  168 | 
  169 |     // Store the default date values before changing them.
  170 |     const defaultFromDate = await recruitmentPage.fromDateInput.inputValue();
  171 | 
  172 |     const defaultToDate = await recruitmentPage.toDateInput.inputValue();
  173 | 
  174 |     await recruitmentPage.selectDropdownOption(
  175 |       recruitmentPage.jobTitleDropdown,
  176 |       data.jobTitle,
  177 |     );
  178 | 
  179 |     await recruitmentPage.selectDropdownOption(
  180 |       recruitmentPage.candidateStatusDropdown,
  181 |       data.candidateStatus,
  182 |     );
  183 | 
  184 |     await recruitmentPage.fromDateInput.fill(fromDate);
  185 | 
  186 |     await recruitmentPage.toDateInput.fill(toDate);
  187 | 
  188 |     await expect(recruitmentPage.jobTitleDropdown).toContainText(data.jobTitle);
  189 | 
  190 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  191 |       data.candidateStatus,
  192 |     );
  193 | 
  194 |     await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);
  195 | 
  196 |     await expect(recruitmentPage.toDateInput).toHaveValue(toDate);
  197 | 
  198 |     await recruitmentPage.restButton.click();
  199 | 
  200 |     await expect(recruitmentPage.jobTitleDropdown).toContainText(
  201 |       data.defaultDropdownValue,
  202 |     );
  203 | 
  204 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  205 |       data.defaultDropdownValue,
  206 |     );
  207 | 
  208 |     await expect(recruitmentPage.fromDateInput).toHaveValue(defaultFromDate);
  209 | 
  210 |     await expect(recruitmentPage.toDateInput).toHaveValue(defaultToDate);
  211 | 
  212 |     await expect(recruitmentPage.candidatesTable).toBeVisible();
  213 | 
  214 |     await expect(
  215 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  216 |     ).toBeVisible({
  217 |       timeout: 15_000,
  218 |     });
  219 |   });
  220 | 
  221 |   test("TC_RECRUITMENT_137 - Admin should filter Candidates by job title @positive @filter @regression", async ({
  222 |     navigationPage,
  223 |     recruitmentPage,
  224 |   }) => {
  225 |     // Read the configured Job Title from JSON.
  226 |     const data = recruitmentData.TC_RECRUITMENT_136;
  227 |     // Navigate to Recruitment → Candidates.
  228 |     await navigationPage.gotoRecruitment();
  229 |     await recruitmentPage.navigateToCandidate();
  230 |     // Select the configured Job Title.
  231 |     await recruitmentPage.selectDropdownOption(
  232 |       recruitmentPage.jobTitleDropdown,
  233 |       data.jobTitle,
  234 |     );
  235 |     // Verify the selected Job Title remains displayed.
  236 |     await expect(recruitmentPage.jobTitleDropdown).toContainText(data.jobTitle);
  237 |     // Click Search.
  238 |     await recruitmentPage.searchCandidates();
  239 |     // Wait for the loading spinner to disappear.
  240 |     await expect(recruitmentPage.loadingSpinner).toBeHidden();
  241 |     await expect(
  242 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  243 |     ).toBeVisible({
  244 |       timeout: 15_000,
  245 |     });
  246 | 
```