import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import claimData from "../../test-data/claim.data.json";
import { routes } from "../../utils/routes";

test.describe("Claim - Assign Claim", () => {
  test.beforeEach(async ({ page, navigationPage, claimPage }) => {
    await page.goto(routes.dashboard);
    await navigationPage.gotoClaim();
    await claimPage.gotoAssignClaim();
  });

  test("TC_CLAIM_413 - Admin should open Assign Claim @smoke @navigation @regression", async ({ claimPage }) => {
    await expect(claimPage.heading).toHaveText(claimData.TC_CLAIM_413.pageHeading);
  });

  test("TC_CLAIM_414 - Claim request should display all form fields @smoke @form @regression", async ({ claimPage }) => {
    await expect(claimPage.employeeNameInput).toBeVisible();
    await expect(claimPage.eventDropdown).toBeVisible();
    await expect(claimPage.currencyDropdown).toBeVisible();
    await expect(claimPage.remarksInput).toBeVisible();
  });

  test("TC_CLAIM_415 - Create and Cancel actions should be enabled @smoke @form @regression", async ({ claimPage }) => {
    await expect(claimPage.createButton).toBeEnabled();
    await expect(claimPage.cancelButton).toBeEnabled();
  });

  test("TC_CLAIM_416 - Employee Name should display autocomplete results @positive @autocomplete @regression", async ({ claimPage }) => {
    await claimPage.employeeNameInput.fill(claimData.TC_CLAIM_416.employeeName);
    await expect(claimPage.autocompleteDropdown).toBeVisible();
  });

  test("TC_CLAIM_417 - Unknown employee should show no autocomplete records @negative @autocomplete @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_417;
    await claimPage.employeeNameInput.fill(`${data.employeeNamePrefix}${Date.now()}`);
    await expect(claimPage.autocompleteNoRecords).toHaveText(data.noRecordsMessage);
  });

  test("TC_CLAIM_418 - Cancel should close a request with unsaved employee text @positive @cancel @regression", async ({ claimPage, page }) => {
    await claimPage.employeeNameInput.fill(claimData.TC_CLAIM_418.employeeName);
    await claimPage.cancelButton.click();
    await expect(page.getByRole("heading", { name: "Employee Claims" })).toBeVisible();
    await expect(claimPage.heading).toBeHidden();
  });

  test("TC_CLAIM_419 - Admin should select an Event @positive @filter @regression", async ({ claimPage }) => {
    const event = await claimPage.selectFirstEvent();
    await expect(claimPage.eventDropdown).toContainText(event);
  });

  test("TC_CLAIM_420 - Admin should select a Currency @positive @filter @regression", async ({ claimPage }) => {
    const currency = await claimPage.selectFirstCurrency();
    await expect(claimPage.currencyDropdown).toContainText(currency);
  });

  test("TC_CLAIM_421 - Remarks should accept and clear text @positive @form @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_421;
    await claimPage.remarksInput.fill(data.remarks);
    await expect(claimPage.remarksInput).toHaveValue(data.remarks);
    await claimPage.remarksInput.clear();
    await expect(claimPage.remarksInput).toHaveValue("");
  });

  test("TC_CLAIM_422 - Cancel and reopen should discard unsaved remarks @positive @cancel @navigation @regression", async ({ claimPage }) => {
    await claimPage.remarksInput.fill(claimData.TC_CLAIM_422.remarks);
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.remarksInput).toHaveValue("");
  });

  test("TC_CLAIM_423 - Employee Name should be empty when the form opens @smoke @form @regression", async ({ claimPage }) => {
    await expect(claimPage.employeeNameInput).toHaveValue("");
  });

  test("TC_CLAIM_424 - Event should show its default option @smoke @filter @regression", async ({ claimPage }) => {
    await expect(claimPage.eventDropdown).toContainText(claimData.TC_CLAIM_424.defaultDropdownValue);
  });

  test("TC_CLAIM_425 - Currency should show its default option @smoke @filter @regression", async ({ claimPage }) => {
    await expect(claimPage.currencyDropdown).toContainText(claimData.TC_CLAIM_425.defaultDropdownValue);
  });

  test("TC_CLAIM_426 - Remarks should be empty when the form opens @smoke @form @regression", async ({ claimPage }) => {
    await expect(claimPage.remarksInput).toHaveValue("");
  });

  test("TC_CLAIM_427 - Empty Create submission should show required validation @negative @validation @regression", async ({ page, claimPage }) => {
    await claimPage.createButton.click();
    await expect(page.locator(".oxd-input-field-error-message").filter({ hasText: claimData.TC_CLAIM_427.requiredMessage }).first()).toBeVisible();
    await expect(claimPage.heading).toBeVisible();
  });

  test("TC_CLAIM_428 - Event selection should leave Currency at its default @positive @filter @regression", async ({ claimPage }) => {
    const event = await claimPage.selectFirstEvent();
    await expect(claimPage.eventDropdown).toContainText(event);
    await expect(claimPage.currencyDropdown).toContainText(claimData.TC_CLAIM_428.defaultDropdownValue);
  });

  test("TC_CLAIM_429 - Currency selection should leave Event at its default @positive @filter @regression", async ({ claimPage }) => {
    const currency = await claimPage.selectFirstCurrency();
    await expect(claimPage.currencyDropdown).toContainText(currency);
    await expect(claimPage.eventDropdown).toContainText(claimData.TC_CLAIM_429.defaultDropdownValue);
  });

  test("TC_CLAIM_430 - Cancel and reopen should discard unsaved Event selection @positive @cancel @filter @regression", async ({ claimPage }) => {
    await claimPage.selectFirstEvent();
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.eventDropdown).toContainText(claimData.TC_CLAIM_430.defaultDropdownValue);
  });

  test("TC_CLAIM_431 - Cancel and reopen should discard multiple unsaved fields @positive @cancel @workflow @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_431;
    await claimPage.employeeNameInput.fill(data.employeeName);
    await claimPage.remarksInput.fill(data.remarks);
    await claimPage.selectFirstEvent();
    await claimPage.selectFirstCurrency();
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.employeeNameInput).toHaveValue("");
    await expect(claimPage.remarksInput).toHaveValue("");
    await expect(claimPage.eventDropdown).toContainText(data.defaultDropdownValue);
    await expect(claimPage.currencyDropdown).toContainText(data.defaultDropdownValue);
  });

  test("TC_CLAIM_432 - Cancel after validation should allow a fresh request @negative @validation @cancel @regression", async ({ page, claimPage }) => {
    await claimPage.createButton.click();
    await expect(page.locator(".oxd-input-field-error-message").first()).toBeVisible();
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(page.locator(".oxd-input-field-error-message")).toHaveCount(0);
    await expect(claimPage.createButton).toBeEnabled();
  });

  test("TC_CLAIM_433 - Employee Name field should be enabled @smoke @form @regression", async ({ claimPage }) => {
    await expect(claimPage.employeeNameInput).toBeEnabled();
  });

  test("TC_CLAIM_434 - Event selector should be enabled @smoke @form @regression", async ({ claimPage }) => {
    await expect(claimPage.eventDropdown).toBeEnabled();
  });

  test("TC_CLAIM_435 - Currency selector should be enabled @smoke @form @regression", async ({ claimPage }) => {
    await expect(claimPage.currencyDropdown).toBeEnabled();
  });

  test("TC_CLAIM_436 - Remarks field should be enabled and editable @smoke @form @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_436;
    await expect(claimPage.remarksInput).toBeEnabled();
    await claimPage.remarksInput.fill(data.remarks);
    await expect(claimPage.remarksInput).toHaveValue(data.remarks);
  });

  test("TC_CLAIM_437 - Cancel should return to Employee Claims @positive @cancel @navigation @regression", async ({ page, claimPage }) => {
    await claimPage.cancelButton.click();
    await expect(page.getByRole("heading", { name: claimData.TC_CLAIM_437.pageHeading })).toBeVisible();
  });

  test("TC_CLAIM_438 - Assign Claim should reopen after cancellation @positive @cancel @navigation @regression", async ({ claimPage }) => {
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.heading).toHaveText(claimData.TC_CLAIM_438.pageHeading);
  });

  test("TC_CLAIM_439 - Empty request should show three required validations @negative @validation @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_439;
    await claimPage.createButton.click();
    await expect(claimPage.validationMessages).toHaveCount(data.expectedValidationCount);
    await expect(claimPage.validationMessages).toHaveText([
      data.requiredMessage,
      data.requiredMessage,
      data.requiredMessage,
    ]);
  });

  test("TC_CLAIM_440 - Selecting Event should leave Employee and Currency required @negative @validation @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_440;
    await claimPage.selectFirstEvent();
    await claimPage.createButton.click();
    await expect(claimPage.validationMessages).toHaveCount(data.expectedValidationCount);
  });

  test("TC_CLAIM_441 - Selecting Currency should leave Employee and Event required @negative @validation @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_441;
    await claimPage.selectFirstCurrency();
    await claimPage.createButton.click();
    await expect(claimPage.validationMessages).toHaveCount(data.expectedValidationCount);
  });

  test("TC_CLAIM_442 - Selecting Event and Currency should leave only Employee required @negative @validation @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_442;
    await claimPage.selectFirstEvent();
    await claimPage.selectFirstCurrency();
    await claimPage.createButton.click();
    await expect(claimPage.validationMessages).toHaveCount(data.expectedValidationCount);
    await expect(claimPage.validationMessages).toHaveText(data.requiredMessage);
  });

  test("TC_CLAIM_443 - Admin should select an employee from autocomplete @positive @autocomplete @regression", async ({ claimPage }) => {
    const selectedEmployee = await claimPage.selectEmployee(
      claimData.TC_CLAIM_443.employeeSearch,
    );
    await expect(claimPage.employeeNameInput).toHaveValue(selectedEmployee);
  });

  test("TC_CLAIM_444 - Employee-only submission should require Event and Currency @negative @validation @regression", async ({ claimPage }) => {
    await claimPage.selectEmployee(claimData.TC_CLAIM_444.employeeSearch);
    await claimPage.createButton.click();
    await expect(claimPage.employeeNameValidation).toHaveCount(0);
    await expect(claimPage.eventValidation).toHaveText(claimData.TC_CLAIM_444.requiredMessage);
    await expect(claimPage.currencyValidation).toHaveText(claimData.TC_CLAIM_444.requiredMessage);
  });

  test("TC_CLAIM_445 - Event-only submission should require Employee and Currency @negative @validation @regression", async ({ claimPage }) => {
    await claimPage.selectFirstEvent();
    await claimPage.createButton.click();
    await expect(claimPage.employeeNameValidation).toHaveText(claimData.TC_CLAIM_445.requiredMessage);
    await expect(claimPage.eventValidation).toHaveCount(0);
    await expect(claimPage.currencyValidation).toHaveText(claimData.TC_CLAIM_445.requiredMessage);
  });

  test("TC_CLAIM_446 - Currency-only submission should require Employee and Event @negative @validation @regression", async ({ claimPage }) => {
    await claimPage.selectFirstCurrency();
    await claimPage.createButton.click();
    await expect(claimPage.employeeNameValidation).toHaveText(claimData.TC_CLAIM_446.requiredMessage);
    await expect(claimPage.eventValidation).toHaveText(claimData.TC_CLAIM_446.requiredMessage);
    await expect(claimPage.currencyValidation).toHaveCount(0);
  });

  test("TC_CLAIM_447 - Employee and Event submission should require only Currency @negative @validation @regression", async ({ claimPage }) => {
    await claimPage.selectEmployee(claimData.TC_CLAIM_447.employeeSearch);
    await claimPage.selectFirstEvent();
    await claimPage.createButton.click();
    await expect(claimPage.validationMessages).toHaveCount(1);
    await expect(claimPage.currencyValidation).toHaveText(claimData.TC_CLAIM_447.requiredMessage);
  });

  test("TC_CLAIM_448 - Employee and Currency submission should require only Event @negative @validation @regression", async ({ claimPage }) => {
    await claimPage.selectEmployee(claimData.TC_CLAIM_448.employeeSearch);
    await claimPage.selectFirstCurrency();
    await claimPage.createButton.click();
    await expect(claimPage.validationMessages).toHaveCount(1);
    await expect(claimPage.eventValidation).toHaveText(claimData.TC_CLAIM_448.requiredMessage);
  });

  test("TC_CLAIM_449 - Remarks should remain optional during required validation @negative @validation @regression", async ({ claimPage }) => {
    await claimPage.createButton.click();
    await expect(claimPage.remarksValidation).toHaveCount(0);
    await expect(claimPage.validationMessages).toHaveCount(
      claimData.TC_CLAIM_449.expectedValidationCount,
    );
  });

  test("TC_CLAIM_450 - Cancel action should remain visible after validation errors @negative @validation @cancel @regression", async ({ claimPage }) => {
    await claimPage.createButton.click();
    await expect(claimPage.validationMessages.first()).toBeVisible();
    await expect(claimPage.cancelButton).toBeVisible();
    await expect(claimPage.cancelButton).toBeEnabled();
  });

  test("TC_CLAIM_451 - Event selection should persist while Remarks are edited @positive @filter @form @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_451;
    const selectedEvent = await claimPage.selectFirstEvent();
    await claimPage.remarksInput.fill(data.remarks);
    await expect(claimPage.eventDropdown).toContainText(selectedEvent);
    await expect(claimPage.remarksInput).toHaveValue(data.remarks);
  });

  test("TC_CLAIM_452 - Currency selection should persist while Remarks are edited @positive @filter @form @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_452;
    const selectedCurrency = await claimPage.selectFirstCurrency();
    await claimPage.remarksInput.fill(data.remarks);
    await expect(claimPage.currencyDropdown).toContainText(selectedCurrency);
    await expect(claimPage.remarksInput).toHaveValue(data.remarks);
  });

  test("TC_CLAIM_453 - Claim request should display the required-fields hint @smoke @validation @regression", async ({ claimPage }) => {
    await expect(claimPage.requiredFieldsHint).toBeVisible();
    await expect(claimPage.requiredFieldsHint).toHaveText(
      claimData.TC_CLAIM_453.requiredHint,
    );
  });

  test("TC_CLAIM_454 - Escape should close Employee autocomplete suggestions @positive @autocomplete @keyboard @regression", async ({ page, claimPage }) => {
    await claimPage.employeeNameInput.fill(claimData.TC_CLAIM_454.employeeSearch);
    await expect(claimPage.autocompleteDropdown).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(claimPage.autocompleteDropdown).toBeHidden();
  });

  test("TC_CLAIM_455 - Employee selection should persist after selecting Event @positive @autocomplete @filter @regression", async ({ claimPage }) => {
    const selectedEmployee = await claimPage.selectEmployee(
      claimData.TC_CLAIM_455.employeeSearch,
    );
    await claimPage.selectFirstEvent();
    await expect(claimPage.employeeNameInput).toHaveValue(selectedEmployee);
  });

  test("TC_CLAIM_456 - Employee selection should persist after selecting Currency @positive @autocomplete @filter @regression", async ({ claimPage }) => {
    const selectedEmployee = await claimPage.selectEmployee(
      claimData.TC_CLAIM_456.employeeSearch,
    );
    await claimPage.selectFirstCurrency();
    await expect(claimPage.employeeNameInput).toHaveValue(selectedEmployee);
  });

  test("TC_CLAIM_457 - Event and Currency selections should persist while Remarks are edited @positive @filter @form @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_457;
    const selectedEvent = await claimPage.selectFirstEvent();
    const selectedCurrency = await claimPage.selectFirstCurrency();
    await claimPage.remarksInput.fill(data.remarks);
    await expect(claimPage.eventDropdown).toContainText(selectedEvent);
    await expect(claimPage.currencyDropdown).toContainText(selectedCurrency);
  });

  test("TC_CLAIM_458 - Create action should remain enabled after editing Remarks @positive @form @regression", async ({ claimPage }) => {
    await claimPage.remarksInput.fill(claimData.TC_CLAIM_458.remarks);
    await expect(claimPage.createButton).toBeEnabled();
  });

  test("TC_CLAIM_459 - Cancel should leave the form after required validation @negative @validation @cancel @regression", async ({ page, claimPage }) => {
    await claimPage.createButton.click();
    await expect(claimPage.validationMessages.first()).toBeVisible();
    await claimPage.cancelButton.click();
    await expect(page.getByRole("heading", {
      name: claimData.TC_CLAIM_459.pageHeading,
    })).toBeVisible();
  });

  test("TC_CLAIM_460 - Reopened form should clear previous required validation @negative @validation @navigation @regression", async ({ claimPage }) => {
    await claimPage.createButton.click();
    await expect(claimPage.validationMessages.first()).toBeVisible();
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.validationMessages).toHaveCount(0);
  });

  test("TC_CLAIM_461 - Reopened form should restore all required controls to defaults @positive @cancel @navigation @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_461;
    await claimPage.selectEmployee(data.employeeSearch);
    await claimPage.selectFirstEvent();
    await claimPage.selectFirstCurrency();
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.employeeNameInput).toHaveValue("");
    await expect(claimPage.eventDropdown).toContainText(data.defaultDropdownValue);
    await expect(claimPage.currencyDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_CLAIM_462 - Claim request should remain usable after repeated cancel and reopen @positive @cancel @navigation @regression", async ({ claimPage }) => {
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.heading).toHaveText(
      claimData.TC_CLAIM_462.pageHeading,
    );
    await expect(claimPage.createButton).toBeEnabled();
  });

  test("TC_CLAIM_463 - Selected employee should be removable from the request @positive @autocomplete @form @regression", async ({ claimPage }) => {
    await claimPage.selectEmployee(claimData.TC_CLAIM_463.employeeSearch);
    await claimPage.employeeNameInput.clear();
    await expect(claimPage.employeeNameInput).toHaveValue("");
  });

  test("TC_CLAIM_464 - Cleared employee should become required on submission @negative @validation @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_464;
    await claimPage.selectEmployee(data.employeeSearch);
    await claimPage.employeeNameInput.clear();
    await claimPage.selectFirstEvent();
    await claimPage.selectFirstCurrency();
    await claimPage.createButton.click();
    await expect(claimPage.employeeNameValidation).toHaveText(
      data.requiredMessage,
    );
  });

  test("TC_CLAIM_465 - Unknown employee text should show invalid validation @negative @autocomplete @validation @regression", async ({ page, claimPage }) => {
    const data = claimData.TC_CLAIM_465;
    await claimPage.employeeNameInput.fill(
      `${data.employeeNamePrefix}${Date.now()}`,
    );
    await expect(claimPage.autocompleteNoRecords).toBeVisible();
    await page.keyboard.press("Escape");
    await claimPage.createButton.click();
    await expect(claimPage.employeeNameValidation).toHaveText(
      data.invalidMessage,
    );
  });

  test("TC_CLAIM_466 - Unknown employee text should remain after no autocomplete records @negative @autocomplete @regression", async ({ claimPage }) => {
    const employeeName = `${claimData.TC_CLAIM_466.employeeNamePrefix}${Date.now()}`;
    await claimPage.employeeNameInput.fill(employeeName);
    await expect(claimPage.autocompleteNoRecords).toBeVisible();
    await expect(claimPage.employeeNameInput).toHaveValue(employeeName);
  });

  test("TC_CLAIM_467 - Escape should preserve unknown employee text while closing suggestions @negative @autocomplete @keyboard @regression", async ({ page, claimPage }) => {
    const employeeName = `${claimData.TC_CLAIM_467.employeeNamePrefix}${Date.now()}`;
    await claimPage.employeeNameInput.fill(employeeName);
    await expect(claimPage.autocompleteNoRecords).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(claimPage.autocompleteDropdown).toBeHidden();
    await expect(claimPage.employeeNameInput).toHaveValue(employeeName);
  });

  test("TC_CLAIM_468 - Cancel should discard unknown employee text @negative @autocomplete @cancel @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_468;
    await claimPage.employeeNameInput.fill(
      `${data.employeeNamePrefix}${Date.now()}`,
    );
    await expect(claimPage.autocompleteNoRecords).toBeVisible();
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.employeeNameInput).toHaveValue("");
  });

  test("TC_CLAIM_469 - Reopened form should clear invalid employee validation @negative @validation @navigation @regression", async ({ page, claimPage }) => {
    const data = claimData.TC_CLAIM_469;
    await claimPage.employeeNameInput.fill(
      `${data.employeeNamePrefix}${Date.now()}`,
    );
    await expect(claimPage.autocompleteNoRecords).toBeVisible();
    await page.keyboard.press("Escape");
    await claimPage.createButton.click();
    await expect(claimPage.employeeNameValidation).toBeVisible();
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.employeeNameValidation).toHaveCount(0);
  });

  test("TC_CLAIM_470 - Remarks should preserve leading and trailing spaces while editing @positive @form @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_470;
    await claimPage.remarksInput.fill(data.remarks);
    await expect(claimPage.remarksInput).toHaveValue(data.remarks);
  });

  test("TC_CLAIM_471 - Cancel should discard Event and Currency selections together @positive @filter @cancel @regression", async ({ claimPage }) => {
    const data = claimData.TC_CLAIM_471;
    await claimPage.selectFirstEvent();
    await claimPage.selectFirstCurrency();
    await claimPage.cancelButton.click();
    await claimPage.gotoAssignClaim();
    await expect(claimPage.eventDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(claimPage.currencyDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_CLAIM_472 - Form actions should remain usable after closing autocomplete with Escape @positive @autocomplete @keyboard @regression", async ({ page, claimPage }) => {
    await claimPage.employeeNameInput.fill(claimData.TC_CLAIM_472.employeeSearch);
    await expect(claimPage.autocompleteDropdown).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(claimPage.createButton).toBeEnabled();
    await expect(claimPage.cancelButton).toBeEnabled();
  });
});
