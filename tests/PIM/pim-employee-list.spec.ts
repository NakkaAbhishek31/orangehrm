import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import loginData from "../../test-data/login.data.json";
import employeeListData from "../../test-data/pimEmployeeList.data.json";

type EmployeeTemplate = {
  firstNamePrefix: string;
  middleName: string;
  lastName: string;
};

const createEmployee = (template: EmployeeTemplate) => ({
  firstName: `${template.firstNamePrefix}${Date.now()}${Math.floor(Math.random() * 1000)}`,
  middleName: template.middleName,
  lastName: template.lastName,
});

test.describe("PIM Employee List", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage();
    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );
    await loginPage.verifyLoginSuccessful();
  });

  test("TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_002;
    const employee = createEmployee(data.employee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);

    await expect(pimPage.personalDetailsHeading).toBeVisible();
    await expect(pimPage.firstnameInput).toHaveValue(employee.firstName);
    await expect(pimPage.middlenameInput).toHaveValue(employee.middleName);
    await expect(pimPage.lastnameInput).toHaveValue(employee.lastName);

    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      employee.firstName,
      employee.lastName,
    );
  });

  test("TC_PIM_003 - No records should appear for a nonexistent employee ID @negative @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_003;

    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({
      employeeId: data.nonexistentEmployeeId,
    });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(data.nonexistentEmployeeId);
  });

  test("TC_PIM_004 - Admin should search for an employee by name @positive @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_004;
    const employee = createEmployee(data.employee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);

    await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 55_000,
    });

    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeName: employee.firstName });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      employee.firstName,
      employee.lastName,
    );
  });

  test("TC_PIM_005 - Admin should search using employee ID and employee name @positive @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_005;
    const employee = createEmployee(data.employee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);

    await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 15_000,
    });

    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({
      employeeName: employee.firstName,
      employeeId,
    });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      employee.firstName,
      employee.lastName,
    );
  });

  test("TC_PIM_007 - Admin should delete an employee successfully @positive @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_007;
    const employee = createEmployee(data.employee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);

    await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 15_000,
    });

    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      employee.firstName,
      employee.lastName,
    );

    await pimPage.deleteEmployeeById(employeeId);
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  });

  test("TC_PIM_010 - Admin should navigate through Employee List pages @pagination @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_010;

    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await expect(pimPage.loadingSpinner).toBeHidden();

    const pageOneEmployeeIds = await pimPage.getVisibleEmployeeIds();
    expect(pageOneEmployeeIds.length).toBeGreaterThan(0);

    const nextButtonAvailable = (await pimPage.nextPageButton.count()) > 0;
    test.skip(!nextButtonAvailable, data.skipMessage);

    await pimPage.goToPage(data.targetPage);
    const pageTwoEmployeeIds = await pimPage.getVisibleEmployeeIds();

    expect(pageTwoEmployeeIds.length).toBeGreaterThan(0);
    expect(pageOneEmployeeIds).not.toEqual(pageTwoEmployeeIds);
  });

  test("TC_PIM_028 - Admin should reset Employee List search filters @positive @filter @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_028;

    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: data.employeeId });
    await expect(pimPage.employeeIdFilterInput).toHaveValue(data.employeeId);

    await pimPage.resetEmployeeFilters();

    await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
    await expect(pimPage.employeeNameFilterInput).toHaveValue(data.emptyValue);
    expect((await pimPage.getVisibleEmployeeIds()).length).toBeGreaterThan(0);
  });

  test("TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_029;
    const employee = createEmployee(data.employee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    await pimPage.addEmployee(employee);

    await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 20_000,
    });

    await pimPage.gotoEmployeeList();

    const partialName = employee.firstName.substring(0, data.partialNameLength);
    const fullName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`;

    await pimPage.selectEmployeeFromAutocomplete(partialName, fullName);
    await pimPage.clickOnFilterSearch();
  });

  test("TC_PIM_037 - Admin should cancel employee deletion @negative @delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_037;
    const employee = createEmployee(data.employee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);

    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      employee.firstName,
      employee.lastName,
    );

    await pimPage.cancelEmployeeDeletion(employeeId);
    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      employee.firstName,
      employee.lastName,
    );

    await pimPage.deleteEmployeeById(employeeId);
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  });

  test("TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_038;
    const firstEmployee = createEmployee(data.firstEmployee);
    const secondEmployee = createEmployee(data.secondEmployee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const firstEmployeeId = await pimPage.addEmployee(firstEmployee);

    await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 15_000,
    });

    await pimPage.gotoAddEmployee();
    const secondEmployeeId = await pimPage.addEmployee(secondEmployee);

    await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 15_000,
    });

    await pimPage.gotoEmployeeList();
    await expect(pimPage.loadingSpinner).toBeHidden();
    await pimPage.selectEmployeeById(firstEmployeeId);
    await pimPage.selectEmployeeById(secondEmployeeId);
    await pimPage.deleteSelectedEmployees();

    for (const employeeId of [firstEmployeeId, secondEmployeeId]) {
      await pimPage.filterEmployeeList({ employeeId });
      await pimPage.clickOnFilterSearch();
      await pimPage.verifyNoEmployeeRecordsFound(employeeId);
      await pimPage.resetEmployeeFilters();
    }
  });

  test("TC_PIM_039 - Admin should open employee personal details from the Employee List @positive @navigation @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = employeeListData.TC_PIM_039;
    const employee = createEmployee(data.employee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);

    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.openEmployeeById(employeeId);

    await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);

    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  });

  test("TC_PIM_040 - Admin should select and deselect all employees on the current page @positive @selection @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.selectAllVisibleEmployees();
    await pimPage.deselectAllVisibleEmployees();
  });
});
