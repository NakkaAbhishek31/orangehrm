# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_PIM_082 - Reset should clear a selected employee name filter @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:3003:6

# Error details

```
TimeoutError: locator.fill: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'First Name' })

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: manda user
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 0h 0m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Aug 03 - Aug 09
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 0m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e175]:
          - generic [ref=f1e176]:
            - button [ref=f1e177] [cursor=pointer]
            - paragraph [ref=f1e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f1e184]:
            - button [ref=f1e185] [cursor=pointer]
            - paragraph [ref=f1e194] [cursor=pointer]: (2) Candidates to Interview
      - generic [ref=f1e196]:
        - generic [ref=f1e198]:
          - generic [ref=f1e199]: 
          - paragraph [ref=f1e200]: Quick Launch
        - separator [ref=f1e201]
        - generic [ref=f1e203]:
          - generic [ref=f1e204]:
            - button "Assign Leave" [ref=f1e205] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e208]:
              - paragraph [ref=f1e209]: Assign Leave
          - generic [ref=f1e210]:
            - button "Leave List" [ref=f1e211] [cursor=pointer]
            - generic "Leave List" [ref=f1e218]:
              - paragraph [ref=f1e219]: Leave List
          - generic [ref=f1e220]:
            - button "Timesheets" [ref=f1e221] [cursor=pointer]
            - generic "Timesheets" [ref=f1e227]:
              - paragraph [ref=f1e228]: Timesheets
          - generic [ref=f1e229]:
            - button "Apply Leave" [ref=f1e230] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e233]:
              - paragraph [ref=f1e234]: Apply Leave
          - generic [ref=f1e235]:
            - button "My Leave" [ref=f1e236] [cursor=pointer]
            - generic "My Leave" [ref=f1e241]:
              - paragraph [ref=f1e242]: My Leave
          - generic [ref=f1e243]:
            - button "My Timesheet" [ref=f1e244] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e247]:
              - paragraph [ref=f1e248]: My Timesheet
      - generic [ref=f1e250]:
        - generic [ref=f1e252]:
          - generic [ref=f1e253]: 
          - paragraph [ref=f1e254]: Buzz Latest Posts
        - separator [ref=f1e255]
        - generic [ref=f1e257]:
          - generic [ref=f1e258]:
            - generic [ref=f1e259] [cursor=pointer]:
              - img "profile picture" [ref=f1e261]
              - generic [ref=f1e262]:
                - paragraph [ref=f1e263]: manda akhil user
                - paragraph [ref=f1e264]: 2026-07-08 09:55 AM
            - separator [ref=f1e265]
            - paragraph [ref=f1e266]: the way you will treat me I will treat you in that way
          - generic [ref=f1e267]:
            - generic [ref=f1e268] [cursor=pointer]:
              - img "profile picture" [ref=f1e270]
              - generic [ref=f1e271]:
                - paragraph [ref=f1e272]: manda akhil user
                - paragraph [ref=f1e273]: 2026-07-08 09:47 AM
            - separator [ref=f1e274]
            - paragraph [ref=f1e275]: hgfcvbnm,./
          - generic [ref=f1e276]:
            - generic [ref=f1e277] [cursor=pointer]:
              - img "profile picture" [ref=f1e279]
              - generic [ref=f1e280]:
                - paragraph [ref=f1e281]: manda akhil user
                - paragraph [ref=f1e282]: 2020-08-10 09:08 AM
            - separator [ref=f1e283]
            - paragraph [ref=f1e284]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=f1e285]:
            - generic [ref=f1e286] [cursor=pointer]:
              - img "profile picture" [ref=f1e288]
              - generic [ref=f1e289]:
                - paragraph [ref=f1e290]: Sania Shaheen
                - paragraph [ref=f1e291]: 2020-08-10 09:08 AM
            - separator [ref=f1e292]
            - paragraph [ref=f1e293]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
          - generic [ref=f1e294]:
            - generic [ref=f1e295] [cursor=pointer]:
              - img "profile picture" [ref=f1e297]
              - generic [ref=f1e298]:
                - paragraph [ref=f1e299]: Rebecca Harmony
                - paragraph [ref=f1e300]: 2020-08-10 09:04 AM
            - separator [ref=f1e301]
            - paragraph [ref=f1e302]: Throwback Thursdays!!
      - generic [ref=f1e305]:
        - generic [ref=f1e306]:
          - paragraph [ref=f1e311]: Employees on Leave Today
          - generic [ref=f1e312] [cursor=pointer]: 
        - separator [ref=f1e313]
        - generic [ref=f1e315]:
          - img "No Content" [ref=f1e316]
          - paragraph [ref=f1e317]: No Employees are on Leave Today
      - generic [ref=f1e319]:
        - generic [ref=f1e321]:
          - generic [ref=f1e322]: 
          - paragraph [ref=f1e323]: Employee Distribution by Sub Unit
        - separator [ref=f1e324]
        - list [ref=f1e329]:
          - listitem [ref=f1e330] [cursor=pointer]:
            - generic "Engineering" [ref=f1e332]
          - listitem [ref=f1e333] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e335]
          - listitem [ref=f1e336] [cursor=pointer]:
            - generic "Administration" [ref=f1e338]
          - listitem [ref=f1e339] [cursor=pointer]:
            - generic "Client Services" [ref=f1e341]
          - listitem [ref=f1e342] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e344]
      - generic [ref=f1e346]:
        - generic [ref=f1e348]:
          - generic [ref=f1e349]: 
          - paragraph [ref=f1e350]: Employee Distribution by Location
        - separator [ref=f1e351]
        - list [ref=f1e356]:
          - listitem [ref=f1e357] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e359]
          - listitem [ref=f1e360] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f1e362]
          - listitem [ref=f1e363] [cursor=pointer]:
            - generic "Canadian Regional HQ" [ref=f1e365]
          - listitem [ref=f1e366] [cursor=pointer]:
            - generic "HQ - CA, USA" [ref=f1e368]
          - listitem [ref=f1e369] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e371]
    - generic [ref=f1e372]:
      - paragraph [ref=f1e373]: OrangeHRM OS 5.9
      - paragraph [ref=f1e374]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e375] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  235 |     );
  236 | 
  237 |     this.createLoginDetailsSwitch = createLoginDetailsRow.locator(
  238 |       "span.oxd-switch-input",
  239 |     );
  240 | 
  241 |     this.usernameValidation = page
  242 |       .locator(".oxd-input-group")
  243 |       .filter({
  244 |         has: page.getByText("Username", { exact: true }),
  245 |       })
  246 |       .locator(".oxd-input-field-error-message");
  247 | 
  248 |     this.canceldeletiondilogbutton = page.getByRole("button", {
  249 |       name: /No, Cancel/i,
  250 |     });
  251 | 
  252 |     this.addEmployeeIdInput = page
  253 |     .locator(".oxd-input-group")
  254 |     .filter({ hasText: "Employee Id" })
  255 |     .locator("input");
  256 |     
  257 |   }
  258 | 
  259 |   async gotoAddEmployee(): Promise<void> {
  260 |     await this.AddEmployeeLink.click();
  261 |   }
  262 | 
  263 |   // async addEmployee(details: AddEmployeeDetails): Promise<string> {
  264 |   //   if (details.firstName !== undefined) {
  265 |   //     await this.firstnameInput.fill(details.firstName);
  266 |   //   }
  267 | 
  268 |   //   if (details.middleName !== undefined) {
  269 |   //     await this.middlenameInput.fill(details.middleName);
  270 |   //   }
  271 | 
  272 |   //   if (details.lastName !== undefined) {
  273 |   //     await this.lastnameInput.fill(details.lastName);
  274 |   //   }
  275 | 
  276 |   //   let employeeId = details.employeeId ?? (await this.employeeID.inputValue());
  277 | 
  278 |   //   // if (details.employeeId !== undefined) {
  279 |   //   //   await this.employeeID.fill(employeeId);
  280 |   //   // }
  281 | 
  282 |   //   // await this.employeeID.blur();
  283 | 
  284 |   //   // const duplicateIdFound = await this.employeeIdValidation
  285 |   //   //   .waitFor({
  286 |   //   //     state: "visible",
  287 |   //   //     timeout: 3_000,
  288 |   //   //   })
  289 |   //   //   .then(() => true)
  290 |   //   //   .catch(() => false);
  291 | 
  292 |   //   // if (duplicateIdFound) {
  293 |   //   //   employeeId = `E${Date.now().toString().slice(-9)}`;
  294 | 
  295 |   //   //   await this.employeeID.fill(employeeId);
  296 |   //   //   await this.employeeID.blur();
  297 | 
  298 |   //   //   await expect(this.employeeID).toHaveValue(employeeId);
  299 |   //   //   await expect(this.employeeIdValidation).toBeHidden();
  300 |   //   // }
  301 | 
  302 |   //   if (details.profilePicturePath !== undefined) {
  303 |   //     const defaultImageSrc =
  304 |   //       await this.profilePicturePreview.getAttribute("src");
  305 | 
  306 |   //     await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  307 | 
  308 |   //     await expect(this.profilePicturePreview).not.toHaveAttribute(
  309 |   //       "src",
  310 |   //       defaultImageSrc ?? "",
  311 |   //     );
  312 |   //   }
  313 | 
  314 |   //   const personalDetailsLoaded = this.page.waitForResponse(
  315 |   //     (response) =>
  316 |   //       response.url().includes("/personal-details") &&
  317 |   //       response.request().method() === "GET" &&
  318 |   //       response.ok(),
  319 |   //     { timeout: 20_000 },
  320 |   //   );
  321 | 
  322 |   //   await this.SaveEmployeeButton.click();
  323 | 
  324 |   //   await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  325 |   //     timeout: 20_000,
  326 |   //   });
  327 | 
  328 |   //   await personalDetailsLoaded;
  329 |   //   await expect(this.loadingSpinner).toBeHidden();
  330 |   //   await expect(this.personalDetailsHeading).toBeVisible();
  331 | 
  332 |   //   return employeeId;
  333 |   // }
  334 | async addEmployee(employee: EmployeeData): Promise<string> {
> 335 |   await this.firstnameInput.fill(employee.firstName);
      |                             ^ TimeoutError: locator.fill: Timeout 30000ms exceeded.
  336 | 
  337 |   if (employee.middleName) {
  338 |     await this.middlenameInput.fill(employee.middleName);
  339 |   }
  340 | 
  341 |   await this.lastnameInput.fill(employee.lastName);
  342 | 
  343 |   /*
  344 |    * OrangeHRM generates the same next ID when multiple workers
  345 |    * open Add Employee simultaneously. Override it with a unique ID.
  346 |    */
  347 |   const employeeId =
  348 |     employee.employeeId ??
  349 |     `${Date.now().toString().slice(-6)}${Math.floor(
  350 |       Math.random() * 1000
  351 |     )
  352 |       .toString()
  353 |       .padStart(3, "0")}`;
  354 | 
  355 |   await this.employeeID.fill(employeeId);
  356 | 
  357 |   await this.SaveEmployeeButton.click();
  358 | 
  359 |   await expect(this.page).toHaveURL(
  360 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  361 |     {
  362 |       timeout: 30_000,
  363 |     }
  364 |   );
  365 | 
  366 |   await expect(this.personalDetailsHeading).toBeVisible({
  367 |     timeout: 15_000,
  368 |   });
  369 | 
  370 |   return employeeId;
  371 | }
  372 |   async gotoEmployeeList(): Promise<void> {
  373 |     await this.employeeListLink.click();
  374 |   }
  375 | 
  376 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  377 |     if (filters.employeeId !== undefined) {
  378 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  379 |     }
  380 | 
  381 |     if (filters.employeeName !== undefined) {
  382 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  383 | 
  384 |       const matchingOption = this.autocompleteOptions
  385 |         .filter({ hasText: filters.employeeName })
  386 |         .first();
  387 | 
  388 |       await expect(matchingOption).toBeVisible();
  389 |       await matchingOption.click();
  390 |     }
  391 |   }
  392 | 
  393 |   async clickOnFilterSearch(): Promise<void> {
  394 |     await this.filterSearchButton.click();
  395 |   }
  396 | 
  397 |   async verifyEmployeeSearchResult(
  398 |     employeeId: string,
  399 |     firstName: string,
  400 |     lastName: string,
  401 |   ): Promise<void> {
  402 |     await expect(this.loadingSpinner).toBeHidden();
  403 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  404 |     const cells = matchingRow.locator(".oxd-table-cell");
  405 |     const fullName = await cells.nth(2).innerText();
  406 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  407 |     await expect(cells.nth(1)).toHaveText(employeeId);
  408 |     expect(actualFirstName).toBe(firstName);
  409 |     await expect(cells.nth(3)).toHaveText(lastName);
  410 |     await expect(this.noRecordsFound).not.toBeVisible();
  411 |   }
  412 | 
  413 | async verifyNoEmployeeRecordsFound(employeeId: string) {
  414 |   await expect(this.loadingSpinner).toBeHidden({
  415 |     timeout: 15_000,
  416 |   });
  417 | 
  418 |   await expect(this.employeeRows).toHaveCount(0, {
  419 |     timeout: 15_000,
  420 |   });
  421 | 
  422 |   await expect(this.employeeIdFilterInput).toHaveValue(
  423 |     employeeId
  424 |   );
  425 | }
  426 | 
  427 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  428 |     await expect(this.personalDetailsHeading).toBeVisible();
  429 |     //await expect(this.loadingSpinner).toBeHidden();
  430 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  431 | 
  432 |     if (details.middleName !== undefined) {
  433 |       await this.middlenameInput.fill(details.middleName);
  434 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  435 |     }
```