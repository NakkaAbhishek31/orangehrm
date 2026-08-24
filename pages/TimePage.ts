import { expect, Locator, Page } from "@playwright/test";

export type CreateProjectDetails = {
  customerName: string;
  projectName: string;
  projectAdminSearchText: string;
  description?: string;
};

export type CreateCustomerDetails = {
  name: string;
  description?: string;
};

export type CreatedProject = {
  projectId: string;
  projectAdmin: string;
};

export type VerifyProjectRowDetails = {
  customerName?: string;
  projectName: string;
  projectAdmin?: string;
};

export type SearchProjectFilters = {
  customerName?: string;
  projectName?: string;
};


export class TimePage {
  readonly page: Page;

  // Top navigation
  readonly timesheetsMenu: Locator;
  readonly attendanceMenu: Locator;
  readonly reportsMenu: Locator;

  // Employee Timesheets
  readonly selectEmployeeHeading: Locator;
  readonly employeeNameInput: Locator;
  readonly employeeNameValidation: Locator;
  readonly viewButton: Locator;

  // Autocomplete
  readonly employeeAutocompleteDropdown: Locator;
  readonly employeeAutocompleteOptions: Locator;
  readonly employeeAutocompleteNoRecords: Locator;

  // Timesheet details
  readonly employeeTimesheetHeading: Locator;
  readonly noTimesheetsFound: Locator;
  readonly loadingSpinner: Locator;

  // My Timesheet
  readonly myTimesheetHeading: Locator;
  readonly timesheetPeriod: Locator;
  readonly timesheetTable: Locator;
  readonly editTimesheetButton: Locator;

  // Attendance
  readonly attendanceHeading: Locator;
  readonly attendanceEmployeeInput: Locator;
  readonly attendanceDateInput: Locator;
  readonly attendanceViewButton: Locator;
  readonly attendanceEmployeeValidation: Locator;
  readonly attendanceDateValidation: Locator;
  readonly attendanceRows: Locator;
  readonly attendanceAutocompleteDropdown: Locator;
readonly attendanceAutocompleteNoRecords: Locator;
readonly attendanceNoRecords: Locator;
readonly attendanceResetButton: Locator;
readonly myAttendanceHeading: Locator;
readonly myAttendanceDateInput: Locator;
readonly myAttendanceViewButton: Locator;
//attendance summary report 
readonly attendanceSummaryReportHeading:Locator;
readonly summaryEmployeeInput: Locator;
readonly summaryFromDateInput: Locator;
readonly summaryToDateInput: Locator;
readonly summaryViewButton: Locator;
readonly summaryEmployeeValidation: Locator;
readonly employeeReportHeading: Locator;
readonly reportEmployeeInput: Locator;
readonly reportProjectInput: Locator;
readonly reportFromDateInput: Locator;
readonly reportToDateInput: Locator;
readonly employeeReportViewButton: Locator;
readonly reportEmployeeValidation: Locator;


  // Project Reports
  readonly projectReportHeading: Locator;
  readonly projectNameInput: Locator;
  readonly projectFromDateInput: Locator;
  readonly projectToDateInput: Locator;
  readonly projectReportViewButton: Locator;

  //punch
readonly punchHeading: Locator;
readonly punchDateInput: Locator;
readonly punchTimeInput: Locator;
readonly punchNoteInput: Locator;
readonly punchActionButton: Locator;
readonly punchInButton: Locator;
readonly punchOutButton: Locator;
readonly attendanceSuccessToast: Locator;

//customers
readonly projectInfoMenu: Locator;
readonly customersHeading: Locator;
readonly addCustomerButton: Locator;
readonly customersTable: Locator;
readonly customerRows: Locator;
readonly customerNoRecords: Locator;

readonly addCustomerHeading: Locator;
readonly customerNameInput: Locator;
readonly customerDescriptionInput: Locator;
readonly customerNameValidation: Locator;
readonly customerSaveButton: Locator;
readonly customerCancelButton: Locator;

//project 
readonly projectsHeading: Locator;
readonly projectCustomerFilterInput: Locator;
readonly projectNameFilterInput: Locator;
readonly projectSearchButton: Locator;
readonly projectResetButton: Locator;
readonly addProjectButton: Locator;
readonly projectsTable: Locator;
readonly addProjectHeading: Locator;

readonly addProjectCustomerInput: Locator;
readonly addProjectNameInput: Locator;
readonly projectAdminInput: Locator;
readonly projectDescriptionInput: Locator;
readonly projectValidationMessages: Locator;
readonly projectSaveButton: Locator;
readonly projectCancelButton: Locator;
readonly projectRows: Locator;
readonly projectNoRecords: Locator;
readonly timeSuccessToast: Locator;
readonly cancelDeleteButton: Locator;

