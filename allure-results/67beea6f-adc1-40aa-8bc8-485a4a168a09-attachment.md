# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_109 - Admin should navigate to the Leave List page @smoke @navigation @regression
- Location: tests\Leave\leave.spec.ts:48:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-input-group').filter({ hasText: 'Include Past Employees' }).locator('input[type="checkbox"]')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.oxd-input-group').filter({ hasText: 'Include Past Employees' }).locator('input[type="checkbox"]')

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
  - heading "Leave" [level=6]
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
      - listitem:
        - link "Apply":
          - /url: "#"
      - listitem:
        - link "My Leave":
          - /url: "#"
      - listitem: Entitlements 
      - listitem: Reports 
      - listitem: Configure 
      - listitem:
        - link "Leave List":
          - /url: "#"
      - listitem:
        - link "Assign Leave":
          - /url: "#"
      - button ""
- heading "Leave List" [level=5]
- button ""
- separator
- text: From Date
- textbox "yyyy-dd-mm": 2026-01-01
- text:  To Date
- textbox "yyyy-dd-mm": 2026-31-12
- text:  Show Leave with Status* -- Select --  Pending Approval  Leave Type -- Select --  Employee Name
- textbox "Type for hints..."
- text: Sub Unit -- Select -- 
- paragraph: Include Past Employees
- checkbox
- separator
- paragraph: "* Required"
- button "Reset"
- button "Search"
- text: No Records Found
- table:
  - rowgroup:
    - row " Date Employee Name Leave Type Leave Balance (Days) Number of Days Status Comments Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Date"
      - columnheader "Employee Name"
      - columnheader "Leave Type"
      - columnheader "Leave Balance (Days)"
      - columnheader "Number of Days"
      - columnheader "Status"
      - columnheader "Comments"
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  59  |       .locator(".oxd-select-text");
  60  | 
  61  |     this.employeeNameInput = page
  62  |       .locator(".oxd-input-group")
  63  |       .filter({
  64  |         has: page.locator("label").getByText("Employee Name", {
  65  |           exact: true,
  66  |         }),
  67  |       })
  68  |       .locator("input");
  69  | 
  70  |     this.leaveTypeDropdown = page
  71  |       .locator(".oxd-input-group")
  72  |       .filter({
  73  |         has: page.locator("label").getByText("Leave Type", {
  74  |           exact: true,
  75  |         }),
  76  |       })
  77  |       .locator(".oxd-select-text");
  78  | 
  79  |     this.includePastEmployeesCheckbox = page
  80  |       .locator(".oxd-input-group")
  81  |       .filter({
  82  |         hasText: "Include Past Employees",
  83  |       })
  84  |       .locator('input[type="checkbox"]');
  85  | 
  86  |     this.searchButton = page.getByRole("button", {
  87  |       name: "Search",
  88  |       exact: true,
  89  |     });
  90  | 
  91  |     this.resetButton = page.getByRole("button", {
  92  |       name: "Reset",
  93  |       exact: true,
  94  |     });
  95  | 
  96  |     this.leaveTable = page.locator(".oxd-table");
  97  | 
  98  |     this.leaveRows = page.locator(".oxd-table-body .oxd-table-card");
  99  | 
  100 |     this.loadingSpinner = page.locator(".oxd-loading-spinner");
  101 | 
  102 |     this.noRecordsFound = page
  103 |       .locator(".orangehrm-paper-container")
  104 |       .getByText("No Records Found", {
  105 |         exact: true,
  106 |       });
  107 | 
  108 |     this.dateValidationMessages = page
  109 |       .locator("form")
  110 |       .locator(".oxd-input-field-error-message");
  111 | 
  112 |     this.toDateValidation = page
  113 |       .locator(".oxd-input-group")
  114 |       .filter({
  115 |         has: page.locator("label").getByText("To Date", {
  116 |           exact: true,
  117 |         }),
  118 |       })
  119 |       .locator(".oxd-input-field-error-message");
  120 | 
  121 |     this.dropdownOptions = page.locator(
  122 |       ".oxd-select-dropdown:visible " + ".oxd-select-option",
  123 |     );
  124 | 
  125 |     this.includePastEmployeesLabel = page
  126 |       .locator(".oxd-input-group")
  127 |       .filter({
  128 |         hasText: "Include Past Employees",
  129 |       })
  130 |       .locator(".oxd-checkbox-wrapper label");
  131 | 
  132 |     this.autocompleteOptions = page.locator(
  133 |       ".oxd-autocomplete-dropdown:visible " + ".oxd-autocomplete-option",
  134 |     );
  135 | 
  136 |     this.employeeNameValidation = page
  137 |       .locator(".oxd-input-group")
  138 |       .filter({
  139 |         has: page.locator("label").getByText("Employee Name", {
  140 |           exact: true,
  141 |         }),
  142 |       })
  143 |       .locator(".oxd-input-field-error-message");
  144 |   }
  145 | 
  146 |   async verifyLeaveListPage(): Promise<void> {
  147 |     await expect(this.leaveListHeading).toBeVisible();
  148 | 
  149 |     await expect(this.fromDateInput).toBeVisible();
  150 | 
  151 |     await expect(this.toDateInput).toBeVisible();
  152 | 
  153 |     await expect(this.leaveStatusDropdown).toBeVisible();
  154 | 
  155 |     await expect(this.employeeNameInput).toBeVisible();
  156 | 
  157 |     await expect(this.leaveTypeDropdown).toBeVisible();
  158 | 
> 159 |     await expect(this.includePastEmployeesCheckbox).toBeVisible();
      |                                                     ^ Error: expect(locator).toBeVisible() failed
  160 | 
  161 |     await expect(this.searchButton).toBeVisible();
  162 | 
  163 |     await expect(this.resetButton).toBeVisible();
  164 | 
  165 |     await expect(this.leaveTable).toBeVisible();
  166 |   }
  167 | 
  168 |   async selectLeaveStatus(status: string): Promise<void> {
  169 |     await this.leaveStatusDropdown.click();
  170 | 
  171 |     const option = this.dropdownOptions.filter({
  172 |       hasText: new RegExp(`^${status}$`, "i"),
  173 |     });
  174 | 
  175 |     await expect(option).toBeVisible();
  176 | 
  177 |     await option.click();
  178 |   }
  179 | 
  180 |   async setIncludePastEmployees(shouldInclude: boolean): Promise<void> {
  181 |     const isChecked = await this.includePastEmployeesCheckbox.isChecked();
  182 | 
  183 |     if (isChecked !== shouldInclude) {
  184 |       await this.includePastEmployeesLabel.click();
  185 |     }
  186 | 
  187 |     if (shouldInclude) {
  188 |       await expect(this.includePastEmployeesCheckbox).toBeChecked();
  189 |     } else {
  190 |       await expect(this.includePastEmployeesCheckbox).not.toBeChecked();
  191 |     }
  192 |   }
  193 | 
  194 |   async selectFirstAvailableEmployee(partialName: string): Promise<string> {
  195 |     await this.employeeNameInput.fill(partialName);
  196 | 
  197 |     const validOptions = this.autocompleteOptions.filter({
  198 |       hasNotText: /Searching|No Records Found/i,
  199 |     });
  200 | 
  201 |     await expect(validOptions.first()).toBeVisible({
  202 |       timeout: 15_000,
  203 |     });
  204 | 
  205 |     const firstEmployeeOption = validOptions.first();
  206 | 
  207 |     const employeeName = (await firstEmployeeOption.innerText()).trim();
  208 | 
  209 |     await firstEmployeeOption.click();
  210 | 
  211 |     await expect(this.employeeNameInput).toHaveValue(employeeName);
  212 | 
  213 |     return employeeName;
  214 |   }
  215 | 
  216 |   async selectFirstAvailableLeaveType(): Promise<string> {
  217 |     await this.leaveTypeDropdown.click();
  218 | 
  219 |     await expect(this.dropdownOptions.first()).toBeVisible();
  220 | 
  221 |     const optionCount = await this.dropdownOptions.count();
  222 | 
  223 |     expect(optionCount).toBeGreaterThan(1);
  224 | 
  225 |     const firstLeaveTypeOption = this.dropdownOptions.nth(1);
  226 | 
  227 |     const leaveType = (await firstLeaveTypeOption.innerText()).trim();
  228 | 
  229 |     await firstLeaveTypeOption.click();
  230 | 
  231 |     await expect(this.leaveTypeDropdown).toContainText(leaveType);
  232 | 
  233 |     return leaveType;
  234 |   }
  235 | }
  236 | 
```