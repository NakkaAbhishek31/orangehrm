# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:186:6

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(1)
Expected: "Enabled"
Received: "Admin"
Timeout:  10000ms

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(1)
    23 × locator resolved to <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div>
       - unexpected value "Admin"

```

```yaml
- cell "Admin"
```

# Test source

```ts
  131 | 
  132 | test('TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression',
  133 |   async ({ loginPage, navigationPage, adminPage }) => {
  134 |     const status = 'Enabled';
  135 |     // Login as Admin.
  136 |    await loginPage.visitPage();
  137 |    await loginPage.login("Admin", "admin123");
  138 |    await loginPage.verifyLoginSuccessful();
  139 |     // Navigate to Admin → User Management → Users.
  140 |       await navigationPage.gotoAdmin();
  141 |   await adminPage.gotoUserManagementUsers();
  142 |     // Select “Enabled” from the Status filter.
  143 |     // Click Search.
  144 |      await adminPage.searchSystemUsers({
  145 |       status
  146 |      });
  147 |     await expect(
  148 |       adminPage.userRows.first()
  149 |     ).toBeVisible({
  150 |       timeout: 15_000,
  151 |     });
  152 | 
  153 |     const rowCount =
  154 |       await adminPage.userRows.count();
  155 | 
  156 |     expect(rowCount).toBeGreaterThan(0);
  157 | 
  158 |     for (
  159 |       let index = 0;
  160 |       index < rowCount;
  161 |       index++
  162 |     ) {
  163 |       const statusCell = adminPage.userRows
  164 |         .nth(index)
  165 |         .locator('.oxd-table-cell')
  166 |         .nth(4);
  167 | 
  168 |       await expect(statusCell).toHaveText(
  169 |         status
  170 |       );
  171 |     }
  172 | 
  173 |     await expect(
  174 |       adminPage.noRecordsFound
  175 |     ).not.toBeVisible();
  176 | 
  177 |     await adminPage.resetSystemUserFilters();
  178 | 
  179 |     await expect(
  180 |       adminPage.statusDropdown
  181 |     ).toContainText('Select');
  182 |   
  183 |   }
  184 | );
  185 | 
  186 | test('TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression',
  187 |   async ({ loginPage, navigationPage, adminPage }) => {
  188 |     const filters = {
  189 |   username: 'Admin',
  190 |   userRole: 'Admin',
  191 |   status: 'Enabled',
  192 | } as const;
  193 |      await loginPage.visitPage();
  194 |    await loginPage.login("Admin", "admin123");
  195 |    await loginPage.verifyLoginSuccessful();
  196 |     // Navigate to Admin → User Management → Users.
  197 |       await navigationPage.gotoAdmin();
  198 |   await adminPage.gotoUserManagementUsers();
  199 |     // Select “Enabled” from the Status filter.
  200 |     // Click Search.
  201 |     // Enter “Admin” in the Username filter.
  202 |     // Select “Admin” as User Role.
  203 |     // Select “Enabled” as Status.
  204 |     // Click Search.
  205 |      await adminPage.searchSystemUsers(filters);
  206 |     // Verify exactly one matching row appears.
  207 |     // Verify Username is “Admin”.
  208 |     // Verify User Role is “Admin”.
  209 |     // Verify Status is “Enabled”.
  210 |     // Reset all filters.
  211 |        await expect(
  212 |       adminPage.userRows.first()
  213 |     ).toBeVisible({
  214 |       timeout: 15_000,
  215 |     });
  216 | 
  217 |    const rowCount =
  218 |       await adminPage.userRows.count();
  219 | 
  220 |     expect(rowCount).toBeGreaterThan(0);
  221 | 
  222 |     for (
  223 |       let index = 0;
  224 |       index < rowCount;
  225 |       index++
  226 |     ) {
  227 |       const statusCell = adminPage.userRows
  228 |         .nth(index)
  229 |         .locator('.oxd-table-cell').nth(1);
  230 | 
> 231 |       await expect(statusCell).toHaveText(filters.status);
      |                                ^ Error: expect(locator).toHaveText(expected) failed
  232 |         await expect(statusCell).toHaveText(filters.username);
  233 |           await expect(statusCell).toHaveText(filters.userRole);
  234 |     }
  235 | 
  236 |     await expect(
  237 |       adminPage.noRecordsFound
  238 |     ).not.toBeVisible();
  239 | 
  240 |     await adminPage.resetSystemUserFilters();
  241 | 
  242 |   }
  243 | );
```