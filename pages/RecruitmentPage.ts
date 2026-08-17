import { expect, type Locator, type Page } from "@playwright/test";

const DEFAULT_TIMEOUT = 15_000;
const API_TIMEOUT = 20_000;

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");


export interface CandidateDetails {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  contactNumber?: string;
  keywords?: string;
  notes?: string;
  consent?: boolean;
}

export interface CreatedCandidate {
  candidateId: string;
  vacancy: string;
}

export interface UpdateCandidateDetails {
  email?: string;
  contactNumber?: string;
  keywords?: string;
  notes?: string;
}

export class RecruitmentPage {
  readonly candidateLink: Locator;
  readonly candidatePageHeading: Locator;
  readonly candidateNameInput: Locator;
  readonly keywordsInput: Locator;
  readonly jobTitleDropdown: Locator;
  readonly vacancyDropdown: Locator;
  readonly hiringManagerDropdown: Locator;
  readonly candidateStatusDropdown: Locator;
  readonly dropdownOptions: Locator;
  readonly dateOfApplicationGroup: Locator;
  readonly fromDateInput: Locator;
  readonly toDateInput: Locator;
  readonly restButton: Locator;
  readonly searchButton: Locator;
  readonly candidatesTable: Locator;
  readonly candidateRows: Locator;
  readonly noRecordsFound: Locator;
  readonly loadingSpinner: Locator;
  readonly dateValidationMessages: Locator;
  readonly toDateValidation: Locator;
  readonly candidateAutocompleteDropdown: Locator;
readonly candidateAutocompleteNoRecords: Locator;
readonly candidateNameValidation: Locator;
readonly addCandidateButton: Locator;
readonly addCandidateHeading: Locator;
readonly firstNameInput: Locator;
readonly middleNameInput: Locator;
readonly lastNameInput: Locator;
readonly addCandidateVacancyDropdown: Locator;
readonly emailInput: Locator;
readonly contactNumberInput: Locator;
readonly resumeInput: Locator;
 readonly addkeywordsInput: Locator;
readonly applicationDateInput: Locator;
readonly notesInput: Locator;
readonly consentCheckbox: Locator;
readonly consentCheckboxLabel: Locator;
readonly saveButton: Locator;
readonly cancelButton: Locator;
readonly resumeUploadControl: Locator;
readonly requiredValidationMessages: Locator;
readonly successToast: Locator;
readonly firstNameValidation: Locator;
readonly lastNameValidation: Locator;
readonly emailValidation: Locator;
readonly candidateProfileHeading: Locator;
readonly updatedcandidateProfileHeading: Locator;
readonly editCandidateButton: Locator;
readonly updateSuccessToast: Locator;

  constructor(readonly page: Page) {
    this.candidateLink = page.getByRole("link", {
      name: "Candidates",
      exact: true,
    });
    this.candidatePageHeading = page.getByRole("heading", {
      name: "Candidates",
      exact: true,
    });
    this.candidateNameInput = page.getByRole("textbox", {
      name: "Type for hints...",
      exact: true,
    });
    this.keywordsInput = page.getByRole("textbox", {
      name: "Enter comma seperated words...",
      exact: true,
    });

    this.jobTitleDropdown = this.dropdownByLabel("Job Title");
    this.vacancyDropdown = this.dropdownByLabel("Vacancy");
    this.hiringManagerDropdown = this.dropdownByLabel("Hiring Manager");
    this.candidateStatusDropdown = this.dropdownByLabel("Status");
    this.dropdownOptions = page.locator(
      ".oxd-select-dropdown:visible .oxd-select-option",
    );

    this.dateOfApplicationGroup = this.inputGroupByLabel(
      "Date of Application",
    );
    this.fromDateInput = page.getByRole("textbox", {
      name: "From",
      exact: true,
    });
    this.toDateInput = page.getByRole("textbox", {
      name: "To",
      exact: true,
    });

    this.restButton = page.getByRole("button", {
      name: "Reset",
      exact: true,
    });
    this.searchButton = page.getByRole("button", {
      name: "Search",
      exact: true,
    });
    this.candidatesTable = page.locator(".orangehrm-container");
    this.candidateRows = this.candidatesTable.locator(
      ".oxd-table-body .oxd-table-card",
    );
    this.noRecordsFound = this.candidatesTable.getByText(
      "No Records Found",
      { exact: true },
    );
    this.loadingSpinner = page.locator(".oxd-loading-spinner");
    this.dateValidationMessages = page.locator(
      "form .oxd-input-field-error-message",
    );
    this.toDateValidation = this.toDateInput
      .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
      .locator(".oxd-input-field-error-message");

      this.candidateAutocompleteDropdown =
  page.locator(
    '.oxd-autocomplete-dropdown:visible'
  );

this.candidateAutocompleteNoRecords =
  this.candidateAutocompleteDropdown
    .getByText('No Records Found', {
      exact: true,
    });

this.candidateNameValidation =
  this.candidateNameInput
    .locator(
      'xpath=ancestor::div[contains(@class,"oxd-input-group")]'
    )
    .locator(
      '.oxd-input-field-error-message'
    );

    this.addCandidateButton = page.getByRole(
  'button',
  {
    name: 'Add',
    exact: true,
  }
);

this.addCandidateButton = page
  .locator('.orangehrm-header-container')
  .getByRole('button', {
    name: /Add/i,
  });
   this.addCandidateHeading = page.getByRole(
    'heading',
    {
      name: 'Add Candidate',
      exact: true,
    }
  );



this.resumeUploadControl = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Resume', {
        exact: true,
      }),
  })
  .locator('.oxd-file-div');

