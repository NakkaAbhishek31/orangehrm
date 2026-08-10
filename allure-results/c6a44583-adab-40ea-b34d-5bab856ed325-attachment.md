# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_066 - Admin should filter System Users by disabled status @positive @filter @status @regression
- Location: tests\Admin\admin-users.spec.ts:2001:5

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
      - paragraph: kpqsodrc t
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
    - row " ess178591322061341 ESS Auto178591322061341 User Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess178591322061341"
      - cell "ESS"
      - cell "Auto178591322061341 User"
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
  1974 |   // Employee Name should be rejected because no
  1975 |   // autocomplete record was selected.
  1976 |   await expect(adminPage.employeeNameValidation).toBeVisible({
  1977 |     timeout: 10_000,
  1978 |   });
  1979 | 
  1980 |   await expect(adminPage.employeeNameValidation).toHaveText("Invalid");
  1981 | 
  1982 |   await expect(adminPage.addEmployeeNameInput).toHaveValue(invalidEmployeeName);
  1983 | 
  1984 |   // Verify the System User was not created.
  1985 |   await expect(page).toHaveURL(/admin\/saveSystemUser/);
  1986 | 
  1987 |   await expect(
  1988 |     adminPage.toastMessage.filter({
  1989 |       hasText: /Successfully Saved/i,
  1990 |     }),
  1991 |   ).not.toBeVisible();
  1992 | 
  1993 |   // Cancel and return to System Users.
  1994 |   await adminPage.addUserCancelButton.click();
  1995 | 
  1996 |   await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  1997 | 
  1998 |   await expect(adminPage.systemUsersHeading).toBeVisible();
  1999 | });
  2000 | 
  2001 | test("TC_ADMIN_066 - Admin should filter System Users by disabled status @positive @filter @status @regression", async ({
  2002 |   loginPage,
  2003 |   navigationPage,
  2004 |   pimPage,
  2005 |   adminPage,
  2006 | }) => {
  2007 |   test.setTimeout(180_000);
  2008 | 
  2009 |   const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  2010 | 
  2011 |   const firstName = `Auto${uniqueValue}`;
  2012 |   const middleName = "Test";
  2013 |   const lastName = "User";
  2014 |   const username = `ess${uniqueValue}`;
  2015 |   const password = "Test@12345";
  2016 | 
  2017 |   await loginPage.visitPage();
  2018 | 
  2019 |   await loginPage.login("Admin", "admin123");
  2020 | 
  2021 |   await loginPage.verifyLoginSuccessful();
  2022 | 
  2023 |   // Create a temporary employee.
  2024 |   await navigationPage.gotoPIM();
  2025 |   await pimPage.gotoAddEmployee();
  2026 | 
  2027 |   const employeeId = await pimPage.addEmployee({
  2028 |     firstName,
  2029 |     middleName,
  2030 |     lastName,
  2031 |   });
  2032 | 
  2033 |   const employeeName = `${firstName} ${middleName} ${lastName}`;
  2034 | 
  2035 |   const employeeTableName = `${firstName} ${lastName}`;
  2036 | 
  2037 |   // Create a Disabled ESS System User.
  2038 |   await navigationPage.gotoAdmin();
  2039 |   await adminPage.gotoUserManagementUsers();
  2040 |   await adminPage.gotoAddSystemUser();
  2041 | 
  2042 |   await expect(adminPage.addUserHeading).toBeVisible();
  2043 | 
  2044 |   await adminPage.fillSystemUserForm({
  2045 |     userRole: "ESS",
  2046 |     employeeName,
  2047 |     status: "Disabled",
  2048 |     username,
  2049 |     password,
  2050 |   });
  2051 | 
  2052 |   await adminPage.saveSystemUser();
  2053 | 
  2054 |   // Filter all users by Disabled status.
  2055 |   await adminPage.searchSystemUsers({
  2056 |     status: "Disabled",
  2057 |   });
  2058 | 
  2059 |   await expect(adminPage.userRows.first()).toBeVisible({
  2060 |     timeout: 15_000,
  2061 |   });
  2062 | 
  2063 |   const rowCount = await adminPage.userRows.count();
  2064 | 
  2065 |   expect(rowCount).toBeGreaterThan(0);
  2066 | 
  2067 |   // Status is column index 4.
  2068 |   for (let index = 0; index < rowCount; index++) {
  2069 |     const statusCell = adminPage.userRows
  2070 |       .nth(index)
  2071 |       .locator(".oxd-table-cell")
  2072 |       .nth(4);
  2073 | 
> 2074 |     await expect(statusCell).toHaveText("Disabled");
       |                              ^ Error: expect(locator).toHaveText(expected) failed
  2075 |   }
  2076 | 
  2077 |   await expect(adminPage.noRecordsFound).not.toBeVisible();
  2078 | 
  2079 |   await adminPage.resetSystemUserFilters();
  2080 | 
  2081 |   // Search for the exact temporary user.
  2082 |   await adminPage.searchSystemUsers({
  2083 |     username,
  2084 |     status: "Disabled",
  2085 |   });
  2086 | 
  2087 |   await expect(adminPage.userRows).toHaveCount(1);
  2088 | 
  2089 |   await adminPage.verifySystemUserResult({
  2090 |     username,
  2091 |     userRole: "ESS",
  2092 |     employeeName: employeeTableName,
  2093 |     status: "Disabled",
  2094 |   });
  2095 | 
  2096 |   // Cleanup the temporary System User.
  2097 |   await adminPage.deleteSystemUserByUsername(username);
  2098 | 
  2099 |   await adminPage.searchSystemUsers({
  2100 |     username,
  2101 |   });
  2102 | 
  2103 |   await expect(adminPage.userRows).toHaveCount(0);
  2104 | 
  2105 |   await expect(adminPage.noRecordsFound).toBeVisible();
  2106 | 
  2107 |   // Cleanup the temporary employee.
  2108 |   await navigationPage.gotoPIM();
  2109 |   await pimPage.gotoEmployeeList();
  2110 | 
  2111 |   await pimPage.filterEmployeeList({
  2112 |     employeeId,
  2113 |   });
  2114 | 
  2115 |   await pimPage.clickOnFilterSearch();
  2116 | 
  2117 |   await pimPage.deleteEmployeeById(employeeId);
  2118 | 
  2119 |   await pimPage.filterEmployeeList({
  2120 |     employeeId,
  2121 |   });
  2122 | 
  2123 |   await pimPage.clickOnFilterSearch();
  2124 | 
  2125 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  2126 | });
  2127 | 
  2128 | test("TC_ADMIN_067 - Admin should open an existing System User for editing @positive @navigation @edit @regression", async ({
  2129 |   page,
  2130 |   loginPage,
  2131 |   navigationPage,
  2132 |   adminPage,
  2133 | }) => {
  2134 |   await loginPage.visitPage();
  2135 | 
  2136 |   await loginPage.login("Admin", "admin123");
  2137 | 
  2138 |   await loginPage.verifyLoginSuccessful();
  2139 | 
  2140 |   await navigationPage.gotoAdmin();
  2141 |   await adminPage.gotoUserManagementUsers();
  2142 | 
  2143 |   // Search for the logged-in Admin user.
  2144 |   await adminPage.searchSystemUsers({
  2145 |     username: "Admin",
  2146 |   });
  2147 | 
  2148 |   await expect(adminPage.userRows).toHaveCount(1);
  2149 | 
  2150 |   await adminPage.verifySystemUserResult({
  2151 |     username: "Admin",
  2152 |     userRole: "Admin",
  2153 |     status: "Enabled",
  2154 |   });
  2155 | 
  2156 |   // Open the matching user.
  2157 |   await adminPage.openSystemUserForEditing("Admin");
  2158 | 
  2159 |   await expect(page).toHaveURL(/admin\/saveSystemUser\/\d+/);
  2160 | 
  2161 |   await expect(adminPage.editUserHeading).toBeVisible();
  2162 | 
  2163 |   await expect(adminPage.addUsernameInput).toHaveValue("Admin");
  2164 | 
  2165 |   await expect(adminPage.addUserRoleDropdown).toContainText("Admin");
  2166 | 
  2167 |   await expect(adminPage.addStatusDropdown).toContainText("Enabled");
  2168 | 
  2169 |   // Return without changing the shared Admin user.
  2170 |   await adminPage.addUserCancelButton.click();
  2171 | 
  2172 |   await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  2173 | 
  2174 |   await expect(adminPage.systemUsersHeading).toBeVisible();
```