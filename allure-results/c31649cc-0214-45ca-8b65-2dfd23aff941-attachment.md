# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_033 - Required validation should appear when login username is empty @negative @validation @account @regression
- Location: tests\PIM\pim-employee.spec.ts:795:6

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: getByText('Username', { exact: true }) }).locator('.oxd-input-field-error-message')
Expected: "Required"
Received: "Username already exists"
Timeout:  10000ms

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-input-group').filter({ has: getByText('Username', { exact: true }) }).locator('.oxd-input-field-error-message')
    23 × locator resolved to <span data-v-7b563373="" data-v-957b4417="" class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message">Username already exists</span>
       - unexpected value "Username already exists"

```

```yaml
- text: Username already exists
```

# Test source

```ts
  756 |     );
  757 | 
  758 |     await pimPage.confirmPasswordInput.fill(
  759 |       weakPassword
  760 |     );
  761 | 
  762 |     await pimPage.confirmPasswordInput.blur();
  763 | 
  764 |     // Verify weak-password validation.
  765 |     await expect(
  766 |       pimPage.passwordValidation
  767 |     ).toBeVisible();
  768 | 
  769 |     await expect(
  770 |       pimPage.passwordValidation
  771 |     ).toContainText(/at least|characters|password/i);
  772 | 
  773 |     // Verify strength when OrangeHRM displays the indicator.
  774 |     if (
  775 |       await pimPage.passwordStrengthIndicator.isVisible()
  776 |     ) {
  777 |       await expect(
  778 |         pimPage.passwordStrengthIndicator
  779 |       ).toHaveText(/Very Weak|Weak/i);
  780 |     }
  781 | 
  782 |     // Try to save the invalid form.
  783 |     await pimPage.SaveEmployeeButton.click();
  784 | 
  785 |     // Employee must not be created.
  786 |     await expect(page).toHaveURL(/pim\/addEmployee/);
  787 | 
  788 |     await expect(
  789 |       pimPage.passwordValidation
  790 |     ).toBeVisible();
  791 |   }
  792 | );
  793 | 
  794 | 
  795 | test.only('TC_PIM_033 - Required validation should appear when login username is empty @negative @validation @account @regression',
  796 |   async ({ page, loginPage, navigationPage, pimPage }) => {
  797 |     const firstName = `Auto${Date.now()}`;
  798 |     const username = `Admin`;
  799 |     const Password = '123457896';
  800 | 
  801 |     await loginPage.visitPage();
  802 |     await loginPage.login('Admin', 'admin123');
  803 |     await loginPage.verifyLoginSuccessful();
  804 | 
  805 |     await navigationPage.gotoPIM();
  806 |     await pimPage.gotoAddEmployee();
  807 | 
  808 |     await pimPage.fillAddEmployeeForm({
  809 |       firstName,
  810 |       middleName: 'Test',
  811 |       lastName: 'User',
  812 |     });
  813 |  
  814 |     await pimPage.createLoginDetailsSwitch.click();
  815 | 
  816 |     
  817 |     await expect(
  818 |       pimPage.createLoginDetailsCheckbox
  819 |     ).toBeChecked();
  820 | 
  821 |     await expect(
  822 |       pimPage.employeeUsernameInput
  823 |     ).toBeVisible();
  824 | 
  825 |     await expect(
  826 |       pimPage.employeePasswordInput
  827 |     ).toBeVisible();
  828 | 
  829 |     await expect(
  830 |       pimPage.confirmPasswordInput
  831 |     ).toBeVisible();
  832 | 
  833 | 
  834 |     await pimPage.employeeUsernameInput.fill(username);
  835 | 
  836 | 
  837 | 
  838 |     await pimPage.employeePasswordInput.fill(
  839 |       Password
  840 |     );
  841 | 
  842 |     await pimPage.confirmPasswordInput.fill(
  843 |       Password
  844 |     );
  845 | 
  846 |     await pimPage.SaveEmployeeButton.click();
  847 | 
  848 |     await expect(page).toHaveURL(/pim\/addEmployee/);
  849 | 
  850 |     await expect(
  851 |       pimPage.passwordValidation
  852 |     ).toBeVisible();
  853 |      await expect(
  854 |       pimPage.usernameValidation
  855 |     ).toBeVisible();
> 856 |     await expect(pimPage.usernameValidation).toHaveText(
      |                                              ^ Error: expect(locator).toHaveText(expected) failed
  857 |   'Required'
  858 | );
  859 |     
  860 |   }
  861 | );
  862 | 
  863 | 
  864 | test.only('TC_PIM_034 - Duplicate validation should appear for an existing login username @negative @validation @account @regression',async ({ page, loginPage, navigationPage, pimPage }) => {
  865 |     const firstName = `Auto${Date.now()}`;
  866 |     const username = `Admin`;
  867 |     const Password = '123457896';
  868 | 
  869 |     await loginPage.visitPage();
  870 |     await loginPage.login('Admin', 'admin123');
  871 |     await loginPage.verifyLoginSuccessful();
  872 | 
  873 |     await navigationPage.gotoPIM();
  874 |     await pimPage.gotoAddEmployee();
  875 | 
  876 |     await pimPage.fillAddEmployeeForm({
  877 |       firstName,
  878 |       middleName: 'Test',
  879 |       lastName: 'User',
  880 |     });
  881 |  
  882 |     await pimPage.createLoginDetailsSwitch.click();
  883 | 
  884 |     
  885 |     await expect(
  886 |       pimPage.createLoginDetailsCheckbox
  887 |     ).toBeChecked();
  888 | 
  889 |     await expect(
  890 |       pimPage.employeeUsernameInput
  891 |     ).toBeVisible();
  892 | 
  893 |     await expect(
  894 |       pimPage.employeePasswordInput
  895 |     ).toBeVisible();
  896 | 
  897 |     await expect(
  898 |       pimPage.confirmPasswordInput
  899 |     ).toBeVisible();
  900 | 
  901 | 
  902 |     await pimPage.employeeUsernameInput.fill(username);
  903 | 
  904 | 
  905 |     await pimPage.employeeUsernameInput.blur();
  906 | 
  907 |     await pimPage.employeePasswordInput.fill(
  908 |       Password
  909 |     );
  910 | 
  911 |     await pimPage.confirmPasswordInput.fill(
  912 |       Password
  913 |     );
  914 | 
  915 |     await pimPage.SaveEmployeeButton.click();
  916 | 
  917 |     await expect(page).toHaveURL(/pim\/addEmployee/);
  918 | 
  919 |     await expect(
  920 |       pimPage.passwordValidation
  921 |     ).toBeVisible();
  922 |      await expect(
  923 |       pimPage.usernameValidation
  924 |     ).toBeVisible();
  925 | await expect(
  926 |   pimPage.usernameValidation
  927 | ).toHaveText('Username already exists');
  928 |     
  929 |   }
  930 | );
  931 | 
  932 | 
  933 | 
```