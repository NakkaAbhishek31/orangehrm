# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_035 - Disabled employee account should not be able to login @negative @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:580:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Invalid credentials', { exact: true })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('Invalid credentials', { exact: true })
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Account disabled
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  526 | });
  527 | 
  528 | test("TC_PIM_034 - Duplicate validation should appear for an existing login username @negative @validation @account @regression", async ({
  529 |   page,
  530 |   loginPage,
  531 |   navigationPage,
  532 |   pimPage,
  533 | }) => {
  534 |   const firstName = `Auto${Date.now()}`;
  535 |   const username = `Admin`;
  536 |   const Password = "123457896";
  537 | 
  538 |   await loginPage.visitPage();
  539 |   await loginPage.login("Admin", "admin123");
  540 |   await loginPage.verifyLoginSuccessful();
  541 | 
  542 |   await navigationPage.gotoPIM();
  543 |   await pimPage.gotoAddEmployee();
  544 | 
  545 |   await pimPage.fillAddEmployeeForm({
  546 |     firstName,
  547 |     middleName: "Test",
  548 |     lastName: "User",
  549 |   });
  550 | 
  551 |   await pimPage.createLoginDetailsSwitch.click();
  552 | 
  553 |   await expect(pimPage.createLoginDetailsCheckbox).toBeChecked();
  554 | 
  555 |   await expect(pimPage.employeeUsernameInput).toBeVisible();
  556 | 
  557 |   await expect(pimPage.employeePasswordInput).toBeVisible();
  558 | 
  559 |   await expect(pimPage.confirmPasswordInput).toBeVisible();
  560 | 
  561 |   await pimPage.employeeUsernameInput.fill(username);
  562 | 
  563 |   await pimPage.employeeUsernameInput.blur();
  564 | 
  565 |   await pimPage.employeePasswordInput.fill(Password);
  566 | 
  567 |   await pimPage.confirmPasswordInput.fill(Password);
  568 | 
  569 |   await pimPage.SaveEmployeeButton.click();
  570 | 
  571 |   await expect(page).toHaveURL(/pim\/addEmployee/);
  572 | 
  573 |   await expect(pimPage.passwordValidation).toBeVisible();
  574 |   await expect(pimPage.usernameValidation).toBeVisible();
  575 |   await expect(pimPage.usernameValidation).toHaveText(
  576 |     "Username already exists",
  577 |   );
  578 | });
  579 | 
  580 | test("TC_PIM_035 - Disabled employee account should not be able to login @negative @security @account @regression", async ({
  581 |   page,
  582 |   loginPage,
  583 |   navigationPage,
  584 |   dashboardPage,
  585 |   pimPage,
  586 | }) => {
  587 |   const firstName = `Auto${Date.now()}`;
  588 |   const middleName = "Test";
  589 |   const lastName = "User";
  590 |   const username = `user${Date.now()}`;
  591 |   const password = "Test@12345";
  592 | 
  593 |   await loginPage.visitPage();
  594 |   await loginPage.login("Admin", "admin123");
  595 |   await loginPage.verifyLoginSuccessful();
  596 | 
  597 |   await navigationPage.gotoPIM();
  598 |   await pimPage.gotoAddEmployee();
  599 | 
  600 |   const employeeId = await pimPage.addEmployeeWithLoginDetails({
  601 |     firstName,
  602 |     middleName,
  603 |     lastName,
  604 |     username,
  605 |     password,
  606 |     status: "Disabled",
  607 |   });
  608 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  609 |     timeout: 15_000,
  610 |   });
  611 | 
  612 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  613 | 
  614 |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  615 | 
  616 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  617 | 
  618 |   // Logout from the Admin account.
  619 |   await dashboardPage.clickOnLogout();
  620 | 
  621 |   await expect(page).toHaveURL(/auth\/login/);
  622 | 
  623 |   // Attempt to login using the disabled account.
  624 |   await loginPage.login(username, password);
  625 | 
> 626 |   await expect(loginPage.errorMessage).toBeVisible();
      |                                        ^ Error: expect(locator).toBeVisible() failed
  627 | 
  628 |   await expect(loginPage.errorMessage).toHaveText("Account disabled");
  629 | 
  630 |   await loginPage.verifyLoginUnsuccessful();
  631 | 
  632 |   // Login again as Admin for cleanup.
  633 |   await loginPage.login("Admin", "admin123");
  634 |   await loginPage.verifyLoginSuccessful();
  635 | 
  636 |   await navigationPage.gotoPIM();
  637 |   await pimPage.gotoEmployeeList();
  638 | 
  639 |   await pimPage.filterEmployeeList({ employeeId });
  640 |   await pimPage.clickOnFilterSearch();
  641 | 
  642 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  643 | 
  644 |   await pimPage.deleteEmployeeById(employeeId);
  645 | 
  646 |   await pimPage.filterEmployeeList({ employeeId });
  647 |   await pimPage.clickOnFilterSearch();
  648 | 
  649 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  650 | });
  651 | 
  652 | 
  653 | test("TC_PIM_036 - Enabled employee account should login successfully @positive @security @account @regression", async ({
  654 |   page,
  655 |   loginPage,
  656 |   navigationPage,dashboardPage,
  657 |   pimPage,
  658 | }) => {
  659 |   const firstName = `Auto${Date.now()}`;
  660 |   const middleName = "Test";
  661 |   const lastName = "User";
  662 |   const username = `user${Date.now()}`;
  663 |   const password = "Test@12345";
  664 | 
  665 |   await loginPage.visitPage();
  666 |   await loginPage.login("Admin", "admin123");
  667 |   await loginPage.verifyLoginSuccessful();
  668 | 
  669 |   await navigationPage.gotoPIM();
  670 |   await pimPage.gotoAddEmployee();
  671 | 
  672 |   const employeeId = await pimPage.addEmployeeWithLoginDetails({
  673 |     firstName,
  674 |     middleName,
  675 |     lastName,
  676 |     username,
  677 |     password,
  678 |     status: "Enabled",
  679 |   });
  680 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  681 |     timeout: 15_000,
  682 |   });
  683 | 
  684 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  685 | 
  686 |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  687 | 
  688 |   await expect(pimPage.middlenameInput).toHaveValue(middleName);
  689 | 
  690 |   await expect(pimPage.lastnameInput).toHaveValue(lastName);
  691 | 
  692 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  693 | 
  694 |   await pimPage.gotoEmployeeList();
  695 | 
  696 |   await pimPage.filterEmployeeList({ employeeId });
  697 |   await pimPage.clickOnFilterSearch();
  698 | 
  699 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  700 | 
  701 |   await dashboardPage.clickOnLogout();
  702 | 
  703 |     await loginPage.login(username, password);
  704 | 
  705 |     await loginPage.verifyLoginSuccessful();
  706 | 
  707 | });
  708 | 
  709 | 
```