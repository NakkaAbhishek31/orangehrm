import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import loginData from "../../test-data/login.data.json";
import recruitmentData from "../../test-data/recruitment.data.json";

const dateFromOffset = (daysOffset: number): string => {
  const date = new Date();

  date.setDate(date.getDate() + daysOffset);

  const year = date.getFullYear();

  const day = String(date.getDate()).padStart(2, "0");

  const month = String(date.getMonth() + 1).padStart(2, "0");

  return `${year}-${day}-${month}`;
};

test.describe("Recruitment - Candidates", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage();
    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );
    await loginPage.verifyLoginSuccessful();
  });

  test("TC_RECRUITMENT_133 - Admin should navigate to the Candidates page @smoke @navigation @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_133;
    // Click Recruitment in the main navigation.
    await navigationPage.gotoRecruitment();
    // Navigate to Candidates.
    await recruitmentPage.navigateToCandidate();
    // Verify the Candidates URL.
    await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
    // Verify the Candidates heading.

    await expect(recruitmentPage.candidatePageHeading).toHaveText(
      data.pageHeading,
    );
    // Verify Job Title filter.
    await expect(recruitmentPage.jobTitleDropdown).toBeVisible();
    // Verify Vacancy filter.
    await expect(recruitmentPage.vacancyDropdown).toBeVisible();

    // Verify Hiring Manager filter.
    await expect(recruitmentPage.hiringManagerDropdown).toBeVisible();

    // Verify Candidate Status filter.
    await expect(recruitmentPage.candidateStatusDropdown).toBeVisible();

    // Verify Candidate Name input.
    await expect(recruitmentPage.candidateNameInput).toBeVisible();

    // Verify From Date and To Date.
    await expect(recruitmentPage.fromDateInput).toBeVisible();
    await expect(recruitmentPage.toDateInput).toBeVisible();
    // Verify Search and Reset buttons.
    await expect(recruitmentPage.restButton).toBeVisible();
    await expect(recruitmentPage.searchButton).toBeVisible();

    // Verify the Candidates results table.
    await expect(recruitmentPage.candidatesTable).toBeVisible();
  });

  test("TC_RECRUITMENT_134 - Admin should search Candidates using a valid application date range @positive @search @regression", async ({
    navigationPage,
    recruitmentPage,
  }) => {
    // Read the date offsets from recruitment JSON data.
    const data = recruitmentData.TC_RECRUITMENT_134;
    // Generate From Date and To Date dynamically.
    const fromDate = dateFromOffset(data.fromDaysOffset);

    const toDate = dateFromOffset(data.toDaysOffset);

    // Navigate to Recruitment → Candidates.
    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    // Wait until both application date fields are visible.
    await expect(recruitmentPage.fromDateInput).toBeVisible();
    await expect(recruitmentPage.toDateInput).toBeVisible();
    // Fill the From Date.
    // Fill the To Date.
    await recruitmentPage.fromDateInput.fill(fromDate);
    await recruitmentPage.toDateInput.fill(toDate);
    // Click Search.
    await recruitmentPage.searchCandidates();

    // Wait for the loading spinner to disappear.
    await expect(recruitmentPage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });
    // Verify both entered date values remain displayed.
    await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);
    await expect(recruitmentPage.toDateInput).toHaveValue(toDate);

    await expect(
      recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    // Verify no date-validation messages appear.
    await expect(recruitmentPage.dateValidationMessages).toHaveCount(0);

    // Reset the filters.
    await recruitmentPage.restButton.click();
  });

  test("TC_RECRUITMENT_135 - Validation should appear when From Date is later than To Date @negative @validation @regression", async ({
    navigationPage,
    recruitmentPage,
  }) => {
    // Read the invalid date offsets from JSON.
    const data = recruitmentData.TC_RECRUITMENT_135;

    // Generate a future From Date.
    const fromDate = dateFromOffset(data.fromDaysOffset);

    // Generate an earlier To Date.
    const toDate = dateFromOffset(data.toDaysOffset);
    // Navigate to Recruitment → Candidates.
    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    // Fill the From Date with the later date.
    await recruitmentPage.fromDateInput.fill(fromDate);
    // Fill the To Date with the earlier date.

    await recruitmentPage.toDateInput.fill(toDate);

    await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);

    await expect(recruitmentPage.toDateInput).toHaveValue(toDate);

    // Click Search.
    await recruitmentPage.searchCandidates();
    // Verify the To Date validation message appears.
    await expect(recruitmentPage.toDateValidation).toBeVisible();
    await expect(recruitmentPage.toDateValidation).toHaveText(
      data.validationMessage,
    );

    // Reset the filters.
    await recruitmentPage.restButton.click();

    await expect(recruitmentPage.toDateValidation).toBeHidden();
  });

  test("TC_RECRUITMENT_136 - Admin should reset Candidate search filters @positive @filter @regression", async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_136;

    const fromDate = dateFromOffset(data.fromDaysOffset);

    const toDate = dateFromOffset(data.toDaysOffset);

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();

    // Store the default date values before changing them.
    const defaultFromDate = await recruitmentPage.fromDateInput.inputValue();

    const defaultToDate = await recruitmentPage.toDateInput.inputValue();

    await recruitmentPage.selectDropdownOption(
      recruitmentPage.jobTitleDropdown,
      data.jobTitle,
    );

    await recruitmentPage.selectDropdownOption(
      recruitmentPage.candidateStatusDropdown,
      data.candidateStatus,
    );

    await recruitmentPage.fromDateInput.fill(fromDate);

    await recruitmentPage.toDateInput.fill(toDate);

    await expect(recruitmentPage.jobTitleDropdown).toContainText(data.jobTitle);

    await expect(recruitmentPage.candidateStatusDropdown).toContainText(
      data.candidateStatus,
    );

    await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);

    await expect(recruitmentPage.toDateInput).toHaveValue(toDate);

    await recruitmentPage.restButton.click();

    await expect(recruitmentPage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );

    await expect(recruitmentPage.candidateStatusDropdown).toContainText(
      data.defaultDropdownValue,
    );

    await expect(recruitmentPage.fromDateInput).toHaveValue(defaultFromDate);

    await expect(recruitmentPage.toDateInput).toHaveValue(defaultToDate);

    await expect(recruitmentPage.candidatesTable).toBeVisible();

    await expect(
      recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });
  });

  test("TC_RECRUITMENT_137 - Admin should filter Candidates by job title @positive @filter @regression", async ({
    navigationPage,
    recruitmentPage,
  }) => {
    // Read the configured Job Title from JSON.
    const data = recruitmentData.TC_RECRUITMENT_136;
    // Navigate to Recruitment → Candidates.
    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    // Select the configured Job Title.
    await recruitmentPage.selectDropdownOption(
      recruitmentPage.jobTitleDropdown,
      data.jobTitle,
    );
    // Verify the selected Job Title remains displayed.
    await expect(recruitmentPage.jobTitleDropdown).toContainText(data.jobTitle);
    // Click Search.
    await recruitmentPage.searchCandidates();
    // Wait for the loading spinner to disappear.
    await expect(recruitmentPage.loadingSpinner).toBeHidden();
    await expect(
      recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const candidateCount = await recruitmentPage.candidateRows.count();

    if (candidateCount > 0) {
      await expect(recruitmentPage.candidateRows.first()).toBeVisible();
    } else {
      await expect(recruitmentPage.noRecordsFound).toBeVisible();
    }

    await recruitmentPage.restButton.click();

    await expect(recruitmentPage.jobTitleDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_RECRUITMENT_138 - Admin should filter Candidates by candidate status @positive @filter @regression", async ({
    navigationPage,
    recruitmentPage,
  }) => {
    // Read Candidate Status and default dropdown value from JSON.
    const data = recruitmentData.TC_RECRUITMENT_138;
    // Navigate to Recruitment → Candidates.
    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    // Select the configured Candidate Status.
    await recruitmentPage.selectDropdownOption(
      recruitmentPage.candidateStatusDropdown,
      data.candidateStatus,
    );
    // Verify Candidate Status remains selected.
    await expect(recruitmentPage.candidateStatusDropdown).toContainText(
      data.candidateStatus,
    );
    // Click Search.
    await recruitmentPage.searchCandidates();

    // Wait for the loading spinner to disappear.
    await expect(recruitmentPage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(
      recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });
    const statusTexts = await recruitmentPage.candidateRows
      .locator(".oxd-table-cell:nth-child(6)")
      .allTextContents();

    if (statusTexts.length > 0) {
      for (const statusText of statusTexts) {
        expect(statusText).toContain(data.candidateStatus);
      }
    } else {
      await expect(recruitmentPage.noRecordsFound).toBeVisible();
    }
    // Reset the filters.
    await recruitmentPage.restButton.click();
    // Verify Candidate Status returns to “-- Select --”.

    await expect(recruitmentPage.candidateStatusDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_RECRUITMENT_139 - Admin should filter Candidates by vacancy @positive @filter @regression", async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_139;
    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    const selectedVacancy = await recruitmentPage.selectFirstAvailableVacancy();

    await expect(recruitmentPage.vacancyDropdown).toContainText(
      selectedVacancy,
    );

    await recruitmentPage.searchCandidates();

    await expect(recruitmentPage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(
      recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const vacancyTexts = await recruitmentPage.candidateRows
      .locator(".oxd-table-cell:nth-child(2)")
      .allTextContents();

    if (vacancyTexts.length > 0) {
      for (const vacancyText of vacancyTexts) {
        expect(vacancyText).toContain(selectedVacancy);
      }
    } else {
      await expect(recruitmentPage.noRecordsFound).toBeVisible();
    }

    await recruitmentPage.restButton.click();

    await expect(recruitmentPage.vacancyDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });
  test("TC_RECRUITMENT_140 - Admin should filter Candidates by hiring manager @positive @filter @regression", async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_140;

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();

    const selectedManager =
      await recruitmentPage.selectFirstAvailableHiringManager();

    await expect(recruitmentPage.hiringManagerDropdown).toContainText(
      selectedManager,
    );

    await recruitmentPage.searchCandidates();

    await expect(recruitmentPage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(
      recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const managerTexts = await recruitmentPage.candidateRows
      .locator(".oxd-table-cell:nth-child(4)")
      .allTextContents();

    if (managerTexts.length > 0) {
      const selectedNameParts = selectedManager.split(/\s+/).filter(Boolean);

      for (const managerText of managerTexts) {
        for (const namePart of selectedNameParts) {
          expect(managerText).toContain(namePart);
        }
      }
    } else {
      await expect(recruitmentPage.noRecordsFound).toBeVisible();
    }

    await recruitmentPage.restButton.click();

    await expect(recruitmentPage.hiringManagerDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_RECRUITMENT_141 - Admin should search for a candidate by name @positive @search @autocomplete @regression", async ({
    navigationPage,
    recruitmentPage,
  }) => {
    // Read the candidate-name search value from JSON.
    const data = recruitmentData.TC_RECRUITMENT_141;
    // Navigate to Recruitment → Candidates.

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    // Enter the candidate name into the Candidate Name field.
    await recruitmentPage.candidateNameInput.fill(data.candidateSearchText);
    // Wait for the autocomplete options.
    const selectedCandidate =
      await recruitmentPage.selectFirstAvailableCandidate(
        data.candidateSearchText,
      );

    // Click Search.
    await recruitmentPage.searchButton.click();
    // Wait for the loading spinner to disappear.
    await expect(recruitmentPage.loadingSpinner).toBeHidden();
    // Verify either candidate rows or
    // “No Records Found” appears.
    await expect(
      recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });
    const candidateCount = await recruitmentPage.candidateRows.count();

    if (candidateCount > 0) {
      for (let index = 0; index < candidateCount; index++) {
        const candidateNameCell = recruitmentPage.candidateRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(2);

        await expect(candidateNameCell).toContainText(selectedCandidate!);
      }
    } else {
      await expect(recruitmentPage.noRecordsFound).toBeVisible();
    }

    await recruitmentPage.restButton.click();

    await expect(recruitmentPage.candidateNameInput).toHaveValue("");
  });

  test("TC_RECRUITMENT_142 - Invalid validation should appear for a nonexistent candidate name @negative @validation @autocomplete @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_142;

    const invalidCandidateName = `${data.candidateNamePrefix}${Date.now()}`;

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();

    await recruitmentPage.candidateNameInput.fill(invalidCandidateName);

    await expect(recruitmentPage.candidateAutocompleteDropdown).toBeVisible({
      timeout: 15_000,
    });

    await expect(recruitmentPage.candidateAutocompleteNoRecords).toHaveText(
      data.autocompleteMessage,
    );

    // Close autocomplete without selecting a value.
    await recruitmentPage.candidateNameInput.press("Escape");

    await recruitmentPage.searchButton.click();

    await expect(recruitmentPage.candidateNameValidation).toBeVisible();

    await expect(recruitmentPage.candidateNameValidation).toHaveText(
      data.validationMessage,
    );

    await expect(recruitmentPage.candidateNameInput).toHaveValue(
      invalidCandidateName,
    );

    await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);

    await recruitmentPage.restButton.click();

    await expect(recruitmentPage.candidateNameInput).toHaveValue("");

    await expect(recruitmentPage.candidateNameValidation).toBeHidden();
  });

  test("TC_RECRUITMENT_143 - Admin should search Candidates using combined vacancy, status, and date filters @positive @filter @regression", async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_143;

    const fromDate = dateFromOffset(data.fromDaysOffset);

    const toDate = dateFromOffset(data.toDaysOffset);

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();

    const selectedVacancy = await recruitmentPage.selectFirstAvailableVacancy();

    await recruitmentPage.selectDropdownOption(
      recruitmentPage.candidateStatusDropdown,
      data.candidateStatus,
    );

    await recruitmentPage.fromDateInput.fill(fromDate);

    await recruitmentPage.toDateInput.fill(toDate);

    await expect(recruitmentPage.vacancyDropdown).toContainText(
      selectedVacancy,
    );

    await expect(recruitmentPage.candidateStatusDropdown).toContainText(
      data.candidateStatus,
    );

    await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);

    await expect(recruitmentPage.toDateInput).toHaveValue(toDate);

    await recruitmentPage.searchButton.click();

    await expect(recruitmentPage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    // Verify that filters remain selected.
    await expect(recruitmentPage.vacancyDropdown).toContainText(
      selectedVacancy,
    );

    await expect(recruitmentPage.candidateStatusDropdown).toContainText(
      data.candidateStatus,
    );

    await expect(recruitmentPage.fromDateInput).toHaveValue(fromDate);

    await expect(recruitmentPage.toDateInput).toHaveValue(toDate);

    await expect(
      recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
    ).toBeVisible({
      timeout: 15_000,
    });

    const vacancyTexts = await recruitmentPage.candidateRows
      .locator(".oxd-table-cell:nth-child(2)")
      .allTextContents();
    const statusTexts = await recruitmentPage.candidateRows
      .locator(".oxd-table-cell:nth-child(6)")
      .allTextContents();

    if (vacancyTexts.length > 0) {
      expect(statusTexts).toHaveLength(vacancyTexts.length);

      for (const vacancyText of vacancyTexts) {
        expect(vacancyText).toContain(selectedVacancy);
      }

      for (const statusText of statusTexts) {
        expect(statusText).toContain(data.candidateStatus);
      }
    } else {
      await expect(recruitmentPage.noRecordsFound).toBeVisible();
    }

    await recruitmentPage.restButton.click();

    await expect(recruitmentPage.vacancyDropdown).toContainText(
      data.defaultDropdownValue,
    );

    await expect(recruitmentPage.candidateStatusDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_RECRUITMENT_144 - Admin should navigate to the Add Candidate page @smoke @navigation @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    // Navigate to Recruitment → Candidates.
    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    // Click the Add button.
    await recruitmentPage.addCandidateButton.click();
    // Verify navigation to the Add Candidate page.
    await expect(page).toHaveURL(/recruitment\/addCandidate/);
    // Verify the Add Candidate heading.
    await expect(recruitmentPage.addCandidateHeading).toBeVisible();
    // Verify First Name input.
    await expect(recruitmentPage.firstNameInput).toBeVisible();
    // Verify Middle Name input.
    await expect(recruitmentPage.middleNameInput).toBeVisible();

    // Verify Last Name input.
    await expect(recruitmentPage.lastNameInput).toBeVisible();

    // Verify Vacancy dropdown.
    await expect(recruitmentPage.addCandidateVacancyDropdown).toBeVisible();
    // Verify Email input.
    await expect(recruitmentPage.emailInput).toBeVisible();

    // Verify Contact Number input.
    await expect(recruitmentPage.contactNumberInput).toBeVisible();

    // Verify Resume upload field.

    await expect(recruitmentPage.resumeInput).toBeAttached();

    await expect(recruitmentPage.resumeUploadControl).toBeVisible();
    // Verify Keywords input.
    await expect(recruitmentPage.addkeywordsInput).toBeVisible();
    // Verify Date of Application input.
    await expect(recruitmentPage.applicationDateInput).toBeVisible();
    // Verify Notes input.
    await expect(recruitmentPage.notesInput).toBeVisible();

    // Verify Consent to Keep Data checkbox.
    await expect(recruitmentPage.consentCheckboxLabel).toBeVisible();

    // Verify Save and Cancel buttons.
    await expect(recruitmentPage.saveButton).toBeVisible();
    await expect(recruitmentPage.cancelButton).toBeVisible();
  });

  test("TC_RECRUITMENT_145 - Required validation should appear when adding an empty candidate @negative @validation @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_145;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();

    await recruitmentPage.addCandidateButton.click();

    await expect(page).toHaveURL(new RegExp(`${data.addCandidateUrlPath}$`));

    // Submit without entering any values.
    await recruitmentPage.saveButton.click();

    await expect(recruitmentPage.requiredValidationMessages).toHaveCount(
      data.requiredValidationCount,
    );

    await expect(recruitmentPage.requiredValidationMessages).toHaveText([
      data.requiredMessage,
      data.requiredMessage,
      data.requiredMessage,
    ]);

    // Verify individual required fields.
    await expect(recruitmentPage.firstNameValidation).toHaveText(
      data.requiredMessage,
    );

    await expect(recruitmentPage.lastNameValidation).toHaveText(
      data.requiredMessage,
    );

    await expect(recruitmentPage.emailValidation).toHaveText(
      data.requiredMessage,
    );

    // The user must remain on Add Candidate.
    await expect(page).toHaveURL(new RegExp(`${data.addCandidateUrlPath}$`));

    await expect(recruitmentPage.successToast).not.toBeVisible();

    await recruitmentPage.cancelButton.click();

    await expect(page).toHaveURL(new RegExp(`${data.candidatesUrlPath}$`));
  });

  test("TC_RECRUITMENT_146 - Admin should cancel adding a new candidate @negative @cancel @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    // Read candidate details from JSON.
    const data = recruitmentData.TC_RECRUITMENT_146;
    // Generate a unique candidate email.
    const uniqueValue = Date.now();
    const firstName = `${data.firstNamePrefix}${uniqueValue}`;
    const email = `${data.emailPrefix}${uniqueValue}${data.emailDomain}`;

    // Navigate to Recruitment → Candidates.
    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    // Open the Add Candidate page.
    await recruitmentPage.addCandidateButton.click();
    // Fill First Name.
    await recruitmentPage.firstNameInput.fill(firstName);
    // Fill Middle Name.
    await recruitmentPage.middleNameInput.fill(data.middleName);
    // Fill Last Name.
    await recruitmentPage.lastNameInput.fill(data.lastName);
    // Fill Email.
    await recruitmentPage.emailInput.fill(email);
    // Fill Contact Number.
    await recruitmentPage.contactNumberInput.fill(data.contactNumber);
    // Fill Keywords and Notes
    await recruitmentPage.addkeywordsInput.fill(data.keywords);
    await recruitmentPage.notesInput.fill(data.notes);
    // Verify the entered values.
    await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);
    await expect(recruitmentPage.middleNameInput).toHaveValue(data.middleName);
    await expect(recruitmentPage.lastNameInput).toHaveValue(data.lastName);
    await expect(recruitmentPage.emailInput).toHaveValue(email);
    await expect(recruitmentPage.contactNumberInput).toHaveValue(
      data.contactNumber,
    );
    await expect(recruitmentPage.addkeywordsInput).toHaveValue(data.keywords);
    await expect(recruitmentPage.notesInput).toHaveValue(data.notes);
    // Click Cancel without saving.
    await recruitmentPage.cancelButton.click();
    // Verify navigation back to Candidates.
    await expect(page).toHaveURL(/recruitment\/viewCandidates/);
    await recruitmentPage.candidateNameInput.fill(firstName);

    // Wait for autocomplete response.
    await expect(recruitmentPage.candidateAutocompleteNoRecords).toBeVisible({
      timeout: 15_000,
    });

    await recruitmentPage.candidateNameInput.press("Escape");

    await recruitmentPage.searchButton.click();

    // The cancelled candidate cannot be selected,
    // so OrangeHRM displays Invalid.
    await expect(recruitmentPage.candidateNameValidation).toHaveText("Invalid");

    await expect(recruitmentPage.candidateNameInput).toHaveValue(firstName);

    // Cleanup the filter explicitly.
    await recruitmentPage.candidateNameInput.clear();

    await expect(recruitmentPage.candidateNameInput).toHaveValue("");
  });

  test("TC_RECRUITMENT_147 - Admin should add a new candidate successfully @positive @create @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_147;

    const uniqueValue = Date.now();

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();

    await recruitmentPage.addCandidateButton.click();

    const selectedVacancy =
      await recruitmentPage.selectFirstAvailableAddCandidateVacancy();

    await recruitmentPage.firstNameInput.fill(firstName);

    await recruitmentPage.middleNameInput.fill(data.middleName);

    await recruitmentPage.lastNameInput.fill(data.lastName);

    await recruitmentPage.emailInput.fill(email);

    await recruitmentPage.contactNumberInput.fill(data.contactNumber);

    await recruitmentPage.keywordsInput.fill(data.keywords);

    await recruitmentPage.notesInput.fill(data.notes);

    // The native checkbox is hidden.
    await recruitmentPage.consentCheckboxLabel.click();

    await expect(recruitmentPage.consentCheckbox).toBeChecked();

    // Verify entered values before saving.
    await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);

    await expect(recruitmentPage.middleNameInput).toHaveValue(data.middleName);

    await expect(recruitmentPage.lastNameInput).toHaveValue(data.lastName);

    await expect(recruitmentPage.emailInput).toHaveValue(email);

    if (selectedVacancy) {
      await expect(recruitmentPage.addCandidateVacancyDropdown).toContainText(
        selectedVacancy,
      );
    }

    // Start waiting before clicking Save.
    const createCandidateResponsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/recruitment/candidates") &&
        response.request().method() === "POST",
      {
        timeout: 30_000,
      },
    );

    const successToastPromise = expect(
      recruitmentPage.successToast,
    ).toContainText(data.successMessage, {
      timeout: 30_000,
    });

    await recruitmentPage.saveButton.click();

    const [createCandidateResponse] = await Promise.all([
      createCandidateResponsePromise,
      successToastPromise,
    ]);

    expect(createCandidateResponse.ok()).toBeTruthy();

    const responseBody = await createCandidateResponse.json();

    const candidateId = String(responseBody.data.id);

    expect(candidateId).not.toBe("");

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
      {
        timeout: 30_000,
      },
    );

    // Verify saved candidate values.
    await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);

    await expect(recruitmentPage.middleNameInput).toHaveValue(data.middleName);

    await expect(recruitmentPage.lastNameInput).toHaveValue(data.lastName);

    await expect(recruitmentPage.emailInput).toHaveValue(email);

    await expect(recruitmentPage.contactNumberInput).toHaveValue(
      data.contactNumber,
    );

    console.log(`Created candidate ID: ${candidateId}`);
  });

  // test('TC_RECRUITMENT_148 - Admin should upload a resume while adding a candidate @positive @upload @regression',
  //   async ({ page, navigationPage, recruitmentPage }) => {
  //     // Read candidate details and resume path from JSON.
  //          const data =
  //       recruitmentData.TC_RECRUITMENT_148;
  //     // Generate a unique First Name and Email.
  //            const uniqueValue = Date.now();

  //     const firstName =
  //       `${data.firstNamePrefix}${uniqueValue}`;

  //     const email =
  //       `${data.emailPrefix}${uniqueValue}` +
  //       `${data.emailDomain}`;

  //     // Navigate to Recruitment → Candidates.
  //     await navigationPage.gotoRecruitment();
  //     await recruitmentPage.navigateToCandidate();
  //     // Open the Add Candidate page.
  //        await recruitmentPage.addCandidateButton.click();
  //     // Fill the required candidate fields.
  //      await recruitmentPage.firstNameInput.fill(
  //       firstName
  //     );

  //     await recruitmentPage.middleNameInput.fill(
  //       data.middleName
  //     );

  //     await recruitmentPage.lastNameInput.fill(
  //       data.lastName
  //     );

  //     const selectedVacancy =
  //       await recruitmentPage
  //         .selectFirstAvailableAddCandidateVacancy();

  //     await recruitmentPage.emailInput.fill(
  //       email
  //     );

  //     await recruitmentPage.contactNumberInput.fill(
  //       data.contactNumber
  //     );

  //     await recruitmentPage.keywordsInput.fill(
  //       data.keywords
  //     );

  //     await recruitmentPage.notesInput.fill(
  //       data.notes
  //     );

  //     // The native checkbox is hidden.
  //     await recruitmentPage
  //       .consentCheckboxLabel
  //       .click();

  //     await expect(
  //       recruitmentPage.consentCheckbox
  //     ).toBeChecked();

  //     // Upload the resume file.

  //     // Verify the selected resume filename is displayed.'v

  //     // Click Save.

  //     // Wait for the candidate creation response.

  //     // Verify the response is successful.

  //     // Store the created Candidate ID.

  //     // Verify navigation to the Candidate details page.

  //     // Verify the success notification.

  //     // Verify the uploaded resume filename appears
  //     // in the candidate details.
  //   }
  // );
  test("TC_RECRUITMENT_148 - Admin should add a candidate without a resume successfully @positive @create @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_148;

    const uniqueValue = Date.now();

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();

    await recruitmentPage.addCandidateButton.click();
    await recruitmentPage.firstNameInput.fill(firstName);

    await recruitmentPage.middleNameInput.fill(data.middleName);

    await recruitmentPage.lastNameInput.fill(data.lastName);

    const selectedVacancy =
      await recruitmentPage.selectFirstAvailableAddCandidateVacancy();

    await recruitmentPage.emailInput.fill(email);

    await recruitmentPage.contactNumberInput.fill(data.contactNumber);

    await recruitmentPage.keywordsInput.fill(data.keywords);

    await recruitmentPage.notesInput.fill(data.notes);

    // Do not upload a resume.
    await expect(recruitmentPage.resumeInput).toHaveValue("");

    // Enable consent.
    await recruitmentPage.consentCheckboxLabel.click();

    await expect(recruitmentPage.consentCheckbox).toBeChecked();

    // Verify entered values before saving.
    await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);

    await expect(recruitmentPage.middleNameInput).toHaveValue(data.middleName);

    await expect(recruitmentPage.lastNameInput).toHaveValue(data.lastName);

    await expect(recruitmentPage.emailInput).toHaveValue(email);

    await expect(recruitmentPage.contactNumberInput).toHaveValue(
      data.contactNumber,
    );

    if (selectedVacancy) {
      await expect(recruitmentPage.addCandidateVacancyDropdown).toContainText(
        selectedVacancy,
      );
    }

    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/recruitment/candidates") &&
        response.request().method() === "POST",
      {
        timeout: 30_000,
      },
    );

    const successToastPromise = expect(
      recruitmentPage.successToast,
    ).toContainText(data.successMessage, {
      timeout: 30_000,
    });

    await recruitmentPage.saveButton.click();

    const [createResponse] = await Promise.all([
      responsePromise,
      successToastPromise,
    ]);

    expect(createResponse.ok()).toBeTruthy();

    const responseBody = await createResponse.json();

    const candidateId = String(responseBody.data.id);

    expect(candidateId).not.toBe("");

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
      {
        timeout: 30_000,
      },
    );

    await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);

    await expect(recruitmentPage.lastNameInput).toHaveValue(data.lastName);

    await expect(recruitmentPage.emailInput).toHaveValue(email);

    console.log(`Created candidate ID: ${candidateId}`);
  });

  test("TC_RECRUITMENT_149 - Invalid validation should appear for an incorrectly formatted candidate email @negative @validation @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    // Read candidate details and invalid email from JSON.
    const data = recruitmentData.TC_RECRUITMENT_149;

    const uniqueValue = Date.now();
    // Generate a unique First Name.

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    // Navigate to Recruitment → Candidates.

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();
    // Open the Add Candidate page.
    await recruitmentPage.addCandidateButton.click();

    // Fill First Name, Middle Name and Last Name.
    await recruitmentPage.firstNameInput.fill(firstName);

    await recruitmentPage.middleNameInput.fill(data.middleName);

    await recruitmentPage.lastNameInput.fill(data.lastName);

    await recruitmentPage.selectFirstAvailableAddCandidateVacancy();

    // Enter an incorrectly formatted email address.
    await recruitmentPage.emailInput.fill(data.invalidEmail);
    // Click Save.
    await recruitmentPage.saveButton.click();
    // Verify the Email validation message appears.
    await expect(recruitmentPage.emailValidation).toBeVisible();
    // Verify the validation message says:
    // “Expected format: admin@example.com”.
    await expect(recruitmentPage.emailValidation).toHaveText(
      data.validationMessage,
    );

    // Verify the invalid email remains displayed.
    await expect(recruitmentPage.emailInput).toHaveValue(data.invalidEmail);

    // Verify the user remains on the Add Candidate page.
    await expect(page).toHaveURL(new RegExp(`${data.addCandidateUrlPath}$`));
    // Verify no success notification appears.
    await expect(recruitmentPage.successToast).not.toBeVisible();

    // Click Cancel and return to Candidates.
    await recruitmentPage.cancelButton.click();
    await expect(page).toHaveURL(new RegExp(`${data.candidatesUrlPath}$`));
  });

  test("TC_RECRUITMENT_150 - Required validation should appear when candidate last name is empty @negative @validation @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    // Read candidate details and invalid email from JSON.
    const data = recruitmentData.TC_RECRUITMENT_150;

    const uniqueValue = Date.now();
    // Generate a unique First Name.

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    // Navigate to Recruitment → Candidates.

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();
    // Open the Add Candidate page.
    await recruitmentPage.addCandidateButton.click();

    // Fill First Name, Middle Name and Last Name.
    await recruitmentPage.firstNameInput.fill(firstName);

    // Leave Last Name empty.
    await recruitmentPage.lastNameInput.fill("");
    // Select the first available Vacancy dynamically.
    await recruitmentPage.selectFirstAvailableAddCandidateVacancy();
    // Fill a valid Email.
    await recruitmentPage.emailInput.fill(email);
    // Click Save.
    await recruitmentPage.saveButton.click();
    // Verify Required validation appears
    // under the Last Name field.

    await expect(recruitmentPage.lastNameValidation).toHaveText(
      data.requiredMessage,
    );

    await expect(recruitmentPage.lastNameInput).toHaveValue("");
    // Verify First Name and Email keep their values.
    await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);
    await expect(recruitmentPage.emailInput).toHaveValue(email);
    // Verify the user remains on the Add Candidate page.
    await expect(page).toHaveURL(new RegExp(`${data.addCandidateUrlPath}$`));
    // Verify no success notification appears.
    await expect(recruitmentPage.successToast).not.toBeVisible();
    // Click Cancel and return to Candidates.
    await recruitmentPage.cancelButton.click();
    await expect(page).toHaveURL(new RegExp(`${data.candidatesUrlPath}$`));
  });

  test("TC_RECRUITMENT_151 - Admin should search for a newly created candidate by name @positive @search @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_151;

    const uniqueValue = Date.now();

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    const expectedFullName =
      `${firstName} ${data.middleName} ` + `${data.lastName}`;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();

    await recruitmentPage.firstNameInput.fill(firstName);

    await recruitmentPage.middleNameInput.fill(data.middleName);

    await recruitmentPage.lastNameInput.fill(data.lastName);

    const selectedVacancy =
      await recruitmentPage.selectFirstAvailableAddCandidateVacancy();

    await recruitmentPage.emailInput.fill(email);

    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/recruitment/candidates") &&
        response.request().method() === "POST",
      {
        timeout: 30_000,
      },
    );

    const successToastPromise = expect(
      recruitmentPage.successToast,
    ).toContainText(data.successMessage, {
      timeout: 30_000,
    });

    await recruitmentPage.saveButton.click();

    const [createResponse] = await Promise.all([
      responsePromise,
      successToastPromise,
    ]);

    expect(createResponse.ok()).toBeTruthy();

    const responseBody = await createResponse.json();

    const candidateId = String(responseBody.data.id);

    expect(candidateId).not.toBe("");

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
      {
        timeout: 30_000,
      },
    );

    // Return to Candidate List.
    await navigationPage.gotoRecruitment();

    await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);

    // Select the created candidate from autocomplete.
    const selectedCandidate =
      await recruitmentPage.selectFirstAvailableCandidate(firstName);

    if (!selectedCandidate) {
      throw new Error(
        `Created candidate was not available in autocomplete: ${firstName}`,
      );
    }

    await expect(recruitmentPage.candidateNameInput).toHaveValue(
      selectedCandidate,
    );

    await recruitmentPage.searchButton.click();

    await expect(recruitmentPage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(recruitmentPage.candidateRows).toHaveCount(1, {
      timeout: 20_000,
    });

    const matchingRow = recruitmentPage.candidateRows.first();

    const cells = matchingRow.locator(".oxd-table-cell");

    // Vacancy is optional in the public demo environment.
    if (selectedVacancy) {
      await expect(cells.nth(1)).toContainText(selectedVacancy);
    }

    // Candidate column.
    // OrangeHRM may omit the middle name in the table.
    await expect(cells.nth(2)).toContainText(firstName);

    await expect(cells.nth(2)).toContainText(data.lastName);

    console.log(`Created candidate: ${expectedFullName}`);

    console.log(`Candidate ID for cleanup: ${candidateId}`);
  });

  test("TC_RECRUITMENT_152 - Admin should open a candidate profile from the Candidates List @positive @navigation @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_152;

    const uniqueValue = Date.now();

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();

    await recruitmentPage.firstNameInput.fill(firstName);

    await recruitmentPage.middleNameInput.fill(data.middleName);

    await recruitmentPage.lastNameInput.fill(data.lastName);

    const selectedVacancy =
      await recruitmentPage.selectFirstAvailableAddCandidateVacancy();

    await recruitmentPage.emailInput.fill(email);

    await recruitmentPage.contactNumberInput.fill(data.contactNumber);

    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/api/v2/recruitment/candidates") &&
        response.request().method() === "POST",
      {
        timeout: 30_000,
      },
    );

    const successToastPromise = recruitmentPage.successToast.waitFor({
      state: "visible",
      timeout: 15_000,
    });

    await recruitmentPage.saveButton.click();

    const createResponse = await responsePromise;

    await successToastPromise;

    expect(createResponse.ok()).toBeTruthy();

    const responseBody = await createResponse.json();

    const candidateId = String(responseBody.data.id);

    expect(candidateId).not.toBe("");

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
      {
        timeout: 30_000,
      },
    );

    // Return to Candidates List.
    await navigationPage.gotoRecruitment();

    await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);

    const selectedCandidate =
      await recruitmentPage.selectFirstAvailableCandidate(firstName);

    if (selectedCandidate === null) {
      throw new Error(`Created candidate was not found: ${firstName}`);
    }

    await expect(recruitmentPage.candidateNameInput).toHaveValue(
      selectedCandidate,
    );

    await recruitmentPage.searchButton.click();

    await expect(recruitmentPage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(recruitmentPage.candidateRows).toHaveCount(1, {
      timeout: 20_000,
    });

    const matchingRow = recruitmentPage.candidateRows.first();

    const cells = matchingRow.locator(".oxd-table-cell");

    await expect(cells.nth(1)).toContainText(selectedVacancy);

    await expect(cells.nth(2)).toContainText(firstName);

    await expect(cells.nth(2)).toContainText(data.lastName);

    // Open Candidate Profile using the View action.
    const viewCandidateButton = matchingRow.getByRole("button").filter({
      has: page.locator("i.bi-eye-fill"),
    });

    await expect(viewCandidateButton).toBeVisible();

    await viewCandidateButton.click();

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
      {
        timeout: 30_000,
      },
    );

    await expect(recruitmentPage.candidateProfileHeading).toBeVisible();

    await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);

    await expect(recruitmentPage.middleNameInput).toHaveValue(data.middleName);

    await expect(recruitmentPage.lastNameInput).toHaveValue(data.lastName);

    await expect(recruitmentPage.emailInput).toHaveValue(email);

    await expect(recruitmentPage.contactNumberInput).toHaveValue(
      data.contactNumber,
    );
  });

  test("TC_RECRUITMENT_153 - Admin should delete an existing candidate @positive @delete @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_153;

    const uniqueValue = Date.now();

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();

    await recruitmentPage.addCandidateButton.click();

    const createdCandidate = await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
      contactNumber: data.contactNumber,
    });

    const candidateId = createdCandidate.candidateId;

    expect(candidateId).not.toBe("");

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
      {
        timeout: 30_000,
      },
    );

    // Return to Candidates List.
    await navigationPage.gotoRecruitment();

    await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);

    // Search and delete the created candidate.
    await recruitmentPage.deleteCandidateByName(firstName);

    // Clear the previous candidate filter.
    await recruitmentPage.restButton.click();

    await expect(recruitmentPage.candidateNameInput).toHaveValue("");

    // Search for the deleted candidate again.
    await recruitmentPage.candidateNameInput.fill(firstName);

    await expect(recruitmentPage.candidateAutocompleteDropdown).toBeVisible({
      timeout: 15_000,
    });

    await expect(recruitmentPage.candidateAutocompleteNoRecords).toHaveText(
      data.noRecordsMessage,
    );

    await recruitmentPage.candidateNameInput.press("Escape");

    await recruitmentPage.searchButton.click();

    // Since no autocomplete option was selected,
    // OrangeHRM should display Invalid.
    await expect(recruitmentPage.candidateNameValidation).toHaveText(
      data.invalidMessage,
    );

    // Clear the filter after verification.
    await recruitmentPage.candidateNameInput.clear();
  });

  test("TC_RECRUITMENT_154 - Admin should cancel candidate deletion @negative @cancel @delete @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_154;

    const uniqueValue = Date.now().toString().slice(-8);

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();

    const createdCandidate = await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
      contactNumber: data.contactNumber,
    });

    const candidateId = createdCandidate.candidateId;

    expect(candidateId).not.toBe("");

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
      {
        timeout: 30_000,
      },
    );

    await navigationPage.gotoRecruitment();

    await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);

    // Open deletion dialog and cancel.
    await recruitmentPage.cancelCandidateDeletion(firstName);

    // Reset and search again to prove
    // the candidate was not deleted.
    await recruitmentPage.restButton.click();

    const selectedCandidate =
      await recruitmentPage.selectFirstAvailableCandidate(firstName);

    if (selectedCandidate === null) {
      throw new Error(
        `Candidate disappeared after cancelling deletion: ${firstName}`,
      );
    }

    await recruitmentPage.searchButton.click();

    await expect(recruitmentPage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(recruitmentPage.candidateRows).toHaveCount(1, {
      timeout: 20_000,
    });

    const candidateCell = recruitmentPage.candidateRows
      .first()
      .locator(".oxd-table-cell")
      .nth(2);

    await expect(candidateCell).toContainText(firstName);

    await expect(candidateCell).toContainText(data.lastName);

    // Cleanup.
    await recruitmentPage.restButton.click();

    await recruitmentPage.deleteCandidateByName(firstName);
  });

  test("TC_RECRUITMENT_155 - Admin should edit an existing candidate contact details @positive @edit @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_155;

    const uniqueValue = Date.now();

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    const updatedEmail =
      `${data.updatedEmailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();

    await recruitmentPage.addCandidateButton.click();

    const createdCandidate = await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
      contactNumber: data.contactNumber,
    });

    const candidateId = createdCandidate.candidateId;

    expect(candidateId).not.toBe("");

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
      {
        timeout: 30_000,
      },
    );

    // Return to Candidates List.
    await navigationPage.gotoRecruitment();

    await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);

    // This method searches and opens the profile.
    await recruitmentPage.openCandidateProfile(firstName);

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
    );

    await recruitmentPage.updateCandidateDetails({
      email: updatedEmail,
      contactNumber: data.updatedContactNumber,
      keywords: data.updatedKeywords,
      notes: data.updatedNotes,
    });

    await expect(recruitmentPage.emailInput).toHaveValue(updatedEmail);

    await expect(recruitmentPage.contactNumberInput).toHaveValue(
      data.updatedContactNumber,
    );

    await expect(recruitmentPage.keywordsInput).toHaveValue(
      data.updatedKeywords,
    );

    await expect(recruitmentPage.notesInput).toHaveValue(data.updatedNotes);

    // Refresh and verify persistence.
    await page.reload({
      waitUntil: "domcontentloaded",
    });

    await expect(recruitmentPage.loadingSpinner).toBeHidden();

    await expect(recruitmentPage.emailInput).toHaveValue(updatedEmail);

    await expect(recruitmentPage.contactNumberInput).toHaveValue(
      data.updatedContactNumber,
    );

    await expect(recruitmentPage.keywordsInput).toHaveValue(
      data.updatedKeywords,
    );

    await expect(recruitmentPage.notesInput).toHaveValue(data.updatedNotes);

    // Cleanup.
    await navigationPage.gotoRecruitment();

    await recruitmentPage.deleteCandidateByName(firstName);
  });

  test("TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression", async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data = recruitmentData.TC_RECRUITMENT_156;

    const uniqueValue = Date.now();

    const firstName = `${data.firstNamePrefix}${uniqueValue}`;

    const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();

    const createdCandidate = await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
      contactNumber: data.contactNumber,
    });

    const candidateId = createdCandidate.candidateId;

    expect(candidateId).not.toBe("");

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
      {
        timeout: 30_000,
      },
    );

    // Return to Candidates List.
    await navigationPage.gotoRecruitment();

    await expect(page).toHaveURL(/\/recruitment\/viewCandidates$/);

    await recruitmentPage.openCandidateProfile(firstName);

    await expect(page).toHaveURL(
      new RegExp(`/recruitment/addCandidate/${candidateId}$`),
    );

    await expect(recruitmentPage.shortlistButton).toBeVisible();

    await recruitmentPage.shortlistButton.click();

    await expect(recruitmentPage.shortlistHeading).toBeVisible();

    await recruitmentPage.shortlistNotesInput.fill(data.shortlistNotes);

    await expect(recruitmentPage.shortlistNotesInput).toHaveValue(
      data.shortlistNotes,
    );

   const submitShortlist = async () => {
  const responsePromise = page.waitForResponse(
    response =>
      response.url().includes(
        "/api/v2/recruitment/candidates"
      ) &&
      response.url().includes("shortlist") &&
      ["POST", "PUT"].includes(
        response.request().method()
      ),
    {
      timeout: 30_000,
    }
  );

  await recruitmentPage.shortlistSaveButton.click();

  return responsePromise;
};

let shortlistResponse = await submitShortlist();

if (
  !shortlistResponse.ok() &&
  shortlistResponse.status() >= 500
) {
  await expect(
    recruitmentPage.loadingSpinner
  ).toBeHidden({
    timeout: 30_000,
  });

  await page.waitForTimeout(1_500);

  shortlistResponse = await submitShortlist();
}

const responseBody =
  await shortlistResponse.text();

expect(
  shortlistResponse.ok(),
  `Shortlist API failed with ${shortlistResponse.status()}: ${responseBody}`
).toBeTruthy();

await expect(
  recruitmentPage.loadingSpinner
).toBeHidden({
  timeout: 30_000,
});

await expect(
  recruitmentPage.candidateStatusText
).toContainText(data.expectedStatus, {
  timeout: 30_000,
});
    // Verify status from Candidates List.
    await navigationPage.gotoRecruitment();

    const selectedCandidate =
      await recruitmentPage.selectFirstAvailableCandidate(firstName);

    if (selectedCandidate === null) {
      throw new Error(`Shortlisted candidate was not found: ${firstName}`);
    }

    await recruitmentPage.searchButton.click();

    await expect(recruitmentPage.loadingSpinner).toBeHidden({
      timeout: 20_000,
    });

    await expect(recruitmentPage.candidateRows).toHaveCount(1, {
      timeout: 20_000,
    });

    const matchingRow = recruitmentPage.candidateRows.first();

    const cells = matchingRow.locator(".oxd-table-cell");

    await expect(cells.nth(2)).toContainText(firstName);

    // Status column.
    await expect(cells.nth(5)).toContainText(data.expectedStatus);

    // Cleanup.
    await recruitmentPage.restButton.click();

    await recruitmentPage.deleteCandidateByName(firstName);
  });

test( 'TC_RECRUITMENT_157 - Admin should schedule an interview for a shortlisted candidate @positive @workflow @regression',
  async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    test.setTimeout(180_000);

    const data =
      recruitmentData.TC_RECRUITMENT_157;

    const uniqueValue = Date.now();

    const firstName =
      `${data.firstNamePrefix}${uniqueValue}`;

    const email =
      `${data.emailPrefix}${uniqueValue}` +
      `${data.emailDomain}`;

    const interviewTitle =
      `${data.interviewTitlePrefix} ${uniqueValue}`;

    const interviewDate =
      dateFromOffset(
        data.interviewDaysOffset
      );

    await navigationPage.gotoRecruitment();
await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();
    const createdCandidate =
      await recruitmentPage.createCandidate({
        firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        email,
        contactNumber: data.contactNumber,
      });

    const candidateId =
      createdCandidate.candidateId;

    expect(candidateId).not.toBe('');

    await expect(page).toHaveURL(
      new RegExp(
        `/recruitment/addCandidate/${candidateId}$`
      ),
      {
        timeout: 30_000,
      }
    );

    // Return to Candidate List and open profile.
    await navigationPage.gotoRecruitment();

    await recruitmentPage.openCandidateProfile(
      firstName
    );

    await expect(page).toHaveURL(
      new RegExp(
        `/recruitment/addCandidate/${candidateId}$`
      )
    );

    // Shortlist candidate.
    await expect(
      recruitmentPage.shortlistButton
    ).toBeVisible();

    await recruitmentPage.shortlistButton.click();

    await expect(
      recruitmentPage.shortlistHeading
    ).toBeVisible();

    await recruitmentPage
      .shortlistNotesInput
      .fill(data.shortlistNotes);

    const shortlistResponsePromise =
      page.waitForResponse(
        response =>
          response.url().includes(
            '/api/v2/recruitment/candidates'
          ) &&
          response.url().includes(
            'shortlist'
          ) &&
          ['POST', 'PUT'].includes(
            response.request().method()
          ),
        {
          timeout: 30_000,
        }
      );

    await recruitmentPage
      .shortlistSaveButton
      .click();

    const shortlistResponse =
      await shortlistResponsePromise;

    const shortlistResponseBody =
      await shortlistResponse.text();

    expect(
      shortlistResponse.ok(),
      `Shortlist failed with ${shortlistResponse.status()}: ${shortlistResponseBody}`
    ).toBeTruthy();

    await expect(
      recruitmentPage.loadingSpinner
    ).toBeHidden({
      timeout: 30_000,
    });

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(
      data.shortlistedStatus,
      {
        timeout: 30_000,
      }
    );

    // Open Schedule Interview.
    await expect(
      recruitmentPage.scheduleInterviewButton
    ).toBeVisible();

    await recruitmentPage
      .scheduleInterviewButton
      .click();

    await expect(
      recruitmentPage.scheduleInterviewHeading
    ).toBeVisible();

    await recruitmentPage
      .interviewTitleInput
      .fill(interviewTitle);

    const selectedInterviewer =
      await recruitmentPage
        .selectFirstAvailableInterviewer(
          data.interviewerSearchText
        );

    await recruitmentPage
      .interviewDateInput
      .fill(interviewDate);

    await recruitmentPage
      .interviewTimeInput
      .fill(data.interviewTime);

    await expect(
      recruitmentPage.interviewTitleInput
    ).toHaveValue(interviewTitle);

    await expect(
      recruitmentPage.interviewerInput
    ).toHaveValue(selectedInterviewer);

    await expect(
      recruitmentPage.interviewDateInput
    ).toHaveValue(interviewDate);

    await expect(
      recruitmentPage.interviewTimeInput
    ).toHaveValue(data.interviewTime);

    // Start waiters before clicking Save.
    const interviewResponsePromise =
      page.waitForResponse(
        response =>
          response.url().includes(
            '/api/v2/recruitment'
          ) &&
          response.url().includes(
            'interview'
          ) &&
          ['POST', 'PUT'].includes(
            response.request().method()
          ),
        {
          timeout: 30_000,
        }
      );

    const updateToastPromise =
      recruitmentPage.updateSuccessToast
        .waitFor({
          state: 'visible',
          timeout: 15_000,
        });

    await recruitmentPage
      .interviewSaveButton
      .click();

    const interviewResponse =
      await interviewResponsePromise;

    await updateToastPromise;

    const interviewResponseBody =
      await interviewResponse.text();

    expect(
      interviewResponse.ok(),
      `Schedule Interview failed with ${interviewResponse.status()}: ${interviewResponseBody}`
    ).toBeTruthy();

    await expect(
      recruitmentPage.loadingSpinner
    ).toBeHidden({
      timeout: 30_000,
    });

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(
      data.scheduledStatus,
      {
        timeout: 30_000,
      }
    );

    // Verify scheduled interview information.
    await expect(
      page.getByText(
        interviewTitle,
        { exact: true }
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        selectedInterviewer,
        { exact: true }
      ).first()
    ).toBeVisible();

    // Verify status from Candidate List.
    await navigationPage.gotoRecruitment();

    const selectedCandidate =
      await recruitmentPage
        .selectFirstAvailableCandidate(firstName);

    if (selectedCandidate === null) {
      throw new Error(
        `Scheduled candidate was not found: ${firstName}`
      );
    }

    await recruitmentPage.searchButton.click();

    await expect(
      recruitmentPage.loadingSpinner
    ).toBeHidden({
      timeout: 20_000,
    });

    await expect(
      recruitmentPage.candidateRows
    ).toHaveCount(1, {
      timeout: 20_000,
    });

    const statusCell =
      recruitmentPage.candidateRows
        .first()
        .locator('.oxd-table-cell')
        .nth(5);

    await expect(
      statusCell
    ).toContainText(
      data.scheduledStatus
    );

    // Cleanup.
    await recruitmentPage.restButton.click();

    await recruitmentPage.deleteCandidateByName(
      firstName
    );
  }
);

test(
  'TC_RECRUITMENT_158 - Required validation should appear when scheduling an empty interview @negative @validation @workflow @regression',
  async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_158;

    const uniqueValue = Date.now();
    const firstName =
      `${data.firstNamePrefix}${uniqueValue}`;
    const email =
      `${data.emailPrefix}${uniqueValue}` +
      data.emailDomain;

    await navigationPage.gotoRecruitment();
  await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();
    await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
    });

    await navigationPage.gotoRecruitment();
    await recruitmentPage.openCandidateProfile(
      firstName
    );

    await recruitmentPage.shortlistCurrentCandidate(
      data.shortlistNotes
    );

    await recruitmentPage
      .scheduleInterviewButton
      .click();

    await expect(
      recruitmentPage.scheduleInterviewHeading
    ).toBeVisible();

    await recruitmentPage
      .interviewSaveButton
      .click();

    await expect(
      recruitmentPage.interviewValidationMessages
    ).toHaveCount(data.requiredCount);

    await expect(
      recruitmentPage.interviewValidationMessages
    ).toHaveText(
      Array(data.requiredCount).fill(
        data.requiredMessage
      )
    );

    await expect(page).toHaveURL(
      /\/recruitment\/changeCandidateVacancyStatus/
    );

    await recruitmentPage
      .interviewCancelButton
      .click();

    await navigationPage.gotoRecruitment();
    await recruitmentPage.deleteCandidateByName(
      firstName
    );
  }
);


test(
  'TC_RECRUITMENT_159 - Admin should cancel scheduling an interview @negative @cancel @workflow @regression',
  async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_159;

    const uniqueValue = Date.now();
    const firstName =
      `${data.firstNamePrefix}${uniqueValue}`;
    const email =
      `${data.emailPrefix}${uniqueValue}` +
      data.emailDomain;

    await navigationPage.gotoRecruitment();
   await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();
    const created =
      await recruitmentPage.createCandidate({
        firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        email,
      });

    await navigationPage.gotoRecruitment();
    await recruitmentPage.openCandidateProfile(
      firstName
    );

    await recruitmentPage.shortlistCurrentCandidate(
      data.shortlistNotes
    );

    await recruitmentPage
      .scheduleInterviewButton
      .click();

    await recruitmentPage
      .interviewTitleInput
      .fill(data.interviewTitle);

    await recruitmentPage
      .interviewCancelButton
      .click();

    await expect(page).toHaveURL(
      new RegExp(
        `/recruitment/addCandidate/${created.candidateId}$`
      )
    );

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(data.expectedStatus);

    await navigationPage.gotoRecruitment();
    await recruitmentPage.deleteCandidateByName(
      firstName
    );
  }
);


test(
  'TC_RECRUITMENT_160 - Admin should mark a candidate interview as passed @positive @workflow @regression',
  async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_160;

    const uniqueValue = Date.now();
    const firstName =
      `${data.firstNamePrefix}${uniqueValue}`;
    const email =
      `${data.emailPrefix}${uniqueValue}` +
      data.emailDomain;

    await navigationPage.gotoRecruitment();
   await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();
    await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
    });

    await navigationPage.gotoRecruitment();
    await recruitmentPage.openCandidateProfile(
      firstName
    );

    await recruitmentPage.shortlistCurrentCandidate(
      data.shortlistNotes
    );

    await recruitmentPage.scheduleCurrentCandidateInterview({
      title:
        `${data.interviewTitlePrefix}${uniqueValue}`,
      interviewerSearchText:
        data.interviewerSearchText,
      date: dateFromOffset(
        data.interviewDaysOffset
      ),
      time: data.interviewTime,
    });

    await recruitmentPage
      .markInterviewPassed(
        data.passedNotes
      );

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(data.expectedStatus);

    await navigationPage.gotoRecruitment();
    await recruitmentPage.deleteCandidateByName(
      firstName
    );
  }
);


test(
  'TC_RECRUITMENT_161 - Admin should mark a candidate interview as failed @negative @workflow @regression',
  async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_161;

    const uniqueValue = Date.now();
    const firstName =
      `${data.firstNamePrefix}${uniqueValue}`;
    const email =
      `${data.emailPrefix}${uniqueValue}` +
      data.emailDomain;

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();

    await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
    });

    await navigationPage.gotoRecruitment();
    await recruitmentPage.openCandidateProfile(
      firstName
    );

    await recruitmentPage.shortlistCurrentCandidate(
      data.shortlistNotes
    );

    await recruitmentPage.scheduleCurrentCandidateInterview({
      title:
        `${data.interviewTitlePrefix}${uniqueValue}`,
      interviewerSearchText:
        data.interviewerSearchText,
      date: dateFromOffset(
        data.interviewDaysOffset
      ),
      time: data.interviewTime,
    });

    await recruitmentPage
      .markInterviewFailed(
        data.failedNotes
      );

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(data.expectedStatus);

    await navigationPage.gotoRecruitment();
    await recruitmentPage.deleteCandidateByName(
      firstName
    );
  }
);

test(
  'TC_RECRUITMENT_162 - Admin should offer a job to a candidate who passed the interview @positive @workflow @regression',
  async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_162;

    const uniqueValue = Date.now();
    const firstName =
      `${data.firstNamePrefix}${uniqueValue}`;
    const email =
      `${data.emailPrefix}${uniqueValue}` +
      data.emailDomain;

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();

    await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
    });

    await navigationPage.gotoRecruitment();
    await recruitmentPage.openCandidateProfile(
      firstName
    );

    await recruitmentPage.shortlistCurrentCandidate(
      data.shortlistNotes
    );

    await recruitmentPage.scheduleCurrentCandidateInterview({
      title:
        `${data.interviewTitlePrefix}${uniqueValue}`,
      interviewerSearchText:
        data.interviewerSearchText,
      date: dateFromOffset(
        data.interviewDaysOffset
      ),
      time: data.interviewTime,
    });

    await recruitmentPage.markInterviewPassed(
      data.passedNotes
    );

    await recruitmentPage.offerJob(
      data.offerNotes
    );

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(data.expectedStatus);

    await navigationPage.gotoRecruitment();
    await recruitmentPage.deleteCandidateByName(
      firstName
    );
  }
);

test(
  'TC_RECRUITMENT_163 - Admin should hire a candidate after offering the job @positive @workflow @regression',
  async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_163;

    const uniqueValue = Date.now();
    const firstName =
      `${data.firstNamePrefix}${uniqueValue}`;
    const email =
      `${data.emailPrefix}${uniqueValue}` +
      data.emailDomain;

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();

    await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
    });

    await navigationPage.gotoRecruitment();
    await recruitmentPage.openCandidateProfile(
      firstName
    );

    await recruitmentPage.shortlistCurrentCandidate(
      data.shortlistNotes
    );

    await recruitmentPage.scheduleCurrentCandidateInterview({
      title:
        `${data.interviewTitlePrefix}${uniqueValue}`,
      interviewerSearchText:
        data.interviewerSearchText,
      date: dateFromOffset(
        data.interviewDaysOffset
      ),
      time: data.interviewTime,
    });

    await recruitmentPage.markInterviewPassed(
      data.passedNotes
    );

    await recruitmentPage.offerJob(
      data.offerNotes
    );

    await recruitmentPage.hireCandidate(
      data.hireNotes
    );

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(data.expectedStatus);

    await navigationPage.gotoRecruitment();

    const selectedCandidate =
      await recruitmentPage
        .selectFirstAvailableCandidate(firstName);

    if (selectedCandidate === null) {
      throw new Error(
        `Hired candidate was not found: ${firstName}`
      );
    }

    await recruitmentPage.searchButton.click();

    const statusCell =
      recruitmentPage.candidateRows
        .first()
        .locator('.oxd-table-cell')
        .nth(5);

    await expect(statusCell).toContainText(
      data.expectedStatus
    );

    await recruitmentPage.restButton.click();

    await recruitmentPage.deleteCandidateByName(
      firstName
    );
  }
);

test(
  'TC_RECRUITMENT_164 - Admin should reject an existing candidate successfully @negative @workflow @regression',
  async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_164;

    const uniqueValue = Date.now();

    const firstName =
      `${data.firstNamePrefix}${uniqueValue}`;

    const email =
      `${data.emailPrefix}${uniqueValue}` +
      data.emailDomain;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();

    await recruitmentPage.createCandidate({
      firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email,
      contactNumber: data.contactNumber,
    });

    await navigationPage.gotoRecruitment();

    await recruitmentPage.openCandidateProfile(
      firstName
    );

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(
      'Application Initiated'
    );

    await recruitmentPage.rejectCandidate(
      data.rejectionNotes
    );

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(
      data.expectedStatus
    );

    // Verify status from Candidates List.
    await navigationPage.gotoRecruitment();

    const selectedCandidate =
      await recruitmentPage
        .selectFirstAvailableCandidate(firstName);

    if (selectedCandidate === null) {
      throw new Error(
        `Rejected candidate was not found: ${firstName}`
      );
    }

    await recruitmentPage.searchButton.click();

    await expect(
      recruitmentPage.loadingSpinner
    ).toBeHidden({
      timeout: 20_000,
    });

    await expect(
      recruitmentPage.candidateRows
    ).toHaveCount(1, {
      timeout: 20_000,
    });

    const candidateRow =
      recruitmentPage.candidateRows.first();

    const statusCell =
      candidateRow
        .locator('.oxd-table-cell')
        .nth(5);

    await expect(
      statusCell
    ).toContainText(
      data.expectedStatus
    );

    // Cleanup.
    await recruitmentPage.restButton.click();

    await recruitmentPage.deleteCandidateByName(
      firstName
    );
  }
);

test(
  'TC_RECRUITMENT_165 - Admin should cancel rejecting a candidate @negative @cancel @workflow @regression',
  async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_165;

    const uniqueValue = Date.now();

    const firstName =
      `${data.firstNamePrefix}${uniqueValue}`;

    const email =
      `${data.emailPrefix}${uniqueValue}` +
      data.emailDomain;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.navigateToCandidate();
    await recruitmentPage.addCandidateButton.click();

    const createdCandidate =
      await recruitmentPage.createCandidate({
        firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        email,
        contactNumber: data.contactNumber,
      });

    const candidateId =
      createdCandidate.candidateId;

    await navigationPage.gotoRecruitment();

    await recruitmentPage.openCandidateProfile(
      firstName
    );

    await expect(page).toHaveURL(
      new RegExp(
        `/recruitment/addCandidate/${candidateId}$`
      )
    );

    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(
      data.expectedStatus
    );

    await recruitmentPage
      .cancelCandidateRejection(
        data.rejectionNotes
      );

    // Status must remain unchanged.
    await expect(
      recruitmentPage.candidateStatusText
    ).toContainText(
      data.expectedStatus
    );

    // Verify candidate still exists.
    await navigationPage.gotoRecruitment();

    const selectedCandidate =
      await recruitmentPage
        .selectFirstAvailableCandidate(firstName);

    if (selectedCandidate === null) {
      throw new Error(
        `Candidate disappeared after cancelling rejection: ${firstName}`
      );
    }

    await recruitmentPage.searchButton.click();

    await expect(
      recruitmentPage.loadingSpinner
    ).toBeHidden({
      timeout: 20_000,
    });

    await expect(
      recruitmentPage.candidateRows
    ).toHaveCount(1, {
      timeout: 20_000,
    });

    const statusCell =
      recruitmentPage.candidateRows
        .first()
        .locator('.oxd-table-cell')
        .nth(5);

    await expect(
      statusCell
    ).toContainText(
      data.expectedStatus
    );

    // Cleanup.
    await recruitmentPage.restButton.click();

    await recruitmentPage.deleteCandidateByName(
      firstName
    );
  }
);
});
