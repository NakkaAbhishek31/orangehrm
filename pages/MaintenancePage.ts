import type { Locator, Page } from "@playwright/test";
import { createMaintenanceLocators } from "../locators/maintenanceLocators";

export class MaintenancePage {
  readonly administratorAccessHeading!: Locator;
  readonly purgeEmployeeHeading!: Locator;
  readonly passwordInput!: Locator;
  readonly confirmButton!: Locator;
  readonly cancelButton!: Locator;
  readonly InvalidcredentialsErrorMessage!: Locator;
  readonly accessRecordsLink!: Locator;
  readonly accessRecordHeading!: Locator;
  readonly accessRecordEmployeeInput!: Locator;
  readonly employeeAutocompleteNoRecords!: Locator;
  readonly searchButton!: Locator;
  readonly employeeInputErrorMessage!:Locator;
  readonly purgeRecordsDropdown!: Locator;
  readonly purgeEmployeeRecordsLink!:Locator;
  readonly purgeCandidateRecordsLink!:Locator;
  readonly purgeCandidateHeading!: Locator;
  readonly purgeCandidateVacancyInput!: Locator;
  readonly purgeCandidateVacancyOptions!: Locator;
  readonly purgeCandidateVacancyOptions!: Locator;
  readonly vacancyInvalidErrorMessage!: Locator;
  readonly purgeEmployeePastEmployeeInput!: Locator;

  constructor(page: Page) {
    Object.assign(this, createMaintenanceLocators(page));
  }
}
