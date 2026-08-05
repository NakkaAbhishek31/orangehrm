# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_068 - Admin should select and deselect an individual System User @positive @selection @regression
- Location: tests\Admin\admin-users.spec.ts:2177:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.orangehrm-horizontal-padding button.oxd-button--label-danger').filter({ has: locator('i.bi-trash-fill') })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.orangehrm-horizontal-padding button.oxd-button--label-danger').filter({ has: locator('i.bi-trash-fill') })

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
      - paragraph: mandaa user
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
- textbox: Admin
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
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
    - row " Admin Admin mandaa user Enabled  ":
      - cell "":
        - checkbox "" [checked]
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "mandaa user"
      - cell "Enabled"
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
  2175 | });
  2176 | 
  2177 | test.only( 'TC_ADMIN_068 - Admin should select and deselect an individual System User @positive @selection @regression',
  2178 |   async ({
  2179 |     page,
  2180 |     loginPage,
  2181 |     navigationPage,
  2182 |     adminPage,
  2183 |   }) => {
  2184 |     await loginPage.visitPage();
  2185 | 
  2186 |     await loginPage.login(
  2187 |       'Admin',
  2188 |       'admin123'
  2189 |     );
  2190 | 
  2191 |     await loginPage.verifyLoginSuccessful();
  2192 | 
  2193 |     await navigationPage.gotoAdmin();
  2194 |     await adminPage.gotoUserManagementUsers();
  2195 | 
  2196 |     await adminPage.searchSystemUsers({
  2197 |       username: 'Admin',
  2198 |     });
  2199 | 
  2200 |     await expect(
  2201 |       adminPage.userRows
  2202 |     ).toHaveCount(1);
  2203 | 
  2204 |     const adminRow =
  2205 |       adminPage.userRows.filter({
  2206 |         has: page
  2207 |           .locator('.oxd-table-cell')
  2208 |           .nth(1)
  2209 |           .getByText('Admin', {
  2210 |             exact: true,
  2211 |           }),
  2212 |       });
  2213 | 
  2214 |     await expect(adminRow).toBeVisible();
  2215 | 
  2216 |     const rowCheckbox =
  2217 |       adminRow.locator(
  2218 |         'input[type="checkbox"]'
  2219 |       );
  2220 | 
  2221 |     const checkboxLabel =
  2222 |       adminRow.locator(
  2223 |         '.oxd-checkbox-wrapper label'
  2224 |       );
  2225 | 
  2226 |     // Select the row.
  2227 |     await checkboxLabel.click();
  2228 | 
  2229 |     await expect(
  2230 |       rowCheckbox
  2231 |     ).toBeChecked();
  2232 | 
  2233 |     await expect(
  2234 |       adminPage.deleteSelectedButton
> 2235 |     ).toBeVisible();
       |       ^ Error: expect(locator).toBeVisible() failed
  2236 | 
  2237 |     // Deselect the row.
  2238 |     await checkboxLabel.click();
  2239 | 
  2240 |     await expect(
  2241 |       rowCheckbox
  2242 |     ).not.toBeChecked();
  2243 | 
  2244 |     await expect(
  2245 |       adminPage.deleteSelectedButton
  2246 |     ).not.toBeVisible();
  2247 | 
  2248 |     // Verify the Admin record was not changed.
  2249 |     await adminPage.verifySystemUserResult({
  2250 |       username: 'Admin',
  2251 |       userRole: 'Admin',
  2252 |       status: 'Enabled',
  2253 |     });
  2254 |   }
  2255 | );
  2256 | 
```