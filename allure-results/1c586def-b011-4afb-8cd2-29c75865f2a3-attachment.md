# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_057 - Admin should delete multiple System Users using bulk selection @positive @bulk-delete @regression
- Location: tests\Admin\admin-users.spec.ts:1047:6

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
                - paragraph [ref=f12e128]: Daisy Nguyen
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
                - cell "Daisy Nguyen" [ref=f12e258]
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
                - cell "essA1785816864714775" [ref=f12e277]
                - cell "ESS" [ref=f12e279]
                - cell "AutoA1785816864714775 User" [ref=f12e281]
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
                - cell "essA1785819119913181" [ref=f12e300]
                - cell "ESS" [ref=f12e302]
                - cell "AutoA1785819119913181 User" [ref=f12e304]
                - cell "Enabled" [ref=f12e306]
                - cell [ref=f12e308]:
                  - generic [ref=f12e309]:
                    - button "" [ref=f12e310] [cursor=pointer]
                    - button "" [ref=f12e312] [cursor=pointer]
              - row [ref=f12e315]:
                - cell "" [ref=f12e316]:
                  - generic [ref=f12e319] [cursor=pointer]:
                    - checkbox "" [ref=f12e320]
                    - generic [ref=f12e321]: 
                - cell "essB1785816071383193" [ref=f12e323]
                - cell "ESS" [ref=f12e325]
                - cell "AutoB1785816071383193 User" [ref=f12e327]
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
                - cell "essB1785816864714775" [ref=f12e346]
                - cell "ESS" [ref=f12e348]
                - cell "AutoB1785816864714775 User" [ref=f12e350]
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
                - cell "essB1785819119913181" [ref=f12e369]
                - cell "ESS" [ref=f12e371]
                - cell "AutoB1785819119913181 User" [ref=f12e373]
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
                - cell "FMLName" [ref=f12e392]
                - cell "ESS" [ref=f12e394]
                - cell "Qwerty LName" [ref=f12e396]
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
                - cell "FMLName1" [ref=f12e415]
                - cell "ESS" [ref=f12e417]
                - cell "FName LName" [ref=f12e419]
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
                - cell "Jobinsam@6742" [ref=f12e438]
                - cell "ESS" [ref=f12e440]
                - cell "Jobin Sam" [ref=f12e442]
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
                - cell "kaswika" [ref=f12e461]
                - cell "ESS" [ref=f12e463]
                - cell "kaswika nekkanti" [ref=f12e465]
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
                - cell "qwerty" [ref=f12e484]
                - cell "Admin" [ref=f12e486]
                - cell "Qwerty LName" [ref=f12e488]
                - cell "Enabled" [ref=f12e490]
                - cell [ref=f12e492]:
                  - generic [ref=f12e493]:
                    - button "" [ref=f12e494] [cursor=pointer]
                    - button "" [ref=f12e496] [cursor=pointer]
              - row [ref=f12e499]:
                - cell "" [ref=f12e500]:
                  - generic [ref=f12e503] [cursor=pointer]:
                    - checkbox "" [ref=f12e504]
                    - generic [ref=f12e505]: 
                - cell "rahul123" [ref=f12e507]
                - cell "ESS" [ref=f12e509]
                - cell "Rahul Das" [ref=f12e511]
                - cell "Enabled" [ref=f12e513]
                - cell [ref=f12e515]:
                  - generic [ref=f12e516]:
                    - button "" [ref=f12e517] [cursor=pointer]
                    - button "" [ref=f12e519] [cursor=pointer]
              - row [ref=f12e522]:
                - cell "" [ref=f12e523]:
                  - generic [ref=f12e526] [cursor=pointer]:
                    - checkbox "" [ref=f12e527]
                    - generic [ref=f12e528]: 
                - cell "svcuser_398705" [ref=f12e530]
                - cell "ESS" [ref=f12e532]
                - cell "sww test" [ref=f12e534]
                - cell "Disabled" [ref=f12e536]
                - cell [ref=f12e538]:
                  - generic [ref=f12e539]:
                    - button "" [ref=f12e540] [cursor=pointer]
                    - button "" [ref=f12e542] [cursor=pointer]
              - row [ref=f12e545]:
                - cell "" [ref=f12e546]:
                  - generic [ref=f12e549] [cursor=pointer]:
                    - checkbox "" [ref=f12e550]
                    - generic [ref=f12e551]: 
                - cell "user-dfgsjsjdh" [ref=f12e553]
                - cell "ESS" [ref=f12e555]
                - cell "Cofirst-vEd Colast-frV" [ref=f12e557]
                - cell "Enabled" [ref=f12e559]
                - cell [ref=f12e561]:
                  - generic [ref=f12e562]:
                    - button "" [ref=f12e563] [cursor=pointer]
                    - button "" [ref=f12e565] [cursor=pointer]
              - row [ref=f12e568]:
                - cell "" [ref=f12e569]:
                  - generic [ref=f12e572] [cursor=pointer]:
                    - checkbox "" [ref=f12e573]
                    - generic [ref=f12e574]: 
                - cell "user_386876" [ref=f12e576]
                - cell "ESS" [ref=f12e578]
                - cell "sww test" [ref=f12e580]
                - cell "Enabled" [ref=f12e582]
                - cell [ref=f12e584]:
                  - generic [ref=f12e585]:
                    - button "" [ref=f12e586] [cursor=pointer]
                    - button "" [ref=f12e588] [cursor=pointer]
              - row [ref=f12e591]:
                - cell "" [ref=f12e592]:
                  - generic [ref=f12e595] [cursor=pointer]:
                    - checkbox "" [ref=f12e596]
                    - generic [ref=f12e597]: 
                - cell "zo@mttttjo@1905chan" [ref=f12e599]
                - cell "Admin" [ref=f12e601]
                - cell "A8DCo 010Z" [ref=f12e603]
                - cell "Enabled" [ref=f12e605]
                - cell [ref=f12e607]:
                  - generic [ref=f12e608]:
                    - button "" [ref=f12e609] [cursor=pointer]
                    - button "" [ref=f12e611] [cursor=pointer]
              - row [ref=f12e614]:
                - cell "" [ref=f12e615]:
                  - generic [ref=f12e618] [cursor=pointer]:
                    - checkbox "" [ref=f12e619]
                    - generic [ref=f12e620]: 
                - cell "zortgfya@zpyyynnnmiiukd@1jueh" [ref=f12e622]
                - cell "Admin" [ref=f12e624]
                - cell "A8DCo 010Z" [ref=f12e626]
                - cell "Enabled" [ref=f12e628]
                - cell [ref=f12e630]:
                  - generic [ref=f12e631]:
                    - button "" [ref=f12e632] [cursor=pointer]
                    - button "" [ref=f12e634] [cursor=pointer]
      - generic [ref=f12e637]:
        - paragraph [ref=f12e638]: OrangeHRM OS 5.9
        - paragraph [ref=f12e639]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f12e640] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - dialog [ref=f12e641]:
    - document [ref=f12e644]:
      - button "×" [ref=f12e645] [cursor=pointer]
      - paragraph [ref=f12e647]: Are you Sure?
      - paragraph [ref=f12e649]: The selected record will be permanently deleted. Are you sure you want to continue?
      - generic [ref=f12e650]:
        - button "No, Cancel" [ref=f12e651] [cursor=pointer]
        - button " Yes, Delete" [ref=f12e652] [cursor=pointer]:
          - generic [ref=f12e653]: 
          - text: Yes, Delete