this.firstNameInput = page.getByPlaceholder(
  'First Name',
  {
    exact: true,
  }
);

this.middleNameInput = page.getByPlaceholder(
  'Middle Name',
  {
    exact: true,
  }
);

this.lastNameInput = page.getByPlaceholder(
  'Last Name',
  {
    exact: true,
  }
);

this.addCandidateVacancyDropdown = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Vacancy', {
        exact: true,
      }),
  })
  .locator('.oxd-select-text');

this.emailInput = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Email', {
        exact: true,
      }),
  })
  .locator('input');

this.contactNumberInput = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Contact Number', {
        exact: true,
      }),
  })
  .locator('input');

this.resumeInput = page.locator(
  'input[type="file"]'
);

this.addkeywordsInput = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Keywords', {
        exact: true,
      }),
  })
  .locator('input');

this.applicationDateInput = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Date of Application', {
        exact: true,
      }),
  })
  .locator('input');

this.notesInput = page
  .locator('.oxd-input-group')
  .filter({
    has: page
      .locator('label')
      .getByText('Notes', {
        exact: true,
      }),
  })
  .locator('textarea');

const consentInputGroup = page
  .locator('.oxd-input-group')
  .filter({ hasText: /Consent to keep data/i });

this.consentCheckbox = consentInputGroup
  .locator('input[type="checkbox"]');

this.consentCheckboxLabel = consentInputGroup
  .locator('label')
  .filter({ has: page.locator('input[type="checkbox"]') });

this.saveButton = page.getByRole(
  'button',
  {
    name: 'Save',
    exact: true,
  }
);

this.cancelButton = page.getByRole(
  'button',
  {
    name: 'Cancel',
    exact: true,
  }
);

this.requiredValidationMessages = page.locator(
  'form .oxd-input-field-error-message'
);

this.successToast = page
  .locator('.oxd-toast')
  .filter({
    hasText: /Successfully Saved/i,
  });

  this.requiredValidationMessages =
  page.locator(
    'form .oxd-input-field-error-message'
  );

this.firstNameValidation =
  this.firstNameInput
    .locator(
      'xpath=ancestor::div[contains(@class,"oxd-input-group")]'
    )
    .locator(
      '.oxd-input-field-error-message'
    );

this.lastNameValidation =
  this.lastNameInput
    .locator(
      'xpath=ancestor::div[contains(@class,"oxd-input-group")]'
    )
    .locator(
      '.oxd-input-field-error-message'
    );

this.emailValidation =
  this.emailInput
    .locator(
      'xpath=ancestor::div[contains(@class,"oxd-input-group")]'
    )
    .locator(
      '.oxd-input-field-error-message'
    );

this.successToast = page
  .locator('.oxd-toast')
  .filter({
    hasText: /Successfully Saved/i,
  });

  this.candidateProfileHeading = page.getByRole(
  'heading',
  {
    name: 'Candidate Profile',
    exact: true,
  }
);

this.updatedcandidateProfileHeading = page.getByRole(
  'heading',
  {
    name: 'Candidate Profile',
    exact: true,
  }
);

this.editCandidateButton = page
  .locator('.oxd-switch-wrapper')
  .filter({ hasText: /Edit/i })
  .locator('label');

