# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression
- Location: tests\Admin\admin-users.spec.ts:1191:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 11
Received: 10

Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - generic [ref=f3e113]:
            - heading "Admin" [level=6] [ref=f3e114]
            - heading "/ User Management" [level=6] [ref=f3e115]
        - link [ref=f3e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e118] [cursor=pointer]
        - list [ref=f3e124]:
          - listitem [ref=f3e125]:
            - generic [ref=f3e126] [cursor=pointer]:
              - img "profile picture" [ref=f3e127]
              - paragraph [ref=f3e128]: Ge orged Russe lld
              - generic [ref=f3e129]: 
      - navigation "Topbar Menu" [ref=f3e131]:
        - list [ref=f3e132]:
          - listitem [ref=f3e133] [cursor=pointer]:
            - generic [ref=f3e134]:
              - text: User Management
              - generic [ref=f3e135]: 
          - listitem [ref=f3e136] [cursor=pointer]:
            - generic [ref=f3e137]:
              - text: Job
              - generic [ref=f3e138]: 
          - listitem [ref=f3e139] [cursor=pointer]:
            - generic [ref=f3e140]:
              - text: Organization
              - generic [ref=f3e141]: 
          - listitem [ref=f3e142] [cursor=pointer]:
            - generic [ref=f3e143]:
              - text: Qualifications
              - generic [ref=f3e144]: 
          - listitem [ref=f3e145] [cursor=pointer]:
            - link "Nationalities" [ref=f3e146]:
              - /url: "#"
          - listitem [ref=f3e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f3e148]:
              - /url: "#"
          - listitem [ref=f3e149] [cursor=pointer]:
            - generic [ref=f3e150]:
              - text: Configuration
              - generic [ref=f3e151]: 
          - button "" [ref=f3e153] [cursor=pointer]
  - generic [ref=f3e155]:
    - generic [ref=f3e157]:
      - generic [ref=f3e158]:
        - generic [ref=f3e159]:
          - heading "System Users" [level=5] [ref=f3e161]
          - button "" [ref=f3e164] [cursor=pointer]
        - separator [ref=f3e166]
        - generic [ref=f3e168]:
          - generic [ref=f3e170]:
            - generic [ref=f3e172]:
              - generic [ref=f3e173]: Username
              - textbox [ref=f3e176]
            - generic [ref=f3e178]:
              - generic [ref=f3e179]: User Role
              - generic [ref=f3e183] [cursor=pointer]:
                - generic [ref=f3e184]: "-- Select --"
                - generic [ref=f3e185]: 
            - generic [ref=f3e188]:
              - generic [ref=f3e189]: Employee Name
              - textbox "Type for hints..." [ref=f3e194]
            - generic [ref=f3e196]:
              - generic [ref=f3e197]: Status
              - generic [ref=f3e201] [cursor=pointer]:
                - generic [ref=f3e202]: "-- Select --"
                - generic [ref=f3e203]: 
          - separator [ref=f3e205]
          - generic [ref=f3e206]:
            - button "Reset" [ref=f3e207] [cursor=pointer]
            - button "Search" [ref=f3e208] [cursor=pointer]
      - generic [ref=f3e209]:
        - button " Add" [ref=f3e211] [cursor=pointer]:
          - generic [ref=f3e212]: 
          - text: Add
        - generic [ref=f3e213]:
          - separator [ref=f3e214]
          - generic [ref=f3e216]:
            - generic [ref=f3e217]: (10) Records Selected
            - button " Delete Selected" [ref=f3e218] [cursor=pointer]:
              - generic [ref=f3e219]: 
              - text: Delete Selected
        - table [ref=f3e221]:
          - rowgroup [ref=f3e222]:
            - row [ref=f3e223]:
              - columnheader "" [ref=f3e224]:
                - generic [ref=f3e226] [cursor=pointer]:
                  - checkbox "" [checked] [active] [ref=f3e227]
                  - generic [ref=f3e228]: 
              - columnheader "Username " [ref=f3e230]:
                - text: Username
                - generic [ref=f3e231]:
                  - generic [ref=f3e232] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f3e233]:
                - text: User Role
                - generic [ref=f3e234]:
                  - generic [ref=f3e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f3e236]:
                - text: Employee Name
                - generic [ref=f3e237]:
                  - generic [ref=f3e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f3e239]:
                - text: Status
                - generic [ref=f3e240]:
                  - generic [ref=f3e241] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f3e242]
          - rowgroup [ref=f3e243]:
            - row [ref=f3e245]:
              - cell "" [ref=f3e246]:
                - generic [ref=f3e250]:
                  - checkbox "" [ref=f3e251]
                  - generic [ref=f3e252]: 
              - cell "Admin" [ref=f3e254]
              - cell "Admin" [ref=f3e256]
              - cell "Ge orged Russe lld" [ref=f3e258]
              - cell "Enabled" [ref=f3e260]
              - cell [ref=f3e262]:
                - generic [ref=f3e263]:
                  - button "" [ref=f3e264] [cursor=pointer]
                  - button "" [ref=f3e266] [cursor=pointer]
            - row [ref=f3e269]:
              - cell "" [ref=f3e270]:
                - generic [ref=f3e273] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e274]
                  - generic [ref=f3e275]: 
              - cell "Employee" [ref=f3e277]
              - cell "ESS" [ref=f3e279]
              - cell "Employee User" [ref=f3e281]
              - cell "Enabled" [ref=f3e283]
              - cell [ref=f3e285]:
                - generic [ref=f3e286]:
                  - button "" [ref=f3e287] [cursor=pointer]
                  - button "" [ref=f3e289] [cursor=pointer]
            - row [ref=f3e292]:
              - cell "" [ref=f3e293]:
                - generic [ref=f3e296] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e297]
                  - generic [ref=f3e298]: 
              - cell "ess1786074507323198" [ref=f3e300]
              - cell "ESS" [ref=f3e302]
              - cell "Auto1786074507323198 User" [ref=f3e304]
              - cell "Enabled" [ref=f3e306]
              - cell [ref=f3e308]:
                - generic [ref=f3e309]:
                  - button "" [ref=f3e310] [cursor=pointer]
                  - button "" [ref=f3e312] [cursor=pointer]
            - row [ref=f3e315]:
              - cell "" [ref=f3e316]:
                - generic [ref=f3e319] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e320]
                  - generic [ref=f3e321]: 
              - cell "essA1786074561243387" [ref=f3e323]
              - cell "ESS" [ref=f3e325]
              - cell "AutoA1786074561243387 User" [ref=f3e327]
              - cell "Enabled" [ref=f3e329]
              - cell [ref=f3e331]:
                - generic [ref=f3e332]:
                  - button "" [ref=f3e333] [cursor=pointer]
                  - button "" [ref=f3e335] [cursor=pointer]
            - row [ref=f3e338]:
              - cell "" [ref=f3e339]:
                - generic [ref=f3e342] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e343]
                  - generic [ref=f3e344]: 
              - cell "essB1786074561243387" [ref=f3e346]
              - cell "ESS" [ref=f3e348]
              - cell "AutoB1786074561243387 User" [ref=f3e350]
              - cell "Enabled" [ref=f3e352]
              - cell [ref=f3e354]:
                - generic [ref=f3e355]:
                  - button "" [ref=f3e356] [cursor=pointer]
                  - button "" [ref=f3e358] [cursor=pointer]
            - row [ref=f3e361]:
              - cell "" [ref=f3e362]:
                - generic [ref=f3e365] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e366]
                  - generic [ref=f3e367]: 
              - cell "hm17860744184211052" [ref=f3e369]
              - cell "ESS" [ref=f3e371]
              - cell "Hiring17860744184211052 Manager" [ref=f3e373]
              - cell "Enabled" [ref=f3e375]
              - cell [ref=f3e377]:
                - generic [ref=f3e378]:
                  - button "" [ref=f3e379] [cursor=pointer]
                  - button "" [ref=f3e381] [cursor=pointer]
            - row [ref=f3e384]:
              - cell "" [ref=f3e385]:
                - generic [ref=f3e388] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e389]
                  - generic [ref=f3e390]: 
              - cell "iv17860744184211052" [ref=f3e392]
              - cell "ESS" [ref=f3e394]
              - cell "Interview17860744184211052 User" [ref=f3e396]
              - cell "Enabled" [ref=f3e398]
              - cell [ref=f3e400]:
                - generic [ref=f3e401]:
                  - button "" [ref=f3e402] [cursor=pointer]
                  - button "" [ref=f3e404] [cursor=pointer]
            - row [ref=f3e407]:
              - cell "" [ref=f3e408]:
                - generic [ref=f3e411] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e412]
                  - generic [ref=f3e413]: 
              - cell "Ravinder" [ref=f3e415]
              - cell "Admin" [ref=f3e417]
              - cell "Ge orged Russe lld" [ref=f3e419]
              - cell "Enabled" [ref=f3e421]
              - cell [ref=f3e423]:
                - generic [ref=f3e424]:
                  - button "" [ref=f3e425] [cursor=pointer]
                  - button "" [ref=f3e427] [cursor=pointer]
            - row [ref=f3e430]:
              - cell "" [ref=f3e431]:
                - generic [ref=f3e434] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e435]
                  - generic [ref=f3e436]: 
              - cell "Ravinder@123" [ref=f3e438]
              - cell "Admin" [ref=f3e440]
              - cell "Ge orged Russe lld" [ref=f3e442]
              - cell "Enabled" [ref=f3e444]
              - cell [ref=f3e446]:
                - generic [ref=f3e447]:
                  - button "" [ref=f3e448] [cursor=pointer]
                  - button "" [ref=f3e450] [cursor=pointer]
            - row [ref=f3e453]:
              - cell "" [ref=f3e454]:
                - generic [ref=f3e457] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e458]
                  - generic [ref=f3e459]: 
              - cell "user1786074427043" [ref=f3e461]
              - cell "ESS" [ref=f3e463]
              - cell "Auto1786074427043 User" [ref=f3e465]
              - cell "Enabled" [ref=f3e467]
              - cell [ref=f3e469]:
                - generic [ref=f3e470]:
                  - button "" [ref=f3e471] [cursor=pointer]
                  - button "" [ref=f3e473] [cursor=pointer]
            - row [ref=f3e476]:
              - cell "" [ref=f3e477]:
                - generic [ref=f3e480] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e481]
                  - generic [ref=f3e482]: 
              - cell "yusuf" [ref=f3e484]
              - cell "ESS" [ref=f3e486]
              - cell "muhammad qureshi" [ref=f3e488]
              - cell "Enabled" [ref=f3e490]
              - cell [ref=f3e492]:
                - generic [ref=f3e493]:
                  - button "" [ref=f3e494] [cursor=pointer]
                  - button "" [ref=f3e496] [cursor=pointer]
    - generic [ref=f3e499]:
      - paragraph [ref=f3e500]: OrangeHRM OS 5.9
      - paragraph [ref=f3e501]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e502] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  648 |     this.loadingSpinner
  649 |   ).toBeHidden();
  650 | }
  651 | 
  652 | async goToPreviousSystemUsersPage(): Promise<void> {
  653 |   await expect(
  654 |     this.previousPageButton
  655 |   ).toBeVisible();
  656 | 
  657 |   await expect(
  658 |     this.previousPageButton
  659 |   ).toBeEnabled();
  660 | 
  661 |   await this.previousPageButton.click();
  662 | 
  663 |   await expect(
  664 |     this.loadingSpinner
  665 |   ).toBeHidden();
  666 | }
  667 | 
  668 | async selectSystemUsers(
  669 |   usernames: string[]
  670 | ): Promise<void> {
  671 |   for (const username of usernames) {
  672 |     const userRow = this.userRows.filter({
  673 |       has: this.page
  674 |         .locator('.oxd-table-cell')
  675 |         .nth(1)
  676 |         .getByText(username, {
  677 |           exact: true,
  678 |         }),
  679 |     });
  680 | 
  681 |     await expect(userRow).toHaveCount(1);
  682 | 
  683 |     const checkbox = userRow.locator(
  684 |       'input[type="checkbox"]'
  685 |     );
  686 | 
  687 |     await checkbox.check({
  688 |       force: true,
  689 |     });
  690 | 
  691 |     await expect(checkbox).toBeChecked();
  692 |   }
  693 | }
  694 | 
  695 | 
  696 | async selectAllVisibleSystemUsers(): Promise<void> {
  697 |   await expect(
  698 |     this.loadingSpinner
  699 |   ).toBeHidden();
  700 | 
  701 |   const headerCheckboxLabel =
  702 |     this.page.locator(
  703 |       '.oxd-table-header ' +
  704 |       '.oxd-checkbox-wrapper label'
  705 |     );
  706 | 
  707 |   const headerCheckbox =
  708 |     this.page.locator(
  709 |       '.oxd-table-header ' +
  710 |       'input[type="checkbox"]'
  711 |     );
  712 | 
  713 |   // Exclude disabled row checkboxes.
  714 |   const selectableRowCheckboxes =
  715 |     this.userRows.locator(
  716 |       'input[type="checkbox"]:not(:disabled)'
  717 |     );
  718 | 
  719 |   const selectableRowCount =
  720 |     await selectableRowCheckboxes.count();
  721 | 
  722 |   expect(
  723 |     selectableRowCount
  724 |   ).toBeGreaterThan(0);
  725 | 
  726 |   await headerCheckboxLabel.click();
  727 | 
  728 |   await expect(
  729 |     headerCheckbox
  730 |   ).toBeChecked();
  731 | 
  732 |   await expect
  733 |     .poll(
  734 |       async () =>
  735 |         selectableRowCheckboxes.evaluateAll(
  736 |           checkboxes =>
  737 |             checkboxes.filter(
  738 |               checkbox =>
  739 |                 (
  740 |                   checkbox as HTMLInputElement
  741 |                 ).checked
  742 |             ).length
  743 |         ),
  744 |       {
  745 |         timeout: 15_000,
  746 |       }
  747 |     )
> 748 |     .toBe(selectableRowCount);
      |      ^ Error: expect(received).toBe(expected) // Object.is equality
  749 | }
  750 | 
  751 | async deselectAllVisibleSystemUsers(): Promise<void> {
  752 |   const headerCheckboxLabel =
  753 |     this.page.locator(
  754 |       '.oxd-table-header ' +
  755 |       '.oxd-checkbox-wrapper label'
  756 |     );
  757 | 
  758 |   const headerCheckbox =
  759 |     this.page.locator(
  760 |       '.oxd-table-header ' +
  761 |       'input[type="checkbox"]'
  762 |     );
  763 | 
  764 |   const selectableRowCheckboxes =
  765 |     this.userRows.locator(
  766 |       'input[type="checkbox"]:not(:disabled)'
  767 |     );
  768 | 
  769 |   await headerCheckboxLabel.click();
  770 | 
  771 |   await expect(
  772 |     headerCheckbox
  773 |   ).not.toBeChecked();
  774 | 
  775 |   await expect
  776 |     .poll(
  777 |       async () =>
  778 |         selectableRowCheckboxes.evaluateAll(
  779 |           checkboxes =>
  780 |             checkboxes.filter(
  781 |               checkbox =>
  782 |                 (
  783 |                   checkbox as HTMLInputElement
  784 |                 ).checked
  785 |             ).length
  786 |         ),
  787 |       {
  788 |         timeout: 15_000,
  789 |       }
  790 |     )
  791 |     .toBe(0);
  792 | }
  793 | 
  794 | async deleteSelectedSystemUsers(): Promise<void> {
  795 |   await expect(
  796 |     this.deleteSelectedButton
  797 |   ).toBeVisible({
  798 |     timeout: 15_000,
  799 |   });
  800 | 
  801 |   await this.deleteSelectedButton.click();
  802 | 
  803 |   const confirmationDialog =
  804 |     this.page.locator(
  805 |       '.oxd-dialog-container'
  806 |     );
  807 | 
  808 |   await expect(
  809 |     confirmationDialog
  810 |   ).toBeVisible();
  811 | 
  812 |   const confirmDeleteButton =
  813 |     confirmationDialog.locator(
  814 |       'button.oxd-button--label-danger'
  815 |     );
  816 | 
  817 |   await expect(
  818 |     confirmDeleteButton
  819 |   ).toBeVisible();
  820 | 
  821 |   await confirmDeleteButton.click();
  822 | 
  823 |   await expect(
  824 |     confirmationDialog
  825 |   ).toBeHidden({
  826 |     timeout: 20_000,
  827 |   });
  828 | 
  829 |   await expect(
  830 |     this.toastMessage.filter({
  831 |       hasText: /Successfully Deleted/i,
  832 |     })
  833 |   ).toBeVisible({
  834 |     timeout: 20_000,
  835 |   });
  836 | 
  837 |   await expect(
  838 |     this.loadingSpinner
  839 |   ).toBeHidden();
  840 | }
  841 | 
  842 | async updateSystemUsername(
  843 |   updatedUsername: string
  844 | ): Promise<void> {
  845 |   await this.addUsernameInput.fill(
  846 |     updatedUsername
  847 |   );
  848 | 
```