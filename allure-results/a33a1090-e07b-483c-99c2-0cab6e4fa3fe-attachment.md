# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-attachments.spec.ts >> TC_PIM_011 - Admin should upload an employee attachment @positive @upload @regression
- Location: tests\PIM\pim-attachments.spec.ts:4:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'First Name' })

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
        - generic [ref=f3e154]:
          - generic [ref=f3e155]:
            - generic [ref=f3e157]:
              - button "Choose File"
              - generic [ref=f3e158]:
                - generic [ref=f3e159]:
                  - img "profile picture"
                - button "" [ref=f3e160] [cursor=pointer]
            - paragraph [ref=f3e162]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e163]:
            - generic [ref=f3e164]:
              - generic [ref=f3e167]:
                - generic [ref=f3e168]: Employee Full Name*
                - generic [ref=f3e170]:
                  - textbox "First Name" [ref=f3e173]
                  - textbox "Middle Name" [ref=f3e176]
                  - textbox "Last Name" [ref=f3e179]
              - generic [ref=f3e182]:
                - generic [ref=f3e183]: Employee Id
                - textbox [ref=f3e186]: "0703"
            - separator [ref=f3e187]
            - generic [ref=f3e188]:
              - paragraph [ref=f3e189]: Create Login Details
              - checkbox [ref=f3e192]
        - separator [ref=f3e194]
        - generic [ref=f3e195]:
          - paragraph [ref=f3e196]: "* Required"
          - button "Cancel" [ref=f3e197] [cursor=pointer]
          - button "Save" [ref=f3e198] [cursor=pointer]
    - generic [ref=f3e199]:
      - paragraph [ref=f3e200]: OrangeHRM OS 5.9
      - paragraph [ref=f3e201]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e202] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
  204 |     await this.AddEmployeeLink.click();
  205 |   }
  206 | 
  207 |   async addEmployee(details: AddEmployeeDetails): Promise<string> {
  208 |     if (details.firstName !== undefined) {
> 209 |       await this.firstnameInput.fill(details.firstName);
      |                                 ^ Error: locator.fill: Test timeout of 60000ms exceeded.
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
  305 |     employeeId: string,
  306 |     firstName: string,
  307 |     lastName: string,
  308 |   ): Promise<void> {
  309 |     await expect(this.loadingSpinner).toBeHidden();
```