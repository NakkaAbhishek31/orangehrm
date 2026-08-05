# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_053 - Admin should reset System User search filters @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:629:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 60000ms exceeded.
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
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Admin" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: manda user
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: User Management
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - generic [ref=f4e136]:
              - text: Job
              - generic [ref=f4e137]: 
          - listitem [ref=f4e138] [cursor=pointer]:
            - generic [ref=f4e139]:
              - text: Organization
              - generic [ref=f4e140]: 
          - listitem [ref=f4e141] [cursor=pointer]:
            - generic [ref=f4e142]:
              - text: Qualifications
              - generic [ref=f4e143]: 
          - listitem [ref=f4e144] [cursor=pointer]:
            - link "Nationalities" [ref=f4e145]:
              - /url: "#"
          - listitem [ref=f4e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=f4e147]:
              - /url: "#"
          - listitem [ref=f4e148] [cursor=pointer]:
            - generic [ref=f4e149]:
              - text: Configuration
              - generic [ref=f4e150]: 
          - button "" [ref=f4e152] [cursor=pointer]
  - generic [ref=f4e154]:
    - generic [ref=f4e157]:
      - heading "Add User" [level=6] [ref=f4e158]
      - separator [ref=f4e159]
      - generic [ref=f4e160]:
        - generic [ref=f4e162]:
          - generic [ref=f4e164]:
            - generic [ref=f4e165]: User Role*
            - generic [ref=f4e169] [cursor=pointer]:
              - generic [ref=f4e170]: Admin
              - generic [ref=f4e171]: 
          - generic [ref=f4e174]:
            - generic [ref=f4e175]: Employee Name*
            - textbox "Type for hints..." [ref=f4e180]
          - generic [ref=f4e182]:
            - generic [ref=f4e183]: Status*
            - generic [ref=f4e187] [cursor=pointer]:
              - generic [ref=f4e188]: Enabled
              - generic [ref=f4e189]: 
          - generic [ref=f4e192]:
            - generic [ref=f4e193]: Username*
            - textbox [ref=f4e196]: ess1785830414197432
        - generic [ref=f4e198]:
          - generic [ref=f4e199]:
            - generic [ref=f4e200]:
              - generic [ref=f4e201]: Password*
              - textbox [ref=f4e204]
            - paragraph [ref=f4e205]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f4e207]:
            - generic [ref=f4e208]: Confirm Password*
            - textbox [ref=f4e211]
        - separator [ref=f4e212]
        - generic [ref=f4e213]:
          - paragraph [ref=f4e214]: "* Required"
          - button "Cancel" [ref=f4e215] [cursor=pointer]
          - button "Save" [ref=f4e216] [cursor=pointer]
    - generic [ref=f4e217]:
      - paragraph [ref=f4e218]: OrangeHRM OS 5.9
      - paragraph [ref=f4e219]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e220] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  225 |       })
  226 |       .locator(".oxd-input-field-error-message");
  227 | 
  228 |     this.editUserHeading = page.getByRole("heading", {
  229 |       name: "Edit User",
  230 |       exact: true,
  231 |     });
  232 | 
  233 |     this.editStatusDropdown = page
  234 |       .locator(".oxd-input-group")
  235 |       .filter({
  236 |         has: page.getByText("Status", {
  237 |           exact: true,
  238 |         }),
  239 |       })
  240 |       .locator(".oxd-select-text");
  241 | 
  242 |     this.editUserSaveButton = page.getByRole("button", {
  243 |       name: "Save",
  244 |       exact: true,
  245 |     });
  246 | 
  247 |     this.deleteSelectedButton = page.getByRole("button", {
  248 |       name: /Delete Selected/i,
  249 |     });
  250 | 
  251 |     this.nextPageButton = page.locator(
  252 |   'button.oxd-pagination-page-item--previous-next'
  253 | ).filter({
  254 |   has: page.locator('i.bi-chevron-right'),
  255 | });
  256 | 
  257 | this.previousPageButton = page.locator(
  258 |   'button.oxd-pagination-page-item--previous-next'
  259 | ).filter({
  260 |   has: page.locator('i.bi-chevron-left'),
  261 | });
  262 | 
  263 | this.passwordValidation = page
  264 |   .locator('.oxd-input-group')
  265 |   .filter({
  266 |     has: page.getByText('Password', {
  267 |       exact: true,
  268 |     }),
  269 |   })
  270 |   .locator('.oxd-input-field-error-message');
  271 | 
  272 |   }
  273 | 
  274 |   async gotoUserManagementUsers(): Promise<void> {
  275 |     await this.userManagementMenu.click();
  276 |     await this.usersMenuItem.click();
  277 |   }
  278 | 
  279 |   private async selectDropdownOption(
  280 |     dropdown: Locator,
  281 |     option: string,
  282 |   ): Promise<void> {
  283 |     await dropdown.click();
  284 | 
  285 |     const dropdownOption = this.page
  286 |       .locator(".oxd-select-option")
  287 |       .getByText(option, {
  288 |         exact: true,
  289 |       });
  290 | 
  291 |     await expect(dropdownOption).toBeVisible();
  292 |     await dropdownOption.click();
  293 |   }
  294 | 
  295 |   async searchSystemUsers(filters: SystemUserFilters): Promise<void> {
  296 |     if (filters.username !== undefined) {
  297 |       await this.usernameInput.fill(filters.username);
  298 |     }
  299 | 
  300 |     if (filters.userRole !== undefined) {
  301 |       await this.selectDropdownOption(this.userRoleDropdown, filters.userRole);
  302 |     }
  303 | 
  304 |     if (filters.employeeName !== undefined) {
  305 |       await this.employeeNameInput.fill(filters.employeeName);
  306 | 
  307 |       const employeeOption = this.page
  308 |         .locator(".oxd-autocomplete-option")
  309 |         .filter({
  310 |           hasText: filters.employeeName,
  311 |         })
  312 |         .first();
  313 | 
  314 |       await expect(employeeOption).toBeVisible({
  315 |         timeout: 15_000,
  316 |       });
  317 | 
  318 |       await employeeOption.click();
  319 |     }
  320 | 
  321 |     if (filters.status !== undefined) {
  322 |       await this.selectDropdownOption(this.statusDropdown, filters.status);
  323 |     }
  324 | 
> 325 |     const searchResponse = this.page.waitForResponse(
      |                                      ^ Error: page.waitForResponse: Test timeout of 60000ms exceeded.
  326 |       (response) =>
  327 |         response.url().includes("/api/v2/admin/users") &&
  328 |         response.request().method() === "GET" &&
  329 |         response.ok(),
  330 |       {
  331 |         timeout: 20_000,
  332 |       },
  333 |     );
  334 | 
  335 |     await this.searchButton.click();
  336 |     await searchResponse;
  337 | 
  338 |     await expect(this.loadingSpinner).toBeHidden();
  339 |   }
  340 | 
  341 |   async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
  342 |     await expect(this.userRows.first()).toBeVisible();
  343 | 
  344 |     const matchingRow = expected.username
  345 |       ? this.userRows.filter({
  346 |           has: this.page
  347 |             .locator(".oxd-table-cell")
  348 |             .nth(1)
  349 |             .getByText(expected.username, {
  350 |               exact: true,
  351 |             }),
  352 |         })
  353 |       : this.userRows.first();
  354 | 
  355 |     await expect(matchingRow).toHaveCount(1);
  356 | 
  357 |     const cells = matchingRow.locator(".oxd-table-cell");
  358 | 
  359 |     if (expected.username !== undefined) {
  360 |       await expect(cells.nth(1)).toHaveText(expected.username);
  361 |     }
  362 | 
  363 |     if (expected.userRole !== undefined) {
  364 |       await expect(cells.nth(2)).toHaveText(expected.userRole);
  365 |     }
  366 | 
  367 |     if (expected.employeeName !== undefined) {
  368 |       await expect(cells.nth(3)).toContainText(expected.employeeName);
  369 |     }
  370 | 
  371 |     if (expected.status !== undefined) {
  372 |       await expect(cells.nth(4)).toHaveText(expected.status);
  373 |     }
  374 |   }
  375 | 
  376 |   async resetSystemUserFilters(): Promise<void> {
  377 |     await this.resetButton.click();
  378 | 
  379 |     await expect(this.usernameInput).toHaveValue("");
  380 |     await expect(this.employeeNameInput).toHaveValue("");
  381 |   }
  382 | 
  383 |   async gotoAddSystemUser(): Promise<void> {
  384 |     await this.addButton.click();
  385 |     await this.page.waitForURL(/admin\/saveSystemUser/, {
  386 |       timeout: 20_000,
  387 |     });
  388 | 
  389 |     await expect(this.addUserHeading).toBeVisible();
  390 |   }
  391 | 
  392 |   async fillSystemUserForm(details: AddSystemUserDetails): Promise<void> {
  393 |     await this.selectDropdownOption(this.addUserRoleDropdown, details.userRole);
  394 | 
  395 |     await this.addEmployeeNameInput.fill(details.employeeName);
  396 | 
  397 |     const matchingEmployee = this.autocompleteOptions
  398 |       .filter({
  399 |         hasText: details.employeeName,
  400 |       })
  401 |       .first();
  402 | 
  403 |     await expect(matchingEmployee).toBeVisible({
  404 |       timeout: 20_000,
  405 |     });
  406 | 
  407 |     await matchingEmployee.click();
  408 | 
  409 |     await this.selectDropdownOption(this.addStatusDropdown, details.status);
  410 | 
  411 |     await this.addUsernameInput.fill(details.username);
  412 | 
  413 |     await this.addPasswordInput.fill(details.password);
  414 | 
  415 |     await this.addConfirmPasswordInput.fill(details.password);
  416 |   }
  417 | 
  418 |   async saveSystemUser(): Promise<void> {
  419 |     const createUserResponse = this.page.waitForResponse(
  420 |       (response) =>
  421 |         response.url().includes("/api/v2/admin/users") &&
  422 |         response.request().method() === "POST" &&
  423 |         response.ok(),
  424 |       {
  425 |         timeout: 20_000,
```