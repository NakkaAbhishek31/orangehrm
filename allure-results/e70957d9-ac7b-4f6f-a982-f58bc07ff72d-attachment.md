# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-attachments.spec.ts >> TC_PIM_011 - Admin should upload an employee attachment @positive @upload @regression
- Location: tests\PIM\pim-attachments.spec.ts:4:5

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
              - paragraph [ref=f3e127]: nnnn Garcia
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
                  - textbox "First Name" [ref=f3e171]: Auto1785493703628
                  - textbox "Middle Name" [ref=f3e174]: Test
                  - textbox "Last Name" [ref=f3e177]: User
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0430"
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
  204 |     await this.AddEmployeeLink.click();
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
> 268 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      |                     ^ TimeoutError: page.waitForURL: Timeout 20000ms exceeded.
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
  305 |     employeeId: string,
  306 |     firstName: string,
  307 |     lastName: string,
  308 |   ): Promise<void> {
  309 |     await expect(this.loadingSpinner).toBeHidden();
  310 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  311 |     const cells = matchingRow.locator(".oxd-table-cell");
  312 |     const fullName = await cells.nth(2).innerText();
  313 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  314 |     await expect(cells.nth(1)).toHaveText(employeeId);
  315 |     expect(actualFirstName).toBe(firstName);
  316 |     await expect(cells.nth(3)).toHaveText(lastName);
  317 |     await expect(this.noRecordsFound).not.toBeVisible();
  318 |   }
  319 | 
  320 |   async verifyNoEmployeeRecordsFound(employeeId: string): Promise<void> {
  321 |     await expect(this.loadingSpinner).toBeHidden();
  322 | 
  323 |     await expect(this.noRecordsFound).toBeVisible();
  324 |     await expect(this.employeeRows).toHaveCount(0);
  325 | 
  326 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  327 |   }
  328 | 
  329 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  330 |     await expect(this.personalDetailsHeading).toBeVisible();
  331 |     //await expect(this.loadingSpinner).toBeHidden();
  332 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  333 | 
  334 |     if (details.middleName !== undefined) {
  335 |       await this.middlenameInput.fill(details.middleName);
  336 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  337 |     }
  338 | 
  339 |     if (details.lastName !== undefined) {
  340 |       await this.lastnameInput.fill(details.lastName);
  341 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  342 |     }
  343 | 
  344 |     const updateResponse = this.page.waitForResponse(
  345 |       (response) =>
  346 |         response.url().includes("/personal-details") &&
  347 |         response.request().method() === "PUT" &&
  348 |         response.ok(),
  349 |       { timeout: 20_000 },
  350 |     );
  351 | 
  352 |     await this.personalDetailsSaveButton.click();
  353 |     await updateResponse;
  354 | 
  355 |     await expect(this.successToast).toContainText("Successfully Updated");
  356 | 
  357 |     //await expect(this.loadingSpinner).toBeHidden();
  358 | 
  359 |     if (details.middleName !== undefined) {
  360 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  361 |     }
  362 | 
  363 |     if (details.lastName !== undefined) {
  364 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  365 |     }
  366 |   }
  367 |   //deleting the Records
  368 |   async deleteEmployeeById(employeeId: string): Promise<void> {
```