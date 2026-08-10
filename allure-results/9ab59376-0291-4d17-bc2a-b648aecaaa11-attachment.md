# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_035 - Disabled employee account should not be able to login @negative @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:581:5

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
  527 | });
  528 | 
  529 | test("TC_PIM_034 - Duplicate validation should appear for an existing login username @negative @validation @account @regression", async ({
  530 |   page,
  531 |   loginPage,
  532 |   navigationPage,
  533 |   pimPage,
  534 | }) => {
  535 |   const firstName = `Auto${Date.now()}`;
  536 |   const username = `Admin`;
  537 |   const Password = "123457896";
  538 | 
  539 |   await loginPage.visitPage();
  540 |   await loginPage.login("Admin", "admin123");
  541 |   await loginPage.verifyLoginSuccessful();
  542 | 
  543 |   await navigationPage.gotoPIM();
  544 |   await pimPage.gotoAddEmployee();
  545 | 
  546 |   await pimPage.fillAddEmployeeForm({
  547 |     firstName,
  548 |     middleName: "Test",
  549 |     lastName: "User",
  550 |   });
  551 | 
  552 |   await pimPage.createLoginDetailsSwitch.click();
  553 | 
  554 |   await expect(pimPage.createLoginDetailsCheckbox).toBeChecked();
  555 | 
  556 |   await expect(pimPage.employeeUsernameInput).toBeVisible();
  557 | 
  558 |   await expect(pimPage.employeePasswordInput).toBeVisible();
  559 | 
  560 |   await expect(pimPage.confirmPasswordInput).toBeVisible();
  561 | 
  562 |   await pimPage.employeeUsernameInput.fill(username);
  563 | 
  564 |   await pimPage.employeeUsernameInput.blur();
  565 | 
  566 |   await pimPage.employeePasswordInput.fill(Password);
  567 | 
  568 |   await pimPage.confirmPasswordInput.fill(Password);
  569 | 
  570 |   await pimPage.SaveEmployeeButton.click();
  571 | 
  572 |   await expect(page).toHaveURL(/pim\/addEmployee/);
  573 | 
  574 |   await expect(pimPage.passwordValidation).toBeVisible();
  575 |   await expect(pimPage.usernameValidation).toBeVisible();
  576 |   await expect(pimPage.usernameValidation).toHaveText(
  577 |     "Username already exists",
  578 |   );
  579 | });
  580 | 
  581 | test("TC_PIM_035 - Disabled employee account should not be able to login @negative @security @account @regression", async ({
  582 |   page,
  583 |   loginPage,
  584 |   navigationPage,
  585 |   dashboardPage,
  586 |   pimPage,
  587 | }) => {
  588 |   const firstName = `Auto${Date.now()}`;
  589 |   const middleName = "Test";
  590 |   const lastName = "User";
  591 |   const username = `user${Date.now()}`;
  592 |   const password = "Test@12345";
  593 | 
  594 |   await loginPage.visitPage();
  595 |   await loginPage.login("Admin", "admin123");
  596 |   await loginPage.verifyLoginSuccessful();
  597 | 
  598 |   await navigationPage.gotoPIM();
  599 |   await pimPage.gotoAddEmployee();
  600 | 
  601 |   const employeeId = await pimPage.addEmployeeWithLoginDetails({
  602 |     firstName,
  603 |     middleName,
  604 |     lastName,
  605 |     username,
  606 |     password,
  607 |     status: "Disabled",
  608 |   });
  609 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  610 |     timeout: 15_000,
  611 |   });
  612 | 
  613 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  614 | 
  615 |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  616 | 
  617 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  618 | 
  619 |   // Logout from the Admin account.
  620 |   await dashboardPage.clickOnLogout();
  621 | 
  622 |   await expect(page).toHaveURL(/auth\/login/);
  623 | 
  624 |   // Attempt to login using the disabled account.
  625 |   await loginPage.login(username, password);
  626 | 
> 627 |   await expect(loginPage.errorMessage).toBeVisible();
      |                                        ^ Error: expect(locator).toBeVisible() failed
  628 | 
  629 |   await expect(loginPage.errorMessage).toHaveText("Account disabled");
  630 | 
  631 |   await loginPage.verifyLoginUnsuccessful();
  632 | 
  633 |   // Login again as Admin for cleanup.
  634 |   await loginPage.login("Admin", "admin123");
  635 |   await loginPage.verifyLoginSuccessful();
  636 | 
  637 |   await navigationPage.gotoPIM();
  638 |   await pimPage.gotoEmployeeList();
  639 | 
  640 |   await pimPage.filterEmployeeList({ employeeId });
  641 |   await pimPage.clickOnFilterSearch();
  642 | 
  643 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  644 | 
  645 |   await pimPage.deleteEmployeeById(employeeId);
  646 | 
  647 |   await pimPage.filterEmployeeList({ employeeId });
  648 |   await pimPage.clickOnFilterSearch();
  649 | 
  650 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  651 | });
  652 | 
  653 | 
  654 | test("TC_PIM_036 - Enabled employee account should login successfully @positive @security @account @regression", async ({
  655 |   page,
  656 |   loginPage,
  657 |   navigationPage,dashboardPage,
  658 |   pimPage,
  659 | }) => {
  660 |   const firstName = `Auto${Date.now()}`;
  661 |   const middleName = "Test";
  662 |   const lastName = "User";
  663 |   const username = `user${Date.now()}`;
  664 |   const password = "Test@12345";
  665 | 
  666 |   await loginPage.visitPage();
  667 |   await loginPage.login("Admin", "admin123");
  668 |   await loginPage.verifyLoginSuccessful();
  669 | 
  670 |   await navigationPage.gotoPIM();
  671 |   await pimPage.gotoAddEmployee();
  672 | 
  673 |   const employeeId = await pimPage.addEmployeeWithLoginDetails({
  674 |     firstName,
  675 |     middleName,
  676 |     lastName,
  677 |     username,
  678 |     password,
  679 |     status: "Enabled",
  680 |   });
  681 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  682 |     timeout: 15_000,
  683 |   });
  684 | 
  685 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  686 | 
  687 |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  688 | 
  689 |   await expect(pimPage.middlenameInput).toHaveValue(middleName);
  690 | 
  691 |   await expect(pimPage.lastnameInput).toHaveValue(lastName);
  692 | 
  693 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  694 | 
  695 |   await pimPage.gotoEmployeeList();
  696 | 
  697 |   await pimPage.filterEmployeeList({ employeeId });
  698 |   await pimPage.clickOnFilterSearch();
  699 | 
  700 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  701 | 
  702 |   await dashboardPage.clickOnLogout();
  703 | 
  704 |     await loginPage.login(username, password);
  705 | 
  706 |     await loginPage.verifyLoginSuccessful();
  707 | 
  708 | });
  709 | 
  710 | 
```