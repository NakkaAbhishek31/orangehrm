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

test("TC_ADMIN_044 - Admin should filter system users by user role @positive @filter @regression", async ({
  loginPage,
  navigationPage,
  adminPage,
}) => {
  const userRole = "Admin";
  // Login as Admin.
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  // Navigate to Admin → User Management → Users.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  // Select “Admin” from the User Role filter.
  await adminPage.searchSystemUsers({
    userRole,
  });
  // Verify at least one user record appears.
  await expect(adminPage.userRows.first()).toBeVisible({
    timeout: 15_000,
  });
  const rowCount = await adminPage.userRows.count();
  expect(rowCount).toBeGreaterThan(0);

  for (let index = 0; index < rowCount; index++) {
    const rolcell = adminPage.userRows
      .nth(index)
      .locator(".oxd-table-cell")
      .nth(2);

    await expect(rolcell).toHaveText(userRole);
  }
  // Verify “No Records Found” is not displayed.
  await expect(adminPage.noRecordsFound).not.toBeVisible();

  // Reset the filters.
  await adminPage.resetSystemUserFilters();
  await expect(adminPage.userRoleDropdown).toContainText("Select");
});

test("TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression", async ({
  loginPage,
  navigationPage,
  adminPage,
}) => {
  const status = "Enabled";
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
    status,
  });
  await expect(adminPage.userRows.first()).toBeVisible({
    timeout: 15_000,
  });

  const rowCount = await adminPage.userRows.count();

  expect(rowCount).toBeGreaterThan(0);

  for (let index = 0; index < rowCount; index++) {
    const statusCell = adminPage.userRows
      .nth(index)
      .locator(".oxd-table-cell")
      .nth(4);

    await expect(statusCell).toHaveText(status);
  }

  await expect(adminPage.noRecordsFound).not.toBeVisible();

  await adminPage.resetSystemUserFilters();

  await expect(adminPage.statusDropdown).toContainText("Select");
});

