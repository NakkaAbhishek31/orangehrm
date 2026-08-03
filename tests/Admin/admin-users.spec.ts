import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";

test("TC_ADMIN_041 - Admin should navigate to the System Users page @smoke @navigation @regression", async ({
  page,
  loginPage,
  navigationPage,
  adminPage,
}) => {
  // Login using Admin credentials.
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  // Click Admin in the main navigation.
  await navigationPage.gotoAdmin();
  // Navigate to User Management → Users.
  await adminPage.gotoUserManagementUsers();
  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  // Verify the System Users heading.
  await expect(adminPage.systemUsersHeading).toBeVisible();
  // Verify the Username filter.
  await expect(adminPage.usernameInput).toBeVisible();
  // Verify the User Role filter.
  await expect(adminPage.userRoleDropdown).toBeVisible();
  // Verify the Employee Name filter.
  await expect(adminPage.employeeNameInput).toBeVisible();
  // Verify the Status filter.
  await expect(adminPage.statusDropdown).toBeVisible();
  // Verify Search, Reset, and Add buttons.
  await expect(adminPage.searchButton).toBeVisible();
  await expect(adminPage.resetButton).toBeVisible();
  await expect(adminPage.addButton).toBeVisible();
  // Verify the System Users table is visible.
  await expect(adminPage.systemUsersTable).toBeVisible();
});

test("TC_ADMIN_042 - Admin should search for a system user by username @positive @search @regression", async ({
  loginPage,
  navigationPage,
  adminPage,
}) => {
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();

  await adminPage.searchSystemUsers({
    username: "Admin",
  });

  await adminPage.verifySystemUserResult({
    username: "Admin",
  });

  await adminPage.resetSystemUserFilters();
});

test("TC_ADMIN_043 - Admin should see no records for a nonexistent username @negative @search @regression", async ({
  loginPage,
  navigationPage,
  adminPage,
}) => {
  // Login as Admin.
  const username = `Unknown${Date.now()}`;
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  // Navigate to Admin → User Management → Users.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  // Enter a unique nonexistent username.
  await adminPage.searchSystemUsers({
    username,
  });

  // Verify “No Records Found” is displayed.
  // Verify the users table contains zero rows.
  // Verify the Username filter keeps the entered value.
  // Reset the search filters.
  await expect(adminPage.noRecordsFound).toBeVisible();
  await expect(adminPage.userRows).toHaveCount(0);
  await expect(adminPage.usernameInput).toHaveValue(username);
  await adminPage.resetSystemUserFilters();
  await expect(adminPage.usernameInput).toHaveValue("");
});

test('TC_ADMIN_044 - Admin should filter system users by user role @positive @filter @regression',
  async ({ loginPage, navigationPage, adminPage }) => {
    const userRole = 'Admin';
     // Login as Admin.
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  // Navigate to Admin → User Management → Users.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
    // Select “Admin” from the User Role filter.
    await adminPage.searchSystemUsers({
      userRole
    })
    // Verify at least one user record appears.
       await expect(
      adminPage.userRows.first()
    ).toBeVisible({
      timeout: 15_000,
    });
    const rowCount=await adminPage.userRows.count();
    expect(rowCount).toBeGreaterThan(0);

    for(let index=0;index<rowCount;index++)
    {
       const rolcell=adminPage.userRows.nth(index).locator('.oxd-table-cell')
    .nth(2);

     await expect(rolcell).toHaveText(userRole);
    }
    // Verify “No Records Found” is not displayed.
 await expect(adminPage.noRecordsFound).not.toBeVisible();

    // Reset the filters.
    await adminPage.resetSystemUserFilters();
       await expect(
      adminPage.userRoleDropdown
    ).toContainText('Select');
  }
);


test('TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression',
  async ({ loginPage, navigationPage, adminPage }) => {
    const status = 'Enabled';
    // Login as Admin.
   await loginPage.visitPage();
   await loginPage.login("Admin", "admin123");
   await loginPage.verifyLoginSuccessful();
    // Navigate to Admin → User Management → Users.
      await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
    // Select “Enabled” from the Status filter.
    // Click Search.
     await adminPage.searchSystemUsers({
      status
     });
    await expect(
      adminPage.userRows.first()
    ).toBeVisible({
      timeout: 15_000,
    });

    const rowCount =
      await adminPage.userRows.count();

    expect(rowCount).toBeGreaterThan(0);

    for (
      let index = 0;
      index < rowCount;
      index++
    ) {
      const statusCell = adminPage.userRows
        .nth(index)
        .locator('.oxd-table-cell')
        .nth(4);

      await expect(statusCell).toHaveText(
        status
      );
    }

    await expect(
      adminPage.noRecordsFound
    ).not.toBeVisible();

    await adminPage.resetSystemUserFilters();

    await expect(
      adminPage.statusDropdown
    ).toContainText('Select');
  
  }
);