  readonly visibleAutocompleteDropdown: Locator;
  readonly autocompleteOptions: Locator;
  readonly autocompleteNoRecords: Locator;
  readonly projectCustomerValidation: Locator;

  readonly confirmationDialog: Locator;
  readonly confirmDeleteButton: Locator;

  constructor(page: Page) {
    this.page = page;

    const topNavigation = page.locator(".oxd-topbar-body-nav");

    this.timesheetsMenu = topNavigation.getByText("Timesheets", {
      exact: true,
    });

    this.attendanceMenu = topNavigation.getByText("Attendance", {
      exact: true,
    });

    this.reportsMenu = topNavigation.getByText("Reports", {
      exact: true,
    });

    // Employee Timesheets
    this.selectEmployeeHeading = page.getByRole("heading", {
      name: "Select Employee",
      exact: true,
    });

    const employeeNameGroup = page.locator(".oxd-input-group").filter({
      has: page.locator("label").getByText("Employee Name", {
        exact: true,
      }),
    });

    this.employeeNameInput = employeeNameGroup.locator("input");

    this.employeeNameValidation = employeeNameGroup.locator(
      ".oxd-input-field-error-message",
    );

    this.viewButton = this.employeeNameInput
      .locator("xpath=ancestor::form")
      .getByRole("button", {
        name: "View",
        exact: true,
      });

    // Autocomplete
    this.employeeAutocompleteDropdown = page.locator(
      ".oxd-autocomplete-dropdown:visible",
    );

    this.employeeAutocompleteOptions =
      this.employeeAutocompleteDropdown.locator(".oxd-autocomplete-option");

    this.employeeAutocompleteNoRecords =
      this.employeeAutocompleteDropdown.getByText("No Records Found", {
        exact: true,
      });

    // Loading
    this.loadingSpinner = page.locator(".oxd-loading-spinner");

    // Timesheet results
    this.employeeTimesheetHeading = page.getByRole("heading", {
      name: /Timesheet for/i,
    });

    this.noTimesheetsFound = page
      .locator(".orangehrm-container")
      .getByText(/No Timesheets Found|No Records Found/i)
      .first();

    // My Timesheet
    this.myTimesheetHeading = page.getByRole("heading", {
      name: /My Timesheet/i,
    });

    this.timesheetPeriod = page.getByText(/Timesheet Period/i).first();

    this.timesheetTable = page.locator(
      ".orangehrm-timesheet-table, .oxd-table",
    );

    this.editTimesheetButton = page.getByRole("button", {
      name: "Edit",
      exact: true,
    });

    // Attendance
    this.attendanceHeading = page.getByRole("heading", {
      name: "Employee Attendance Records",
      exact: true,
      level: 5,
    });

    const attendanceEmployeeGroup = page.locator(".oxd-input-group").filter({
      has: page.locator("label").getByText("Employee Name", {
        exact: true,
      }),
    });

    this.attendanceEmployeeInput = attendanceEmployeeGroup.locator("input");

    const attendanceDateGroup = page.locator(".oxd-input-group").filter({
      has: page.locator("label").getByText("Date", {
        exact: true,
      }),
    });

    this.attendanceDateInput = attendanceDateGroup.locator("input");

    this.attendanceDateValidation = attendanceDateGroup.locator(
      ".oxd-input-field-error-message",
    );

    const attendanceForm = this.attendanceEmployeeInput.locator(
      "xpath=ancestor::form",
    );

    this.attendanceViewButton = attendanceForm.getByRole("button", {
      name: "View",
      exact: true,
    });

    this.attendanceEmployeeValidation = this.attendanceEmployeeInput
      .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
      .locator(".oxd-input-field-error-message");

    this.attendanceRows = page.locator(
      ".orangehrm-container .oxd-table-body .oxd-table-card",
    );

    this.attendanceAutocompleteDropdown =
  page.locator(
    '.oxd-autocomplete-dropdown:visible'
  );

this.attendanceAutocompleteNoRecords =
  this.attendanceAutocompleteDropdown
    .getByText('No Records Found', {
      exact: true,
    });


this.attendanceViewButton =
  attendanceForm.getByRole('button', {
    name: 'View',
    exact: true,
  });

    this.attendanceNoRecords = page
      .locator("span.oxd-text--span")
      .filter({ hasText: /^No Records Found$/ })
      .filter({ visible: true })
      .first();

this.attendanceResetButton =
  attendanceForm.getByRole('button', {
    name: 'Reset',
    exact: true,
  });
//attendance summary report 
this.myAttendanceHeading = page.getByRole('heading', {
  name: 'My Attendance Records',
  exact: true,
  level: 5,
});
const inputGroup = (
  label: string
): Locator =>
  page.locator('.oxd-input-group').filter({
    has: page
      .locator('label')
      .getByText(label, {
        exact: true,
      }),
  });
this.summaryEmployeeInput =
  inputGroup('Employee Name')
    .locator('input');

this.summaryEmployeeValidation =
  inputGroup('Employee Name')
    .locator(
      '.oxd-input-field-error-message'
    );

this.summaryFromDateInput =
  page.getByPlaceholder('From', {
    exact: true,
  });

this.summaryToDateInput =
  page.getByPlaceholder('To', {
    exact: true,
  });

this.summaryViewButton =
  this.summaryEmployeeInput
    .locator('xpath=ancestor::form')
    .getByRole('button', {
      name: 'View',
      exact: true,
    });

this.myAttendanceDateInput = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Date', {
        exact: true,
      }),
  })
  .locator('input');



