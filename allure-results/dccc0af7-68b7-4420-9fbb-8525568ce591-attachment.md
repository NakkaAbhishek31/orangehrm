# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance\performance.spec.ts >> Performance - Employee Reviews >> TC_PERFORMANCE_227 - Search should keep Employee Reviews URL @positive @search @regression
- Location: tests\Performance\performance.spec.ts:717:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://opensource-demo.orangehrmlive.com/performance/searchEvaluatePerformanceReview"
Received: "https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview"
Timeout:  20000ms

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    42 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Performance" [level=6]
  - heading "/ Manage Reviews" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Laal Singh Chadda
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configure 
      - listitem: Manage Reviews 
      - listitem:
        - link "My Trackers":
          - /url: "#"
      - listitem:
        - link "Employee Trackers":
          - /url: "#"
      - button ""
- heading "Employee Reviews" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select --  Include Current Employees Only  Review Status -- Select --  From Date
- textbox "yyyy-dd-mm": 2026-01-01
- text:  To Date
- textbox "yyyy-dd-mm": 2026-31-12
- text: 
- separator
- button "Reset"
- button "Search"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row "Employee  Job Title Sub Unit Review Period  Due Date  Review Status  Actions":
      - columnheader "Employee "
      - columnheader "Job Title"
      - columnheader "Sub Unit"
      - columnheader "Review Period "
      - columnheader "Due Date "
      - columnheader "Review Status "
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
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
  647 |     const value = await performancePage.selectFirstAvailableDropdownOption(
  648 |       performancePage.reviewStatusDropdown,
  649 |     );
  650 |     await performancePage.searchButton.click();
  651 |     await performancePage.waitForReviewResults();
  652 |     await expect(performancePage.reviewStatusDropdown).toContainText(value);
  653 |   });
  654 | 
  655 |   test("TC_PERFORMANCE_224 - Combined filters should persist after search @positive @filter @regression", async ({
  656 |     navigationPage,
  657 |     performancePage,
  658 |   }) => {
  659 |     await navigationPage.gotoPerformance();
  660 |     await performancePage.gotoEmployeeReviews();
  661 |     const job = await performancePage.selectFirstAvailableDropdownOption(
  662 |       performancePage.jobTitleDropdown,
  663 |     );
  664 |     const unit = await performancePage.selectFirstAvailableDropdownOption(
  665 |       performancePage.subUnitDropdown,
  666 |     );
  667 |     const status = await performancePage.selectFirstAvailableDropdownOption(
  668 |       performancePage.reviewStatusDropdown,
  669 |     );
  670 |     await performancePage.searchButton.click();
  671 |     await performancePage.waitForReviewResults();
  672 |     await expect(performancePage.jobTitleDropdown).toContainText(job);
  673 |     await expect(performancePage.subUnitDropdown).toContainText(unit);
  674 |     await expect(performancePage.reviewStatusDropdown).toContainText(status);
  675 |   });
  676 | 
  677 |   test("TC_PERFORMANCE_225 - Reset should clear all dropdowns @positive @reset @regression", async ({
  678 |     navigationPage,
  679 |     performancePage,
  680 |   }) => {
  681 |     const data=performanceData.TC_PERFORMANCE_225
  682 |     await navigationPage.gotoPerformance();
  683 |     await performancePage.gotoEmployeeReviews();
  684 |     await performancePage.selectFirstAvailableDropdownOption(
  685 |       performancePage.jobTitleDropdown,
  686 |     );
  687 |     await performancePage.selectFirstAvailableDropdownOption(
  688 |       performancePage.subUnitDropdown,
  689 |     );
  690 |     await performancePage.selectFirstAvailableDropdownOption(
  691 |       performancePage.reviewStatusDropdown,
  692 |     );
  693 |     await performancePage.resetButton.click();
  694 |     await expect(performancePage.jobTitleDropdown).toContainText(
  695 |       data.defaultDropdownValue,
  696 |     );
  697 |     await expect(performancePage.subUnitDropdown).toContainText(data.defaultDropdownValue);
  698 |     await expect(performancePage.reviewStatusDropdown).toContainText(data.defaultDropdownValue
  699 |       ,
  700 |     );
  701 |   });
  702 | 
  703 |   test("TC_PERFORMANCE_226 - Reset should clear all dates @positive @reset @date @regression", async ({
  704 |     navigationPage,
  705 |     performancePage,
  706 |   }) => {
  707 |      const data=performanceData.TC_PERFORMANCE_226
  708 |     await navigationPage.gotoPerformance();
  709 |     await performancePage.gotoEmployeeReviews();
  710 |     await performancePage.fromDateInput.fill(data.fromDate);
  711 |     await performancePage.toDateInput.fill(data.toDate);
  712 |     await performancePage.resetButton.click();
  713 |     await expect(performancePage.fromDateInput).not.toHaveValue(data.fromDate);
  714 |     await expect(performancePage.toDateInput).not.toHaveValue(data.toDate);
  715 |   });
  716 | 
  717 |   test("TC_PERFORMANCE_227 - Search should keep Employee Reviews URL @positive @search @regression", async ({
  718 |     page,
  719 |     navigationPage,
  720 |     performancePage,
  721 |   }) => {
  722 |     const data=performanceData.TC_PERFORMANCE_227
  723 |     await navigationPage.gotoPerformance();
  724 |     await performancePage.gotoEmployeeReviews();
  725 |     await performancePage.searchButton.click();
  726 |     await performancePage.waitForReviewResults();
> 727 |     await expect(page).toHaveURL(
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  728 |      data.expectedUrlPath,
  729 |     );   
  730 |   });
  731 | 
  732 |   test("TC_PERFORMANCE_228 - Heading should remain after search @positive @search @regression", async ({
  733 |     navigationPage,
  734 |     performancePage,
  735 |   }) => {
  736 |     const data=performanceData.TC_PERFORMANCE_228
  737 |     await navigationPage.gotoPerformance();
  738 |     await performancePage.gotoEmployeeReviews();
  739 |     await performancePage.searchButton.click();
  740 |     await performancePage.waitForReviewResults();
  741 |     await expect(performancePage.employeeReviewsHeading).toHaveText(
  742 |       data.pageHeading,
  743 |     );
  744 |   });
  745 | 
  746 |   test("TC_PERFORMANCE_229 - Employee filter should be empty by default @positive @filter @regression", async ({
  747 |     navigationPage,
  748 |     performancePage,
  749 |   }) => {
  750 |     await navigationPage.gotoPerformance();
  751 |     await performancePage.gotoEmployeeReviews();
  752 |     await expect(performancePage.employeeNameInput).toHaveValue("");
  753 |   });
  754 | 
  755 |   test("TC_PERFORMANCE_230 - Job title should be unselected by default @positive @filter @regression", async ({
  756 |     navigationPage,
  757 |     performancePage,
  758 |   }) => {
  759 |     const data=performanceData.TC_PERFORMANCE_230
  760 |     await navigationPage.gotoPerformance();
  761 |     await performancePage.gotoEmployeeReviews();
  762 |     await expect(performancePage.jobTitleDropdown).toContainText(
  763 |       data.defaultDropdownValue,
  764 |     );
  765 |   });
  766 | 
  767 |   test("TC_PERFORMANCE_231 - Sub unit should be unselected by default @positive @filter @regression", async ({
  768 |     navigationPage,
  769 |     performancePage,
  770 |   }) => {
  771 |     const data=performanceData.TC_PERFORMANCE_231
  772 |     await navigationPage.gotoPerformance();
  773 |     await performancePage.gotoEmployeeReviews();
  774 |     await expect(performancePage.subUnitDropdown).toContainText(data.defaultDropdownValue);
  775 |   });
  776 | 
  777 |   test("TC_PERFORMANCE_232 - Review status should be unselected by default @positive @filter @regression", async ({
  778 |     navigationPage,
  779 |     performancePage,
  780 |   }) => {
  781 |     const data=performanceData.TC_PERFORMANCE_232
  782 |     await navigationPage.gotoPerformance();
  783 |     await performancePage.gotoEmployeeReviews();
  784 |     await expect(performancePage.reviewStatusDropdown).toContainText(
  785 |       data.defaultDropdownValue,
  786 |     );
  787 |   });
  788 | 
  789 |   test("TC_PERFORMANCE_233 - From Date should have a default value @positive @date @regression", async ({
  790 |     navigationPage,
  791 |     performancePage,
  792 |   }) => {
  793 |     await navigationPage.gotoPerformance();
  794 |     await performancePage.gotoEmployeeReviews();
  795 |     await expect(performancePage.fromDateInput).not.toHaveValue("");
  796 |   });
  797 | 
  798 |   test("TC_PERFORMANCE_234 - To Date should have a default value @positive @date @regression", async ({
  799 |     navigationPage,
  800 |     performancePage,
  801 |   }) => {
  802 |     await navigationPage.gotoPerformance();
  803 |     await performancePage.gotoEmployeeReviews();
  804 |     await expect(performancePage.toDateInput).not.toHaveValue("");
  805 |   });
  806 | 
  807 |   test("TC_PERFORMANCE_235 - Reset should clear invalid employee text @positive @reset @regression", async ({
  808 |     page,
  809 |     navigationPage,
  810 |     performancePage,
  811 |   }) => {
  812 |     await navigationPage.gotoPerformance();
  813 |     await performancePage.gotoEmployeeReviews();
  814 |     await performancePage.employeeNameInput.fill(
  815 |       `InvalidEmployee${Date.now()}`,
  816 |     );
  817 |     await page.keyboard.press("Escape");
  818 |     await performancePage.resetButton.click();
  819 |     await expect(performancePage.employeeNameInput).toHaveValue("");
  820 |   });
  821 | 
  822 |   test("TC_PERFORMANCE_236 - Reset should restore dates after search @positive @reset @regression", async ({
  823 |     navigationPage,
  824 |     performancePage,
  825 |   }) => {
  826 |     const data=performanceData.TC_PERFORMANCE_236
  827 |     await navigationPage.gotoPerformance();
```