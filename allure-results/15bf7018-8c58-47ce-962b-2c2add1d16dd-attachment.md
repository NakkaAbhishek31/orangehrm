# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_031 - Password mismatch validation should appear while creating employee login details @negative @validation @account @regression
- Location: tests\PIM\pim-employee.spec.ts:656:5

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
              - paragraph [ref=f4e127]: David Smith
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
                - generic [ref=f4e159]:
                  - img "profile picture"
                - button "" [ref=f4e160] [cursor=pointer]
            - paragraph [ref=f4e162]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f4e163]:
            - generic [ref=f4e164]:
              - generic [ref=f4e167]:
                - generic [ref=f4e168]: Employee Full Name*
                - generic [ref=f4e170]:
                  - textbox "First Name" [ref=f4e173]: Auto1785498377081
                  - textbox "Middle Name" [ref=f4e176]: Test
                  - textbox "Last Name" [ref=f4e179]: User
              - generic [ref=f4e182]:
                - generic [ref=f4e183]: Employee Id
                - textbox [ref=f4e186]: "0603"
            - separator [ref=f4e187]
            - generic [ref=f4e188]:
              - paragraph [ref=f4e189]: Create Login Details
              - checkbox [ref=f4e192]
        - separator [ref=f4e194]
        - generic [ref=f4e195]:
          - paragraph [ref=f4e196]: "* Required"
          - button "Cancel" [ref=f4e197] [cursor=pointer]
          - button "Save" [ref=f4e198] [cursor=pointer]
    - generic [ref=f4e199]:
      - paragraph [ref=f4e200]: OrangeHRM OS 5.9
      - paragraph [ref=f4e201]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e202] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  579 | await pimPage.selectEmployeeFromAutocomplete(partialName, fullName);
  580 | await pimPage.clickOnFilterSearch();
  581 | 
  582 | });
  583 | 
  584 | test("'TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression'", async ({
  585 |   page,
  586 |   loginPage,
  587 |   navigationPage,
  588 |   pimPage,
  589 | }) => {
  590 |   const firstName = `Auto${Date.now()}`;
  591 |   const middleName = "Test";
  592 |   const lastName = "User";
  593 |   const username = `user${Date.now()}`;
  594 |   const password = 'Test@12345';
  595 | 
  596 |   await loginPage.visitPage();
  597 |   await loginPage.login("Admin", "admin123");
  598 |   await loginPage.verifyLoginSuccessful();
  599 | 
  600 |   await navigationPage.gotoPIM();
  601 |   await pimPage.gotoAddEmployee();
  602 | 
  603 | const employeeId =
  604 |       await pimPage.addEmployeeWithLoginDetails({
  605 |         firstName,
  606 |         middleName,
  607 |         lastName,
  608 |         username,
  609 |         password,
  610 |         status: 'Enabled',
  611 |       });
  612 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  613 |     timeout: 15_000,
  614 |   });
  615 | 
  616 |  await expect(pimPage.personalDetailsHeading).toBeVisible();
  617 | 
  618 |     await expect(pimPage.firstnameInput).toHaveValue(
  619 |       firstName
  620 |     );
  621 | 
  622 |     await expect(pimPage.middlenameInput).toHaveValue(
  623 |       middleName
  624 |     );
  625 | 
  626 |     await expect(pimPage.lastnameInput).toHaveValue(
  627 |       lastName
  628 |     );
  629 | 
  630 |     await expect(pimPage.employeeID).toHaveValue(
  631 |       employeeId
  632 |     );
  633 | 
  634 |      await pimPage.gotoEmployeeList();
  635 | 
  636 |     await pimPage.filterEmployeeList({ employeeId });
  637 |     await pimPage.clickOnFilterSearch();
  638 | 
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
  656 | test(
  657 |   'TC_PIM_031 - Password mismatch validation should appear while creating employee login details @negative @validation @account @regression',
  658 |   async ({ page, loginPage, navigationPage, pimPage }) => {
  659 |     const firstName = `Auto${Date.now()}`;
  660 |     const username = `user${Date.now()}`;
  661 |     const password = 'Test@12345';
  662 |     const confirmPassword = 'Wrong@12345';
  663 | 
  664 |     await loginPage.visitPage();
  665 |     await loginPage.login('Admin', 'admin123');
  666 |     await loginPage.verifyLoginSuccessful();
  667 | 
  668 |     await navigationPage.gotoPIM();
  669 |     await pimPage.gotoAddEmployee();
  670 | 
  671 |     
  672 |     await pimPage.fillAddEmployeeForm({
  673 |       firstName,
  674 |       middleName: 'Test',
  675 |       lastName: 'User',
  676 |     });
  677 | 
  678 |    
> 679 |     await pimPage.createLoginDetailsSwitch.check({
      |                                            ^ Error: locator.check: Clicking the checkbox did not change its state
  680 |       force: true,
  681 |     });
  682 | 
  683 |     await expect(
  684 |       pimPage.createLoginDetailsSwitch
  685 |     ).toBeChecked();
  686 | 
  687 | 
  688 |     await pimPage.employeeUsernameInput.fill(username);
  689 |     await pimPage.employeePasswordInput.fill(password);
  690 |     await pimPage.confirmPasswordInput.fill(
  691 |       confirmPassword
  692 |     );
  693 | 
  694 |     await pimPage.confirmPasswordInput.blur();
  695 | 
  696 |     await expect(
  697 |       pimPage.confirmPasswordValidation
  698 |     ).toBeVisible();
  699 | 
  700 |     await expect(
  701 |       pimPage.confirmPasswordValidation
  702 |     ).toHaveText('Passwords do not match');
  703 | 
  704 |     await pimPage.SaveEmployeeButton.click();
  705 | 
  706 |     await expect(page).toHaveURL(/pim\/addEmployee/);
  707 | 
  708 |     await expect(
  709 |       pimPage.confirmPasswordValidation
  710 |     ).toHaveText('Passwords do not match');
  711 |   }
  712 | );
```