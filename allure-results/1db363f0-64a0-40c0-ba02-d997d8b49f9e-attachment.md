# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression
- Location: tests\PIM\pim-employee.spec.ts:99:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ hasText: '0495' })
Expected: 1
Received: 2
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ hasText: '0495' })
    23 × locator resolved to 2 elements
       - unexpected value "2"

```

# Page snapshot

```yaml
- generic [ref=f6e3]:
  - generic:
    - complementary [ref=f6e4]:
      - navigation "Sidepanel" [ref=f6e5]:
        - generic [ref=f6e6]:
          - link [ref=f6e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f6e9]
          - text: 
        - generic [ref=f6e10]:
          - generic [ref=f6e11]:
            - generic [ref=f6e12]:
              - textbox "Search" [ref=f6e15]
              - button "" [ref=f6e16] [cursor=pointer]
            - separator [ref=f6e18]
          - list [ref=f6e19]:
            - listitem [ref=f6e20]:
              - link "Admin" [ref=f6e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f6e25]:
              - link "PIM" [ref=f6e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f6e41]:
              - link "Leave" [ref=f6e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f6e46]:
              - link "Time" [ref=f6e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f6e54]:
              - link "Recruitment" [ref=f6e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f6e62]:
              - link "My Info" [ref=f6e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f6e70]:
              - link "Performance" [ref=f6e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f6e80]:
              - link "Dashboard" [ref=f6e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f6e85]:
              - link "Directory" [ref=f6e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f6e90]:
              - link "Maintenance" [ref=f6e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f6e96]:
              - link "Claim" [ref=f6e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f6e105]:
              - link "Buzz" [ref=f6e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f6e110]:
      - generic [ref=f6e111]:
        - generic [ref=f6e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f6e114]
        - link [ref=f6e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f6e117] [cursor=pointer]
        - list [ref=f6e123]:
          - listitem [ref=f6e124]:
            - generic [ref=f6e125] [cursor=pointer]:
              - img "profile picture" [ref=f6e126]
              - paragraph [ref=f6e127]: Maria de Jesus
              - generic [ref=f6e128]: 
      - navigation "Topbar Menu" [ref=f6e130]:
        - list [ref=f6e131]:
          - listitem [ref=f6e132] [cursor=pointer]:
            - generic [ref=f6e133]:
              - text: Configuration
              - generic [ref=f6e134]: 
          - listitem [ref=f6e135] [cursor=pointer]:
            - link "Employee List" [ref=f6e136]:
              - /url: "#"
          - listitem [ref=f6e137] [cursor=pointer]:
            - link "Add Employee" [ref=f6e138]:
              - /url: "#"
          - listitem [ref=f6e139] [cursor=pointer]:
            - link "Reports" [ref=f6e140]:
              - /url: "#"
          - button "" [ref=f6e142] [cursor=pointer]
  - generic [ref=f6e144]:
    - generic [ref=f6e146]:
      - generic [ref=f6e147]:
        - generic [ref=f6e148]:
          - heading "Employee Information" [level=5] [ref=f6e150]
          - button "" [ref=f6e153] [cursor=pointer]
        - separator [ref=f6e155]
        - generic [ref=f6e157]:
          - generic [ref=f6e159]:
            - generic [ref=f6e161]:
              - generic [ref=f6e162]: Employee Name
              - textbox "Type for hints..." [ref=f6e167]
            - generic [ref=f6e169]:
              - generic [ref=f6e170]: Employee Id
              - textbox [ref=f6e173]: "0495"
            - generic [ref=f6e175]:
              - generic [ref=f6e176]: Employment Status
              - generic [ref=f6e180] [cursor=pointer]:
                - generic [ref=f6e181]: "-- Select --"
                - generic [ref=f6e182]: 
            - generic [ref=f6e185]:
              - generic [ref=f6e186]: Include
              - generic [ref=f6e190] [cursor=pointer]:
                - generic [ref=f6e191]: Current Employees Only
                - generic [ref=f6e192]: 
            - generic [ref=f6e195]:
              - generic [ref=f6e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f6e201]
            - generic [ref=f6e203]:
              - generic [ref=f6e204]: Job Title
              - generic [ref=f6e208] [cursor=pointer]:
                - generic [ref=f6e209]: "-- Select --"
                - generic [ref=f6e210]: 
            - generic [ref=f6e213]:
              - generic [ref=f6e214]: Sub Unit
              - generic [ref=f6e218] [cursor=pointer]:
                - generic [ref=f6e219]: "-- Select --"
                - generic [ref=f6e220]: 
          - separator [ref=f6e222]
          - generic [ref=f6e223]:
            - button "Reset" [ref=f6e224] [cursor=pointer]
            - button "Search" [active] [ref=f6e225] [cursor=pointer]
      - generic [ref=f6e226]:
        - button " Add" [ref=f6e228] [cursor=pointer]:
          - generic [ref=f6e229]: 
          - text: Add
        - generic [ref=f6e230]:
          - separator [ref=f6e231]
          - generic [ref=f6e232]: (202) Records Found
        - table [ref=f6e235]:
          - rowgroup [ref=f6e236]:
            - row [ref=f6e237]:
              - columnheader "" [ref=f6e238]:
                - generic [ref=f6e240] [cursor=pointer]:
                  - checkbox "" [ref=f6e241]
                  - generic [ref=f6e242]: 
              - columnheader "Id " [ref=f6e244]:
                - text: Id
                - generic [ref=f6e245]:
                  - generic [ref=f6e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f6e247]:
                - text: First (& Middle) Name
                - generic [ref=f6e248]:
                  - generic [ref=f6e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f6e250]:
                - text: Last Name
                - generic [ref=f6e251]:
                  - generic [ref=f6e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f6e253]:
                - text: Job Title
                - generic [ref=f6e254]:
                  - generic [ref=f6e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f6e256]:
                - text: Employment Status
                - generic [ref=f6e257]:
                  - generic [ref=f6e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f6e259]:
                - text: Sub Unit
                - generic [ref=f6e260]:
                  - generic [ref=f6e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f6e262]:
                - text: Supervisor
                - generic [ref=f6e263]:
                  - generic [ref=f6e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f6e265]
          - rowgroup [ref=f6e266]:
            - row [ref=f6e268] [cursor=pointer]:
              - cell "" [ref=f6e269]:
                - generic [ref=f6e272]:
                  - checkbox "" [ref=f6e273]
                  - generic [ref=f6e274]: 
              - cell "dfgsjsjdh" [ref=f6e276]
              - cell "123445 34" [ref=f6e278]
              - cell "444444" [ref=f6e280]
              - cell [ref=f6e282]
              - cell [ref=f6e283]
              - cell [ref=f6e284]
              - cell [ref=f6e285]
              - cell [ref=f6e286]:
                - generic [ref=f6e287]:
                  - button "" [ref=f6e288]
                  - button "" [ref=f6e290]
            - row [ref=f6e293] [cursor=pointer]:
              - cell "" [ref=f6e294]:
                - generic [ref=f6e297]:
                  - checkbox "" [ref=f6e298]
                  - generic [ref=f6e299]: 
              - cell "0295" [ref=f6e301]
              - cell "99N75 425" [ref=f6e303]
              - cell "5TlV" [ref=f6e305]
              - cell [ref=f6e307]
              - cell [ref=f6e308]
              - cell [ref=f6e309]
              - cell [ref=f6e310]
              - cell [ref=f6e311]:
                - generic [ref=f6e312]:
                  - button "" [ref=f6e313]
                  - button "" [ref=f6e315]
            - row [ref=f6e318] [cursor=pointer]:
              - cell "" [ref=f6e319]:
                - generic [ref=f6e322]:
                  - checkbox "" [ref=f6e323]
                  - generic [ref=f6e324]: 
              - cell "0312" [ref=f6e326]
              - cell "A8DCo 4Ys" [ref=f6e328]
              - cell "010Z" [ref=f6e330]
              - cell [ref=f6e332]
              - cell [ref=f6e333]
              - cell [ref=f6e334]
              - cell [ref=f6e335]
              - cell [ref=f6e336]:
                - generic [ref=f6e337]:
                  - button "" [ref=f6e338]
                  - button "" [ref=f6e340]
            - row [ref=f6e343] [cursor=pointer]:
              - cell "" [ref=f6e344]:
                - generic [ref=f6e347]:
                  - checkbox "" [ref=f6e348]
                  - generic [ref=f6e349]: 
              - cell "01715" [ref=f6e351]
              - cell "Amelia" [ref=f6e353]
              - cell "Brown" [ref=f6e355]
              - cell [ref=f6e357]
              - cell [ref=f6e358]
              - cell [ref=f6e359]
              - cell [ref=f6e360]
              - cell [ref=f6e361]:
                - generic [ref=f6e362]:
                  - button "" [ref=f6e363]
                  - button "" [ref=f6e365]
            - row [ref=f6e368] [cursor=pointer]:
              - cell "" [ref=f6e369]:
                - generic [ref=f6e372]:
                  - checkbox "" [ref=f6e373]
                  - generic [ref=f6e374]: 
              - cell "0360" [ref=f6e376]
              - cell "aniket t" [ref=f6e378]
              - cell "t" [ref=f6e380]
              - cell [ref=f6e382]
              - cell [ref=f6e383]
              - cell [ref=f6e384]
              - cell [ref=f6e385]
              - cell [ref=f6e386]:
                - generic [ref=f6e387]:
                  - button "" [ref=f6e388]
                  - button "" [ref=f6e390]
            - row [ref=f6e393] [cursor=pointer]:
              - cell "" [ref=f6e394]:
                - generic [ref=f6e397]:
                  - checkbox "" [ref=f6e398]
                  - generic [ref=f6e399]: 
              - cell "580" [ref=f6e401]
              - cell "aniket Ashok" [ref=f6e403]
              - cell "patil" [ref=f6e405]
              - cell [ref=f6e407]
              - cell [ref=f6e408]
              - cell [ref=f6e409]
              - cell [ref=f6e410]
              - cell [ref=f6e411]:
                - generic [ref=f6e412]:
                  - button "" [ref=f6e413]
                  - button "" [ref=f6e415]
            - row [ref=f6e418] [cursor=pointer]:
              - cell "" [ref=f6e419]:
                - generic [ref=f6e422]:
                  - checkbox "" [ref=f6e423]
                  - generic [ref=f6e424]: 
              - cell "803" [ref=f6e426]
              - cell "aniket Ashok" [ref=f6e428]
              - cell "patil" [ref=f6e430]
              - cell [ref=f6e432]
              - cell [ref=f6e433]
              - cell [ref=f6e434]
              - cell [ref=f6e435]
              - cell [ref=f6e436]:
                - generic [ref=f6e437]:
                  - button "" [ref=f6e438]
                  - button "" [ref=f6e440]
            - row [ref=f6e443] [cursor=pointer]:
              - cell "" [ref=f6e444]:
                - generic [ref=f6e447]:
                  - checkbox "" [ref=f6e448]
                  - generic [ref=f6e449]: 
              - cell "0476" [ref=f6e451]
              - cell "Anisa cantikk" [ref=f6e453]
              - cell "Testing" [ref=f6e455]
              - cell [ref=f6e457]
              - cell [ref=f6e458]
              - cell [ref=f6e459]
              - cell [ref=f6e460]
              - cell [ref=f6e461]:
                - generic [ref=f6e462]:
                  - button "" [ref=f6e463]
                  - button "" [ref=f6e465]
            - row [ref=f6e468] [cursor=pointer]:
              - cell "" [ref=f6e469]:
                - generic [ref=f6e472]:
                  - checkbox "" [ref=f6e473]
                  - generic [ref=f6e474]: 
              - cell "0464" [ref=f6e476]
              - cell "Anisa cantikk" [ref=f6e478]
              - cell "Testing" [ref=f6e480]
              - cell [ref=f6e482]
              - cell [ref=f6e483]
              - cell [ref=f6e484]
              - cell [ref=f6e485]
              - cell [ref=f6e486]:
                - generic [ref=f6e487]:
                  - button "" [ref=f6e488]
                  - button "" [ref=f6e490]
            - row [ref=f6e493] [cursor=pointer]:
              - cell "" [ref=f6e494]:
                - generic [ref=f6e497]:
                  - checkbox "" [ref=f6e498]
                  - generic [ref=f6e499]: 
              - cell "0463" [ref=f6e501]
              - cell "Anisa cantikk" [ref=f6e503]
              - cell "Testing" [ref=f6e505]
              - cell [ref=f6e507]
              - cell [ref=f6e508]
              - cell [ref=f6e509]
              - cell [ref=f6e510]
              - cell [ref=f6e511]:
                - generic [ref=f6e512]:
                  - button "" [ref=f6e513]
                  - button "" [ref=f6e515]
            - row [ref=f6e518] [cursor=pointer]:
              - cell "" [ref=f6e519]:
                - generic [ref=f6e522]:
                  - checkbox "" [ref=f6e523]
                  - generic [ref=f6e524]: 
              - cell "0456" [ref=f6e526]
              - cell "Anisa cantikk" [ref=f6e528]
              - cell "Testing" [ref=f6e530]
              - cell [ref=f6e532]
              - cell [ref=f6e533]
              - cell [ref=f6e534]
              - cell [ref=f6e535]
              - cell [ref=f6e536]:
                - generic [ref=f6e537]:
                  - button "" [ref=f6e538]
                  - button "" [ref=f6e540]
            - row [ref=f6e543] [cursor=pointer]:
              - cell "" [ref=f6e544]:
                - generic [ref=f6e547]:
                  - checkbox "" [ref=f6e548]
                  - generic [ref=f6e549]: 
              - cell "0462" [ref=f6e551]
              - cell "Anisa cantikk" [ref=f6e553]
              - cell "Testing" [ref=f6e555]
              - cell [ref=f6e557]
              - cell [ref=f6e558]
              - cell [ref=f6e559]
              - cell [ref=f6e560]
              - cell [ref=f6e561]:
                - generic [ref=f6e562]:
                  - button "" [ref=f6e563]
                  - button "" [ref=f6e565]
            - row [ref=f6e568] [cursor=pointer]:
              - cell "" [ref=f6e569]:
                - generic [ref=f6e572]:
                  - checkbox "" [ref=f6e573]
                  - generic [ref=f6e574]: 
              - cell "0491" [ref=f6e576]
              - cell "Anisa cantikk" [ref=f6e578]
              - cell "Testing" [ref=f6e580]
              - cell [ref=f6e582]
              - cell [ref=f6e583]
              - cell [ref=f6e584]
              - cell [ref=f6e585]
              - cell [ref=f6e586]:
                - generic [ref=f6e587]:
                  - button "" [ref=f6e588]
                  - button "" [ref=f6e590]
            - row [ref=f6e593] [cursor=pointer]:
              - cell "" [ref=f6e594]:
                - generic [ref=f6e597]:
                  - checkbox "" [ref=f6e598]
                  - generic [ref=f6e599]: 
              - cell "0480" [ref=f6e601]
              - cell "Anisa cantikk" [ref=f6e603]
              - cell "Testing" [ref=f6e605]
              - cell [ref=f6e607]
              - cell [ref=f6e608]
              - cell [ref=f6e609]
              - cell [ref=f6e610]
              - cell [ref=f6e611]:
                - generic [ref=f6e612]:
                  - button "" [ref=f6e613]
                  - button "" [ref=f6e615]
            - row [ref=f6e618] [cursor=pointer]:
              - cell "" [ref=f6e619]:
                - generic [ref=f6e622]:
                  - checkbox "" [ref=f6e623]
                  - generic [ref=f6e624]: 
              - cell "0454" [ref=f6e626]
              - cell "Anisa cantikk" [ref=f6e628]
              - cell "Testing" [ref=f6e630]
              - cell [ref=f6e632]
              - cell [ref=f6e633]
              - cell [ref=f6e634]
              - cell [ref=f6e635]
              - cell [ref=f6e636]:
                - generic [ref=f6e637]:
                  - button "" [ref=f6e638]
                  - button "" [ref=f6e640]
            - row [ref=f6e643] [cursor=pointer]:
              - cell "" [ref=f6e644]:
                - generic [ref=f6e647]:
                  - checkbox "" [ref=f6e648]
                  - generic [ref=f6e649]: 
              - cell "0469" [ref=f6e651]
              - cell "Anisa cantikk" [ref=f6e653]
              - cell "Testing" [ref=f6e655]
              - cell [ref=f6e657]
              - cell [ref=f6e658]
              - cell [ref=f6e659]
              - cell [ref=f6e660]
              - cell [ref=f6e661]:
                - generic [ref=f6e662]:
                  - button "" [ref=f6e663]
                  - button "" [ref=f6e665]
            - row [ref=f6e668] [cursor=pointer]:
              - cell "" [ref=f6e669]:
                - generic [ref=f6e672]:
                  - checkbox "" [ref=f6e673]
                  - generic [ref=f6e674]: 
              - cell "0487" [ref=f6e676]
              - cell "Anisa cantikk" [ref=f6e678]
              - cell "Testing" [ref=f6e680]
              - cell [ref=f6e682]
              - cell [ref=f6e683]
              - cell [ref=f6e684]
              - cell [ref=f6e685]
              - cell [ref=f6e686]:
                - generic [ref=f6e687]:
                  - button "" [ref=f6e688]
                  - button "" [ref=f6e690]
            - row [ref=f6e693] [cursor=pointer]:
              - cell "" [ref=f6e694]:
                - generic [ref=f6e697]:
                  - checkbox "" [ref=f6e698]
                  - generic [ref=f6e699]: 
              - cell "0370" [ref=f6e701]
              - cell "Anisa cantikk" [ref=f6e703]
              - cell "Testing" [ref=f6e705]
              - cell [ref=f6e707]
              - cell [ref=f6e708]
              - cell [ref=f6e709]
              - cell [ref=f6e710]
              - cell [ref=f6e711]:
                - generic [ref=f6e712]:
                  - button "" [ref=f6e713]
                  - button "" [ref=f6e715]
            - row [ref=f6e718] [cursor=pointer]:
              - cell "" [ref=f6e719]:
                - generic [ref=f6e722]:
                  - checkbox "" [ref=f6e723]
                  - generic [ref=f6e724]: 
              - cell "API340687" [ref=f6e726]
              - cell "ApiFirst340687 ApiMiddle340687" [ref=f6e728]
              - cell "ApiLast340687" [ref=f6e730]
              - cell [ref=f6e732]
              - cell [ref=f6e733]
              - cell [ref=f6e734]
              - cell [ref=f6e735]
              - cell [ref=f6e736]:
                - generic [ref=f6e737]:
                  - button "" [ref=f6e738]
                  - button "" [ref=f6e740]
            - row [ref=f6e743] [cursor=pointer]:
              - cell "" [ref=f6e744]:
                - generic [ref=f6e747]:
                  - checkbox "" [ref=f6e748]
                  - generic [ref=f6e749]: 
              - cell "API345861" [ref=f6e751]
              - cell "ApiFirst345861 ApiMiddle345861" [ref=f6e753]
              - cell "ApiLast345861" [ref=f6e755]
              - cell [ref=f6e757]
              - cell [ref=f6e758]
              - cell [ref=f6e759]
              - cell [ref=f6e760]
              - cell [ref=f6e761]:
                - generic [ref=f6e762]:
                  - button "" [ref=f6e763]
                  - button "" [ref=f6e765]
            - row [ref=f6e768] [cursor=pointer]:
              - cell "" [ref=f6e769]:
                - generic [ref=f6e772]:
                  - checkbox "" [ref=f6e773]
                  - generic [ref=f6e774]: 
              - cell "API351644" [ref=f6e776]
              - cell "ApiFirst351644 ApiMiddle351644" [ref=f6e778]
              - cell "ApiLast351644" [ref=f6e780]
              - cell [ref=f6e782]
              - cell [ref=f6e783]
              - cell [ref=f6e784]
              - cell [ref=f6e785]
              - cell [ref=f6e786]:
                - generic [ref=f6e787]:
                  - button "" [ref=f6e788]
                  - button "" [ref=f6e790]
            - row [ref=f6e793] [cursor=pointer]:
              - cell "" [ref=f6e794]:
                - generic [ref=f6e797]:
                  - checkbox "" [ref=f6e798]
                  - generic [ref=f6e799]: 
              - cell "0367" [ref=f6e801]
              - cell "Ash J" [ref=f6e803]
              - cell "Tyson" [ref=f6e805]
              - cell [ref=f6e807]
              - cell [ref=f6e808]
              - cell [ref=f6e809]
              - cell [ref=f6e810]
              - cell [ref=f6e811]:
                - generic [ref=f6e812]:
                  - button "" [ref=f6e813]
                  - button "" [ref=f6e815]
            - row [ref=f6e818] [cursor=pointer]:
              - cell "" [ref=f6e819]:
                - generic [ref=f6e822]:
                  - checkbox "" [ref=f6e823]
                  - generic [ref=f6e824]: 
              - cell "0373" [ref=f6e826]
              - cell "Auto" [ref=f6e828]
              - cell "Member" [ref=f6e830]
              - cell [ref=f6e832]
              - cell [ref=f6e833]
              - cell [ref=f6e834]
              - cell [ref=f6e835]
              - cell [ref=f6e836]:
                - generic [ref=f6e837]:
                  - button "" [ref=f6e838]
                  - button "" [ref=f6e840]
            - row [ref=f6e843] [cursor=pointer]:
              - cell "" [ref=f6e844]:
                - generic [ref=f6e847]:
                  - checkbox "" [ref=f6e848]
                  - generic [ref=f6e849]: 
              - cell "0420" [ref=f6e851]
              - cell "Auto178641533882581 Test" [ref=f6e853]
              - cell "User" [ref=f6e855]
              - cell [ref=f6e857]
              - cell [ref=f6e858]
              - cell [ref=f6e859]
              - cell [ref=f6e860]
              - cell [ref=f6e861]:
                - generic [ref=f6e862]:
                  - button "" [ref=f6e863]
                  - button "" [ref=f6e865]
            - row [ref=f6e868] [cursor=pointer]:
              - cell "" [ref=f6e869]:
                - generic [ref=f6e872]:
                  - checkbox "" [ref=f6e873]
                  - generic [ref=f6e874]: 
              - cell "0421" [ref=f6e876]
              - cell "Auto1786415361166116 Test" [ref=f6e878]
              - cell "User" [ref=f6e880]
              - cell [ref=f6e882]
              - cell [ref=f6e883]
              - cell [ref=f6e884]
              - cell [ref=f6e885]
              - cell [ref=f6e886]:
                - generic [ref=f6e887]:
                  - button "" [ref=f6e888]
                  - button "" [ref=f6e890]
            - row [ref=f6e893] [cursor=pointer]:
              - cell "" [ref=f6e894]:
                - generic [ref=f6e897]:
                  - checkbox "" [ref=f6e898]
                  - generic [ref=f6e899]: 
              - cell "0424" [ref=f6e901]
              - cell "Auto17864155310331 Test" [ref=f6e903]
              - cell "User" [ref=f6e905]
              - cell [ref=f6e907]
              - cell [ref=f6e908]
              - cell [ref=f6e909]
              - cell [ref=f6e910]
              - cell [ref=f6e911]:
                - generic [ref=f6e912]:
                  - button "" [ref=f6e913]
                  - button "" [ref=f6e915]
            - row [ref=f6e918] [cursor=pointer]:
              - cell "" [ref=f6e919]:
                - generic [ref=f6e922]:
                  - checkbox "" [ref=f6e923]
                  - generic [ref=f6e924]: 
              - cell "0425" [ref=f6e926]
              - cell "Auto17864155611366 Test" [ref=f6e928]
              - cell "User" [ref=f6e930]
              - cell [ref=f6e932]
              - cell [ref=f6e933]
              - cell [ref=f6e934]
              - cell [ref=f6e935]
              - cell [ref=f6e936]:
                - generic [ref=f6e937]:
                  - button "" [ref=f6e938]
                  - button "" [ref=f6e940]
            - row [ref=f6e943] [cursor=pointer]:
              - cell "" [ref=f6e944]:
                - generic [ref=f6e947]:
                  - checkbox "" [ref=f6e948]
                  - generic [ref=f6e949]: 
              - cell "0427" [ref=f6e951]
              - cell "Auto1786415809994431 Test" [ref=f6e953]
              - cell "User" [ref=f6e955]
              - cell [ref=f6e957]
              - cell [ref=f6e958]
              - cell [ref=f6e959]
              - cell [ref=f6e960]
              - cell [ref=f6e961]:
                - generic [ref=f6e962]:
                  - button "" [ref=f6e963]
                  - button "" [ref=f6e965]
            - row [ref=f6e968] [cursor=pointer]:
              - cell "" [ref=f6e969]:
                - generic [ref=f6e972]:
                  - checkbox "" [ref=f6e973]
                  - generic [ref=f6e974]: 
              - cell "0429" [ref=f6e976]
              - cell "Auto1786415823587510 Test" [ref=f6e978]
              - cell "User" [ref=f6e980]
              - cell [ref=f6e982]
              - cell [ref=f6e983]
              - cell [ref=f6e984]
              - cell [ref=f6e985]
              - cell [ref=f6e986]:
                - generic [ref=f6e987]:
                  - button "" [ref=f6e988]
                  - button "" [ref=f6e990]
            - row [ref=f6e993] [cursor=pointer]:
              - cell "" [ref=f6e994]:
                - generic [ref=f6e997]:
                  - checkbox "" [ref=f6e998]
                  - generic [ref=f6e999]: 
              - cell "0433" [ref=f6e1001]
              - cell "Auto1786416020429387 Test" [ref=f6e1003]
              - cell "User" [ref=f6e1005]
              - cell [ref=f6e1007]
              - cell [ref=f6e1008]
              - cell [ref=f6e1009]
              - cell [ref=f6e1010]
              - cell [ref=f6e1011]:
                - generic [ref=f6e1012]:
                  - button "" [ref=f6e1013]
                  - button "" [ref=f6e1015]
            - row [ref=f6e1018] [cursor=pointer]:
              - cell "" [ref=f6e1019]:
                - generic [ref=f6e1022]:
                  - checkbox "" [ref=f6e1023]
                  - generic [ref=f6e1024]: 
              - cell "0434" [ref=f6e1026]
              - cell "Auto1786416048903413 Test" [ref=f6e1028]
              - cell "User" [ref=f6e1030]
              - cell [ref=f6e1032]
              - cell [ref=f6e1033]
              - cell [ref=f6e1034]
              - cell [ref=f6e1035]
              - cell [ref=f6e1036]:
                - generic [ref=f6e1037]:
                  - button "" [ref=f6e1038]
                  - button "" [ref=f6e1040]
            - row [ref=f6e1043] [cursor=pointer]:
              - cell "" [ref=f6e1044]:
                - generic [ref=f6e1047]:
                  - checkbox "" [ref=f6e1048]
                  - generic [ref=f6e1049]: 
              - cell "0445" [ref=f6e1051]
              - cell "Auto1786416481224158 Test" [ref=f6e1053]
              - cell "User" [ref=f6e1055]
              - cell [ref=f6e1057]
              - cell [ref=f6e1058]
              - cell [ref=f6e1059]
              - cell [ref=f6e1060]
              - cell [ref=f6e1061]:
                - generic [ref=f6e1062]:
                  - button "" [ref=f6e1063]
                  - button "" [ref=f6e1065]
            - row [ref=f6e1068] [cursor=pointer]:
              - cell "" [ref=f6e1069]:
                - generic [ref=f6e1072]:
                  - checkbox "" [ref=f6e1073]
                  - generic [ref=f6e1074]: 
              - cell "0446" [ref=f6e1076]
              - cell "Auto178641649794420 Test" [ref=f6e1078]
              - cell "User" [ref=f6e1080]
              - cell [ref=f6e1082]
              - cell [ref=f6e1083]
              - cell [ref=f6e1084]
              - cell [ref=f6e1085]
              - cell [ref=f6e1086]:
                - generic [ref=f6e1087]:
                  - button "" [ref=f6e1088]
                  - button "" [ref=f6e1090]
            - row [ref=f6e1093] [cursor=pointer]:
              - cell "" [ref=f6e1094]:
                - generic [ref=f6e1097]:
                  - checkbox "" [ref=f6e1098]
                  - generic [ref=f6e1099]: 
              - cell "0449" [ref=f6e1101]
              - cell "Auto1786416692145890 Test" [ref=f6e1103]
              - cell "User" [ref=f6e1105]
              - cell [ref=f6e1107]
              - cell [ref=f6e1108]
              - cell [ref=f6e1109]
              - cell [ref=f6e1110]
              - cell [ref=f6e1111]:
                - generic [ref=f6e1112]:
                  - button "" [ref=f6e1113]
                  - button "" [ref=f6e1115]
            - row [ref=f6e1118] [cursor=pointer]:
              - cell "" [ref=f6e1119]:
                - generic [ref=f6e1122]:
                  - checkbox "" [ref=f6e1123]
                  - generic [ref=f6e1124]: 
              - cell "0450" [ref=f6e1126]
              - cell "Auto1786416720217962 Test" [ref=f6e1128]
              - cell "User" [ref=f6e1130]
              - cell [ref=f6e1132]
              - cell [ref=f6e1133]
              - cell [ref=f6e1134]
              - cell [ref=f6e1135]
              - cell [ref=f6e1136]:
                - generic [ref=f6e1137]:
                  - button "" [ref=f6e1138]
                  - button "" [ref=f6e1140]
            - row [ref=f6e1143] [cursor=pointer]:
              - cell "" [ref=f6e1144]:
                - generic [ref=f6e1147]:
                  - checkbox "" [ref=f6e1148]
                  - generic [ref=f6e1149]: 
              - cell "0483" [ref=f6e1151]
              - cell "Auto1786418130751723 Test" [ref=f6e1153]
              - cell "User" [ref=f6e1155]
              - cell [ref=f6e1157]
              - cell [ref=f6e1158]
              - cell [ref=f6e1159]
              - cell [ref=f6e1160]
              - cell [ref=f6e1161]:
                - generic [ref=f6e1162]:
                  - button "" [ref=f6e1163]
                  - button "" [ref=f6e1165]
            - row [ref=f6e1168] [cursor=pointer]:
              - cell "" [ref=f6e1169]:
                - generic [ref=f6e1172]:
                  - checkbox "" [ref=f6e1173]
                  - generic [ref=f6e1174]: 
              - cell "0484" [ref=f6e1176]
              - cell "Auto1786418133927229 Test" [ref=f6e1178]
              - cell "User" [ref=f6e1180]
              - cell [ref=f6e1182]
              - cell [ref=f6e1183]
              - cell [ref=f6e1184]
              - cell [ref=f6e1185]
              - cell [ref=f6e1186]:
                - generic [ref=f6e1187]:
                  - button "" [ref=f6e1188]
                  - button "" [ref=f6e1190]
            - row [ref=f6e1193] [cursor=pointer]:
              - cell "" [ref=f6e1194]:
                - generic [ref=f6e1197]:
                  - checkbox "" [ref=f6e1198]
                  - generic [ref=f6e1199]: 
              - cell "0485" [ref=f6e1201]
              - cell "Auto1786418144049589 Test" [ref=f6e1203]
              - cell "User" [ref=f6e1205]
              - cell [ref=f6e1207]
              - cell [ref=f6e1208]
              - cell [ref=f6e1209]
              - cell [ref=f6e1210]
              - cell [ref=f6e1211]:
                - generic [ref=f6e1212]:
                  - button "" [ref=f6e1213]
                  - button "" [ref=f6e1215]
            - row [ref=f6e1218] [cursor=pointer]:
              - cell "" [ref=f6e1219]:
                - generic [ref=f6e1222]:
                  - checkbox "" [ref=f6e1223]
                  - generic [ref=f6e1224]: 
              - cell "0486" [ref=f6e1226]
              - cell "Auto1786418147963426 Test" [ref=f6e1228]
              - cell "User" [ref=f6e1230]
              - cell [ref=f6e1232]
              - cell [ref=f6e1233]
              - cell [ref=f6e1234]
              - cell [ref=f6e1235]
              - cell [ref=f6e1236]:
                - generic [ref=f6e1237]:
                  - button "" [ref=f6e1238]
                  - button "" [ref=f6e1240]
            - row [ref=f6e1243] [cursor=pointer]:
              - cell "" [ref=f6e1244]:
                - generic [ref=f6e1247]:
                  - checkbox "" [ref=f6e1248]
                  - generic [ref=f6e1249]: 
              - cell "0495" [ref=f6e1251]
              - cell "Auto1786418245867763 Test" [ref=f6e1253]
              - cell "User" [ref=f6e1255]
              - cell [ref=f6e1257]
              - cell [ref=f6e1258]
              - cell [ref=f6e1259]
              - cell [ref=f6e1260]
              - cell [ref=f6e1261]:
                - generic [ref=f6e1262]:
                  - button "" [ref=f6e1263]
                  - button "" [ref=f6e1265]
            - row [ref=f6e1268] [cursor=pointer]:
              - cell "" [ref=f6e1269]:
                - generic [ref=f6e1272]:
                  - checkbox "" [ref=f6e1273]
                  - generic [ref=f6e1274]: 
              - cell "0411" [ref=f6e1276]
              - cell "AutoTest" [ref=f6e1278]
              - cell "Employee" [ref=f6e1280]
              - cell [ref=f6e1282]
              - cell [ref=f6e1283]
              - cell [ref=f6e1284]
              - cell [ref=f6e1285]
              - cell [ref=f6e1286]:
                - generic [ref=f6e1287]:
                  - button "" [ref=f6e1288]
                  - button "" [ref=f6e1290]
            - row [ref=f6e1293] [cursor=pointer]:
              - cell "" [ref=f6e1294]:
                - generic [ref=f6e1297]:
                  - checkbox "" [ref=f6e1298]
                  - generic [ref=f6e1299]: 
              - cell "0416" [ref=f6e1301]
              - cell "AutoTest" [ref=f6e1303]
              - cell "Employee" [ref=f6e1305]
              - cell [ref=f6e1307]
              - cell [ref=f6e1308]
              - cell [ref=f6e1309]
              - cell [ref=f6e1310]
              - cell [ref=f6e1311]:
                - generic [ref=f6e1312]:
                  - button "" [ref=f6e1313]
                  - button "" [ref=f6e1315]
            - row [ref=f6e1318] [cursor=pointer]:
              - cell "" [ref=f6e1319]:
                - generic [ref=f6e1322]:
                  - checkbox "" [ref=f6e1323]
                  - generic [ref=f6e1324]: 
              - cell "0303" [ref=f6e1326]
              - cell "bala kumar" [ref=f6e1328]
              - cell "ravi" [ref=f6e1330]
              - cell [ref=f6e1332]
              - cell [ref=f6e1333]
              - cell [ref=f6e1334]
              - cell [ref=f6e1335]
              - cell [ref=f6e1336]:
                - generic [ref=f6e1337]:
                  - button "" [ref=f6e1338]
                  - button "" [ref=f6e1340]
            - row [ref=f6e1343] [cursor=pointer]:
              - cell "" [ref=f6e1344]:
                - generic [ref=f6e1347]:
                  - checkbox "" [ref=f6e1348]
                  - generic [ref=f6e1349]: 
              - cell "0292" [ref=f6e1351]
              - cell "bmrtahvwhibmrtahvwhi" [ref=f6e1353]
              - cell "hbfqkhjfqbhbfqkhjfqb" [ref=f6e1355]
              - cell [ref=f6e1357]
              - cell [ref=f6e1358]
              - cell [ref=f6e1359]
              - cell [ref=f6e1360]
              - cell [ref=f6e1361]:
                - generic [ref=f6e1362]:
                  - button "" [ref=f6e1363]
                  - button "" [ref=f6e1365]
            - row [ref=f6e1368] [cursor=pointer]:
              - cell "" [ref=f6e1369]:
                - generic [ref=f6e1372]:
                  - checkbox "" [ref=f6e1373]
                  - generic [ref=f6e1374]: 
              - cell "0746" [ref=f6e1376]
              - cell "Broser agent" [ref=f6e1378]
              - cell "Test" [ref=f6e1380]
              - cell [ref=f6e1382]
              - cell [ref=f6e1383]
              - cell [ref=f6e1384]
              - cell [ref=f6e1385]
              - cell [ref=f6e1386]:
                - generic [ref=f6e1387]:
                  - button "" [ref=f6e1388]
                  - button "" [ref=f6e1390]
            - row [ref=f6e1393] [cursor=pointer]:
              - cell "" [ref=f6e1394]:
                - generic [ref=f6e1397]:
                  - checkbox "" [ref=f6e1398]
                  - generic [ref=f6e1399]: 
              - cell "0745651be8" [ref=f6e1401]
              - cell "Catherine" [ref=f6e1403]
              - cell "Massey" [ref=f6e1405]
              - cell [ref=f6e1407]
              - cell [ref=f6e1408]
              - cell [ref=f6e1409]
              - cell [ref=f6e1410]
              - cell [ref=f6e1411]:
                - generic [ref=f6e1412]:
                  - button "" [ref=f6e1413]
                  - button "" [ref=f6e1415]
            - row [ref=f6e1418] [cursor=pointer]:
              - cell "" [ref=f6e1419]:
                - generic [ref=f6e1422]:
                  - checkbox "" [ref=f6e1423]
                  - generic [ref=f6e1424]: 
              - cell "0320" [ref=f6e1426]
              - cell "Charles" [ref=f6e1428]
              - cell "Carter" [ref=f6e1430]
              - cell [ref=f6e1432]
              - cell [ref=f6e1433]
              - cell [ref=f6e1434]
              - cell [ref=f6e1435]
              - cell [ref=f6e1436]:
                - generic [ref=f6e1437]:
                  - button "" [ref=f6e1438]
                  - button "" [ref=f6e1440]
            - row [ref=f6e1443] [cursor=pointer]:
              - cell "" [ref=f6e1444]:
                - generic [ref=f6e1447]:
                  - checkbox "" [ref=f6e1448]
                  - generic [ref=f6e1449]: 
              - cell "00392" [ref=f6e1451]
              - cell "Charlotte" [ref=f6e1453]
              - cell "Smith" [ref=f6e1455]
              - cell [ref=f6e1457]
              - cell [ref=f6e1458]
              - cell [ref=f6e1459]
              - cell [ref=f6e1460]
              - cell [ref=f6e1461]:
                - generic [ref=f6e1462]:
                  - button "" [ref=f6e1463]
                  - button "" [ref=f6e1465]
            - row [ref=f6e1468] [cursor=pointer]:
              - cell "" [ref=f6e1469]:
                - generic [ref=f6e1472]:
                  - checkbox "" [ref=f6e1473]
                  - generic [ref=f6e1474]: 
              - cell "0363" [ref=f6e1476]
              - cell "Christopher" [ref=f6e1478]
              - cell "Mcmillan" [ref=f6e1480]
              - cell [ref=f6e1482]
              - cell [ref=f6e1483]
              - cell [ref=f6e1484]
              - cell [ref=f6e1485]
              - cell [ref=f6e1486]:
                - generic [ref=f6e1487]:
                  - button "" [ref=f6e1488]
                  - button "" [ref=f6e1490]
            - row [ref=f6e1493] [cursor=pointer]:
              - cell "" [ref=f6e1494]:
                - generic [ref=f6e1497]:
                  - checkbox "" [ref=f6e1498]
                  - generic [ref=f6e1499]: 
              - cell "EMP-XTPi" [ref=f6e1501]
              - cell "Cofirst-g8Z" [ref=f6e1503]
              - cell "Colast-aVs" [ref=f6e1505]
              - cell [ref=f6e1507]
              - cell [ref=f6e1508]
              - cell [ref=f6e1509]
              - cell [ref=f6e1510]
              - cell [ref=f6e1511]:
                - generic [ref=f6e1512]:
                  - button "" [ref=f6e1513]
                  - button "" [ref=f6e1515]
        - navigation "Pagination Navigation" [ref=f6e1518]:
          - list [ref=f6e1519]:
            - listitem [ref=f6e1520]:
              - button "1" [ref=f6e1521] [cursor=pointer]
            - listitem [ref=f6e1522]:
              - button "2" [ref=f6e1523] [cursor=pointer]
            - listitem [ref=f6e1524]:
              - button "3" [ref=f6e1525] [cursor=pointer]
            - listitem [ref=f6e1526]:
              - button "4" [ref=f6e1527] [cursor=pointer]
            - listitem [ref=f6e1528]:
              - button "5" [ref=f6e1529] [cursor=pointer]
            - listitem [ref=f6e1530]:
              - button "" [ref=f6e1531] [cursor=pointer]
    - generic [ref=f6e1533]:
      - paragraph [ref=f6e1534]: OrangeHRM OS 5.9
      - paragraph [ref=f6e1535]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f6e1536] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  397 |   return await this.employeeID.inputValue();
  398 | }
  399 | 
  400 |   async gotoEmployeeList(): Promise<void> {
  401 |     await this.employeeListLink.click();
  402 |   }
  403 | 
  404 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  405 |     if (filters.employeeId !== undefined) {
  406 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  407 |     }
  408 | 
  409 |     if (filters.employeeName !== undefined) {
  410 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  411 | 
  412 |       const matchingOption = this.autocompleteOptions
  413 |         .filter({ hasText: filters.employeeName })
  414 |         .first();
  415 | 
  416 |       await expect(matchingOption).toBeVisible();
  417 |       await matchingOption.click();
  418 |     }
  419 |   }
  420 | 
  421 |   async clickOnFilterSearch(): Promise<void> {
  422 |     await this.filterSearchButton.click();
  423 |   }
  424 | 
  425 |   async verifyEmployeeSearchResult(
  426 |     employeeId: string,
  427 |     firstName: string,
  428 |     lastName: string,
  429 |   ): Promise<void> {
  430 |     await expect(this.loadingSpinner).toBeHidden();
  431 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  432 |     const cells = matchingRow.locator(".oxd-table-cell");
  433 |     const fullName = await cells.nth(2).innerText();
  434 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  435 |     await expect(cells.nth(1)).toHaveText(employeeId);
  436 |     expect(actualFirstName).toBe(firstName);
  437 |     await expect(cells.nth(3)).toHaveText(lastName);
  438 |     await expect(this.noRecordsFound).not.toBeVisible();
  439 |   }
  440 | 
  441 | async verifyNoEmployeeRecordsFound(employeeId: string) {
  442 |   await expect(this.loadingSpinner).toBeHidden({
  443 |     timeout: 15_000,
  444 |   });
  445 | 
  446 |   await expect(this.employeeRows).toHaveCount(0, {
  447 |     timeout: 15_000,
  448 |   });
  449 | 
  450 |   await expect(this.employeeIdFilterInput).toHaveValue(
  451 |     employeeId
  452 |   );
  453 | }
  454 | 
  455 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  456 |     await expect(this.personalDetailsHeading).toBeVisible();
  457 |     //await expect(this.loadingSpinner).toBeHidden();
  458 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  459 | 
  460 |     if (details.middleName !== undefined) {
  461 |       await this.middlenameInput.fill(details.middleName);
  462 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  463 |     }
  464 | 
  465 |     if (details.lastName !== undefined) {
  466 |       await this.lastnameInput.fill(details.lastName);
  467 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  468 |     }
  469 | 
  470 |     const updateResponse = this.page.waitForResponse(
  471 |       (response) =>
  472 |         response.url().includes("/personal-details") &&
  473 |         response.request().method() === "PUT" &&
  474 |         response.ok(),
  475 |       { timeout: 20_000 },
  476 |     );
  477 | 
  478 |     await this.personalDetailsSaveButton.click();
  479 |     await updateResponse;
  480 | 
  481 |     await expect(this.successToast).toContainText("Successfully Updated");
  482 | 
  483 |     //await expect(this.loadingSpinner).toBeHidden();
  484 | 
  485 |     if (details.middleName !== undefined) {
  486 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  487 |     }
  488 | 
  489 |     if (details.lastName !== undefined) {
  490 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  491 |     }
  492 |   }
  493 |   //deleting the Records
  494 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  495 |     await expect(this.loadingSpinner).toBeHidden();
  496 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
