# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_054 - Admin should edit an existing System User status @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:672:5

# Error details

```
TimeoutError: locator.fill: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-input-group').filter({ has: getByText('Username', { exact: true }) }).locator('input')

```

# Page snapshot

```yaml
- generic [ref=f10e3]:
  - generic:
    - complementary [ref=f10e4]:
      - navigation "Sidepanel" [ref=f10e5]:
        - generic [ref=f10e6]:
          - link [ref=f10e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f10e9]
          - text: 
        - generic [ref=f10e10]:
          - generic [ref=f10e11]:
            - generic [ref=f10e12]:
              - textbox "Search" [ref=f10e15]
              - button "" [ref=f10e16] [cursor=pointer]
            - separator [ref=f10e18]
          - list [ref=f10e19]:
            - listitem [ref=f10e20]:
              - link "Admin" [ref=f10e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f10e25]:
              - link "PIM" [ref=f10e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f10e41]:
              - link "Leave" [ref=f10e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f10e46]:
              - link "Time" [ref=f10e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f10e54]:
              - link "Recruitment" [ref=f10e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f10e62]:
              - link "My Info" [ref=f10e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f10e70]:
              - link "Performance" [ref=f10e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f10e80]:
              - link "Dashboard" [ref=f10e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f10e85]:
              - link "Directory" [ref=f10e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f10e90]:
              - link "Maintenance" [ref=f10e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f10e96]:
              - link "Claim" [ref=f10e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f10e105]:
              - link "Buzz" [ref=f10e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f10e110]:
      - generic [ref=f10e111]:
        - generic [ref=f10e112]:
          - text: 
          - generic [ref=f10e113]:
            - heading "Admin" [level=6] [ref=f10e114]
            - heading "/ User Management" [level=6] [ref=f10e115]
        - link [ref=f10e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "general.upgrade" [ref=f10e118] [cursor=pointer]
        - list [ref=f10e124]:
          - listitem [ref=f10e125]:
            - generic [ref=f10e126] [cursor=pointer]:
              - img "profile picture" [ref=f10e127]
              - paragraph [ref=f10e128]: AWkEfluRBv user
              - generic [ref=f10e129]: 
      - navigation "Topbar Menu" [ref=f10e131]:
        - list [ref=f10e132]:
          - listitem [ref=f10e133] [cursor=pointer]:
            - generic [ref=f10e134]:
              - text: User Management
              - generic [ref=f10e135]: 
          - listitem [ref=f10e136] [cursor=pointer]:
            - generic [ref=f10e137]:
              - text: Job
              - generic [ref=f10e138]: 
          - listitem [ref=f10e139] [cursor=pointer]:
            - generic [ref=f10e140]:
              - text: Organization
              - generic [ref=f10e141]: 
          - listitem [ref=f10e142] [cursor=pointer]:
            - generic [ref=f10e143]:
              - text: Qualifications
              - generic [ref=f10e144]: 
          - listitem [ref=f10e145] [cursor=pointer]:
            - link "Nationalities" [ref=f10e146]:
              - /url: "#"
          - listitem [ref=f10e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f10e148]:
              - /url: "#"
          - listitem [ref=f10e149] [cursor=pointer]:
            - generic [ref=f10e150]:
              - text: Configuration
              - generic [ref=f10e151]: 
          - button "" [ref=f10e153] [cursor=pointer]
  - generic [ref=f10e155]:
    - generic [ref=f10e157]:
      - generic [ref=f10e158]:
        - generic [ref=f10e159]:
          - heading "admin.system_users" [level=5] [ref=f10e161]
          - button "" [ref=f10e164] [cursor=pointer]
        - separator [ref=f10e166]
        - generic [ref=f10e168]:
          - generic [ref=f10e170]:
            - generic [ref=f10e172]:
              - generic [ref=f10e173]: general.username
              - textbox [ref=f10e176]
            - generic [ref=f10e178]:
              - generic [ref=f10e179]: general.user_role
              - generic [ref=f10e183] [cursor=pointer]:
                - generic [ref=f10e184]: "-- Select --"
                - generic [ref=f10e185]: 
            - generic [ref=f10e188]:
              - generic [ref=f10e189]: general.employee_name
              - textbox "Type for hints..." [ref=f10e194]
            - generic [ref=f10e196]:
              - generic [ref=f10e197]: general.status
              - generic [ref=f10e201] [cursor=pointer]:
                - generic [ref=f10e202]: "-- Select --"
                - generic [ref=f10e203]: 
          - separator [ref=f10e205]
          - generic [ref=f10e206]:
            - button "general.reset" [ref=f10e207] [cursor=pointer]
            - button "general.search" [ref=f10e208] [cursor=pointer]
      - generic [ref=f10e209]:
        - button " general.add" [ref=f10e211] [cursor=pointer]:
          - generic [ref=f10e212]: 
          - text: general.add
        - generic [ref=f10e213]:
          - separator [ref=f10e214]
          - generic [ref=f10e215]: general.n_records_found
        - table [ref=f10e218]:
          - rowgroup [ref=f10e219]:
            - row [ref=f10e220]:
              - columnheader "" [ref=f10e221]:
                - generic [ref=f10e223] [cursor=pointer]:
                  - checkbox "" [ref=f10e224]
                  - generic [ref=f10e225]: 
              - columnheader "general.username " [ref=f10e227]:
                - text: general.username
                - generic [ref=f10e228]:
                  - generic [ref=f10e229] [cursor=pointer]: 
                  - text:  
              - columnheader "general.user_role " [ref=f10e230]:
                - text: general.user_role
                - generic [ref=f10e231]:
                  - generic [ref=f10e232] [cursor=pointer]: 
                  - text:  
              - columnheader "general.employee_name " [ref=f10e233]:
                - text: general.employee_name
                - generic [ref=f10e234]:
                  - generic [ref=f10e235] [cursor=pointer]: 
                  - text:  
              - columnheader "general.status " [ref=f10e236]:
                - text: general.status
                - generic [ref=f10e237]:
                  - generic [ref=f10e238] [cursor=pointer]: 
                  - text:  
              - columnheader "general.actions" [ref=f10e239]
          - rowgroup
    - generic [ref=f10e241]:
      - paragraph [ref=f10e242]: OrangeHRM OS 5.9
      - paragraph [ref=f10e243]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f10e244] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  219 |       })
  220 |       .locator(".oxd-input-field-error-message");
  221 |     this.confirmPasswordValidation = page
  222 |       .locator(".oxd-input-group")
  223 |       .filter({
  224 |         has: page.getByText("Confirm Password", {
  225 |           exact: true,
  226 |         }),
  227 |       })
  228 |       .locator(".oxd-input-field-error-message");
  229 | 
  230 |     this.editUserHeading = page.getByRole("heading", {
  231 |       name: "Edit User",
  232 |       exact: true,
  233 |     });
  234 | 
  235 |     this.editStatusDropdown = page
  236 |       .locator(".oxd-input-group")
  237 |       .filter({
  238 |         has: page.getByText("Status", {
  239 |           exact: true,
  240 |         }),
  241 |       })
  242 |       .locator(".oxd-select-text");
  243 | 
  244 |     this.editUserSaveButton = page.getByRole("button", {
  245 |       name: "Save",
  246 |       exact: true,
  247 |     });
  248 | 
  249 |  this.deleteSelectedButton = page
  250 |   .locator(
  251 |     '.orangehrm-horizontal-padding ' +
  252 |     'button.oxd-button--label-danger'
  253 |   )
  254 |   .filter({
  255 |     has: page.locator(
  256 |       'i.bi-trash-fill'
  257 |     ),
  258 |   });
  259 | 
  260 | 
  261 |     this.nextPageButton = page.locator(
  262 |   'button.oxd-pagination-page-item--previous-next'
  263 | ).filter({
  264 |   has: page.locator('i.bi-chevron-right'),
  265 | });
  266 | 
  267 | this.previousPageButton = page.locator(
  268 |   'button.oxd-pagination-page-item--previous-next'
  269 | ).filter({
  270 |   has: page.locator('i.bi-chevron-left'),
  271 | });
  272 | 
  273 | this.passwordValidation = page
  274 |   .locator('.oxd-input-group')
  275 |   .filter({
  276 |     has: page.getByText('Password', {
  277 |       exact: true,
  278 |     }),
  279 |   })
  280 |   .locator('.oxd-input-field-error-message');
  281 | 
  282 | this.employeeNameValidation = page
  283 |   .locator('.oxd-input-group')
  284 |   .filter({
  285 |     has: page
  286 |       .locator('label')
  287 |       .getByText('Employee Name', {
  288 |         exact: true,
  289 |       }),
  290 |   })
  291 |   .locator('.oxd-input-field-error-message');
  292 | 
  293 | 
  294 |   }
  295 | 
  296 |   async gotoUserManagementUsers(): Promise<void> {
  297 |     await this.userManagementMenu.click();
  298 |     await this.usersMenuItem.click();
  299 |   }
  300 | 
  301 |   private async selectDropdownOption(
  302 |     dropdown: Locator,
  303 |     option: string,
  304 |   ): Promise<void> {
  305 |     await dropdown.click();
  306 | 
  307 |     const dropdownOption = this.page
  308 |       .locator(".oxd-select-option")
  309 |       .getByText(option, {
  310 |         exact: true,
  311 |       });
  312 | 
  313 |     await expect(dropdownOption).toBeVisible();
  314 |     await dropdownOption.click();
  315 |   }
  316 | 
  317 |   async searchSystemUsers(filters: SystemUserFilters): Promise<void> {
  318 |     if (filters.username !== undefined) {
> 319 |       await this.usernameInput.fill(filters.username);
      |                                ^ TimeoutError: locator.fill: Timeout 30000ms exceeded.
  320 |     }
  321 | 
  322 |     if (filters.userRole !== undefined) {
  323 |       await this.selectDropdownOption(this.userRoleDropdown, filters.userRole);
  324 |     }
  325 | 
  326 |     if (filters.employeeName !== undefined) {
  327 |       await this.employeeNameInput.fill(filters.employeeName);
  328 | 
  329 |       const employeeOption = this.page
  330 |         .locator(".oxd-autocomplete-option")
  331 |         .filter({
  332 |           hasText: filters.employeeName,
  333 |         })
  334 |         .first();
  335 | 
  336 |       await expect(employeeOption).toBeVisible({
  337 |         timeout: 15_000,
  338 |       });
  339 | 
  340 |       await employeeOption.click();
  341 |     }
  342 | 
  343 |     if (filters.status !== undefined) {
  344 |       await this.selectDropdownOption(this.statusDropdown, filters.status);
  345 |     }
  346 | 
  347 |     const searchResponse = this.page.waitForResponse(
  348 |       (response) =>
  349 |         response.url().includes("/api/v2/admin/users") &&
  350 |         response.request().method() === "GET" &&
  351 |         response.ok(),
  352 |       {
  353 |         timeout: 20_000,
  354 |       },
  355 |     );
  356 | 
  357 |     await this.searchButton.click();
  358 |     await searchResponse;
  359 | 
  360 |     await expect(this.loadingSpinner).toBeHidden();
  361 |   }
  362 | 
  363 |   async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
  364 |     await expect(this.userRows.first()).toBeVisible();
  365 | 
  366 |     const matchingRow = expected.username
  367 |       ? this.userRows.filter({
  368 |           has: this.page
  369 |             .locator(".oxd-table-cell")
  370 |             .nth(1)
  371 |             .getByText(expected.username, {
  372 |               exact: true,
  373 |             }),
  374 |         })
  375 |       : this.userRows.first();
  376 | 
  377 |     await expect(matchingRow).toHaveCount(1);
  378 | 
  379 |     const cells = matchingRow.locator(".oxd-table-cell");
  380 | 
  381 |     if (expected.username !== undefined) {
  382 |       await expect(cells.nth(1)).toHaveText(expected.username);
  383 |     }
  384 | 
  385 |     if (expected.userRole !== undefined) {
  386 |       await expect(cells.nth(2)).toHaveText(expected.userRole);
  387 |     }
  388 | 
  389 |     if (expected.employeeName !== undefined) {
  390 |       await expect(cells.nth(3)).toContainText(expected.employeeName);
  391 |     }
  392 | 
  393 |     if (expected.status !== undefined) {
  394 |       await expect(cells.nth(4)).toHaveText(expected.status);
  395 |     }
  396 |   }
  397 | 
  398 |   async resetSystemUserFilters(): Promise<void> {
  399 |     await this.resetButton.click();
  400 | 
  401 |     await expect(this.usernameInput).toHaveValue("");
  402 |     await expect(this.employeeNameInput).toHaveValue("");
  403 |   }
  404 | 
  405 |   async gotoAddSystemUser(): Promise<void> {
  406 |     await this.addButton.click();
  407 |     await this.page.waitForURL(/admin\/saveSystemUser/, {
  408 |       timeout: 20_000,
  409 |     });
  410 | 
  411 |     await expect(this.addUserHeading).toBeVisible();
  412 |   }
  413 | 
  414 |   async fillSystemUserForm(details: AddSystemUserDetails): Promise<void> {
  415 |     await this.selectDropdownOption(this.addUserRoleDropdown, details.userRole);
  416 | 
  417 |     await this.addEmployeeNameInput.fill(details.employeeName);
  418 | 
  419 |     const matchingEmployee = this.autocompleteOptions
```