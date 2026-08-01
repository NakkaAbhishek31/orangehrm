# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_032 - Weak password validation should appear while creating employee login details @negative @validation @account @regression
- Location: tests\PIM\pim-employee.spec.ts:714:6

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
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: WAC WAC_TEST
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Configuration
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - link "Employee List" [ref=f4e136]:
              - /url: "#"
          - listitem [ref=f4e137] [cursor=pointer]:
            - link "Add Employee" [ref=f4e138]:
              - /url: "#"
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Reports" [ref=f4e140]:
              - /url: "#"
          - button "" [ref=f4e142] [cursor=pointer]
  - generic [ref=f4e144]:
    - generic [ref=f4e147]:
      - heading "Add Employee" [level=6] [ref=f4e148]
      - separator [ref=f4e149]
      - generic [ref=f4e150]:
        - generic [ref=f4e154]:
          - generic [ref=f4e155]:
            - generic [ref=f4e157]:
              - button "Choose File"
              - generic [ref=f4e158]:
                - img "profile picture" [ref=f4e160]
                - button "" [ref=f4e161] [cursor=pointer]
            - paragraph [ref=f4e163]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f4e164]:
            - generic [ref=f4e165]:
              - generic [ref=f4e168]:
                - generic [ref=f4e169]: Employee Full Name*
                - generic [ref=f4e171]:
                  - textbox "First Name" [ref=f4e174]: Auto1785503788704
                  - textbox "Middle Name" [ref=f4e177]: Test
                  - textbox "Last Name" [ref=f4e180]: User
              - generic [ref=f4e183]:
                - generic [ref=f4e184]: Employee Id
                - textbox [ref=f4e187]: "0566"
            - separator [ref=f4e188]
            - generic [ref=f4e189]:
              - paragraph [ref=f4e190]: Create Login Details
              - checkbox [ref=f4e193]
        - separator [ref=f4e195]
        - generic [ref=f4e196]:
          - paragraph [ref=f4e197]: "* Required"
          - button "Cancel" [ref=f4e198] [cursor=pointer]
          - button "Save" [ref=f4e199] [cursor=pointer]
    - generic [ref=f4e200]:
      - paragraph [ref=f4e201]: OrangeHRM OS 5.9
      - paragraph [ref=f4e202]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e203] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  639 |     await pimPage.verifyEmployeeSearchResult(
  640 |       employeeId,
  641 |       firstName,
  642 |       lastName
  643 |     );
  644 | 
  645 |     // Cleanup.
  646 |     await pimPage.deleteEmployeeById(employeeId);
  647 | 
  648 |     await pimPage.filterEmployeeList({ employeeId });
  649 |     await pimPage.clickOnFilterSearch();
  650 | 
  651 |     await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  652 |   
  653 | });
  654 | 
  655 | 
  656 | test("TC_PIM_031 - Password mismatch validation should appear while creating employee login details @negative @validation @account @regression",
  657 |   async ({ page, loginPage, navigationPage, pimPage }) => {
  658 |     const firstName = `Auto${Date.now()}`;
  659 |     const username = `user${Date.now()}`;
  660 |     const password = 'Test@12345';
  661 |     const confirmPassword = 'Wrong@12345';
  662 | 
  663 |     await loginPage.visitPage();
  664 |     await loginPage.login('Admin', 'admin123');
  665 |     await loginPage.verifyLoginSuccessful();
  666 | 
  667 |     await navigationPage.gotoPIM();
  668 |     await pimPage.gotoAddEmployee();
  669 | 
  670 |     
  671 |     await pimPage.fillAddEmployeeForm({
  672 |       firstName,
  673 |       middleName: 'Test',
  674 |       lastName: 'User',
  675 |     });
  676 | 
  677 |    
  678 |     await pimPage.createLoginDetailsSwitch.check({
  679 |       force: true,
  680 |     });
  681 | 
  682 |     await expect(
  683 |       pimPage.createLoginDetailsSwitch
  684 |     ).toBeChecked();
  685 | 
  686 | 
  687 |     await pimPage.employeeUsernameInput.fill(username);
  688 |     await pimPage.employeePasswordInput.fill(password);
  689 |     await pimPage.confirmPasswordInput.fill(
  690 |       confirmPassword
  691 |     );
  692 | 
  693 |     await pimPage.confirmPasswordInput.blur();
  694 | 
  695 |     await expect(
  696 |       pimPage.confirmPasswordValidation
  697 |     ).toBeVisible();
  698 | 
  699 |     await expect(
  700 |       pimPage.confirmPasswordValidation
  701 |     ).toHaveText('Passwords do not match');
  702 | 
  703 |     await pimPage.SaveEmployeeButton.click();
  704 | 
  705 |     await expect(page).toHaveURL(/pim\/addEmployee/);
  706 | 
  707 |     await expect(
  708 |       pimPage.confirmPasswordValidation
  709 |     ).toHaveText('Passwords do not match');
  710 |   }
  711 | );
  712 | 
  713 | 
  714 | test.only('TC_PIM_032 - Weak password validation should appear while creating employee login details @negative @validation @account @regression', async ({
  715 |   page,
  716 |   loginPage,
  717 |   navigationPage,
  718 |   pimPage,
  719 | }) => {
  720 |   const firstName = `Auto${Date.now()}`;
  721 |   const middleName = "Test";
  722 |   const lastName = "User";
  723 |   const username = `user${Date.now()}`;
  724 |  const password = '12345';
  725 | 
  726 |   await loginPage.visitPage();
  727 |   await loginPage.login("Admin", "admin123");
  728 |   await loginPage.verifyLoginSuccessful();
  729 | 
  730 |   await navigationPage.gotoPIM();
  731 |   await pimPage.gotoAddEmployee();
  732 | 
  733 |    await pimPage.fillAddEmployeeForm({
  734 |       firstName,
  735 |       middleName: 'Test',
  736 |       lastName: 'User',
  737 |     });
  738 | 
> 739 |   await pimPage.createLoginDetailsSwitch.check({
      |                                          ^ Error: locator.check: Clicking the checkbox did not change its state
  740 |       force: true,
  741 |     });
  742 | 
  743 |     await expect(
  744 |       pimPage.createLoginDetailsSwitch
  745 |     ).toBeChecked();
  746 | 
  747 |     await expect(
  748 |       pimPage.employeeUsernameInput
  749 |     ).toBeVisible();
  750 | 
  751 |     await pimPage.employeeUsernameInput.fill(username);
  752 |     await pimPage.employeePasswordInput.fill(password);
  753 |     await pimPage.confirmPasswordInput.fill(password);
  754 | 
  755 |     await pimPage.employeePasswordInput.blur();
  756 | 
  757 |     await expect(
  758 |       pimPage.passwordStrengthIndicator
  759 |     ).toBeVisible();
  760 | 
  761 |     await expect(
  762 |       pimPage.passwordStrengthIndicator
  763 |     ).toHaveText(/Weak/i);
  764 | 
  765 |   
  766 |     await expect(
  767 |       pimPage.passwordValidation
  768 |     ).toBeVisible();
  769 | 
  770 |     await pimPage.SaveEmployeeButton.click();
  771 | 
  772 |     await expect(page).toHaveURL(/pim\/addEmployee/);
  773 | 
  774 |     await expect(
  775 |       pimPage.passwordValidation
  776 |     ).toBeVisible();
  777 |   }
  778 | );
```