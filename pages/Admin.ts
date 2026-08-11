import { Locator, Page, expect } from "@playwright/test";

export interface SystemUserFilters {
  username?: string;
  userRole?: string;
  employeeName?: string;
  status?: string;
}

export type AddSystemUserDetails = {
  userRole: string;
  employeeName: string;
  status: string;
  username: string;
  password: string;
};

export class AdminPage {
  readonly page: Page;
  readonly userManagementMenu: Locator;
  readonly usersMenuItem: Locator;
  readonly systemUsersHeading: Locator;
  readonly usernameInput: Locator;
  readonly userRoleDropdown: Locator;
  readonly employeeNameInput: Locator;
  readonly statusDropdown: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly addButton: Locator;
  readonly systemUsersTable: Locator;
  readonly userRows: Locator;
  readonly loadingSpinner: Locator;
  readonly noRecordsFound: Locator;
  readonly addUserHeading: Locator;
  readonly addUserRoleDropdown: Locator;
  readonly addEmployeeNameInput: Locator;
  readonly addStatusDropdown: Locator;
  readonly addUsernameInput: Locator;
  readonly addPasswordInput: Locator;
  readonly addConfirmPasswordInput: Locator;
  readonly addUserSaveButton: Locator;
  readonly addUserCancelButton: Locator;
  readonly autocompleteOptions: Locator;
  readonly successToast: Locator;
  readonly validationMessages: Locator;
  readonly toastMessage: Locator;
  readonly usernameValidation: Locator;
  readonly confirmPasswordValidation: Locator;
  readonly editUserHeading: Locator;
  readonly editStatusDropdown: Locator;
  readonly editUserSaveButton: Locator;
  readonly deleteSelectedButton: Locator;
  readonly nextPageButton: Locator;
  readonly previousPageButton: Locator;
  readonly passwordValidation: Locator;
  readonly employeeNameValidation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userManagementMenu = page.locator(".oxd-topbar-body-nav-tab").filter({
      hasText: "User Management",
    });

    this.usersMenuItem = page.locator(".oxd-topbar-body-nav-tab-link").filter({
      hasText: "Users",
    });

    this.systemUsersHeading = page.getByRole("heading", {
      name: "System Users",
      exact: true,
    });

