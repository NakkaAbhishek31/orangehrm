# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression
- Location: tests\PIM\pim-employee.spec.ts:42:5

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
```

```
TimeoutError: page.waitForURL: Timeout 20000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: manda user
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e151]:
          - generic [ref=f3e152]:
            - generic [ref=f3e154]:
              - button "Choose File"
              - generic [ref=f3e155]:
                - img "profile picture" [ref=f3e157]
                - button "" [ref=f3e158] [cursor=pointer]
            - paragraph [ref=f3e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e161]:
            - generic [ref=f3e162]:
              - generic [ref=f3e165]:
                - generic [ref=f3e166]: Employee Full Name*
                - generic [ref=f3e168]:
                  - textbox "First Name" [ref=f3e171]: Auto1785557984167
                  - textbox "Middle Name" [ref=f3e174]: test
                  - textbox "Last Name" [ref=f3e177]: user
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0380"
                - generic [ref=f3e185]: Employee Id already exists
            - separator [ref=f3e186]
            - generic [ref=f3e187]:
              - paragraph [ref=f3e188]: Create Login Details
              - checkbox [ref=f3e191]
        - separator [ref=f3e193]
        - generic [ref=f3e194]:
          - paragraph [ref=f3e195]: "* Required"
          - button "Cancel" [ref=f3e196] [cursor=pointer]
          - button "Save" [active] [ref=f3e197] [cursor=pointer]
    - generic [ref=f3e198]:
      - paragraph [ref=f3e199]: OrangeHRM OS 5.9
      - paragraph [ref=f3e200]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e201] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  209 |   .locator('.oxd-input-field-error-message');
  210 | 
  211 |  this.passwordStrengthIndicator = page
  212 |   .locator('.oxd-input-group')
  213 |   .filter({
  214 |     has: page.getByText('Password', { exact: true }),
  215 |   })
  216 |   .locator('span')
  217 |   .filter({
  218 |     hasText: /Weak|Better|Medium|Strong/i,
  219 |   });
  220 | 
  221 |   const createLoginDetailsRow = page
  222 |   .locator('.oxd-form-row')
  223 |   .filter({ hasText: 'Create Login Details' });
  224 | 
  225 | this.createLoginDetailsCheckbox =
  226 |   createLoginDetailsRow.locator(
  227 |     'input[type="checkbox"]'
  228 |   );
  229 | 
  230 | this.createLoginDetailsSwitch =
  231 |   createLoginDetailsRow.locator(
  232 |     'span.oxd-switch-input'
  233 |   );
  234 | 
  235 |   this.usernameValidation = page
  236 |   .locator('.oxd-input-group')
  237 |   .filter({
  238 |     has: page.getByText('Username', { exact: true }),
  239 |   })
  240 |   .locator('.oxd-input-field-error-message');
  241 | 
  242 |   }
  243 | 
  244 |   async gotoAddEmployee(): Promise<void> {
  245 |     await this.AddEmployeeLink.click();
  246 |   }
  247 | 
  248 |   async addEmployee(details: AddEmployeeDetails): Promise<string> {
  249 |     if (details.firstName !== undefined) {
  250 |       await this.firstnameInput.fill(details.firstName);
  251 |     }
  252 | 
  253 |     if (details.middleName !== undefined) {
  254 |       await this.middlenameInput.fill(details.middleName);
  255 |     }
  256 | 
  257 |     if (details.lastName !== undefined) {
  258 |       await this.lastnameInput.fill(details.lastName);
  259 |     }
  260 | 
  261 |     let employeeId = details.employeeId ?? (await this.employeeID.inputValue());
  262 | 
  263 |     if (details.employeeId !== undefined) {
  264 |       await this.employeeID.fill(employeeId);
  265 |     }
  266 | 
  267 |     await this.employeeID.blur();
  268 | 
  269 |     const duplicateIdFound = await this.employeeIdValidation
  270 |       .waitFor({
  271 |         state: "visible",
  272 |         timeout: 3_000,
  273 |       })
  274 |       .then(() => true)
  275 |       .catch(() => false);
  276 | 
  277 |     if (duplicateIdFound) {
  278 |       employeeId = `E${Date.now().toString().slice(-9)}`;
  279 | 
  280 |       await this.employeeID.fill(employeeId);
  281 |       await this.employeeID.blur();
  282 | 
  283 |       await expect(this.employeeID).toHaveValue(employeeId);
  284 |       await expect(this.employeeIdValidation).toBeHidden();
  285 |     }
  286 | 
  287 |     if (details.profilePicturePath !== undefined) {
  288 |       const defaultImageSrc =
  289 |         await this.profilePicturePreview.getAttribute("src");
  290 | 
  291 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  292 | 
  293 |       await expect(this.profilePicturePreview).not.toHaveAttribute(
  294 |         "src",
  295 |         defaultImageSrc ?? "",
  296 |       );
  297 |     }
  298 | 
  299 |     const personalDetailsLoaded = this.page.waitForResponse(
  300 |       (response) =>
  301 |         response.url().includes("/personal-details") &&
  302 |         response.request().method() === "GET" &&
  303 |         response.ok(),
  304 |       { timeout: 20_000 },
  305 |     );
  306 | 
  307 |     await this.SaveEmployeeButton.click();
  308 | 
> 309 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      |                     ^ TimeoutError: page.waitForURL: Timeout 20000ms exceeded.
  310 |       timeout: 20_000,
  311 |     });
  312 | 
  313 |     await personalDetailsLoaded;
  314 |     await expect(this.loadingSpinner).toBeHidden();
  315 |     await expect(this.personalDetailsHeading).toBeVisible();
  316 | 
  317 |     return employeeId;
  318 |   }
  319 | 
  320 |   async gotoEmployeeList(): Promise<void> {
  321 |     await this.employeeListLink.click();
  322 |   }
  323 | 
  324 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  325 |     if (filters.employeeId !== undefined) {
  326 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  327 |     }
  328 | 
  329 |     if (filters.employeeName !== undefined) {
  330 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  331 | 
  332 |       const matchingOption = this.autocompleteOptions
  333 |         .filter({ hasText: filters.employeeName })
  334 |         .first();
  335 | 
  336 |       await expect(matchingOption).toBeVisible();
  337 |       await matchingOption.click();
  338 |     }
  339 |   }
  340 | 
  341 |   async clickOnFilterSearch(): Promise<void> {
  342 |     await this.filterSearchButton.click();
  343 |   }
  344 | 
  345 |   async verifyEmployeeSearchResult(
  346 |     employeeId: string,
  347 |     firstName: string,
  348 |     lastName: string,
  349 |   ): Promise<void> {
  350 |     await expect(this.loadingSpinner).toBeHidden();
  351 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  352 |     const cells = matchingRow.locator(".oxd-table-cell");
  353 |     const fullName = await cells.nth(2).innerText();
  354 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  355 |     await expect(cells.nth(1)).toHaveText(employeeId);
  356 |     expect(actualFirstName).toBe(firstName);
  357 |     await expect(cells.nth(3)).toHaveText(lastName);
  358 |     await expect(this.noRecordsFound).not.toBeVisible();
  359 |   }
  360 | 
  361 |   async verifyNoEmployeeRecordsFound(employeeId: string): Promise<void> {
  362 |     await expect(this.loadingSpinner).toBeHidden();
  363 | 
  364 |     await expect(this.noRecordsFound).toBeVisible();
  365 |     await expect(this.employeeRows).toHaveCount(0);
  366 | 
  367 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  368 |   }
  369 | 
  370 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  371 |     await expect(this.personalDetailsHeading).toBeVisible();
  372 |     //await expect(this.loadingSpinner).toBeHidden();
  373 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  374 | 
  375 |     if (details.middleName !== undefined) {
  376 |       await this.middlenameInput.fill(details.middleName);
  377 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  378 |     }
  379 | 
  380 |     if (details.lastName !== undefined) {
  381 |       await this.lastnameInput.fill(details.lastName);
  382 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  383 |     }
  384 | 
  385 |     const updateResponse = this.page.waitForResponse(
  386 |       (response) =>
  387 |         response.url().includes("/personal-details") &&
  388 |         response.request().method() === "PUT" &&
  389 |         response.ok(),
  390 |       { timeout: 20_000 },
  391 |     );
  392 | 
  393 |     await this.personalDetailsSaveButton.click();
  394 |     await updateResponse;
  395 | 
  396 |     await expect(this.successToast).toContainText("Successfully Updated");
  397 | 
  398 |     //await expect(this.loadingSpinner).toBeHidden();
  399 | 
  400 |     if (details.middleName !== undefined) {
  401 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  402 |     }
  403 | 
  404 |     if (details.lastName !== undefined) {
  405 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  406 |     }
  407 |   }
  408 |   //deleting the Records
  409 |   async deleteEmployeeById(employeeId: string): Promise<void> {
```