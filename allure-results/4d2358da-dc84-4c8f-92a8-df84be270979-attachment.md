# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression
- Location: tests\Admin\admin-users.spec.ts:1283:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 23
Received: 22

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
              - paragraph [ref=f3e128]: Meloni Narendra Modi
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
            - generic [ref=f3e217]: (22) Records Selected
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
                - generic [ref=f3e249] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e250]
                  - generic [ref=f3e251]: 
              - cell "@12345ABC" [ref=f3e253]
              - cell "ESS" [ref=f3e255]
              - cell "sam joy" [ref=f3e257]
              - cell "Enabled" [ref=f3e259]
              - cell [ref=f3e261]:
                - generic [ref=f3e262]:
                  - button "" [ref=f3e263] [cursor=pointer]
                  - button "" [ref=f3e265] [cursor=pointer]
            - row [ref=f3e268]:
              - cell "" [ref=f3e269]:
                - generic [ref=f3e273]:
                  - checkbox "" [ref=f3e274]
                  - generic [ref=f3e275]: 
              - cell "Admin" [ref=f3e277]
              - cell "Admin" [ref=f3e279]
              - cell "Meloni Narendra Modi" [ref=f3e281]
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
              - cell "Ajinath" [ref=f3e300]
              - cell "ESS" [ref=f3e302]
              - cell "Ajinath rathod" [ref=f3e304]
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
              - cell "armando.oreilly" [ref=f3e323]
              - cell "ESS" [ref=f3e325]
              - cell "Sebastian Frami" [ref=f3e327]
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
              - cell "Charlene49" [ref=f3e346]
              - cell "ESS" [ref=f3e348]
              - cell "Lindsay Jacobs" [ref=f3e350]
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
              - cell "Employee" [ref=f3e369]
              - cell "ESS" [ref=f3e371]
              - cell "Employee User" [ref=f3e373]
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
              - cell "ess.glwuk7" [ref=f3e392]
              - cell "ESS" [ref=f3e394]
              - cell "Harry Runolfssonhq1vam" [ref=f3e396]
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
              - cell "essA1785901382071149" [ref=f3e415]
              - cell "ESS" [ref=f3e417]
              - cell "AutoA1785901382071149 User" [ref=f3e419]
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
              - cell "essA1785901778590402" [ref=f3e438]
              - cell "ESS" [ref=f3e440]
              - cell "AutoA1785901778590402 User" [ref=f3e442]
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
              - cell "essA1785902242199489" [ref=f3e461]
              - cell "ESS" [ref=f3e463]
              - cell "AutoA1785902242199489 User" [ref=f3e465]
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
              - cell "essB1785901382071149" [ref=f3e484]
              - cell "ESS" [ref=f3e486]
              - cell "AutoB1785901382071149 User" [ref=f3e488]
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
              - cell "essB1785901778590402" [ref=f3e507]
              - cell "ESS" [ref=f3e509]
              - cell "AutoB1785901778590402 User" [ref=f3e511]
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
              - cell "essB1785902242199489" [ref=f3e530]
              - cell "ESS" [ref=f3e532]
              - cell "AutoB1785902242199489 User" [ref=f3e534]
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
              - cell "Jay1234" [ref=f3e553]
              - cell "Admin" [ref=f3e555]
              - cell "Meloni Narendra Modi" [ref=f3e557]
              - cell "Enabled" [ref=f3e559]
              - cell [ref=f3e561]:
                - generic [ref=f3e562]:
                  - button "" [ref=f3e563] [cursor=pointer]
                  - button "" [ref=f3e565] [cursor=pointer]
            - row [ref=f3e568]:
              - cell "" [ref=f3e569]:
                - generic [ref=f3e572] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e573]
                  - generic [ref=f3e574]: 
              - cell "john.admin01" [ref=f3e576]
              - cell "Admin" [ref=f3e578]
              - cell "John Smith_670614005" [ref=f3e580]
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
              - cell "JudeSir" [ref=f3e599]
              - cell "Admin" [ref=f3e601]
              - cell "Harry Runolfssonhq1vam" [ref=f3e603]
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
              - cell "Mercedes_Schroeder92" [ref=f3e622]
              - cell "ESS" [ref=f3e624]
              - cell "Issac Nitzsche" [ref=f3e626]
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
              - cell "Newuser" [ref=f3e645]
              - cell "ESS" [ref=f3e647]
              - cell "Meloni Narendra Modi" [ref=f3e649]
              - cell "Enabled" [ref=f3e651]
              - cell [ref=f3e653]:
                - generic [ref=f3e654]:
                  - button "" [ref=f3e655] [cursor=pointer]
                  - button "" [ref=f3e657] [cursor=pointer]
            - row [ref=f3e660]:
              - cell "" [ref=f3e661]:
                - generic [ref=f3e664] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e665]
                  - generic [ref=f3e666]: 
              - cell "Nmodijii" [ref=f3e668]
              - cell "ESS" [ref=f3e670]
              - cell "Meloni Narendra Modi" [ref=f3e672]
              - cell "Enabled" [ref=f3e674]
              - cell [ref=f3e676]:
                - generic [ref=f3e677]:
                  - button "" [ref=f3e678] [cursor=pointer]
                  - button "" [ref=f3e680] [cursor=pointer]
            - row [ref=f3e683]:
              - cell "" [ref=f3e684]:
                - generic [ref=f3e687] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e688]
                  - generic [ref=f3e689]: 
              - cell "Pat49" [ref=f3e691]
              - cell "ESS" [ref=f3e693]
              - cell "Clair Leannon" [ref=f3e695]
              - cell "Enabled" [ref=f3e697]
              - cell [ref=f3e699]:
                - generic [ref=f3e700]:
                  - button "" [ref=f3e701] [cursor=pointer]
                  - button "" [ref=f3e703] [cursor=pointer]
            - row [ref=f3e706]:
              - cell "" [ref=f3e707]:
                - generic [ref=f3e710] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e711]
                  - generic [ref=f3e712]: 
              - cell "Roman" [ref=f3e714]
              - cell "ESS" [ref=f3e716]
              - cell "sam joy" [ref=f3e718]
              - cell "Enabled" [ref=f3e720]
              - cell [ref=f3e722]:
                - generic [ref=f3e723]:
                  - button "" [ref=f3e724] [cursor=pointer]
                  - button "" [ref=f3e726] [cursor=pointer]
            - row [ref=f3e729]:
              - cell "" [ref=f3e730]:
                - generic [ref=f3e733] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e734]
                  - generic [ref=f3e735]: 
              - cell "user_670614005" [ref=f3e737]
              - cell "ESS" [ref=f3e739]
              - cell "John Smith_670614005" [ref=f3e741]
              - cell "Enabled" [ref=f3e743]
              - cell [ref=f3e745]:
                - generic [ref=f3e746]:
                  - button "" [ref=f3e747] [cursor=pointer]
                  - button "" [ref=f3e749] [cursor=pointer]
            - row [ref=f3e752]:
              - cell "" [ref=f3e753]:
                - generic [ref=f3e756] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e757]
                  - generic [ref=f3e758]: 
              - cell "Vaishnavi" [ref=f3e760]
              - cell "ESS" [ref=f3e762]
              - cell "Vaishnavi Auti" [ref=f3e764]
              - cell "Enabled" [ref=f3e766]
              - cell [ref=f3e768]:
                - generic [ref=f3e769]:
                  - button "" [ref=f3e770] [cursor=pointer]
                  - button "" [ref=f3e772] [cursor=pointer]
    - generic [ref=f3e775]:
      - paragraph [ref=f3e776]: OrangeHRM OS 5.9
      - paragraph [ref=f3e777]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e778] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  686 |     timeout: 15_000,
  687 |   });
  688 | 
  689 |   await this.deleteSelectedButton.click();
  690 | 
  691 |   const confirmationDialog =
  692 |     this.page.locator(
  693 |       '.oxd-dialog-container'
  694 |     );
  695 | 
  696 |   await expect(
  697 |     confirmationDialog
  698 |   ).toBeVisible();
  699 | 
  700 |   // More reliable than button text because the
  701 |   // demo application's language can change.
  702 |   const confirmDeleteButton =
  703 |     confirmationDialog.locator(
  704 |       'button.oxd-button--label-danger'
  705 |     );
  706 | 
  707 |   await expect(
  708 |     confirmDeleteButton
  709 |   ).toBeVisible();
  710 | 
  711 |   const deletedToast = expect(
  712 |     this.toastMessage.filter({
  713 |       hasText: /Successfully Deleted/i,
  714 |     })
  715 |   ).toBeVisible({
  716 |     timeout: 20_000,
  717 |   });
  718 | 
  719 |   await confirmDeleteButton.click();
  720 | 
  721 |   await expect(
  722 |     confirmationDialog
  723 |   ).toBeHidden({
  724 |     timeout: 20_000,
  725 |   });
  726 | 
  727 |   await deletedToast;
  728 | 
  729 |   await expect(
  730 |     this.loadingSpinner
  731 |   ).toBeHidden();
  732 | }
  733 | 
  734 | async selectAllVisibleSystemUsers(): Promise<void> {
  735 |   await expect(
  736 |     this.loadingSpinner
  737 |   ).toBeHidden();
  738 | 
  739 |   const headerCheckboxLabel =
  740 |     this.page.locator(
  741 |       '.oxd-table-header ' +
  742 |       '.oxd-checkbox-wrapper label'
  743 |     );
  744 | 
  745 |   const headerCheckbox =
  746 |     this.page.locator(
  747 |       '.oxd-table-header ' +
  748 |       'input[type="checkbox"]'
  749 |     );
  750 | 
  751 |   // Exclude disabled row checkboxes.
  752 |   const selectableRowCheckboxes =
  753 |     this.userRows.locator(
  754 |       'input[type="checkbox"]:not(:disabled)'
  755 |     );
  756 | 
  757 |   const selectableRowCount =
  758 |     await selectableRowCheckboxes.count();
  759 | 
  760 |   expect(
  761 |     selectableRowCount
  762 |   ).toBeGreaterThan(0);
  763 | 
  764 |   await headerCheckboxLabel.click();
  765 | 
  766 |   await expect(
  767 |     headerCheckbox
  768 |   ).toBeChecked();
  769 | 
  770 |   await expect
  771 |     .poll(
  772 |       async () =>
  773 |         selectableRowCheckboxes.evaluateAll(
  774 |           checkboxes =>
  775 |             checkboxes.filter(
  776 |               checkbox =>
  777 |                 (
  778 |                   checkbox as HTMLInputElement
  779 |                 ).checked
  780 |             ).length
  781 |         ),
  782 |       {
  783 |         timeout: 15_000,
  784 |       }
  785 |     )
> 786 |     .toBe(selectableRowCount);
      |      ^ Error: expect(received).toBe(expected) // Object.is equality
  787 | }
  788 | 
  789 | async deselectAllVisibleSystemUsers(): Promise<void> {
  790 |   const headerCheckboxLabel =
  791 |     this.page.locator(
  792 |       '.oxd-table-header ' +
  793 |       '.oxd-checkbox-wrapper label'
  794 |     );
  795 | 
  796 |   const headerCheckbox =
  797 |     this.page.locator(
  798 |       '.oxd-table-header ' +
  799 |       'input[type="checkbox"]'
  800 |     );
  801 | 
  802 |   const selectableRowCheckboxes =
  803 |     this.userRows.locator(
  804 |       'input[type="checkbox"]:not(:disabled)'
  805 |     );
  806 | 
  807 |   await headerCheckboxLabel.click();
  808 | 
  809 |   await expect(
  810 |     headerCheckbox
  811 |   ).not.toBeChecked();
  812 | 
  813 |   await expect
  814 |     .poll(
  815 |       async () =>
  816 |         selectableRowCheckboxes.evaluateAll(
  817 |           checkboxes =>
  818 |             checkboxes.filter(
  819 |               checkbox =>
  820 |                 (
  821 |                   checkbox as HTMLInputElement
  822 |                 ).checked
  823 |             ).length
  824 |         ),
  825 |       {
  826 |         timeout: 15_000,
  827 |       }
  828 |     )
  829 |     .toBe(0);
  830 | }
  831 | 
  832 | async deleteSelectedSystemUsers(): Promise<void> {
  833 |   await expect(
  834 |     this.deleteSelectedButton
  835 |   ).toBeVisible({
  836 |     timeout: 15_000,
  837 |   });
  838 | 
  839 |   await this.deleteSelectedButton.click();
  840 | 
  841 |   const confirmationDialog =
  842 |     this.page.locator(
  843 |       '.oxd-dialog-container'
  844 |     );
  845 | 
  846 |   await expect(
  847 |     confirmationDialog
  848 |   ).toBeVisible();
  849 | 
  850 |   const confirmDeleteButton =
  851 |     confirmationDialog.locator(
  852 |       'button.oxd-button--label-danger'
  853 |     );
  854 | 
  855 |   await expect(
  856 |     confirmDeleteButton
  857 |   ).toBeVisible();
  858 | 
  859 |   await confirmDeleteButton.click();
  860 | 
  861 |   await expect(
  862 |     confirmationDialog
  863 |   ).toBeHidden({
  864 |     timeout: 20_000,
  865 |   });
  866 | 
  867 |   await expect(
  868 |     this.toastMessage.filter({
  869 |       hasText: /Successfully Deleted/i,
  870 |     })
  871 |   ).toBeVisible({
  872 |     timeout: 20_000,
  873 |   });
  874 | 
  875 |   await expect(
  876 |     this.loadingSpinner
  877 |   ).toBeHidden();
  878 | }
  879 | 
  880 | }
  881 | 
```