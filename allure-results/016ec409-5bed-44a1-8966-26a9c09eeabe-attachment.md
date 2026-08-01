# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_024 - Required validation should appear when employee first and last names are empty @negative @validation @regression
- Location: tests\PIM\pim-employee.spec.ts:169:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-input-field-error-message')
Expected: 2
Received: 3
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-input-field-error-message')
    6 × locator resolved to 0 elements
      - unexpected value "0"
    18 × locator resolved to 3 elements
       - unexpected value "3"

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
                  - generic [ref=f3e169]:
                    - textbox "First Name" [ref=f3e171]
                    - generic [ref=f3e172]: Required
                  - textbox "Middle Name" [ref=f3e175]: test
                  - generic [ref=f3e176]:
                    - textbox "Last Name" [ref=f3e178]
                    - generic [ref=f3e179]: Required
              - generic [ref=f3e182]:
                - generic [ref=f3e183]: Employee Id
                - textbox [ref=f3e186]: "0441"
                - generic [ref=f3e187]: Employee Id already exists
            - separator [ref=f3e188]
            - generic [ref=f3e189]:
              - paragraph [ref=f3e190]: Create Login Details
              - checkbox [ref=f3e193]
        - separator [ref=f3e195]
        - generic [ref=f3e196]:
          - paragraph [ref=f3e197]: "* Required"
          - button "Cancel" [ref=f3e198] [cursor=pointer]
          - button "Save" [active] [ref=f3e199] [cursor=pointer]
    - generic [ref=f3e200]:
      - paragraph [ref=f3e201]: OrangeHRM OS 5.9
      - paragraph [ref=f3e202]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e203] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  94  |   await loginPage.login("Admin", "admin123");
  95  |   await loginPage.verifyLoginSuccessful();
  96  | 
  97  |   await navigationPage.gotoPIM();
  98  |   await pimPage.gotoAddEmployee();
  99  | 
  100 |   const employeeId = await pimPage.addEmployee({
  101 |     firstName: firstName,
  102 |     middleName: middleName,
  103 |     lastName: lastName,
  104 |     profilePicturePath: profilePicturePath,
  105 |   });
  106 | 
  107 |   // await page.waitForURL(
  108 |   //   /pim\/viewPersonalDetails\/empNumber\/\d+/,
  109 |   //   { timeout: 15_000 }
  110 |   // );
  111 | 
  112 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  113 |   await expect(pimPage.profilePicturePreview).toBeVisible();
  114 |   await pimPage.gotoEmployeeList();
  115 |   await pimPage.filterEmployeeList({ employeeId });
  116 |   await pimPage.clickOnFilterSearch();
  117 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  118 |   await pimPage.deleteEmployeeById(employeeId);
  119 |   await pimPage.filterEmployeeList({ employeeId });
  120 |   await pimPage.clickOnFilterSearch();
  121 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  122 | });
  123 | 
  124 | test("TC_PIM_009 - Invalid profile picture format should be rejected @negative @upload @validation", async ({
  125 |   page,
  126 |   loginPage,
  127 |   navigationPage,
  128 |   pimPage,
  129 | }) => {
  130 |   const profilePicturePath = path.resolve("test-data/txt_crlf_log_sample.txt");
  131 | 
  132 |   await loginPage.visitPage();
  133 |   await loginPage.login("Admin", "admin123");
  134 |   await loginPage.verifyLoginSuccessful();
  135 |   await navigationPage.gotoPIM();
  136 |   await pimPage.gotoAddEmployee();
  137 |   await expect(pimPage.profilePictureInput).toBeAttached();
  138 |   await pimPage.verifyInvalidProfilePicture(profilePicturePath);
  139 | });
  140 | 
  141 | test("TC_PIM_023 - Admin should cancel adding a new employee @negative @regression", async ({
  142 |   page,
  143 |   loginPage,
  144 |   navigationPage,
  145 |   pimPage,
  146 | }) => {
  147 |   const firstName = `Auto${Date.now()}`;
  148 |   const middleName = "test";
  149 |   const lastName = "user";
  150 |   await loginPage.visitPage();
  151 | 
  152 |   await loginPage.login("Admin", "admin123");
  153 | 
  154 |   await loginPage.verifyLoginSuccessful();
  155 | 
  156 |   await navigationPage.gotoPIM();
  157 | 
  158 |   await pimPage.gotoAddEmployee();
  159 | 
  160 |   let employeeId = await pimPage.fillAddEmployeeForm({
  161 |     firstName: firstName,
  162 |     middleName: middleName,
  163 |     lastName: lastName,
  164 |   });
  165 | 
  166 |   await pimPage.cancelAddingEmployee();
  167 | });
  168 | 
  169 | test("TC_PIM_024 - Required validation should appear when employee first and last names are empty @negative @validation @regression", async ({
  170 |   page,
  171 |   loginPage,
  172 |   navigationPage,
  173 |   pimPage,
  174 | }) => {
  175 |   const firstName = `Auto${Date.now()}`;
  176 |   const middleName = "test";
  177 |   const lastName = "user";
  178 |   await loginPage.visitPage();
  179 | 
  180 |   await loginPage.login("Admin", "admin123");
  181 | 
  182 |   await loginPage.verifyLoginSuccessful();
  183 | 
  184 |   await navigationPage.gotoPIM();
  185 | 
  186 |   await pimPage.gotoAddEmployee();
  187 | 
  188 |   const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  189 |     firstName: "",
  190 |     lastName: "",
  191 |     middleName: middleName,
  192 |   });
  193 | 
