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
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Maintenance" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e91]:
              - link "Claim" [ref=f4e92] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e100]:
              - link "Buzz" [ref=f4e101] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e105]:
      - generic [ref=f4e106]:
        - generic [ref=f4e107]:
          - text: 
          - heading "PIM" [level=6] [ref=f4e109]
        - link [ref=f4e111]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e112] [cursor=pointer]
        - list [ref=f4e118]:
          - listitem [ref=f4e119]:
            - generic [ref=f4e120] [cursor=pointer]:
              - img "profile picture" [ref=f4e121]
              - paragraph [ref=f4e122]: David Smith
              - generic [ref=f4e123]: 
      - navigation "Topbar Menu" [ref=f4e125]:
        - list [ref=f4e126]:
          - listitem [ref=f4e127] [cursor=pointer]:
            - generic [ref=f4e128]:
              - text: Configuration
              - generic [ref=f4e129]: 
          - listitem [ref=f4e130] [cursor=pointer]:
            - link "Employee List" [ref=f4e131]:
              - /url: "#"
          - listitem [ref=f4e132] [cursor=pointer]:
            - link "Add Employee" [ref=f4e133]:
              - /url: "#"
          - listitem [ref=f4e134] [cursor=pointer]:
            - link "Reports" [ref=f4e135]:
              - /url: "#"
          - button "" [ref=f4e137] [cursor=pointer]
  - generic [ref=f4e139]:
    - generic [ref=f4e142]:
      - heading "Add Employee" [level=6] [ref=f4e143]
      - separator [ref=f4e144]
      - generic [ref=f4e145]:
        - generic [ref=f4e146]:
          - generic [ref=f4e147]:
            - generic [ref=f4e149]:
              - button "Choose File"
              - generic [ref=f4e150]:
                - img "profile picture" [ref=f4e152]
                - button "" [ref=f4e153] [cursor=pointer]
            - paragraph [ref=f4e155]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f4e156]:
            - generic [ref=f4e157]:
              - generic [ref=f4e160]:
                - generic [ref=f4e161]: Employee Full Name*
                - generic [ref=f4e163]:
                  - textbox "First Name" [ref=f4e166]: Auto1785498942536
                  - textbox "Middle Name" [ref=f4e169]: test
                  - textbox "Last Name" [ref=f4e172]: user
              - generic [ref=f4e175]:
                - generic [ref=f4e176]: Employee Id
                - textbox [ref=f4e179]: "0620"
                - generic [ref=f4e180]: Employee Id already exists
            - separator [ref=f4e181]
            - generic [ref=f4e182]:
              - paragraph [ref=f4e183]: Create Login Details
              - checkbox [ref=f4e186]
        - separator [ref=f4e188]
        - generic [ref=f4e189]:
          - paragraph [ref=f4e190]: "* Required"
          - button "Cancel" [ref=f4e191] [cursor=pointer]
          - button "Save" [active] [ref=f4e192] [cursor=pointer]
    - generic [ref=f4e193]:
      - paragraph [ref=f4e194]: OrangeHRM OS 5.9
      - paragraph [ref=f4e195]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e196] [cursor=pointer]:
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