const myAttendanceForm =
  this.myAttendanceDateInput.locator(
    'xpath=ancestor::form'
  );


this.myAttendanceViewButton =
  myAttendanceForm.getByRole('button', {
    name: 'View',
    exact: true,
  });

this.employeeReportHeading = page.getByRole('heading', {
  name: 'Employee Report',
  exact: true,
  level: 5,
});

this.reportEmployeeInput =
  inputGroup('Employee Name')
    .locator('input');

this.reportEmployeeValidation =
  inputGroup('Employee Name')
    .locator(
      '.oxd-input-field-error-message'
    );

this.reportProjectInput =
  inputGroup('Project Name')
    .locator('input');

this.reportFromDateInput =
  page.getByPlaceholder('From', {
    exact: true,
  });

this.reportToDateInput =
  page.getByPlaceholder('To', {
    exact: true,
  });

this.employeeReportViewButton =
  this.reportEmployeeInput
    .locator('xpath=ancestor::form')
    .getByRole('button', {
      name: 'View',
      exact: true,
    });
  //punch 
  this.punchHeading = page
  .locator('.oxd-text--h6')
  .filter({
    hasText: /Punch In|Punch Out/i,
  })
  .first();

const punchDateGroup = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Date', {
        exact: true,
      }),
  });

this.punchDateInput =
  punchDateGroup.locator('input');

const punchTimeGroup = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Time', {
        exact: true,
      }),
  });

this.punchTimeInput =
  punchTimeGroup.locator('input');

const punchNoteGroup = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Note', {
        exact: true,
      }),
  });

this.punchNoteInput =
  punchNoteGroup.locator('textarea');

this.punchInButton = page.getByRole(
  'button',
  {
    name: 'In',
    exact: true,
  }
);

this.punchOutButton = page.getByRole(
  'button',
  {
    name: 'Out',
    exact: true,
  }
);

this.punchActionButton =
  this.punchInButton.or(
    this.punchOutButton
  );

  this.timeSuccessToast = page
  .locator('.oxd-toast-content-text')
  .filter({
    hasText:
      /Successfully Saved|Successfully Updated|Successfully Deleted/i,
  });

  this.attendanceSuccessToast = page
  .locator('.oxd-toast-content-text')
  .filter({
    hasText: /Successfully Saved/i,
  });

  this.attendanceSummaryReportHeading=page.getByRole('heading', { name: 'Attendance Total Summary Report' });

    // Project Report
    this.projectReportHeading = page.getByRole("heading", {
      name: "Project Report",
      exact: true,
    });

    const projectNameGroup = page.locator(".oxd-input-group").filter({
      has: page.locator("label").getByText("Project Name", {
        exact: true,
      }),
    });

    this.projectNameInput = projectNameGroup.locator("input");

    this.projectFromDateInput = page.getByPlaceholder("From", {
      exact: true,
    });

    this.projectToDateInput = page.getByPlaceholder("To", {
      exact: true,
    });

    this.projectReportViewButton = page.getByRole("button", {
      name: "View",
      exact: true,
    });
    //customers
    this.projectInfoMenu = page
  .locator('.oxd-topbar-body-nav')
  .getByText('Project Info', {
    exact: true,
  });

