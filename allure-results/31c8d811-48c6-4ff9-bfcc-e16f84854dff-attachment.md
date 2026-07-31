# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_031 - Password mismatch validation should appear while creating employee login details @negative @validation @account @regression
- Location: tests\PIM\pim-employee.spec.ts:658:6

# Error details

```
Error: locator.check: Clicking the checkbox did not change its state
Call log:
  - waiting for locator('.oxd-form-row').filter({ hasText: 'Create Login Details' }).locator('.oxd-switch-input')
    - locator resolved to <span data-v-8e4757dc="" class="oxd-switch-input oxd-switch-input--active --label-right"></span>
  - attempting click action
    - scrolling into view if needed
    - done scrolling
    - forcing action
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish
    - navigations have finished

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: manda user
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e154]:
          - generic [ref=f3e155]:
            - generic [ref=f3e157]:
              - button "Choose File"
              - generic [ref=f3e158]:
                - img "profile picture" [ref=f3e160]
                - button "" [ref=f3e161] [cursor=pointer]
            - paragraph [ref=f3e163]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e164]:
            - generic [ref=f3e165]:
              - generic [ref=f3e168]:
                - generic [ref=f3e169]: Employee Full Name*
                - generic [ref=f3e171]:
                  - textbox "First Name" [ref=f3e174]: Auto1785489536964
                  - textbox "Middle Name" [ref=f3e177]: Test
                  - textbox "Last Name" [ref=f3e180]: User
              - generic [ref=f3e183]:
                - generic [ref=f3e184]: Employee Id
                - textbox [ref=f3e187]: "0694"
            - separator [ref=f3e188]
            - generic [ref=f3e189]:
              - paragraph [ref=f3e190]: Create Login Details
              - checkbox [ref=f3e193]
        - separator [ref=f3e195]
        - generic [ref=f3e196]:
          - paragraph [ref=f3e197]: "* Required"
          - button "Cancel" [ref=f3e198] [cursor=pointer]
          - button "Save" [ref=f3e199] [cursor=pointer]
    - generic [ref=f3e200]:
      - paragraph [ref=f3e201]: OrangeHRM OS 5.9
      - paragraph [ref=f3e202]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e203] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  581 | );
  582 | 
  583 | await pimPage.clickOnFilterSearch();
  584 | });
  585 | 
  586 | test("'TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression'", async ({
  587 |   page,
  588 |   loginPage,
  589 |   navigationPage,
  590 |   pimPage,
  591 | }) => {
  592 |   const firstName = `Auto${Date.now()}`;
  593 |   const middleName = "Test";
  594 |   const lastName = "User";
  595 |   const username = `user${Date.now()}`;
  596 |   const password = 'Test@12345';
  597 | 
  598 |   await loginPage.visitPage();
  599 |   await loginPage.login("Admin", "admin123");
  600 |   await loginPage.verifyLoginSuccessful();
  601 | 
  602 |   await navigationPage.gotoPIM();
  603 |   await pimPage.gotoAddEmployee();
  604 | 
  605 | const employeeId =
  606 |       await pimPage.addEmployeeWithLoginDetails({
  607 |         firstName,
  608 |         middleName,
  609 |         lastName,
  610 |         username,
  611 |         password,
  612 |         status: 'Enabled',
  613 |       });
  614 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  615 |     timeout: 15_000,
  616 |   });
  617 | 
  618 |  await expect(pimPage.personalDetailsHeading).toBeVisible();
  619 | 
  620 |     await expect(pimPage.firstnameInput).toHaveValue(
  621 |       firstName
  622 |     );
  623 | 
  624 |     await expect(pimPage.middlenameInput).toHaveValue(
  625 |       middleName
  626 |     );
  627 | 
  628 |     await expect(pimPage.lastnameInput).toHaveValue(
  629 |       lastName
  630 |     );
  631 | 
  632 |     await expect(pimPage.employeeID).toHaveValue(
  633 |       employeeId
  634 |     );
  635 | 
  636 |      await pimPage.gotoEmployeeList();
  637 | 
  638 |     await pimPage.filterEmployeeList({ employeeId });
  639 |     await pimPage.clickOnFilterSearch();
  640 | 
  641 |     await pimPage.verifyEmployeeSearchResult(
  642 |       employeeId,
  643 |       firstName,
  644 |       lastName
  645 |     );
  646 | 
  647 |     // Cleanup.
  648 |     await pimPage.deleteEmployeeById(employeeId);
  649 | 
  650 |     await pimPage.filterEmployeeList({ employeeId });
  651 |     await pimPage.clickOnFilterSearch();
  652 | 
  653 |     await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  654 |   
  655 | });
  656 | 
  657 | 
  658 | test.only(
  659 |   'TC_PIM_031 - Password mismatch validation should appear while creating employee login details @negative @validation @account @regression',
  660 |   async ({ page, loginPage, navigationPage, pimPage }) => {
  661 |     const firstName = `Auto${Date.now()}`;
  662 |     const username = `user${Date.now()}`;
  663 |     const password = 'Test@12345';
  664 |     const confirmPassword = 'Wrong@12345';
  665 | 
  666 |     await loginPage.visitPage();
  667 |     await loginPage.login('Admin', 'admin123');
  668 |     await loginPage.verifyLoginSuccessful();
  669 | 
  670 |     await navigationPage.gotoPIM();
  671 |     await pimPage.gotoAddEmployee();
  672 | 
  673 |     
  674 |     await pimPage.fillAddEmployeeForm({
  675 |       firstName,
  676 |       middleName: 'Test',
  677 |       lastName: 'User',
  678 |     });
  679 | 
  680 |    
> 681 |     await pimPage.createLoginDetailsSwitch.check({
      |                                            ^ Error: locator.check: Clicking the checkbox did not change its state
  682 |       force: true,
  683 |     });
  684 | 
  685 |     await expect(
  686 |       pimPage.createLoginDetailsSwitch
  687 |     ).toBeChecked();
  688 | 
  689 | 
  690 |     await pimPage.employeeUsernameInput.fill(username);
  691 |     await pimPage.employeePasswordInput.fill(password);
  692 |     await pimPage.confirmPasswordInput.fill(
  693 |       confirmPassword
  694 |     );
  695 | 
  696 |     await pimPage.confirmPasswordInput.blur();
  697 | 
  698 |     await expect(
  699 |       pimPage.confirmPasswordValidation
  700 |     ).toBeVisible();
  701 | 
  702 |     await expect(
  703 |       pimPage.confirmPasswordValidation
  704 |     ).toHaveText('Passwords do not match');
  705 | 
  706 |     await pimPage.SaveEmployeeButton.click();
  707 | 
  708 |     await expect(page).toHaveURL(/pim\/addEmployee/);
  709 | 
  710 |     await expect(
  711 |       pimPage.confirmPasswordValidation
  712 |     ).toHaveText('Passwords do not match');
  713 |   }
  714 | );
```