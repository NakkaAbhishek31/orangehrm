# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_173 - Required validation should appear when viewing attendance without selecting an employee @negative @validation @attendance @regression
- Location: tests\Time\time.spec.ts:339:10

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'View', exact: true }) resolved to 51 elements:
    1) <button type="submit" data-v-10d463b7="" data-v-1755a182="" class="oxd-button oxd-button--medium oxd-button--secondary">…</button> aka locator('form').getByRole('button', { name: 'View' })
    2) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('row', { name: 'A8DCo 010Z 0.00 View' }).getByRole('button')
    3) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('button', { name: 'View' }).nth(2)
    4) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('button', { name: 'View' }).nth(3)
    5) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('button', { name: 'View' }).nth(4)
    6) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('button', { name: 'View' }).nth(5)
    7) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka locator('div:nth-child(6) > .oxd-table-row > div:nth-child(3) > .oxd-table-cell-actions > .oxd-button')
    8) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka locator('div:nth-child(7) > .oxd-table-row > div:nth-child(3) > .oxd-table-cell-actions > .oxd-button')
    9) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka locator('div:nth-child(8) > .oxd-table-row > div:nth-child(3) > .oxd-table-cell-actions > .oxd-button')
    10) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka locator('div:nth-child(9) > .oxd-table-row > div:nth-child(3) > .oxd-table-cell-actions > .oxd-button')
    ...

Call log:
  - waiting for getByRole('button', { name: 'View', exact: true })

