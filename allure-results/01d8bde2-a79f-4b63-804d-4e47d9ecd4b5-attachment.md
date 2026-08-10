# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_056 - Admin should cancel System User deletion @negative @delete @regression
- Location: tests\Admin\admin-users.spec.ts:874:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card')
Expected: 1
Received: 9
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card')
    23 × locator resolved to 9 elements
       - unexpected value "9"

```

# Page snapshot

```yaml
- generic [ref=f8e3]:
  - generic:
    - complementary [ref=f8e4]:
      - navigation "Sidepanel" [ref=f8e5]:
        - generic [ref=f8e6]:
          - link [ref=f8e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f8e9]
          - text: 
        - generic [ref=f8e10]:
          - generic [ref=f8e11]:
            - generic [ref=f8e12]:
              - textbox "Search" [ref=f8e15]
              - button "" [ref=f8e16] [cursor=pointer]
            - separator [ref=f8e18]
          - list [ref=f8e19]:
            - listitem [ref=f8e20]:
              - link "Admin" [ref=f8e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f8e25]:
              - link "PIM" [ref=f8e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f8e41]:
              - link "Leave" [ref=f8e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f8e46]:
              - link "Time" [ref=f8e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f8e54]:
              - link "Recruitment" [ref=f8e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f8e62]:
              - link "My Info" [ref=f8e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f8e70]:
              - link "Performance" [ref=f8e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f8e80]:
              - link "Dashboard" [ref=f8e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f8e85]:
              - link "Directory" [ref=f8e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f8e90]:
              - link "Maintenance" [ref=f8e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f8e96]:
              - link "Claim" [ref=f8e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f8e105]:
              - link "Buzz" [ref=f8e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f8e110]:
      - generic [ref=f8e111]:
        - generic [ref=f8e112]:
          - text: 
          - generic [ref=f8e113]:
            - heading "Admin" [level=6] [ref=f8e114]
            - heading "/ User Management" [level=6] [ref=f8e115]
        - link [ref=f8e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f8e118] [cursor=pointer]
        - list [ref=f8e124]:
          - listitem [ref=f8e125]:
            - generic [ref=f8e126] [cursor=pointer]:
              - img "profile picture" [ref=f8e127]
              - paragraph [ref=f8e128]: Ge orged Russe lld
              - generic [ref=f8e129]: 
      - navigation "Topbar Menu" [ref=f8e131]:
        - list [ref=f8e132]:
          - listitem [ref=f8e133] [cursor=pointer]:
            - generic [ref=f8e134]:
              - text: User Management
              - generic [ref=f8e135]: 
          - listitem [ref=f8e136] [cursor=pointer]:
            - generic [ref=f8e137]:
              - text: Job
              - generic [ref=f8e138]: 
          - listitem [ref=f8e139] [cursor=pointer]:
            - generic [ref=f8e140]:
              - text: Organization
              - generic [ref=f8e141]: 
          - listitem [ref=f8e142] [cursor=pointer]:
            - generic [ref=f8e143]:
              - text: Qualifications
              - generic [ref=f8e144]: 
          - listitem [ref=f8e145] [cursor=pointer]:
            - link "Nationalities" [ref=f8e146]:
              - /url: "#"
          - listitem [ref=f8e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f8e148]:
              - /url: "#"
          - listitem [ref=f8e149] [cursor=pointer]:
            - generic [ref=f8e150]:
              - text: Configuration
              - generic [ref=f8e151]: 
          - button "" [ref=f8e153] [cursor=pointer]
  - generic [ref=f8e155]:
    - generic [ref=f8e157]:
      - generic [ref=f8e158]:
        - generic [ref=f8e159]:
          - heading "System Users" [level=5] [ref=f8e161]
          - button "" [ref=f8e164] [cursor=pointer]
        - separator [ref=f8e166]
        - generic [ref=f8e168]:
          - generic [ref=f8e170]:
            - generic [ref=f8e172]:
              - generic [ref=f8e173]: Username
              - textbox [ref=f8e176]: ess1786074507323198
            - generic [ref=f8e178]:
              - generic [ref=f8e179]: User Role
              - generic [ref=f8e183] [cursor=pointer]:
                - generic [ref=f8e184]: "-- Select --"
                - generic [ref=f8e185]: 
            - generic [ref=f8e188]:
              - generic [ref=f8e189]: Employee Name
              - textbox "Type for hints..." [ref=f8e194]
            - generic [ref=f8e196]:
              - generic [ref=f8e197]: Status
              - generic [ref=f8e201] [cursor=pointer]:
                - generic [ref=f8e202]: "-- Select --"
                - generic [ref=f8e203]: 
          - separator [ref=f8e205]
          - generic [ref=f8e206]:
            - button "Reset" [ref=f8e207] [cursor=pointer]
            - button "Search" [ref=f8e208] [cursor=pointer]
      - generic [ref=f8e209]:
        - button " Add" [ref=f8e211] [cursor=pointer]:
          - generic [ref=f8e212]: 
          - text: Add
        - generic [ref=f8e213]:
          - separator [ref=f8e214]
          - generic [ref=f8e215]: (9) Records Found
        - table [ref=f8e218]:
          - rowgroup [ref=f8e219]:
            - row [ref=f8e220]:
              - columnheader "" [ref=f8e221]:
                - generic [ref=f8e223] [cursor=pointer]:
                  - checkbox "" [ref=f8e224]
                  - generic [ref=f8e225]: 
              - columnheader "Username " [ref=f8e227]:
                - text: Username
                - generic [ref=f8e228]:
                  - generic [ref=f8e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f8e230]:
                - text: User Role
                - generic [ref=f8e231]:
                  - generic [ref=f8e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f8e233]:
                - text: Employee Name
                - generic [ref=f8e234]:
                  - generic [ref=f8e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f8e236]:
                - text: Status
                - generic [ref=f8e237]:
                  - generic [ref=f8e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f8e239]
          - rowgroup [ref=f8e240]:
            - row [ref=f8e242]:
              - cell "" [ref=f8e243]:
                - generic [ref=f8e247]:
                  - checkbox "" [ref=f8e248]
                  - generic [ref=f8e249]: 
              - cell "Admin" [ref=f8e251]
              - cell "Admin" [ref=f8e253]
              - cell "Ge orged Russe lld" [ref=f8e255]
              - cell "Enabled" [ref=f8e257]
              - cell [ref=f8e259]:
                - generic [ref=f8e260]:
                  - button "" [ref=f8e261] [cursor=pointer]
                  - button "" [ref=f8e263] [cursor=pointer]
            - row [ref=f8e266]:
              - cell "" [ref=f8e267]:
                - generic [ref=f8e270] [cursor=pointer]:
                  - checkbox "" [ref=f8e271]
                  - generic [ref=f8e272]: 
              - cell "Employee" [ref=f8e274]
              - cell "ESS" [ref=f8e276]
              - cell "Employee User" [ref=f8e278]
              - cell "Enabled" [ref=f8e280]
              - cell [ref=f8e282]:
                - generic [ref=f8e283]:
                  - button "" [ref=f8e284] [cursor=pointer]
                  - button "" [ref=f8e286] [cursor=pointer]
            - row [ref=f8e289]:
              - cell "" [ref=f8e290]:
                - generic [ref=f8e293] [cursor=pointer]:
                  - checkbox "" [ref=f8e294]
                  - generic [ref=f8e295]: 
              - cell "ess1786074507323198" [ref=f8e297]
              - cell "ESS" [ref=f8e299]
              - cell "Auto1786074507323198 User" [ref=f8e301]
              - cell "Enabled" [ref=f8e303]
              - cell [ref=f8e305]:
                - generic [ref=f8e306]:
                  - button "" [ref=f8e307] [cursor=pointer]
                  - button "" [ref=f8e309] [cursor=pointer]
            - row [ref=f8e312]:
              - cell "" [ref=f8e313]:
                - generic [ref=f8e316] [cursor=pointer]:
                  - checkbox "" [ref=f8e317]
                  - generic [ref=f8e318]: 
              - cell "hm17860744184211052" [ref=f8e320]
              - cell "ESS" [ref=f8e322]
              - cell "Hiring17860744184211052 Manager" [ref=f8e324]
              - cell "Enabled" [ref=f8e326]
              - cell [ref=f8e328]:
                - generic [ref=f8e329]:
                  - button "" [ref=f8e330] [cursor=pointer]
                  - button "" [ref=f8e332] [cursor=pointer]
            - row [ref=f8e335]:
              - cell "" [ref=f8e336]:
                - generic [ref=f8e339] [cursor=pointer]:
                  - checkbox "" [ref=f8e340]
                  - generic [ref=f8e341]: 
              - cell "iv17860744184211052" [ref=f8e343]
              - cell "ESS" [ref=f8e345]
              - cell "Interview17860744184211052 User" [ref=f8e347]
              - cell "Enabled" [ref=f8e349]
              - cell [ref=f8e351]:
                - generic [ref=f8e352]:
                  - button "" [ref=f8e353] [cursor=pointer]
                  - button "" [ref=f8e355] [cursor=pointer]
            - row [ref=f8e358]:
              - cell "" [ref=f8e359]:
                - generic [ref=f8e362] [cursor=pointer]:
                  - checkbox "" [ref=f8e363]
                  - generic [ref=f8e364]: 
              - cell "Ravinder" [ref=f8e366]
              - cell "Admin" [ref=f8e368]
              - cell "Ge orged Russe lld" [ref=f8e370]
              - cell "Enabled" [ref=f8e372]
              - cell [ref=f8e374]:
                - generic [ref=f8e375]:
                  - button "" [ref=f8e376] [cursor=pointer]
                  - button "" [ref=f8e378] [cursor=pointer]
            - row [ref=f8e381]:
              - cell "" [ref=f8e382]:
                - generic [ref=f8e385] [cursor=pointer]:
                  - checkbox "" [ref=f8e386]
                  - generic [ref=f8e387]: 
              - cell "Ravinder@123" [ref=f8e389]
              - cell "Admin" [ref=f8e391]
              - cell "Ge orged Russe lld" [ref=f8e393]
              - cell "Enabled" [ref=f8e395]
              - cell [ref=f8e397]:
                - generic [ref=f8e398]:
                  - button "" [ref=f8e399] [cursor=pointer]
                  - button "" [ref=f8e401] [cursor=pointer]
            - row [ref=f8e404]:
              - cell "" [ref=f8e405]:
                - generic [ref=f8e408] [cursor=pointer]:
                  - checkbox "" [ref=f8e409]
                  - generic [ref=f8e410]: 
              - cell "user1786074427043" [ref=f8e412]
              - cell "ESS" [ref=f8e414]
              - cell "Auto1786074427043 User" [ref=f8e416]
              - cell "Enabled" [ref=f8e418]
              - cell [ref=f8e420]:
                - generic [ref=f8e421]:
                  - button "" [ref=f8e422] [cursor=pointer]
                  - button "" [ref=f8e424] [cursor=pointer]
            - row [ref=f8e427]:
              - cell "" [ref=f8e428]:
                - generic [ref=f8e431] [cursor=pointer]:
                  - checkbox "" [ref=f8e432]
                  - generic [ref=f8e433]: 
              - cell "yusuf" [ref=f8e435]
              - cell "ESS" [ref=f8e437]
              - cell "muhammad qureshi" [ref=f8e439]
              - cell "Enabled" [ref=f8e441]
              - cell [ref=f8e443]:
                - generic [ref=f8e444]:
                  - button "" [ref=f8e445] [cursor=pointer]
                  - button "" [ref=f8e447] [cursor=pointer]
    - generic [ref=f8e450]:
      - paragraph [ref=f8e451]: OrangeHRM OS 5.9
      - paragraph [ref=f8e452]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f8e453] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  839  |   });
  840  | 
  841  |   // Delete the System User.
  842  |   await adminPage.deleteSystemUserByUsername(username);
  843  | 
  844  |   // Verify the System User was deleted.
  845  |   await adminPage.searchSystemUsers({
  846  |     username,
  847  |   });
  848  | 
  849  |   await expect(adminPage.userRows).toHaveCount(0);
  850  | 
  851  |   await expect(adminPage.noRecordsFound).toBeVisible();
  852  | 
  853  |   // Cleanup the temporary employee.
  854  |   await navigationPage.gotoPIM();
  855  |   await pimPage.gotoEmployeeList();
  856  | 
  857  |   await pimPage.filterEmployeeList({
  858  |     employeeId,
  859  |   });
  860  | 
  861  |   await pimPage.clickOnFilterSearch();
  862  | 
  863  |   await pimPage.deleteEmployeeById(employeeId);
  864  | 
  865  |   await pimPage.filterEmployeeList({
  866  |     employeeId,
  867  |   });
  868  | 
  869  |   await pimPage.clickOnFilterSearch();
  870  | 
  871  |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  872  | });
  873  | 
  874  | test("TC_ADMIN_056 - Admin should cancel System User deletion @negative @delete @regression", async ({
  875  |   loginPage,
  876  |   navigationPage,
  877  |   pimPage,
  878  |   adminPage,
  879  | }) => {
  880  |   test.setTimeout(180_000);
  881  | 
  882  |   const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  883  | 
  884  |   const firstName = `Auto${uniqueValue}`;
  885  |   const middleName = "Test";
  886  |   const lastName = "User";
  887  |   const username = `ess${uniqueValue}`;
  888  |   const password = "Test@12345";
  889  | 
  890  |   await loginPage.visitPage();
  891  |   await loginPage.login("Admin", "admin123");
  892  |   await loginPage.verifyLoginSuccessful();
  893  | 
  894  |   // Create a temporary employee.
  895  |   await navigationPage.gotoPIM();
  896  |   await pimPage.gotoAddEmployee();
  897  | 
  898  |   const employeeId = await pimPage.addEmployee({
  899  |     firstName,
  900  |     middleName,
  901  |     lastName,
  902  |   });
  903  | 
  904  |   const employeeName = `${firstName} ${middleName} ${lastName}`;
  905  | 
  906  |   const employeeTableName = `${firstName} ${lastName}`;
  907  | 
  908  |   // Create a temporary ESS System User.
  909  |   await navigationPage.gotoAdmin();
  910  |   await adminPage.gotoUserManagementUsers();
  911  |   await adminPage.gotoAddSystemUser();
  912  | 
  913  |   await adminPage.fillSystemUserForm({
  914  |     userRole: "ESS",
  915  |     employeeName,
  916  |     status: "Enabled",
  917  |     username,
  918  |     password,
  919  |   });
  920  | 
  921  |   await adminPage.saveSystemUser();
  922  | 
  923  |   // Search for the created user.
  924  |   await adminPage.searchSystemUsers({
  925  |     username,
  926  |   });
  927  | 
  928  |   await adminPage.verifySystemUserResult({
  929  |     username,
  930  |     userRole: "ESS",
  931  |     employeeName: employeeTableName,
  932  |     status: "Enabled",
  933  |   });
  934  | 
  935  |   // Open deletion dialog and cancel it.
  936  |   await adminPage.cancelSystemUserDeletion(username);
  937  | 
  938  |   // Verify the user still exists.
> 939  |   await expect(adminPage.userRows).toHaveCount(1);
       |                                    ^ Error: expect(locator).toHaveCount(expected) failed
  940  | 
  941  |   await adminPage.verifySystemUserResult({
  942  |     username,
  943  |     userRole: "ESS",
  944  |     employeeName: employeeTableName,
  945  |     status: "Enabled",
  946  |   });
  947  | 
  948  |   // Cleanup: delete the System User.
  949  |   await adminPage.deleteSystemUserByUsername(username);
  950  | 
  951  |   await adminPage.searchSystemUsers({
  952  |     username,
  953  |   });
  954  | 
  955  |   await expect(adminPage.userRows).toHaveCount(0);
  956  | 
  957  |   // Cleanup: delete the employee.
  958  |   await navigationPage.gotoPIM();
  959  |   await pimPage.gotoEmployeeList();
  960  | 
  961  |   await pimPage.filterEmployeeList({
  962  |     employeeId,
  963  |   });
  964  | 
  965  |   await pimPage.clickOnFilterSearch();
  966  | 
  967  |   await pimPage.deleteEmployeeById(employeeId);
  968  | 
  969  |   await pimPage.filterEmployeeList({
  970  |     employeeId,
  971  |   });
  972  | 
  973  |   await pimPage.clickOnFilterSearch();
  974  | 
  975  |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  976  | });
  977  | 
  978  | test('TC_ADMIN_057 - Admin should delete multiple System Users using bulk selection @positive @bulk-delete @regression',
  979  |   async ({
  980  |     loginPage,
  981  |     navigationPage,
  982  |     pimPage,
  983  |     adminPage,
  984  |   }) => {
  985  |     test.setTimeout(240_000);
  986  | 
  987  |     const uniqueValue =
  988  |       `${Date.now()}${Math.floor(
  989  |         Math.random() * 1000
  990  |       )}`;
  991  | 
  992  |     const firstEmployee = {
  993  |       firstName: `AutoA${uniqueValue}`,
  994  |       middleName: 'Test',
  995  |       lastName: 'User',
  996  |     };
  997  | 
  998  |     const secondEmployee = {
  999  |       firstName: `AutoB${uniqueValue}`,
  1000 |       middleName: 'Test',
  1001 |       lastName: 'User',
  1002 |     };
  1003 | 
  1004 |     const firstUsername =
  1005 |       `essA${uniqueValue}`;
  1006 | 
  1007 |     const secondUsername =
  1008 |       `essB${uniqueValue}`;
  1009 | 
  1010 |     const password = 'Test@12345';
  1011 | 
  1012 |     await loginPage.visitPage();
  1013 | 
  1014 |     await loginPage.login(
  1015 |       'Admin',
  1016 |       'admin123'
  1017 |     );
  1018 | 
  1019 |     await loginPage.verifyLoginSuccessful();
  1020 | 
  1021 |     // Create first employee.
  1022 |     await navigationPage.gotoPIM();
  1023 |     await pimPage.gotoAddEmployee();
  1024 | 
  1025 |     const firstEmployeeId =
  1026 |       await pimPage.addEmployee(
  1027 |         firstEmployee
  1028 |       );
  1029 | 
  1030 |     // Create second employee.
  1031 |     await pimPage.gotoAddEmployee();
  1032 | 
  1033 |     const secondEmployeeId =
  1034 |       await pimPage.addEmployee(
  1035 |         secondEmployee
  1036 |       );
  1037 | 
  1038 |     const firstEmployeeName =
  1039 |       `${firstEmployee.firstName} ` +
```