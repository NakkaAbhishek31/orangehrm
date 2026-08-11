import { Locator, Page, expect } from "@playwright/test";

type EmployeeFilters = {
  employeeId?: string;
  employeeName?: string;
};

type PersonalDetails = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  drivingLicenseNumber?: string;
  ssnNumber?: string;
};

export type AddEmployeeDetails = {
  firstName: string;
  lastName: string;
  middleName?: string;
  employeeId?: string;
  profilePicturePath?: string;
};

export type EmployeeWithLoginDetails = AddEmployeeDetails & {
  username: string;
  password: string;
  status?: "Enabled" | "Disabled";
};

export interface EmployeeData {
  firstName: string;
  middleName?: string;
  lastName: string;
  employeeId?: string;
  profilePicturePath?: string;
}

export class PIMPage {
  readonly page: Page;
  readonly AddEmployeeLink: Locator;
  readonly firstnameInput: Locator;
  readonly middlenameInput: Locator;
  readonly lastnameInput: Locator;
  readonly employeeID: Locator;
  readonly SaveEmployeeButton: Locator;
  readonly personalDetailsHeading: Locator;
  readonly employeeListLink: Locator;
  readonly employeeIdFilterInput: Locator;
  readonly filterSearchButton: Locator;
  readonly loadingSpinner: Locator;
  readonly employeeRows: Locator;
  readonly noRecordsFound: Locator;
  readonly employeeNameFilterInput: Locator;
  readonly autocompleteOptions: Locator;
  readonly middlenameUpateInput: Locator;
  readonly lastnameUpadteInput: Locator;
  readonly personalDetailsSaveButton: Locator;
  readonly successToast: Locator;
  readonly employeeIdValidation: Locator;
  //readonly deleteEmployee:Locator;
  readonly profilePictureInput: Locator;
  readonly profilePicturePreview: Locator;
  readonly profilePictureValidation: Locator;
  readonly nextPageButton: Locator;
  readonly previousPageButton: Locator;
  readonly activePageButton: Locator;
  readonly employeeIdCells: Locator;
  readonly cancelProfilepageButton: Locator;
  readonly requiredValidationMessages: Locator;
  readonly createLoginDetailsSwitch: Locator;
  readonly employeeUsernameInput: Locator;
  readonly employeePasswordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly enabledStatusRadio: Locator;
  readonly disabledStatusRadio: Locator;
  readonly confirmPasswordValidation: Locator;
  readonly passwordValidation: Locator;
  readonly passwordStrengthIndicator: Locator;
  readonly createLoginDetailsCheckbox: Locator;
  readonly usernameValidation: Locator;
  readonly canceldeletiondilogbutton: Locator;
  readonly addEmployeeIdInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.AddEmployeeLink = page.getByRole("link", { name: /Add Employee/i });
    this.firstnameInput = page.getByRole("textbox", { name: "First Name" });
    this.middlenameInput = page.getByRole("textbox", { name: "Middle Name" });
    this.lastnameInput = page.getByRole("textbox", { name: "Last Name" });
    // this.employeeID=page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
    this.SaveEmployeeButton = page.getByRole("button", { name: "Save" });
    this.personalDetailsHeading = page.getByRole("heading", {
      name: "Personal Details",
    });
    this.employeeListLink = page.getByRole("link", { name: "Employee List" });
    // this.employeeIdFilterInput=page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
    this.filterSearchButton = page.getByRole("button", { name: /Search/i });
    this.loadingSpinner = this.loadingSpinner = page
      .locator(".oxd-loading-spinner")
      .first();
    this.employeeRows = page.locator(".oxd-table-body .oxd-table-card");
    this.noRecordsFound = page
      .locator(".oxd-toast-container")
      .getByText("No Records Found", { exact: true });
    this.employeeNameFilterInput = page.locator(
      "//div[@class='oxd-grid-4 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]",
    );
    this.autocompleteOptions = page.locator(".oxd-autocomplete-option");
    this.middlenameUpateInput = page.getByRole("textbox", {
      name: "Middle Name",
    });
    this.lastnameUpadteInput = page.getByRole("textbox", { name: "Last Name" });
    this.personalDetailsSaveButton = this.personalDetailsSaveButton = page
      .locator("form")
      .filter({ has: page.locator('input[name="firstName"]') })
      .getByRole("button", { name: "Save", exact: true });
    this.successToast = page.locator(
      "div.oxd-toast-container.oxd-toast-container--bottom",
    );
    this.employeeIdValidation = page.getByText("Employee Id already exists", {
      exact: true,
    });
    this.employeeID = page
      .locator("form")
      .filter({ has: page.locator('input[name="firstName"]') })
      .locator(".oxd-input-group")
      .filter({ hasText: "Employee Id" })
      .locator("input");
    this.employeeIdFilterInput = page
      .locator(".oxd-table-filter")
      .locator(".oxd-input-group")
      .filter({ hasText: "Employee Id" })
      .locator("input");
    this.profilePictureInput = page.locator('input[type="file"]');
    this.profilePicturePreview = page.locator("img.employee-image");
    this.profilePictureValidation = page.getByText("File type not allowed", {
      exact: true,
    });