> 497 |     await expect(matchingRow).toHaveCount(1);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
  498 |     const deleteButton = matchingRow.locator("button").filter({
  499 |       has: this.page.locator("i.bi-trash"),
  500 |     });
  501 |     await deleteButton.click();
  502 | 
  503 |     const confirmationDilaog = this.page.getByRole("dialog");
  504 |     await expect(confirmationDilaog).toBeVisible();
  505 |     const deleteResponse = this.page.waitForResponse(
  506 |       (response) =>
  507 |         response.url().includes("/api/v2/pim/employees") &&
  508 |         response.request().method() === "DELETE" &&
  509 |         response.ok(),
  510 |       { timeout: 20_000 },
  511 |     );
  512 | 
  513 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  514 | 
  515 |     await deleteResponse;
  516 | 
  517 |     await expect(this.successToast).toContainText("Successfully Deleted");
  518 | 
  519 |     await expect(matchingRow).toHaveCount(0);
  520 |   }
  521 | 
  522 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  523 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  524 | 
  525 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  526 |       timeout: 20_000,
  527 |     });
  528 | 
  529 |     await expect(this.profilePictureValidation).toBeVisible();
  530 | 
  531 |     await expect(this.profilePictureValidation).toContainText(
  532 |       "File type not allowed",
  533 |     );
  534 |   }
  535 | 
  536 |   async getVisibleEmployeeIds(): Promise<string[]> {
  537 |     await expect(this.employeeRows.first()).toBeVisible({
  538 |       timeout: 15_000,
  539 |     });
  540 | 
  541 |     await expect(this.employeeIdCells.first()).toBeVisible({
  542 |       timeout: 15_000,
  543 |     });
  544 | 
  545 |     const employeeIds = await this.employeeIdCells.allTextContents();
  546 | 
  547 |     return employeeIds
  548 |       .map((employeeId) => employeeId.trim())
  549 |       .filter((employeeId) => employeeId.length > 0);
  550 |   }
  551 | 
  552 |   async goToPage(pageNumber: number): Promise<void> {
  553 |     const currentPageIds = await this.getVisibleEmployeeIds();
  554 | 
  555 |     const pageButton = this.page
  556 |       .getByRole("navigation", {
  557 |         name: "Pagination Navigation",
  558 |       })
  559 |       .getByRole("button", {
  560 |         name: String(pageNumber),
  561 |         exact: true,
  562 |       });
  563 | 
  564 |     await expect(pageButton).toBeVisible();
  565 | 
  566 |     const employeesResponse = this.page.waitForResponse(
  567 |       (response) =>
  568 |         response.url().includes("/api/v2/pim/employees") &&
  569 |         response.request().method() === "GET" &&
  570 |         response.ok(),
  571 |       { timeout: 20_000 },
  572 |     );
  573 | 
  574 |     await pageButton.click();
  575 |     await employeesResponse;
  576 | 
  577 |     await expect
  578 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  579 |       .not.toEqual(currentPageIds);
  580 |   }
  581 | 
  582 |   async openEmployeeById(employeeId: string): Promise<void> {
  583 |     const employeeRow = this.employeeRows.filter({
  584 |       has: this.page
  585 |         .locator(".oxd-table-cell")
  586 |         .nth(1)
  587 |         .filter({ hasText: employeeId }),
  588 |     });
  589 | 
  590 |     await expect(employeeRow).toHaveCount(1);
  591 | 
  592 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  593 | 
  594 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  595 |       timeout: 15_000,
  596 |     });
  597 |   }
```