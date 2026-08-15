# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_142 - Invalid validation should appear for a nonexistent candidate name @negative @validation @autocomplete @regression
- Location: tests\Recruitment\recruitment.spec.ts:461:8

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Candidates', exact: true })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('heading', { name: 'Candidates', exact: true })

```

# Test source

```ts
  19  |   readonly dateOfApplicationGroup: Locator;
  20  |   readonly fromDateInput: Locator;
  21  |   readonly toDateInput: Locator;
  22  |   readonly restButton: Locator;
  23  |   readonly searchButton: Locator;
  24  |   readonly candidatesTable: Locator;
  25  |   readonly candidateRows: Locator;
  26  |   readonly noRecordsFound: Locator;
  27  |   readonly loadingSpinner: Locator;
  28  |   readonly dateValidationMessages: Locator;
  29  |   readonly toDateValidation: Locator;
  30  |   readonly candidateAutocompleteDropdown: Locator;
  31  | readonly candidateAutocompleteNoRecords: Locator;
  32  | readonly candidateNameValidation: Locator;
  33  | 
  34  |   constructor(readonly page: Page) {
  35  |     this.candidateLink = page.getByRole("link", {
  36  |       name: "Candidates",
  37  |       exact: true,
  38  |     });
  39  |     this.candidatePageHeading = page.getByRole("heading", {
  40  |       name: "Candidates",
  41  |       exact: true,
  42  |     });
  43  |     this.candidateNameInput = page.getByRole("textbox", {
  44  |       name: "Type for hints...",
  45  |       exact: true,
  46  |     });
  47  |     this.keywordsInput = page.getByRole("textbox", {
  48  |       name: "Enter comma seperated words...",
  49  |       exact: true,
  50  |     });
  51  | 
  52  |     this.jobTitleDropdown = this.dropdownByLabel("Job Title");
  53  |     this.vacancyDropdown = this.dropdownByLabel("Vacancy");
  54  |     this.hiringManagerDropdown = this.dropdownByLabel("Hiring Manager");
  55  |     this.candidateStatusDropdown = this.dropdownByLabel("Status");
  56  |     this.dropdownOptions = page.locator(
  57  |       ".oxd-select-dropdown:visible .oxd-select-option",
  58  |     );
  59  | 
  60  |     this.dateOfApplicationGroup = this.inputGroupByLabel(
  61  |       "Date of Application",
  62  |     );
  63  |     this.fromDateInput = page.getByRole("textbox", {
  64  |       name: "From",
  65  |       exact: true,
  66  |     });
  67  |     this.toDateInput = page.getByRole("textbox", {
  68  |       name: "To",
  69  |       exact: true,
  70  |     });
  71  | 
  72  |     this.restButton = page.getByRole("button", {
  73  |       name: "Reset",
  74  |       exact: true,
  75  |     });
  76  |     this.searchButton = page.getByRole("button", {
  77  |       name: "Search",
  78  |       exact: true,
  79  |     });
  80  |     this.candidatesTable = page.locator(".orangehrm-container");
  81  |     this.candidateRows = this.candidatesTable.locator(
  82  |       ".oxd-table-body .oxd-table-card",
  83  |     );
  84  |     this.noRecordsFound = page.getByText("No Records Found", {
  85  |       exact: true,
  86  |     });
  87  |     this.loadingSpinner = page.locator(".oxd-loading-spinner");
  88  |     this.dateValidationMessages = page.locator(
  89  |       "form .oxd-input-field-error-message",
  90  |     );
  91  |     this.toDateValidation = this.toDateInput
  92  |       .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
  93  |       .locator(".oxd-input-field-error-message");
  94  | 
  95  |       this.candidateAutocompleteDropdown =
  96  |   page.locator(
  97  |     '.oxd-autocomplete-dropdown:visible'
  98  |   );
  99  | 
  100 | this.candidateAutocompleteNoRecords =
  101 |   this.candidateAutocompleteDropdown
  102 |     .getByText('No Records Found', {
  103 |       exact: true,
  104 |     });
  105 | 
  106 | this.candidateNameValidation =
  107 |   this.candidateNameInput
  108 |     .locator(
  109 |       'xpath=ancestor::div[contains(@class,"oxd-input-group")]'
  110 |     )
  111 |     .locator(
  112 |       '.oxd-input-field-error-message'
  113 |     );
  114 |   }
  115 | 
  116 |   async navigateToCandidate(): Promise<void> {
  117 |     await this.candidateLink.click();
  118 |     await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
> 119 |     await expect(this.candidatePageHeading).toBeVisible();
      |                                             ^ Error: expect(locator).toBeVisible() failed
  120 |   }
  121 | 
  122 |   async searchCandidates(): Promise<void> {
  123 |     const candidatesResponse = this.page.waitForResponse(
  124 |       (response) =>
  125 |         response.url().includes("/api/v2/recruitment/candidates") &&
  126 |         response.request().method() === "GET" &&
  127 |         response.ok(),
  128 |       { timeout: API_TIMEOUT },
  129 |     );
  130 | 
  131 |     await this.searchButton.click();
  132 |     await candidatesResponse;
  133 |     await expect(this.loadingSpinner).toBeHidden({ timeout: API_TIMEOUT });
  134 |   }
  135 | 
  136 |   async selectDropdownOption(
  137 |     dropdown: Locator,
  138 |     optionText: string,
  139 |   ): Promise<void> {
  140 |     await expect(dropdown).toBeVisible();
  141 |     await dropdown.click();
  142 | 
  143 |     const option = this.visibleDropdown()
  144 |       .locator(".oxd-select-option")
  145 |       .filter({
  146 |         hasText: new RegExp(`^\\s*${escapeRegExp(optionText)}\\s*$`, "i"),
  147 |       })
  148 |       .first();
  149 | 
  150 |     await expect(option).toBeVisible({ timeout: DEFAULT_TIMEOUT });
  151 |     await option.click();
  152 |     await expect(dropdown).toContainText(optionText);
  153 |   }
  154 | 
  155 |   async selectFirstAvailableVacancy(): Promise<string> {
  156 |     return this.selectFirstAvailableDropdownOption(this.vacancyDropdown);
  157 |   }
  158 | 
  159 |   async selectFirstAvailableHiringManager(): Promise<string> {
  160 |     return this.selectFirstAvailableDropdownOption(
  161 |       this.hiringManagerDropdown,
  162 |     );
  163 |   }
  164 | 
  165 |   async selectFirstAvailableCandidate(
  166 |     searchText: string,
  167 |   ): Promise<string | null> {
  168 |     await this.candidateNameInput.fill(searchText);
  169 | 
  170 |     const autocompleteDropdown = this.page.locator(
  171 |       ".oxd-autocomplete-dropdown:visible",
  172 |     );
  173 |     await expect(autocompleteDropdown).toBeVisible({
  174 |       timeout: DEFAULT_TIMEOUT,
  175 |     });
  176 | 
  177 |     const validOptions = autocompleteDropdown
  178 |       .locator(".oxd-autocomplete-option")
  179 |       .filter({ hasNotText: /Searching|No Records Found/i });
  180 |     const noRecords = autocompleteDropdown.getByText("No Records Found", {
  181 |       exact: true,
  182 |     });
  183 | 
  184 |     await expect(validOptions.first().or(noRecords)).toBeVisible({
  185 |       timeout: DEFAULT_TIMEOUT,
  186 |     });
  187 | 
  188 |     if ((await validOptions.count()) === 0) {
  189 |       return null;
  190 |     }
  191 | 
  192 |     const firstOption = validOptions.first();
  193 |     const selectedCandidate = (await firstOption.innerText()).trim();
  194 | 
  195 |     await firstOption.click();
  196 |     await expect(this.candidateNameInput).toHaveValue(selectedCandidate);
  197 | 
  198 |     return selectedCandidate;
  199 |   }
  200 | 
  201 |   private inputGroupByLabel(label: string): Locator {
  202 |     return this.page.locator(".oxd-input-group").filter({
  203 |       has: this.page.locator("label").getByText(label, { exact: true }),
  204 |     });
  205 |   }
  206 | 
  207 |   private dropdownByLabel(label: string): Locator {
  208 |     return this.inputGroupByLabel(label).locator(".oxd-select-text");
  209 |   }
  210 | 
  211 |   private visibleDropdown(): Locator {
  212 |     return this.page.locator(".oxd-select-dropdown:visible");
  213 |   }
  214 | 
  215 |   private async selectFirstAvailableDropdownOption(
  216 |     dropdown: Locator,
  217 |   ): Promise<string> {
  218 |     await expect(dropdown).toBeVisible();
  219 |     await dropdown.click();
```