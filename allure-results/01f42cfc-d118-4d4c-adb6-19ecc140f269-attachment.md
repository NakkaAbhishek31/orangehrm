# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> PIM Employee List >> TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression
- Location: tests\PIM\pim-employee-list.spec.ts:254:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('0627', { exact: true }) })
Expected: 1
Received: 0
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('0627', { exact: true }) })
    23 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=f7e3]:
  - generic:
    - complementary [ref=f7e4]:
      - navigation "Sidepanel" [ref=f7e5]:
        - generic [ref=f7e6]:
          - link [ref=f7e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f7e9]
          - text: 
        - generic [ref=f7e10]:
          - generic [ref=f7e11]:
            - generic [ref=f7e12]:
              - textbox "Search" [ref=f7e15]
              - button "" [ref=f7e16] [cursor=pointer]
            - separator [ref=f7e18]
          - list [ref=f7e19]:
            - listitem [ref=f7e20]:
              - link "Admin" [ref=f7e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f7e25]:
              - link "PIM" [ref=f7e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f7e41]:
              - link "Leave" [ref=f7e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f7e46]:
              - link "Time" [ref=f7e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f7e54]:
              - link "Recruitment" [ref=f7e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f7e62]:
              - link "My Info" [ref=f7e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f7e70]:
              - link "Performance" [ref=f7e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f7e80]:
              - link "Dashboard" [ref=f7e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f7e85]:
              - link "Directory" [ref=f7e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f7e90]:
              - link "Maintenance" [ref=f7e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f7e96]:
              - link "Claim" [ref=f7e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f7e105]:
              - link "Buzz" [ref=f7e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f7e110]:
      - generic [ref=f7e111]:
        - generic [ref=f7e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f7e114]
        - link [ref=f7e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f7e117] [cursor=pointer]
        - list [ref=f7e123]:
          - listitem [ref=f7e124]:
            - generic [ref=f7e125] [cursor=pointer]:
              - img "profile picture" [ref=f7e126]
              - paragraph [ref=f7e127]: Nguyễn Đức
              - generic [ref=f7e128]: 
      - navigation "Topbar Menu" [ref=f7e130]:
        - list [ref=f7e131]:
          - listitem [ref=f7e132] [cursor=pointer]:
            - generic [ref=f7e133]:
              - text: Configuration
              - generic [ref=f7e134]: 
          - listitem [ref=f7e135] [cursor=pointer]:
            - link "Employee List" [ref=f7e136]:
              - /url: "#"
          - listitem [ref=f7e137] [cursor=pointer]:
            - link "Add Employee" [ref=f7e138]:
              - /url: "#"
          - listitem [ref=f7e139] [cursor=pointer]:
            - link "Reports" [ref=f7e140]:
              - /url: "#"
          - button "" [ref=f7e142] [cursor=pointer]
  - generic [ref=f7e144]:
    - generic [ref=f7e146]:
      - generic [ref=f7e147]:
        - generic [ref=f7e148]:
          - heading "Employee Information" [level=5] [ref=f7e150]
          - button "" [ref=f7e153] [cursor=pointer]
        - separator [ref=f7e155]
        - generic [ref=f7e157]:
          - generic [ref=f7e159]:
            - generic [ref=f7e161]:
              - generic [ref=f7e162]: Employee Name
              - textbox "Type for hints..." [ref=f7e167]
            - generic [ref=f7e169]:
              - generic [ref=f7e170]: Employee Id
              - textbox [ref=f7e173]
            - generic [ref=f7e175]:
              - generic [ref=f7e176]: Employment Status
              - generic [ref=f7e180] [cursor=pointer]:
                - generic [ref=f7e181]: "-- Select --"
                - generic [ref=f7e182]: 
            - generic [ref=f7e185]:
              - generic [ref=f7e186]: Include
              - generic [ref=f7e190] [cursor=pointer]:
                - generic [ref=f7e191]: Current Employees Only
                - generic [ref=f7e192]: 
            - generic [ref=f7e195]:
              - generic [ref=f7e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f7e201]
            - generic [ref=f7e203]:
              - generic [ref=f7e204]: Job Title
              - generic [ref=f7e208] [cursor=pointer]:
                - generic [ref=f7e209]: "-- Select --"
                - generic [ref=f7e210]: 
            - generic [ref=f7e213]:
              - generic [ref=f7e214]: Sub Unit
              - generic [ref=f7e218] [cursor=pointer]:
                - generic [ref=f7e219]: "-- Select --"
                - generic [ref=f7e220]: 
          - separator [ref=f7e222]
          - generic [ref=f7e223]:
            - button "Reset" [ref=f7e224] [cursor=pointer]
            - button "Search" [ref=f7e225] [cursor=pointer]
      - generic [ref=f7e226]:
        - button " Add" [ref=f7e228] [cursor=pointer]:
          - generic [ref=f7e229]: 
          - text: Add
        - generic [ref=f7e230]:
          - separator [ref=f7e231]
          - generic [ref=f7e232]: (240) Records Found
        - table [ref=f7e235]:
          - rowgroup [ref=f7e236]:
            - row [ref=f7e237]:
              - columnheader "" [ref=f7e238]:
                - generic [ref=f7e240] [cursor=pointer]:
                  - checkbox "" [ref=f7e241]
                  - generic [ref=f7e242]: 
              - columnheader "Id " [ref=f7e244]:
                - text: Id
                - generic [ref=f7e245]:
                  - generic [ref=f7e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f7e247]:
                - text: First (& Middle) Name
                - generic [ref=f7e248]:
                  - generic [ref=f7e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f7e250]:
                - text: Last Name
                - generic [ref=f7e251]:
                  - generic [ref=f7e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f7e253]:
                - text: Job Title
                - generic [ref=f7e254]:
                  - generic [ref=f7e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f7e256]:
                - text: Employment Status
                - generic [ref=f7e257]:
                  - generic [ref=f7e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f7e259]:
                - text: Sub Unit
                - generic [ref=f7e260]:
                  - generic [ref=f7e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f7e262]:
                - text: Supervisor
                - generic [ref=f7e263]:
                  - generic [ref=f7e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f7e265]
          - rowgroup [ref=f7e266]:
            - row [ref=f7e268] [cursor=pointer]:
              - cell "" [ref=f7e269]:
                - generic [ref=f7e272]:
                  - checkbox "" [ref=f7e273]
                  - generic [ref=f7e274]: 
              - cell "05137" [ref=f7e276]
              - cell "66 6" [ref=f7e278]
              - cell "6" [ref=f7e280]
              - cell [ref=f7e282]
              - cell [ref=f7e283]
              - cell [ref=f7e284]
              - cell [ref=f7e285]
              - cell [ref=f7e286]:
                - generic [ref=f7e287]:
                  - button "" [ref=f7e288]
                  - button "" [ref=f7e290]
            - row [ref=f7e293] [cursor=pointer]:
              - cell "" [ref=f7e294]:
                - generic [ref=f7e297]:
                  - checkbox "" [ref=f7e298]
                  - generic [ref=f7e299]: 
              - cell "dfa2ea3a" [ref=f7e301]
              - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" [ref=f7e303]
              - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" [ref=f7e305]
              - cell [ref=f7e307]
              - cell [ref=f7e308]
              - cell [ref=f7e309]
              - cell [ref=f7e310]
              - cell [ref=f7e311]:
                - generic [ref=f7e312]:
                  - button "" [ref=f7e313]
                  - button "" [ref=f7e315]
            - row [ref=f7e318] [cursor=pointer]:
              - cell "" [ref=f7e319]:
                - generic [ref=f7e322]:
                  - checkbox "" [ref=f7e323]
                  - generic [ref=f7e324]: 
              - cell "0998" [ref=f7e326]
              - cell "ABC" [ref=f7e328]
              - cell "Abhinay" [ref=f7e330]
              - cell "Account Assistant" [ref=f7e332]
              - cell "Full-Time Permanent" [ref=f7e334]
              - cell "Engineering" [ref=f7e336]
              - cell [ref=f7e338]
              - cell [ref=f7e339]:
                - generic [ref=f7e340]:
                  - button "" [ref=f7e341]
                  - button "" [ref=f7e343]
            - row [ref=f7e346] [cursor=pointer]:
              - cell "" [ref=f7e347]:
                - generic [ref=f7e350]:
                  - checkbox "" [ref=f7e351]
                  - generic [ref=f7e352]: 
              - cell "05989908" [ref=f7e354]
              - cell "abcdefgh ijklm" [ref=f7e356]
              - cell "nopqrst" [ref=f7e358]
              - cell [ref=f7e360]
              - cell [ref=f7e361]
              - cell [ref=f7e362]
              - cell [ref=f7e363]
              - cell [ref=f7e364]:
                - generic [ref=f7e365]:
                  - button "" [ref=f7e366]
                  - button "" [ref=f7e368]
            - row [ref=f7e371] [cursor=pointer]:
              - cell "" [ref=f7e372]:
                - generic [ref=f7e375]:
                  - checkbox "" [ref=f7e376]
                  - generic [ref=f7e377]: 
              - cell "05989909" [ref=f7e379]
              - cell "abcdefgh ijklm" [ref=f7e381]
              - cell "nopqrst" [ref=f7e383]
              - cell [ref=f7e385]
              - cell [ref=f7e386]
              - cell [ref=f7e387]
              - cell [ref=f7e388]
              - cell [ref=f7e389]:
                - generic [ref=f7e390]:
                  - button "" [ref=f7e391]
                  - button "" [ref=f7e393]
            - row [ref=f7e396] [cursor=pointer]:
              - cell "" [ref=f7e397]:
                - generic [ref=f7e400]:
                  - checkbox "" [ref=f7e401]
                  - generic [ref=f7e402]: 
              - cell "0604" [ref=f7e404]
              - cell "Abhi" [ref=f7e406]
              - cell "singh" [ref=f7e408]
              - cell [ref=f7e410]
              - cell [ref=f7e411]
              - cell [ref=f7e412]
              - cell [ref=f7e413]
              - cell [ref=f7e414]:
                - generic [ref=f7e415]:
                  - button "" [ref=f7e416]
                  - button "" [ref=f7e418]
            - row [ref=f7e421] [cursor=pointer]:
              - cell "" [ref=f7e422]:
                - generic [ref=f7e425]:
                  - checkbox "" [ref=f7e426]
                  - generic [ref=f7e427]: 
              - cell "0999" [ref=f7e429]
              - cell "Abhinay" [ref=f7e431]
              - cell "ABC" [ref=f7e433]
              - cell "Payroll Administrator" [ref=f7e435]
              - cell "Part-Time Internship" [ref=f7e437]
              - cell "Sales & Marketing" [ref=f7e439]
              - cell [ref=f7e441]
              - cell [ref=f7e442]:
                - generic [ref=f7e443]:
                  - button "" [ref=f7e444]
                  - button "" [ref=f7e446]
            - row [ref=f7e449] [cursor=pointer]:
              - cell "" [ref=f7e450]:
                - generic [ref=f7e453]:
                  - checkbox "" [ref=f7e454]
                  - generic [ref=f7e455]: 
              - cell "144242" [ref=f7e457]
              - cell "akanksha reddy" [ref=f7e459]
              - cell "bondalakunta" [ref=f7e461]
              - cell [ref=f7e463]
              - cell [ref=f7e464]
              - cell [ref=f7e465]
              - cell [ref=f7e466]
              - cell [ref=f7e467]:
                - generic [ref=f7e468]:
                  - button "" [ref=f7e469]
                  - button "" [ref=f7e471]
            - row [ref=f7e474] [cursor=pointer]:
              - cell "" [ref=f7e475]:
                - generic [ref=f7e478]:
                  - checkbox "" [ref=f7e479]
                  - generic [ref=f7e480]: 
              - cell "0445" [ref=f7e482]
              - cell "aksh1786451195039" [ref=f7e484]
              - cell "patil1786451195039" [ref=f7e486]
              - cell "Finance Manager" [ref=f7e488]
              - cell "Full-Time Permanent" [ref=f7e490]
              - cell "Administration" [ref=f7e492]
              - cell [ref=f7e494]
              - cell [ref=f7e495]:
                - generic [ref=f7e496]:
                  - button "" [ref=f7e497]
                  - button "" [ref=f7e499]
            - row [ref=f7e502] [cursor=pointer]:
              - cell "" [ref=f7e503]:
                - generic [ref=f7e506]:
                  - checkbox "" [ref=f7e507]
                  - generic [ref=f7e508]: 
              - cell "01715" [ref=f7e510]
              - cell "Amelia" [ref=f7e512]
              - cell "Brown" [ref=f7e514]
              - cell "Customer Success Manager" [ref=f7e516]
              - cell "Full-Time Permanent" [ref=f7e518]
              - cell "Development" [ref=f7e520]
              - cell [ref=f7e522]
              - cell [ref=f7e523]:
                - generic [ref=f7e524]:
                  - button "" [ref=f7e525]
                  - button "" [ref=f7e527]
            - row [ref=f7e530] [cursor=pointer]:
              - cell "" [ref=f7e531]:
                - generic [ref=f7e534]:
                  - checkbox "" [ref=f7e535]
                  - generic [ref=f7e536]: 
              - cell "0372" [ref=f7e538]
              - cell "AMIT" [ref=f7e540]
              - cell "BURLI" [ref=f7e542]
              - cell [ref=f7e544]
              - cell [ref=f7e545]
              - cell "Human Resources" [ref=f7e546]
              - cell [ref=f7e548]
              - cell [ref=f7e549]:
                - generic [ref=f7e550]:
                  - button "" [ref=f7e551]
                  - button "" [ref=f7e553]
            - row [ref=f7e556] [cursor=pointer]:
              - cell "" [ref=f7e557]:
                - generic [ref=f7e560]:
                  - checkbox "" [ref=f7e561]
                  - generic [ref=f7e562]: 
              - cell "229" [ref=f7e564]
              - cell "aniket Ashok" [ref=f7e566]
              - cell "patil" [ref=f7e568]
              - cell [ref=f7e570]
              - cell [ref=f7e571]
              - cell [ref=f7e572]
              - cell [ref=f7e573]
              - cell [ref=f7e574]:
                - generic [ref=f7e575]:
                  - button "" [ref=f7e576]
                  - button "" [ref=f7e578]
            - row [ref=f7e581] [cursor=pointer]:
              - cell "" [ref=f7e582]:
                - generic [ref=f7e585]:
                  - checkbox "" [ref=f7e586]
                  - generic [ref=f7e587]: 
              - cell "0360" [ref=f7e589]
              - cell "aniket t" [ref=f7e591]
              - cell "t" [ref=f7e593]
              - cell [ref=f7e595]
              - cell [ref=f7e596]
              - cell "Development" [ref=f7e597]
              - cell [ref=f7e599]
              - cell [ref=f7e600]:
                - generic [ref=f7e601]:
                  - button "" [ref=f7e602]
                  - button "" [ref=f7e604]
            - row [ref=f7e607] [cursor=pointer]:
              - cell "" [ref=f7e608]:
                - generic [ref=f7e611]:
                  - checkbox "" [ref=f7e612]
                  - generic [ref=f7e613]: 
              - cell "524" [ref=f7e615]
              - cell "aniket Ashok" [ref=f7e617]
              - cell "patil" [ref=f7e619]
              - cell [ref=f7e621]
              - cell [ref=f7e622]
              - cell "Administration" [ref=f7e623]
              - cell [ref=f7e625]
              - cell [ref=f7e626]:
                - generic [ref=f7e627]:
                  - button "" [ref=f7e628]
                  - button "" [ref=f7e630]
            - row [ref=f7e633] [cursor=pointer]:
              - cell "" [ref=f7e634]:
                - generic [ref=f7e637]:
                  - checkbox "" [ref=f7e638]
                  - generic [ref=f7e639]: 
              - cell "0477" [ref=f7e641]
              - cell "Ash M" [ref=f7e643]
              - cell "Dup" [ref=f7e645]
              - cell [ref=f7e647]
              - cell [ref=f7e648]
              - cell "Quality Assurance" [ref=f7e649]
              - cell [ref=f7e651]
              - cell [ref=f7e652]:
                - generic [ref=f7e653]:
                  - button "" [ref=f7e654]
                  - button "" [ref=f7e656]
            - row [ref=f7e659] [cursor=pointer]:
              - cell "" [ref=f7e660]:
                - generic [ref=f7e663]:
                  - checkbox "" [ref=f7e664]
                  - generic [ref=f7e665]: 
              - cell "0451" [ref=f7e667]
              - cell "Ash M" [ref=f7e669]
              - cell "Dup" [ref=f7e671]
              - cell [ref=f7e673]
              - cell [ref=f7e674]
              - cell [ref=f7e675]
              - cell [ref=f7e676]
              - cell [ref=f7e677]:
                - generic [ref=f7e678]:
                  - button "" [ref=f7e679]
                  - button "" [ref=f7e681]
            - row [ref=f7e684] [cursor=pointer]:
              - cell "" [ref=f7e685]:
                - generic [ref=f7e688]:
                  - checkbox "" [ref=f7e689]
                  - generic [ref=f7e690]: 
              - cell "0476" [ref=f7e692]
              - cell "Ash M" [ref=f7e694]
              - cell "Dup" [ref=f7e696]
              - cell [ref=f7e698]
              - cell [ref=f7e699]
              - cell [ref=f7e700]
              - cell [ref=f7e701]
              - cell [ref=f7e702]:
                - generic [ref=f7e703]:
                  - button "" [ref=f7e704]
                  - button "" [ref=f7e706]
            - row [ref=f7e709] [cursor=pointer]:
              - cell "" [ref=f7e710]:
                - generic [ref=f7e713]:
                  - checkbox "" [ref=f7e714]
                  - generic [ref=f7e715]: 
              - cell "0367" [ref=f7e717]
              - cell "Ash J" [ref=f7e719]
              - cell "Tyson" [ref=f7e721]
              - cell [ref=f7e723]
              - cell [ref=f7e724]
              - cell [ref=f7e725]
              - cell [ref=f7e726]
              - cell [ref=f7e727]:
                - generic [ref=f7e728]:
                  - button "" [ref=f7e729]
                  - button "" [ref=f7e731]
            - row [ref=f7e734] [cursor=pointer]:
              - cell "" [ref=f7e735]:
                - generic [ref=f7e738]:
                  - checkbox "" [ref=f7e739]
                  - generic [ref=f7e740]: 
              - cell "0454" [ref=f7e742]
              - cell "Ash M" [ref=f7e744]
              - cell "Dup" [ref=f7e746]
              - cell [ref=f7e748]
              - cell [ref=f7e749]
              - cell [ref=f7e750]
              - cell [ref=f7e751]
              - cell [ref=f7e752]:
                - generic [ref=f7e753]:
                  - button "" [ref=f7e754]
                  - button "" [ref=f7e756]
            - row [ref=f7e759] [cursor=pointer]:
              - cell "" [ref=f7e760]:
                - generic [ref=f7e763]:
                  - checkbox "" [ref=f7e764]
                  - generic [ref=f7e765]: 
              - cell "0470" [ref=f7e767]
              - cell "Auto" [ref=f7e769]
              - cell "Employee" [ref=f7e771]
              - cell [ref=f7e773]
              - cell [ref=f7e774]
              - cell [ref=f7e775]
              - cell [ref=f7e776]
              - cell [ref=f7e777]:
                - generic [ref=f7e778]:
                  - button "" [ref=f7e779]
                  - button "" [ref=f7e781]
            - row [ref=f7e784] [cursor=pointer]:
              - cell "" [ref=f7e785]:
                - generic [ref=f7e788]:
                  - checkbox "" [ref=f7e789]
                  - generic [ref=f7e790]: 
              - cell "0461" [ref=f7e792]
              - cell "Auto" [ref=f7e794]
              - cell "Member" [ref=f7e796]
              - cell [ref=f7e798]
              - cell [ref=f7e799]
              - cell [ref=f7e800]
              - cell [ref=f7e801]
              - cell [ref=f7e802]:
                - generic [ref=f7e803]:
                  - button "" [ref=f7e804]
                  - button "" [ref=f7e806]
            - row [ref=f7e809] [cursor=pointer]:
              - cell "" [ref=f7e810]:
                - generic [ref=f7e813]:
                  - checkbox "" [ref=f7e814]
                  - generic [ref=f7e815]: 
              - cell "0440" [ref=f7e817]
              - cell "Auto" [ref=f7e819]
              - cell "Employee" [ref=f7e821]
              - cell [ref=f7e823]
              - cell [ref=f7e824]
              - cell [ref=f7e825]
              - cell [ref=f7e826]
              - cell [ref=f7e827]:
                - generic [ref=f7e828]:
                  - button "" [ref=f7e829]
                  - button "" [ref=f7e831]
            - row [ref=f7e834] [cursor=pointer]:
              - cell "" [ref=f7e835]:
                - generic [ref=f7e838]:
                  - checkbox "" [ref=f7e839]
                  - generic [ref=f7e840]: 
              - cell "0467" [ref=f7e842]
              - cell "Auto1786452007650 Test" [ref=f7e844]
              - cell "User" [ref=f7e846]
              - cell [ref=f7e848]
              - cell [ref=f7e849]
              - cell [ref=f7e850]
              - cell [ref=f7e851]
              - cell [ref=f7e852]:
                - generic [ref=f7e853]:
                  - button "" [ref=f7e854]
                  - button "" [ref=f7e856]
            - row [ref=f7e859] [cursor=pointer]:
              - cell "" [ref=f7e860]:
                - generic [ref=f7e863]:
                  - checkbox "" [ref=f7e864]
                  - generic [ref=f7e865]: 
              - cell "0468" [ref=f7e867]
              - cell "Auto1786452073703769 Test" [ref=f7e869]
              - cell "User" [ref=f7e871]
              - cell [ref=f7e873]
              - cell [ref=f7e874]
              - cell [ref=f7e875]
              - cell [ref=f7e876]
              - cell [ref=f7e877]:
                - generic [ref=f7e878]:
                  - button "" [ref=f7e879]
                  - button "" [ref=f7e881]
            - row [ref=f7e884] [cursor=pointer]:
              - cell "" [ref=f7e885]:
                - generic [ref=f7e888]:
                  - checkbox "" [ref=f7e889]
                  - generic [ref=f7e890]: 
              - cell "0471" [ref=f7e892]
              - cell "Auto1786452132919706 Test" [ref=f7e894]
              - cell "User" [ref=f7e896]
              - cell [ref=f7e898]
              - cell [ref=f7e899]
              - cell [ref=f7e900]
              - cell [ref=f7e901]
              - cell [ref=f7e902]:
                - generic [ref=f7e903]:
                  - button "" [ref=f7e904]
                  - button "" [ref=f7e906]
            - row [ref=f7e909] [cursor=pointer]:
              - cell "" [ref=f7e910]:
                - generic [ref=f7e913]:
                  - checkbox "" [ref=f7e914]
                  - generic [ref=f7e915]: 
              - cell "0473" [ref=f7e917]
              - cell "Auto178645217228429 Test" [ref=f7e919]
              - cell "User" [ref=f7e921]
              - cell [ref=f7e923]
              - cell [ref=f7e924]
              - cell [ref=f7e925]
              - cell [ref=f7e926]
              - cell [ref=f7e927]:
                - generic [ref=f7e928]:
                  - button "" [ref=f7e929]
                  - button "" [ref=f7e931]
            - row [ref=f7e934] [cursor=pointer]:
              - cell "" [ref=f7e935]:
                - generic [ref=f7e938]:
                  - checkbox "" [ref=f7e939]
                  - generic [ref=f7e940]: 
              - cell "0481" [ref=f7e942]
              - cell "Auto1786452475162202 Test" [ref=f7e944]
              - cell "User" [ref=f7e946]
              - cell [ref=f7e948]
              - cell [ref=f7e949]
              - cell [ref=f7e950]
              - cell [ref=f7e951]
              - cell [ref=f7e952]:
                - generic [ref=f7e953]:
                  - button "" [ref=f7e954]
                  - button "" [ref=f7e956]
            - row [ref=f7e959] [cursor=pointer]:
              - cell "" [ref=f7e960]:
                - generic [ref=f7e963]:
                  - checkbox "" [ref=f7e964]
                  - generic [ref=f7e965]: 
              - cell "0483" [ref=f7e967]
              - cell "Auto1786452485051794 Test" [ref=f7e969]
              - cell "User" [ref=f7e971]
              - cell [ref=f7e973]
              - cell [ref=f7e974]
              - cell [ref=f7e975]
              - cell [ref=f7e976]
              - cell [ref=f7e977]:
                - generic [ref=f7e978]:
                  - button "" [ref=f7e979]
                  - button "" [ref=f7e981]
            - row [ref=f7e984] [cursor=pointer]:
              - cell "" [ref=f7e985]:
                - generic [ref=f7e988]:
                  - checkbox "" [ref=f7e989]
                  - generic [ref=f7e990]: 
              - cell "0485" [ref=f7e992]
              - cell "Auto1786452533177545 Test" [ref=f7e994]
              - cell "User" [ref=f7e996]
              - cell [ref=f7e998]
              - cell [ref=f7e999]
              - cell [ref=f7e1000]
              - cell [ref=f7e1001]
              - cell [ref=f7e1002]:
                - generic [ref=f7e1003]:
                  - button "" [ref=f7e1004]
                  - button "" [ref=f7e1006]
            - row [ref=f7e1009] [cursor=pointer]:
              - cell "" [ref=f7e1010]:
                - generic [ref=f7e1013]:
                  - checkbox "" [ref=f7e1014]
                  - generic [ref=f7e1015]: 
              - cell "0486" [ref=f7e1017]
              - cell "Auto1786452552165343 Test" [ref=f7e1019]
              - cell "User" [ref=f7e1021]
              - cell [ref=f7e1023]
              - cell [ref=f7e1024]
              - cell [ref=f7e1025]
              - cell [ref=f7e1026]
              - cell [ref=f7e1027]:
                - generic [ref=f7e1028]:
                  - button "" [ref=f7e1029]
                  - button "" [ref=f7e1031]
            - row [ref=f7e1034] [cursor=pointer]:
              - cell "" [ref=f7e1035]:
                - generic [ref=f7e1038]:
                  - checkbox "" [ref=f7e1039]
                  - generic [ref=f7e1040]: 
              - cell "0487" [ref=f7e1042]
              - cell "Auto1786452568494731 Test" [ref=f7e1044]
              - cell "User" [ref=f7e1046]
              - cell [ref=f7e1048]
              - cell [ref=f7e1049]
              - cell [ref=f7e1050]
              - cell [ref=f7e1051]
              - cell [ref=f7e1052]:
                - generic [ref=f7e1053]:
                  - button "" [ref=f7e1054]
                  - button "" [ref=f7e1056]
            - row [ref=f7e1059] [cursor=pointer]:
              - cell "" [ref=f7e1060]:
                - generic [ref=f7e1063]:
                  - checkbox "" [ref=f7e1064]
                  - generic [ref=f7e1065]: 
              - cell "0488" [ref=f7e1067]
              - cell "Auto178645258358484 Test" [ref=f7e1069]
              - cell "User" [ref=f7e1071]
              - cell [ref=f7e1073]
              - cell [ref=f7e1074]
              - cell [ref=f7e1075]
              - cell [ref=f7e1076]
              - cell [ref=f7e1077]:
                - generic [ref=f7e1078]:
                  - button "" [ref=f7e1079]
                  - button "" [ref=f7e1081]
            - row [ref=f7e1084] [cursor=pointer]:
              - cell "" [ref=f7e1085]:
                - generic [ref=f7e1088]:
                  - checkbox "" [ref=f7e1089]
                  - generic [ref=f7e1090]: 
              - cell "0489" [ref=f7e1092]
              - cell "Auto1786452679577983 Test" [ref=f7e1094]
              - cell "User" [ref=f7e1096]
              - cell [ref=f7e1098]
              - cell [ref=f7e1099]
              - cell [ref=f7e1100]
              - cell [ref=f7e1101]
              - cell [ref=f7e1102]:
                - generic [ref=f7e1103]:
                  - button "" [ref=f7e1104]
                  - button "" [ref=f7e1106]
            - row [ref=f7e1109] [cursor=pointer]:
              - cell "" [ref=f7e1110]:
                - generic [ref=f7e1113]:
                  - checkbox "" [ref=f7e1114]
                  - generic [ref=f7e1115]: 
              - cell "0492" [ref=f7e1117]
              - cell "Auto1786452711085105 Test" [ref=f7e1119]
              - cell "User" [ref=f7e1121]
              - cell [ref=f7e1123]
              - cell [ref=f7e1124]
              - cell [ref=f7e1125]
              - cell [ref=f7e1126]
              - cell [ref=f7e1127]:
                - generic [ref=f7e1128]:
                  - button "" [ref=f7e1129]
                  - button "" [ref=f7e1131]
            - row [ref=f7e1134] [cursor=pointer]:
              - cell "" [ref=f7e1135]:
                - generic [ref=f7e1138]:
                  - checkbox "" [ref=f7e1139]
                  - generic [ref=f7e1140]: 
              - cell "0493" [ref=f7e1142]
              - cell "Auto178645273895678 Test" [ref=f7e1144]
              - cell "User" [ref=f7e1146]
              - cell [ref=f7e1148]
              - cell [ref=f7e1149]
              - cell [ref=f7e1150]
              - cell [ref=f7e1151]
              - cell [ref=f7e1152]:
                - generic [ref=f7e1153]:
                  - button "" [ref=f7e1154]
                  - button "" [ref=f7e1156]
            - row [ref=f7e1159] [cursor=pointer]:
              - cell "" [ref=f7e1160]:
                - generic [ref=f7e1163]:
                  - checkbox "" [ref=f7e1164]
                  - generic [ref=f7e1165]: 
              - cell "0499" [ref=f7e1167]
              - cell "Auto178645294208846 Test" [ref=f7e1169]
              - cell "User" [ref=f7e1171]
              - cell [ref=f7e1173]
              - cell [ref=f7e1174]
              - cell [ref=f7e1175]
              - cell [ref=f7e1176]
              - cell [ref=f7e1177]:
                - generic [ref=f7e1178]:
                  - button "" [ref=f7e1179]
                  - button "" [ref=f7e1181]
            - row [ref=f7e1184] [cursor=pointer]:
              - cell "" [ref=f7e1185]:
                - generic [ref=f7e1188]:
                  - checkbox "" [ref=f7e1189]
                  - generic [ref=f7e1190]: 
              - cell "0501" [ref=f7e1192]
              - cell "Auto1786452964115742 Test" [ref=f7e1194]
              - cell "User" [ref=f7e1196]
              - cell [ref=f7e1198]
              - cell [ref=f7e1199]
              - cell [ref=f7e1200]
              - cell [ref=f7e1201]
              - cell [ref=f7e1202]:
                - generic [ref=f7e1203]:
                  - button "" [ref=f7e1204]
                  - button "" [ref=f7e1206]
            - row [ref=f7e1209] [cursor=pointer]:
              - cell "" [ref=f7e1210]:
                - generic [ref=f7e1213]:
                  - checkbox "" [ref=f7e1214]
                  - generic [ref=f7e1215]: 
              - cell "0504" [ref=f7e1217]
              - cell "Auto1786452994658914 Test" [ref=f7e1219]
              - cell "User" [ref=f7e1221]
              - cell [ref=f7e1223]
              - cell [ref=f7e1224]
              - cell [ref=f7e1225]
              - cell [ref=f7e1226]
              - cell [ref=f7e1227]:
                - generic [ref=f7e1228]:
                  - button "" [ref=f7e1229]
                  - button "" [ref=f7e1231]
            - row [ref=f7e1234] [cursor=pointer]:
              - cell "" [ref=f7e1235]:
                - generic [ref=f7e1238]:
                  - checkbox "" [ref=f7e1239]
                  - generic [ref=f7e1240]: 
              - cell "0507" [ref=f7e1242]
              - cell "Auto1786453048790771 Test" [ref=f7e1244]
              - cell "User" [ref=f7e1246]
              - cell [ref=f7e1248]
              - cell [ref=f7e1249]
              - cell [ref=f7e1250]
              - cell [ref=f7e1251]
              - cell [ref=f7e1252]:
                - generic [ref=f7e1253]:
                  - button "" [ref=f7e1254]
                  - button "" [ref=f7e1256]
            - row [ref=f7e1259] [cursor=pointer]:
              - cell "" [ref=f7e1260]:
                - generic [ref=f7e1263]:
                  - checkbox "" [ref=f7e1264]
                  - generic [ref=f7e1265]: 
              - cell "0519" [ref=f7e1267]
              - cell "Auto1786453350789413 Test" [ref=f7e1269]
              - cell "User" [ref=f7e1271]
              - cell [ref=f7e1273]
              - cell [ref=f7e1274]
              - cell [ref=f7e1275]
              - cell [ref=f7e1276]
              - cell [ref=f7e1277]:
                - generic [ref=f7e1278]:
                  - button "" [ref=f7e1279]
                  - button "" [ref=f7e1281]
            - row [ref=f7e1284] [cursor=pointer]:
              - cell "" [ref=f7e1285]:
                - generic [ref=f7e1288]:
                  - checkbox "" [ref=f7e1289]
                  - generic [ref=f7e1290]: 
              - cell "0522" [ref=f7e1292]
              - cell "Auto1786453397200280 Test" [ref=f7e1294]
              - cell "User" [ref=f7e1296]
              - cell [ref=f7e1298]
              - cell [ref=f7e1299]
              - cell [ref=f7e1300]
              - cell [ref=f7e1301]
              - cell [ref=f7e1302]:
                - generic [ref=f7e1303]:
                  - button "" [ref=f7e1304]
                  - button "" [ref=f7e1306]
            - row [ref=f7e1309] [cursor=pointer]:
              - cell "" [ref=f7e1310]:
                - generic [ref=f7e1313]:
                  - checkbox "" [ref=f7e1314]
                  - generic [ref=f7e1315]: 
              - cell "0611" [ref=f7e1317]
              - cell "Auto1786454858255773 Test" [ref=f7e1319]
              - cell "User" [ref=f7e1321]
              - cell [ref=f7e1323]
              - cell [ref=f7e1324]
              - cell [ref=f7e1325]
              - cell [ref=f7e1326]
              - cell [ref=f7e1327]:
                - generic [ref=f7e1328]:
                  - button "" [ref=f7e1329]
                  - button "" [ref=f7e1331]
            - row [ref=f7e1334] [cursor=pointer]:
              - cell "" [ref=f7e1335]:
                - generic [ref=f7e1338]:
                  - checkbox "" [ref=f7e1339]
                  - generic [ref=f7e1340]: 
              - cell "0612" [ref=f7e1342]
              - cell "Auto1786454874329394 UpdatedTest" [ref=f7e1344]
              - cell "UpdatedUser" [ref=f7e1346]
              - cell [ref=f7e1348]
              - cell [ref=f7e1349]
              - cell [ref=f7e1350]
              - cell [ref=f7e1351]
              - cell [ref=f7e1352]:
                - generic [ref=f7e1353]:
                  - button "" [ref=f7e1354]
                  - button "" [ref=f7e1356]
            - row [ref=f7e1359] [cursor=pointer]:
              - cell "" [ref=f7e1360]:
                - generic [ref=f7e1363]:
                  - checkbox "" [ref=f7e1364]
                  - generic [ref=f7e1365]: 
              - cell "0620" [ref=f7e1367]
              - cell "Auto1786455178972689 Test" [ref=f7e1369]
              - cell "User" [ref=f7e1371]
              - cell [ref=f7e1373]
              - cell [ref=f7e1374]
              - cell [ref=f7e1375]
              - cell [ref=f7e1376]
              - cell [ref=f7e1377]:
                - generic [ref=f7e1378]:
                  - button "" [ref=f7e1379]
                  - button "" [ref=f7e1381]
            - row [ref=f7e1384] [cursor=pointer]:
              - cell "" [ref=f7e1385]:
                - generic [ref=f7e1388]:
                  - checkbox "" [ref=f7e1389]
                  - generic [ref=f7e1390]: 
              - cell "0621" [ref=f7e1392]
              - cell "Auto178645522488835 Test" [ref=f7e1394]
              - cell "User" [ref=f7e1396]
              - cell [ref=f7e1398]
              - cell [ref=f7e1399]
              - cell [ref=f7e1400]
              - cell [ref=f7e1401]
              - cell [ref=f7e1402]:
                - generic [ref=f7e1403]:
                  - button "" [ref=f7e1404]
                  - button "" [ref=f7e1406]
            - row [ref=f7e1409] [cursor=pointer]:
              - cell "" [ref=f7e1410]:
                - generic [ref=f7e1413]:
                  - checkbox "" [ref=f7e1414]
                  - generic [ref=f7e1415]: 
              - cell "0625" [ref=f7e1417]
              - cell "Auto1786455344379921 Test" [ref=f7e1419]
              - cell "User" [ref=f7e1421]
              - cell [ref=f7e1423]
              - cell [ref=f7e1424]
              - cell [ref=f7e1425]
              - cell [ref=f7e1426]
              - cell [ref=f7e1427]:
                - generic [ref=f7e1428]:
                  - button "" [ref=f7e1429]
                  - button "" [ref=f7e1431]
            - row [ref=f7e1434] [cursor=pointer]:
              - cell "" [ref=f7e1435]:
                - generic [ref=f7e1438]:
                  - checkbox "" [ref=f7e1439]
                  - generic [ref=f7e1440]: 
              - cell "0495" [ref=f7e1442]
              - cell "AutoB1786452900477108 Test" [ref=f7e1444]
              - cell "User" [ref=f7e1446]
              - cell [ref=f7e1448]
              - cell [ref=f7e1449]
              - cell [ref=f7e1450]
              - cell [ref=f7e1451]
              - cell [ref=f7e1452]:
                - generic [ref=f7e1453]:
                  - button "" [ref=f7e1454]
                  - button "" [ref=f7e1456]
            - row [ref=f7e1459] [cursor=pointer]:
              - cell "" [ref=f7e1460]:
                - generic [ref=f7e1463]:
                  - checkbox "" [ref=f7e1464]
                  - generic [ref=f7e1465]: 
              - cell "0498" [ref=f7e1467]
              - cell "AutoB1786452936019378 Test" [ref=f7e1469]
              - cell "User" [ref=f7e1471]
              - cell [ref=f7e1473]
              - cell [ref=f7e1474]
              - cell [ref=f7e1475]
              - cell [ref=f7e1476]
              - cell [ref=f7e1477]:
                - generic [ref=f7e1478]:
                  - button "" [ref=f7e1479]
                  - button "" [ref=f7e1481]
            - row [ref=f7e1484] [cursor=pointer]:
              - cell "" [ref=f7e1485]:
                - generic [ref=f7e1488]:
                  - checkbox "" [ref=f7e1489]
                  - generic [ref=f7e1490]: 
              - cell "0613" [ref=f7e1492]
              - cell "Automation QA" [ref=f7e1494]
              - cell "Tester_1786454946250" [ref=f7e1496]
              - cell [ref=f7e1498]
              - cell [ref=f7e1499]
              - cell [ref=f7e1500]
              - cell [ref=f7e1501]
              - cell [ref=f7e1502]:
                - generic [ref=f7e1503]:
                  - button "" [ref=f7e1504]
                  - button "" [ref=f7e1506]
            - row [ref=f7e1509] [cursor=pointer]:
              - cell "" [ref=f7e1510]:
                - generic [ref=f7e1513]:
                  - checkbox "" [ref=f7e1514]
                  - generic [ref=f7e1515]: 
              - cell "0607" [ref=f7e1517]
              - cell "Automation QA" [ref=f7e1519]
              - cell "Tester_1786454762415" [ref=f7e1521]
              - cell [ref=f7e1523]
              - cell [ref=f7e1524]
              - cell [ref=f7e1525]
              - cell [ref=f7e1526]
              - cell [ref=f7e1527]:
                - generic [ref=f7e1528]:
                  - button "" [ref=f7e1529]
                  - button "" [ref=f7e1531]
        - navigation "Pagination Navigation" [ref=f7e1534]:
          - list [ref=f7e1535]:
            - listitem [ref=f7e1536]:
              - button "1" [ref=f7e1537] [cursor=pointer]
            - listitem [ref=f7e1538]:
              - button "2" [ref=f7e1539] [cursor=pointer]
            - listitem [ref=f7e1540]:
              - button "3" [ref=f7e1541] [cursor=pointer]
            - listitem [ref=f7e1542]:
              - button "4" [ref=f7e1543] [cursor=pointer]
            - listitem [ref=f7e1544]:
              - button "5" [ref=f7e1545] [cursor=pointer]
            - listitem [ref=f7e1546]:
              - button "" [ref=f7e1547] [cursor=pointer]
    - generic [ref=f7e1549]:
      - paragraph [ref=f7e1550]: OrangeHRM OS 5.9
      - paragraph [ref=f7e1551]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f7e1552] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  671 |   }
  672 | 
  673 |   async addEmployeeWithLoginDetails(
  674 |     details: EmployeeWithLoginDetails,
  675 |   ): Promise<string> {
  676 |     await this.fillAddEmployeeForm({
  677 |       firstName: details.firstName,
  678 |       middleName: details.middleName,
  679 |       lastName: details.lastName,
  680 |       employeeId: details.employeeId,
  681 |       profilePicturePath: details.profilePicturePath,
  682 |     });
  683 | 
  684 |     const employeeId = await this.employeeID.inputValue();
  685 | 
  686 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  687 |       await this.createLoginDetailsSwitch.click();
  688 |     }
  689 | 
  690 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  691 | 
  692 |     await expect(this.employeeUsernameInput).toBeVisible();
  693 |     await expect(this.employeePasswordInput).toBeVisible();
  694 |     await expect(this.confirmPasswordInput).toBeVisible();
  695 | 
  696 |     await this.employeeUsernameInput.fill(details.username);
  697 |     await this.employeePasswordInput.fill(details.password);
  698 |     await this.confirmPasswordInput.fill(details.password);
  699 | 
  700 |     if (details.status === "Disabled") {
  701 |       await this.disabledStatusRadio.check({
  702 |         force: true,
  703 |       });
  704 | 
  705 |       await expect(this.disabledStatusRadio).toBeChecked();
  706 |     } else {
  707 |       await this.enabledStatusRadio.check({
  708 |         force: true,
  709 |       });
  710 | 
  711 |       await expect(this.enabledStatusRadio).toBeChecked();
  712 |     }
  713 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  714 | 
  715 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  716 | 
  717 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  718 | 
  719 |     const createEmployeeResponse = this.page.waitForResponse(
  720 |       (response) =>
  721 |         response.url().includes("/api/v2/pim/employees") &&
  722 |         response.request().method() === "POST" &&
  723 |         response.ok(),
  724 |       { timeout: 20_000 },
  725 |     );
  726 | 
  727 |     await this.SaveEmployeeButton.click();
  728 | 
  729 |     await createEmployeeResponse;
  730 | 
  731 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  732 |       timeout: 20_000,
  733 |     });
  734 | 
  735 |     await expect(this.loadingSpinner).toBeHidden();
  736 | 
  737 |     return employeeId;
  738 |   }
  739 | 
  740 |   async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
  741 |     await expect(this.passwordStrengthIndicator).toBeVisible();
  742 | 
  743 |     await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  744 |   }
  745 | 
  746 |   async canceldeleteEmployeeById(employeeId: string): Promise<void> {
  747 |     await expect(this.loadingSpinner).toBeHidden();
  748 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  749 |     await expect(matchingRow).toHaveCount(1);
  750 |     const deleteButton = matchingRow.locator("button").filter({
  751 |       has: this.page.locator("i.bi-trash"),
  752 |     });
  753 |     await deleteButton.click();
  754 | 
  755 |     const confirmationDilaog = this.page.getByRole("dialog");
  756 |     await expect(confirmationDilaog).toBeVisible();
  757 | 
  758 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  759 | 
  760 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  761 |   }
  762 | 
  763 |   async selectEmployeeById(employeeId: string): Promise<void> {
  764 |     const employeeRow = this.employeeRows.filter({
  765 |       has: this.page
  766 |         .locator(".oxd-table-cell")
  767 |         .nth(1)
  768 |         .getByText(employeeId, { exact: true }),
  769 |     });
  770 | 
> 771 |     await expect(employeeRow).toHaveCount(1);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
  772 | 
  773 |     const rowCheckbox = employeeRow.locator('input[type="checkbox"]');
  774 | 
  775 |     await rowCheckbox.check({
  776 |       force: true,
  777 |     });
  778 | 
  779 |     await expect(rowCheckbox).toBeChecked();
  780 |   }
  781 | 
  782 |   async deleteSelectedEmployees(): Promise<void> {
  783 |     const deleteSelectedButton = this.page.getByRole("button", {
  784 |       name: /Delete Selected/i,
  785 |     });
  786 | 
  787 |     await expect(deleteSelectedButton).toBeVisible();
  788 |     await deleteSelectedButton.click();
  789 | 
  790 |     const confirmationDialog = this.page.getByRole("dialog");
  791 | 
  792 |     await expect(confirmationDialog).toBeVisible();
  793 | 
  794 |     const deleteResponse = this.page.waitForResponse(
  795 |       (response) =>
  796 |         response.url().includes("/api/v2/pim/employees") &&
  797 |         response.request().method() === "DELETE" &&
  798 |         response.ok(),
  799 |       { timeout: 20_000 },
  800 |     );
  801 | 
  802 |     await confirmationDialog
  803 |       .getByRole("button", {
  804 |         name: /Yes, Delete/i,
  805 |       })
  806 |       .click();
  807 | 
  808 |     await deleteResponse;
  809 | 
  810 |     await expect(confirmationDialog).toBeHidden();
  811 | 
  812 |     await expect(this.successToast).toContainText("Successfully Deleted");
  813 | 
  814 |     await expect(this.loadingSpinner).toBeHidden();
  815 |   }
  816 | 
  817 |   async selectAllVisibleEmployees(): Promise<void> {
  818 |     await expect(this.loadingSpinner).toBeHidden({
  819 |       timeout: 20_000,
  820 |     });
  821 | 
  822 |     await expect(this.employeeRows.first()).toBeVisible({
  823 |       timeout: 20_000,
  824 |     });
  825 | 
  826 |     const headerCheckbox = this.page.locator(
  827 |       '.oxd-table-header input[type="checkbox"]',
  828 |     );
  829 | 
  830 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  831 | 
  832 |     await expect
  833 |       .poll(async () => rowCheckboxes.count(), {
  834 |         timeout: 20_000,
  835 |         message: "Waiting for Employee List rows to load",
  836 |       })
  837 |       .toBeGreaterThan(0);
  838 | 
  839 |     const rowCount = await rowCheckboxes.count();
  840 | 
  841 |     await headerCheckbox.check({
  842 |       force: true,
  843 |     });
  844 | 
  845 |     await expect(headerCheckbox).toBeChecked();
  846 | 
  847 |     for (let index = 0; index < rowCount; index++) {
  848 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
  849 |     }
  850 |   }
  851 | 
  852 |   async deselectAllVisibleEmployees(): Promise<void> {
  853 |     const headerCheckbox = this.page.locator(
  854 |       '.oxd-table-header input[type="checkbox"]',
  855 |     );
  856 | 
  857 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  858 | 
  859 |     const rowCount = await rowCheckboxes.count();
  860 | 
  861 |     expect(rowCount).toBeGreaterThan(0);
  862 | 
  863 |     await headerCheckbox.uncheck({
  864 |       force: true,
  865 |     });
  866 | 
  867 |     await expect(headerCheckbox).not.toBeChecked();
  868 | 
  869 |     for (let index = 0; index < rowCount; index++) {
  870 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  871 |     }
```