this.customersHeading = page.getByRole('heading', {
  name: 'Customers',
  exact: true,
}).first();

this.addCustomerButton = page
  .getByRole('button', {
    name: /Add$/,
  })
  .first();

this.customersTable = page.locator(
  '.orangehrm-container'
);

this.customerRows =
  this.customersTable.locator(
    '.oxd-table-body .oxd-table-card'
  );

this.customerNoRecords =
  this.customersTable
    .locator('.oxd-table-body')
    .getByText('No Records Found', {
      exact: true,
    });

this.addCustomerHeading = page
  .locator('.oxd-text--h6')
  .filter({
    hasText: 'Add Customer',
  })
  .first();

this.customerNameInput =
  inputGroup('Name').locator('input');

this.customerDescriptionInput =
  inputGroup('Description')
    .locator('textarea');

this.customerNameValidation =
  inputGroup('Name').locator(
    '.oxd-input-field-error-message'
  );

const customerForm =
  this.customerNameInput.locator(
    'xpath=ancestor::form'
  );

this.customerSaveButton =
  customerForm.getByRole('button', {
    name: 'Save',
    exact: true,
  });

this.customerCancelButton =
  customerForm.getByRole('button', {
    name: 'Cancel',
    exact: true,
  });

this.projectsHeading = page.getByRole('heading', {
  name: 'Projects',
  exact: true,
  level: 5,
});

    const projectSearchForm = page
      .locator('form')
      .filter({
        has: page.getByText('Project', {
          exact: true,
        }),
      });

    this.projectCustomerFilterInput =
      projectSearchForm
        .getByPlaceholder('Type for hints...')
        .first();

    this.projectNameFilterInput =
      projectSearchForm
        .locator('.oxd-input-group')
        .filter({
          has: page.locator('label').getByText(
            'Project',
            { exact: true },
          ),
        })
        .locator('input');

    this.projectSearchButton =
      projectSearchForm.getByRole('button', {
        name: 'Search',
        exact: true,
      });

    this.projectResetButton =
      projectSearchForm.getByRole('button', {
        name: 'Reset',
        exact: true,
      });

    this.projectRows = page.locator(
      '.oxd-table-body .oxd-table-card'
    );

    this.projectNoRecords = page
      .locator('span.oxd-text--span')
      .filter({ hasText: /^No Records Found$/ })
      .filter({ visible: true })
      .first();

    this.addProjectButton = page
      .getByRole('button', { name: /Add$/ })
      .first();

    this.projectsTable = page.locator('.oxd-table').first();

    this.addProjectHeading = page
      .getByRole('heading', {
        name: 'Add Project',
        exact: true,
      })
      .first();

    this.addProjectCustomerInput =
      inputGroup('Customer Name').locator('input');

    this.addProjectNameInput =
      inputGroup('Name').locator('input');

    this.projectAdminInput =
      inputGroup('Project Admin').locator('input');

    this.projectDescriptionInput =
      inputGroup('Description').locator('textarea');

    const addProjectForm = this.addProjectNameInput
      .locator('xpath=ancestor::form');

    this.projectValidationMessages = addProjectForm.locator(
      '.oxd-input-field-error-message',
    );

    this.projectSaveButton =
      addProjectForm.getByRole('button', {
        name: 'Save',
        exact: true,
      });

    this.projectCancelButton =
      addProjectForm.getByRole('button', {
        name: 'Cancel',
        exact: true,
      });

    this.visibleAutocompleteDropdown =
      page.locator(
        '.oxd-autocomplete-dropdown:visible'
      );

    this.autocompleteOptions =
      this.visibleAutocompleteDropdown.locator(
        '.oxd-autocomplete-option'
      );

    this.autocompleteNoRecords =
      this.visibleAutocompleteDropdown.getByText(
        'No Records Found',
        { exact: true }
      );

    this.projectCustomerValidation =
      projectSearchForm
        .locator('.oxd-input-group')
        .filter({
          has: page.locator('label').getByText(
            'Customer Name',
            { exact: true },
          ),
        })
        .locator(
          '.oxd-input-field-error-message'
        );

    this.customerNameInput = page
      .locator('.oxd-input-group')
      .filter({
        hasText: 'Name',
      })
      .locator('input');

    this.customerDescriptionInput = page
      .locator('.oxd-input-group')
      .filter({
        hasText: 'Description',
      })
      .locator('textarea');

    this.customerSaveButton = page
      .locator('form')
      .getByRole('button', {
        name: 'Save',
        exact: true,
      });

    this.customerRows = page.locator(
      '.oxd-table-body .oxd-table-card'
    );

    this.customerNoRecords = page
      .locator('.orangehrm-container')
      .getByText('No Records Found', {
        exact: true,
      });

    this.confirmationDialog =
      page.getByRole('dialog');

    this.confirmDeleteButton =
      this.confirmationDialog.getByRole(
        'button',
        {
          name: /Yes, Delete$/,
        }
      );

    this.cancelDeleteButton =
      this.confirmationDialog.getByRole(
        'button',
        {
          name: 'No, Cancel',
          exact: true,
        }
      );

    this.timeSuccessToast = page
      .locator('.oxd-toast-content-text')
      .filter({
        hasText:
          /Successfully Saved|Successfully Deleted/i,
      });

    this.loadingSpinner = page.locator(
      '.oxd-loading-spinner'
    );
  }
  

  async gotoEmployeeTimesheets(): Promise<void> {
    await this.timesheetsMenu.click();

    const employeeTimesheetsLink = this.page.getByRole("menuitem", {
      name: "Employee Timesheets",
      exact: true,
    });

    await expect(employeeTimesheetsLink).toBeVisible();

    await employeeTimesheetsLink.click();

    await this.page.waitForURL(/\/time\/viewEmployeeTimesheet$/, {
      timeout: 30_000,
    });

    await expect(this.selectEmployeeHeading).toBeVisible();
  }

  async gotoMyTimesheet(): Promise<void> {
    await this.timesheetsMenu.click();

    const myTimesheetLink = this.page.getByRole("menuitem", {
      name: "My Timesheets",
      exact: true,
    });

    await expect(myTimesheetLink).toBeVisible();

    await myTimesheetLink.click();

    await this.page.waitForURL(/\/time\/viewMyTimesheet$/, {
      timeout: 30_000,
    });
  }

  async gotoEmployeeAttendanceRecords(): Promise<void> {
    await this.attendanceMenu.click();

    const employeeRecordsLink = this.page.getByRole("menuitem", {
      name: "Employee Records",
      exact: true,
    });

    await expect(employeeRecordsLink).toBeVisible();

    await employeeRecordsLink.click();

    await this.page.waitForURL(/\/attendance\/viewAttendanceRecord$/, {
      timeout: 30_000,
    });

    await expect(this.attendanceHeading).toBeVisible();
  }

  async gotoProjectReports(): Promise<void> {
    await this.reportsMenu.click();

    const projectReportsLink = this.page.getByRole("menuitem", {
      name: "Project Reports",
      exact: true,
    });

    await expect(projectReportsLink).toBeVisible();

    await projectReportsLink.click();

    await this.page.waitForURL(/\/time\/displayProjectReportCriteria$/, {
      timeout: 30_000,
    });

    await expect(this.projectReportHeading).toBeVisible();
  }
    async gotoAttendanceSummary(): Promise<void> {
    await this.reportsMenu.click();

    const attendanceSummaryLink = this.page.getByRole("menuitem", {
      name: "Attendance Summary",
      exact: true,
    });

    await expect(attendanceSummaryLink).toBeVisible();

    await attendanceSummaryLink.click();

   await this.page.waitForURL(/time\/displayAttendanceSummaryReportCriteria$/, {
  timeout: 30000, // 30 seconds
});


    await expect(this.attendanceSummaryReportHeading).toBeVisible();
  }

      async gotoEmployeeReport(): Promise<void> {
    await this.reportsMenu.click();

    const employeeReportLink = this.page.getByRole("menuitem", {
     name: "Employee Reports",
      exact: true,
    });

    await expect(employeeReportLink).toBeVisible();

    await employeeReportLink.click();

   await this.page.waitForURL(/time\/displayEmployeeReportCriteria$/, {
  timeout: 30000, // 30 seconds
});


    await expect(this.employeeReportHeading).toBeVisible();
  }

 async gotoCustomers(): Promise<void> {
  await expect(
    this.projectInfoMenu
  ).toBeVisible();

  await this.projectInfoMenu.click();

  const customersLink = this.page
    .locator('.oxd-dropdown-menu:visible')
    .getByText('Customers', {
      exact: true,
    });

  await expect(
    customersLink
  ).toBeVisible();

  await customersLink.click();

  await this.page.waitForURL(
    /\/time\/viewCustomers$/,
    {
      timeout: 30_000,
    }
  );

  await expect(this.loadingSpinner).toBeHidden({
    timeout: 30_000,
  });

  await expect(
    this.addCustomerButton
  ).toBeVisible();
}
async gotoProjects(): Promise<void> {
  await expect(
    this.projectInfoMenu
  ).toBeVisible();

  await this.projectInfoMenu.click();

  const projectsLink = this.page
    .locator('.oxd-dropdown-menu:visible')
    .getByText('Projects', {
      exact: true,
    });

  await expect(
    projectsLink
  ).toBeVisible();

  await projectsLink.click();

  await this.page.waitForURL(
    /\/time\/viewProjects$/,
    {
      timeout: 30_000,
    }
  );

  await expect(
    this.projectsHeading
  ).toBeVisible();
}
  async selectEmployeeFromAutocomplete(searchText: string): Promise<string> {
    return this.selectAutocompleteOption(
      this.employeeNameInput,
      searchText,
      searchText,
    );
  }

  async waitForLoadingToFinish(): Promise<void> {
    await expect(this.loadingSpinner).toBeHidden({
      timeout: 30_000,
    });
  }

  async selectAttendanceEmployeeFromAutocomplete(
    searchText: string,
  ): Promise<string> {
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      await this.attendanceEmployeeInput.fill(searchText);

      const dropdown = this.page.locator(
        ".oxd-autocomplete-dropdown:visible",
      );

      await expect(dropdown).toBeVisible({ timeout: 15_000 });

      const validOptions = dropdown
        .locator(".oxd-autocomplete-option")
        .filter({ hasNotText: /Searching|No Records Found/i });

      const noRecords = dropdown.getByText("No Records Found", {
        exact: true,
      });

      // Do not inspect the option count while the autocomplete is still in
      // its transient "Searching..." state.
      await validOptions.first().or(noRecords).waitFor({
        state: "visible",
        timeout: 15_000,
      });

      if (await validOptions.first().isVisible()) {
        const firstOption = validOptions.first();
        const selectedEmployee = (await firstOption.innerText()).trim();

        await firstOption.click();
        await expect(this.attendanceEmployeeInput).toHaveValue(
          selectedEmployee,
        );

        return selectedEmployee;
      }

      await this.attendanceEmployeeInput.press("Escape");

      if (attempt < maxAttempts) {
        await this.page.waitForTimeout(1_000);
        await this.attendanceEmployeeInput.clear();
      }
    }

    throw new Error(
      `No attendance employee found for: ${searchText} after ${maxAttempts} attempts`,
    );
  }
  
  async gotoMyAttendanceRecords():
