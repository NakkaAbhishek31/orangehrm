# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_024 - Required validation should appear when employee first and last names are empty @negative @validation @regression
- Location: tests\PIM\pim-employee.spec.ts:333:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /Add Employee/i })

```

# Page snapshot

```yaml
- generic [ref=f2e4]:
  - generic [ref=f2e6]:
    - img "company-branding" [ref=f2e8]
    - generic [ref=f2e9]:
      - heading "Login" [level=5] [ref=f2e10]
      - generic [ref=f2e11]:
        - generic [ref=f2e13]:
          - paragraph [ref=f2e14]: "Username : Admin"
          - paragraph [ref=f2e15]: "Password : admin123"
        - generic [ref=f2e16]:
          - generic [ref=f2e18]:
            - generic [ref=f2e19]:
              - generic [ref=f2e20]: 
              - generic [ref=f2e21]: Username
            - textbox "Username" [active] [ref=f2e23]
          - generic [ref=f2e25]:
            - generic [ref=f2e26]:
              - generic [ref=f2e27]: 
              - generic [ref=f2e28]: Password
            - textbox "Password" [ref=f2e30]
          - button "Login" [ref=f2e32] [cursor=pointer]
          - paragraph [ref=f2e34] [cursor=pointer]: Forgot your password?
      - generic [ref=f2e35]:
        - generic [ref=f2e36]:
          - link [ref=f2e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f2e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f2e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f2e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f2e49]:
          - paragraph [ref=f2e50]: OrangeHRM OS 5.9
          - paragraph [ref=f2e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f2e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f2e54]