```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic:
    - complementary [ref=f5e4]:
      - navigation "Sidepanel" [ref=f5e5]:
        - generic [ref=f5e6]:
          - link [ref=f5e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f5e9]
          - text: 
        - generic [ref=f5e10]:
          - generic [ref=f5e11]:
            - generic [ref=f5e12]:
              - textbox "Search" [ref=f5e15]
              - button "" [ref=f5e16] [cursor=pointer]
            - separator [ref=f5e18]
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Admin" [ref=f5e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f5e25]:
              - link "PIM" [ref=f5e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f5e41]:
              - link "Leave" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f5e46]:
              - link "Time" [ref=f5e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f5e54]:
              - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e62]:
              - link "My Info" [ref=f5e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e70]:
              - link "Performance" [ref=f5e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e80]:
              - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e85]:
              - link "Directory" [ref=f5e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e90]:
              - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e96]:
              - link "Claim" [ref=f5e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e105]:
              - link "Buzz" [ref=f5e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e110]:
      - generic [ref=f5e111]:
        - generic [ref=f5e112]:
          - text: 
          - generic [ref=f5e113]:
            - heading "Attendance" [level=6] [ref=f5e114]
            - heading "/ Attendance" [level=6] [ref=f5e115]
        - link [ref=f5e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e118] [cursor=pointer]
        - list [ref=f5e124]:
          - listitem [ref=f5e125]:
            - generic [ref=f5e126] [cursor=pointer]:
              - img "profile picture" [ref=f5e127]
              - paragraph [ref=f5e128]: alexa siri
              - generic [ref=f5e129]: 
      - navigation "Topbar Menu" [ref=f5e131]:
        - list [ref=f5e132]:
          - listitem [ref=f5e133] [cursor=pointer]:
            - generic [ref=f5e134]:
              - text: Timesheets
              - generic [ref=f5e135]: 
          - listitem [ref=f5e136] [cursor=pointer]:
            - generic [ref=f5e137]:
              - text: Attendance
              - generic [ref=f5e138]: 
          - listitem [ref=f5e139] [cursor=pointer]:
            - generic [ref=f5e140]:
              - text: Reports
              - generic [ref=f5e141]: 
          - listitem [ref=f5e142] [cursor=pointer]:
            - generic [ref=f5e143]:
              - text: Project Info
              - generic [ref=f5e144]: 
          - button "" [ref=f5e146] [cursor=pointer]
  - generic [ref=f5e148]:
    - generic [ref=f5e149]:
      - generic [ref=f5e150]:
        - generic [ref=f5e151]:
          - heading "Employee Attendance Records" [level=5] [ref=f5e153]
          - button "" [ref=f5e156] [cursor=pointer]
        - separator [ref=f5e158]
        - generic [ref=f5e160]:
          - generic [ref=f5e162]:
            - generic [ref=f5e164]:
              - generic [ref=f5e165]: Employee Name
              - textbox "Type for hints..." [active] [ref=f5e170]
            - generic [ref=f5e172]:
              - generic [ref=f5e173]: Date*
              - generic [ref=f5e177]:
                - textbox "yyyy-dd-mm" [ref=f5e178]: 2026-20-08
                - generic [ref=f5e179] [cursor=pointer]: 
          - separator [ref=f5e180]
          - generic [ref=f5e181]:
            - paragraph [ref=f5e182]: "* Required"
            - button "View" [ref=f5e183] [cursor=pointer]
      - generic [ref=f5e184]:
        - generic [ref=f5e185]: (119) Records Found
        - table [ref=f5e189]:
          - rowgroup [ref=f5e190]:
            - row [ref=f5e191]:
              - columnheader "Employee Name" [ref=f5e192]
              - columnheader "Total Duration (Hours)" [ref=f5e193]
              - columnheader "Actions" [ref=f5e194]
          - rowgroup [ref=f5e195]:
            - row [ref=f5e197]:
              - cell "A8DCo 010Z" [ref=f5e198]
              - cell "0.00" [ref=f5e200]
              - cell [ref=f5e202]:
                - button "View" [ref=f5e204] [cursor=pointer]
            - row [ref=f5e206]:
              - cell "123445 444444" [ref=f5e207]
              - cell "0.00" [ref=f5e209]
              - cell [ref=f5e211]:
                - button "View" [ref=f5e213] [cursor=pointer]
            - row [ref=f5e215]:
              - cell "99N75 5TlV" [ref=f5e216]
              - cell "0.00" [ref=f5e218]
              - cell [ref=f5e220]:
                - button "View" [ref=f5e222] [cursor=pointer]
            - row [ref=f5e224]:
              - cell "yedghjb1 90jsnd" [ref=f5e225]
              - cell "0.00" [ref=f5e227]
              - cell [ref=f5e229]:
                - button "View" [ref=f5e231] [cursor=pointer]
            - row [ref=f5e233]:
              - cell "Ranga Akunuri" [ref=f5e234]
              - cell "0.00" [ref=f5e236]
              - cell [ref=f5e238]:
                - button "View" [ref=f5e240] [cursor=pointer]
            - row [ref=f5e242]:
              - cell "Timothy Amiano" [ref=f5e243]
              - cell "0.00" [ref=f5e245]
              - cell [ref=f5e247]:
                - button "View" [ref=f5e249] [cursor=pointer]
            - row [ref=f5e251]:
              - cell "Peter Anderson" [ref=f5e252]
              - cell "0.00" [ref=f5e254]
              - cell [ref=f5e256]:
                - button "View" [ref=f5e258] [cursor=pointer]
            - row [ref=f5e260]:
              - cell "Ravi B" [ref=f5e261]
              - cell "0.00" [ref=f5e263]
              - cell [ref=f5e265]:
                - button "View" [ref=f5e267] [cursor=pointer]
            - row [ref=f5e269]:
              - cell "Thomas Benny" [ref=f5e270]
              - cell "0.00" [ref=f5e272]
              - cell [ref=f5e274]:
                - button "View" [ref=f5e276] [cursor=pointer]
            - row [ref=f5e278]:
              - cell "Amelia Brown" [ref=f5e279]
              - cell "0.00" [ref=f5e281]
              - cell [ref=f5e283]:
                - button "View" [ref=f5e285] [cursor=pointer]
            - row [ref=f5e287]:
              - cell "James Butler" [ref=f5e288]
              - cell "0.00" [ref=f5e290]
              - cell [ref=f5e292]:
                - button "View" [ref=f5e294] [cursor=pointer]
            - row [ref=f5e296]:
              - cell "Charles Carter" [ref=f5e297]
              - cell "0.00" [ref=f5e299]
              - cell [ref=f5e301]:
                - button "View" [ref=f5e303] [cursor=pointer]
            - row [ref=f5e305]:
              - cell "Rahul Das" [ref=f5e306]
              - cell "0.00" [ref=f5e308]
              - cell [ref=f5e310]:
                - button "View" [ref=f5e312] [cursor=pointer]
            - row [ref=f5e314]:
              - cell "Rahul Das" [ref=f5e315]
              - cell "0.00" [ref=f5e317]
              - cell [ref=f5e319]:
                - button "View" [ref=f5e321] [cursor=pointer]
            - row [ref=f5e323]:
              - cell "Rahul Das" [ref=f5e324]
              - cell "0.00" [ref=f5e326]
              - cell [ref=f5e328]:
                - button "View" [ref=f5e330] [cursor=pointer]
            - row [ref=f5e332]:
              - cell "Rahul Das" [ref=f5e333]
              - cell "0.00" [ref=f5e335]
              - cell [ref=f5e337]:
                - button "View" [ref=f5e339] [cursor=pointer]
            - row [ref=f5e341]:
              - cell "Rahul Das" [ref=f5e342]
              - cell "0.00" [ref=f5e344]
              - cell [ref=f5e346]:
                - button "View" [ref=f5e348] [cursor=pointer]
            - row [ref=f5e350]:
              - cell "savina dulvin" [ref=f5e351]
              - cell "0.00" [ref=f5e353]
              - cell [ref=f5e355]:
                - button "View" [ref=f5e357] [cursor=pointer]
            - row [ref=f5e359]:
              - cell "savina dulvin" [ref=f5e360]
              - cell "0.00" [ref=f5e362]
              - cell [ref=f5e364]:
                - button "View" [ref=f5e366] [cursor=pointer]
            - row [ref=f5e368]:
              - cell "savina dulvin" [ref=f5e369]
              - cell "0.00" [ref=f5e371]
              - cell [ref=f5e373]:
                - button "View" [ref=f5e375] [cursor=pointer]
            - row [ref=f5e377]:
              - cell "Test1787199028327 Employee1787199028327" [ref=f5e378]
              - cell "0.00" [ref=f5e380]
              - cell [ref=f5e382]:
                - button "View" [ref=f5e384] [cursor=pointer]
            - row [ref=f5e386]:
              - cell "Test20260820 Employee20260820" [ref=f5e387]
              - cell "0.00" [ref=f5e389]
              - cell [ref=f5e391]:
                - button "View" [ref=f5e393] [cursor=pointer]
            - row [ref=f5e395]:
              - cell "Joseph Evans" [ref=f5e396]
              - cell "0.00" [ref=f5e398]
              - cell [ref=f5e400]:
                - button "View" [ref=f5e402] [cursor=pointer]
            - row [ref=f5e404]:
              - cell "savi g" [ref=f5e405]
              - cell "0.00" [ref=f5e407]
              - cell [ref=f5e409]:
                - button "View" [ref=f5e411] [cursor=pointer]
            - row [ref=f5e413]:
              - cell "Radha Gupta" [ref=f5e414]
              - cell "0.00" [ref=f5e416]
              - cell [ref=f5e418]:
                - button "View" [ref=f5e420] [cursor=pointer]
            - row [ref=f5e422]:
              - cell "Russel Hamilton" [ref=f5e423]
              - cell "0.00" [ref=f5e425]
              - cell [ref=f5e427]:
                - button "View" [ref=f5e429] [cursor=pointer]
            - row [ref=f5e431]:
              - cell "Rebecca Harmony" [ref=f5e432]
              - cell "0.00" [ref=f5e434]
              - cell [ref=f5e436]:
                - button "View" [ref=f5e438] [cursor=pointer]
            - row [ref=f5e440]:
              - cell "bmrtahvwhibmrtahvwhi hbfqkhjfqbhbfqkhjfqb" [ref=f5e441]
              - cell "0.00" [ref=f5e443]
              - cell [ref=f5e445]:
                - button "View" [ref=f5e447] [cursor=pointer]
            - row [ref=f5e449]:
              - cell "Sagar hgfkag" [ref=f5e450]
              - cell "0.00" [ref=f5e452]
              - cell [ref=f5e454]:
                - button "View" [ref=f5e456] [cursor=pointer]
            - row [ref=f5e458]:
              - cell "hh hh" [ref=f5e459]
              - cell "0.00" [ref=f5e461]
              - cell [ref=f5e463]:
                - button "View" [ref=f5e465] [cursor=pointer]
            - row [ref=f5e467]:
              - cell "uehwadquzwuehwadquzw hzzdyzwxmwhzzdyzwxmw" [ref=f5e468]
              - cell "0.00" [ref=f5e470]
              - cell [ref=f5e472]:
                - button "View" [ref=f5e474] [cursor=pointer]
            - row [ref=f5e476]:
              - cell "dhbrukkuzldhbrukkuzl ibuvlwtfsfibuvlwtfsf" [ref=f5e477]
              - cell "0.00" [ref=f5e479]
              - cell [ref=f5e481]:
                - button "View" [ref=f5e483] [cursor=pointer]
            - row [ref=f5e485]:
              - cell "Emily Jones" [ref=f5e486]
              - cell "0.00" [ref=f5e488]
              - cell [ref=f5e490]:
                - button "View" [ref=f5e492] [cursor=pointer]
            - row [ref=f5e494]:
              - cell "Virat Kohli" [ref=f5e495]
              - cell "0.00" [ref=f5e497]
              - cell [ref=f5e499]:
                - button "View" [ref=f5e501] [cursor=pointer]
            - row [ref=f5e503]:
              - cell "Tristan L" [ref=f5e504]
              - cell "0.00" [ref=f5e506]
              - cell [ref=f5e508]:
                - button "View" [ref=f5e510] [cursor=pointer]
            - row [ref=f5e512]:
              - cell "sree latha" [ref=f5e513]
              - cell "0.00" [ref=f5e515]
              - cell [ref=f5e517]:
                - button "View" [ref=f5e519] [cursor=pointer]
            - row [ref=f5e521]:
              - cell "Qwerty LName" [ref=f5e522]
              - cell "0.00" [ref=f5e524]
              - cell [ref=f5e526]:
                - button "View" [ref=f5e528] [cursor=pointer]
            - row [ref=f5e530]:
              - cell "FName LName" [ref=f5e531]
              - cell "0.00" [ref=f5e533]
              - cell [ref=f5e535]:
                - button "View" [ref=f5e537] [cursor=pointer]
            - row [ref=f5e539]:
              - cell "rkbqaoxdhzrkbqaoxdhz lszuvmchnilszuvmchni" [ref=f5e540]
              - cell "0.00" [ref=f5e542]
              - cell [ref=f5e544]:
                - button "View" [ref=f5e546] [cursor=pointer]
            - row [ref=f5e548]:
              - cell "ftndlm ltdyyf" [ref=f5e549]
              - cell "0.00" [ref=f5e551]
              - cell [ref=f5e553]:
                - button "View" [ref=f5e555] [cursor=pointer]
            - row [ref=f5e557]:
              - cell "ftioiu ltpugr" [ref=f5e558]
              - cell "0.00" [ref=f5e560]
              - cell [ref=f5e562]:
                - button "View" [ref=f5e564] [cursor=pointer]
            - row [ref=f5e566]:
              - cell "ftioiu ltpugr" [ref=f5e567]
              - cell "0.00" [ref=f5e569]
              - cell [ref=f5e571]:
                - button "View" [ref=f5e573] [cursor=pointer]
            - row [ref=f5e575]:
              - cell "ftioiu ltpugr" [ref=f5e576]
              - cell "0.00" [ref=f5e578]
              - cell [ref=f5e580]:
                - button "View" [ref=f5e582] [cursor=pointer]
            - row [ref=f5e584]:
              - cell "ftioiu ltpugr" [ref=f5e585]
              - cell "0.00" [ref=f5e587]
              - cell [ref=f5e589]:
                - button "View" [ref=f5e591] [cursor=pointer]
            - row [ref=f5e593]:
              - cell "ftpjte ltpzkj" [ref=f5e594]
              - cell "0.00" [ref=f5e596]
              - cell [ref=f5e598]:
                - button "View" [ref=f5e600] [cursor=pointer]
            - row [ref=f5e602]:
              - cell "fthyfv ltrhtm" [ref=f5e603]
              - cell "0.00" [ref=f5e605]
              - cell [ref=f5e607]:
                - button "View" [ref=f5e609] [cursor=pointer]
            - row [ref=f5e611]:
              - cell "ftdkux ltsxgy" [ref=f5e612]
              - cell "0.00" [ref=f5e614]
              - cell [ref=f5e616]:
                - button "View" [ref=f5e618] [cursor=pointer]
            - row [ref=f5e620]:
              - cell "fthnvn ltwrrt" [ref=f5e621]
              - cell "0.00" [ref=f5e623]
              - cell [ref=f5e625]:
                - button "View" [ref=f5e627] [cursor=pointer]
            - row [ref=f5e629]:
              - cell "fthnvn ltwrrt" [ref=f5e630]
              - cell "0.00" [ref=f5e632]
              - cell [ref=f5e634]:
                - button "View" [ref=f5e636] [cursor=pointer]
            - row [ref=f5e638]:
              - cell "ftyseo ltzbbp" [ref=f5e639]
              - cell "0.00" [ref=f5e641]
              - cell [ref=f5e643]:
                - button "View" [ref=f5e645] [cursor=pointer]
        - navigation "Pagination Navigation" [ref=f5e647]:
          - list [ref=f5e648]:
            - listitem [ref=f5e649]:
              - button "1" [ref=f5e650] [cursor=pointer]
            - listitem [ref=f5e651]:
              - button "2" [ref=f5e652] [cursor=pointer]
            - listitem [ref=f5e653]:
              - button "3" [ref=f5e654] [cursor=pointer]
            - listitem [ref=f5e655]:
              - button "" [ref=f5e656] [cursor=pointer]
    - generic [ref=f5e658]:
      - paragraph [ref=f5e659]: OrangeHRM OS 5.9
      - paragraph [ref=f5e660]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e661] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  252 |         ).toBeVisible();
  253 | 
  254 |         await expect(
  255 |           timePage.editTimesheetButton
  256 |         ).toBeVisible();
  257 |       }
  258 |     );
  259 | 
  260 |     test( 'TC_TIME_171 - Admin should navigate to Employee Attendance Records @smoke @navigation @attendance @regression',
  261 |       async ({
  262 |         page,
  263 |         navigationPage,
  264 |         timePage,
  265 |       }) => {
  266 |         const data =
  267 |           timeData.TC_TIME_171;
  268 | 
  269 |         await navigationPage.gotoTime();
  270 | 
  271 |         await timePage
  272 |           .gotoEmployeeAttendanceRecords();
  273 | 
  274 |         await expect(page).toHaveURL(
  275 |           new RegExp(
  276 |             `${data.expectedUrlPath}$`
  277 |           )
  278 |         );
  279 | 
  280 |         await expect(
  281 |           timePage.attendanceHeading
  282 |         ).toHaveText(data.pageHeading);
  283 | 
  284 |         await expect(
  285 |           timePage.attendanceEmployeeInput
  286 |         ).toBeVisible();
  287 | 
  288 |         await expect(
  289 |           timePage.attendanceDateInput
  290 |         ).toBeVisible();
  291 | 
  292 |         await expect(
  293 |           timePage.attendanceViewButton
  294 |         ).toBeVisible();
  295 |       }
  296 |     );
  297 | 
  298 |     test('TC_TIME_172 - Admin should navigate to the Project Reports page @smoke @navigation @report @regression',
  299 |       async ({
  300 |         page,
  301 |         navigationPage,
  302 |         timePage,
  303 |       }) => {
  304 |         const data =
  305 |           timeData.TC_TIME_172;
  306 | 
  307 |         await navigationPage.gotoTime();
  308 | 
  309 |         await timePage.gotoProjectReports();
  310 | 
  311 |         await expect(page).toHaveURL(
  312 |           new RegExp(
  313 |             `${data.expectedUrlPath}$`
  314 |           )
  315 |         );
  316 | 
  317 |         await expect(
  318 |           timePage.projectReportHeading
  319 |         ).toHaveText(data.pageHeading);
  320 | 
  321 |         await expect(
  322 |           timePage.projectNameInput
  323 |         ).toBeVisible();
  324 | 
  325 |         await expect(
  326 |           timePage.projectFromDateInput
  327 |         ).toBeVisible();
  328 | 
  329 |         await expect(
  330 |           timePage.projectToDateInput
  331 |         ).toBeVisible();
  332 | 
  333 |         await expect(
  334 |           timePage.projectReportViewButton
  335 |         ).toBeVisible();
  336 |       }
  337 |     );
  338 | 
  339 |     test.only('TC_TIME_173 - Required validation should appear when viewing attendance without selecting an employee @negative @validation @attendance @regression',
  340 |   async ({ page, navigationPage, timePage }) => {
  341 |     // Read validation data from JSON.
  342 |       const data =timeData.TC_TIME_173;
  343 |         await navigationPage.gotoTime();
  344 |          // Navigate to Time → Attendance → Employee Records.
  345 |         await timePage.gotoEmployeeAttendanceRecords();
  346 |     // Verify Employee Attendance Records page is displayed.
  347 |     
  348 |     // Leave Employee Name empty.
  349 |       await timePage.attendanceEmployeeInput.fill('');
  350 |     // Keep the default attendance date.
  351 |     // Click View.
> 352 |      await timePage.attendanceViewButton.click();
      |                                          ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'View', exact: true }) resolved to 51 elements:
  353 |     // Verify Required validation appears
  354 |     // below Employee Name.
  355 |     await expect(timePage.attendanceEmployeeValidation).toContainText(data.requiredMessage);
  356 |     // Verify Employee Name remains empty.
  357 |      await expect(timePage.attendanceEmployeeInput).toHaveValue('');
  358 |     // Verify the user remains on the
  359 |     await expect(page).toHaveURL(data.expectedUrlPath);
  360 |     // Employee Attendance Records page.
  361 | 
  362 |     // Verify no attendance records are loaded.
  363 |   }
  364 | );
  365 | 
  366 | 
  367 |   }
  368 | );
```