this.updateSuccessToast = page
  .locator('.oxd-toast-content-text')
  .filter({
    hasText: /Successfully Updated/i,
  });
  }

  async navigateToCandidate(): Promise<void> {
    await this.candidateLink.click();
    await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
    await expect(this.candidatePageHeading).toBeVisible();
  }

  async searchCandidates(): Promise<void> {
    const candidatesResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/recruitment/candidates") &&
        response.request().method() === "GET" &&
        response.ok(),
      { timeout: API_TIMEOUT },
    );

    await this.searchButton.click();
    await candidatesResponse;
    await expect(this.loadingSpinner).toBeHidden({ timeout: API_TIMEOUT });
  }

  async selectDropdownOption(
    dropdown: Locator,
    optionText: string,
  ): Promise<void> {
    await expect(dropdown).toBeVisible();
    await dropdown.click();

    const option = this.visibleDropdown()
      .locator(".oxd-select-option")
      .filter({
        hasText: new RegExp(`^\\s*${escapeRegExp(optionText)}\\s*$`, "i"),
      })
      .first();

    await expect(option).toBeVisible({ timeout: DEFAULT_TIMEOUT });
    await option.click();
    await expect(dropdown).toContainText(optionText);
  }

  async selectFirstAvailableVacancy(): Promise<string> {
    return this.selectFirstAvailableDropdownOption(this.vacancyDropdown);
  }

  async selectFirstAvailableHiringManager(): Promise<string> {
    return this.selectFirstAvailableDropdownOption(
      this.hiringManagerDropdown,
    );
  }

async selectFirstAvailableCandidate(
  searchText: string
): Promise<string> {
  await this.candidateNameInput.fill(
    searchText
  );

  const dropdown = this.page.locator(
    '.oxd-autocomplete-dropdown:visible'
  );

  await expect(dropdown).toBeVisible({
    timeout: 15_000,
  });

  const options = dropdown
    .locator('.oxd-autocomplete-option')
    .filter({
      hasNotText:
        /Searching|No Records Found/i,
    });

  const option = options.first();

  await expect(option).toBeVisible({
    timeout: 30_000,
  });

  const selectedCandidate = (
    await option.innerText()
  ).trim();

  await option.click();

  await expect(
    this.candidateNameInput
  ).toHaveValue(selectedCandidate);

  return selectedCandidate;
}

  private inputGroupByLabel(label: string): Locator {
    return this.page.locator(".oxd-input-group").filter({
      has: this.page.locator("label").getByText(label, { exact: true }),
    });
  }

  private dropdownByLabel(label: string): Locator {
    return this.inputGroupByLabel(label).locator(".oxd-select-text");
  }

  private visibleDropdown(): Locator {
    return this.page.locator(".oxd-select-dropdown:visible");
  }

  private async selectFirstAvailableDropdownOption(
    dropdown: Locator,
  ): Promise<string> {
    await expect(dropdown).toBeVisible();
    await dropdown.click();

    const options = this.visibleDropdown()
      .locator(".oxd-select-option")
      .filter({ hasNotText: /^(-- Select --|No Records Found)$/ });
    const firstOption = options.first();

    await expect(firstOption).toBeVisible({ timeout: DEFAULT_TIMEOUT });
    const selectedText = (await firstOption.innerText()).trim();

    await firstOption.click();
    await expect(dropdown).toContainText(selectedText);

    return selectedText;
  }

  async selectFirstAvailableAddCandidateVacancy():
Promise<string | null> {
  await this.addCandidateVacancyDropdown.click();

  const visibleDropdown = this.page.locator(
    '.oxd-select-dropdown:visible'
  );

  await expect(
    visibleDropdown
  ).toBeVisible();

  const validOptions = visibleDropdown
    .locator('.oxd-select-option')
    .filter({
      hasNotText:
        /-- Select --|No Records Found|Searching/i,
    });

  const noRecordsOption = visibleDropdown
    .locator('.oxd-select-option')
    .filter({ hasText: /No Records Found/i });

  await validOptions
    .first()
    .or(noRecordsOption)
    .waitFor({
      state: 'visible',
      timeout: DEFAULT_TIMEOUT,
    })
    .catch(() => undefined);

  const optionCount =
    await validOptions.count();

  if (optionCount === 0) {
    await this.page.keyboard.press('Escape');
    return null;
  }

  const firstOption =
    validOptions.first();

  const vacancyName = (
    await firstOption.innerText()
  ).trim();

  await firstOption.click();

  await expect(
    this.addCandidateVacancyDropdown
  ).toContainText(vacancyName);

  return vacancyName;
}