Promise<void> {
  await this.attendanceMenu.click();

  const myRecordsLink = this.page
    .locator('.oxd-dropdown-menu:visible')
    .getByText('My Records', {
      exact: true,
    });

  await expect(
    myRecordsLink
  ).toBeVisible();

  await myRecordsLink.click();

  await this.page.waitForURL(
    /\/attendance\/viewMyAttendanceRecord$/,
    {
      timeout: 30_000,
    }
  );

  await expect(
    this.myAttendanceDateInput
  ).toBeVisible();
}

async gotoPunchInOut(): Promise<void> {
  await this.attendanceMenu.click();

  const punchInOutLink = this.page
    .locator('.oxd-dropdown-menu:visible')
    .getByText('Punch In/Out', {
      exact: true,
    });

  await expect(
    punchInOutLink
  ).toBeVisible();

  await punchInOutLink.click();

  await this.page.waitForURL(
    /\/attendance\/punchIn$/,
    {
      timeout: 30_000,
    }
  );

  await expect(
    this.punchHeading
  ).toBeVisible();

  await expect(
    this.punchActionButton
  ).toBeVisible();
}

async ensurePunchDateAndTime(): Promise<{
  date: string;
  time: string;
}> {
  const now = new Date();

  let date = await this.punchDateInput.inputValue();
  let time = await this.punchTimeInput.inputValue();

  if (!date.trim()) {
    const year = now.getFullYear();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    date = `${year}-${day}-${month}`;
    await this.punchDateInput.fill(date);
  }

  if (!time.trim()) {
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    time = `${hours}:${minutes}`;
    await this.punchTimeInput.fill(time);
  }

  await expect(this.punchDateInput).toHaveValue(date);
  await expect(this.punchTimeInput).toHaveValue(time);

  return { date, time };
}
async selectAutocompleteOption(
  input: Locator,
  searchText: string,
  expectedText?: string
): Promise<string> {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    await input.fill(searchText);

    await expect(this.visibleAutocompleteDropdown).toBeVisible({
      timeout: 20_000,
    });

    let validOptions = this.autocompleteOptions.filter({
      hasNotText: /Searching|No Records Found/i,
    });

    if (expectedText !== undefined) {
      validOptions = validOptions.filter({
        hasText: expectedText,
      });
    }

    await validOptions
      .first()
      .or(this.autocompleteNoRecords)
      .waitFor({
        state: 'visible',
        timeout: 20_000,
      });

    if (await validOptions.first().isVisible()) {
      await validOptions.first().click();
      await expect(input).not.toHaveValue('');
      return input.inputValue();
    }

    await input.press('Escape');

    if (attempt < maxAttempts) {
      await this.page.waitForTimeout(1_000);
      await input.clear();
    }
  }

  throw new Error(
    `No autocomplete option found for: ${searchText} after ${maxAttempts} attempts`,
  );
}

