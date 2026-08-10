# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_PIM_083 - Admin should search using matching employee ID and employee name @positive @search @regression
- Location: tests\Admin\admin-users.spec.ts:3097:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//div[@class=\'oxd-grid-4 orangehrm-full-width-grid\']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]')
Expected substring: "Combined44121b92"
Received string:    ""
Timeout: 10000ms

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('//div[@class=\'oxd-grid-4 orangehrm-full-width-grid\']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]')
    23 × locator resolved to <input data-v-75e744cd="" placeholder="Type for hints..."/>
       - unexpected value ""

```

```yaml
- textbox "Type for hints...": Combined44121b92 Test Search
```

# Test source

```ts
  3063 | 
  3064 |   await expect(
  3065 |     pimPage.employeeIdFilterInput
  3066 |   ).toHaveValue("");
  3067 | 
  3068 |   await expect(pimPage.loadingSpinner).toBeHidden({
  3069 |     timeout: 15_000,
  3070 |   });
  3071 | 
  3072 |   // Confirm that the employee still exists.
  3073 |   await pimPage.filterEmployeeList({
  3074 |     employeeId,
  3075 |   });
  3076 | 
  3077 |   await pimPage.clickOnFilterSearch();
  3078 | 
  3079 |   await pimPage.verifyEmployeeSearchResult(
  3080 |     employeeId,
  3081 |     employee.firstName,
  3082 |     employee.lastName
  3083 |   );
  3084 | 
  3085 |   // Cleanup
  3086 |   await pimPage.deleteEmployeeById(employeeId);
  3087 | 
  3088 |   await pimPage.filterEmployeeList({
  3089 |     employeeId,
  3090 |   });
  3091 | 
  3092 |   await pimPage.clickOnFilterSearch();
  3093 | 
  3094 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  3095 | });
  3096 | 
  3097 | test("TC_PIM_083 - Admin should search using matching employee ID and employee name @positive @search @regression", async ({
  3098 |   loginPage,
  3099 |   navigationPage,
  3100 |   pimPage,
  3101 | }, testInfo) => {
  3102 |   test.setTimeout(120_000);
  3103 | 
  3104 |   const uniqueValue = randomUUID()
  3105 |     .replaceAll("-", "")
  3106 |     .slice(0, 8);
  3107 | 
  3108 |   const employee = {
  3109 |     firstName: `Combined${uniqueValue}`,
  3110 |     middleName: "Test",
  3111 |     lastName: "Search",
  3112 |     employeeId:
  3113 |       `${Date.now().toString().slice(-6)}` +
  3114 |       `${testInfo.workerIndex}6`,
  3115 |   };
  3116 | 
  3117 |   await loginPage.visitPage();
  3118 |   await loginPage.login("Admin", "admin123");
  3119 |   await loginPage.verifyLoginSuccessful();
  3120 | 
  3121 |   await navigationPage.gotoPIM();
  3122 |   await pimPage.gotoAddEmployee();
  3123 | 
  3124 |   const employeeId = await pimPage.addEmployee({
  3125 |     firstName: employee.firstName,
  3126 |     middleName: employee.middleName,
  3127 |     lastName: employee.lastName,
  3128 |     employeeId: employee.employeeId,
  3129 |   });
  3130 | 
  3131 |   await expect(pimPage.personalDetailsHeading).toBeVisible({
  3132 |     timeout: 15_000,
  3133 |   });
  3134 | 
  3135 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  3136 | 
  3137 |   await pimPage.gotoEmployeeList();
  3138 | 
  3139 |   /*
  3140 |    * Both filters belong to the same employee, so exactly one
  3141 |    * matching record should be returned.
  3142 |    */
  3143 |   await pimPage.filterEmployeeList({
  3144 |     employeeId,
  3145 |     employeeName: employee.firstName,
  3146 |   });
  3147 | 
  3148 |   await pimPage.clickOnFilterSearch();
  3149 | 
  3150 |   await pimPage.verifyEmployeeSearchResult(
  3151 |     employeeId,
  3152 |     employee.firstName,
  3153 |     employee.lastName
  3154 |   );
  3155 | 
  3156 |   // Ensure the entered filters remain populated.
  3157 |   await expect(
  3158 |     pimPage.employeeIdFilterInput
  3159 |   ).toHaveValue(employeeId);
  3160 | 
  3161 |   await expect(
  3162 |     pimPage.employeeNameFilterInput
> 3163 |   ).toContainText(employee.firstName);
       |     ^ Error: expect(locator).toContainText(expected) failed
  3164 | 
  3165 |   // Cleanup
  3166 |   await pimPage.deleteEmployeeById(employeeId);
  3167 | 
  3168 |   await pimPage.filterEmployeeList({
  3169 |     employeeId,
  3170 |   });
  3171 | 
  3172 |   await pimPage.clickOnFilterSearch();
  3173 | 
  3174 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  3175 | });
  3176 | 
  3177 | test("TC_PIM_084 - Admin should open employee details after cancelling deletion @negative @delete @navigation @regression", async ({
  3178 |   page,
  3179 |   loginPage,
  3180 |   navigationPage,
  3181 |   pimPage,
  3182 | }, testInfo) => {
  3183 |   test.setTimeout(120_000);
  3184 | 
  3185 |   const uniqueValue = randomUUID()
  3186 |     .replaceAll("-", "")
  3187 |     .slice(0, 8);
  3188 | 
  3189 |   const employee = {
  3190 |     firstName: `Cancel${uniqueValue}`,
  3191 |     middleName: "Test",
  3192 |     lastName: "Remain",
  3193 |     employeeId:
  3194 |       `${Date.now().toString().slice(-6)}` +
  3195 |       `${testInfo.workerIndex}7`,
  3196 |   };
  3197 | 
  3198 |   await loginPage.visitPage();
  3199 |   await loginPage.login("Admin", "admin123");
  3200 |   await loginPage.verifyLoginSuccessful();
  3201 | 
  3202 |   await navigationPage.gotoPIM();
  3203 |   await pimPage.gotoAddEmployee();
  3204 | 
  3205 |   const employeeId = await pimPage.addEmployee({
  3206 |     firstName: employee.firstName,
  3207 |     middleName: employee.middleName,
  3208 |     lastName: employee.lastName,
  3209 |     employeeId: employee.employeeId,
  3210 |   });
  3211 | 
  3212 |   await expect(pimPage.personalDetailsHeading).toBeVisible({
  3213 |     timeout: 15_000,
  3214 |   });
  3215 | 
  3216 |   await pimPage.gotoEmployeeList();
  3217 | 
  3218 |   await pimPage.filterEmployeeList({
  3219 |     employeeId,
  3220 |   });
  3221 | 
  3222 |   await pimPage.clickOnFilterSearch();
  3223 | 
  3224 |   await pimPage.verifyEmployeeSearchResult(
  3225 |     employeeId,
  3226 |     employee.firstName,
  3227 |     employee.lastName
  3228 |   );
  3229 | 
  3230 |   // Open the delete confirmation dialog and cancel it.
  3231 |   await pimPage.cancelEmployeeDeletion(employeeId);
  3232 | 
  3233 |   // The employee should remain in the search results.
  3234 |   await pimPage.verifyEmployeeSearchResult(
  3235 |     employeeId,
  3236 |     employee.firstName,
  3237 |     employee.lastName
  3238 |   );
  3239 | 
  3240 |   // Verify the employee record can still be opened.
  3241 |   await pimPage.openEmployeeById(employeeId);
  3242 | 
  3243 |   await expect(page).toHaveURL(
  3244 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  3245 |     {
  3246 |       timeout: 15_000,
  3247 |     }
  3248 |   );
  3249 | 
  3250 |   await expect(pimPage.firstnameInput).toHaveValue(
  3251 |     employee.firstName
  3252 |   );
  3253 | 
  3254 |   await expect(pimPage.middlenameInput).toHaveValue(
  3255 |     employee.middleName
  3256 |   );
  3257 | 
  3258 |   await expect(pimPage.lastnameInput).toHaveValue(
  3259 |     employee.lastName
  3260 |   );
  3261 | 
  3262 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  3263 | 
```