# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_057 - Admin should delete multiple System Users using bulk selection @positive @bulk-delete @regression
- Location: tests\Admin\admin-users.spec.ts:1071:6

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('dialog').getByRole('button', { name: 'Yes, Delete', exact: true })

```

# Page snapshot

```yaml
- generic [ref=f12e2]:
  - generic [ref=f12e3]:
    - generic:
      - complementary [ref=f12e4]:
        - navigation "Sidepanel" [ref=f12e5]:
          - generic [ref=f12e6]:
            - link [ref=f12e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f12e9]
            - text: 
          - generic [ref=f12e10]:
            - generic [ref=f12e11]:
              - generic [ref=f12e12]:
                - textbox "Search" [ref=f12e15]
                - button "" [ref=f12e16] [cursor=pointer]
              - separator [ref=f12e18]
            - list [ref=f12e19]:
              - listitem [ref=f12e20]:
                - link "Admin" [ref=f12e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f12e25]:
                - link "PIM" [ref=f12e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f12e41]:
                - link "Leave" [ref=f12e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f12e46]:
                - link "Time" [ref=f12e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f12e54]:
                - link "Recruitment" [ref=f12e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f12e62]:
                - link "My Info" [ref=f12e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f12e70]:
                - link "Performance" [ref=f12e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f12e80]:
                - link "Dashboard" [ref=f12e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f12e85]:
                - link "Directory" [ref=f12e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f12e90]:
                - link "Maintenance" [ref=f12e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f12e96]:
                - link "Claim" [ref=f12e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f12e105]:
                - link "Buzz" [ref=f12e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f12e110]:
        - generic [ref=f12e111]:
          - generic [ref=f12e112]:
            - text: 
            - generic [ref=f12e113]:
              - heading "Admin" [level=6] [ref=f12e114]
              - heading "/ User Management" [level=6] [ref=f12e115]
          - link [ref=f12e117]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f12e118] [cursor=pointer]
          - list [ref=f12e124]:
            - listitem [ref=f12e125]:
              - generic [ref=f12e126] [cursor=pointer]:
                - img "profile picture" [ref=f12e127]
                - paragraph [ref=f12e128]: rudix Snow
                - generic [ref=f12e129]: 
        - navigation "Topbar Menu" [ref=f12e131]:
          - list [ref=f12e132]:
            - listitem [ref=f12e133] [cursor=pointer]:
              - generic [ref=f12e134]:
                - text: User Management
                - generic [ref=f12e135]: 
            - listitem [ref=f12e136] [cursor=pointer]:
              - generic [ref=f12e137]:
                - text: Job
                - generic [ref=f12e138]: 
            - listitem [ref=f12e139] [cursor=pointer]:
              - generic [ref=f12e140]:
                - text: Organization
                - generic [ref=f12e141]: 
            - listitem [ref=f12e142] [cursor=pointer]:
              - generic [ref=f12e143]:
                - text: Qualifications
                - generic [ref=f12e144]: 
            - listitem [ref=f12e145] [cursor=pointer]:
              - link "Nationalities" [ref=f12e146]:
                - /url: "#"
            - listitem [ref=f12e147] [cursor=pointer]:
              - link "Corporate Branding" [ref=f12e148]:
                - /url: "#"
            - listitem [ref=f12e149] [cursor=pointer]:
              - generic [ref=f12e150]:
                - text: Configuration
                - generic [ref=f12e151]: 
            - button "" [ref=f12e153] [cursor=pointer]
    - generic [ref=f12e155]:
      - generic [ref=f12e157]:
        - generic [ref=f12e158]:
          - generic [ref=f12e159]:
            - heading "System Users" [level=5] [ref=f12e161]
            - button "" [ref=f12e164] [cursor=pointer]
          - separator [ref=f12e166]
          - generic [ref=f12e168]:
            - generic [ref=f12e170]:
              - generic [ref=f12e172]:
                - generic [ref=f12e173]: Username
                - textbox [ref=f12e176]
              - generic [ref=f12e178]:
                - generic [ref=f12e179]: User Role
                - generic [ref=f12e183] [cursor=pointer]:
                  - generic [ref=f12e184]: "-- Select --"
                  - generic [ref=f12e185]: 
              - generic [ref=f12e188]:
                - generic [ref=f12e189]: Employee Name
                - textbox "Type for hints..." [ref=f12e194]
              - generic [ref=f12e196]:
                - generic [ref=f12e197]: Status
                - generic [ref=f12e201] [cursor=pointer]:
                  - generic [ref=f12e202]: "-- Select --"
                  - generic [ref=f12e203]: 
            - separator [ref=f12e205]
            - generic [ref=f12e206]:
              - button "Reset" [ref=f12e207] [cursor=pointer]
              - button "Search" [ref=f12e208] [cursor=pointer]
        - generic [ref=f12e209]:
          - button " Add" [ref=f12e211] [cursor=pointer]:
            - generic [ref=f12e212]: 
            - text: Add
          - generic [ref=f12e213]:
            - separator [ref=f12e214]
            - generic [ref=f12e216]:
              - generic [ref=f12e217]: (2) Records Selected
              - button " Delete Selected" [active] [ref=f12e218] [cursor=pointer]:
                - generic [ref=f12e219]: 
                - text: Delete Selected
          - table [ref=f12e221]:
            - rowgroup [ref=f12e222]:
              - row [ref=f12e223]:
                - columnheader "" [ref=f12e224]:
                  - generic [ref=f12e226] [cursor=pointer]:
                    - checkbox "" [checked] [ref=f12e227]
                    - generic [ref=f12e228]: 
                - columnheader "Username " [ref=f12e230]:
                  - text: Username
                  - generic [ref=f12e231]:
                    - generic [ref=f12e232] [cursor=pointer]: 
                    - text:  
                - columnheader "User Role " [ref=f12e233]:
                  - text: User Role
                  - generic [ref=f12e234]:
                    - generic [ref=f12e235] [cursor=pointer]: 
                    - text:  
                - columnheader "Employee Name " [ref=f12e236]:
                  - text: Employee Name
                  - generic [ref=f12e237]:
                    - generic [ref=f12e238] [cursor=pointer]: 
                    - text:  
                - columnheader "Status " [ref=f12e239]:
                  - text: Status
                  - generic [ref=f12e240]:
                    - generic [ref=f12e241] [cursor=pointer]: 
                    - text:  
                - columnheader "Actions" [ref=f12e242]
            - rowgroup [ref=f12e243]:
              - row [ref=f12e245]:
                - cell "" [ref=f12e246]:
                  - generic [ref=f12e250]:
                    - checkbox "" [ref=f12e251]
                    - generic [ref=f12e252]: 
                - cell "Admin" [ref=f12e254]
                - cell "Admin" [ref=f12e256]
                - cell "rudix Snow" [ref=f12e258]
                - cell "Enabled" [ref=f12e260]
                - cell [ref=f12e262]:
                  - generic [ref=f12e263]:
                    - button "" [ref=f12e264] [cursor=pointer]
                    - button "" [ref=f12e266] [cursor=pointer]
              - row [ref=f12e269]:
                - cell "" [ref=f12e270]:
                  - generic [ref=f12e273] [cursor=pointer]:
                    - checkbox "" [ref=f12e274]
                    - generic [ref=f12e275]: 
                - cell "Employee" [ref=f12e277]
                - cell "ESS" [ref=f12e279]
                - cell "Employee User" [ref=f12e281]
                - cell "Enabled" [ref=f12e283]
                - cell [ref=f12e285]:
                  - generic [ref=f12e286]:
                    - button "" [ref=f12e287] [cursor=pointer]
                    - button "" [ref=f12e289] [cursor=pointer]
              - row [ref=f12e292]:
                - cell "" [ref=f12e293]:
                  - generic [ref=f12e296] [cursor=pointer]:
                    - checkbox "" [checked] [ref=f12e297]
                    - generic [ref=f12e298]: 
                - cell "essA1785901382071149" [ref=f12e300]
                - cell "ESS" [ref=f12e302]
                - cell "AutoA1785901382071149 User" [ref=f12e304]
                - cell "Enabled" [ref=f12e306]
                - cell [ref=f12e308]:
                  - generic [ref=f12e309]:
                    - button "" [ref=f12e310] [cursor=pointer]
                    - button "" [ref=f12e312] [cursor=pointer]
              - row [ref=f12e315]:
                - cell "" [ref=f12e316]:
                  - generic [ref=f12e319] [cursor=pointer]:
                    - checkbox "" [checked] [ref=f12e320]
                    - generic [ref=f12e321]: 
                - cell "essB1785901382071149" [ref=f12e323]
                - cell "ESS" [ref=f12e325]
                - cell "AutoB1785901382071149 User" [ref=f12e327]
                - cell "Enabled" [ref=f12e329]
                - cell [ref=f12e331]:
                  - generic [ref=f12e332]:
                    - button "" [ref=f12e333] [cursor=pointer]
                    - button "" [ref=f12e335] [cursor=pointer]
              - row [ref=f12e338]:
                - cell "" [ref=f12e339]:
                  - generic [ref=f12e342] [cursor=pointer]:
                    - checkbox "" [ref=f12e343]
                    - generic [ref=f12e344]: 
                - cell "Jay1234" [ref=f12e346]
                - cell "Admin" [ref=f12e348]
                - cell "rudix Snow" [ref=f12e350]
                - cell "Enabled" [ref=f12e352]
                - cell [ref=f12e354]:
                  - generic [ref=f12e355]:
                    - button "" [ref=f12e356] [cursor=pointer]
                    - button "" [ref=f12e358] [cursor=pointer]
      - generic [ref=f12e361]:
        - paragraph [ref=f12e362]: OrangeHRM OS 5.9
        - paragraph [ref=f12e363]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f12e364] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - dialog [ref=f12e365]:
    - document [ref=f12e368]:
      - button "×" [ref=f12e369] [cursor=pointer]
      - paragraph [ref=f12e371]: Are you Sure?
      - paragraph [ref=f12e373]: The selected record will be permanently deleted. Are you sure you want to continue?
      - generic [ref=f12e374]:
        - button "No, Cancel" [ref=f12e375] [cursor=pointer]
        - button " Yes, Delete" [ref=f12e376] [cursor=pointer]:
          - generic [ref=f12e377]: 
          - text: Yes, Delete
