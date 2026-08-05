# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_052 - Required validation should appear when adding an empty System User @negative @validation @regression
- Location: tests\Admin\admin-users.spec.ts:582:6

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-input-field-error-message')
Timeout: 10000ms
- Expected  - 1
+ Received  + 1

@@ -2,7 +2,7 @@
    "Required",
    "Required",
    "Required",
    "Required",
    "Required",
-   "Required",
+   "Passwords do not match",
  ]

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-input-field-error-message')
    23 × locator resolved to 6 elements

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Admin" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: AkesaFirstNameTest VakamoceLastNameTest
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: User Management
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - generic [ref=f4e136]:
              - text: Job
              - generic [ref=f4e137]: 
          - listitem [ref=f4e138] [cursor=pointer]:
            - generic [ref=f4e139]:
              - text: Organization
              - generic [ref=f4e140]: 
          - listitem [ref=f4e141] [cursor=pointer]:
            - generic [ref=f4e142]:
              - text: Qualifications
              - generic [ref=f4e143]: 
          - listitem [ref=f4e144] [cursor=pointer]:
            - link "Nationalities" [ref=f4e145]:
              - /url: "#"
          - listitem [ref=f4e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=f4e147]:
              - /url: "#"
          - listitem [ref=f4e148] [cursor=pointer]:
            - generic [ref=f4e149]:
              - text: Configuration
              - generic [ref=f4e150]: 
          - button "" [ref=f4e152] [cursor=pointer]
  - generic [ref=f4e154]:
    - generic [ref=f4e157]:
      - heading "Add User" [level=6] [ref=f4e158]
      - separator [ref=f4e159]
      - generic [ref=f4e160]:
        - generic [ref=f4e162]:
          - generic [ref=f4e164]:
            - generic [ref=f4e165]: User Role*
            - generic [ref=f4e169] [cursor=pointer]:
              - generic [ref=f4e170]: "-- Select --"
              - generic [ref=f4e171]: 
            - generic [ref=f4e173]: Required
          - generic [ref=f4e175]:
            - generic [ref=f4e176]: Employee Name*
            - textbox "Type for hints..." [ref=f4e181]
            - generic [ref=f4e182]: Required
          - generic [ref=f4e184]:
            - generic [ref=f4e185]: Status*
            - generic [ref=f4e189] [cursor=pointer]:
              - generic [ref=f4e190]: "-- Select --"
              - generic [ref=f4e191]: 
            - generic [ref=f4e193]: Required
          - generic [ref=f4e195]:
            - generic [ref=f4e196]: Username*
            - textbox [ref=f4e199]
            - generic [ref=f4e200]: Required
        - generic [ref=f4e202]:
          - generic [ref=f4e203]:
            - generic [ref=f4e204]:
              - generic [ref=f4e205]: Password*
              - textbox [ref=f4e208]
              - generic [ref=f4e209]: Required
            - paragraph [ref=f4e210]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f4e212]:
            - generic [ref=f4e213]: Confirm Password*
            - textbox [ref=f4e216]
            - generic [ref=f4e217]: Passwords do not match
        - separator [ref=f4e218]
        - generic [ref=f4e219]:
          - paragraph [ref=f4e220]: "* Required"
          - button "Cancel" [ref=f4e221] [cursor=pointer]
          - button "Save" [active] [ref=f4e222] [cursor=pointer]
    - generic [ref=f4e223]:
      - paragraph [ref=f4e224]: OrangeHRM OS 5.9
      - paragraph [ref=f4e225]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e226] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  502 |   const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  503 | 
  504 |   const firstName = `Auto${uniqueValue}`;
  505 |   const middleName = "Test";
  506 |   const lastName = "User";
  507 |   const username = `ess${uniqueValue}`;
  508 |   const password = "Test@12345";
  509 |   const confirmPassword = "Wrong@12345";
  510 | 
  511 |   await loginPage.visitPage();
  512 |   await loginPage.login("Admin", "admin123");
  513 |   await loginPage.verifyLoginSuccessful();
  514 | 
  515 |   // Create an employee for the Employee Name field.
  516 |   await navigationPage.gotoPIM();
  517 |   await pimPage.gotoAddEmployee();
  518 | 
  519 |   const employeeId = await pimPage.addEmployee({
  520 |     firstName,
  521 |     middleName,
  522 |     lastName,
  523 |   });
  524 | 
  525 |   const employeeName = `${firstName} ${middleName} ${lastName}`;
  526 | 
  527 |   // Navigate to Add System User.
  528 |   await navigationPage.gotoAdmin();
  529 |   await adminPage.gotoUserManagementUsers();
  530 |   await adminPage.gotoAddSystemUser();
  531 | 
  532 |   await expect(adminPage.addUserHeading).toBeVisible();
  533 | 
  534 |   // Fill valid details first.
  535 |   await adminPage.fillSystemUserForm({
  536 |     userRole: "ESS",
  537 |     employeeName,
  538 |     status: "Enabled",
  539 |     username,
  540 |     password,
  541 |   });
  542 | 
  543 |   // Replace Confirm Password with a different password.
  544 |   await adminPage.addConfirmPasswordInput.fill(confirmPassword);
  545 | 
  546 |   await adminPage.addConfirmPasswordInput.blur();
  547 | 
  548 |   await expect(adminPage.confirmPasswordValidation).toHaveText(
  549 |     "Passwords do not match",
  550 |     {
  551 |       timeout: 10_000,
  552 |     },
  553 |   );
  554 | 
  555 |   await expect(page).toHaveURL(/admin\/saveSystemUser/);
  556 | 
  557 |   // Cancel because the user must not be created.
  558 |   await adminPage.addUserCancelButton.click();
  559 | 
  560 |   await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  561 | 
  562 |   // Cleanup the employee.
  563 |   await navigationPage.gotoPIM();
  564 |   await pimPage.gotoEmployeeList();
  565 | 
  566 |   await pimPage.filterEmployeeList({
  567 |     employeeId,
  568 |   });
  569 | 
  570 |   await pimPage.clickOnFilterSearch();
  571 |   await pimPage.deleteEmployeeById(employeeId);
  572 | 
  573 |   await pimPage.filterEmployeeList({
  574 |     employeeId,
  575 |   });
  576 | 
  577 |   await pimPage.clickOnFilterSearch();
  578 | 
  579 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  580 | });
  581 | 
  582 | test.only("TC_ADMIN_052 - Required validation should appear when adding an empty System User @negative @validation @regression", async ({
  583 |   page,
  584 |   loginPage,
  585 |   navigationPage,
  586 |   adminPage,
  587 | }) => {
  588 |   await loginPage.visitPage();
  589 |   await loginPage.login("Admin", "admin123");
  590 |   await loginPage.verifyLoginSuccessful();
  591 | 
  592 |   await navigationPage.gotoAdmin();
  593 |   await adminPage.gotoUserManagementUsers();
  594 |   await adminPage.gotoAddSystemUser();
  595 | 
  596 |   await expect(adminPage.addUserHeading).toBeVisible();
  597 | 
  598 |   await adminPage.addUserSaveButton.click();
  599 | 
  600 |   await expect(adminPage.validationMessages).toHaveCount(6);
  601 | 
> 602 |   await expect(adminPage.validationMessages).toHaveText([
      |                                              ^ Error: expect(locator).toHaveText(expected) failed
  603 |     "Required",
  604 |     "Required",
  605 |     "Required",
  606 |     "Required",
  607 |     "Required",
  608 |     "Required",
  609 |   ]);
  610 | 
  611 |   // The user should remain on the Add User page.
  612 |   await expect(page).toHaveURL(/admin\/saveSystemUser/);
  613 | 
  614 |   await expect(
  615 |     adminPage.toastMessage.filter({
  616 |       hasText: /Successfully Saved/i,
  617 |     }),
  618 |   ).not.toBeVisible();
  619 | 
  620 |   // Cancel and return to System Users.
  621 |   await adminPage.addUserCancelButton.click();
  622 | 
  623 |   await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  624 | 
  625 |   await expect(adminPage.systemUsersHeading).toBeVisible();
  626 | });
  627 | 
  628 | test.only("TC_ADMIN_053 - Admin should reset System User search filters @positive @filter @regression", async ({
  629 |   loginPage,
  630 |   navigationPage,
  631 |   adminPage,
  632 | }) => {
  633 |   // Login as Admin.
  634 |   await loginPage.visitPage();
  635 |   await loginPage.login("Admin", "admin123");
  636 |   await loginPage.verifyLoginSuccessful();
  637 | 
  638 |   // Navigate to Admin → User Management → Users.
  639 |   await navigationPage.gotoAdmin();
  640 |   await adminPage.gotoUserManagementUsers();
  641 |   await adminPage.gotoAddSystemUser();
  642 | 
  643 |   await adminPage.searchSystemUsers({
  644 |     username: "Admin",
  645 |     userRole: "Admin",
  646 |     status: "Enabled",
  647 |   });
  648 | 
  649 |   await expect(adminPage.usernameInput).toHaveValue("Admin");
  650 | 
  651 |   await expect(adminPage.userRoleDropdown).toContainText("Admin");
  652 | 
  653 |   await expect(adminPage.statusDropdown).toContainText("Enabled");
  654 | 
  655 |   // Reset all filters.
  656 |   await adminPage.resetSystemUserFilters();
  657 | 
  658 |   await expect(adminPage.usernameInput).toHaveValue("");
  659 | 
  660 |   await expect(adminPage.employeeNameInput).toHaveValue("");
  661 | 
  662 |   await expect(adminPage.userRoleDropdown).toContainText("Select");
  663 | 
  664 |   await expect(adminPage.statusDropdown).toContainText("Select");
  665 | 
  666 |   await expect(adminPage.systemUsersTable).toBeVisible();
  667 | });
  668 | 
  669 | 
  670 | test.only('TC_ADMIN_054 - Admin should edit an existing System User status @positive @edit @regression',
  671 |   async ({
  672 |     loginPage,
  673 |     navigationPage,
  674 |     pimPage,
  675 |     adminPage,
  676 |   }) => {
  677 |    
  678 |     const uniqueValue =
  679 |       `${Date.now()}${Math.floor(
  680 |         Math.random() * 1000
  681 |       )}`;
  682 | 
  683 |     const firstName = `Auto${uniqueValue}`;
  684 |     const middleName = 'Test';
  685 |     const lastName = 'User';
  686 |     const username = `ess${uniqueValue}`;
  687 |     const password = 'Test@12345';
  688 | 
  689 |     await loginPage.visitPage();
  690 |     await loginPage.login(
  691 |       'Admin',
  692 |       'admin123'
  693 |     );
  694 | 
  695 |     await loginPage.verifyLoginSuccessful();
  696 | 
  697 |     // Create employee.
  698 |     await navigationPage.gotoPIM();
  699 |     await pimPage.gotoAddEmployee();
  700 | 
  701 |     const employeeId =
  702 |       await pimPage.addEmployee({
```