async createCandidate(
  details: CandidateDetails
): Promise<CreatedCandidate> {
  await this.firstNameInput.fill(
    details.firstName
  );

  if (details.middleName !== undefined) {
    await this.middleNameInput.fill(
      details.middleName
    );
  }

  await this.lastNameInput.fill(
    details.lastName
  );

  const vacancy =
    await this
      .selectFirstAvailableAddCandidateVacancy();

  await this.emailInput.fill(
    details.email
  );

  if (details.contactNumber !== undefined) {
    await this.contactNumberInput.fill(
      details.contactNumber
    );
  }

  if (details.keywords !== undefined) {
    await this.keywordsInput.fill(
      details.keywords
    );
  }

  if (details.notes !== undefined) {
    await this.notesInput.fill(
      details.notes
    );
  }

  if (details.consent === true) {
    const isChecked =
      await this.consentCheckbox.isChecked();

    if (!isChecked) {
      await this.consentCheckboxLabel.click();
    }

    await expect(
      this.consentCheckbox
    ).toBeChecked();
  }

  const responsePromise =
    this.page.waitForResponse(
      response =>
        response.url().includes(
          '/api/v2/recruitment/candidates'
        ) &&
        response.request().method() === 'POST',
      {
        timeout: 30_000,
      }
    );

  await this.saveButton.click();

  const createResponse =
    await responsePromise;

  expect(createResponse.ok()).toBeTruthy();

  const responseBody =
    await createResponse.json();

  const candidateId = String(
    responseBody.data.id
  );

  if (!candidateId) {
    throw new Error(
      'Candidate ID was missing from the creation response'
    );
  }

  await this.page.waitForURL(
    new RegExp(
      `/recruitment/addCandidate/${candidateId}$`
    ),
    {
      timeout: 30_000,
    }
  );

  return {
    candidateId,
    vacancy,
  };
}
async deleteCandidateByName(
  candidateName: string
): Promise<void> {
  const selectedCandidate =
    await this.selectFirstAvailableCandidate(
      candidateName
    );

  if (selectedCandidate === null) {
    throw new Error(
      `Candidate was not found: ${candidateName}`
    );
  }

  await this.searchButton.click();

  await expect(
    this.loadingSpinner
  ).toBeHidden({
    timeout: 20_000,
  });

  const matchingRow = this.candidateRows
    .filter({
      has: this.page
        .locator('.oxd-table-cell')
        .nth(2)
        .filter({
          hasText: candidateName,
        }),
    })
    .first();

  await expect(matchingRow).toBeVisible({
    timeout: 20_000,
  });

  const deleteButton =
    matchingRow.getByRole('button').filter({
      has: this.page.locator(
        'i.bi-trash'
      ),
    });

  await expect(deleteButton).toBeVisible();

  await deleteButton.click();

  const confirmationDialog =
    this.page.getByRole('dialog');

  await expect(
    confirmationDialog
  ).toBeVisible();

  const deleteResponsePromise =
    this.page.waitForResponse(
      response =>
        response.url().includes(
          '/api/v2/recruitment/candidates'
        ) &&
        response.request().method() === 'DELETE',
      {
        timeout: 30_000,
      }
    );

  const deleteToast = this.page
    .locator('.oxd-toast')
    .filter({
      hasText: /Successfully Deleted/i,
    });

  const deleteToastPromise =
    expect(deleteToast).toContainText('Successfully Deleted', {
      timeout: 30_000,
    });

  const confirmDeleteButton = confirmationDialog
    .getByRole('button', {
      name: /Yes, Delete/i,
    });

  await expect(confirmDeleteButton).toBeVisible();
  await confirmDeleteButton.click();

  const [deleteResponse] = await Promise.all([
    deleteResponsePromise,
    deleteToastPromise,
  ]);

  expect(deleteResponse.ok()).toBeTruthy();

  await expect(matchingRow).toBeHidden({
    timeout: 20_000,
  });
}

