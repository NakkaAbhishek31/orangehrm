# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:613:6

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
    5 × locator resolved to 26 elements
      - unexpected value "26"
    38 × locator resolved to 0 elements
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
              - paragraph [ref=f10e128]: manda Panchal
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
              - textbox [ref=f10e176]: updated1786597371734783
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
  701 |     ).toBeVisible({
  702 |       timeout: 20_000,
  703 |     });
  704 | 
  705 |     await expect(
  706 |       adminPage.userRows
> 707 |     ).toHaveCount(1);
      |       ^ Error: expect(locator).toHaveCount(expected) failed
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
  802 |       .click();
  803 |     await adminPage.addEmployeeNameInput.fill(invalidName);
  804 |     await expect(
  805 |       page
  806 |         .locator(".oxd-autocomplete-dropdown:visible")
  807 |         .getByText(data.expectedAutocompleteMessage, { exact: true }),
```