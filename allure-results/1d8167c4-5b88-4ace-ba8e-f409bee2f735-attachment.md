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
                - cell "Beau19" [ref=f12e277]
                - cell "ESS" [ref=f12e279]
                - cell "Liana Moore" [ref=f12e281]
                - cell "Enabled" [ref=f12e283]
                - cell [ref=f12e285]:
                  - generic [ref=f12e286]:
                    - button "" [ref=f12e287] [cursor=pointer]
                    - button "" [ref=f12e289] [cursor=pointer]
              - row [ref=f12e292]:
                - cell "" [ref=f12e293]:
                  - generic [ref=f12e296] [cursor=pointer]:
                    - checkbox "" [ref=f12e297]
                    - generic [ref=f12e298]: 
                - cell "essA17859010009261" [ref=f12e300]
                - cell "ESS" [ref=f12e302]
                - cell "AutoA17859010009261 User" [ref=f12e304]
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
                - cell "essA1785901132280264" [ref=f12e323]
                - cell "ESS" [ref=f12e325]
                - cell "AutoA1785901132280264 User" [ref=f12e327]
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
                - cell "essB17859010009261" [ref=f12e346]
                - cell "ESS" [ref=f12e348]
                - cell "AutoB17859010009261 User" [ref=f12e350]
                - cell "Enabled" [ref=f12e352]
                - cell [ref=f12e354]:
                  - generic [ref=f12e355]:
                    - button "" [ref=f12e356] [cursor=pointer]
                    - button "" [ref=f12e358] [cursor=pointer]
              - row [ref=f12e361]:
                - cell "" [ref=f12e362]:
                  - generic [ref=f12e365] [cursor=pointer]:
                    - checkbox "" [checked] [ref=f12e366]
                    - generic [ref=f12e367]: 
                - cell "essB1785901132280264" [ref=f12e369]
                - cell "ESS" [ref=f12e371]
                - cell "AutoB1785901132280264 User" [ref=f12e373]
                - cell "Enabled" [ref=f12e375]
                - cell [ref=f12e377]:
                  - generic [ref=f12e378]:
                    - button "" [ref=f12e379] [cursor=pointer]
                    - button "" [ref=f12e381] [cursor=pointer]
              - row [ref=f12e384]:
                - cell "" [ref=f12e385]:
                  - generic [ref=f12e388] [cursor=pointer]:
                    - checkbox "" [ref=f12e389]
                    - generic [ref=f12e390]: 
                - cell "Fizza" [ref=f12e392]
                - cell "Admin" [ref=f12e394]
                - cell "Kshitij Bora" [ref=f12e396]
                - cell "Enabled" [ref=f12e398]
                - cell [ref=f12e400]:
                  - generic [ref=f12e401]:
                    - button "" [ref=f12e402] [cursor=pointer]
                    - button "" [ref=f12e404] [cursor=pointer]
              - row [ref=f12e407]:
                - cell "" [ref=f12e408]:
                  - generic [ref=f12e411] [cursor=pointer]:
                    - checkbox "" [ref=f12e412]
                    - generic [ref=f12e413]: 
                - cell "Jay1234" [ref=f12e415]
                - cell "Admin" [ref=f12e417]
                - cell "rudix Snow" [ref=f12e419]
                - cell "Enabled" [ref=f12e421]
                - cell [ref=f12e423]:
                  - generic [ref=f12e424]:
                    - button "" [ref=f12e425] [cursor=pointer]
                    - button "" [ref=f12e427] [cursor=pointer]
              - row [ref=f12e430]:
                - cell "" [ref=f12e431]:
                  - generic [ref=f12e434] [cursor=pointer]:
                    - checkbox "" [ref=f12e435]
                    - generic [ref=f12e436]: 
                - cell "JonhA" [ref=f12e438]
                - cell "ESS" [ref=f12e440]
                - cell "Jonh ABC" [ref=f12e442]
                - cell "Enabled" [ref=f12e444]
                - cell [ref=f12e446]:
                  - generic [ref=f12e447]:
                    - button "" [ref=f12e448] [cursor=pointer]
                    - button "" [ref=f12e450] [cursor=pointer]
              - row [ref=f12e453]:
                - cell "" [ref=f12e454]:
                  - generic [ref=f12e457] [cursor=pointer]:
                    - checkbox "" [ref=f12e458]
                    - generic [ref=f12e459]: 
                - cell "Kenya10" [ref=f12e461]
                - cell "ESS" [ref=f12e463]
                - cell "Darby Wolff" [ref=f12e465]
                - cell "Enabled" [ref=f12e467]
                - cell [ref=f12e469]:
                  - generic [ref=f12e470]:
                    - button "" [ref=f12e471] [cursor=pointer]
                    - button "" [ref=f12e473] [cursor=pointer]
              - row [ref=f12e476]:
                - cell "" [ref=f12e477]:
                  - generic [ref=f12e480] [cursor=pointer]:
                    - checkbox "" [ref=f12e481]
                    - generic [ref=f12e482]: 
                - cell "user12345" [ref=f12e484]
                - cell "Admin" [ref=f12e486]
                - cell "Jonh ABC" [ref=f12e488]
                - cell "Enabled" [ref=f12e490]
                - cell [ref=f12e492]:
                  - generic [ref=f12e493]:
                    - button "" [ref=f12e494] [cursor=pointer]
                    - button "" [ref=f12e496] [cursor=pointer]
      - generic [ref=f12e499]:
        - paragraph [ref=f12e500]: OrangeHRM OS 5.9
        - paragraph [ref=f12e501]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f12e502] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - dialog [ref=f12e503]:
    - document [ref=f12e506]:
      - button "×" [ref=f12e507] [cursor=pointer]
      - paragraph [ref=f12e509]: Are you Sure?
      - paragraph [ref=f12e511]: The selected record will be permanently deleted. Are you sure you want to continue?
      - generic [ref=f12e512]:
        - button "No, Cancel" [ref=f12e513] [cursor=pointer]
        - button " Yes, Delete" [ref=f12e514] [cursor=pointer]:
          - generic [ref=f12e515]: 
          - text: Yes, Delete
