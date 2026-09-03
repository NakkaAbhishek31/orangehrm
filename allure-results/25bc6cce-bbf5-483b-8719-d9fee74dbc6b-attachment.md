# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression
- Location: tests\Admin\admin-users.spec.ts:134:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 120000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f7e3]:
  - generic:
    - complementary [ref=f7e4]:
      - navigation "Sidepanel" [ref=f7e5]:
        - generic [ref=f7e6]:
          - link [ref=f7e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f7e9]
          - text: 
        - generic [ref=f7e10]:
          - generic [ref=f7e11]:
            - generic [ref=f7e12]:
              - textbox "Search" [ref=f7e15]
              - button "" [ref=f7e16] [cursor=pointer]
            - separator [ref=f7e18]
          - list [ref=f7e19]:
            - listitem [ref=f7e20]:
              - link "Admin" [ref=f7e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f7e25]:
              - link "PIM" [ref=f7e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f7e41]:
              - link "Leave" [ref=f7e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f7e46]:
              - link "Time" [ref=f7e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f7e54]:
              - link "Recruitment" [ref=f7e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f7e62]:
              - link "My Info" [ref=f7e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f7e70]:
              - link "Performance" [ref=f7e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f7e80]:
              - link "Dashboard" [ref=f7e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f7e85]:
              - link "Directory" [ref=f7e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f7e90]:
              - link "Maintenance" [ref=f7e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f7e96]:
              - link "Claim" [ref=f7e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f7e105]:
              - link "Buzz" [ref=f7e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f7e110]:
      - generic [ref=f7e111]:
        - generic [ref=f7e112]:
          - text: 
          - heading "Admin" [level=6] [ref=f7e114]
        - link [ref=f7e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f7e117] [cursor=pointer]
        - list [ref=f7e123]:
          - listitem [ref=f7e124]:
            - generic [ref=f7e125] [cursor=pointer]:
              - img "profile picture" [ref=f7e126]
              - paragraph [ref=f7e127]: manda user
              - generic [ref=f7e128]: 
      - navigation "Topbar Menu" [ref=f7e130]:
        - list [ref=f7e131]:
          - listitem [ref=f7e132] [cursor=pointer]:
            - generic [ref=f7e133]:
              - text: User Management
              - generic [ref=f7e134]: 
          - listitem [ref=f7e135] [cursor=pointer]:
            - generic [ref=f7e136]:
              - text: Job
              - generic [ref=f7e137]: 
          - listitem [ref=f7e138] [cursor=pointer]:
            - generic [ref=f7e139]:
              - text: Organization
              - generic [ref=f7e140]: 
          - listitem [ref=f7e141] [cursor=pointer]:
            - generic [ref=f7e142]:
              - text: Qualifications
              - generic [ref=f7e143]: 
          - listitem [ref=f7e144] [cursor=pointer]:
            - link "Nationalities" [ref=f7e145]:
              - /url: "#"
          - listitem [ref=f7e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=f7e147]:
              - /url: "#"
          - listitem [ref=f7e148] [cursor=pointer]:
            - generic [ref=f7e149]:
              - text: Configuration
              - generic [ref=f7e150]: 
          - button "" [ref=f7e152] [cursor=pointer]
  - generic [ref=f7e154]:
    - generic [ref=f7e157]:
      - heading "Add User" [level=6] [ref=f7e158]
      - separator [ref=f7e159]
      - generic [ref=f7e160]:
        - generic [ref=f7e165]:
          - generic [ref=f7e167]:
            - generic [ref=f7e168]: User Role*
            - generic [ref=f7e172] [cursor=pointer]:
              - generic [ref=f7e173]: ESS
              - generic [ref=f7e174]: 
          - generic [ref=f7e177]:
            - generic [ref=f7e178]: Employee Name*
            - textbox "Type for hints..." [ref=f7e183]: Auto1787818024599210 Test User
          - generic [ref=f7e185]:
            - generic [ref=f7e186]: Status*
            - generic [ref=f7e190] [cursor=pointer]:
              - generic [ref=f7e191]: Enabled
              - generic [ref=f7e192]: 
          - generic [ref=f7e195]:
            - generic [ref=f7e196]: Username*
            - textbox [ref=f7e199]: ess1787818024599210
        - generic [ref=f7e201]:
          - generic [ref=f7e202]:
            - generic [ref=f7e203]: Better
            - generic [ref=f7e204]:
              - generic [ref=f7e205]: Password*
              - textbox [ref=f7e208]: Test@12345
            - paragraph [ref=f7e209]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f7e211]:
            - generic [ref=f7e212]: Confirm Password*
            - textbox [ref=f7e215]: Test@12345
        - separator [ref=f7e216]
        - generic [ref=f7e217]:
          - paragraph [ref=f7e218]: "* Required"
          - button "Cancel" [ref=f7e219] [cursor=pointer]
          - button "Save" [active] [ref=f7e220] [cursor=pointer]
    - generic [ref=f7e221]:
      - paragraph [ref=f7e222]: OrangeHRM OS 5.9
      - paragraph [ref=f7e223]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f7e224] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  183 |     this.addConfirmPasswordInput = page
  184 |       .locator(".oxd-input-group")
  185 |       .filter({
  186 |         has: page.getByText("Confirm Password", {
  187 |           exact: true,
  188 |         }),
  189 |       })
  190 |       .locator("input");
  191 | 
  192 |     this.addUserSaveButton = page.getByRole("button", {
  193 |       name: "Save",
  194 |       exact: true,
  195 |     });
  196 | 
  197 |     this.addUserCancelButton = page.getByRole("button", {
  198 |       name: "Cancel",
  199 |       exact: true,
  200 |     });
  201 | 
  202 |     this.autocompleteOptions = page.locator(".oxd-autocomplete-option");
  203 | 
  204 |     this.successToast = page.locator(".oxd-toast-content-text").filter({
  205 |       hasText: /Successfully Saved/i,
  206 |     });
  207 | 
  208 |     this.validationMessages = page.locator(".oxd-input-field-error-message");
  209 | 
  210 |     this.toastMessage = page.locator(".oxd-toast-content-text");
  211 | 
  212 |     this.usernameValidation = page
  213 |       .locator(".oxd-input-group")
  214 |       .filter({
  215 |         has: page.getByText("Username", {
  216 |           exact: true,
  217 |         }),
  218 |       })
  219 |       .locator(".oxd-input-field-error-message");
  220 |     this.confirmPasswordValidation = page
  221 |       .locator(".oxd-input-group")
  222 |       .filter({
  223 |         has: page.getByText("Confirm Password", {
  224 |           exact: true,
  225 |         }),
  226 |       })
  227 |       .locator(".oxd-input-field-error-message");
  228 | 
  229 |     this.editUserHeading = page.getByRole("heading", {
  230 |       name: "Edit User",
  231 |       exact: true,
  232 |     });
  233 | 
  234 |     this.editStatusDropdown = page
  235 |       .locator(".oxd-input-group")
  236 |       .filter({
  237 |         has: page.getByText("Status", {
  238 |           exact: true,
  239 |         }),
  240 |       })
  241 |       .locator(".oxd-select-text");
  242 | 
  243 |     this.editUserSaveButton = page.getByRole("button", {
  244 |       name: "Save",
  245 |       exact: true,
  246 |     });
  247 | 
  248 |     this.deleteSelectedButton = page
  249 |       .locator(
  250 |         ".orangehrm-horizontal-padding " + "button.oxd-button--label-danger",
  251 |       )
  252 |       .filter({
  253 |         has: page.locator("i.bi-trash-fill"),
  254 |       });
  255 | 
  256 |     this.nextPageButton = page
  257 |       .locator("button.oxd-pagination-page-item--previous-next")
  258 |       .filter({
  259 |         has: page.locator("i.bi-chevron-right"),
  260 |       });
  261 | 
  262 |     this.previousPageButton = page
  263 |       .locator("button.oxd-pagination-page-item--previous-next")
  264 |       .filter({
  265 |         has: page.locator("i.bi-chevron-left"),
  266 |       });
  267 | 
  268 |     this.passwordValidation = page
  269 |       .locator(".oxd-input-group")
  270 |       .filter({
  271 |         has: page.getByText("Password", {
  272 |           exact: true,
  273 |         }),
  274 |       })
  275 |       .locator(".oxd-input-field-error-message");
  276 | 
  277 |     this.employeeNameValidation = page
  278 |       .locator(".oxd-input-group")
  279 |       .filter({
  280 |         has: page.locator("label").getByText("Employee Name", {
  281 |           exact: true,
  282 |         }),
> 283 |       })
      |                                          ^ Error: page.waitForResponse: Test timeout of 120000ms exceeded.
  284 |       .locator(".oxd-input-field-error-message");
  285 |   }
  286 | 
  287 |   async gotoUserManagementUsers(): Promise<void> {
  288 |     await this.userManagementMenu.click();
  289 |     await this.usersMenuItem.click();
  290 |   }
  291 | 
  292 |   private async selectDropdownOption(
  293 |     dropdown: Locator,
  294 |     option: string,
  295 |   ): Promise<void> {
  296 |     await dropdown.click();
  297 | 
  298 |     const dropdownOption = this.page
  299 |       .locator(".oxd-select-option")
  300 |       .getByText(option, {
  301 |         exact: true,
  302 |       });
  303 | 
  304 |     await expect(dropdownOption).toBeVisible();
  305 |     await dropdownOption.click();
  306 |   }
  307 | 
  308 |   async searchSystemUsers(filters: SystemUserFilters): Promise<void> {
  309 |     if (filters.username !== undefined) {
  310 |       await this.usernameInput.fill(filters.username);
  311 |     }
  312 | 
  313 |     if (filters.userRole !== undefined) {
  314 |       await this.selectDropdownOption(this.userRoleDropdown, filters.userRole);
  315 |     }
  316 | 
  317 |     if (filters.employeeName !== undefined) {
  318 |       await this.employeeNameInput.fill(filters.employeeName);
  319 | 
  320 |       const employeeOption = this.page
  321 |         .locator(".oxd-autocomplete-option")
  322 |         .filter({
  323 |           hasText: filters.employeeName,
  324 |         })
  325 |         .first();
  326 | 
  327 |       await expect(employeeOption).toBeVisible({
  328 |         timeout: 15_000,
  329 |       });
  330 | 
  331 |       await employeeOption.click();
  332 |     }
  333 | 
  334 |     if (filters.status !== undefined) {
  335 |       await this.selectDropdownOption(this.statusDropdown, filters.status);
  336 |     }
  337 | 
  338 |     const searchResponse = this.page.waitForResponse(
  339 |       (response) =>
  340 |         response.url().includes("/api/v2/admin/users") &&
  341 |         response.request().method() === "GET" &&
  342 |         response.ok(),
  343 |       {
  344 |         timeout: 20_000,
  345 |       },
  346 |     );
  347 | 
  348 |     await this.searchButton.click();
  349 |     await searchResponse;
  350 | 
  351 |     await expect(this.loadingSpinner).toBeHidden();
  352 |   }
  353 | 
  354 |   async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
  355 |     await expect(this.userRows.first()).toBeVisible();
  356 | 
  357 |     const matchingRow = expected.username
  358 |       ? this.userRows.filter({
  359 |           has: this.page
  360 |             .locator(".oxd-table-cell")
  361 |             .nth(1)
  362 |             .getByText(expected.username, {
  363 |               exact: true,
  364 |             }),
  365 |         })
  366 |       : this.userRows.first();
  367 | 
  368 |     await expect(matchingRow).toHaveCount(1);
  369 | 
  370 |     const cells = matchingRow.locator(".oxd-table-cell");
  371 | 
  372 |     if (expected.username !== undefined) {
  373 |       await expect(cells.nth(1)).toHaveText(expected.username);
  374 |     }
  375 | 
  376 |     if (expected.userRole !== undefined) {
  377 |       await expect(cells.nth(2)).toHaveText(expected.userRole);
  378 |     }
  379 | 
  380 |     if (expected.employeeName !== undefined) {
  381 |       await expect(cells.nth(3)).toContainText(expected.employeeName);
  382 |     }
  383 | 
```