# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_186 - Required validation should appear when adding an empty customer @negative @validation @project-info @regression
- Location: tests\Time\time.spec.ts:920:6

# Error details

```
TimeoutError: locator.click: Timeout 70000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add', exact: true }).first()

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
          - generic [ref=f3e113]:
            - heading "Time" [level=6] [ref=f3e114]
            - heading "/ Project Info" [level=6] [ref=f3e115]
        - link [ref=f3e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e118] [cursor=pointer]
        - list [ref=f3e124]:
          - listitem [ref=f3e125]:
            - generic [ref=f3e126] [cursor=pointer]:
              - img "profile picture" [ref=f3e127]
              - paragraph [ref=f3e128]: Surya king
              - generic [ref=f3e129]: 
      - navigation "Topbar Menu" [ref=f3e131]:
        - list [ref=f3e132]:
          - listitem [ref=f3e133] [cursor=pointer]:
            - generic [ref=f3e134]:
              - text: Timesheets
              - generic [ref=f3e135]: 
          - listitem [ref=f3e136] [cursor=pointer]:
            - generic [ref=f3e137]:
              - text: Attendance
              - generic [ref=f3e138]: 
          - listitem [ref=f3e139] [cursor=pointer]:
            - generic [ref=f3e140]:
              - text: Reports
              - generic [ref=f3e141]: 
          - listitem [ref=f3e142] [cursor=pointer]:
            - generic [ref=f3e143]:
              - text: Project Info
              - generic [ref=f3e144]: 
          - button "" [ref=f3e146] [cursor=pointer]
  - generic [ref=f3e148]:
    - generic [ref=f3e151]:
      - generic [ref=f3e152]:
        - heading "Customers" [level=6] [ref=f3e153]
        - button " Add" [ref=f3e155] [cursor=pointer]:
          - generic [ref=f3e156]: 
          - text: Add
      - generic [ref=f3e157]:
        - separator [ref=f3e158]
        - generic [ref=f3e159]: (8) Records Found
      - table [ref=f3e162]:
        - rowgroup [ref=f3e163]:
          - row [ref=f3e164]:
            - columnheader "" [ref=f3e165]:
              - generic [ref=f3e167] [cursor=pointer]:
                - checkbox "" [ref=f3e168]
                - generic [ref=f3e169]: 
            - columnheader "Name " [ref=f3e171]:
              - text: Name
              - generic [ref=f3e172]:
                - generic [ref=f3e173] [cursor=pointer]: 
                - text:  
            - columnheader "Description" [ref=f3e174]
            - columnheader "Actions" [ref=f3e175]
        - rowgroup [ref=f3e176]:
          - row [ref=f3e178]:
            - cell "" [ref=f3e179]:
              - generic [ref=f3e183]:
                - checkbox "" [ref=f3e184]
                - generic [ref=f3e185]: 
            - cell "ACME Ltd" [ref=f3e187]
            - cell "Leading apparel manufacturing chain." [ref=f3e189]
            - cell [ref=f3e191]:
              - generic [ref=f3e192]:
                - button "" [ref=f3e193] [cursor=pointer]
                - button "" [ref=f3e195] [cursor=pointer]
          - row [ref=f3e198]:
            - cell "" [ref=f3e199]:
              - generic [ref=f3e203]:
                - checkbox "" [ref=f3e204]
                - generic [ref=f3e205]: 
            - cell "Apache Software Foundation" [ref=f3e207]
            - cell "non-profit corporation to support Apache software projects" [ref=f3e209]
            - cell [ref=f3e211]:
              - generic [ref=f3e212]:
                - button "" [ref=f3e213] [cursor=pointer]
                - button "" [ref=f3e215] [cursor=pointer]
          - row [ref=f3e218]:
            - cell "" [ref=f3e219]:
              - generic [ref=f3e223]:
                - checkbox "" [ref=f3e224]
                - generic [ref=f3e225]: 
            - cell "FreeWave Technologies, Inc." [ref=f3e227]
            - cell "Its wireless data radios are utilized in industrial, government and defense, scientific, and commercial applications" [ref=f3e229]
            - cell [ref=f3e231]:
              - generic [ref=f3e232]:
                - button "" [ref=f3e233] [cursor=pointer]
                - button "" [ref=f3e235] [cursor=pointer]
          - row [ref=f3e238]:
            - cell "" [ref=f3e239]:
              - generic [ref=f3e243]:
                - checkbox "" [ref=f3e244]
                - generic [ref=f3e245]: 
            - cell "Fresh Books Software Ltd" [ref=f3e247]
            - cell [ref=f3e249]
            - cell [ref=f3e250]:
              - generic [ref=f3e251]:
                - button "" [ref=f3e252] [cursor=pointer]
                - button "" [ref=f3e254] [cursor=pointer]
          - row [ref=f3e257]:
            - cell "" [ref=f3e258]:
              - generic [ref=f3e262]:
                - checkbox "" [ref=f3e263]
                - generic [ref=f3e264]: 
            - cell "Global Corp and Co" [ref=f3e266]
            - cell "Global Corp introduces itself as a leading manufacturer and exporter of a large number of products catering to high precision equipment, Scientific Laboratory Equipments & Institutional Health Care Products." [ref=f3e268]
            - cell [ref=f3e270]:
              - generic [ref=f3e271]:
                - button "" [ref=f3e272] [cursor=pointer]
                - button "" [ref=f3e274] [cursor=pointer]
          - row [ref=f3e277]:
            - cell "" [ref=f3e278]:
              - generic [ref=f3e282]:
                - checkbox "" [ref=f3e283]
                - generic [ref=f3e284]: 
            - cell "Internal" [ref=f3e286]
            - cell [ref=f3e288]
            - cell [ref=f3e289]:
              - generic [ref=f3e290]:
                - button "" [ref=f3e291] [cursor=pointer]
                - button "" [ref=f3e293] [cursor=pointer]
          - row [ref=f3e296]:
            - cell "" [ref=f3e297]:
              - generic [ref=f3e301]:
                - checkbox "" [ref=f3e302]
                - generic [ref=f3e303]: 
            - cell "The Coca-Cola Company" [ref=f3e305]
            - cell "Multinational beverage corporation and manufacturer" [ref=f3e307]
            - cell [ref=f3e309]:
              - generic [ref=f3e310]:
                - button "" [ref=f3e311] [cursor=pointer]
                - button "" [ref=f3e313] [cursor=pointer]
          - row [ref=f3e316]:
            - cell "" [ref=f3e317]:
              - generic [ref=f3e321]:
                - checkbox "" [ref=f3e322]
                - generic [ref=f3e323]: 
            - cell "The Priceline Group" [ref=f3e325]
            - cell "American-based provider of travel and related online services to consumers" [ref=f3e327]
            - cell [ref=f3e329]:
              - generic [ref=f3e330]:
                - button "" [ref=f3e331] [cursor=pointer]
                - button "" [ref=f3e333] [cursor=pointer]
    - generic [ref=f3e336]:
      - paragraph [ref=f3e337]: OrangeHRM OS 5.9
      - paragraph [ref=f3e338]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e339] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  833  |     await timePage.gotoEmployeeReport();
  834  |     // Enter the invalid employee name.
  835  |     await timePage.reportEmployeeInput.fill(employeeName);
  836  |     // Verify autocomplete shows No Records Found.
  837  |     await expect(timePage.employeeAutocompleteDropdown).toBeVisible({
  838  |       timeout: 15_000,
  839  |     });
  840  |     // Close autocomplete.
  841  |     // Click View.
  842  |     // Verify Invalid validation.
  843  |     // Verify the report is not generated.
  844  |     // Verify autocomplete shows No Records Found.
  845  |     await expect(timePage.employeeAutocompleteDropdown).toBeVisible({
  846  |       timeout: 15_000,
  847  |     });
  848  | 
  849  |     await expect(timePage.employeeAutocompleteNoRecords).toHaveText(
  850  |       data.noRecordsMessage,
  851  |     );
  852  |     // Close autocomplete.
  853  |      
  854  |     await timePage.reportEmployeeInput.press('Escape');
  855  | 
  856  |     // Click View.
  857  |      await timePage.employeeReportViewButton.click();
  858  |     // Verify Invalid validation.
  859  |     await expect(timePage.reportEmployeeValidation).toHaveText(
  860  |       data.invalidMessage,
  861  |     );
  862  |     // Verify entered name remains displayed.
  863  |     await expect(timePage.reportEmployeeInput).toHaveValue(employeeName);
  864  |   });
  865  | test.only(
  866  |   'TC_TIME_185 - Admin should navigate to the Customers page @smoke @navigation @project-info @regression',
  867  |   async ({
  868  |     page,
  869  |     navigationPage,
  870  |     timePage,
  871  |   }) => {
  872  |     const data =
  873  |       timeData.TC_TIME_185;
  874  | 
  875  |     await navigationPage.gotoTime();
  876  | 
  877  |     await timePage.gotoCustomers();
  878  | 
  879  |     await expect(page).toHaveURL(
  880  |       new RegExp(
  881  |         `${data.expectedUrlPath}$`
  882  |       )
  883  |     );
  884  | 
  885  |     await expect(
  886  |       timePage.customersHeading
  887  |     ).toHaveText(data.pageHeading);
  888  | 
  889  |     await expect(
  890  |       timePage.addCustomerButton
  891  |     ).toBeVisible();
  892  | 
  893  |     await expect(
  894  |       timePage.customersTable
  895  |     ).toBeVisible();
  896  | 
  897  |     await expect(
  898  |       timePage.customerRows
  899  |         .first()
  900  |         .or(timePage.customerNoRecords)
  901  |     ).toBeVisible({
  902  |       timeout: 20_000,
  903  |     });
  904  | 
  905  |     const customerCount =
  906  |       await timePage.customerRows.count();
  907  | 
  908  |     if (customerCount > 0) {
  909  |       await expect(
  910  |         timePage.customerRows.first()
  911  |       ).toBeVisible();
  912  |     } else {
  913  |       await expect(
  914  |         timePage.customerNoRecords
  915  |       ).toBeVisible();
  916  |     }
  917  |   }
  918  | );
  919  | 
  920  | test.only( 'TC_TIME_186 - Required validation should appear when adding an empty customer @negative @validation @project-info @regression',
  921  |   async ({
  922  |     page,
  923  |     navigationPage,
  924  |     timePage,
  925  |   }) => {
  926  |     const data =
  927  |       timeData.TC_TIME_186;
  928  | 
  929  |     await navigationPage.gotoTime();
  930  | 
  931  |     await timePage.gotoCustomers();
  932  | 
> 933  |     await timePage.addCustomerButton.click();
       |                                      ^ TimeoutError: locator.click: Timeout 70000ms exceeded.
  934  | 
  935  |     await expect(page).toHaveURL(
  936  |       new RegExp(
  937  |         `${data.addCustomerUrlPath}$`
  938  |       )
  939  |     );
  940  | 
  941  |     await expect(
  942  |       timePage.addCustomerHeading
  943  |     ).toBeVisible();
  944  | 
  945  |     // Leave Customer Name empty.
  946  |     await expect(
  947  |       timePage.customerNameInput
  948  |     ).toHaveValue('');
  949  | 
  950  |     await timePage.customerSaveButton.click();
  951  | 
  952  |     await expect(
  953  |       timePage.customerNameValidation
  954  |     ).toBeVisible();
  955  | 
  956  |     await expect(
  957  |       timePage.customerNameValidation
  958  |     ).toHaveText(
  959  |       data.requiredMessage
  960  |     );
  961  | 
  962  |     await expect(
  963  |       timePage.customerNameInput
  964  |     ).toHaveValue('');
  965  | 
  966  |     // Invalid submission remains on Add Customer.
  967  |     await expect(page).toHaveURL(
  968  |       new RegExp(
  969  |         `${data.addCustomerUrlPath}$`
  970  |       )
  971  |     );
  972  | 
  973  |     await timePage.customerCancelButton.click();
  974  | 
  975  |     await expect(page).toHaveURL(
  976  |       new RegExp(
  977  |         `${data.customersUrlPath}$`
  978  |       )
  979  |     );
  980  | 
  981  |     await expect(
  982  |       timePage.customersHeading
  983  |     ).toBeVisible();
  984  |   }
  985  | );
  986  | 
  987  | test.only('TC_TIME_187 - Admin should cancel adding a new customer @negative @cancel @project-info @regression',
  988  |   async ({
  989  |     page,
  990  |     navigationPage,
  991  |     timePage,
  992  |   }) => {
  993  |     const data =
  994  |       timeData.TC_TIME_187;
  995  | 
  996  |     const customerName =
  997  |       `${data.customerNamePrefix}${Date.now()}`;
  998  | 
  999  |     await navigationPage.gotoTime();
  1000 | 
  1001 |     await timePage.gotoCustomers();
  1002 | 
  1003 |     await timePage.addCustomerButton.click();
  1004 | 
  1005 |     await expect(
  1006 |       timePage.addCustomerHeading
  1007 |     ).toBeVisible();
  1008 | 
  1009 |     await timePage.customerNameInput.fill(
  1010 |       customerName
  1011 |     );
  1012 | 
  1013 |     await timePage
  1014 |       .customerDescriptionInput
  1015 |       .fill(data.description);
  1016 | 
  1017 |     await expect(
  1018 |       timePage.customerNameInput
  1019 |     ).toHaveValue(customerName);
  1020 | 
  1021 |     await expect(
  1022 |       timePage.customerDescriptionInput
  1023 |     ).toHaveValue(data.description);
  1024 | 
  1025 |     // Cancel without saving.
  1026 |     await timePage.customerCancelButton.click();
  1027 | 
  1028 |     await expect(page).toHaveURL(
  1029 |       new RegExp(
  1030 |         `${data.customersUrlPath}$`
  1031 |       )
  1032 |     );
  1033 | 
```