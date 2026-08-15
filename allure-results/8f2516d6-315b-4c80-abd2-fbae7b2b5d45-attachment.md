# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:655:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(6)
Expected substring: "Scheduled"
Received string:    "Pending Approval (1.00)"
Timeout: 20000ms

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(6)
    43 × locator resolved to <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div>
       - unexpected value "Pending Approval (1.00)"

```

```yaml
- cell "Pending Approval (1.00)"
```

# Test source

```ts
  608 |     const toDate = dateFromOffset(data.toDaysOffset);
  609 | 
  610 |     await navigationPage.gotoLeave();
  611 | 
  612 |     await leavepage.fromDateInput.fill(fromDate);
  613 | 
  614 |     await leavepage.toDateInput.fill(toDate);
  615 | 
  616 |     await leavepage.searchButton.click();
  617 | 
  618 |     await expect(leavepage.loadingSpinner).toBeHidden();
  619 | 
  620 |     const pageOneRecords = await leavepage.getVisibleLeaveRecords();
  621 | 
  622 |     test.skip(
  623 |       pageOneRecords.length === 0,
  624 |       "No leave records are currently available",
  625 |     );
  626 | 
  627 |     const nextButtonCount = await leavepage.nextPageButton.count();
  628 | 
  629 |     test.skip(
  630 |       nextButtonCount === 0,
  631 |       "Leave List currently contains only one page",
  632 |     );
  633 | 
  634 |     await leavepage.nextPageButton.click();
  635 | 
  636 |     await expect
  637 |       .poll(async () => leavepage.getVisibleLeaveRecords(), {
  638 |         timeout: 15_000,
  639 |       })
  640 |       .not.toEqual(pageOneRecords);
  641 | 
  642 |     const pageTwoRecords = await leavepage.getVisibleLeaveRecords();
  643 | 
  644 |     expect(pageTwoRecords.length).toBeGreaterThan(0);
  645 | 
  646 |     await leavepage.previousPageButton.click();
  647 | 
  648 |     await expect
  649 |       .poll(async () => leavepage.getVisibleLeaveRecords(), {
  650 |         timeout: 15_000,
  651 |       })
  652 |       .toEqual(pageOneRecords);
  653 |   });
  654 | 
  655 |   test("TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression", async ({
  656 |     navigationPage,
  657 |     leavepage,
  658 |   }) => {
  659 |     const data = leaveData.TC_LEAVE_125;
  660 | 
  661 |     await navigationPage.gotoLeave();
  662 | 
  663 |     // Store the complete default status state.
  664 |     const defaultStatusText = (
  665 |       await leavepage.leaveStatusField.innerText()
  666 |     ).trim();
  667 | 
  668 |     const scheduledStatus = leavepage.leaveStatusField.getByText(
  669 |       data.leaveStatus,
  670 |       { exact: true },
  671 |     );
  672 | 
  673 |     const alreadySelected = (await scheduledStatus.count()) > 0;
  674 | 
  675 |     // Select Scheduled only when it is not
  676 |     // already selected by default.
  677 |     if (!alreadySelected) {
  678 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  679 |     }
  680 | 
  681 |     await expect(scheduledStatus).toBeVisible();
  682 | 
  683 |     // Search using Scheduled status.
  684 |     await leavepage.searchButton.click();
  685 | 
  686 |     await expect(leavepage.loadingSpinner).toBeHidden();
  687 | 
  688 |     // Verify Scheduled remains selected.
  689 |     await expect(scheduledStatus).toBeVisible();
  690 | 
  691 |     // The shared demo can return records or
  692 |     // display No Records Found.
  693 |     await expect(
  694 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  695 |     ).toBeVisible({
  696 |       timeout: 15_000,
  697 |     });
  698 | 
  699 |     const rowCount = await leavepage.leaveRows.count();
  700 | 
  701 |     if (rowCount > 0) {
  702 |       for (let index = 0; index < rowCount; index++) {
  703 |         const statusCell = leavepage.leaveRows
  704 |           .nth(index)
  705 |           .locator(".oxd-table-cell")
  706 |           .nth(6);
  707 | 
> 708 |         await expect(statusCell).toContainText(data.leaveStatus);
      |                                  ^ Error: expect(locator).toContainText(expected) failed
  709 |       }
  710 |     } else {
  711 |       await expect(leavepage.noRecordsFound).toBeVisible();
  712 |     }
  713 | 
  714 |     // Reset filters.
  715 |     await leavepage.resetButton.click();
  716 | 
  717 |     await expect(leavepage.loadingSpinner).toBeHidden();
  718 | 
  719 |     // Reset should restore the original default
  720 |     // status selection, which may include Scheduled.
  721 |     await expect
  722 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
  723 |         timeout: 15_000,
  724 |       })
  725 |       .toContain("-- Select --");
  726 |   });
  727 | 
  728 |   test("TC_LEAVE_126 - Admin should filter Leave List by Taken status @positive @filter @regression", async ({
  729 |     navigationPage,
  730 |     leavepage,
  731 |   }) => {
  732 |     const data = leaveData.TC_LEAVE_126;
  733 | 
  734 |     await navigationPage.gotoLeave();
  735 | 
  736 |     // Capture the original default status state.
  737 |     const defaultStatusText = (
  738 |       await leavepage.leaveStatusField.innerText()
  739 |     ).trim();
  740 | 
  741 |     const takenStatus = leavepage.leaveStatusField.getByText(data.leaveStatus, {
  742 |       exact: true,
  743 |     });
  744 | 
  745 |     const alreadySelected = (await takenStatus.count()) > 0;
  746 | 
  747 |     // Select Taken only when it is not
  748 |     // already selected by default.
  749 |     if (!alreadySelected) {
  750 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  751 |     }
  752 | 
  753 |     await expect(takenStatus).toBeVisible();
  754 | 
  755 |     // Search using Taken status.
  756 |     await leavepage.searchButton.click();
  757 | 
  758 |     await expect(leavepage.loadingSpinner).toBeHidden();
  759 | 
  760 |     // Verify Taken remains selected.
  761 |     await expect(takenStatus).toBeVisible();
  762 | 
  763 |     // Verify records or No Records Found.
  764 |     await expect(
  765 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  766 |     ).toBeVisible({
  767 |       timeout: 15_000,
  768 |     });
  769 | 
  770 |     const rowCount = await leavepage.leaveRows.count();
  771 | 
  772 |     if (rowCount > 0) {
  773 |       for (let index = 0; index < rowCount; index++) {
  774 |         const statusCell = leavepage.leaveRows
  775 |           .nth(index)
  776 |           .locator(".oxd-table-cell")
  777 |           .nth(6);
  778 | 
  779 |         await expect(statusCell).toContainText(data.leaveStatus);
  780 |       }
  781 |     } else {
  782 |       await expect(leavepage.noRecordsFound).toBeVisible();
  783 |     }
  784 | 
  785 |     // Reset filters.
  786 |     await leavepage.resetButton.click();
  787 | 
  788 |     await expect(leavepage.loadingSpinner).toBeHidden();
  789 | 
  790 |     // Verify the default status state is restored.
  791 |     await expect
  792 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
  793 |         timeout: 15_000,
  794 |       })
  795 |       .toContain("-- Select --");
  796 |   });
  797 | 
  798 |   test("TC_LEAVE_127 - Admin should filter Leave List by Cancelled status @positive @filter @regression", async ({
  799 |     navigationPage,
  800 |     leavepage,
  801 |   }) => {
  802 |     const data = leaveData.TC_LEAVE_127;
  803 | 
  804 |     await navigationPage.gotoLeave();
  805 | 
  806 |     const defaultDates = await leavepage.waitForDefaultDateRange();
  807 | 
  808 |     const defaultStatusText = (
```