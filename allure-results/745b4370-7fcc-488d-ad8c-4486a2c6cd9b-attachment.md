# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_053 - Admin should reset System User search filters @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:628:6

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Search', exact: true })

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
              - paragraph [ref=f4e127]: AkesaFirstNameTest VakamoceLastNameTest
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
            - textbox [ref=f4e196]: Admin
            - generic [ref=f4e197]: Already exists
        - generic [ref=f4e199]:
          - generic [ref=f4e200]:
            - generic [ref=f4e201]:
              - generic [ref=f4e202]: Password*
              - textbox [ref=f4e205]
            - paragraph [ref=f4e206]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f4e208]:
            - generic [ref=f4e209]: Confirm Password*
            - textbox [ref=f4e212]
        - separator [ref=f4e213]
        - generic [ref=f4e214]:
          - paragraph [ref=f4e215]: "* Required"
          - button "Cancel" [ref=f4e216] [cursor=pointer]
          - button "Save" [ref=f4e217] [cursor=pointer]
    - generic [ref=f4e218]:
      - paragraph [ref=f4e219]: OrangeHRM OS 5.9
      - paragraph [ref=f4e220]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e221] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  206 |     this.usernameValidation = page
  207 |       .locator(".oxd-input-group")
  208 |       .filter({
  209 |         has: page.getByText("Username", {
  210 |           exact: true,
  211 |         }),
  212 |       })
  213 |       .locator(".oxd-input-field-error-message");
  214 |     this.confirmPasswordValidation = page
  215 |       .locator(".oxd-input-group")
  216 |       .filter({
  217 |         has: page.getByText("Confirm Password", {
  218 |           exact: true,
  219 |         }),
  220 |       })
  221 |       .locator(".oxd-input-field-error-message");
  222 | 
  223 |       this.editUserHeading = page.getByRole('heading', {
  224 |   name: 'Edit User',
  225 |   exact: true,
  226 | });
  227 | 
  228 | this.editStatusDropdown = page
  229 |   .locator('.oxd-input-group')
  230 |   .filter({
  231 |     has: page.getByText('Status', {
  232 |       exact: true,
  233 |     }),
  234 |   })
  235 |   .locator('.oxd-select-text');
  236 | 
  237 | this.editUserSaveButton = page.getByRole('button', {
  238 |   name: 'Save',
  239 |   exact: true,
  240 | });
  241 | 
  242 | 
  243 |   }
  244 | 
  245 |   async gotoUserManagementUsers(): Promise<void> {
  246 |     await this.userManagementMenu.click();
  247 |     await this.usersMenuItem.click();
  248 |   }
  249 | 
  250 |   private async selectDropdownOption(
  251 |     dropdown: Locator,
  252 |     option: string,
  253 |   ): Promise<void> {
  254 |     await dropdown.click();
  255 | 
  256 |     const dropdownOption = this.page
  257 |       .locator(".oxd-select-option")
  258 |       .getByText(option, {
  259 |         exact: true,
  260 |       });
  261 | 
  262 |     await expect(dropdownOption).toBeVisible();
  263 |     await dropdownOption.click();
  264 |   }
  265 | 
  266 |   async searchSystemUsers(filters: SystemUserFilters): Promise<void> {
  267 |     if (filters.username !== undefined) {
  268 |       await this.usernameInput.fill(filters.username);
  269 |     }
  270 | 
  271 |     if (filters.userRole !== undefined) {
  272 |       await this.selectDropdownOption(this.userRoleDropdown, filters.userRole);
  273 |     }
  274 | 
  275 |     if (filters.employeeName !== undefined) {
  276 |       await this.employeeNameInput.fill(filters.employeeName);
  277 | 
  278 |       const employeeOption = this.page
  279 |         .locator(".oxd-autocomplete-option")
  280 |         .filter({
  281 |           hasText: filters.employeeName,
  282 |         })
  283 |         .first();
  284 | 
  285 |       await expect(employeeOption).toBeVisible({
  286 |         timeout: 15_000,
  287 |       });
  288 | 
  289 |       await employeeOption.click();
  290 |     }
  291 | 
  292 |     if (filters.status !== undefined) {
  293 |       await this.selectDropdownOption(this.statusDropdown, filters.status);
  294 |     }
  295 | 
  296 |     const searchResponse = this.page.waitForResponse(
  297 |       (response) =>
  298 |         response.url().includes("/api/v2/admin/users") &&
  299 |         response.request().method() === "GET" &&
  300 |         response.ok(),
  301 |       {
  302 |         timeout: 20_000,
  303 |       },
  304 |     );
  305 | 
> 306 |     await this.searchButton.click();
      |                             ^ Error: locator.click: Test ended.
  307 |     await searchResponse;
  308 | 
  309 |     await expect(this.loadingSpinner).toBeHidden();
  310 |   }
  311 | 
  312 |   async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
  313 |     await expect(this.userRows.first()).toBeVisible();
  314 | 
  315 |     const matchingRow = expected.username
  316 |       ? this.userRows.filter({
  317 |           has: this.page
  318 |             .locator(".oxd-table-cell")
  319 |             .nth(1)
  320 |             .getByText(expected.username, {
  321 |               exact: true,
  322 |             }),
  323 |         })
  324 |       : this.userRows.first();
  325 | 
  326 |     await expect(matchingRow).toHaveCount(1);
  327 | 
  328 |     const cells = matchingRow.locator(".oxd-table-cell");
  329 | 
  330 |     if (expected.username !== undefined) {
  331 |       await expect(cells.nth(1)).toHaveText(expected.username);
  332 |     }
  333 | 
  334 |     if (expected.userRole !== undefined) {
  335 |       await expect(cells.nth(2)).toHaveText(expected.userRole);
  336 |     }
  337 | 
  338 |     if (expected.employeeName !== undefined) {
  339 |       await expect(cells.nth(3)).toContainText(expected.employeeName);
  340 |     }
  341 | 
  342 |     if (expected.status !== undefined) {
  343 |       await expect(cells.nth(4)).toHaveText(expected.status);
  344 |     }
  345 |   }
  346 | 
  347 |   async resetSystemUserFilters(): Promise<void> {
  348 |     await this.resetButton.click();
  349 | 
  350 |     await expect(this.usernameInput).toHaveValue("");
  351 |     await expect(this.employeeNameInput).toHaveValue("");
  352 |   }
  353 | 
  354 |   async gotoAddSystemUser(): Promise<void> {
  355 |     await this.addButton.click();
  356 |     await this.page.waitForURL(/admin\/saveSystemUser/, {
  357 |       timeout: 20_000,
  358 |     });
  359 | 
  360 |     await expect(this.addUserHeading).toBeVisible();
  361 |   }
  362 | 
  363 |   async fillSystemUserForm(details: AddSystemUserDetails): Promise<void> {
  364 |     await this.selectDropdownOption(this.addUserRoleDropdown, details.userRole);
  365 | 
  366 |     await this.addEmployeeNameInput.fill(details.employeeName);
  367 | 
  368 |     const matchingEmployee = this.autocompleteOptions
  369 |       .filter({
  370 |         hasText: details.employeeName,
  371 |       })
  372 |       .first();
  373 | 
  374 |     await expect(matchingEmployee).toBeVisible({
  375 |       timeout: 20_000,
  376 |     });
  377 | 
  378 |     await matchingEmployee.click();
  379 | 
  380 |     await this.selectDropdownOption(this.addStatusDropdown, details.status);
  381 | 
  382 |     await this.addUsernameInput.fill(details.username);
  383 | 
  384 |     await this.addPasswordInput.fill(details.password);
  385 | 
  386 |     await this.addConfirmPasswordInput.fill(details.password);
  387 |   }
  388 | 
  389 |   async saveSystemUser(): Promise<void> {
  390 |     const createUserResponse = this.page.waitForResponse(
  391 |       (response) =>
  392 |         response.url().includes("/api/v2/admin/users") &&
  393 |         response.request().method() === "POST" &&
  394 |         response.ok(),
  395 |       {
  396 |         timeout: 20_000,
  397 |       },
  398 |     );
  399 | 
  400 |     const systemUsersPage = this.page.waitForURL(/admin\/viewSystemUsers/, {
  401 |       timeout: 20_000,
  402 |     });
  403 | 
  404 |     // Begin watching for the temporary toast
  405 |     // before clicking Save.
  406 |     const successToastAppears = expect(this.successToast).toContainText(
```