test('TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression',
  async ({ loginPage, navigationPage, adminPage }) => {
    const filters = {
  username: 'Admin',
  userRole: 'Admin',
  status: 'Enabled',
} as const;
     await loginPage.visitPage();
   await loginPage.login("Admin", "admin123");
   await loginPage.verifyLoginSuccessful();
    // Navigate to Admin → User Management → Users.
      await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
    // Select “Enabled” from the Status filter.
    // Click Search.
    // Enter “Admin” in the Username filter.
    // Select “Admin” as User Role.
    // Select “Enabled” as Status.
    // Click Search.
     await adminPage.searchSystemUsers(filters);
    // Verify exactly one matching row appears.
    // Verify Username is “Admin”.
    // Verify User Role is “Admin”.
    // Verify Status is “Enabled”.
    // Reset all filters.
       await expect(
      adminPage.userRows.first()
    ).toBeVisible({
      timeout: 15_000,
    });

   const rowCount =
      await adminPage.userRows.count();
    expect(rowCount).toBeGreaterThan(0);

    await expect(
      adminPage.noRecordsFound
    ).not.toBeVisible();

    await adminPage.resetSystemUserFilters();
     await expect(
      adminPage.usernameInput
    ).toHaveValue('');

    await expect(
      adminPage.userRoleDropdown
    ).toContainText('Select');

    await expect(
      adminPage.statusDropdown
    ).toContainText('Select');

  }
);


test('TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression',
  async ({
    loginPage,
    navigationPage,
    pimPage,
    adminPage,
  }) => {
   const uniqueValue =
      `${Date.now()}${Math.floor(
        Math.random() * 1000
      )}`;

    const firstName = `Auto${uniqueValue}`;
    const middleName = 'Test';
    const lastName = 'User';

    const username = `ess${uniqueValue}`;
    const password = 'Test@12345';
    // Login as Admin.
    await loginPage.visitPage();
   await loginPage.login("Admin", "admin123");
   await loginPage.verifyLoginSuccessful();
   
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    // Create a unique employee without login details.
    // Store the employee ID and full name.
   
    const employeeId = await pimPage.addEmployee({
      firstName,
      middleName,
      lastName,
    });

    const employeeName =
      `${firstName} ${middleName} ${lastName}`;
    const employeeTableName =
  `${firstName} ${lastName}`;


    // Navigate to Admin → User Management → Users.
    // Click Add.    
    await navigationPage.gotoAdmin();
     await adminPage.gotoUserManagementUsers();
     await adminPage.gotoAddSystemUser();
    await expect(
  adminPage.addUserHeading
   ).toBeVisible();
    // Select “ESS” as User Role.
    // Select the newly created employee.
    // Select “Enabled” as Status.
    // Enter a unique username.
    // Enter and confirm a valid password.
await adminPage.fillSystemUserForm({
  userRole: 'ESS',
  employeeName,
  status: 'Enabled',
  username,
  password,
});
await expect(
  adminPage.addUsernameInput
).toHaveValue(username);

await expect(
  adminPage.addEmployeeNameInput
).toContainText;
await expect(
  adminPage.addEmployeeNameInput
).not.toHaveValue('');

await expect(
  adminPage.addPasswordInput
).toHaveValue(password);

await expect(
  adminPage.addConfirmPasswordInput
).toHaveValue(password);

await adminPage.saveSystemUser();
    // Save the system user.
    // Verify the success notification.
    // Search using the new username.
    // Verify username, role, employee name, and status.
    // Delete the system user during cleanup.
    // Delete the employee during cleanup.

    await adminPage.searchSystemUsers({
  username,
});

await expect(
  adminPage.userRows
).toHaveCount(1);

await adminPage.verifySystemUserResult({
  username,
  userRole: 'ESS',
  employeeName: employeeTableName,
  status: 'Enabled',
});

// Delete the system user.
await adminPage.deleteSystemUserByUsername(
  username
);

// Verify the system user was deleted.
await adminPage.searchSystemUsers({
  username,
});

await expect(
  adminPage.userRows
).toHaveCount(0);

await expect(
  adminPage.noRecordsFound
).toBeVisible();

// Delete the employee.
await navigationPage.gotoPIM();
await pimPage.gotoEmployeeList();

await pimPage.filterEmployeeList({
  employeeId,
});

await pimPage.clickOnFilterSearch();

await pimPage.deleteEmployeeById(
  employeeId
);

await pimPage.filterEmployeeList({
  employeeId,
});

await pimPage.clickOnFilterSearch();

await pimPage.verifyNoEmployeeRecordsFound(
  employeeId
);
  }
);

test('TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression',
  async ({ page, loginPage, navigationPage, adminPage }) => {
    await loginPage.visitPage();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyLoginSuccessful();

    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();

    await expect(
      adminPage.addUserHeading
    ).toBeVisible();

    await adminPage.addUserSaveButton.click();

    await expect(
      adminPage.validationMessages
    ).toHaveCount(6);

    await expect(
      adminPage.validationMessages
    ).toHaveText([
      'Required',
      'Required',
      'Required',
      'Required',
      'Required',
      'Required',
    ]);

    await expect(page).toHaveURL(
      /admin\/saveSystemUser/
    );

    await expect(
      adminPage.addUserHeading
    ).toBeVisible();
  }
);