async cancelCandidateDeletion(
  candidateName: string
): Promise<void> {
  const selectedCandidate =
    await this.selectFirstAvailableCandidate(
      candidateName
    );

  if (selectedCandidate === null) {
    throw new Error(
      `Candidate was not found: ${candidateName}`
    );
  }

  await this.searchButton.click();

  await expect(
    this.loadingSpinner
  ).toBeHidden({
    timeout: 20_000,
  });

  const matchingRow = this.candidateRows
    .filter({
      has: this.page
        .locator('.oxd-table-cell')
        .nth(2)
        .filter({
          hasText: candidateName,
        }),
    })
    .first();

  await expect(matchingRow).toBeVisible({
    timeout: 20_000,
  });

  const deleteButton =
    matchingRow.getByRole('button').filter({
      has: this.page.locator(
        'i.bi-trash'
      ),
    });

  await expect(deleteButton).toBeVisible();

  await deleteButton.click();

  const confirmationDialog =
    this.page.getByRole('dialog');

  await expect(
    confirmationDialog
  ).toBeVisible();

  await confirmationDialog
    .getByRole('button', {
      name: 'No, Cancel',
      exact: true,
    })
    .click();

  await expect(
    confirmationDialog
  ).toBeHidden();

  await expect(
    matchingRow
  ).toBeVisible();
}

async updateCandidateDetails(
  details: UpdateCandidateDetails
): Promise<void> {
  // Some OrangeHRM versions open the profile
  // in read-only mode and display an Edit button.
  const emailAlreadyEditable = await this.emailInput
    .isEditable()
    .catch(() => false);

  if (!emailAlreadyEditable) {
    await expect(this.editCandidateButton).toBeVisible({
      timeout: 20_000,
    });
    await this.editCandidateButton.click();
  }

  await expect(
    this.emailInput
  ).toBeEditable();

  if (details.email !== undefined) {
    await this.emailInput.fill(
      details.email
    );
  }

  if (details.contactNumber !== undefined) {
    await this.contactNumberInput.fill(
      details.contactNumber
    );
  }

  if (details.keywords !== undefined) {
    await this.keywordsInput.fill(
      details.keywords
    );
  }

  if (details.notes !== undefined) {
    await this.notesInput.fill(
      details.notes
    );
  }

  if (details.email !== undefined) {
    await expect(
      this.emailInput
    ).toHaveValue(details.email);
  }

  if (details.contactNumber !== undefined) {
    await expect(
      this.contactNumberInput
    ).toHaveValue(details.contactNumber);
  }

  const updateResponsePromise =
    this.page.waitForResponse(
      response =>
        response.url().includes(
          '/api/v2/recruitment/candidates/'
        ) &&
        response.request().method() === 'PUT',
      {
        timeout: 30_000,
      }
    );

  await this.saveButton.click();

  const updateResponse =
    await updateResponsePromise;

  expect(updateResponse.ok()).toBeTruthy();

  if (details.email !== undefined) {
    await expect(
      this.emailInput
    ).toHaveValue(details.email);
  }

  if (details.contactNumber !== undefined) {
    await expect(
      this.contactNumberInput
    ).toHaveValue(details.contactNumber);
  }

  if (details.keywords !== undefined) {
    await expect(
      this.keywordsInput
    ).toHaveValue(details.keywords);
  }

  if (details.notes !== undefined) {
    await expect(
      this.notesInput
    ).toHaveValue(details.notes);
  }
}

async openCandidateProfile(
  candidateName: string
): Promise<void> {
  const selectedCandidate =
    await this.selectFirstAvailableCandidate(
      candidateName
    );

  if (selectedCandidate === null) {
    throw new Error(
      `Candidate was not found: ${candidateName}`
    );
  }

  await expect(
    this.candidateNameInput
  ).toHaveValue(selectedCandidate);

  await this.searchButton.click();

  await expect(
    this.loadingSpinner
  ).toBeHidden({
    timeout: 20_000,
  });

  const matchingRow = this.candidateRows
    .filter({
      has: this.page
        .locator('.oxd-table-cell')
        .nth(2)
        .filter({
          hasText: candidateName,
        }),
    })
    .first();

  await expect(matchingRow).toBeVisible({
    timeout: 20_000,
  });

  const viewButton =
    matchingRow.getByRole('button').filter({
      has: this.page.locator(
        'i.bi-eye-fill'
      ),
    });

  await expect(viewButton).toBeVisible();

  await viewButton.click();

  await this.page.waitForURL(
    /\/recruitment\/addCandidate\/\d+$/,
    {
      timeout: 30_000,
    }
  );

  await expect(
    this.candidateProfileHeading
  ).toBeVisible();
}

}
