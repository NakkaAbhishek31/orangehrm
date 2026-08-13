# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:613:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-body .oxd-table-card').first()
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first()

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
      - paragraph: Kirubakaran Loganathan
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
- textbox: updated1786597481977159
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: No Records Found
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
  613 | test.only('TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression',
  614 |   async ({
  615 |     navigationPage,
  616 |     pimPage,
  617 |     adminPage,
  618 |   }) => {
  619 |     test.setTimeout(180_000);
  620 | 
  621 |     const data =
  622 |       adminData.TC_ADMIN_063;
  623 | 
  624 |     const value = unique();
  625 | 
  626 |     const employee = employeeFrom(
  627 |       data.employee,
  628 |       value
  629 |     );
  630 | 
  631 |     const original =
  632 |       `${data.systemUser.originalUsernamePrefix}${value}`;
  633 | 
  634 |     const updated =
  635 |       `${data.systemUser.updatedUsernamePrefix}${value}`;
  636 | 
  637 |     // Create employee.
  638 |     await navigationPage.gotoPIM();
  639 |     await pimPage.gotoAddEmployee();
  640 | 
  641 |     const employeeId =
  642 |       await pimPage.addEmployee(employee);
  643 | 
  644 |     // Create System User.
  645 |     await navigationPage.gotoAdmin();
  646 |     await adminPage.gotoUserManagementUsers();
  647 |     await adminPage.gotoAddSystemUser();
  648 | 
  649 |     await adminPage.fillSystemUserForm({
  650 |       userRole:
  651 |         data.systemUser.userRole,
  652 |       status:
  653 |         data.systemUser.status,
  654 |       password:
  655 |         data.systemUser.password,
  656 |       username: original,
  657 |       employeeName:
  658 |         `${employee.firstName} ` +
  659 |         `${employee.middleName} ` +
  660 |         `${employee.lastName}`,
  661 |     });
  662 | 
  663 |     await adminPage.saveSystemUser();
  664 | 
  665 |     // Find and open original user.
  666 |     await adminPage.searchSystemUsers({
  667 |       username: original,
  668 |     });
  669 | 
  670 |     await expect(
  671 |       adminPage.userRows
  672 |     ).toHaveCount(1);
  673 | 
  674 |     await adminPage.openSystemUserForEditing(
  675 |       original
  676 |     );
  677 | 
  678 |     // Update username.
  679 |     await adminPage.updateSystemUsername(
  680 |       updated
  681 |     );
  682 | 
  683 |     await expect(
  684 |       adminPage.systemUsersHeading
  685 |     ).toBeVisible();
  686 | 
  687 |     // Remove the previous username filter.
  688 |     await adminPage.resetSystemUserFilters();
  689 | 
  690 |     // Search for updated username.
  691 |     await adminPage.searchSystemUsers({
  692 |       username: updated,
  693 |     });
  694 | 
  695 |     await expect(
  696 |       adminPage.usernameInput
  697 |     ).toHaveValue(updated);
  698 | 
  699 |     await expect(
  700 |       adminPage.userRows.first()
> 701 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  702 |       timeout: 20_000,
  703 |     });
  704 | 
  705 |     await expect(
  706 |       adminPage.userRows
  707 |     ).toHaveCount(1);
  708 | 
  709 |     await adminPage.verifySystemUserResult({
  710 |       username: updated,
  711 |       userRole:
  712 |         data.systemUser.userRole,
  713 |       employeeName:
  714 |         `${employee.firstName} ${employee.lastName}`,
  715 |       status:
  716 |         data.systemUser.status,
  717 |     });
  718 | 
  719 |     // Cleanup System User.
  720 |     await adminPage.deleteSystemUserByUsername(
  721 |       updated
  722 |     );
  723 | 
  724 |     // Cleanup employee.
  725 |     await navigationPage.gotoPIM();
  726 |     await pimPage.gotoEmployeeList();
  727 | 
  728 |     await pimPage.filterEmployeeList({
  729 |       employeeId,
  730 |     });
  731 | 
  732 |     await pimPage.clickOnFilterSearch();
  733 | 
  734 |     await pimPage.deleteEmployeeById(
  735 |       employeeId
  736 |     );
  737 |   }
  738 | );
  739 | 
  740 |   test("TC_ADMIN_064 - Admin should cancel editing a System User @negative @cancel @edit @regression", async ({
  741 |     navigationPage,
  742 |     pimPage,
  743 |     adminPage,
  744 |   }) => {
  745 |     const data = adminData.TC_ADMIN_064;
  746 |     test.setTimeout(data.timeout);
  747 |     const value = unique();
  748 |     const employee = employeeFrom(data.employee, value);
  749 |     const original = `${data.systemUser.originalUsernamePrefix}${value}`;
  750 |     const cancelled = `${data.systemUser.cancelledUsernamePrefix}${value}`;
  751 |     await navigationPage.gotoPIM();
  752 |     await pimPage.gotoAddEmployee();
  753 |     const employeeId = await pimPage.addEmployee(employee);
  754 |     await navigationPage.gotoAdmin();
  755 |     await adminPage.gotoUserManagementUsers();
  756 |     await adminPage.gotoAddSystemUser();
  757 |     await adminPage.fillSystemUserForm({
  758 |       userRole: data.systemUser.userRole,
  759 |       status: data.systemUser.status,
  760 |       password: data.systemUser.password,
  761 |       username: original,
  762 |       employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
  763 |     });
  764 |     await adminPage.saveSystemUser();
  765 |     await adminPage.searchSystemUsers({ username: original });
  766 |     await adminPage.openSystemUserForEditing(original);
  767 |     await adminPage.addUsernameInput.fill(cancelled);
  768 |     await adminPage.addUserCancelButton.click();
  769 |     await adminPage.searchSystemUsers({ username: cancelled });
  770 |     await expect(adminPage.userRows).toHaveCount(0);
  771 |     await adminPage.resetSystemUserFilters();
  772 |     await adminPage.searchSystemUsers({ username: original });
  773 |     await expect(adminPage.userRows).toHaveCount(1);
  774 |     await adminPage.deleteSystemUserByUsername(original);
  775 |     await navigationPage.gotoPIM();
  776 |     await pimPage.gotoEmployeeList();
  777 |     await pimPage.filterEmployeeList({ employeeId });
  778 |     await pimPage.clickOnFilterSearch();
  779 |     await pimPage.deleteEmployeeById(employeeId);
  780 |   });
  781 | 
  782 |   test("TC_ADMIN_065 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
  783 |     page,
  784 |     navigationPage,
  785 |     adminPage,
  786 |   }) => {
  787 |     const data = adminData.TC_ADMIN_065;
  788 |     const value = unique();
  789 |     const invalidName = `${data.invalidEmployeeNamePrefix}${value}`;
  790 |     await navigationPage.gotoAdmin();
  791 |     await adminPage.gotoUserManagementUsers();
  792 |     await adminPage.gotoAddSystemUser();
  793 |     await adminPage.addUserRoleDropdown.click();
  794 |     await page
  795 |       .locator(".oxd-select-dropdown:visible")
  796 |       .getByText(data.userRole, { exact: true })
  797 |       .click();
  798 |     await adminPage.addStatusDropdown.click();
  799 |     await page
  800 |       .locator(".oxd-select-dropdown:visible")
  801 |       .getByText(data.status, { exact: true })
```