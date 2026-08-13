# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression
- Location: tests\Admin\admin-users.spec.ts:474:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 18
Received: 17

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
              - paragraph [ref=f3e128]: John Smith
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
            - generic [ref=f3e217]: (17) Records Selected
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
              - cell "John Smith" [ref=f3e258]
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
              - cell "amelia.brown.1786551420483" [ref=f3e277]
              - cell "ESS" [ref=f3e279]
              - cell "99N75 5TlV" [ref=f3e281]
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
              - cell "disposable.user.1786551457111" [ref=f3e300]
              - cell "Admin" [ref=f3e302]
              - cell "yedghjb1 90jsnd" [ref=f3e304]
              - cell "Disabled" [ref=f3e306]
              - cell [ref=f3e308]:
                - generic [ref=f3e309]:
                  - button "" [ref=f3e310] [cursor=pointer]
                  - button "" [ref=f3e312] [cursor=pointer]
            - row [ref=f3e315]:
              - cell "" [ref=f3e316]:
                - generic [ref=f3e319] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e320]
                  - generic [ref=f3e321]: 
              - cell "ess1786551669760514" [ref=f3e323]
              - cell "ESS" [ref=f3e325]
              - cell "Auto1786551669760514 User" [ref=f3e327]
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
              - cell "essA1786551436840100" [ref=f3e346]
              - cell "ESS" [ref=f3e348]
              - cell "AutoA1786551436840100 User" [ref=f3e350]
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
              - cell "essA1786551946252828" [ref=f3e369]
              - cell "ESS" [ref=f3e371]
              - cell "AutoA1786551946252828 User" [ref=f3e373]
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
              - cell "essB1786551436840100" [ref=f3e392]
              - cell "ESS" [ref=f3e394]
              - cell "AutoB1786551436840100 User" [ref=f3e396]
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
              - cell "essB1786551946252828" [ref=f3e415]
              - cell "ESS" [ref=f3e417]
              - cell "AutoB1786551946252828 User" [ref=f3e419]
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
              - cell "FMLName" [ref=f3e438]
              - cell "ESS" [ref=f3e440]
              - cell "Qwerty LName" [ref=f3e442]
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
              - cell "FMLName1" [ref=f3e461]
              - cell "ESS" [ref=f3e463]
              - cell "FName LName" [ref=f3e465]
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
              - cell "Jobinsam@6742" [ref=f3e484]
              - cell "ESS" [ref=f3e486]
              - cell "Jobin Sam" [ref=f3e488]
              - cell "Enabled" [ref=f3e490]
              - cell [ref=f3e492]:
                - generic [ref=f3e493]:
                  - button "" [ref=f3e494] [cursor=pointer]
                  - button "" [ref=f3e496] [cursor=pointer]
            - row [ref=f3e499]:
              - cell "" [ref=f3e500]:
                - generic [ref=f3e503] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e504]
                  - generic [ref=f3e505]: 
              - cell "ravib" [ref=f3e507]
              - cell "Admin" [ref=f3e509]
              - cell "Ravi B" [ref=f3e511]
              - cell "Enabled" [ref=f3e513]
              - cell [ref=f3e515]:
                - generic [ref=f3e516]:
                  - button "" [ref=f3e517] [cursor=pointer]
                  - button "" [ref=f3e519] [cursor=pointer]
            - row [ref=f3e522]:
              - cell "" [ref=f3e523]:
                - generic [ref=f3e526] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e527]
                  - generic [ref=f3e528]: 
              - cell "Shreya" [ref=f3e530]
              - cell "ESS" [ref=f3e532]
              - cell "Shreya Karna" [ref=f3e534]
              - cell "Enabled" [ref=f3e536]
              - cell [ref=f3e538]:
                - generic [ref=f3e539]:
                  - button "" [ref=f3e540] [cursor=pointer]
                  - button "" [ref=f3e542] [cursor=pointer]
            - row [ref=f3e545]:
              - cell "" [ref=f3e546]:
                - generic [ref=f3e549] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e550]
                  - generic [ref=f3e551]: 
              - cell "user-5f68e" [ref=f3e553]
              - cell "Admin" [ref=f3e555]
              - cell "John Smith" [ref=f3e557]
              - cell "Disabled" [ref=f3e559]
              - cell [ref=f3e561]:
                - generic [ref=f3e562]:
                  - button "" [ref=f3e563] [cursor=pointer]
                  - button "" [ref=f3e565] [cursor=pointer]
            - row [ref=f3e568]:
              - cell "" [ref=f3e569]:
                - generic [ref=f3e572] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e573]
                  - generic [ref=f3e574]: 
              - cell "user-e7728" [ref=f3e576]
              - cell "Admin" [ref=f3e578]
              - cell "John Smith" [ref=f3e580]
              - cell "Enabled" [ref=f3e582]
              - cell [ref=f3e584]:
                - generic [ref=f3e585]:
                  - button "" [ref=f3e586] [cursor=pointer]
                  - button "" [ref=f3e588] [cursor=pointer]
            - row [ref=f3e591]:
              - cell "" [ref=f3e592]:
                - generic [ref=f3e595] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e596]
                  - generic [ref=f3e597]: 
              - cell "user1786551411227511" [ref=f3e599]
              - cell "ESS" [ref=f3e601]
              - cell "Auto1786551411227866 User" [ref=f3e603]
              - cell "Enabled" [ref=f3e605]
              - cell [ref=f3e607]:
                - generic [ref=f3e608]:
                  - button "" [ref=f3e609] [cursor=pointer]
                  - button "" [ref=f3e611] [cursor=pointer]
            - row [ref=f3e614]:
              - cell "" [ref=f3e615]:
                - generic [ref=f3e618] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e619]
                  - generic [ref=f3e620]: 
              - cell "user_pu340" [ref=f3e622]
              - cell "ESS" [ref=f3e624]
              - cell "A8DCo 010Z" [ref=f3e626]
              - cell "Enabled" [ref=f3e628]
              - cell [ref=f3e630]:
                - generic [ref=f3e631]:
                  - button "" [ref=f3e632] [cursor=pointer]
                  - button "" [ref=f3e634] [cursor=pointer]
            - row [ref=f3e637]:
              - cell "" [ref=f3e638]:
                - generic [ref=f3e641] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e642]
                  - generic [ref=f3e643]: 
              - cell "user_zxia1" [ref=f3e645]
              - cell "ESS" [ref=f3e647]
              - cell "A8DCo 010Z" [ref=f3e649]
              - cell "Enabled" [ref=f3e651]
              - cell [ref=f3e653]:
                - generic [ref=f3e654]:
                  - button "" [ref=f3e655] [cursor=pointer]
                  - button "" [ref=f3e657] [cursor=pointer]
    - generic [ref=f3e660]:
      - paragraph [ref=f3e661]: OrangeHRM OS 5.9
      - paragraph [ref=f3e662]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e663] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  597 |     await expect(confirmationDialog).toBeVisible();
  598 | 
  599 |     await confirmationDialog
  600 |       .getByRole("button", {
  601 |         name: "No, Cancel",
  602 |         exact: true,
  603 |       })
  604 |       .click();
  605 | 
  606 |     await expect(confirmationDialog).toBeHidden();
  607 | 
  608 |     await expect(userRow).toBeVisible();
  609 |   }
  610 |   async getVisibleSystemUsernames(): Promise<string[]> {
  611 |     await expect(this.loadingSpinner).toBeHidden();
  612 | 
  613 |     await expect(this.userRows.first()).toBeVisible({
  614 |       timeout: 15_000,
  615 |     });
  616 | 
  617 |     return this.userRows.locator(".oxd-table-cell").nth(1).allInnerTexts();
  618 |   }
  619 | 
  620 |   async goToNextSystemUsersPage(): Promise<void> {
  621 |     await expect(this.nextPageButton).toBeVisible();
  622 | 
  623 |     await expect(this.nextPageButton).toBeEnabled();
  624 | 
  625 |     await this.nextPageButton.click();
  626 | 
  627 |     await expect(this.loadingSpinner).toBeHidden();
  628 |   }
  629 | 
  630 |   async goToPreviousSystemUsersPage(): Promise<void> {
  631 |     await expect(this.previousPageButton).toBeVisible();
  632 | 
  633 |     await expect(this.previousPageButton).toBeEnabled();
  634 | 
  635 |     await this.previousPageButton.click();
  636 | 
  637 |     await expect(this.loadingSpinner).toBeHidden();
  638 |   }
  639 | 
  640 |   async selectSystemUsers(usernames: string[]): Promise<void> {
  641 |     for (const username of usernames) {
  642 |       const userRow = this.userRows.filter({
  643 |         has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  644 |           exact: true,
  645 |         }),
  646 |       });
  647 | 
  648 |       await expect(userRow).toHaveCount(1);
  649 | 
  650 |       const checkbox = userRow.locator('input[type="checkbox"]');
  651 | 
  652 |       await checkbox.check({
  653 |         force: true,
  654 |       });
  655 | 
  656 |       await expect(checkbox).toBeChecked();
  657 |     }
  658 |   }
  659 | 
  660 |   async selectAllVisibleSystemUsers(): Promise<void> {
  661 |     await expect(this.loadingSpinner).toBeHidden();
  662 | 
  663 |     const headerCheckboxLabel = this.page.locator(
  664 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  665 |     );
  666 | 
  667 |     const headerCheckbox = this.page.locator(
  668 |       ".oxd-table-header " + 'input[type="checkbox"]',
  669 |     );
  670 | 
  671 |     // Exclude disabled row checkboxes.
  672 |     const selectableRowCheckboxes = this.userRows.locator(
  673 |       'input[type="checkbox"]:not(:disabled)',
  674 |     );
  675 | 
  676 |     const selectableRowCount = await selectableRowCheckboxes.count();
  677 | 
  678 |     expect(selectableRowCount).toBeGreaterThan(0);
  679 | 
  680 |     await headerCheckboxLabel.click();
  681 | 
  682 |     await expect(headerCheckbox).toBeChecked();
  683 | 
  684 |     await expect
  685 |       .poll(
  686 |         async () =>
  687 |           selectableRowCheckboxes.evaluateAll(
  688 |             (checkboxes) =>
  689 |               checkboxes.filter(
  690 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  691 |               ).length,
  692 |           ),
  693 |         {
  694 |           timeout: 15_000,
  695 |         },
  696 |       )
> 697 |       .toBe(selectableRowCount);
      |        ^ Error: expect(received).toBe(expected) // Object.is equality
  698 |   }
  699 | 
  700 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  701 |     const headerCheckboxLabel = this.page.locator(
  702 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  703 |     );
  704 | 
  705 |     const headerCheckbox = this.page.locator(
  706 |       ".oxd-table-header " + 'input[type="checkbox"]',
  707 |     );
  708 | 
  709 |     const selectableRowCheckboxes = this.userRows.locator(
  710 |       'input[type="checkbox"]:not(:disabled)',
  711 |     );
  712 | 
  713 |     await headerCheckboxLabel.click();
  714 | 
  715 |     await expect(headerCheckbox).not.toBeChecked();
  716 | 
  717 |     await expect
  718 |       .poll(
  719 |         async () =>
  720 |           selectableRowCheckboxes.evaluateAll(
  721 |             (checkboxes) =>
  722 |               checkboxes.filter(
  723 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  724 |               ).length,
  725 |           ),
  726 |         {
  727 |           timeout: 15_000,
  728 |         },
  729 |       )
  730 |       .toBe(0);
  731 |   }
  732 | 
  733 |   async deleteSelectedSystemUsers(): Promise<void> {
  734 |     await expect(this.deleteSelectedButton).toBeVisible({
  735 |       timeout: 15_000,
  736 |     });
  737 | 
  738 |     await this.deleteSelectedButton.click();
  739 | 
  740 |     const confirmationDialog = this.page.locator(".oxd-dialog-container");
  741 | 
  742 |     await expect(confirmationDialog).toBeVisible();
  743 | 
  744 |     const confirmDeleteButton = confirmationDialog.locator(
  745 |       "button.oxd-button--label-danger",
  746 |     );
  747 | 
  748 |     await expect(confirmDeleteButton).toBeVisible();
  749 | 
  750 |     await confirmDeleteButton.click();
  751 | 
  752 |     await expect(confirmationDialog).toBeHidden({
  753 |       timeout: 20_000,
  754 |     });
  755 | 
  756 |     await expect(
  757 |       this.toastMessage.filter({
  758 |         hasText: /Successfully Deleted/i,
  759 |       }),
  760 |     ).toBeVisible({
  761 |       timeout: 20_000,
  762 |     });
  763 | 
  764 |     await expect(this.loadingSpinner).toBeHidden();
  765 |   }
  766 | 
  767 |   async updateSystemUsername(updatedUsername: string): Promise<void> {
  768 |     await this.addUsernameInput.fill(updatedUsername);
  769 | 
  770 |     await this.addUsernameInput.blur();
  771 | 
  772 |     await expect(this.addUsernameInput).toHaveValue(updatedUsername);
  773 | 
  774 |     await expect(this.usernameValidation).toBeHidden();
  775 | 
  776 |     const updatedToast = expect(
  777 |       this.toastMessage.filter({
  778 |         hasText: /Successfully Updated/i,
  779 |       }),
  780 |     ).toBeVisible({
  781 |       timeout: 20_000,
  782 |     });
  783 | 
  784 |     await this.editUserSaveButton.click();
  785 | 
  786 |     await expect(this.page).toHaveURL(/admin\/viewSystemUsers/, {
  787 |       timeout: 20_000,
  788 |     });
  789 | 
  790 |     await updatedToast;
  791 | 
  792 |     await expect(this.systemUsersHeading).toBeVisible();
  793 |   }
  794 | }
  795 | 
```