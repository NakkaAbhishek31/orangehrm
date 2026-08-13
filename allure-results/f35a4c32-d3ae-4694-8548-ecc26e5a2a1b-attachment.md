# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:613:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card')
Expected: 1
Received: 0
Timeout:  20000ms

Call log:
  - Expect "toHaveCount" with timeout 20000ms
  - waiting for locator('.oxd-table-body .oxd-table-card')
    - locator resolved to 18 elements
    - unexpected value "18"
    42 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=f10e3]:
  - generic:
    - complementary [ref=f10e4]:
      - navigation "Sidepanel" [ref=f10e5]:
        - generic [ref=f10e6]:
          - link [ref=f10e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f10e9]
          - text: 
        - generic [ref=f10e10]:
          - generic [ref=f10e11]:
            - generic [ref=f10e12]:
              - textbox "Search" [ref=f10e15]
              - button "" [ref=f10e16] [cursor=pointer]
            - separator [ref=f10e18]
          - list [ref=f10e19]:
            - listitem [ref=f10e20]:
              - link "Admin" [ref=f10e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f10e25]:
              - link "PIM" [ref=f10e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f10e41]:
              - link "Leave" [ref=f10e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f10e46]:
              - link "Time" [ref=f10e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f10e54]:
              - link "Recruitment" [ref=f10e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f10e62]:
              - link "My Info" [ref=f10e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f10e70]:
              - link "Performance" [ref=f10e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f10e80]:
              - link "Dashboard" [ref=f10e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f10e85]:
              - link "Directory" [ref=f10e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f10e90]:
              - link "Maintenance" [ref=f10e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f10e96]:
              - link "Claim" [ref=f10e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f10e105]:
              - link "Buzz" [ref=f10e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f10e110]:
      - generic [ref=f10e111]:
        - generic [ref=f10e112]:
          - text: 
          - generic [ref=f10e113]:
            - heading "Admin" [level=6] [ref=f10e114]
            - heading "/ User Management" [level=6] [ref=f10e115]
        - link [ref=f10e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f10e118] [cursor=pointer]
        - list [ref=f10e124]:
          - listitem [ref=f10e125]:
            - generic [ref=f10e126] [cursor=pointer]:
              - img "profile picture" [ref=f10e127]
              - paragraph [ref=f10e128]: John Smith
              - generic [ref=f10e129]: 
      - navigation "Topbar Menu" [ref=f10e131]:
        - list [ref=f10e132]:
          - listitem [ref=f10e133] [cursor=pointer]:
            - generic [ref=f10e134]:
              - text: User Management
              - generic [ref=f10e135]: 
          - listitem [ref=f10e136] [cursor=pointer]:
            - generic [ref=f10e137]:
              - text: Job
              - generic [ref=f10e138]: 
          - listitem [ref=f10e139] [cursor=pointer]:
            - generic [ref=f10e140]:
              - text: Organization
              - generic [ref=f10e141]: 
          - listitem [ref=f10e142] [cursor=pointer]:
            - generic [ref=f10e143]:
              - text: Qualifications
              - generic [ref=f10e144]: 
          - listitem [ref=f10e145] [cursor=pointer]:
            - link "Nationalities" [ref=f10e146]:
              - /url: "#"
          - listitem [ref=f10e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f10e148]:
              - /url: "#"
          - listitem [ref=f10e149] [cursor=pointer]:
            - generic [ref=f10e150]:
              - text: Configuration
              - generic [ref=f10e151]: 
          - button "" [ref=f10e153] [cursor=pointer]
  - generic [ref=f10e155]:
    - generic [ref=f10e157]:
      - generic [ref=f10e158]:
        - generic [ref=f10e159]:
          - heading "System Users" [level=5] [ref=f10e161]
          - button "" [ref=f10e164] [cursor=pointer]
        - separator [ref=f10e166]
        - generic [ref=f10e168]:
          - generic [ref=f10e170]:
            - generic [ref=f10e172]:
              - generic [ref=f10e173]: Username
              - textbox [ref=f10e176]: updated1786552164792418
            - generic [ref=f10e178]:
              - generic [ref=f10e179]: User Role
              - generic [ref=f10e183] [cursor=pointer]:
                - generic [ref=f10e184]: "-- Select --"
                - generic [ref=f10e185]: 
            - generic [ref=f10e188]:
              - generic [ref=f10e189]: Employee Name
              - textbox "Type for hints..." [ref=f10e194]
            - generic [ref=f10e196]:
              - generic [ref=f10e197]: Status
              - generic [ref=f10e201] [cursor=pointer]:
                - generic [ref=f10e202]: "-- Select --"
                - generic [ref=f10e203]: 
          - separator [ref=f10e205]
          - generic [ref=f10e206]:
            - button "Reset" [ref=f10e207] [cursor=pointer]
            - button "Search" [active] [ref=f10e208] [cursor=pointer]
      - generic [ref=f10e209]:
        - button " Add" [ref=f10e211] [cursor=pointer]:
          - generic [ref=f10e212]: 
          - text: Add
        - generic [ref=f10e213]:
          - separator [ref=f10e214]
          - generic [ref=f10e215]: No Records Found
        - table [ref=f10e218]:
          - rowgroup [ref=f10e219]:
            - row [ref=f10e220]:
              - columnheader "" [ref=f10e221]:
                - generic [ref=f10e223] [cursor=pointer]:
                  - checkbox "" [ref=f10e224]
                  - generic [ref=f10e225]: 
              - columnheader "Username " [ref=f10e227]:
                - text: Username
                - generic [ref=f10e228]:
                  - generic [ref=f10e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f10e230]:
                - text: User Role
                - generic [ref=f10e231]:
                  - generic [ref=f10e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f10e233]:
                - text: Employee Name
                - generic [ref=f10e234]:
                  - generic [ref=f10e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f10e236]:
                - text: Status
                - generic [ref=f10e237]:
                  - generic [ref=f10e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f10e239]
          - rowgroup
    - generic [ref=f10e241]:
      - paragraph [ref=f10e242]: OrangeHRM OS 5.9
      - paragraph [ref=f10e243]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f10e244] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  541 |   });
  542 | 
  543 |   test("TC_ADMIN_061 - Weak password validation should appear while adding a System User @negative @validation @security @regression", async ({
  544 |     page,
  545 |     navigationPage,
  546 |     pimPage,
  547 |     adminPage,
  548 |   }) => {
  549 |     const data = adminData.TC_ADMIN_061;
  550 |     test.setTimeout(data.timeout);
  551 |     const value = unique();
  552 |     const employee = employeeFrom(data.employee, value);
  553 |     await navigationPage.gotoPIM();
  554 |     await pimPage.gotoAddEmployee();
  555 |     const employeeId = await pimPage.addEmployee(employee);
  556 |     await navigationPage.gotoAdmin();
  557 |     await adminPage.gotoUserManagementUsers();
  558 |     await adminPage.gotoAddSystemUser();
  559 |     await adminPage.fillSystemUserForm({
  560 |       ...data.systemUser,
  561 |       username: `${data.systemUser.usernamePrefix}${value}`,
  562 |       employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
  563 |     });
  564 |     await adminPage.addPasswordInput.blur();
  565 |     await expect(adminPage.passwordValidation).toContainText(
  566 |       new RegExp(data.expectedErrorPattern, "i"),
  567 |     );
  568 |     await expect(page).toHaveURL(/admin\/saveSystemUser/);
  569 |     await adminPage.addUserCancelButton.click();
  570 |     await navigationPage.gotoPIM();
  571 |     await pimPage.gotoEmployeeList();
  572 |     await pimPage.filterEmployeeList({ employeeId });
  573 |     await pimPage.clickOnFilterSearch();
  574 |     await pimPage.deleteEmployeeById(employeeId);
  575 |   });
  576 | 
  577 |   test("TC_ADMIN_062 - Admin should filter System Users by employee name @positive @filter @regression", async ({
  578 |     navigationPage,
  579 |     pimPage,
  580 |     adminPage,
  581 |   }) => {
  582 |     const data = adminData.TC_ADMIN_062;
  583 |     test.setTimeout(data.timeout);
  584 |     const value = unique();
  585 |     const employee = employeeFrom(data.employee, value);
  586 |     const username = `${data.systemUser.usernamePrefix}${value}`;
  587 |     const employeeName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`;
  588 |     await navigationPage.gotoPIM();
  589 |     await pimPage.gotoAddEmployee();
  590 |     const employeeId = await pimPage.addEmployee(employee);
  591 |     await navigationPage.gotoAdmin();
  592 |     await adminPage.gotoUserManagementUsers();
  593 |     await adminPage.gotoAddSystemUser();
  594 |     await adminPage.fillSystemUserForm({
  595 |       ...data.systemUser,
  596 |       username,
  597 |       employeeName,
  598 |     });
  599 |     await adminPage.saveSystemUser();
  600 |     await adminPage.searchSystemUsers({ employeeName });
  601 |     await expect(adminPage.userRows).toHaveCount(1);
  602 |     await adminPage.resetSystemUserFilters();
  603 |     await expect(adminPage.employeeNameInput).toHaveValue(data.emptyValue);
  604 |     await adminPage.searchSystemUsers({ username });
  605 |     await adminPage.deleteSystemUserByUsername(username);
  606 |     await navigationPage.gotoPIM();
  607 |     await pimPage.gotoEmployeeList();
  608 |     await pimPage.filterEmployeeList({ employeeId });
  609 |     await pimPage.clickOnFilterSearch();
  610 |     await pimPage.deleteEmployeeById(employeeId);
  611 |   });
  612 | 
  613 |   test("TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression", async ({
  614 |     navigationPage,
  615 |     pimPage,
  616 |     adminPage,
  617 |   }) => {
  618 |     const data = adminData.TC_ADMIN_063;
  619 |     const value = unique();
  620 |     const employee = employeeFrom(data.employee, value);
  621 |     const original = `${data.systemUser.originalUsernamePrefix}${value}`;
  622 |     const updated = `${data.systemUser.updatedUsernamePrefix}${value}`;
  623 |     await navigationPage.gotoPIM();
  624 |     await pimPage.gotoAddEmployee();
  625 |     const employeeId = await pimPage.addEmployee(employee);
  626 |     await navigationPage.gotoAdmin();
  627 |     await adminPage.gotoUserManagementUsers();
  628 |     await adminPage.gotoAddSystemUser();
  629 |     await adminPage.fillSystemUserForm({
  630 |       userRole: data.systemUser.userRole,
  631 |       status: data.systemUser.status,
  632 |       password: data.systemUser.password,
  633 |       username: original,
  634 |       employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
  635 |     });
  636 |     await adminPage.saveSystemUser();
  637 |     await adminPage.searchSystemUsers({ username: original });
  638 |     await adminPage.openSystemUserForEditing(original);
  639 |     await adminPage.updateSystemUsername(updated);
  640 |     await adminPage.searchSystemUsers({ username: updated });
> 641 |     await expect(adminPage.userRows).toHaveCount(1);
      |                                      ^ Error: expect(locator).toHaveCount(expected) failed
  642 |     await adminPage.deleteSystemUserByUsername(updated);
  643 |     await navigationPage.gotoPIM();
  644 |     await pimPage.gotoEmployeeList();
  645 |     await pimPage.filterEmployeeList({ employeeId });
  646 |     await pimPage.clickOnFilterSearch();
  647 |     await pimPage.deleteEmployeeById(employeeId);
  648 |   });
  649 | 
  650 |   test("TC_ADMIN_064 - Admin should cancel editing a System User @negative @cancel @edit @regression", async ({
  651 |     navigationPage,
  652 |     pimPage,
  653 |     adminPage,
  654 |   }) => {
  655 |     const data = adminData.TC_ADMIN_064;
  656 |     test.setTimeout(data.timeout);
  657 |     const value = unique();
  658 |     const employee = employeeFrom(data.employee, value);
  659 |     const original = `${data.systemUser.originalUsernamePrefix}${value}`;
  660 |     const cancelled = `${data.systemUser.cancelledUsernamePrefix}${value}`;
  661 |     await navigationPage.gotoPIM();
  662 |     await pimPage.gotoAddEmployee();
  663 |     const employeeId = await pimPage.addEmployee(employee);
  664 |     await navigationPage.gotoAdmin();
  665 |     await adminPage.gotoUserManagementUsers();
  666 |     await adminPage.gotoAddSystemUser();
  667 |     await adminPage.fillSystemUserForm({
  668 |       userRole: data.systemUser.userRole,
  669 |       status: data.systemUser.status,
  670 |       password: data.systemUser.password,
  671 |       username: original,
  672 |       employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
  673 |     });
  674 |     await adminPage.saveSystemUser();
  675 |     await adminPage.searchSystemUsers({ username: original });
  676 |     await adminPage.openSystemUserForEditing(original);
  677 |     await adminPage.addUsernameInput.fill(cancelled);
  678 |     await adminPage.addUserCancelButton.click();
  679 |     await adminPage.searchSystemUsers({ username: cancelled });
  680 |     await expect(adminPage.userRows).toHaveCount(0);
  681 |     await adminPage.resetSystemUserFilters();
  682 |     await adminPage.searchSystemUsers({ username: original });
  683 |     await expect(adminPage.userRows).toHaveCount(1);
  684 |     await adminPage.deleteSystemUserByUsername(original);
  685 |     await navigationPage.gotoPIM();
  686 |     await pimPage.gotoEmployeeList();
  687 |     await pimPage.filterEmployeeList({ employeeId });
  688 |     await pimPage.clickOnFilterSearch();
  689 |     await pimPage.deleteEmployeeById(employeeId);
  690 |   });
  691 | 
  692 |   test("TC_ADMIN_065 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
  693 |     page,
  694 |     navigationPage,
  695 |     adminPage,
  696 |   }) => {
  697 |     const data = adminData.TC_ADMIN_065;
  698 |     const value = unique();
  699 |     const invalidName = `${data.invalidEmployeeNamePrefix}${value}`;
  700 |     await navigationPage.gotoAdmin();
  701 |     await adminPage.gotoUserManagementUsers();
  702 |     await adminPage.gotoAddSystemUser();
  703 |     await adminPage.addUserRoleDropdown.click();
  704 |     await page
  705 |       .locator(".oxd-select-dropdown:visible")
  706 |       .getByText(data.userRole, { exact: true })
  707 |       .click();
  708 |     await adminPage.addStatusDropdown.click();
  709 |     await page
  710 |       .locator(".oxd-select-dropdown:visible")
  711 |       .getByText(data.status, { exact: true })
  712 |       .click();
  713 |     await adminPage.addEmployeeNameInput.fill(invalidName);
  714 |     await expect(
  715 |       page
  716 |         .locator(".oxd-autocomplete-dropdown:visible")
  717 |         .getByText(data.expectedAutocompleteMessage, { exact: true }),
  718 |     ).toBeVisible();
  719 |     await adminPage.addEmployeeNameInput.press("Escape");
  720 |     await adminPage.addUsernameInput.fill(`${data.usernamePrefix}${value}`);
  721 |     await adminPage.addPasswordInput.fill(data.password);
  722 |     await adminPage.addConfirmPasswordInput.fill(data.password);
  723 |     await adminPage.addUserSaveButton.click();
  724 |     await expect(adminPage.employeeNameValidation).toHaveText(
  725 |       data.expectedError,
  726 |     );
  727 |     await expect(page).toHaveURL(/admin\/saveSystemUser/);
  728 |     await adminPage.addUserCancelButton.click();
  729 |   });
  730 | 
  731 |   test("TC_ADMIN_066 - Admin should filter System Users by disabled status @positive @filter @status @regression", async ({
  732 |     navigationPage,
  733 |     pimPage,
  734 |     adminPage,
  735 |   }) => {
  736 |     const data = adminData.TC_ADMIN_066;
  737 |     test.setTimeout(data.timeout);
  738 |     const value = unique();
  739 |     const employee = employeeFrom(data.employee, value);
  740 |     const username = `${data.systemUser.usernamePrefix}${value}`;
  741 |     await navigationPage.gotoPIM();
```