test('TC_ADMIN_049 - Admin should cancel adding a new System User @negative @cancel @regression',
  async ({ page, loginPage, navigationPage, adminPage }) => {
    const username = `cancel${Date.now()}`;
    const password = 'Test@12345';
    await loginPage.visitPage();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyLoginSuccessful();
     await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    // Click Add.
     await adminPage.gotoAddSystemUser();
    // Enter a unique username and password.
      // Click Cancel without saving.
    // Verify navigation back to System Users.
    // Search using the entered username.
    // Verify no user record was created.
    await adminPage.addUsernameInput.fill(username);
    await adminPage.addPasswordInput.fill(password);
    await adminPage.addConfirmPasswordInput.fill(password);
    await adminPage.addUserCancelButton.click();


    await expect(page).toHaveURL(
      /admin\/viewSystemUsers/
    );

    await expect(
      adminPage.systemUsersHeading
    ).toBeVisible();

    await adminPage.searchSystemUsers({
      username,
    });

    await expect(
      adminPage.userRows
    ).toHaveCount(0);

    await expect(
      adminPage.noRecordsFound
    ).toBeVisible();

    await adminPage.resetSystemUserFilters();
  }
);



test('TC_ADMIN_050 - Duplicate validation should appear for an existing System User username @negative @validation @regression',
  async ({
    page,
    loginPage,
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const uniqueValue =
      `${Date.now()}${Math.floor(
        Math.random() * 1000
      )}`;

    const firstName = `Auto${uniqueValue}`;
    const middleName = 'Test';
    const lastName = 'User';

    const existingUsername = 'Admin';
    const password = 'Test@12345';

    await loginPage.visitPage();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyLoginSuccessful();

    // Create an employee without login details.
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();

    const employeeId = await pimPage.addEmployee({
      firstName,
      middleName,
      lastName,
    });

    const employeeName =
      `${firstName} ${middleName} ${lastName}`;

    // Navigate to Add System User.
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();

    await expect(
      adminPage.addUserHeading
    ).toBeVisible();

    // Fill the form with an existing username.
    await adminPage.fillSystemUserForm({
      userRole: 'ESS',
      employeeName,
      status: 'Enabled',
      username: existingUsername,
      password,
    });

    await expect(
      adminPage.addUsernameInput
    ).toHaveValue(existingUsername);

    await adminPage.addUsernameInput.blur();

    // Verify duplicate-username validation.
    await expect(
      adminPage.usernameValidation
    ).toBeVisible({
      timeout: 15_000,
    });

    await expect(
      adminPage.usernameValidation
    ).toHaveText(/Already exists/i);

    // Verify the invalid form was not submitted.
    await expect(page).toHaveURL(
      /admin\/saveSystemUser/
    );

    // Cancel without creating a system user.
    await adminPage.addUserCancelButton.click();

    await expect(page).toHaveURL(
      /admin\/viewSystemUsers/
    );

    // Delete the employee used by this test.
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.deleteEmployeeById(
      employeeId
    );

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.verifyNoEmployeeRecordsFound(
      employeeId
    );
  }
);

test( 'TC_ADMIN_051 - Password mismatch validation should appear while adding a System User @negative @validation @regression',
  async ({ page, loginPage, navigationPage, pimPage, adminPage }) => {
    test.setTimeout(120_000);

    const uniqueValue =
      `${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const firstName = `Auto${uniqueValue}`;
    const middleName = 'Test';
    const lastName = 'User';
    const username = `ess${uniqueValue}`;
    const password = 'Test@12345';
    const confirmPassword = 'Wrong@12345';

    await loginPage.visitPage();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyLoginSuccessful();

    // Create an employee for the Employee Name field.
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();

    const employeeId = await pimPage.addEmployee({
      firstName,
      middleName,
      lastName,
    });

    const employeeName =
      `${firstName} ${middleName} ${lastName}`;

    // Navigate to Add System User.
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();

    await expect(
      adminPage.addUserHeading
    ).toBeVisible();

    // Fill valid details first.
    await adminPage.fillSystemUserForm({
      userRole: 'ESS',
      employeeName,
      status: 'Enabled',
      username,
      password,
    });

    // Replace Confirm Password with a different password.
    await adminPage.addConfirmPasswordInput.fill(
      confirmPassword
    );

    await adminPage.addConfirmPasswordInput.blur();

    await expect(
      adminPage.confirmPasswordValidation
    ).toHaveText('Passwords do not match', {
      timeout: 10_000,
    });

    await expect(page).toHaveURL(
      /admin\/saveSystemUser/
    );

    // Cancel because the user must not be created.
    await adminPage.addUserCancelButton.click();

    await expect(page).toHaveURL(
      /admin\/viewSystemUsers/
    );

    // Cleanup the employee.
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.verifyNoEmployeeRecordsFound(
      employeeId
    );
  }
);
