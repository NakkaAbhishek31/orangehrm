# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance\performance.spec.ts >> Performance - Employee Reviews >> TC_PERFORMANCE_216 - Reset should clear employee name @positive @reset @regression
- Location: tests\Performance\performance.spec.ts:535:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('form').locator('.oxd-input-group').filter({ has: locator('label').getByText('Employee Name', { exact: true }) }).locator('input')
Expected: ""
Received: "ResetEmployee1787760100447"
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for locator('form').locator('.oxd-input-group').filter({ has: locator('label').getByText('Employee Name', { exact: true }) }).locator('input')
    43 × locator resolved to <input data-v-75e744cd="" placeholder="Type for hints..."/>
       - unexpected value "ResetEmployee1787760100447"

```

```yaml
- textbox "Type for hints...": ResetEmployee1787760100447
```

# Test source

```ts
  446 |   }) => {
  447 |     const data = performanceData.TC_PERFORMANCE_213;
  448 | 
  449 |     await navigationPage.gotoPerformance();
  450 |     await performancePage.gotoEmployeeReviews();
  451 | 
  452 |     const selectedJobTitle =
  453 |       await performancePage.selectFirstAvailableDropdownOption(
  454 |         performancePage.jobTitleDropdown,
  455 |       );
  456 |     const selectedSubUnit =
  457 |       await performancePage.selectFirstAvailableDropdownOption(
  458 |         performancePage.subUnitDropdown,
  459 |       );
  460 |     const selectedStatus =
  461 |       await performancePage.selectFirstAvailableDropdownOption(
  462 |         performancePage.reviewStatusDropdown,
  463 |       );
  464 | 
  465 |     await performancePage.searchButton.click();
  466 |     await performancePage.waitForReviewResults();
  467 | 
  468 |     await expect(performancePage.jobTitleDropdown).toContainText(
  469 |       selectedJobTitle,
  470 |     );
  471 |     await expect(performancePage.subUnitDropdown).toContainText(
  472 |       selectedSubUnit,
  473 |     );
  474 |     await expect(performancePage.reviewStatusDropdown).toContainText(
  475 |       selectedStatus,
  476 |     );
  477 |     await expect(performancePage.employeeReviewsHeading).toHaveText(
  478 |       data.pageHeading,
  479 |     );
  480 |   });
  481 | 
  482 |   test("TC_PERFORMANCE_214 - Employee Review filters should show their default values @smoke @filter @regression", async ({
  483 |     navigationPage,
  484 |     performancePage,
  485 |   }) => {
  486 |     const data = performanceData.TC_PERFORMANCE_214;
  487 | 
  488 |     await navigationPage.gotoPerformance();
  489 |     await performancePage.gotoEmployeeReviews();
  490 | 
  491 |     await expect(performancePage.employeeNameInput).toHaveValue("");
  492 |     await expect(performancePage.jobTitleDropdown).toContainText(
  493 |       data.defaultDropdownValue,
  494 |     );
  495 |     await expect(performancePage.subUnitDropdown).toContainText(
  496 |       data.defaultDropdownValue,
  497 |     );
  498 |     await expect(performancePage.reviewStatusDropdown).toContainText(
  499 |       data.defaultDropdownValue,
  500 |     );
  501 |     await expect(performancePage.fromDateInput).not.toHaveValue("");
  502 |     await expect(performancePage.toDateInput).not.toHaveValue("");
  503 |   });
  504 | 
  505 |   test("TC_PERFORMANCE_215 - Reset should remain idempotent when clicked repeatedly @positive @reset @filter @regression", async ({
  506 |     page,
  507 |     navigationPage,
  508 |     performancePage,
  509 |   }) => {
  510 |     const data = performanceData.TC_PERFORMANCE_215;
  511 | 
  512 |     await navigationPage.gotoPerformance();
  513 |     await performancePage.gotoEmployeeReviews();
  514 | 
  515 |     await performancePage.employeeNameInput.fill(
  516 |       `${data.employeeNamePrefix}${Date.now()}`,
  517 |     );
  518 |     await page.keyboard.press("Escape");
  519 | 
  520 |     await performancePage.resetButton.click();
  521 |     await performancePage.resetButton.click();
  522 | 
  523 |     await expect(performancePage.employeeNameInput).toHaveValue("");
  524 |     await expect(performancePage.jobTitleDropdown).toContainText(
  525 |       data.defaultDropdownValue,
  526 |     );
  527 |     await expect(performancePage.subUnitDropdown).toContainText(
  528 |       data.defaultDropdownValue,
  529 |     );
  530 |     await expect(performancePage.reviewStatusDropdown).toContainText(
  531 |       data.defaultDropdownValue,
  532 |     );
  533 |   });
  534 | 
  535 |   test("TC_PERFORMANCE_216 - Reset should clear employee name @positive @reset @regression", async ({
  536 |     page,
  537 |     navigationPage,
  538 |     performancePage,
  539 |   }) => {
  540 |     const data=performanceData.TC_PERFORMANCE_216
  541 |     await navigationPage.gotoPerformance();
  542 |     await performancePage.gotoEmployeeReviews();
  543 |     await performancePage.employeeNameInput.fill(`${data.employeeNamePrefix}${Date.now()}`);
  544 |     await page.keyboard.press("Escape");
  545 |     await performancePage.resetButton.click();
> 546 |     await expect(performancePage.employeeNameInput).toHaveValue(data.emptyValue);
      |                                                     ^ Error: expect(locator).toHaveValue(expected) failed
  547 |   });
  548 | 
  549 |   test("TC_PERFORMANCE_217 - Reset should clear job title @positive @reset @regression", async ({
  550 |     navigationPage,
  551 |     performancePage,
  552 |   }) => {
  553 |     const data=performanceData.TC_PERFORMANCE_217
  554 |     await navigationPage.gotoPerformance();
  555 |     await performancePage.gotoEmployeeReviews();
  556 |     await performancePage.selectFirstAvailableDropdownOption(
  557 |       performancePage.jobTitleDropdown,
  558 |     );
  559 |     await performancePage.resetButton.click();
  560 |     await expect(performancePage.jobTitleDropdown).toContainText(
  561 |       data.defaultDropdownValue,
  562 |     );
  563 |   });
  564 | 
  565 |   test("TC_PERFORMANCE_218 - Reset should clear sub unit @positive @reset @regression", async ({
  566 |     navigationPage,
  567 |     performancePage,
  568 |   }) => {
  569 |     const data=performanceData.TC_PERFORMANCE_218
  570 |     await navigationPage.gotoPerformance();
  571 |     await performancePage.gotoEmployeeReviews();
  572 |     await performancePage.selectFirstAvailableDropdownOption(
  573 |       performancePage.subUnitDropdown,
  574 |     );
  575 |     await performancePage.resetButton.click();
  576 |     await expect(performancePage.subUnitDropdown).toContainText(
  577 |       data.defaultDropdownValue,
  578 |     );
  579 |   });
  580 | 
  581 |   test("TC_PERFORMANCE_219 - Reset should clear review status @positive @reset @regression", async ({
  582 |     navigationPage,
  583 |     performancePage,
  584 |   }) => {
  585 |     const data=performanceData.TC_PERFORMANCE_219
  586 |     await navigationPage.gotoPerformance();
  587 |     await performancePage.gotoEmployeeReviews();
  588 |     await performancePage.selectFirstAvailableDropdownOption(
  589 |       performancePage.reviewStatusDropdown,
  590 |     );
  591 |     await performancePage.resetButton.click();
  592 |     await expect(performancePage.reviewStatusDropdown).toContainText(
  593 |       data.defaultDropdownValue,
  594 |     );
  595 |   });
  596 | 
  597 |   test("TC_PERFORMANCE_220 - Reset should restore dates @positive @reset @date @regression", async ({
  598 |     navigationPage,
  599 |     performancePage,
  600 |   }) => {
  601 |     const data = performanceData.TC_PERFORMANCE_220;
  602 |     await navigationPage.gotoPerformance();
  603 |     await performancePage.gotoEmployeeReviews();
  604 |     const from = await performancePage.fromDateInput.inputValue();
  605 |     const to = await performancePage.toDateInput.inputValue();
  606 |     await performancePage.fromDateInput.fill(data.fromDate);
  607 |     await performancePage.toDateInput.fill(data.toDate);
  608 |     await performancePage.resetButton.click();
  609 |     await expect(performancePage.fromDateInput).toHaveValue(from);
  610 |     await expect(performancePage.toDateInput).toHaveValue(to);
  611 |   });
  612 | 
  613 |   test("TC_PERFORMANCE_221 - Job title should persist after search @positive @persistence @regression", async ({
  614 |     navigationPage,
  615 |     performancePage,
  616 |   }) => {
  617 |     await navigationPage.gotoPerformance();
  618 |     await performancePage.gotoEmployeeReviews();
  619 |     const value = await performancePage.selectFirstAvailableDropdownOption(
  620 |       performancePage.jobTitleDropdown,
  621 |     );
  622 |     await performancePage.searchButton.click();
  623 |     await performancePage.waitForReviewResults();
  624 |     await expect(performancePage.jobTitleDropdown).toContainText(value);
  625 |   });
  626 | 
  627 |   test("TC_PERFORMANCE_222 - Sub unit should persist after search @positive @persistence @regression", async ({
  628 |     navigationPage,
  629 |     performancePage,
  630 |   }) => {
  631 |     await navigationPage.gotoPerformance();
  632 |     await performancePage.gotoEmployeeReviews();
  633 |     const value = await performancePage.selectFirstAvailableDropdownOption(
  634 |       performancePage.subUnitDropdown,
  635 |     );
  636 |     await performancePage.searchButton.click();
  637 |     await performancePage.waitForReviewResults();
  638 |     await expect(performancePage.subUnitDropdown).toContainText(value);
  639 |   });
  640 | 
  641 |   test("TC_PERFORMANCE_223 - Review status should persist after search @positive @persistence @regression", async ({
  642 |     navigationPage,
  643 |     performancePage,
  644 |   }) => {
  645 |     await navigationPage.gotoPerformance();
  646 |     await performancePage.gotoEmployeeReviews();
```