    this.nextPageButton = page
      .locator("button.oxd-pagination-page-item--previous-next")
      .filter({
        has: page.locator("i.bi-chevron-right"),
      });

    this.previousPageButton = page
      .locator("button.oxd-pagination-page-item--previous-next")
      .filter({
        has: page.locator("i.bi-chevron-left"),
      });

    this.activePageButton = page.locator(".oxd-pagination-page-item--active");

    this.employeeIdCells = page.locator(
      '.oxd-table-body [role="row"] [role="cell"]:nth-child(2)',
    );

    this.cancelProfilepageButton = page.getByRole("button", {
      name: /Cancel/i,
    });

    this.requiredValidationMessages = page.locator(
      ".oxd-input-field-error-message",
    );
    this.createLoginDetailsSwitch = page
      .locator(".oxd-form-row")
      .filter({ hasText: "Create Login Details" })
      .locator(".oxd-switch-input");
    this.employeeUsernameInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Username", { exact: true }),
      })
      .locator("input");

    this.employeePasswordInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Password", { exact: true }),
      })
      .locator("input");

    this.confirmPasswordInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Confirm Password", {
          exact: true,
        }),
      })
      .locator("input");

    this.enabledStatusRadio = page
      .getByText("Enabled", { exact: true })
      .locator("..")
      .locator('input[type="radio"]');

    this.disabledStatusRadio = page
      .getByText("Disabled", { exact: true })
      .locator("..")
      .locator('input[type="radio"]');

    this.confirmPasswordValidation = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Confirm Password", {
          exact: true,
        }),
      })
      .locator(".oxd-input-field-error-message");

    this.passwordValidation = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Password", { exact: true }),
      })
      .locator(".oxd-input-field-error-message");

    this.passwordStrengthIndicator = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Password", { exact: true }),
      })
      .locator("span")
      .filter({
        hasText: /Weak|Better|Medium|Strong/i,
      });

    const createLoginDetailsRow = page
      .locator(".oxd-form-row")
      .filter({ hasText: "Create Login Details" });

    this.createLoginDetailsCheckbox = createLoginDetailsRow.locator(
      'input[type="checkbox"]',
    );

    this.createLoginDetailsSwitch = createLoginDetailsRow.locator(
      "span.oxd-switch-input",
    );

    this.usernameValidation = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Username", { exact: true }),
      })
      .locator(".oxd-input-field-error-message");

    this.canceldeletiondilogbutton = page.getByRole("button", {
      name: /No, Cancel/i,
    });

    this.addEmployeeIdInput = page
      .locator(".oxd-input-group")
      .filter({ hasText: "Employee Id" })
      .locator("input");
  }

  async gotoAddEmployee(): Promise<void> {
    await this.AddEmployeeLink.click();
  }

  // async addEmployee(details: AddEmployeeDetails): Promise<string> {
  //   if (details.firstName !== undefined) {
  //     await this.firstnameInput.fill(details.firstName);
  //   }

  //   if (details.middleName !== undefined) {
  //     await this.middlenameInput.fill(details.middleName);
  //   }

  //   if (details.lastName !== undefined) {
  //     await this.lastnameInput.fill(details.lastName);
  //   }

  //   let employeeId = details.employeeId ?? (await this.employeeID.inputValue());

  //   // if (details.employeeId !== undefined) {
  //   //   await this.employeeID.fill(employeeId);
  //   // }

  //   // await this.employeeID.blur();

  //   // const duplicateIdFound = await this.employeeIdValidation
  //   //   .waitFor({
  //   //     state: "visible",
  //   //     timeout: 3_000,
  //   //   })
  //   //   .then(() => true)
  //   //   .catch(() => false);

  //   // if (duplicateIdFound) {
  //   //   employeeId = `E${Date.now().toString().slice(-9)}`;

  //   //   await this.employeeID.fill(employeeId);
  //   //   await this.employeeID.blur();

  //   //   await expect(this.employeeID).toHaveValue(employeeId);
  //   //   await expect(this.employeeIdValidation).toBeHidden();
  //   // }

  //   if (details.profilePicturePath !== undefined) {
  //     const defaultImageSrc =
  //       await this.profilePicturePreview.getAttribute("src");

  //     await this.profilePictureInput.setInputFiles(details.profilePicturePath);

  //     await expect(this.profilePicturePreview).not.toHaveAttribute(
  //       "src",
  //       defaultImageSrc ?? "",
  //     );
  //   }

  //   const personalDetailsLoaded = this.page.waitForResponse(
  //     (response) =>
  //       response.url().includes("/personal-details") &&
  //       response.request().method() === "GET" &&
  //       response.ok(),
  //     { timeout: 20_000 },
  //   );

  //   await this.SaveEmployeeButton.click();

  //   await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  //     timeout: 20_000,
  //   });

  //   await personalDetailsLoaded;
  //   await expect(this.loadingSpinner).toBeHidden();
  //   await expect(this.personalDetailsHeading).toBeVisible();

  //   return employeeId;
  // }
  // async addEmployee(employee: EmployeeData): Promise<string> {
  //   await this.firstnameInput.fill(employee.firstName);

  //   if (employee.middleName) {
  //     await this.middlenameInput.fill(employee.middleName);
  //   }

  //   await this.lastnameInput.fill(employee.lastName);

  //   /*
  //    * OrangeHRM generates the same next ID when multiple workers
  //    * open Add Employee simultaneously. Override it with a unique ID.
  //    */
  //   const employeeId =
  //     employee.employeeId ??
  //     `${Date.now().toString().slice(-6)}${Math.floor(
  //       Math.random() * 1000
  //     )
  //       .toString()
  //       .padStart(3, "0")}`;

  //   await this.employeeID.fill(employeeId);

  //   await this.SaveEmployeeButton.click();

  //   await expect(this.page).toHaveURL(
  //     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  //     {
  //       timeout: 30_000,
  //     }
  //   );

  //   await expect(this.personalDetailsHeading).toBeVisible({
  //     timeout: 15_000,
  //   });

  //   return employeeId;
  // }

  async addEmployee(data: EmployeeData): Promise<string> {
    await this.firstnameInput.fill(data.firstName);

    if (data.middleName !== undefined) {
      await this.middlenameInput.fill(data.middleName);
    }

    await this.lastnameInput.fill(data.lastName);

    if (data.employeeId !== undefined) {
      await this.employeeID.fill(data.employeeId);
    }

    if (data.profilePicturePath) {
      await this.profilePictureInput.setInputFiles(data.profilePicturePath);
    }

    await this.SaveEmployeeButton.click();

    return await this.employeeID.inputValue();
  }

  async gotoEmployeeList(): Promise<void> {
    await this.employeeListLink.click();
  }

  async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
    if (filters.employeeId !== undefined) {
      await this.employeeIdFilterInput.fill(filters.employeeId);
    }

    if (filters.employeeName !== undefined) {
      await this.employeeNameFilterInput.fill(filters.employeeName);

      const matchingOption = this.autocompleteOptions
        .filter({ hasText: filters.employeeName })
        .first();

      await expect(matchingOption).toBeVisible();
      await matchingOption.click();
    }
  }

  async clickOnFilterSearch(): Promise<void> {
    await this.filterSearchButton.click();
  }

  async verifyEmployeeSearchResult(
    employeeId: string,
    firstName: string,
    lastName: string,
  ): Promise<void> {
    await expect(this.loadingSpinner).toBeHidden();
    const matchingRow = this.employeeRows.filter({ hasText: employeeId });
    const cells = matchingRow.locator(".oxd-table-cell");
    const fullName = await cells.nth(2).innerText();
    const actualFirstName = fullName.trim().split(/\s+/)[0];
    await expect(cells.nth(1)).toHaveText(employeeId);
    expect(actualFirstName).toBe(firstName);
    await expect(cells.nth(3)).toHaveText(lastName);
    await expect(this.noRecordsFound).not.toBeVisible();
  }

  async verifyNoEmployeeRecordsFound(employeeId: string) {
    await expect(this.loadingSpinner).toBeHidden({
      timeout: 15_000,
    });

    await expect(this.employeeRows).toHaveCount(0, {
      timeout: 15_000,
    });

    await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  }

  async updatePersonalDetails(details: PersonalDetails): Promise<void> {
    await expect(this.personalDetailsHeading).toBeVisible();
    await expect(this.loadingSpinner).toBeHidden();
    await expect(this.personalDetailsSaveButton).toBeEnabled();

    if (details.middleName !== undefined) {
      await this.middlenameInput.fill(details.middleName);
      await expect(this.middlenameInput).toHaveValue(details.middleName);
    }

    if (details.lastName !== undefined) {
      await this.lastnameInput.fill(details.lastName);
      await expect(this.lastnameInput).toHaveValue(details.lastName);
    }

    const updateResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/personal-details") &&
        response.request().method() === "PUT" &&
        response.ok(),
      { timeout: 20_000 },
    );

    await this.personalDetailsSaveButton.click();
    await updateResponse;

    await expect(this.successToast).toContainText("Successfully Updated");

    await expect(this.loadingSpinner).toBeHidden();

    if (details.middleName !== undefined) {
      await expect(this.middlenameInput).toHaveValue(details.middleName);
    }

    if (details.lastName !== undefined) {
      await expect(this.lastnameInput).toHaveValue(details.lastName);
    }
  }
  //deleting the Records
  async deleteEmployeeById(employeeId: string): Promise<void> {
    await expect(this.loadingSpinner).toBeHidden();
    const matchingRow = this.employeeRows.filter({ hasText: employeeId });
    await expect(matchingRow).toHaveCount(1);
    const deleteButton = matchingRow.locator("button").filter({
      has: this.page.locator("i.bi-trash"),
    });
    await deleteButton.click();

    const confirmationDilaog = this.page.getByRole("dialog");
    await expect(confirmationDilaog).toBeVisible();
    const deleteResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/pim/employees") &&
        response.request().method() === "DELETE" &&
        response.ok(),
      { timeout: 20_000 },
    );

    await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();

    await deleteResponse;

    await expect(this.successToast).toContainText("Successfully Deleted");

    await expect(matchingRow).toHaveCount(0);
  }

  async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
    //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');

    await this.profilePictureInput.setInputFiles(invalidFilePath, {
      timeout: 20_000,
    });

    await expect(this.profilePictureValidation).toBeVisible();

    await expect(this.profilePictureValidation).toContainText(
      "File type not allowed",
    );
  }

  async getVisibleEmployeeIds(): Promise<string[]> {
    await expect(this.employeeRows.first()).toBeVisible({
      timeout: 15_000,
    });

    await expect(this.employeeIdCells.first()).toBeVisible({
      timeout: 15_000,
    });

    const employeeIds = await this.employeeIdCells.allTextContents();

    return employeeIds
      .map((employeeId) => employeeId.trim())
      .filter((employeeId) => employeeId.length > 0);
  }

  async goToPage(pageNumber: number): Promise<void> {
    const currentPageIds = await this.getVisibleEmployeeIds();

    const pageButton = this.page
      .getByRole("navigation", {
        name: "Pagination Navigation",
      })
      .getByRole("button", {
        name: String(pageNumber),
        exact: true,
      });

    await expect(pageButton).toBeVisible();

    const employeesResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/pim/employees") &&
        response.request().method() === "GET" &&
        response.ok(),
      { timeout: 20_000 },
    );

    await pageButton.click();
    await employeesResponse;

    await expect
      .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
      .not.toEqual(currentPageIds);
  }

  async openEmployeeById(employeeId: string): Promise<void> {
    const employeeRow = this.employeeRows.filter({
      has: this.page
        .locator(".oxd-table-cell")
        .nth(1)
        .filter({ hasText: employeeId }),
    });

    await expect(employeeRow).toHaveCount(1);

    await employeeRow.locator(".oxd-table-cell").nth(1).click();

    await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 15_000,
    });
  }

  async cancelAddingEmployee(): Promise<void> {
    expect(this.cancelProfilepageButton).toBeVisible();
    expect(this.cancelProfilepageButton).toBeEnabled();
    this.cancelProfilepageButton.click();
    await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  }

  async saveEmployeeWithoutRequiredDetails(
    details: AddEmployeeDetails,
  ): Promise<void> {
    await this.firstnameInput.fill(details.firstName);

    if (details.middleName !== undefined) {
      await this.middlenameInput.fill(details.middleName);
    }

    await this.lastnameInput.fill(details.lastName);

    if (details.employeeId !== undefined) {
      await this.employeeID.fill(details.employeeId);
    }

    if (details.profilePicturePath !== undefined) {
      await this.profilePictureInput.setInputFiles(details.profilePicturePath);
    }

    await this.SaveEmployeeButton.click();
  }

  async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
    if (details.firstName !== undefined) {
      await this.firstnameInput.fill(details.firstName);
    }

    if (details.middleName !== undefined) {
      await this.middlenameInput.fill(details.middleName);
    }

    if (details.lastName !== undefined) {
      await this.lastnameInput.fill(details.lastName);
    }

    if (details.employeeId !== undefined) {
      await this.employeeID.fill(details.employeeId);
      await this.employeeID.blur();
    }

    if (details.profilePicturePath !== undefined) {
      await this.profilePictureInput.setInputFiles(details.profilePicturePath);
    }
  }

  async resetEmployeeFilters(): Promise<void> {
    const employeeListResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/pim/employees") &&
        response.request().method() === "GET" &&
        response.ok(),
      { timeout: 15_000 },
    );

    await this.page.getByRole("button", { name: "Reset", exact: true }).click();

    await employeeListResponse;
    await expect(this.loadingSpinner).toBeHidden();
  }

  async selectEmployeeFromAutocomplete(
    partialName: string,
    expectedFullName: string,
  ): Promise<void> {
    await this.employeeNameFilterInput.fill(partialName);

    const matchingOption = this.page
      .locator(".oxd-autocomplete-option")
      .filter({ hasText: expectedFullName });

    await matchingOption.waitFor({ state: "visible" });

    await expect(matchingOption).toBeVisible({ timeout: 15000 });
    await matchingOption.click();
  }

  async addEmployeeWithLoginDetails(
    details: EmployeeWithLoginDetails,
  ): Promise<string> {
    await this.fillAddEmployeeForm({
      firstName: details.firstName,
      middleName: details.middleName,
      lastName: details.lastName,
      employeeId: details.employeeId,
      profilePicturePath: details.profilePicturePath,
    });

    const employeeId = await this.employeeID.inputValue();

    if (!(await this.createLoginDetailsCheckbox.isChecked())) {
      await this.createLoginDetailsSwitch.click();
    }

    await expect(this.createLoginDetailsCheckbox).toBeChecked();

    await expect(this.employeeUsernameInput).toBeVisible();
    await expect(this.employeePasswordInput).toBeVisible();
    await expect(this.confirmPasswordInput).toBeVisible();

    await this.employeeUsernameInput.fill(details.username);
    await this.employeePasswordInput.fill(details.password);
    await this.confirmPasswordInput.fill(details.password);

    if (details.status === "Disabled") {
      await this.disabledStatusRadio.check({
        force: true,
      });

      await expect(this.disabledStatusRadio).toBeChecked();
    } else {
      await this.enabledStatusRadio.check({
        force: true,
      });

      await expect(this.enabledStatusRadio).toBeChecked();
    }
    await expect(this.employeeUsernameInput).toHaveValue(details.username);

    await expect(this.employeePasswordInput).toHaveValue(details.password);

    await expect(this.confirmPasswordInput).toHaveValue(details.password);

    const createEmployeeResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/pim/employees") &&
        response.request().method() === "POST" &&
        response.ok(),
      { timeout: 20_000 },
    );

    await this.SaveEmployeeButton.click();

    await createEmployeeResponse;

    await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 20_000,
    });

    await expect(this.loadingSpinner).toBeHidden();

    return employeeId;
  }

  async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
    await expect(this.passwordStrengthIndicator).toBeVisible();

    await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  }

  async canceldeleteEmployeeById(employeeId: string): Promise<void> {
    await expect(this.loadingSpinner).toBeHidden();
    const matchingRow = this.employeeRows.filter({ hasText: employeeId });
    await expect(matchingRow).toHaveCount(1);
    const deleteButton = matchingRow.locator("button").filter({
      has: this.page.locator("i.bi-trash"),
    });
    await deleteButton.click();

    const confirmationDilaog = this.page.getByRole("dialog");
    await expect(confirmationDilaog).toBeVisible();

    await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();

    await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  }

  async selectEmployeeById(employeeId: string): Promise<void> {
    const employeeRow = this.employeeRows.filter({
      has: this.page
        .locator(".oxd-table-cell")
        .nth(1)
        .getByText(employeeId, { exact: true }),
    });

    await expect(employeeRow).toHaveCount(1);

    const rowCheckbox = employeeRow.locator('input[type="checkbox"]');

    await rowCheckbox.check({
      force: true,
    });

    await expect(rowCheckbox).toBeChecked();
  }

  async deleteSelectedEmployees(): Promise<void> {
    const deleteSelectedButton = this.page.getByRole("button", {
      name: /Delete Selected/i,
    });

    await expect(deleteSelectedButton).toBeVisible();
    await deleteSelectedButton.click();

    const confirmationDialog = this.page.getByRole("dialog");

    await expect(confirmationDialog).toBeVisible();

    const deleteResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/pim/employees") &&
        response.request().method() === "DELETE" &&
        response.ok(),
      { timeout: 20_000 },
    );

    await confirmationDialog
      .getByRole("button", {
        name: /Yes, Delete/i,
      })
      .click();

    await deleteResponse;

    await expect(confirmationDialog).toBeHidden();

    await expect(this.successToast).toContainText("Successfully Deleted");

    await expect(this.loadingSpinner).toBeHidden();
  }

  async selectAllVisibleEmployees(): Promise<void> {
    await expect(this.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(this.employeeRows.first()).toBeVisible({
      timeout: 20_000,
    });

    const headerCheckbox = this.page.locator(
      '.oxd-table-header input[type="checkbox"]',
    );

    const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');

    await expect
      .poll(async () => rowCheckboxes.count(), {
        timeout: 20_000,
        message: "Waiting for Employee List rows to load",
      })
      .toBeGreaterThan(0);

    const rowCount = await rowCheckboxes.count();

    await headerCheckbox.check({
      force: true,
    });

    await expect(headerCheckbox).toBeChecked();

    for (let index = 0; index < rowCount; index++) {
      await expect(rowCheckboxes.nth(index)).toBeChecked();
    }
  }

  async deselectAllVisibleEmployees(): Promise<void> {
    const headerCheckbox = this.page.locator(
      '.oxd-table-header input[type="checkbox"]',
    );

    const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');

    const rowCount = await rowCheckboxes.count();

    expect(rowCount).toBeGreaterThan(0);

    await headerCheckbox.uncheck({
      force: true,
    });

    await expect(headerCheckbox).not.toBeChecked();

    for (let index = 0; index < rowCount; index++) {
      await expect(rowCheckboxes.nth(index)).not.toBeChecked();
    }
  }

  async cancelEmployeeDeletion(employeeId: string): Promise<void> {
    const employeeRow = this.employeeRows.filter({
      has: this.page.locator(".oxd-table-cell").nth(1).getByText(employeeId, {
        exact: true,
      }),
    });

    await expect(employeeRow).toHaveCount(1);

    const deleteButton = employeeRow.locator("button").filter({
      has: this.page.locator("i.bi-trash"),
    });

    await expect(deleteButton).toBeVisible();
    await deleteButton.click();

    const confirmationDialog = this.page.getByRole("dialog");

    await expect(confirmationDialog).toBeVisible();

    await expect(confirmationDialog).toContainText("Are you Sure?");

    await confirmationDialog
      .getByRole("button", {
        name: /No, Cancel/i,
      })
      .click();

    await expect(confirmationDialog).toBeHidden();

    // Confirm the employee remains in the table.
    await expect(employeeRow).toHaveCount(1);

    await expect(employeeRow.locator(".oxd-table-cell").nth(1)).toHaveText(
      employeeId,
    );
  }

  private generateUniqueEmployeeId(): string {
    const timestamp = Date.now().toString(36).slice(-5);

    const randomValue = Math.random().toString(36).slice(2, 6);

    return `E${timestamp}${randomValue}`.toUpperCase().slice(0, 10);
  }
}
