# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:1588:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Search', exact: true })
    - locator resolved to <button type="submit" data-v-10d463b7="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=f8e3]:
  - generic:
    - complementary [ref=f8e4]:
      - navigation "Sidepanel" [ref=f8e5]:
        - generic [ref=f8e6]:
          - link [ref=f8e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f8e9]
          - text: 
        - generic [ref=f8e10]:
          - generic [ref=f8e11]:
            - generic [ref=f8e12]:
              - textbox "Search" [ref=f8e15]
              - button "" [ref=f8e16] [cursor=pointer]
            - separator [ref=f8e18]
          - list [ref=f8e19]:
            - listitem [ref=f8e20]:
              - link "Admin" [ref=f8e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f8e25]:
              - link "PIM" [ref=f8e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f8e41]:
              - link "Leave" [ref=f8e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f8e46]:
              - link "Time" [ref=f8e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f8e54]:
              - link "Recruitment" [ref=f8e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f8e62]:
              - link "My Info" [ref=f8e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f8e70]:
              - link "Performance" [ref=f8e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f8e80]:
              - link "Dashboard" [ref=f8e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f8e85]:
              - link "Directory" [ref=f8e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f8e90]:
              - link "Maintenance" [ref=f8e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f8e96]:
              - link "Claim" [ref=f8e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f8e105]:
              - link "Buzz" [ref=f8e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f8e110]:
      - generic [ref=f8e111]:
        - generic [ref=f8e112]:
          - text: 
          - generic [ref=f8e113]:
            - heading "Admin" [level=6] [ref=f8e114]
            - heading "/ User Management" [level=6] [ref=f8e115]
        - link [ref=f8e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f8e118] [cursor=pointer]
        - list [ref=f8e124]:
          - listitem [ref=f8e125]:
            - generic [ref=f8e126] [cursor=pointer]:
              - img "profile picture" [ref=f8e127]
              - paragraph [ref=f8e128]: Surya king
              - generic [ref=f8e129]: 
      - navigation "Topbar Menu" [ref=f8e131]:
        - list [ref=f8e132]:
          - listitem [ref=f8e133] [cursor=pointer]:
            - generic [ref=f8e134]:
              - text: User Management
              - generic [ref=f8e135]: 
          - listitem [ref=f8e136] [cursor=pointer]:
            - generic [ref=f8e137]:
              - text: Job
              - generic [ref=f8e138]: 
          - listitem [ref=f8e139] [cursor=pointer]:
            - generic [ref=f8e140]:
              - text: Organization
              - generic [ref=f8e141]: 
          - listitem [ref=f8e142] [cursor=pointer]:
            - generic [ref=f8e143]:
              - text: Qualifications
              - generic [ref=f8e144]: 
          - listitem [ref=f8e145] [cursor=pointer]:
            - link "Nationalities" [ref=f8e146]:
              - /url: "#"
          - listitem [ref=f8e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f8e148]:
              - /url: "#"
          - listitem [ref=f8e149] [cursor=pointer]:
            - generic [ref=f8e150]:
              - text: Configuration
              - generic [ref=f8e151]: 
          - button "" [ref=f8e153] [cursor=pointer]
  - generic [ref=f8e155]:
    - generic [ref=f8e157]:
      - generic [ref=f8e158]:
        - generic [ref=f8e159]:
          - heading "System Users" [level=5] [ref=f8e161]
          - button "" [ref=f8e164] [cursor=pointer]
        - separator [ref=f8e166]
        - generic [ref=f8e168]:
          - generic [ref=f8e170]:
            - generic [ref=f8e172]:
              - generic [ref=f8e173]: Username
              - textbox [active] [ref=f8e176]: ess1785913020776167
            - generic [ref=f8e178]:
              - generic [ref=f8e179]: User Role
              - generic [ref=f8e183] [cursor=pointer]:
                - generic [ref=f8e184]: "-- Select --"
                - generic [ref=f8e185]: 
            - generic [ref=f8e188]:
              - generic [ref=f8e189]: Employee Name
              - textbox "Type for hints..." [ref=f8e194]
            - generic [ref=f8e196]:
              - generic [ref=f8e197]: Status
              - generic [ref=f8e201] [cursor=pointer]:
                - generic [ref=f8e202]: "-- Select --"
                - generic [ref=f8e203]: 
          - separator [ref=f8e205]
          - generic [ref=f8e206]:
            - button "Reset" [ref=f8e207] [cursor=pointer]
            - button "Search" [ref=f8e208] [cursor=pointer]
      - generic [ref=f8e209]:
        - button " Add" [ref=f8e211] [cursor=pointer]:
          - generic [ref=f8e212]: 
          - text: Add
        - generic [ref=f8e213]:
          - separator [ref=f8e214]
          - generic [ref=f8e215]: (24) Records Found
        - table [ref=f8e218]:
          - rowgroup [ref=f8e219]:
            - row [ref=f8e220]:
              - columnheader "" [ref=f8e221]:
                - generic [ref=f8e223] [cursor=pointer]:
                  - checkbox "" [ref=f8e224]
                  - generic [ref=f8e225]: 
              - columnheader "Username " [ref=f8e227]:
                - text: Username
                - generic [ref=f8e228]:
                  - generic [ref=f8e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f8e230]:
                - text: User Role
                - generic [ref=f8e231]:
                  - generic [ref=f8e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f8e233]:
                - text: Employee Name
                - generic [ref=f8e234]:
                  - generic [ref=f8e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f8e236]:
                - text: Status
                - generic [ref=f8e237]:
                  - generic [ref=f8e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f8e239]
          - rowgroup [ref=f8e240]:
            - row [ref=f8e242]:
              - cell "" [ref=f8e243]:
                - generic [ref=f8e247]:
                  - checkbox "" [ref=f8e248]
                  - generic [ref=f8e249]: 
              - cell "Admin" [ref=f8e251]
              - cell "Admin" [ref=f8e253]
              - cell "Surya king" [ref=f8e255]
              - cell "Enabled" [ref=f8e257]
              - cell [ref=f8e259]:
                - generic [ref=f8e260]:
                  - button "" [ref=f8e261] [cursor=pointer]
                  - button "" [ref=f8e263] [cursor=pointer]
            - row [ref=f8e266]:
              - cell "" [ref=f8e267]:
                - generic [ref=f8e270] [cursor=pointer]:
                  - checkbox "" [ref=f8e271]
                  - generic [ref=f8e272]: 
              - cell "Darrin Rae Pouros Test" [ref=f8e274]
              - cell "ESS" [ref=f8e276]
              - cell "Darrin Pouros Test" [ref=f8e278]
              - cell "Enabled" [ref=f8e280]
              - cell [ref=f8e282]:
                - generic [ref=f8e283]:
                  - button "" [ref=f8e284] [cursor=pointer]
                  - button "" [ref=f8e286] [cursor=pointer]
            - row [ref=f8e289]:
              - cell "" [ref=f8e290]:
                - generic [ref=f8e293] [cursor=pointer]:
                  - checkbox "" [ref=f8e294]
                  - generic [ref=f8e295]: 
              - cell "ess1785913020776167" [ref=f8e297]
              - cell "ESS" [ref=f8e299]
              - cell "Auto1785913020776167 User" [ref=f8e301]
              - cell "Enabled" [ref=f8e303]
              - cell [ref=f8e305]:
                - generic [ref=f8e306]:
                  - button "" [ref=f8e307] [cursor=pointer]
                  - button "" [ref=f8e309] [cursor=pointer]
            - row [ref=f8e312]:
              - cell "" [ref=f8e313]:
                - generic [ref=f8e316] [cursor=pointer]:
                  - checkbox "" [ref=f8e317]
                  - generic [ref=f8e318]: 
              - cell "essA1785912699697344" [ref=f8e320]
              - cell "ESS" [ref=f8e322]
              - cell "AutoA1785912699697344 User" [ref=f8e324]
              - cell "Enabled" [ref=f8e326]
              - cell [ref=f8e328]:
                - generic [ref=f8e329]:
                  - button "" [ref=f8e330] [cursor=pointer]
                  - button "" [ref=f8e332] [cursor=pointer]
            - row [ref=f8e335]:
              - cell "" [ref=f8e336]:
                - generic [ref=f8e339] [cursor=pointer]:
                  - checkbox "" [ref=f8e340]
                  - generic [ref=f8e341]: 
              - cell "essA1785912805880711" [ref=f8e343]
              - cell "ESS" [ref=f8e345]
              - cell "AutoA1785912805880711 User" [ref=f8e347]
              - cell "Enabled" [ref=f8e349]
              - cell [ref=f8e351]:
                - generic [ref=f8e352]:
                  - button "" [ref=f8e353] [cursor=pointer]
                  - button "" [ref=f8e355] [cursor=pointer]
            - row [ref=f8e358]:
              - cell "" [ref=f8e359]:
                - generic [ref=f8e362] [cursor=pointer]:
                  - checkbox "" [ref=f8e363]
                  - generic [ref=f8e364]: 
              - cell "essA1785912878973644" [ref=f8e366]
              - cell "ESS" [ref=f8e368]
              - cell "AutoA1785912878973644 User" [ref=f8e370]
              - cell "Enabled" [ref=f8e372]
              - cell [ref=f8e374]:
                - generic [ref=f8e375]:
                  - button "" [ref=f8e376] [cursor=pointer]
                  - button "" [ref=f8e378] [cursor=pointer]
            - row [ref=f8e381]:
              - cell "" [ref=f8e382]:
                - generic [ref=f8e385] [cursor=pointer]:
                  - checkbox "" [ref=f8e386]
                  - generic [ref=f8e387]: 
              - cell "essA1785912882847409" [ref=f8e389]
              - cell "ESS" [ref=f8e391]
              - cell "AutoA1785912882847409 User" [ref=f8e393]
              - cell "Enabled" [ref=f8e395]
              - cell [ref=f8e397]:
                - generic [ref=f8e398]:
                  - button "" [ref=f8e399] [cursor=pointer]
                  - button "" [ref=f8e401] [cursor=pointer]
            - row [ref=f8e404]:
              - cell "" [ref=f8e405]:
                - generic [ref=f8e408] [cursor=pointer]:
                  - checkbox "" [ref=f8e409]
                  - generic [ref=f8e410]: 
              - cell "essA1785912986290540" [ref=f8e412]
              - cell "ESS" [ref=f8e414]
              - cell "AutoA1785912986290540 User" [ref=f8e416]
              - cell "Enabled" [ref=f8e418]
              - cell [ref=f8e420]:
                - generic [ref=f8e421]:
                  - button "" [ref=f8e422] [cursor=pointer]
                  - button "" [ref=f8e424] [cursor=pointer]
            - row [ref=f8e427]:
              - cell "" [ref=f8e428]:
                - generic [ref=f8e431] [cursor=pointer]:
                  - checkbox "" [ref=f8e432]
                  - generic [ref=f8e433]: 
              - cell "essA1785912996581770" [ref=f8e435]
              - cell "ESS" [ref=f8e437]
              - cell "AutoA1785912996581770 User" [ref=f8e439]
              - cell "Enabled" [ref=f8e441]
              - cell [ref=f8e443]:
                - generic [ref=f8e444]:
                  - button "" [ref=f8e445] [cursor=pointer]
                  - button "" [ref=f8e447] [cursor=pointer]
            - row [ref=f8e450]:
              - cell "" [ref=f8e451]:
                - generic [ref=f8e454] [cursor=pointer]:
                  - checkbox "" [ref=f8e455]
                  - generic [ref=f8e456]: 
              - cell "essB1785912699697344" [ref=f8e458]
              - cell "ESS" [ref=f8e460]
              - cell "AutoB1785912699697344 User" [ref=f8e462]
              - cell "Enabled" [ref=f8e464]
              - cell [ref=f8e466]:
                - generic [ref=f8e467]:
                  - button "" [ref=f8e468] [cursor=pointer]
                  - button "" [ref=f8e470] [cursor=pointer]
            - row [ref=f8e473]:
              - cell "" [ref=f8e474]:
                - generic [ref=f8e477] [cursor=pointer]:
                  - checkbox "" [ref=f8e478]
                  - generic [ref=f8e479]: 
              - cell "essB1785912805880711" [ref=f8e481]
              - cell "ESS" [ref=f8e483]
              - cell "AutoB1785912805880711 User" [ref=f8e485]
              - cell "Enabled" [ref=f8e487]
              - cell [ref=f8e489]:
                - generic [ref=f8e490]:
                  - button "" [ref=f8e491] [cursor=pointer]
                  - button "" [ref=f8e493] [cursor=pointer]
            - row [ref=f8e496]:
              - cell "" [ref=f8e497]:
                - generic [ref=f8e500] [cursor=pointer]:
                  - checkbox "" [ref=f8e501]
                  - generic [ref=f8e502]: 
              - cell "essB1785912878973644" [ref=f8e504]
              - cell "ESS" [ref=f8e506]
              - cell "AutoB1785912878973644 User" [ref=f8e508]
              - cell "Enabled" [ref=f8e510]
              - cell [ref=f8e512]:
                - generic [ref=f8e513]:
                  - button "" [ref=f8e514] [cursor=pointer]
                  - button "" [ref=f8e516] [cursor=pointer]
            - row [ref=f8e519]:
              - cell "" [ref=f8e520]:
                - generic [ref=f8e523] [cursor=pointer]:
                  - checkbox "" [ref=f8e524]
                  - generic [ref=f8e525]: 
              - cell "essB1785912882847409" [ref=f8e527]
              - cell "ESS" [ref=f8e529]
              - cell "AutoB1785912882847409 User" [ref=f8e531]
              - cell "Enabled" [ref=f8e533]
              - cell [ref=f8e535]:
                - generic [ref=f8e536]:
                  - button "" [ref=f8e537] [cursor=pointer]
                  - button "" [ref=f8e539] [cursor=pointer]
            - row [ref=f8e542]:
              - cell "" [ref=f8e543]:
                - generic [ref=f8e546] [cursor=pointer]:
                  - checkbox "" [ref=f8e547]
                  - generic [ref=f8e548]: 
              - cell "essB1785912986290540" [ref=f8e550]
              - cell "ESS" [ref=f8e552]
              - cell "AutoB1785912986290540 User" [ref=f8e554]
              - cell "Enabled" [ref=f8e556]
              - cell [ref=f8e558]:
                - generic [ref=f8e559]:
                  - button "" [ref=f8e560] [cursor=pointer]
                  - button "" [ref=f8e562] [cursor=pointer]
            - row [ref=f8e565]:
              - cell "" [ref=f8e566]:
                - generic [ref=f8e569] [cursor=pointer]:
                  - checkbox "" [ref=f8e570]
                  - generic [ref=f8e571]: 
              - cell "essB1785912996581770" [ref=f8e573]
              - cell "ESS" [ref=f8e575]
              - cell "AutoB1785912996581770 User" [ref=f8e577]
              - cell "Enabled" [ref=f8e579]
              - cell [ref=f8e581]:
                - generic [ref=f8e582]:
                  - button "" [ref=f8e583] [cursor=pointer]
                  - button "" [ref=f8e585] [cursor=pointer]
            - row [ref=f8e588]:
              - cell "" [ref=f8e589]:
                - generic [ref=f8e592] [cursor=pointer]:
                  - checkbox "" [ref=f8e593]
                  - generic [ref=f8e594]: 
              - cell "Jaylin.McDermott12" [ref=f8e596]
              - cell "ESS" [ref=f8e598]
              - cell "Zion Thompson" [ref=f8e600]
              - cell "Enabled" [ref=f8e602]
              - cell [ref=f8e604]:
                - generic [ref=f8e605]:
                  - button "" [ref=f8e606] [cursor=pointer]
                  - button "" [ref=f8e608] [cursor=pointer]
            - row [ref=f8e611]:
              - cell "" [ref=f8e612]:
                - generic [ref=f8e615] [cursor=pointer]:
                  - checkbox "" [ref=f8e616]
                  - generic [ref=f8e617]: 
              - cell "jsmith.test" [ref=f8e619]
              - cell "ESS" [ref=f8e621]
              - cell "Jane Smith" [ref=f8e623]
              - cell "Enabled" [ref=f8e625]
              - cell [ref=f8e627]:
                - generic [ref=f8e628]:
                  - button "" [ref=f8e629] [cursor=pointer]
                  - button "" [ref=f8e631] [cursor=pointer]
            - row [ref=f8e634]:
              - cell "" [ref=f8e635]:
                - generic [ref=f8e638] [cursor=pointer]:
                  - checkbox "" [ref=f8e639]
                  - generic [ref=f8e640]: 
              - cell "LiSi123" [ref=f8e642]
              - cell "ESS" [ref=f8e644]
              - cell "Li SI" [ref=f8e646]
              - cell "Enabled" [ref=f8e648]
              - cell [ref=f8e650]:
                - generic [ref=f8e651]:
                  - button "" [ref=f8e652] [cursor=pointer]
                  - button "" [ref=f8e654] [cursor=pointer]
            - row [ref=f8e657]:
              - cell "" [ref=f8e658]:
                - generic [ref=f8e661] [cursor=pointer]:
                  - checkbox "" [ref=f8e662]
                  - generic [ref=f8e663]: 
              - cell "rajan@gmail.com" [ref=f8e665]
              - cell "ESS" [ref=f8e667]
              - cell "Rajan Prajapati" [ref=f8e669]
              - cell "Enabled" [ref=f8e671]
              - cell [ref=f8e673]:
                - generic [ref=f8e674]:
                  - button "" [ref=f8e675] [cursor=pointer]
                  - button "" [ref=f8e677] [cursor=pointer]
            - row [ref=f8e680]:
              - cell "" [ref=f8e681]:
                - generic [ref=f8e684] [cursor=pointer]:
                  - checkbox "" [ref=f8e685]
                  - generic [ref=f8e686]: 
              - cell "sharif@gmail.com" [ref=f8e688]
              - cell "ESS" [ref=f8e690]
              - cell "MD Sharif Nawaz" [ref=f8e692]
              - cell "Enabled" [ref=f8e694]
              - cell [ref=f8e696]:
                - generic [ref=f8e697]:
                  - button "" [ref=f8e698] [cursor=pointer]
                  - button "" [ref=f8e700] [cursor=pointer]
            - row [ref=f8e703]:
              - cell "" [ref=f8e704]:
                - generic [ref=f8e707] [cursor=pointer]:
                  - checkbox "" [ref=f8e708]
                  - generic [ref=f8e709]: 
              - cell "sudhir@gmail.com" [ref=f8e711]
              - cell "ESS" [ref=f8e713]
              - cell "Sudhir Kalmegh" [ref=f8e715]
              - cell "Enabled" [ref=f8e717]
              - cell [ref=f8e719]:
                - generic [ref=f8e720]:
                  - button "" [ref=f8e721] [cursor=pointer]
                  - button "" [ref=f8e723] [cursor=pointer]
            - row [ref=f8e726]:
              - cell "" [ref=f8e727]:
                - generic [ref=f8e730] [cursor=pointer]:
                  - checkbox "" [ref=f8e731]
                  - generic [ref=f8e732]: 
              - cell "testuser02" [ref=f8e734]
              - cell "Admin" [ref=f8e736]
              - cell "Surya king" [ref=f8e738]
              - cell "Enabled" [ref=f8e740]
              - cell [ref=f8e742]:
                - generic [ref=f8e743]:
                  - button "" [ref=f8e744] [cursor=pointer]
                  - button "" [ref=f8e746] [cursor=pointer]
            - row [ref=f8e749]:
              - cell "" [ref=f8e750]:
                - generic [ref=f8e753] [cursor=pointer]:
                  - checkbox "" [ref=f8e754]
                  - generic [ref=f8e755]: 
              - cell "Tomas.Corkery65" [ref=f8e757]
              - cell "ESS" [ref=f8e759]
              - cell "Adrian Bosco" [ref=f8e761]
              - cell "Enabled" [ref=f8e763]
              - cell [ref=f8e765]:
                - generic [ref=f8e766]:
                  - button "" [ref=f8e767] [cursor=pointer]
                  - button "" [ref=f8e769] [cursor=pointer]
            - row [ref=f8e772]:
              - cell "" [ref=f8e773]:
                - generic [ref=f8e776] [cursor=pointer]:
                  - checkbox "" [ref=f8e777]
                  - generic [ref=f8e778]: 
              - cell "viond" [ref=f8e780]
              - cell "Admin" [ref=f8e782]
              - cell "Surya king" [ref=f8e784]
              - cell "Enabled" [ref=f8e786]
              - cell [ref=f8e788]:
                - generic [ref=f8e789]:
                  - button "" [ref=f8e790] [cursor=pointer]
                  - button "" [ref=f8e792] [cursor=pointer]
    - generic [ref=f8e795]:
      - paragraph [ref=f8e796]: OrangeHRM OS 5.9
      - paragraph [ref=f8e797]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f8e798] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  257 |     ),
  258 |   });
  259 | 
  260 | 
  261 |     this.nextPageButton = page.locator(
  262 |   'button.oxd-pagination-page-item--previous-next'
  263 | ).filter({
  264 |   has: page.locator('i.bi-chevron-right'),
  265 | });
  266 | 
  267 | this.previousPageButton = page.locator(
  268 |   'button.oxd-pagination-page-item--previous-next'
  269 | ).filter({
  270 |   has: page.locator('i.bi-chevron-left'),
  271 | });
  272 | 
  273 | this.passwordValidation = page
  274 |   .locator('.oxd-input-group')
  275 |   .filter({
  276 |     has: page.getByText('Password', {
  277 |       exact: true,
  278 |     }),
  279 |   })
  280 |   .locator('.oxd-input-field-error-message');
  281 | 
  282 | this.employeeNameValidation = page
  283 |   .locator('.oxd-input-group')
  284 |   .filter({
  285 |     has: page
  286 |       .locator('label')
  287 |       .getByText('Employee Name', {
  288 |         exact: true,
  289 |       }),
  290 |   })
  291 |   .locator('.oxd-input-field-error-message');
  292 | 
  293 | 
  294 |   }
  295 | 
  296 |   async gotoUserManagementUsers(): Promise<void> {
  297 |     await this.userManagementMenu.click();
  298 |     await this.usersMenuItem.click();
  299 |   }
  300 | 
  301 |   private async selectDropdownOption(
  302 |     dropdown: Locator,
  303 |     option: string,
  304 |   ): Promise<void> {
  305 |     await dropdown.click();
  306 | 
  307 |     const dropdownOption = this.page
  308 |       .locator(".oxd-select-option")
  309 |       .getByText(option, {
  310 |         exact: true,
  311 |       });
  312 | 
  313 |     await expect(dropdownOption).toBeVisible();
  314 |     await dropdownOption.click();
  315 |   }
  316 | 
  317 |   async searchSystemUsers(filters: SystemUserFilters): Promise<void> {
  318 |     if (filters.username !== undefined) {
  319 |       await this.usernameInput.fill(filters.username);
  320 |     }
  321 | 
  322 |     if (filters.userRole !== undefined) {
  323 |       await this.selectDropdownOption(this.userRoleDropdown, filters.userRole);
  324 |     }
  325 | 
  326 |     if (filters.employeeName !== undefined) {
  327 |       await this.employeeNameInput.fill(filters.employeeName);
  328 | 
  329 |       const employeeOption = this.page
  330 |         .locator(".oxd-autocomplete-option")
  331 |         .filter({
  332 |           hasText: filters.employeeName,
  333 |         })
  334 |         .first();
  335 | 
  336 |       await expect(employeeOption).toBeVisible({
  337 |         timeout: 15_000,
  338 |       });
  339 | 
  340 |       await employeeOption.click();
  341 |     }
  342 | 
  343 |     if (filters.status !== undefined) {
  344 |       await this.selectDropdownOption(this.statusDropdown, filters.status);
  345 |     }
  346 | 
  347 |     const searchResponse = this.page.waitForResponse(
  348 |       (response) =>
  349 |         response.url().includes("/api/v2/admin/users") &&
  350 |         response.request().method() === "GET" &&
  351 |         response.ok(),
  352 |       {
  353 |         timeout: 20_000,
  354 |       },
  355 |     );
  356 | 
> 357 |     await this.searchButton.click();
      |                             ^ Error: locator.click: Test timeout of 60000ms exceeded.
  358 |     await searchResponse;
  359 | 
  360 |     await expect(this.loadingSpinner).toBeHidden();
  361 |   }
  362 | 
  363 |   async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
  364 |     await expect(this.userRows.first()).toBeVisible();
  365 | 
  366 |     const matchingRow = expected.username
  367 |       ? this.userRows.filter({
  368 |           has: this.page
  369 |             .locator(".oxd-table-cell")
  370 |             .nth(1)
  371 |             .getByText(expected.username, {
  372 |               exact: true,
  373 |             }),
  374 |         })
  375 |       : this.userRows.first();
  376 | 
  377 |     await expect(matchingRow).toHaveCount(1);
  378 | 
  379 |     const cells = matchingRow.locator(".oxd-table-cell");
  380 | 
  381 |     if (expected.username !== undefined) {
  382 |       await expect(cells.nth(1)).toHaveText(expected.username);
  383 |     }
  384 | 
  385 |     if (expected.userRole !== undefined) {
  386 |       await expect(cells.nth(2)).toHaveText(expected.userRole);
  387 |     }
  388 | 
  389 |     if (expected.employeeName !== undefined) {
  390 |       await expect(cells.nth(3)).toContainText(expected.employeeName);
  391 |     }
  392 | 
  393 |     if (expected.status !== undefined) {
  394 |       await expect(cells.nth(4)).toHaveText(expected.status);
  395 |     }
  396 |   }
  397 | 
  398 |   async resetSystemUserFilters(): Promise<void> {
  399 |     await this.resetButton.click();
  400 | 
  401 |     await expect(this.usernameInput).toHaveValue("");
  402 |     await expect(this.employeeNameInput).toHaveValue("");
  403 |   }
  404 | 
  405 |   async gotoAddSystemUser(): Promise<void> {
  406 |     await this.addButton.click();
  407 |     await this.page.waitForURL(/admin\/saveSystemUser/, {
  408 |       timeout: 20_000,
  409 |     });
  410 | 
  411 |     await expect(this.addUserHeading).toBeVisible();
  412 |   }
  413 | 
  414 |   async fillSystemUserForm(details: AddSystemUserDetails): Promise<void> {
  415 |     await this.selectDropdownOption(this.addUserRoleDropdown, details.userRole);
  416 | 
  417 |     await this.addEmployeeNameInput.fill(details.employeeName);
  418 | 
  419 |     const matchingEmployee = this.autocompleteOptions
  420 |       .filter({
  421 |         hasText: details.employeeName,
  422 |       })
  423 |       .first();
  424 | 
  425 |     await expect(matchingEmployee).toBeVisible({
  426 |       timeout: 20_000,
  427 |     });
  428 | 
  429 |     await matchingEmployee.click();
  430 | 
  431 |     await this.selectDropdownOption(this.addStatusDropdown, details.status);
  432 | 
  433 |     await this.addUsernameInput.fill(details.username);
  434 | 
  435 |     await this.addPasswordInput.fill(details.password);
  436 | 
  437 |     await this.addConfirmPasswordInput.fill(details.password);
  438 |   }
  439 | 
  440 |   async saveSystemUser(): Promise<void> {
  441 |     const createUserResponse = this.page.waitForResponse(
  442 |       (response) =>
  443 |         response.url().includes("/api/v2/admin/users") &&
  444 |         response.request().method() === "POST" &&
  445 |         response.ok(),
  446 |       {
  447 |         timeout: 20_000,
  448 |       },
  449 |     );
  450 | 
  451 |     const systemUsersPage = this.page.waitForURL(/admin\/viewSystemUsers/, {
  452 |       timeout: 20_000,
  453 |     });
  454 | 
  455 |     // Begin watching for the temporary toast
  456 |     // before clicking Save.
  457 |     const successToastAppears = expect(this.successToast).toContainText(
```