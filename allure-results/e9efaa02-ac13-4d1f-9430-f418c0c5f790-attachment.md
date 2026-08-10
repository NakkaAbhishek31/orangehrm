# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_066 - Admin should filter System Users by disabled status @positive @filter @status @regression
- Location: tests\Admin\admin-users.spec.ts:2003:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-table-body .oxd-table-card').nth(1).locator('.oxd-table-cell').nth(4)
Expected: "Disabled"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').nth(1).locator('.oxd-table-cell').nth(4)

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Odiss Adalwin
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status Disabled 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (1) Record Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " ess1786376620350626 ESS Auto1786376620350626 User Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786376620350626"
      - cell "ESS"
      - cell "Auto1786376620350626 User"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1976 |   // autocomplete record was selected.
  1977 |   await expect(adminPage.employeeNameValidation).toBeVisible({
  1978 |     timeout: 10_000,
  1979 |   });
  1980 | 
  1981 |   await expect(adminPage.employeeNameValidation).toHaveText("Invalid");
  1982 | 
  1983 |   await expect(adminPage.addEmployeeNameInput).toHaveValue(invalidEmployeeName);
  1984 | 
  1985 |   // Verify the System User was not created.
  1986 |   await expect(page).toHaveURL(/admin\/saveSystemUser/);
  1987 | 
  1988 |   await expect(
  1989 |     adminPage.toastMessage.filter({
  1990 |       hasText: /Successfully Saved/i,
  1991 |     }),
  1992 |   ).not.toBeVisible();
  1993 | 
  1994 |   // Cancel and return to System Users.
  1995 |   await adminPage.addUserCancelButton.click();
  1996 | 
  1997 |   await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  1998 | 
  1999 |   await expect(adminPage.systemUsersHeading).toBeVisible();
  2000 | });
  2001 | 
  2002 | 
  2003 | test("TC_ADMIN_066 - Admin should filter System Users by disabled status @positive @filter @status @regression", async ({
  2004 |   loginPage,
  2005 |   navigationPage,
  2006 |   pimPage,
  2007 |   adminPage,
  2008 | }) => {
  2009 |   test.setTimeout(180_000);
  2010 | 
  2011 |   const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  2012 | 
  2013 |   const firstName = `Auto${uniqueValue}`;
  2014 |   const middleName = "Test";
  2015 |   const lastName = "User";
  2016 |   const username = `ess${uniqueValue}`;
  2017 |   const password = "Test@12345";
  2018 | 
  2019 |   await loginPage.visitPage();
  2020 | 
  2021 |   await loginPage.login("Admin", "admin123");
  2022 | 
  2023 |   await loginPage.verifyLoginSuccessful();
  2024 | 
  2025 |   // Create a temporary employee.
  2026 |   await navigationPage.gotoPIM();
  2027 |   await pimPage.gotoAddEmployee();
  2028 | 
  2029 |   const employeeId = await pimPage.addEmployee({
  2030 |     firstName,
  2031 |     middleName,
  2032 |     lastName,
  2033 |   });
  2034 | 
  2035 |   const employeeName = `${firstName} ${middleName} ${lastName}`;
  2036 | 
  2037 |   const employeeTableName = `${firstName} ${lastName}`;
  2038 | 
  2039 |   // Create a Disabled ESS System User.
  2040 |   await navigationPage.gotoAdmin();
  2041 |   await adminPage.gotoUserManagementUsers();
  2042 |   await adminPage.gotoAddSystemUser();
  2043 | 
  2044 |   await expect(adminPage.addUserHeading).toBeVisible();
  2045 | 
  2046 |   await adminPage.fillSystemUserForm({
  2047 |     userRole: "ESS",
  2048 |     employeeName,
  2049 |     status: "Disabled",
  2050 |     username,
  2051 |     password,
  2052 |   });
  2053 | 
  2054 |   await adminPage.saveSystemUser();
  2055 | 
  2056 |   // Filter all users by Disabled status.
  2057 |   await adminPage.searchSystemUsers({
  2058 |     status: "Disabled",
  2059 |   });
  2060 | 
  2061 |   await expect(adminPage.userRows.first()).toBeVisible({
  2062 |     timeout: 15_000,
  2063 |   });
  2064 | 
  2065 |   const rowCount = await adminPage.userRows.count();
  2066 | 
  2067 |   expect(rowCount).toBeGreaterThan(0);
  2068 | 
  2069 |   // Status is column index 4.
  2070 |   for (let index = 0; index < rowCount; index++) {
  2071 |     const statusCell = adminPage.userRows
  2072 |       .nth(index)
  2073 |       .locator(".oxd-table-cell")
  2074 |       .nth(4);
  2075 | 
> 2076 |     await expect(statusCell).toHaveText("Disabled");
       |                              ^ Error: expect(locator).toHaveText(expected) failed
  2077 |   }
  2078 | 
  2079 |   await expect(adminPage.noRecordsFound).not.toBeVisible();
  2080 | 
  2081 |   await adminPage.resetSystemUserFilters();
  2082 | 
  2083 |   // Search for the exact temporary user.
  2084 |   await adminPage.searchSystemUsers({
  2085 |     username,
  2086 |     status: "Disabled",
  2087 |   });
  2088 | 
  2089 |   await expect(adminPage.userRows).toHaveCount(1);
  2090 | 
  2091 |   await adminPage.verifySystemUserResult({
  2092 |     username,
  2093 |     userRole: "ESS",
  2094 |     employeeName: employeeTableName,
  2095 |     status: "Disabled",
  2096 |   });
  2097 | 
  2098 |   // Cleanup the temporary System User.
  2099 |   await adminPage.deleteSystemUserByUsername(username);
  2100 | 
  2101 |   await adminPage.searchSystemUsers({
  2102 |     username,
  2103 |   });
  2104 | 
  2105 |   await expect(adminPage.userRows).toHaveCount(0);
  2106 | 
  2107 |   await expect(adminPage.noRecordsFound).toBeVisible();
  2108 | 
  2109 |   // Cleanup the temporary employee.
  2110 |   await navigationPage.gotoPIM();
  2111 |   await pimPage.gotoEmployeeList();
  2112 | 
  2113 |   await pimPage.filterEmployeeList({
  2114 |     employeeId,
  2115 |   });
  2116 | 
  2117 |   await pimPage.clickOnFilterSearch();
  2118 | 
  2119 |   await pimPage.deleteEmployeeById(employeeId);
  2120 | 
  2121 |   await pimPage.filterEmployeeList({
  2122 |     employeeId,
  2123 |   });
  2124 | 
  2125 |   await pimPage.clickOnFilterSearch();
  2126 | 
  2127 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  2128 | });
  2129 | 
  2130 | test("TC_ADMIN_067 - Admin should open an existing System User for editing @positive @navigation @edit @regression", async ({
  2131 |   page,
  2132 |   loginPage,
  2133 |   navigationPage,
  2134 |   adminPage,
  2135 | }) => {
  2136 |   await loginPage.visitPage();
  2137 | 
  2138 |   await loginPage.login("Admin", "admin123");
  2139 | 
  2140 |   await loginPage.verifyLoginSuccessful();
  2141 | 
  2142 |   await navigationPage.gotoAdmin();
  2143 |   await adminPage.gotoUserManagementUsers();
  2144 | 
  2145 |   // Search for the logged-in Admin user.
  2146 |   await adminPage.searchSystemUsers({
  2147 |     username: "Admin",
  2148 |   });
  2149 | 
  2150 |   await expect(adminPage.userRows).toHaveCount(1);
  2151 | 
  2152 |   await adminPage.verifySystemUserResult({
  2153 |     username: "Admin",
  2154 |     userRole: "Admin",
  2155 |     status: "Enabled",
  2156 |   });
  2157 | 
  2158 |   // Open the matching user.
  2159 |   await adminPage.openSystemUserForEditing("Admin");
  2160 | 
  2161 |   await expect(page).toHaveURL(/admin\/saveSystemUser\/\d+/);
  2162 | 
  2163 |   await expect(adminPage.editUserHeading).toBeVisible();
  2164 | 
  2165 |   await expect(adminPage.addUsernameInput).toHaveValue("Admin");
  2166 | 
  2167 |   await expect(adminPage.addUserRoleDropdown).toContainText("Admin");
  2168 | 
  2169 |   await expect(adminPage.addStatusDropdown).toContainText("Enabled");
  2170 | 
  2171 |   // Return without changing the shared Admin user.
  2172 |   await adminPage.addUserCancelButton.click();
  2173 | 
  2174 |   await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  2175 | 
  2176 |   await expect(adminPage.systemUsersHeading).toBeVisible();
```