```

# Test source

```ts
  614 | async goToNextSystemUsersPage(): Promise<void> {
  615 |   await expect(
  616 |     this.nextPageButton
  617 |   ).toBeVisible();
  618 | 
  619 |   await expect(
  620 |     this.nextPageButton
  621 |   ).toBeEnabled();
  622 | 
  623 |   await this.nextPageButton.click();
  624 | 
  625 |   await expect(
  626 |     this.loadingSpinner
  627 |   ).toBeHidden();
  628 | }
  629 | 
  630 | async goToPreviousSystemUsersPage(): Promise<void> {
  631 |   await expect(
  632 |     this.previousPageButton
  633 |   ).toBeVisible();
  634 | 
  635 |   await expect(
  636 |     this.previousPageButton
  637 |   ).toBeEnabled();
  638 | 
  639 |   await this.previousPageButton.click();
  640 | 
  641 |   await expect(
  642 |     this.loadingSpinner
  643 |   ).toBeHidden();
  644 | }
  645 | 
  646 | async selectSystemUsers(
  647 |   usernames: string[]
  648 | ): Promise<void> {
  649 |   for (const username of usernames) {
  650 |     const userRow = this.userRows.filter({
  651 |       has: this.page
  652 |         .locator('.oxd-table-cell')
  653 |         .nth(1)
  654 |         .getByText(username, {
  655 |           exact: true,
  656 |         }),
  657 |     });
  658 | 
  659 |     await expect(userRow).toHaveCount(1);
  660 | 
  661 |     const checkbox = userRow.locator(
  662 |       'input[type="checkbox"]'
  663 |     );
  664 | 
  665 |     await checkbox.check({
  666 |       force: true,
  667 |     });
  668 | 
  669 |     await expect(checkbox).toBeChecked();
  670 |   }
  671 | }
  672 | 
  673 | async deleteSelectedSystemUsers(): Promise<void> {
  674 |   await expect(
  675 |     this.deleteSelectedButton
  676 |   ).toBeVisible();
  677 | 
  678 |   await this.deleteSelectedButton.click();
  679 | 
  680 |   const confirmationDialog =
  681 |     this.page.getByRole('dialog');
  682 | 
  683 |   await expect(
  684 |     confirmationDialog
  685 |   ).toBeVisible();
  686 | 
  687 |   const deleteResponse =
  688 |     this.page.waitForResponse(
  689 |       response =>
  690 |         response.url().includes(
  691 |           '/api/v2/admin/users'
  692 |         ) &&
  693 |         response.request().method() ===
  694 |           'DELETE' &&
  695 |         response.ok(),
  696 |       {
  697 |         timeout: 20_000,
  698 |       }
  699 |     );
  700 | 
  701 |   const deletedToast = expect(
  702 |     this.toastMessage.filter({
  703 |       hasText: /Successfully Deleted/i,
  704 |     })
  705 |   ).toBeVisible({
  706 |     timeout: 20_000,
  707 |   });
  708 | 
  709 |   await confirmationDialog
  710 |     .getByRole('button', {
  711 |       name: 'Yes, Delete',
  712 |       exact: true,
  713 |     })
> 714 |     .click();
      |      ^ Error: locator.click: Test ended.
  715 | 
  716 |   await Promise.all([
  717 |     deleteResponse,
  718 |     deletedToast,
  719 |   ]);
  720 | 
  721 |   await expect(
  722 |     confirmationDialog
  723 |   ).toBeHidden();
  724 | }
  725 | 
  726 | async selectAllVisibleSystemUsers(): Promise<void> {
  727 |   const headerCheckbox = this.page.locator(
  728 |     '.oxd-table-header input[type="checkbox"]'
  729 |   );
  730 | 
  731 |   const rowCheckboxes =
  732 |     this.userRows.locator(
  733 |       'input[type="checkbox"]'
  734 |     );
  735 | 
  736 |   const rowCount =
  737 |     await rowCheckboxes.count();
  738 | 
  739 |   expect(rowCount).toBeGreaterThan(0);
  740 | 
  741 |   await headerCheckbox.check({
  742 |     force: true,
  743 |   });
  744 | 
  745 |   await expect(
  746 |     headerCheckbox
  747 |   ).toBeChecked();
  748 | 
  749 |   for (
  750 |     let index = 0;
  751 |     index < rowCount;
  752 |     index++
  753 |   ) {
  754 |     await expect(
  755 |       rowCheckboxes.nth(index)
  756 |     ).toBeChecked();
  757 |   }
  758 | }
  759 | 
  760 | async deselectAllVisibleSystemUsers(): Promise<void> {
  761 |   const headerCheckbox = this.page.locator(
  762 |     '.oxd-table-header input[type="checkbox"]'
  763 |   );
  764 | 
  765 |   const rowCheckboxes =
  766 |     this.userRows.locator(
  767 |       'input[type="checkbox"]'
  768 |     );
  769 | 
  770 |   const rowCount =
  771 |     await rowCheckboxes.count();
  772 | 
  773 |   await headerCheckbox.uncheck({
  774 |     force: true,
  775 |   });
  776 | 
  777 |   await expect(
  778 |     headerCheckbox
  779 |   ).not.toBeChecked();
  780 | 
  781 |   for (
  782 |     let index = 0;
  783 |     index < rowCount;
  784 |     index++
  785 |   ) {
  786 |     await expect(
  787 |       rowCheckboxes.nth(index)
  788 |     ).not.toBeChecked();
  789 |   }
  790 | }
  791 | 
  792 | }
  793 | 
```