async createCustomer(
  details: CreateCustomerDetails,
): Promise<void> {
  await this.addCustomerButton.click();

  await this.customerNameInput.fill(details.name);

  if (details.description !== undefined) {
    await this.customerDescriptionInput.fill(
      details.description
    );
  }

  const responsePromise =
    this.page.waitForResponse(
      response =>
        response.url().includes(
          '/api/v2/time/customers'
        ) &&
        response.request().method() === 'POST',
      {
        timeout: 30_000,
      }
    );

  await this.customerSaveButton.click();

  const response = await responsePromise;

  expect(
    response.ok(),
    `Customer creation failed: ${response.status()}`
  ).toBeTruthy();

  await this.page.waitForURL(
    /\/time\/viewCustomers$/,
    {
      timeout: 30_000,
    }
  );
}

async deleteCustomerByName(
  customerName: string
): Promise<void> {
  const customerRow = this.customerRows.filter({
    has: this.page
      .locator('.oxd-table-cell')
      .nth(1)
      .getByText(customerName, {
        exact: true,
      }),
  });

  await expect(customerRow).toHaveCount(1);

  const deleteButton =
    customerRow.getByRole('button').filter({
      has: this.page.locator('i.bi-trash'),
    });

  await deleteButton.click();

  await expect(
    this.confirmationDialog
  ).toBeVisible();

  const responsePromise =
    this.page.waitForResponse(
      response =>
        response.url().includes(
          '/api/v2/time/customers'
        ) &&
        response.request().method() === 'DELETE',
      {
        timeout: 30_000,
      }
    );

  await this.confirmDeleteButton.click();

  const response = await responsePromise;

  expect(response.ok()).toBeTruthy();

  await expect(customerRow).toHaveCount(0, {
    timeout: 20_000,
  });
}