test("TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression", async ({
  loginPage,
  navigationPage,
  adminPage,
}) => {
  const filters = {
    username: "Admin",
    userRole: "Admin",
    status: "Enabled",
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
  await expect(adminPage.userRows.first()).toBeVisible({
    timeout: 15_000,
  });

  const rowCount = await adminPage.userRows.count();
  expect(rowCount).toBeGreaterThan(0);

  await expect(adminPage.noRecordsFound).not.toBeVisible();

  await adminPage.resetSystemUserFilters();
  await expect(adminPage.usernameInput).toHaveValue("");

  await expect(adminPage.userRoleDropdown).toContainText("Select");

  await expect(adminPage.statusDropdown).toContainText("Select");
});

test("TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression", async ({
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";

  const username = `ess${uniqueValue}`;
  const password = "Test@12345";
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

  const employeeName = `${firstName} ${middleName} ${lastName}`;
  const employeeTableName = `${firstName} ${lastName}`;

  // Navigate to Admin → User Management → Users.
  // Click Add.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();
  await expect(adminPage.addUserHeading).toBeVisible();
  // Select “ESS” as User Role.
  // Select the newly created employee.
  // Select “Enabled” as Status.
  // Enter a unique username.
  // Enter and confirm a valid password.
  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username,
    password,
  });
  await expect(adminPage.addUsernameInput).toHaveValue(username);

  await expect(adminPage.addEmployeeNameInput).toContainText;
  await expect(adminPage.addEmployeeNameInput).not.toHaveValue("");

  await expect(adminPage.addPasswordInput).toHaveValue(password);

  await expect(adminPage.addConfirmPasswordInput).toHaveValue(password);

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

  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  // Delete the system user.
  await adminPage.deleteSystemUserByUsername(username);

  // Verify the system user was deleted.
  await adminPage.searchSystemUsers({
    username,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  await expect(adminPage.noRecordsFound).toBeVisible();

  // Delete the employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  adminPage,
}) => {
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  await adminPage.addUserSaveButton.click();

  await expect(adminPage.validationMessages).toHaveCount(6);

  await expect(adminPage.validationMessages).toHaveText([
    "Required",
    "Required",
    "Required",
    "Required",
    "Required",
    "Required",
  ]);

  await expect(page).toHaveURL(/admin\/saveSystemUser/);

  await expect(adminPage.addUserHeading).toBeVisible();
});

test("TC_ADMIN_049 - Admin should cancel adding a new System User @negative @cancel @regression", async ({
  page,
  loginPage,
  navigationPage,
  adminPage,
}) => {
  const username = `cancel${Date.now()}`;
  const password = "Test@12345";
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
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

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  await expect(adminPage.systemUsersHeading).toBeVisible();

  await adminPage.searchSystemUsers({
    username,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  await expect(adminPage.noRecordsFound).toBeVisible();

  await adminPage.resetSystemUserFilters();
});

test("TC_ADMIN_050 - Duplicate validation should appear for an existing System User username @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";

  const existingUsername = "Admin";
  const password = "Test@12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  // Create an employee without login details.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  // Navigate to Add System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  // Fill the form with an existing username.
  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username: existingUsername,
    password,
  });

  await expect(adminPage.addUsernameInput).toHaveValue(existingUsername);

  await adminPage.addUsernameInput.blur();

  // Verify duplicate-username validation.
  await expect(adminPage.usernameValidation).toBeVisible({
    timeout: 15_000,
  });

  await expect(adminPage.usernameValidation).toHaveText(/Already exists/i);

  // Verify the invalid form was not submitted.
  await expect(page).toHaveURL(/admin\/saveSystemUser/);

  // Cancel without creating a system user.
  await adminPage.addUserCancelButton.click();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  // Delete the employee used by this test.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_051 - Password mismatch validation should appear while adding a System User @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  test.setTimeout(120_000);

  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `ess${uniqueValue}`;
  const password = "Test@12345";
  const confirmPassword = "Wrong@12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  // Create an employee for the Employee Name field.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  // Navigate to Add System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  // Fill valid details first.
  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username,
    password,
  });

  // Replace Confirm Password with a different password.
  await adminPage.addConfirmPasswordInput.fill(confirmPassword);

  await adminPage.addConfirmPasswordInput.blur();

  await expect(adminPage.confirmPasswordValidation).toHaveText(
    "Passwords do not match",
    {
      timeout: 10_000,
    },
  );

  await expect(page).toHaveURL(/admin\/saveSystemUser/);

  // Cancel because the user must not be created.
  await adminPage.addUserCancelButton.click();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_052 - Required validation should appear when adding an empty System User @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  adminPage,
}) => {
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  await adminPage.addUserSaveButton.click();

  await expect(adminPage.validationMessages).toHaveCount(6);

  await expect(adminPage.validationMessages).toHaveText([
    "Required",
    "Required",
    "Required",
    "Required",
    "Required",
    "Passwords do not match",
  ]);

  // The user should remain on the Add User page.
  await expect(page).toHaveURL(/admin\/saveSystemUser/);

  await expect(
    adminPage.toastMessage.filter({
      hasText: /Successfully Saved/i,
    }),
  ).not.toBeVisible();

  // Cancel and return to System Users.
  await adminPage.addUserCancelButton.click();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  await expect(adminPage.systemUsersHeading).toBeVisible();
});

test("TC_ADMIN_053 - Admin should reset System User search filters @positive @filter @regression", async ({
  loginPage,
  navigationPage,
  adminPage,
}) => {
  const username = "Admin";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();

  await expect(adminPage.systemUsersHeading).toBeVisible();

  // Apply search filters.
  await adminPage.searchSystemUsers({
    username,
    userRole: "Admin",
    status: "Enabled",
  });

  await expect(adminPage.usernameInput).toHaveValue(username);

  await expect(adminPage.userRoleDropdown).toContainText("Admin");

  await expect(adminPage.statusDropdown).toContainText("Enabled");

  // Reset all filters.
  await adminPage.resetSystemUserFilters();

  await expect(adminPage.usernameInput).toHaveValue("");

  await expect(adminPage.employeeNameInput).toHaveValue("");

  await expect(adminPage.userRoleDropdown).toContainText("Select");

  await expect(adminPage.statusDropdown).toContainText("Select");

  await expect(adminPage.systemUsersTable).toBeVisible();
});

