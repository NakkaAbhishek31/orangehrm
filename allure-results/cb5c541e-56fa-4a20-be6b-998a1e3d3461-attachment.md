# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> PIM Employee List >> TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression
- Location: tests\PIM\pim-employee-list.spec.ts:256:7

# Error details

```
TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic:
    - complementary [ref=f5e4]:
      - navigation "Sidepanel" [ref=f5e5]:
        - generic [ref=f5e6]:
          - link [ref=f5e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f5e9]
          - text: 
        - generic [ref=f5e10]:
          - generic [ref=f5e11]:
            - generic [ref=f5e12]:
              - textbox "Search" [ref=f5e15]
              - button "" [ref=f5e16] [cursor=pointer]
            - separator [ref=f5e18]
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Admin" [ref=f5e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f5e25]:
              - link "PIM" [ref=f5e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f5e41]:
              - link "Leave" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f5e46]:
              - link "Time" [ref=f5e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f5e54]:
              - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e62]:
              - link "My Info" [ref=f5e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e70]:
              - link "Performance" [ref=f5e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e80]:
              - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e85]:
              - link "Directory" [ref=f5e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e90]:
              - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e96]:
              - link "Claim" [ref=f5e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e105]:
              - link "Buzz" [ref=f5e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e110]:
      - generic [ref=f5e111]:
        - generic [ref=f5e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f5e114]
        - link [ref=f5e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e117] [cursor=pointer]
        - list [ref=f5e123]:
          - listitem [ref=f5e124]:
            - generic [ref=f5e125] [cursor=pointer]:
              - img "profile picture" [ref=f5e126]
              - paragraph [ref=f5e127]: manda user
              - generic [ref=f5e128]: 
      - navigation "Topbar Menu" [ref=f5e130]:
        - list [ref=f5e131]:
          - listitem [ref=f5e132] [cursor=pointer]:
            - generic [ref=f5e133]:
              - text: Configuration
              - generic [ref=f5e134]: 
          - listitem [ref=f5e135] [cursor=pointer]:
            - link "Employee List" [ref=f5e136]:
              - /url: "#"
          - listitem [ref=f5e137] [cursor=pointer]:
            - link "Add Employee" [ref=f5e138]:
              - /url: "#"
          - listitem [ref=f5e139] [cursor=pointer]:
            - link "Reports" [ref=f5e140]:
              - /url: "#"
          - button "" [ref=f5e142] [cursor=pointer]
  - generic [ref=f5e144]:
    - generic [ref=f5e147]:
      - heading "Add Employee" [level=6] [ref=f5e148]
      - separator [ref=f5e149]
      - generic [ref=f5e150]:
        - generic [ref=f5e151]:
          - generic [ref=f5e152]:
            - generic [ref=f5e154]:
              - button "Choose File"
              - generic [ref=f5e155]:
                - img "profile picture" [ref=f5e157]
                - button "" [ref=f5e158] [cursor=pointer]
            - paragraph [ref=f5e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f5e161]:
            - generic [ref=f5e162]:
              - generic [ref=f5e165]:
                - generic [ref=f5e166]: Employee Full Name*
                - generic [ref=f5e168]:
                  - textbox "First Name" [ref=f5e171]: BulkB1786457460761961
                  - textbox "Middle Name" [ref=f5e174]: Test
                  - textbox "Last Name" [ref=f5e177]: User
              - generic [ref=f5e180]:
                - generic [ref=f5e181]: Employee Id
                - textbox [ref=f5e184]: "0402"
                - generic [ref=f5e185]: Employee Id already exists
            - separator [ref=f5e186]
            - generic [ref=f5e187]:
              - paragraph [ref=f5e188]: Create Login Details
              - checkbox [ref=f5e191]
        - separator [ref=f5e193]
        - generic [ref=f5e194]:
          - paragraph [ref=f5e195]: "* Required"
          - button "Cancel" [ref=f5e196] [cursor=pointer]
          - button "Save" [active] [ref=f5e197] [cursor=pointer]
    - generic [ref=f5e198]:
      - paragraph [ref=f5e199]: OrangeHRM OS 5.9
      - paragraph [ref=f5e200]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e201] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  176 |     expect(pageOneEmployeeIds).not.toEqual(pageTwoEmployeeIds);
  177 |   });
  178 | 
  179 |   test("TC_PIM_028 - Admin should reset Employee List search filters @positive @filter @regression", async ({
  180 |     navigationPage,
  181 |     pimPage,
  182 |   }) => {
  183 |     const data = employeeListData.TC_PIM_028;
  184 | 
  185 |     await navigationPage.gotoPIM();
  186 |     await pimPage.gotoEmployeeList();
  187 |     await pimPage.filterEmployeeList({ employeeId: data.employeeId });
  188 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(data.employeeId);
  189 | 
  190 |     await pimPage.resetEmployeeFilters();
  191 | 
  192 |     await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
  193 |     await expect(pimPage.employeeNameFilterInput).toHaveValue(data.emptyValue);
  194 |     expect((await pimPage.getVisibleEmployeeIds()).length).toBeGreaterThan(0);
  195 |   });
  196 | 
  197 |   test("TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression", async ({
  198 |     page,
  199 |     navigationPage,
  200 |     pimPage,
  201 |   }) => {
  202 |     const data = employeeListData.TC_PIM_029;
  203 |     const employee = createEmployee(data.employee);
  204 | 
  205 |     await navigationPage.gotoPIM();
  206 |     await pimPage.gotoAddEmployee();
  207 |     await pimPage.addEmployee(employee);
  208 | 
  209 |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  210 |       timeout: 20_000,
  211 |     });
  212 | 
  213 |     await pimPage.gotoEmployeeList();
  214 | 
  215 |     const partialName = employee.firstName.substring(0, data.partialNameLength);
  216 |     const fullName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`;
  217 | 
  218 |     await pimPage.selectEmployeeFromAutocomplete(partialName, fullName);
  219 |     await pimPage.clickOnFilterSearch();
  220 |   });
  221 | 
  222 |   test("TC_PIM_037 - Admin should cancel employee deletion @negative @delete @regression", async ({
  223 |     navigationPage,
  224 |     pimPage,
  225 |   }) => {
  226 |     test.setTimeout(120_000);
  227 |     const data = employeeListData.TC_PIM_037;
  228 |     const employee = createEmployee(data.employee);
  229 | 
  230 |     await navigationPage.gotoPIM();
  231 |     await pimPage.gotoAddEmployee();
  232 |     const employeeId = await pimPage.addEmployee(employee);
  233 | 
  234 |     await pimPage.gotoEmployeeList();
  235 |     await pimPage.filterEmployeeList({ employeeId });
  236 |     await pimPage.clickOnFilterSearch();
  237 |     await pimPage.verifyEmployeeSearchResult(
  238 |       employeeId,
  239 |       employee.firstName,
  240 |       employee.lastName,
  241 |     );
  242 | 
  243 |     await pimPage.cancelEmployeeDeletion(employeeId);
  244 |     await pimPage.verifyEmployeeSearchResult(
  245 |       employeeId,
  246 |       employee.firstName,
  247 |       employee.lastName,
  248 |     );
  249 | 
  250 |     await pimPage.deleteEmployeeById(employeeId);
  251 |     await pimPage.filterEmployeeList({ employeeId });
  252 |     await pimPage.clickOnFilterSearch();
  253 |     await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  254 |   });
  255 | 
  256 |   test("TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression", async ({
  257 |     page,
  258 |     navigationPage,
  259 |     pimPage,
  260 |   }) => {
  261 |     const data = employeeListData.TC_PIM_038;
  262 |     const firstEmployee = createEmployee(data.firstEmployee);
  263 |     const secondEmployee = createEmployee(data.secondEmployee);
  264 | 
  265 |     await navigationPage.gotoPIM();
  266 |     await pimPage.gotoAddEmployee();
  267 |     const firstEmployeeId = await pimPage.addEmployee(firstEmployee);
  268 | 
  269 |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  270 |       timeout: 15_000,
  271 |     });
  272 | 
  273 |     await pimPage.gotoAddEmployee();
  274 |     const secondEmployeeId = await pimPage.addEmployee(secondEmployee);
  275 | 