async createProject(
  details: CreateProjectDetails
): Promise<CreatedProject> {
  await this.selectAutocompleteOption(
    this.addProjectCustomerInput,
    details.customerName,
    details.customerName
  );

  await this.addProjectNameInput.fill(
    details.projectName
  );

  const projectAdmin = await this.selectAutocompleteOption(
    this.projectAdminInput,
    details.projectAdminSearchText
  );

  if (details.description !== undefined) {
    await this.projectDescriptionInput.fill(
      details.description
    );
  }

  const responsePromise =
    this.page.waitForResponse(
      response =>
        response.url().includes(
          '/api/v2/time/projects'
        ) &&
        response.request().method() === 'POST',
      {
        timeout: 30_000,
      }
    );

  await this.projectSaveButton.click();

  const response = await responsePromise;

  expect(
    response.ok(),
    `Project creation failed: ${response.status()}`
  ).toBeTruthy();

  const responseBody = await response.json();
  const projectId = String(responseBody.data?.id ?? '');

  expect(projectId).not.toBe('');

  await this.page.waitForURL(
    new RegExp(`/time/saveProject/${projectId}$`),
    {
      timeout: 30_000,
    }
  );

  await expect(this.loadingSpinner).toBeHidden({
    timeout: 30_000,
  });

  // A successful creation opens the saved project details page.
  // Return to the list so callers can search and verify the project.
  await this.gotoProjects();

  return {
    projectId,
    projectAdmin,
  };
}