```

# Test source

```ts
  544 | 
  545 |     await this.editUserSaveButton.click();
  546 | 
  547 |     await Promise.all([
  548 |       updateResponse,
  549 |       updatedToast,
  550 |       this.page.waitForURL(/admin\/viewSystemUsers/, {
  551 |         timeout: 20_000,
  552 |       }),
  553 |     ]);
  554 |   }
  555 | 
  556 |   async cancelSystemUserDeletion(username: string): Promise<void> {
  557 |     const userRow = this.userRows.filter({
  558 |       has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  559 |         exact: true,
  560 |       }),
  561 |     });
  562 | 
  563 |     await expect(userRow).toHaveCount(1);
  564 | 
  565 |     await userRow
  566 |       .getByRole("button")
  567 |       .filter({
  568 |         has: this.page.locator("i.bi-trash"),
  569 |       })
  570 |       .click();
  571 | 
  572 |     const confirmationDialog = this.page.getByRole("dialog");
  573 | 
  574 |     await expect(confirmationDialog).toBeVisible();
  575 | 
  576 |     await confirmationDialog
  577 |       .getByRole("button", {
  578 |         name: "No, Cancel",
  579 |         exact: true,
  580 |       })
  581 |       .click();
  582 | 
  583 |     await expect(confirmationDialog).toBeHidden();
  584 | 
  585 |     await expect(userRow).toBeVisible();
  586 |   }
  587 | 
  588 |   async selectSystemUsers(usernames: string[]): Promise<void> {
  589 |     for (const username of usernames) {
  590 |       const userRow = this.userRows.filter({
  591 |         has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  592 |           exact: true,
  593 |         }),
  594 |       });
  595 | 
  596 |       await expect(userRow).toHaveCount(1);
  597 | 
  598 |       const checkbox = userRow.locator('input[type="checkbox"]');
  599 | 
  600 |       await checkbox.check({
  601 |         force: true,
  602 |       });
  603 | 
  604 |       await expect(checkbox).toBeChecked();
  605 |     }
  606 |   }
  607 | 
  608 |   async deleteSelectedSystemUsers(): Promise<void> {
  609 |     const deleteSelectedButton = this.page.getByRole("button", {
  610 |       name: /Delete Selected/i,
  611 |     });
  612 | 
  613 |     await expect(deleteSelectedButton).toBeVisible();
  614 | 
  615 |     await deleteSelectedButton.click();
  616 | 
  617 |     const confirmationDialog = this.page.getByRole("dialog");
  618 | 
  619 |     await expect(confirmationDialog).toBeVisible();
  620 | 
  621 |     const deleteResponse = this.page.waitForResponse(
  622 |       (response) =>
  623 |         response.url().includes("/api/v2/admin/users") &&
  624 |         response.request().method() === "DELETE" &&
  625 |         response.ok(),
  626 |       {
  627 |         timeout: 20_000,
  628 |       },
  629 |     );
  630 | 
  631 |     const deletedToast = expect(
  632 |       this.toastMessage.filter({
  633 |         hasText: /Successfully Deleted/i,
  634 |       }),
  635 |     ).toBeVisible({
  636 |       timeout: 20_000,
  637 |     });
  638 | 
  639 |     await confirmationDialog
  640 |       .getByRole("button", {
  641 |         name: "Yes, Delete",
  642 |         exact: true,
  643 |       })
> 644 |       .click();
      |        ^ Error: locator.click: Test ended.
  645 | 
  646 |     await Promise.all([deleteResponse, deletedToast]);
  647 | 
  648 |     await expect(confirmationDialog).toBeHidden();
  649 |   }
  650 | 
  651 |   async selectAllVisibleSystemUsers(): Promise<void> {
  652 |     await expect(this.loadingSpinner).toBeHidden();
  653 | 
  654 |     const headerCheckbox = this.page.locator(
  655 |       '.oxd-table-header input[type="checkbox"]',
  656 |     );
  657 | 
  658 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  659 | 
  660 |     const rowCount = await rowCheckboxes.count();
  661 | 
  662 |     expect(rowCount).toBeGreaterThan(0);
  663 | 
  664 |     await headerCheckbox.check({
  665 |       force: true,
  666 |     });
  667 | 
  668 |     await expect(headerCheckbox).toBeChecked();
  669 | 
  670 |     for (let index = 0; index < rowCount; index++) {
  671 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
  672 |     }
  673 |   }
  674 | 
  675 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  676 |     const headerCheckbox = this.page.locator(
  677 |       '.oxd-table-header input[type="checkbox"]',
  678 |     );
  679 | 
  680 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  681 | 
  682 |     const rowCount = await rowCheckboxes.count();
  683 | 
  684 |     await headerCheckbox.uncheck({
  685 |       force: true,
  686 |     });
  687 | 
  688 |     await expect(headerCheckbox).not.toBeChecked();
  689 | 
  690 |     for (let index = 0; index < rowCount; index++) {
  691 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  692 |     }
  693 |   }
  694 | 
  695 | 
  696 |   async getVisibleSystemUsernames(): Promise<string[]> {
  697 |   await expect(
  698 |     this.loadingSpinner
  699 |   ).toBeHidden();
  700 | 
  701 |   await expect(
  702 |     this.userRows.first()
  703 |   ).toBeVisible({
  704 |     timeout: 15_000,
  705 |   });
  706 | 
  707 |   return this.userRows
  708 |     .locator('.oxd-table-cell')
  709 |     .nth(1)
  710 |     .allInnerTexts();
  711 | }
  712 | 
  713 | async goToNextSystemUsersPage(): Promise<void> {
  714 |   await expect(
  715 |     this.nextPageButton
  716 |   ).toBeVisible();
  717 | 
  718 |   await expect(
  719 |     this.nextPageButton
  720 |   ).toBeEnabled();
  721 | 
  722 |   await this.nextPageButton.click();
  723 | 
  724 |   await expect(
  725 |     this.loadingSpinner
  726 |   ).toBeHidden();
  727 | }
  728 | 
  729 | async goToPreviousSystemUsersPage(): Promise<void> {
  730 |   await expect(
  731 |     this.previousPageButton
  732 |   ).toBeVisible();
  733 | 
  734 |   await expect(
  735 |     this.previousPageButton
  736 |   ).toBeEnabled();
  737 | 
  738 |   await this.previousPageButton.click();
  739 | 
  740 |   await expect(
  741 |     this.loadingSpinner
  742 |   ).toBeHidden();
  743 | }
  744 | }
```