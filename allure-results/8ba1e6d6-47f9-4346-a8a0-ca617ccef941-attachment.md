# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_042 - Admin should search for a system user by username @positive @search @regression
- Location: tests\Admin\admin-users.spec.ts:38:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('.oxd-topbar-body-nav-tab-link').filter({ hasText: 'Users' })
    - locator resolved to <a href="#" role="menuitem" class="oxd-topbar-body-nav-tab-link">Users</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Test source

```ts
  21  | readonly resetButton: Locator;
  22  | readonly addButton: Locator;
  23  | readonly systemUsersTable: Locator;
  24  | readonly userRows: Locator;
  25  | readonly loadingSpinner: Locator;
  26  | 
  27  |   constructor(page: Page) {
  28  |     this.page = page;
  29  |     this.userManagementMenu = page.locator(".oxd-topbar-body-nav-tab").filter({
  30  |       hasText: "User Management",
  31  |     });
  32  | 
  33  |     this.usersMenuItem = page.locator(".oxd-topbar-body-nav-tab-link").filter({
  34  |       hasText: "Users",
  35  |     });
  36  | 
  37  |      this.systemUsersHeading = page.getByRole(
  38  |     'heading',
  39  |     {
  40  |       name: 'System Users',
  41  |       exact: true,
  42  |     }
  43  |   );
  44  | 
  45  |    this.usernameInput = page
  46  |     .locator('.oxd-input-group')
  47  |     .filter({
  48  |       has: page.getByText('Username', {
  49  |         exact: true,
  50  |       }),
  51  |     })
  52  |     .locator('input');
  53  | 
  54  |   this.userRoleDropdown = page
  55  |     .locator('.oxd-input-group')
  56  |     .filter({
  57  |       has: page.getByText('User Role', {
  58  |         exact: true,
  59  |       }),
  60  |     })
  61  |     .locator('.oxd-select-text');
  62  | 
  63  |   this.employeeNameInput = page
  64  |     .locator('.oxd-input-group')
  65  |     .filter({
  66  |       has: page.getByText('Employee Name', {
  67  |         exact: true,
  68  |       }),
  69  |     })
  70  |     .locator('input');
  71  | 
  72  |   this.statusDropdown = page
  73  |     .locator('.oxd-input-group')
  74  |     .filter({
  75  |       has: page.getByText('Status', {
  76  |         exact: true,
  77  |       }),
  78  |     })
  79  |     .locator('.oxd-select-text');
  80  | 
  81  |   this.searchButton = page.getByRole(
  82  |     'button',
  83  |     {
  84  |       name: 'Search',
  85  |       exact: true,
  86  |     }
  87  |   );
  88  | 
  89  |   this.resetButton = page.getByRole(
  90  |     'button',
  91  |     {
  92  |       name: 'Reset',
  93  |       exact: true,
  94  |     }
  95  |   );
  96  | 
  97  |   this.addButton = page.getByRole(
  98  |     'button',
  99  |     {
  100 |       name: 'Add',
  101 |       exact: true,
  102 |     }
  103 |   );
  104 | 
  105 |   this.systemUsersTable = page.locator(
  106 |     '.oxd-table'
  107 |   );
  108 | 
  109 |   this.userRows = page.locator(
  110 |     '.oxd-table-body .oxd-table-card'
  111 |   );
  112 | 
  113 |   this.loadingSpinner = page.locator(
  114 |     '.oxd-loading-spinner'
  115 |   );
  116 | }
  117 | 
  118 |  async gotoUserManagementUsers():Promise<void>
  119 |  {
  120 |       this.userManagementMenu.click();
> 121 |       this.usersMenuItem.click();
      |                          ^ Error: locator.click: Test ended.
  122 |  }
  123 | 
  124 |  private async selectDropdownOption(
  125 |   dropdown: Locator,
  126 |   option: string
  127 | ): Promise<void> {
  128 |   await dropdown.click();
  129 | 
  130 |   const dropdownOption = this.page
  131 |     .locator('.oxd-select-option')
  132 |     .getByText(option, {
  133 |       exact: true,
  134 |     });
  135 | 
  136 |   await expect(dropdownOption).toBeVisible();
  137 |   await dropdownOption.click();
  138 | }
  139 | 
  140 | 
  141 | async searchSystemUsers(
  142 |   filters: SystemUserFilters
  143 | ): Promise<void> {
  144 |   if (filters.username !== undefined) {
  145 |     await this.usernameInput.fill(
  146 |       filters.username
  147 |     );
  148 |   }
  149 | 
  150 |   if (filters.userRole !== undefined) {
  151 |     await this.selectDropdownOption(
  152 |       this.userRoleDropdown,
  153 |       filters.userRole
  154 |     );
  155 |   }
  156 | 
  157 |   if (filters.employeeName !== undefined) {
  158 |     await this.employeeNameInput.fill(
  159 |       filters.employeeName
  160 |     );
  161 | 
  162 |     const employeeOption = this.page
  163 |       .locator('.oxd-autocomplete-option')
  164 |       .filter({
  165 |         hasText: filters.employeeName,
  166 |       })
  167 |       .first();
  168 | 
  169 |     await expect(employeeOption).toBeVisible({
  170 |       timeout: 15_000,
  171 |     });
  172 | 
  173 |     await employeeOption.click();
  174 |   }
  175 | 
  176 |   if (filters.status !== undefined) {
  177 |     await this.selectDropdownOption(
  178 |       this.statusDropdown,
  179 |       filters.status
  180 |     );
  181 |   }
  182 | 
  183 |   const searchResponse =
  184 |     this.page.waitForResponse(
  185 |       response =>
  186 |         response.url().includes(
  187 |           '/api/v2/admin/users'
  188 |         ) &&
  189 |         response.request().method() === 'GET' &&
  190 |         response.ok(),
  191 |       {
  192 |         timeout: 20_000,
  193 |       }
  194 |     );
  195 | 
  196 |   await this.searchButton.click();
  197 |   await searchResponse;
  198 | 
  199 |   await expect(this.loadingSpinner).toBeHidden();
  200 | }
  201 | 
  202 | async verifySystemUserResult(
  203 |   expected: SystemUserFilters
  204 | ): Promise<void> {
  205 |   await expect(this.userRows.first()).toBeVisible();
  206 | 
  207 |   const matchingRow = expected.username
  208 |     ? this.userRows.filter({
  209 |         has: this.page
  210 |           .locator('.oxd-table-cell')
  211 |           .nth(1)
  212 |           .getByText(expected.username, {
  213 |             exact: true,
  214 |           }),
  215 |       })
  216 |     : this.userRows.first();
  217 | 
  218 |   await expect(matchingRow).toHaveCount(1);
  219 | 
  220 |   const cells = matchingRow.locator(
  221 |     '.oxd-table-cell'
```