```

# Test source

```ts
  554 | 
  555 |     await this.editUserSaveButton.click();
  556 | 
  557 |     await Promise.all([
  558 |       updateResponse,
  559 |       updatedToast,
  560 |       this.page.waitForURL(/admin\/viewSystemUsers/, {
  561 |         timeout: 20_000,
  562 |       }),
  563 |     ]);
  564 |   }
  565 | 
  566 |   async cancelSystemUserDeletion(username: string): Promise<void> {
  567 |     const userRow = this.userRows.filter({
  568 |       has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  569 |         exact: true,
  570 |       }),
  571 |     });
  572 | 
  573 |     await expect(userRow).toHaveCount(1);
  574 | 
  575 |     await userRow
  576 |       .getByRole("button")
  577 |       .filter({
  578 |         has: this.page.locator("i.bi-trash"),
  579 |       })
  580 |       .click();
  581 | 
  582 |     const confirmationDialog = this.page.getByRole("dialog");
  583 | 
  584 |     await expect(confirmationDialog).toBeVisible();
  585 | 
  586 |     await confirmationDialog
  587 |       .getByRole("button", {
  588 |         name: "No, Cancel",
  589 |         exact: true,
  590 |       })
  591 |       .click();
  592 | 
  593 |     await expect(confirmationDialog).toBeHidden();
  594 | 
  595 |     await expect(userRow).toBeVisible();
  596 |   }
  597 | 
  598 |   async selectSystemUsers(usernames: string[]): Promise<void> {
  599 |     for (const username of usernames) {
  600 |       const userRow = this.userRows.filter({
  601 |         has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  602 |           exact: true,
  603 |         }),
  604 |       });
  605 | 
  606 |       await expect(userRow).toHaveCount(1);
  607 | 
  608 |       const checkbox = userRow.locator('input[type="checkbox"]');
  609 | 
  610 |       await checkbox.check({
  611 |         force: true,
  612 |       });
  613 | 
  614 |       await expect(checkbox).toBeChecked();
  615 |     }
  616 |   }
  617 | 
  618 |   async deleteSelectedSystemUsers(): Promise<void> {
  619 |     const deleteSelectedButton = this.page.getByRole("button", {
  620 |       name: /Delete Selected/i,
  621 |     });
  622 | 
  623 |     await expect(deleteSelectedButton).toBeVisible();
  624 | 
  625 |     await deleteSelectedButton.click();
  626 | 
  627 |     const confirmationDialog = this.page.getByRole("dialog");
  628 | 
  629 |     await expect(confirmationDialog).toBeVisible();
  630 | 
  631 |     const deleteResponse = this.page.waitForResponse(
  632 |       (response) =>
  633 |         response.url().includes("/api/v2/admin/users") &&
  634 |         response.request().method() === "DELETE" &&
  635 |         response.ok(),
  636 |       {
  637 |         timeout: 20_000,
  638 |       },
  639 |     );
  640 | 
  641 |     const deletedToast = expect(
  642 |       this.toastMessage.filter({
  643 |         hasText: /Successfully Deleted/i,
  644 |       }),
  645 |     ).toBeVisible({
  646 |       timeout: 20_000,
  647 |     });
  648 | 
  649 |     await confirmationDialog
  650 |       .getByRole("button", {
  651 |         name: "Yes, Delete",
  652 |         exact: true,
  653 |       })
> 654 |       .click();
      |        ^ Error: locator.click: Test ended.
  655 | 
  656 |     await Promise.all([deleteResponse, deletedToast]);
  657 | 
  658 |     await expect(confirmationDialog).toBeHidden();
  659 |   }
  660 | 
  661 |   async selectAllVisibleSystemUsers(): Promise<void> {
  662 |     await expect(this.loadingSpinner).toBeHidden();
  663 | 
  664 |     const headerCheckbox = this.page.locator(
  665 |       '.oxd-table-header input[type="checkbox"]',
  666 |     );
  667 | 
  668 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  669 | 
  670 |     const rowCount = await rowCheckboxes.count();
  671 | 
  672 |     expect(rowCount).toBeGreaterThan(0);
  673 | 
  674 |     await headerCheckbox.check({
  675 |       force: true,
  676 |     });
  677 | 
  678 |     await expect(headerCheckbox).toBeChecked();
  679 | 
  680 |     for (let index = 0; index < rowCount; index++) {
  681 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
  682 |     }
  683 |   }
  684 | 
  685 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  686 |     const headerCheckbox = this.page.locator(
  687 |       '.oxd-table-header input[type="checkbox"]',
  688 |     );
  689 | 
  690 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  691 | 
  692 |     const rowCount = await rowCheckboxes.count();
  693 | 
  694 |     await headerCheckbox.uncheck({
  695 |       force: true,
  696 |     });
  697 | 
  698 |     await expect(headerCheckbox).not.toBeChecked();
  699 | 
  700 |     for (let index = 0; index < rowCount; index++) {
  701 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  702 |     }
  703 |   }
  704 | 
  705 | 
  706 |   async getVisibleSystemUsernames(): Promise<string[]> {
  707 |   await expect(
  708 |     this.loadingSpinner
  709 |   ).toBeHidden();
  710 | 
  711 |   await expect(
  712 |     this.userRows.first()
  713 |   ).toBeVisible({
  714 |     timeout: 15_000,
  715 |   });
  716 | 
  717 |   return this.userRows
  718 |     .locator('.oxd-table-cell')
  719 |     .nth(1)
  720 |     .allInnerTexts();
  721 | }
  722 | 
  723 | async goToNextSystemUsersPage(): Promise<void> {
  724 |   await expect(
  725 |     this.nextPageButton
  726 |   ).toBeVisible();
  727 | 
  728 |   await expect(
  729 |     this.nextPageButton
  730 |   ).toBeEnabled();
  731 | 
  732 |   await this.nextPageButton.click();
  733 | 
  734 |   await expect(
  735 |     this.loadingSpinner
  736 |   ).toBeHidden();
  737 | }
  738 | 
  739 | async goToPreviousSystemUsersPage(): Promise<void> {
  740 |   await expect(
  741 |     this.previousPageButton
  742 |   ).toBeVisible();
  743 | 
  744 |   await expect(
  745 |     this.previousPageButton
  746 |   ).toBeEnabled();
  747 | 
  748 |   await this.previousPageButton.click();
  749 | 
  750 |   await expect(
  751 |     this.loadingSpinner
  752 |   ).toBeHidden();
  753 | }
  754 | }
```