> 276 |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      |                ^ TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
  277 |       timeout: 15_000,
  278 |     });
  279 | 
  280 |     await pimPage.gotoEmployeeList();
  281 |     await expect(pimPage.loadingSpinner).toBeHidden();
  282 |     await pimPage.selectEmployeeById(firstEmployeeId);
  283 |     await pimPage.selectEmployeeById(secondEmployeeId);
  284 |     await pimPage.deleteSelectedEmployees();
  285 | 
  286 |     for (const employeeId of [firstEmployeeId, secondEmployeeId]) {
  287 |       await pimPage.filterEmployeeList({ employeeId });
  288 |       await pimPage.clickOnFilterSearch();
  289 |       await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  290 |       await pimPage.resetEmployeeFilters();
  291 |     }
  292 |   });
  293 | 
  294 |   test("TC_PIM_039 - Admin should open employee personal details from the Employee List @positive @navigation @regression", async ({
  295 |     page,
  296 |     navigationPage,
  297 |     pimPage,
  298 |   }) => {
  299 |     test.setTimeout(120_000);
  300 |     const data = employeeListData.TC_PIM_039;
  301 |     const employee = createEmployee(data.employee);
  302 | 
  303 |     await navigationPage.gotoPIM();
  304 |     await pimPage.gotoAddEmployee();
  305 |     const employeeId = await pimPage.addEmployee(employee);
  306 | 
  307 |     await pimPage.gotoEmployeeList();
  308 |     await pimPage.filterEmployeeList({ employeeId });
  309 |     await pimPage.clickOnFilterSearch();
  310 |     await pimPage.openEmployeeById(employeeId);
  311 | 
  312 |     await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);
  313 | 
  314 |     await pimPage.gotoEmployeeList();
  315 |     await pimPage.filterEmployeeList({ employeeId });
  316 |     await pimPage.clickOnFilterSearch();
  317 |     await pimPage.deleteEmployeeById(employeeId);
  318 |     await pimPage.filterEmployeeList({ employeeId });
  319 |     await pimPage.clickOnFilterSearch();
  320 |     await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  321 |   });
  322 | 
  323 |   test("TC_PIM_040 - Admin should select and deselect all employees on the current page @positive @selection @regression", async ({
  324 |     navigationPage,
  325 |     pimPage,
  326 |   }) => {
  327 |     test.setTimeout(120_000);
  328 |     await navigationPage.gotoPIM();
  329 |     await pimPage.gotoEmployeeList();
  330 |     await pimPage.selectAllVisibleEmployees();
  331 |     await pimPage.deselectAllVisibleEmployees();
  332 |   });
  333 | });
  334 | 
```