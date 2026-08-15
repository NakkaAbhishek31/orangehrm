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

test.describe("PIM Employee List", () => {
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
    const candidateCount = await recruitmentPage.candidateRows.count();

    if (candidateCount > 0) {
      for (let index = 0; index < candidateCount; index++) {
        const statusCell = recruitmentPage.candidateRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(5);

        await expect(statusCell).toContainText(data.candidateStatus);
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

    const candidateCount = await recruitmentPage.candidateRows.count();

    if (candidateCount > 0) {
      for (let index = 0; index < candidateCount; index++) {
        const vacancyCell = recruitmentPage.candidateRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(1);

        await expect(vacancyCell).toContainText(selectedVacancy);
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

    const candidateCount = await recruitmentPage.candidateRows.count();

    if (candidateCount > 0) {
      for (let index = 0; index < candidateCount; index++) {
        const hiringManagerCell = recruitmentPage.candidateRows
          .nth(index)
          .locator(".oxd-table-cell")
          .nth(3);

        await expect(hiringManagerCell).toContainText(selectedManager);
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

test('TC_RECRUITMENT_142 - Invalid validation should appear for a nonexistent candidate name @negative @validation @autocomplete @regression',
  async ({
    page,
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_142;

    const invalidCandidateName =
      `${data.candidateNamePrefix}${Date.now()}`;

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();

    await recruitmentPage.candidateNameInput.fill(
      invalidCandidateName
    );

    await expect(
      recruitmentPage
        .candidateAutocompleteDropdown
    ).toBeVisible({
      timeout: 15_000,
    });

    await expect(
      recruitmentPage
        .candidateAutocompleteNoRecords
    ).toHaveText(data.autocompleteMessage);

    // Close autocomplete without selecting a value.
    await recruitmentPage.candidateNameInput.press(
      'Escape'
    );

    await recruitmentPage.searchButton.click();

    await expect(
      recruitmentPage.candidateNameValidation
    ).toBeVisible();

    await expect(
      recruitmentPage.candidateNameValidation
    ).toHaveText(data.validationMessage);

    await expect(
      recruitmentPage.candidateNameInput
    ).toHaveValue(invalidCandidateName);

    await expect(page).toHaveURL(
      /\/recruitment\/viewCandidates$/
    );

    await recruitmentPage.restButton.click();

    await expect(
      recruitmentPage.candidateNameInput
    ).toHaveValue('');

    await expect(
      recruitmentPage.candidateNameValidation
    ).toBeHidden();
  }
);

test( 'TC_RECRUITMENT_143 - Admin should search Candidates using combined vacancy, status, and date filters @positive @filter @regression',
  async ({
    navigationPage,
    recruitmentPage,
  }) => {
    const data =
      recruitmentData.TC_RECRUITMENT_143;

    const fromDate = dateFromOffset(
      data.fromDaysOffset
    );

    const toDate = dateFromOffset(
      data.toDaysOffset
    );

    await navigationPage.gotoRecruitment();
    await recruitmentPage.navigateToCandidate();

    const selectedVacancy =
      await recruitmentPage
        .selectFirstAvailableVacancy();

    await recruitmentPage.selectDropdownOption(
      recruitmentPage.candidateStatusDropdown,
      data.candidateStatus
    );

    await recruitmentPage.fromDateInput.fill(
      fromDate
    );

    await recruitmentPage.toDateInput.fill(
      toDate
    );

    await expect(
      recruitmentPage.vacancyDropdown
    ).toContainText(selectedVacancy);

    await expect(
      recruitmentPage.candidateStatusDropdown
    ).toContainText(data.candidateStatus);

    await expect(
      recruitmentPage.fromDateInput
    ).toHaveValue(fromDate);

    await expect(
      recruitmentPage.toDateInput
    ).toHaveValue(toDate);

    await recruitmentPage.searchButton.click();

    await expect(
      recruitmentPage.loadingSpinner
    ).toBeHidden({
      timeout: 20_000,
    });

    // Verify that filters remain selected.
    await expect(
      recruitmentPage.vacancyDropdown
    ).toContainText(selectedVacancy);

    await expect(
      recruitmentPage.candidateStatusDropdown
    ).toContainText(data.candidateStatus);

    await expect(
      recruitmentPage.fromDateInput
    ).toHaveValue(fromDate);

    await expect(
      recruitmentPage.toDateInput
    ).toHaveValue(toDate);

    await expect(
      recruitmentPage.candidateRows
        .first()
        .or(recruitmentPage.noRecordsFound)
    ).toBeVisible({
      timeout: 15_000,
    });

    const candidateCount =
      await recruitmentPage.candidateRows.count();

    if (candidateCount > 0) {
      for (
        let index = 0;
        index < candidateCount;
        index++
      ) {
        const cells =
          recruitmentPage.candidateRows
            .nth(index)
            .locator('.oxd-table-cell');

        const vacancyCell = cells.nth(1);
        const statusCell = cells.nth(5);

        await expect(
          vacancyCell
        ).toContainText(selectedVacancy);

        await expect(
          statusCell
        ).toContainText(
          data.candidateStatus
        );
      }
    } else {
      await expect(
        recruitmentPage.noRecordsFound
      ).toBeVisible();
    }

    await recruitmentPage.restButton.click();

    await expect(
      recruitmentPage.vacancyDropdown
    ).toContainText(
      data.defaultDropdownValue
    );

    await expect(
      recruitmentPage.candidateStatusDropdown
    ).toContainText(
      data.defaultDropdownValue
    );
  }
);


});
