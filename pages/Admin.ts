import { Locator, Page, expect } from "@playwright/test";
import { ConfirmationDialog } from "../components/ConfirmationDialog";
import { waitForListResult } from "../components/ListResult";
import { createAdminLocators } from "../locators/adminLocators";

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
  readonly confirmationDialog: ConfirmationDialog;
  readonly userManagementMenu!: Locator;
  readonly usersMenuItem!: Locator;
  readonly systemUsersHeading!: Locator;
  readonly usernameInput!: Locator;
  readonly userRoleDropdown!: Locator;
  readonly employeeNameInput!: Locator;
  readonly statusDropdown!: Locator;
  readonly searchButton!: Locator;
  readonly resetButton!: Locator;
  readonly addButton!: Locator;
  readonly systemUsersTable!: Locator;
  readonly userRows!: Locator;
  readonly loadingSpinner!: Locator;
  readonly noRecordsFound!: Locator;
  readonly addUserHeading!: Locator;
  readonly addUserRoleDropdown!: Locator;
  readonly addEmployeeNameInput!: Locator;
  readonly addStatusDropdown!: Locator;
  readonly addUsernameInput!: Locator;
  readonly addPasswordInput!: Locator;
  readonly addConfirmPasswordInput!: Locator;
  readonly addUserSaveButton!: Locator;
  readonly addUserCancelButton!: Locator;
  readonly autocompleteOptions!: Locator;
  readonly successToast!: Locator;
  readonly validationMessages!: Locator;
  readonly toastMessage!: Locator;
  readonly usernameValidation!: Locator;
  readonly confirmPasswordValidation!: Locator;
  readonly editUserHeading!: Locator;
  readonly editStatusDropdown!: Locator;
  readonly editUserSaveButton!: Locator;
  readonly deleteSelectedButton!: Locator;
  readonly nextPageButton!: Locator;
  readonly previousPageButton!: Locator;
  readonly passwordValidation!: Locator;
  readonly employeeNameValidation!: Locator;
  private readonly locators: ReturnType<typeof createAdminLocators>;

  constructor(page: Page) {
    this.page = page;
    this.confirmationDialog = new ConfirmationDialog(page);
    this.locators = createAdminLocators(page);
    Object.assign(this, this.locators);
  }
  async gotoUserManagementUsers(): Promise<void> {
    await this.userManagementMenu.click();
    await this.usersMenuItem.click();
    await expect(this.systemUsersHeading).toBeVisible();
    await waitForListResult(
      this.loadingSpinner,
      this.userRows,
      this.noRecordsFound,
    );
  }

  private async selectDropdownOption(
    dropdown: Locator,
    option: string,
  ): Promise<void> {
    await dropdown.click();

    const dropdownOption = this.locators.selectOption(option);

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

      const employeeOption = this.locators.employeeAutocompleteOption(
        filters.employeeName,
      );

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
      ? this.locators.userRow(expected.username)
      : this.userRows.first();

    await expect(matchingRow).toHaveCount(1);

    const cells = this.locators.tableCells(matchingRow);

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
    const resetResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/admin/users") &&
        response.request().method() === "GET" &&
        response.ok(),
      { timeout: 20_000 },
    );

    await this.resetButton.click();
    await resetResponse;
    await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });

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
    const matchingRow = this.locators.userRow(username);

    await expect(matchingRow).toHaveCount(1);

    await this.locators
      .rowActionButton(matchingRow, "i.bi-trash, i.bi-trash-fill")
      .click();

    const confirmationDialog = this.confirmationDialog.root;

    await expect(confirmationDialog).toBeVisible();

    const deleteResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/admin/users") &&
        response.request().method() === "DELETE" &&
        response.ok(),
      {
        timeout: 15_000,
      },
    );

    // Start waiting before clicking because the toast
    // may disappear quickly.
    const deletedToastAppears = expect(
      this.toastMessage.filter({
        hasText: /Successfully Deleted/i,
      }),
    ).toBeVisible({
      timeout: 10_000,
    });

    await this.confirmationDialog.confirmDelete();

    await Promise.all([deleteResponse, deletedToastAppears]);

    await expect(confirmationDialog).toBeHidden();
  }

  async openSystemUserForEditing(username: string): Promise<void> {
    const userRow = this.locators.userRow(username);

    await expect(userRow).toHaveCount(1);

    await this.locators.rowActionButton(userRow, "i.bi-pencil-fill").click();

    await expect(this.page).toHaveURL(/admin\/saveSystemUser\/\d+/);

    await expect(this.editUserHeading).toBeVisible();
  }

  async updateSystemUserStatus(status: string): Promise<void> {
    await this.editStatusDropdown.click();

    await this.locators.selectOption(status).click();

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
    const userRow = this.locators.userRow(username);

    await expect(userRow).toHaveCount(1);

    await this.locators.rowActionButton(userRow, "i.bi-trash").click();

    const confirmationDialog = this.confirmationDialog.root;

    await expect(confirmationDialog).toBeVisible();

    await this.confirmationDialog.cancel();

    await expect(confirmationDialog).toBeHidden();

    await expect(userRow).toBeVisible();
  }
  async getVisibleSystemUsernames(): Promise<string[]> {
    await expect(this.loadingSpinner).toBeHidden();

    await expect(this.userRows.first()).toBeVisible({
      timeout: 15_000,
    });

    return this.locators.usernamesColumn().allInnerTexts();
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
      const userRow = this.locators.userRow(username);

      await expect(userRow).toHaveCount(1);

      const checkbox = this.locators.rowCheckbox(userRow);
      const checkboxLabel = this.locators.rowCheckboxLabel(userRow);

      await expect(checkboxLabel).toBeVisible();
      await checkboxLabel.click();

      await expect(checkbox).toBeChecked();
    }

    await expect(this.deleteSelectedButton).toBeVisible({ timeout: 15_000 });
    await expect(this.deleteSelectedButton).toBeEnabled();
  }

  async selectAllVisibleSystemUsers(): Promise<void> {
    await expect(this.loadingSpinner).toBeHidden();

    const headerCheckboxLabel = this.locators.headerCheckboxLabel();
    const headerCheckbox = this.locators.headerCheckbox();

    // OrangeHRM protects the built-in logged-in Admin row, but its hidden
    // checkbox does not have a native disabled attribute.
    const selectableRowCheckboxes = this.locators.selectableRowCheckboxes();

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
    const headerCheckboxLabel = this.locators.headerCheckboxLabel();
    const headerCheckbox = this.locators.headerCheckbox();
    const selectableRowCheckboxes = this.locators.selectableRowCheckboxes();

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
    await expect(this.deleteSelectedButton).toBeEnabled();

    await this.deleteSelectedButton.click();

    const confirmationDialog = this.confirmationDialog.root;

    await expect(confirmationDialog).toBeVisible();

    const confirmDeleteButton = this.confirmationDialog.confirmDeleteButton;

    await expect(confirmDeleteButton).toBeVisible();
    await expect(confirmDeleteButton).toBeEnabled();

    const deleteResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/admin/users") &&
        response.request().method() === "DELETE" &&
        response.ok(),
      { timeout: 20_000 },
    );

    await confirmDeleteButton.click();
    await deleteResponse;

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
    await this.addUsernameInput.click();
    await this.addUsernameInput.press("ControlOrMeta+A");
    await this.addUsernameInput.pressSequentially(updatedUsername);

    await this.addUsernameInput.blur();

    await expect(this.addUsernameInput).toHaveValue(updatedUsername);

    await expect(this.usernameValidation).toBeHidden();
    await expect(this.editUserSaveButton).toBeEnabled();

    const updateUserResponse = this.page.waitForResponse(
      (response) =>
        /\/api\/v2\/admin\/users\/\d+$/.test(response.url()) &&
        response.request().method() === "PUT" &&
        response.ok(),
      { timeout: 20_000 },
    );

    await this.editUserSaveButton.click();
    const response = await updateUserResponse;
    const requestBody = response.request().postDataJSON() as {
      username?: string;
    };
    expect(requestBody.username).toBe(updatedUsername);

    await expect(this.page).toHaveURL(/admin\/viewSystemUsers/, {
      timeout: 20_000,
    });
    await expect(this.systemUsersHeading).toBeVisible();
  }
}
