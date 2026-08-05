# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_068 - Logged-in Admin user should be protected from deletion @negative @security @delete @regression
- Location: tests\Admin\admin-users.spec.ts:2177:6

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('Admin', { exact: true }) }).locator('input[type="checkbox"]')
Expected: disabled
Received: enabled
Timeout:  10000ms

Call log:
  - Expect "toBeDisabled" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('Admin', { exact: true }) }).locator('input[type="checkbox"]')
    23 × locator resolved to <input type="checkbox" data-v-6179b72a=""/>
       - unexpected value "enabled"

```

```yaml
- checkbox ""
```

# Test source

```ts
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
  2128 | test.only("TC_ADMIN_067 - Admin should open an existing System User for editing @positive @navigation @edit @regression", async ({
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
  2175 | });
  2176 | 
  2177 | test.only("TC_ADMIN_068 - Logged-in Admin user should be protected from deletion @negative @security @delete @regression", async ({
  2178 |   page,
  2179 |   loginPage,
  2180 |   navigationPage,
  2181 |   adminPage,
  2182 | }) => {
  2183 |   await loginPage.visitPage();
  2184 | 
  2185 |   await loginPage.login("Admin", "admin123");
  2186 | 
  2187 |   await loginPage.verifyLoginSuccessful();
  2188 | 
  2189 |   await navigationPage.gotoAdmin();
  2190 |   await adminPage.gotoUserManagementUsers();
  2191 | 
  2192 |   // Search for the currently logged-in user.
  2193 |   await adminPage.searchSystemUsers({
  2194 |     username: "Admin",
  2195 |   });
  2196 | 
  2197 |   await expect(adminPage.userRows).toHaveCount(1);
  2198 | 
  2199 |   const adminRow = adminPage.userRows.filter({
  2200 |     has: page.locator(".oxd-table-cell").nth(1).getByText("Admin", {
  2201 |       exact: true,
  2202 |     }),
  2203 |   });
  2204 | 
  2205 |   await expect(adminRow).toHaveCount(1);
  2206 | 
  2207 |   await expect(adminRow).toBeVisible();
  2208 | 
  2209 |   const adminCheckbox = adminRow.locator('input[type="checkbox"]');
  2210 | 
  2211 |   // The logged-in user must not be selectable
  2212 |   // for bulk deletion.
> 2213 |   await expect(adminCheckbox).toBeDisabled();
       |                               ^ Error: expect(locator).toBeDisabled() failed
  2214 | 
  2215 |   const deleteButton = adminRow.getByRole("button").filter({
  2216 |     has: page.locator("i.bi-trash"),
  2217 |   });
  2218 | 
  2219 |   const deleteButtonCount = await deleteButton.count();
  2220 | 
  2221 |   if (deleteButtonCount > 0) {
  2222 |     await expect(deleteButton).toBeDisabled();
  2223 |   } else {
  2224 |     await expect(deleteButton).toHaveCount(0);
  2225 |   }
  2226 | 
  2227 |   // Confirm the protected account still exists.
  2228 |   await adminPage.verifySystemUserResult({
  2229 |     username: "Admin",
  2230 |     userRole: "Admin",
  2231 |     status: "Enabled",
  2232 |   });
  2233 | });
  2234 | 
```