    this.usernameInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Username", {
          exact: true,
        }),
      })
      .locator("input");

    this.userRoleDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("User Role", {
          exact: true,
        }),
      })
      .locator(".oxd-select-text");

    this.employeeNameInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Employee Name", {
          exact: true,
        }),
      })
      .locator("input");

    this.statusDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Status", {
          exact: true,
        }),
      })
      .locator(".oxd-select-text");

    this.searchButton = page.getByRole("button", {
      name: "Search",
      exact: true,
    });

    this.resetButton = page.getByRole("button", {
      name: "Reset",
      exact: true,
    });

    this.addButton = page.getByRole("button", { name: /Add/i });

    this.systemUsersTable = page.locator(".oxd-table");

    this.userRows = page.locator(".oxd-table-body .oxd-table-card");

    this.loadingSpinner = page.locator(".oxd-loading-spinner");

    this.noRecordsFound = this.noRecordsFound = page
      .locator(".orangehrm-paper-container")
      .getByText("No Records Found", {
        exact: true,
      });

    this.addUserHeading = page.getByRole("heading", {
      name: "Add User",
      exact: true,
    });

    this.addUserRoleDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("User Role", {
          exact: true,
        }),
      })
      .locator(".oxd-select-text");

    this.addEmployeeNameInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Employee Name", {
          exact: true,
        }),
      })
      .locator("input");

    this.addStatusDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Status", {
          exact: true,
        }),
      })
      .locator(".oxd-select-text");

    this.addUsernameInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Username", {
          exact: true,
        }),
      })
      .locator("input");

    this.addPasswordInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Password", {
          exact: true,
        }),
      })
      .locator("input");

    this.addConfirmPasswordInput = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Confirm Password", {
          exact: true,
        }),
      })
      .locator("input");

    this.addUserSaveButton = page.getByRole("button", {
      name: "Save",
      exact: true,
    });

    this.addUserCancelButton = page.getByRole("button", {
      name: "Cancel",
      exact: true,
    });

    this.autocompleteOptions = page.locator(".oxd-autocomplete-option");

    this.successToast = page.locator(".oxd-toast-content-text").filter({
      hasText: /Successfully Saved/i,
    });

    this.validationMessages = page.locator(".oxd-input-field-error-message");

    this.toastMessage = page.locator(".oxd-toast-content-text");

    this.usernameValidation = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Username", {
          exact: true,
        }),
      })
      .locator(".oxd-input-field-error-message");
    this.confirmPasswordValidation = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Confirm Password", {
          exact: true,
        }),
      })
      .locator(".oxd-input-field-error-message");

    this.editUserHeading = page.getByRole("heading", {
      name: "Edit User",
      exact: true,
    });

    this.editStatusDropdown = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Status", {
          exact: true,
        }),
      })
      .locator(".oxd-select-text");

    this.editUserSaveButton = page.getByRole("button", {
      name: "Save",
      exact: true,
    });

    this.deleteSelectedButton = page
      .locator(
        ".orangehrm-horizontal-padding " + "button.oxd-button--label-danger",
      )
      .filter({
        has: page.locator("i.bi-trash-fill"),
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

    this.passwordValidation = page
      .locator(".oxd-input-group")
      .filter({
        has: page.getByText("Password", {
          exact: true,
        }),
      })
      .locator(".oxd-input-field-error-message");

    this.employeeNameValidation = page
      .locator(".oxd-input-group")
      .filter({
        has: page.locator("label").getByText("Employee Name", {
          exact: true,
        }),
      })
      .locator(".oxd-input-field-error-message");
  }

  async gotoUserManagementUsers(): Promise<void> {
    await this.userManagementMenu.click();
    await this.usersMenuItem.click();
  }

  private async selectDropdownOption(
    dropdown: Locator,
    option: string,
  ): Promise<void> {
    await dropdown.click();

    const dropdownOption = this.page
      .locator(".oxd-select-option")
      .getByText(option, {
        exact: true,
      });

    await expect(dropdownOption).toBeVisible();
    await dropdownOption.click();
  }

  async searchSystemUsers(filters: SystemUserFilters): Promise<void> {
    if (filters.username !== undefined) {
      await this.usernameInput.fill(filters.username);
    }

    if (filters.userRole !== undefined) {
      await this.selectDropdownOption(this.userRoleDropdown, filters.userRole);
    }

    if (filters.employeeName !== undefined) {
      await this.employeeNameInput.fill(filters.employeeName);

      const employeeOption = this.page
        .locator(".oxd-autocomplete-option")
        .filter({
          hasText: filters.employeeName,
        })
        .first();

      await expect(employeeOption).toBeVisible({
        timeout: 15_000,
      });

      await employeeOption.click();
    }

    if (filters.status !== undefined) {
      await this.selectDropdownOption(this.statusDropdown, filters.status);
    }

    const searchResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/admin/users") &&
        response.request().method() === "GET" &&
        response.ok(),
      {
        timeout: 20_000,
      },
    );

    await this.searchButton.click();
    await searchResponse;

    await expect(this.loadingSpinner).toBeHidden();
  }

  async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
    await expect(this.userRows.first()).toBeVisible();

    const matchingRow = expected.username
      ? this.userRows.filter({
          has: this.page
            .locator(".oxd-table-cell")
            .nth(1)
            .getByText(expected.username, {
              exact: true,
            }),
        })
      : this.userRows.first();

    await expect(matchingRow).toHaveCount(1);

    const cells = matchingRow.locator(".oxd-table-cell");

    if (expected.username !== undefined) {
      await expect(cells.nth(1)).toHaveText(expected.username);
    }

    if (expected.userRole !== undefined) {
      await expect(cells.nth(2)).toHaveText(expected.userRole);
    }

    if (expected.employeeName !== undefined) {
      await expect(cells.nth(3)).toContainText(expected.employeeName);
    }

    if (expected.status !== undefined) {
      await expect(cells.nth(4)).toHaveText(expected.status);
    }
  }

  async resetSystemUserFilters(): Promise<void> {
    await this.resetButton.click();

    await expect(this.usernameInput).toHaveValue("");
    await expect(this.employeeNameInput).toHaveValue("");
  }

  async gotoAddSystemUser(): Promise<void> {
    await this.addButton.click();
    await this.page.waitForURL(/admin\/saveSystemUser/, {
      timeout: 20_000,
    });

    await expect(this.addUserHeading).toBeVisible();
  }

  async fillSystemUserForm(details: AddSystemUserDetails): Promise<void> {
    await this.selectDropdownOption(this.addUserRoleDropdown, details.userRole);

    await this.addEmployeeNameInput.fill(details.employeeName);

    const matchingEmployee = this.autocompleteOptions
      .filter({
        hasText: details.employeeName,
      })
      .first();

    await expect(matchingEmployee).toBeVisible({
      timeout: 20_000,
    });

    await matchingEmployee.click();

    await this.selectDropdownOption(this.addStatusDropdown, details.status);

    await this.addUsernameInput.fill(details.username);

    await this.addPasswordInput.fill(details.password);

    await this.addConfirmPasswordInput.fill(details.password);
  }

  async saveSystemUser(): Promise<void> {
    const createUserResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/admin/users") &&
        response.request().method() === "POST" &&
        response.ok(),
      {
        timeout: 20_000,
      },
    );

    const systemUsersPage = this.page.waitForURL(/admin\/viewSystemUsers/, {
      timeout: 20_000,
    });

    // Begin watching for the temporary toast
    // before clicking Save.
    const successToastAppears = expect(this.successToast).toContainText(
      "Successfully Saved",
      {
        timeout: 20_000,
      },
    );

    await this.addUserSaveButton.click();

    await Promise.all([
      createUserResponse,
      systemUsersPage,
      successToastAppears,
    ]);

    await expect(this.systemUsersHeading).toBeVisible();
  }

  async deleteSystemUserByUsername(username: string): Promise<void> {
    const matchingRow = this.userRows.filter({
      has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
        exact: true,
      }),
    });

    await expect(matchingRow).toHaveCount(1);

    await matchingRow
      .locator("button")
      .filter({
        has: this.page.locator("i.bi-trash, i.bi-trash-fill"),
      })
      .click();

    const confirmationDialog = this.page.getByRole("dialog");

    await expect(confirmationDialog).toBeVisible();

    const deleteResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/admin/users") &&
        response.request().method() === "DELETE" &&
        response.ok(),
      {
        timeout: 20_000,
      },
    );

    // Start waiting before clicking because the toast
    // may disappear quickly.
    const deletedToastAppears = expect(
      this.toastMessage.filter({
        hasText: /Successfully Deleted/i,
      }),
    ).toBeVisible({
      timeout: 20_000,
    });

    await confirmationDialog
      .getByRole("button", {
        name: /Yes, Delete/i,
      })
      .click();

    await Promise.all([deleteResponse, deletedToastAppears]);

    await expect(confirmationDialog).toBeHidden();
  }

  async openSystemUserForEditing(username: string): Promise<void> {
    const userRow = this.userRows.filter({
      has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
        exact: true,
      }),
    });

    await expect(userRow).toHaveCount(1);

    await userRow
      .getByRole("button")
      .filter({
        has: this.page.locator("i.bi-pencil-fill"),
      })
      .click();

    await expect(this.page).toHaveURL(/admin\/saveSystemUser\/\d+/);

    await expect(this.editUserHeading).toBeVisible();
  }

  async updateSystemUserStatus(status: string): Promise<void> {
    await this.editStatusDropdown.click();

    await this.page
      .locator(".oxd-select-option")
      .getByText(status, {
        exact: true,
      })
      .click();

    await expect(this.editStatusDropdown).toContainText(status);

    const updateResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/admin/users/") &&
        response.request().method() === "PUT" &&
        response.ok(),
      {
        timeout: 20_000,
      },
    );

    const updatedToast = expect(
      this.toastMessage.filter({
        hasText: /Successfully Updated/i,
      }),
    ).toBeVisible({
      timeout: 20_000,
    });

    await this.editUserSaveButton.click();

    await Promise.all([
      updateResponse,
      updatedToast,
      this.page.waitForURL(/admin\/viewSystemUsers/, {
        timeout: 20_000,
      }),
    ]);
  }

  async cancelSystemUserDeletion(username: string): Promise<void> {
    const userRow = this.userRows.filter({
      has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
        exact: true,
      }),
    });

    await expect(userRow).toHaveCount(1);

    await userRow
      .getByRole("button")
      .filter({
        has: this.page.locator("i.bi-trash"),
      })
      .click();

    const confirmationDialog = this.page.getByRole("dialog");

    await expect(confirmationDialog).toBeVisible();

    await confirmationDialog
      .getByRole("button", {
        name: "No, Cancel",
        exact: true,
      })
      .click();

    await expect(confirmationDialog).toBeHidden();

    await expect(userRow).toBeVisible();
  }
  async getVisibleSystemUsernames(): Promise<string[]> {
    await expect(this.loadingSpinner).toBeHidden();

    await expect(this.userRows.first()).toBeVisible({
      timeout: 15_000,
    });

    return this.userRows.locator(".oxd-table-cell").nth(1).allInnerTexts();
  }

  async goToNextSystemUsersPage(): Promise<void> {
    await expect(this.nextPageButton).toBeVisible();

    await expect(this.nextPageButton).toBeEnabled();

    await this.nextPageButton.click();

    await expect(this.loadingSpinner).toBeHidden();
  }

  async goToPreviousSystemUsersPage(): Promise<void> {
    await expect(this.previousPageButton).toBeVisible();

    await expect(this.previousPageButton).toBeEnabled();

    await this.previousPageButton.click();

    await expect(this.loadingSpinner).toBeHidden();
  }

  async selectSystemUsers(usernames: string[]): Promise<void> {
    for (const username of usernames) {
      const userRow = this.userRows.filter({
        has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
          exact: true,
        }),
      });

      await expect(userRow).toHaveCount(1);

      const checkbox = userRow.locator('input[type="checkbox"]');

      await checkbox.check({
        force: true,
      });

      await expect(checkbox).toBeChecked();
    }
  }

  async selectAllVisibleSystemUsers(): Promise<void> {
    await expect(this.loadingSpinner).toBeHidden();

    const headerCheckboxLabel = this.page.locator(
      ".oxd-table-header " + ".oxd-checkbox-wrapper label",
    );

    const headerCheckbox = this.page.locator(
      ".oxd-table-header " + 'input[type="checkbox"]',
    );

    // Exclude disabled row checkboxes.
    const selectableRowCheckboxes = this.userRows.locator(
      'input[type="checkbox"]:not(:disabled)',
    );

    const selectableRowCount = await selectableRowCheckboxes.count();

    expect(selectableRowCount).toBeGreaterThan(0);

    await headerCheckboxLabel.click();

    await expect(headerCheckbox).toBeChecked();

    await expect
      .poll(
        async () =>
          selectableRowCheckboxes.evaluateAll(
            (checkboxes) =>
              checkboxes.filter(
                (checkbox) => (checkbox as HTMLInputElement).checked,
              ).length,
          ),
        {
          timeout: 15_000,
        },
      )
      .toBe(selectableRowCount);
  }

  async deselectAllVisibleSystemUsers(): Promise<void> {
    const headerCheckboxLabel = this.page.locator(
      ".oxd-table-header " + ".oxd-checkbox-wrapper label",
    );

    const headerCheckbox = this.page.locator(
      ".oxd-table-header " + 'input[type="checkbox"]',
    );

    const selectableRowCheckboxes = this.userRows.locator(
      'input[type="checkbox"]:not(:disabled)',
    );

    await headerCheckboxLabel.click();

    await expect(headerCheckbox).not.toBeChecked();

    await expect
      .poll(
        async () =>
          selectableRowCheckboxes.evaluateAll(
            (checkboxes) =>
              checkboxes.filter(
                (checkbox) => (checkbox as HTMLInputElement).checked,
              ).length,
          ),
        {
          timeout: 15_000,
        },
      )
      .toBe(0);
  }

  async deleteSelectedSystemUsers(): Promise<void> {
    await expect(this.deleteSelectedButton).toBeVisible({
      timeout: 15_000,
    });

    await this.deleteSelectedButton.click();

    const confirmationDialog = this.page.locator(".oxd-dialog-container");

    await expect(confirmationDialog).toBeVisible();

    const confirmDeleteButton = confirmationDialog.locator(
      "button.oxd-button--label-danger",
    );

    await expect(confirmDeleteButton).toBeVisible();

    await confirmDeleteButton.click();

    await expect(confirmationDialog).toBeHidden({
      timeout: 20_000,
    });

    await expect(
      this.toastMessage.filter({
        hasText: /Successfully Deleted/i,
      }),
    ).toBeVisible({
      timeout: 20_000,
    });

    await expect(this.loadingSpinner).toBeHidden();
  }

  async updateSystemUsername(updatedUsername: string): Promise<void> {
    await this.addUsernameInput.fill(updatedUsername);

    await this.addUsernameInput.blur();

    await expect(this.addUsernameInput).toHaveValue(updatedUsername);

    await expect(this.usernameValidation).toBeHidden();

    const updatedToast = expect(
      this.toastMessage.filter({
        hasText: /Successfully Updated/i,
      }),
    ).toBeVisible({
      timeout: 20_000,
    });

    await this.editUserSaveButton.click();

    await expect(this.page).toHaveURL(/admin\/viewSystemUsers/, {
      timeout: 20_000,
    });

    await updatedToast;

    await expect(this.systemUsersHeading).toBeVisible();
  }
}