test("TC_ADMIN_054 - Admin should edit an existing System User status @positive @edit @regression", async ({
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `ess${uniqueValue}`;
  const password = "Test@12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");

  await loginPage.verifyLoginSuccessful();

  // Create employee.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  const employeeTableName = `${firstName} ${lastName}`;

  // Create an Enabled ESS System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username,
    password,
  });

  await adminPage.saveSystemUser();

  // Search for the temporary user.
  await adminPage.searchSystemUsers({
    username,
  });

  await adminPage.verifySystemUserResult({
    username,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  // Edit status to Disabled.
  await adminPage.openSystemUserForEditing(username);

  await adminPage.updateSystemUserStatus("Disabled");

  // Verify the updated status.
  await adminPage.searchSystemUsers({
    username,
  });

  await adminPage.verifySystemUserResult({
    username,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Disabled",
  });

  // Delete the temporary System User.
  await adminPage.deleteSystemUserByUsername(username);

  await adminPage.searchSystemUsers({
    username,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  // Delete the temporary employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_055 - Admin should delete an existing System User @positive @delete @regression", async ({
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  test.setTimeout(180_000);

  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `ess${uniqueValue}`;
  const password = "Test@12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  // Create a temporary employee.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  const employeeTableName = `${firstName} ${lastName}`;

  // Create a temporary System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username,
    password,
  });

  await adminPage.saveSystemUser();

  // Search for and verify the System User.
  await adminPage.searchSystemUsers({
    username,
  });

  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  // Delete the System User.
  await adminPage.deleteSystemUserByUsername(username);

  // Verify the System User was deleted.
  await adminPage.searchSystemUsers({
    username,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  await expect(adminPage.noRecordsFound).toBeVisible();

  // Cleanup the temporary employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_056 - Admin should cancel System User deletion @negative @delete @regression", async ({
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  test.setTimeout(180_000);

  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `ess${uniqueValue}`;
  const password = "Test@12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  // Create a temporary employee.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  const employeeTableName = `${firstName} ${lastName}`;

  // Create a temporary ESS System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username,
    password,
  });

  await adminPage.saveSystemUser();

  // Search for the created user.
  await adminPage.searchSystemUsers({
    username,
  });

  await adminPage.verifySystemUserResult({
    username,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  // Open deletion dialog and cancel it.
  await adminPage.cancelSystemUserDeletion(username);

  // Verify the user still exists.
  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  // Cleanup: delete the System User.
  await adminPage.deleteSystemUserByUsername(username);

  await adminPage.searchSystemUsers({
    username,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  // Cleanup: delete the employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test('TC_ADMIN_057 - Admin should delete multiple System Users using bulk selection @positive @bulk-delete @regression',
  async ({
    loginPage,
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    test.setTimeout(240_000);

    const uniqueValue =
      `${Date.now()}${Math.floor(
        Math.random() * 1000
      )}`;

    const firstEmployee = {
      firstName: `AutoA${uniqueValue}`,
      middleName: 'Test',
      lastName: 'User',
    };

    const secondEmployee = {
      firstName: `AutoB${uniqueValue}`,
      middleName: 'Test',
      lastName: 'User',
    };

    const firstUsername =
      `essA${uniqueValue}`;

    const secondUsername =
      `essB${uniqueValue}`;

    const password = 'Test@12345';

    await loginPage.visitPage();

    await loginPage.login(
      'Admin',
      'admin123'
    );

    await loginPage.verifyLoginSuccessful();

    // Create first employee.
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();

    const firstEmployeeId =
      await pimPage.addEmployee(
        firstEmployee
      );

    // Create second employee.
    await pimPage.gotoAddEmployee();

    const secondEmployeeId =
      await pimPage.addEmployee(
        secondEmployee
      );

    const firstEmployeeName =
      `${firstEmployee.firstName} ` +
      `${firstEmployee.middleName} ` +
      `${firstEmployee.lastName}`;

    const secondEmployeeName =
      `${secondEmployee.firstName} ` +
      `${secondEmployee.middleName} ` +
      `${secondEmployee.lastName}`;

    // Create first System User.
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();

    await adminPage.fillSystemUserForm({
      userRole: 'ESS',
      employeeName: firstEmployeeName,
      status: 'Enabled',
      username: firstUsername,
      password,
    });

    await adminPage.saveSystemUser();

    // Create second System User.
    await adminPage.gotoAddSystemUser();

    await adminPage.fillSystemUserForm({
      userRole: 'ESS',
      employeeName: secondEmployeeName,
      status: 'Enabled',
      username: secondUsername,
      password,
    });

    await adminPage.saveSystemUser();

    // Ensure the System User filters are empty.
    await adminPage.resetSystemUserFilters();

    const firstUserRow =
      adminPage.userRows.filter({
        hasText: firstUsername,
      });

    const secondUserRow =
      adminPage.userRows.filter({
        hasText: secondUsername,
      });

    // Verify both users are visible on this page.
    await expect(
      firstUserRow
    ).toBeVisible({
      timeout: 15_000,
    });

    await expect(
      secondUserRow
    ).toBeVisible({
      timeout: 15_000,
    });

    // Select both users.
    await adminPage.selectSystemUsers([
      firstUsername,
      secondUsername,
    ]);

    // Delete both selected users.
    await adminPage.deleteSelectedSystemUsers();

    // Verify first user was deleted.
    await adminPage.searchSystemUsers({
      username: firstUsername,
    });

    await expect(
      adminPage.userRows
    ).toHaveCount(0);

    await expect(
      adminPage.noRecordsFound
    ).toBeVisible();

    await adminPage.resetSystemUserFilters();

    // Verify second user was deleted.
    await adminPage.searchSystemUsers({
      username: secondUsername,
    });

    await expect(
      adminPage.userRows
    ).toHaveCount(0);

    await expect(
      adminPage.noRecordsFound
    ).toBeVisible();

    await adminPage.resetSystemUserFilters();

    // Cleanup first employee.
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({
      employeeId: firstEmployeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.deleteEmployeeById(
      firstEmployeeId
    );

    await pimPage.filterEmployeeList({
      employeeId: firstEmployeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.verifyNoEmployeeRecordsFound(
      firstEmployeeId
    );

    // Return to a clean Employee List page.
    await pimPage.gotoEmployeeList();

    // Cleanup second employee.
    await pimPage.filterEmployeeList({
      employeeId: secondEmployeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.deleteEmployeeById(
      secondEmployeeId
    );

    await pimPage.filterEmployeeList({
      employeeId: secondEmployeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.verifyNoEmployeeRecordsFound(
      secondEmployeeId
    );
  }
);

test.only('TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression',
  async ({
    loginPage,
    navigationPage,
    adminPage,
  }) => {
    await loginPage.visitPage();

    await loginPage.login(
      'Admin',
      'admin123'
    );

    await loginPage.verifyLoginSuccessful();

    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();

    await expect(
      adminPage.loadingSpinner
    ).toBeHidden();

    await expect(
      adminPage.userRows.first()
    ).toBeVisible({
      timeout: 15_000,
    });

    // Select all visible rows.
    await adminPage.selectAllVisibleSystemUsers();

    await expect(
      adminPage.deleteSelectedButton
    ).toBeVisible();

    // Deselect all visible rows.
    await adminPage.deselectAllVisibleSystemUsers();

    await expect(
      adminPage.deleteSelectedButton
    ).not.toBeVisible();
  }
);

test("TC_ADMIN_059 - Admin should navigate through System Users pages @pagination @regression", async ({
  loginPage,
  navigationPage,
  adminPage,
}) => {
  await loginPage.visitPage();

  await loginPage.login("Admin", "admin123");

  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoAdmin();

  await adminPage.gotoUserManagementUsers();

  await expect(adminPage.loadingSpinner).toBeHidden();

  const pageOneUsernames = await adminPage.getVisibleSystemUsernames();

  expect(pageOneUsernames.length).toBeGreaterThan(0);

  const nextButtonAvailable = await adminPage.nextPageButton.count();

  test.skip(
    nextButtonAvailable === 0,
    "System Users currently contains only one page",
  );

  // Navigate to page two.
  await adminPage.goToNextSystemUsersPage();

  await expect
    .poll(async () => adminPage.getVisibleSystemUsernames(), {
      timeout: 15_000,
    })
    .not.toEqual(pageOneUsernames);

  const pageTwoUsernames = await adminPage.getVisibleSystemUsernames();

  expect(pageTwoUsernames.length).toBeGreaterThan(0);

  expect(pageTwoUsernames).not.toEqual(pageOneUsernames);

  // Return to page one.
  await adminPage.goToPreviousSystemUsersPage();

  await expect
    .poll(async () => adminPage.getVisibleSystemUsernames(), {
      timeout: 15_000,
    })
    .toEqual(pageOneUsernames);
});

test("TC_ADMIN_060 - Minimum-length validation should appear for a short System User username @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  test.setTimeout(120_000);

  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";
  const shortUsername = "abc";
  const password = "Test@12345";

  await loginPage.visitPage();

  await loginPage.login("Admin", "admin123");

  await loginPage.verifyLoginSuccessful();

  // Create a temporary employee.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  // Navigate to Add System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  // Fill the form using a short username.
  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username: shortUsername,
    password,
  });

  await adminPage.addUsernameInput.blur();

  // Verify the username validation.
  await expect(adminPage.usernameValidation).toHaveText(
    "Should be at least 5 characters",
    {
      timeout: 10_000,
    },
  );

  await expect(adminPage.addUsernameInput).toHaveValue(shortUsername);

  // Verify the System User was not created.
  await expect(page).toHaveURL(/admin\/saveSystemUser/);

  await expect(
    adminPage.toastMessage.filter({
      hasText: /Successfully Saved/i,
    }),
  ).not.toBeVisible();

  // Cancel the invalid form.
  await adminPage.addUserCancelButton.click();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  // Cleanup the temporary employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_061 - Weak password validation should appear while adding a System User @negative @validation @security @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `ess${uniqueValue}`;
  const weakPassword = "12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  // Create a temporary employee.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  // Navigate to Add System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  // Complete the form using a weak password.
  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username,
    password: weakPassword,
  });

  await adminPage.addPasswordInput.blur();

  // Verify password validation.
  await expect(adminPage.passwordValidation).toBeVisible({
    timeout: 10_000,
  });

  await expect(adminPage.passwordValidation).toContainText(
    /characters|lower-case|upper-case|number/i,
  );

  await expect(adminPage.addPasswordInput).toHaveValue(weakPassword);

  await expect(adminPage.addConfirmPasswordInput).toHaveValue(weakPassword);

  // Verify the user remains on Add User.
  await expect(page).toHaveURL(/admin\/saveSystemUser/);

  await expect(
    adminPage.toastMessage.filter({
      hasText: /Successfully Saved/i,
    }),
  ).not.toBeVisible();

  // Cancel without creating the user.
  await adminPage.addUserCancelButton.click();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  // Cleanup the temporary employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_062 - Admin should filter System Users by employee name @positive @filter @regression", async ({
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `ess${uniqueValue}`;
  const password = "Test@12345";
  // Login as Admin.
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  // Create a temporary employee.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();
  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  const employeeTableName = `${firstName} ${lastName}`;

  // Create a temporary ESS System User for that employee.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username,
    password,
  });

  await adminPage.saveSystemUser();

  // Filter using employee name.
  await adminPage.searchSystemUsers({
    employeeName,
  });

  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  await expect(adminPage.employeeNameInput).not.toHaveValue("");

  await expect(adminPage.noRecordsFound).not.toBeVisible();

  // Reset the filters.
  await adminPage.resetSystemUserFilters();

  await expect(adminPage.employeeNameInput).toHaveValue("");

  // Search again for cleanup.
  await adminPage.searchSystemUsers({
    username,
  });

  // Delete the temporary System User.
  await adminPage.deleteSystemUserByUsername(username);

  await adminPage.searchSystemUsers({
    username,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  await expect(adminPage.noRecordsFound).toBeVisible();

  // Delete the temporary employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";

  const originalUsername = `ess${uniqueValue}`;

  const updatedUsername = `updated${uniqueValue}`;

  const password = "Test@12345";

  await loginPage.visitPage();

  await loginPage.login("Admin", "admin123");

  await loginPage.verifyLoginSuccessful();

  // Create a temporary employee.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  const employeeTableName = `${firstName} ${lastName}`;

  // Create a temporary ESS System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username: originalUsername,
    password,
  });

  await adminPage.saveSystemUser();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  // Search for the original username.
  await adminPage.searchSystemUsers({
    username: originalUsername,
  });

  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username: originalUsername,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  // Open the System User for editing.
  await adminPage.openSystemUserForEditing(originalUsername);

  await expect(page).toHaveURL(/admin\/saveSystemUser\/\d+/);

  await expect(adminPage.editUserHeading).toBeVisible();

  await expect(adminPage.addUsernameInput).toHaveValue(originalUsername);

  // Update the username.
  await adminPage.updateSystemUsername(updatedUsername);

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  // Verify the original username no longer exists.
  await adminPage.searchSystemUsers({
    username: originalUsername,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  await expect(adminPage.noRecordsFound).toBeVisible();

  await adminPage.resetSystemUserFilters();

  // Verify the updated username exists.
  await adminPage.searchSystemUsers({
    username: updatedUsername,
  });

  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username: updatedUsername,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  // Cleanup the updated System User.
  await adminPage.deleteSystemUserByUsername(updatedUsername);

  await adminPage.searchSystemUsers({
    username: updatedUsername,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  await expect(adminPage.noRecordsFound).toBeVisible();

  // Cleanup the temporary employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_064 - Admin should cancel editing a System User @negative @cancel @edit @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  test.setTimeout(180_000);

  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";

  const originalUsername = `ess${uniqueValue}`;

  const cancelledUsername = `cancel${uniqueValue}`;

  const password = "Test@12345";

  await loginPage.visitPage();

  await loginPage.login("Admin", "admin123");

  await loginPage.verifyLoginSuccessful();

  // Create a temporary employee.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  const employeeTableName = `${firstName} ${lastName}`;

  // Create a temporary ESS System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Enabled",
    username: originalUsername,
    password,
  });

  await adminPage.saveSystemUser();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  // Search for the original username.
  await adminPage.searchSystemUsers({
    username: originalUsername,
  });

  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username: originalUsername,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  // Open the user for editing.
  await adminPage.openSystemUserForEditing(originalUsername);

  await expect(page).toHaveURL(/admin\/saveSystemUser\/\d+/);

  await expect(adminPage.editUserHeading).toBeVisible();

  await expect(adminPage.addUsernameInput).toHaveValue(originalUsername);

  // Enter a different username.
  await adminPage.addUsernameInput.fill(cancelledUsername);

  await expect(adminPage.addUsernameInput).toHaveValue(cancelledUsername);

  // Cancel without saving.
  await adminPage.addUserCancelButton.click();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  await expect(adminPage.systemUsersHeading).toBeVisible();

  // Verify the cancelled username was not saved.
  await adminPage.searchSystemUsers({
    username: cancelledUsername,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  await expect(adminPage.noRecordsFound).toBeVisible();

  await adminPage.resetSystemUserFilters();

  // Verify the original username still exists.
  await adminPage.searchSystemUsers({
    username: originalUsername,
  });

  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username: originalUsername,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Enabled",
  });

  // Cleanup the original System User.
  await adminPage.deleteSystemUserByUsername(originalUsername);

  await adminPage.searchSystemUsers({
    username: originalUsername,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  await expect(adminPage.noRecordsFound).toBeVisible();

  // Cleanup the temporary employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});
test("TC_ADMIN_065 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
  page,
  loginPage,
  navigationPage,
  adminPage,
}) => {
  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const invalidEmployeeName = `UnknownEmployee${uniqueValue}`;

  const username = `ess${uniqueValue}`;

  const password = "Test@12345";

  await loginPage.visitPage();

  await loginPage.login("Admin", "admin123");

  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  // Select ESS role.
  await adminPage.addUserRoleDropdown.click();

  const roleOptions = page.locator(".oxd-select-dropdown:visible");

  await expect(roleOptions).toBeVisible();

  await roleOptions
    .locator(".oxd-select-option")
    .filter({
      hasText: /^ESS$/,
    })
    .click();

  await expect(adminPage.addUserRoleDropdown).toContainText("ESS");

  // Select Enabled status before opening
  // the employee autocomplete.
  await adminPage.addStatusDropdown.click();

  const statusOptions = page.locator(".oxd-select-dropdown:visible");

  await expect(statusOptions).toBeVisible();

  await statusOptions
    .locator(".oxd-select-option")
    .filter({
      hasText: /^Enabled$/,
    })
    .click();

  await expect(adminPage.addStatusDropdown).toContainText("Enabled");

  // Enter an employee that does not exist.
  await adminPage.addEmployeeNameInput.fill(invalidEmployeeName);

  const noAutocompleteRecords = page
    .locator(".oxd-autocomplete-dropdown:visible")
    .getByText("No Records Found", {
      exact: true,
    });

  await expect(noAutocompleteRecords).toBeVisible({
    timeout: 15_000,
  });

  // Close the autocomplete without selecting
  // any employee.
  await adminPage.addEmployeeNameInput.press("Escape");

  // Enter valid login details.
  await adminPage.addUsernameInput.fill(username);

  await adminPage.addPasswordInput.fill(password);

  await adminPage.addConfirmPasswordInput.fill(password);

  await expect(adminPage.addUsernameInput).toHaveValue(username);

  await expect(adminPage.addPasswordInput).toHaveValue(password);

  await expect(adminPage.addConfirmPasswordInput).toHaveValue(password);

  // Attempt to save.
  await adminPage.addUserSaveButton.click();

  // Employee Name should be rejected because no
  // autocomplete record was selected.
  await expect(adminPage.employeeNameValidation).toBeVisible({
    timeout: 10_000,
  });

  await expect(adminPage.employeeNameValidation).toHaveText("Invalid");

  await expect(adminPage.addEmployeeNameInput).toHaveValue(invalidEmployeeName);

  // Verify the System User was not created.
  await expect(page).toHaveURL(/admin\/saveSystemUser/);

  await expect(
    adminPage.toastMessage.filter({
      hasText: /Successfully Saved/i,
    }),
  ).not.toBeVisible();

  // Cancel and return to System Users.
  await adminPage.addUserCancelButton.click();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  await expect(adminPage.systemUsersHeading).toBeVisible();
});

test("TC_ADMIN_066 - Admin should filter System Users by disabled status @positive @filter @status @regression", async ({
  loginPage,
  navigationPage,
  pimPage,
  adminPage,
}) => {
  test.setTimeout(180_000);

  const uniqueValue = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const firstName = `Auto${uniqueValue}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `ess${uniqueValue}`;
  const password = "Test@12345";

  await loginPage.visitPage();

  await loginPage.login("Admin", "admin123");

  await loginPage.verifyLoginSuccessful();

  // Create a temporary employee.
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });

  const employeeName = `${firstName} ${middleName} ${lastName}`;

  const employeeTableName = `${firstName} ${lastName}`;

  // Create a Disabled ESS System User.
  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();
  await adminPage.gotoAddSystemUser();

  await expect(adminPage.addUserHeading).toBeVisible();

  await adminPage.fillSystemUserForm({
    userRole: "ESS",
    employeeName,
    status: "Disabled",
    username,
    password,
  });

  await adminPage.saveSystemUser();

  // Filter all users by Disabled status.
  await adminPage.searchSystemUsers({
    status: "Disabled",
  });

  await expect(adminPage.userRows.first()).toBeVisible({
    timeout: 15_000,
  });

  const rowCount = await adminPage.userRows.count();

  expect(rowCount).toBeGreaterThan(0);

  // Status is column index 4.
  for (let index = 0; index < rowCount; index++) {
    const statusCell = adminPage.userRows
      .nth(index)
      .locator(".oxd-table-cell")
      .nth(4);

    await expect(statusCell).toHaveText("Disabled");
  }

  await expect(adminPage.noRecordsFound).not.toBeVisible();

  await adminPage.resetSystemUserFilters();

  // Search for the exact temporary user.
  await adminPage.searchSystemUsers({
    username,
    status: "Disabled",
  });

  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username,
    userRole: "ESS",
    employeeName: employeeTableName,
    status: "Disabled",
  });

  // Cleanup the temporary System User.
  await adminPage.deleteSystemUserByUsername(username);

  await adminPage.searchSystemUsers({
    username,
  });

  await expect(adminPage.userRows).toHaveCount(0);

  await expect(adminPage.noRecordsFound).toBeVisible();

  // Cleanup the temporary employee.
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

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_ADMIN_067 - Admin should open an existing System User for editing @positive @navigation @edit @regression", async ({
  page,
  loginPage,
  navigationPage,
  adminPage,
}) => {
  await loginPage.visitPage();

  await loginPage.login("Admin", "admin123");

  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoAdmin();
  await adminPage.gotoUserManagementUsers();

  // Search for the logged-in Admin user.
  await adminPage.searchSystemUsers({
    username: "Admin",
  });

  await expect(adminPage.userRows).toHaveCount(1);

  await adminPage.verifySystemUserResult({
    username: "Admin",
    userRole: "Admin",
    status: "Enabled",
  });

  // Open the matching user.
  await adminPage.openSystemUserForEditing("Admin");

  await expect(page).toHaveURL(/admin\/saveSystemUser\/\d+/);

  await expect(adminPage.editUserHeading).toBeVisible();

  await expect(adminPage.addUsernameInput).toHaveValue("Admin");

  await expect(adminPage.addUserRoleDropdown).toContainText("Admin");

  await expect(adminPage.addStatusDropdown).toContainText("Enabled");

  // Return without changing the shared Admin user.
  await adminPage.addUserCancelButton.click();

  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  await expect(adminPage.systemUsersHeading).toBeVisible();
});
test(
  'TC_ADMIN_068 - Admin should select and deselect an individual System User @positive @selection @regression',
  async ({
    page,
    loginPage,
    navigationPage,
    adminPage,
  }) => {
    await loginPage.visitPage();

    await loginPage.login(
      'Admin',
      'admin123'
    );

    await loginPage.verifyLoginSuccessful();

    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();

    await adminPage.searchSystemUsers({
      username: 'Admin',
    });

    await expect(
      adminPage.userRows
    ).toHaveCount(1);

    const adminRow =
      adminPage.userRows.filter({
        has: page
          .locator('.oxd-table-cell')
          .nth(1)
          .getByText('Admin', {
            exact: true,
          }),
      });

    await expect(adminRow).toBeVisible();

    const rowCheckbox =
      adminRow.locator(
        'input[type="checkbox"]'
      );

    const checkboxLabel =
      adminRow.locator(
        '.oxd-checkbox-wrapper label'
      );

    // Select the row.
    await checkboxLabel.click();

    await expect(
      rowCheckbox
    ).toBeChecked();

    // Deselect the row.
    await checkboxLabel.click();

    await expect(
      rowCheckbox
    ).not.toBeChecked();

    // Verify the record was not changed.
    await adminPage.verifySystemUserResult({
      username: 'Admin',
      userRole: 'Admin',
      status: 'Enabled',
    });
  }
);