async searchProject(
  filters: SearchProjectFilters
): Promise<void> {
  await expect(this.loadingSpinner).toBeHidden({
    timeout: 30_000,
  });

  if (filters.customerName !== undefined) {
    await this.selectAutocompleteOption(
      this.projectCustomerFilterInput,
      filters.customerName,
      filters.customerName
    );
  }

  if (filters.projectName !== undefined) {
    await this.selectAutocompleteOption(
      this.projectNameFilterInput,
      filters.projectName,
      filters.projectName
    );
  }

  const responsePromise =
    this.page.waitForResponse(
      response => {
        if (
          !response.url().includes('/api/v2/time/projects') ||
          response.request().method() !== 'GET'
        ) {
          return false;
        }

        return true;
      },
      {
        timeout: 30_000,
      }
    );

  await this.projectSearchButton.click();

  const response = await responsePromise;

  expect(
    response.ok(),
    `Project search failed: ${response.status()}`
  ).toBeTruthy();

  await expect(this.loadingSpinner).toBeHidden({
    timeout: 30_000,
  });
}

async verifyProjectRow(
  details: VerifyProjectRowDetails,
): Promise<Locator> {
  const projectRow = this.projectRows.filter({
    has: this.page
      .locator('.oxd-table-cell')
      .nth(2)
      .getByText(details.projectName, {
        exact: true,
      }),
  });

  await expect(projectRow).toHaveCount(1, {
    timeout: 20_000,
  });

  const cells = projectRow.locator(
    '.oxd-table-cell'
  );

  await expect(cells.nth(2)).toHaveText(
    details.projectName
  );

  if (details.customerName !== undefined) {
    await expect(cells.nth(1)).toHaveText(
      details.customerName
    );
  }

  if (details.projectAdmin !== undefined) {
    const adminNameParts = details.projectAdmin
      .trim()
      .split(/\s+/);
    const expectedAdminPattern = new RegExp(
      `${adminNameParts[0]}.*${adminNameParts[adminNameParts.length - 1]}`,
      'i'
    );

    await expect(cells.nth(3)).toContainText(
      expectedAdminPattern
    );
  }

  return projectRow;
}

async deleteProjectByName(
  projectName: string
): Promise<void> {
  const projectRow = this.projectRows.filter({
    has: this.page
      .locator('.oxd-table-cell')
      .nth(2)
      .getByText(projectName, {
        exact: true,
      }),
  });

  await expect(projectRow).toHaveCount(1);

  const deleteButton =
    projectRow.getByRole('button').filter({
      has: this.page.locator('i.bi-trash'),
    });

  await deleteButton.click();

  await expect(
    this.confirmationDialog
  ).toBeVisible();

  const responsePromise =
    this.page.waitForResponse(
      response =>
        response.url().includes(
          '/api/v2/time/projects'
        ) &&
        response.request().method() === 'DELETE',
      {
        timeout: 30_000,
      }
    );

  await this.confirmDeleteButton.click();

  const response = await responsePromise;

  expect(
    response.ok(),
    `Project deletion failed: ${response.status()}`
  ).toBeTruthy();

  await expect(projectRow).toHaveCount(0, {
    timeout: 20_000,
  });
}
}