> 194 |   await expect(pimPage.requiredValidationMessages).toHaveCount(2);
      |                                                    ^ Error: expect(locator).toHaveCount(expected) failed
  195 |   await expect(pimPage.requiredValidationMessages).toHaveText([
  196 |     "Required",
  197 |     "Required",
  198 |   ]);
  199 | });
  200 | 
  201 | test("TC_PIM_025 - Required validation should appear when employee last name is empty @negative @validation @regression", async ({
  202 |   page,
  203 |   loginPage,
  204 |   navigationPage,
  205 |   pimPage,
  206 | }) => {
  207 |   const firstName = `Auto${Date.now()}`;
  208 |   const middleName = "test";
  209 | 
  210 |   await loginPage.visitPage();
  211 |   await loginPage.login("Admin", "admin123");
  212 |   await loginPage.verifyLoginSuccessful();
  213 |   await navigationPage.gotoPIM();
  214 |   await pimPage.gotoAddEmployee();
  215 |   const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  216 |     firstName: firstName,
  217 |     lastName: " ",
  218 |     middleName: middleName,
  219 |   });
  220 |   await expect(pimPage.requiredValidationMessages).toHaveCount(1);
  221 |   await expect(pimPage.requiredValidationMessages).toHaveText(["Required"]);
  222 | 
  223 |   await expect(page).toHaveURL(/pim\/addEmployee/);
  224 | });
  225 | 
  226 | test("TC_PIM_026 - Required validation should appear when employee first name is empty @negative @validation @regression", async ({
  227 |   page,
  228 |   loginPage,
  229 |   navigationPage,
  230 |   pimPage,
  231 | }) => {
  232 |   const middleName = "Test";
  233 |   const lastName = `User${Date.now()}`;
  234 | 
  235 |   await loginPage.visitPage();
  236 |   await loginPage.login("Admin", "admin123");
  237 |   await loginPage.verifyLoginSuccessful();
  238 |   await navigationPage.gotoPIM();
  239 |   await pimPage.gotoAddEmployee();
  240 |   const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  241 |     firstName: " ",
  242 |     middleName: middleName,
  243 |     lastName: lastName,
  244 |   });
  245 |   await expect(pimPage.requiredValidationMessages).toHaveCount(1);
  246 |   await expect(pimPage.requiredValidationMessages).toHaveText(["Required"]);
  247 | 
  248 |   await expect(page).toHaveURL(/pim\/addEmployee/);
  249 | });
  250 | 
  251 | test("TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression", async ({
  252 |   page,
  253 |   loginPage,
  254 |   navigationPage,
  255 |   pimPage,
  256 | }) => {
  257 |   const firstName = `Auto${Date.now()}`;
  258 |   const secondFirstName = `Duplicate${Date.now()}`;
  259 | 
  260 |   await loginPage.visitPage();
  261 |   await loginPage.login("Admin", "admin123");
  262 |   await loginPage.verifyLoginSuccessful();
  263 | 
  264 |   await navigationPage.gotoPIM();
  265 |   await pimPage.gotoAddEmployee();
  266 |   const employeeId = await pimPage.addEmployee({
  267 |     firstName,
  268 |     middleName: "Test",
  269 |     lastName: "User",
  270 |   });
  271 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  272 |     timeout: 15_000,
  273 |   });
  274 | 
  275 |   await pimPage.gotoAddEmployee();
  276 | 
  277 |   await pimPage.fillAddEmployeeForm({
  278 |     firstName: secondFirstName,
  279 |     middleName: "Test",
  280 |     lastName: "User",
  281 |     employeeId,
  282 |   });
  283 | 
  284 |   await expect(pimPage.employeeIdValidation).toBeVisible();
  285 | 
  286 |   await expect(pimPage.employeeIdValidation).toHaveText(
  287 |     "Employee Id already exists",
  288 |   );
  289 | 
  290 |   await expect(page).toHaveURL(/pim\/addEmployee/);
  291 | 
  292 |   await pimPage.cancelAddingEmployee();
  293 |   await pimPage.filterEmployeeList({ employeeId });
  294 |   await pimPage.clickOnFilterSearch();
```