```

# Test source

```ts
  104 |       .getByRole("button", { name: "Save", exact: true });
  105 |     this.successToast = page.locator(
  106 |       "div.oxd-toast-container.oxd-toast-container--bottom",
  107 |     );
  108 |     this.employeeIdValidation = page.getByText("Employee Id already exists", {
  109 |       exact: true,
  110 |     });
  111 |     this.employeeID = page
  112 |       .locator("form")
  113 |       .filter({ has: page.locator('input[name="firstName"]') })
  114 |       .locator(".oxd-input-group")
  115 |       .filter({ hasText: "Employee Id" })
  116 |       .locator("input");
  117 |     this.employeeIdFilterInput = page
  118 |       .locator(".oxd-table-filter")
  119 |       .locator(".oxd-input-group")
  120 |       .filter({ hasText: "Employee Id" })
  121 |       .locator("input");
  122 |     this.profilePictureInput = page.locator('input[type="file"]');
  123 |     this.profilePicturePreview = page.locator("img.employee-image");
  124 |     this.profilePictureValidation = page.getByText("File type not allowed", {
  125 |       exact: true,
  126 |     });
  127 | 
  128 |     this.nextPageButton = page
  129 |       .locator("button.oxd-pagination-page-item--previous-next")
  130 |       .filter({
  131 |         has: page.locator("i.bi-chevron-right"),
  132 |       });
  133 | 
  134 |     this.previousPageButton = page
  135 |       .locator("button.oxd-pagination-page-item--previous-next")
  136 |       .filter({
  137 |         has: page.locator("i.bi-chevron-left"),
  138 |       });
  139 | 
  140 |     this.activePageButton = page.locator(".oxd-pagination-page-item--active");
  141 | 
  142 |     this.employeeIdCells = page.locator(
  143 |       '.oxd-table-body [role="row"] [role="cell"]:nth-child(2)',
  144 |     );
  145 | 
  146 |     this.cancelProfilepageButton = page.getByRole("button", {
  147 |       name: /Cancel/i,
  148 |     });
  149 | 
  150 |    this.requiredValidationMessages =
  151 |   page.locator('.oxd-input-field-error-message');
  152 | this.createLoginDetailsSwitch = page
  153 |   .locator('.oxd-form-row')
  154 |   .filter({ hasText: 'Create Login Details' })
  155 |   .locator('.oxd-switch-input');
  156 | this.employeeUsernameInput = page
  157 |   .locator('.oxd-input-group')
  158 |   .filter({
  159 |     has: page.getByText('Username', { exact: true }),
  160 |   })
  161 |   .locator('input');
  162 | 
  163 | this.employeePasswordInput = page
  164 |   .locator('.oxd-input-group')
  165 |   .filter({
  166 |     has: page.getByText('Password', { exact: true }),
  167 |   })
  168 |   .locator('input');
  169 | 
  170 | this.confirmPasswordInput = page
  171 |   .locator('.oxd-input-group')
  172 |   .filter({
  173 |     has: page.getByText('Confirm Password', {
  174 |       exact: true,
  175 |     }),
  176 |   })
  177 |   .locator('input');
  178 | 
  179 | this.enabledStatusRadio = page
  180 |   .getByText('Enabled', { exact: true })
  181 |   .locator('..')
  182 |   .locator('input[type="radio"]');
  183 | 
  184 | this.disabledStatusRadio = page
  185 |   .getByText('Disabled', { exact: true })
  186 |   .locator('..')
  187 |   .locator('input[type="radio"]');
  188 | 
  189 |   this.confirmPasswordValidation = page
  190 |   .locator('.oxd-input-group')
  191 |   .filter({
  192 |     has: page.getByText('Confirm Password', {
  193 |       exact: true,
  194 |     }),
  195 |   })
  196 |   .locator('.oxd-input-field-error-message');
  197 | 
  198 | 
  199 | 
  200 | 
  201 |   }
  202 | 
  203 |   async gotoAddEmployee(): Promise<void> {
> 204 |     await this.AddEmployeeLink.click();
      |                                ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  205 |   }
  206 | 
  207 |   async addEmployee(details: AddEmployeeDetails): Promise<string> {
  208 |     if (details.firstName !== undefined) {
  209 |       await this.firstnameInput.fill(details.firstName);
  210 |     }
  211 | 
  212 |     if (details.middleName !== undefined) {
  213 |       await this.middlenameInput.fill(details.middleName);
  214 |     }
  215 | 
  216 |     if (details.lastName !== undefined) {
  217 |       await this.lastnameInput.fill(details.lastName);
  218 |     }
  219 | 
  220 |     let employeeId = details.employeeId ?? (await this.employeeID.inputValue());
  221 | 
  222 |     if (details.employeeId !== undefined) {
  223 |       await this.employeeID.fill(employeeId);
  224 |     }
  225 | 
  226 |     await this.employeeID.blur();
  227 | 
  228 |     const duplicateIdFound = await this.employeeIdValidation
  229 |       .waitFor({
  230 |         state: "visible",
  231 |         timeout: 3_000,
  232 |       })
  233 |       .then(() => true)
  234 |       .catch(() => false);
  235 | 
  236 |     if (duplicateIdFound) {
  237 |       employeeId = `E${Date.now().toString().slice(-9)}`;
  238 | 
  239 |       await this.employeeID.fill(employeeId);
  240 |       await this.employeeID.blur();
  241 | 
  242 |       await expect(this.employeeID).toHaveValue(employeeId);
  243 |       await expect(this.employeeIdValidation).toBeHidden();
  244 |     }
  245 | 
  246 |     if (details.profilePicturePath !== undefined) {
  247 |       const defaultImageSrc =
  248 |         await this.profilePicturePreview.getAttribute("src");
  249 | 
  250 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  251 | 
  252 |       await expect(this.profilePicturePreview).not.toHaveAttribute(
  253 |         "src",
  254 |         defaultImageSrc ?? "",
  255 |       );
  256 |     }
  257 | 
  258 |     const personalDetailsLoaded = this.page.waitForResponse(
  259 |       (response) =>
  260 |         response.url().includes("/personal-details") &&
  261 |         response.request().method() === "GET" &&
  262 |         response.ok(),
  263 |       { timeout: 20_000 },
  264 |     );
  265 | 
  266 |     await this.SaveEmployeeButton.click();
  267 | 
  268 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  269 |       timeout: 20_000,
  270 |     });
  271 | 
  272 |     await personalDetailsLoaded;
  273 |     await expect(this.loadingSpinner).toBeHidden();
  274 |     await expect(this.personalDetailsHeading).toBeVisible();
  275 | 
  276 |     return employeeId;
  277 |   }
  278 | 
  279 |   async gotoEmployeeList(): Promise<void> {
  280 |     await this.employeeListLink.click();
  281 |   }
  282 | 
  283 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  284 |     if (filters.employeeId !== undefined) {
  285 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  286 |     }
  287 | 
  288 |     if (filters.employeeName !== undefined) {
  289 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  290 | 
  291 |       const matchingOption = this.autocompleteOptions
  292 |         .filter({ hasText: filters.employeeName })
  293 |         .first();
  294 | 
  295 |       await expect(matchingOption).toBeVisible();
  296 |       await matchingOption.click();
  297 |     }
  298 |   }
  299 | 
  300 |   async clickOnFilterSearch(): Promise<void> {
  301 |     await this.filterSearchButton.click();
  302 |   }
  303 | 
  304 |   async verifyEmployeeSearchResult(
```