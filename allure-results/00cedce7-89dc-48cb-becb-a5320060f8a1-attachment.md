# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression
- Location: tests\PIM\pim-employee-list.spec.ts:5:5

# Error details

```
TimeoutError: locator.innerText: Timeout 25000ms exceeded.
Call log:
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ hasText: 'E5PBG3HQHM' }).locator('.oxd-table-cell').nth(2)

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
          - heading "PIM" [level=6] [ref=f5e114]
        - link [ref=f5e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e117] [cursor=pointer]
        - list [ref=f5e123]:
          - listitem [ref=f5e124]:
            - generic [ref=f5e125] [cursor=pointer]:
              - img "profile picture" [ref=f5e126]
              - paragraph [ref=f5e127]: Noor Eman
              - generic [ref=f5e128]: 
      - navigation "Topbar Menu" [ref=f5e130]:
        - list [ref=f5e131]:
          - listitem [ref=f5e132] [cursor=pointer]:
            - generic [ref=f5e133]:
              - text: Configuration
              - generic [ref=f5e134]: 
          - listitem [ref=f5e135] [cursor=pointer]:
            - link "Employee List" [ref=f5e136]:
              - /url: "#"
          - listitem [ref=f5e137] [cursor=pointer]:
            - link "Add Employee" [ref=f5e138]:
              - /url: "#"
          - listitem [ref=f5e139] [cursor=pointer]:
            - link "Reports" [ref=f5e140]:
              - /url: "#"
          - button "" [ref=f5e142] [cursor=pointer]
  - generic [ref=f5e144]:
    - generic [ref=f5e146]:
      - generic [ref=f5e147]:
        - generic [ref=f5e148]:
          - heading "Employee Information" [level=5] [ref=f5e150]
          - button "" [ref=f5e153] [cursor=pointer]
        - separator [ref=f5e155]
        - generic [ref=f5e157]:
          - generic [ref=f5e159]:
            - generic [ref=f5e161]:
              - generic [ref=f5e162]: Employee Name
              - textbox "Type for hints..." [ref=f5e167]
            - generic [ref=f5e169]:
              - generic [ref=f5e170]: Employee Id
              - textbox [ref=f5e173]: E5PBG3HQHM
            - generic [ref=f5e175]:
              - generic [ref=f5e176]: Employment Status
              - generic [ref=f5e180] [cursor=pointer]:
                - generic [ref=f5e181]: "-- Select --"
                - generic [ref=f5e182]: 
            - generic [ref=f5e185]:
              - generic [ref=f5e186]: Include
              - generic [ref=f5e190] [cursor=pointer]:
                - generic [ref=f5e191]: Current Employees Only
                - generic [ref=f5e192]: 
            - generic [ref=f5e195]:
              - generic [ref=f5e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e201]
            - generic [ref=f5e203]:
              - generic [ref=f5e204]: Job Title
              - generic [ref=f5e208] [cursor=pointer]:
                - generic [ref=f5e209]: "-- Select --"
                - generic [ref=f5e210]: 
            - generic [ref=f5e213]:
              - generic [ref=f5e214]: Sub Unit
              - generic [ref=f5e218] [cursor=pointer]:
                - generic [ref=f5e219]: "-- Select --"
                - generic [ref=f5e220]: 
          - separator [ref=f5e222]
          - generic [ref=f5e223]:
            - button "Reset" [ref=f5e224] [cursor=pointer]
            - button "Search" [active] [ref=f5e225] [cursor=pointer]
      - generic [ref=f5e226]:
        - button " Add" [ref=f5e228] [cursor=pointer]:
          - generic [ref=f5e229]: 
          - text: Add
        - generic [ref=f5e230]:
          - separator [ref=f5e231]
          - generic [ref=f5e232]: (260) Records Found
        - table [ref=f5e235]:
          - rowgroup [ref=f5e236]:
            - row [ref=f5e237]:
              - columnheader "" [ref=f5e238]:
                - generic [ref=f5e240] [cursor=pointer]:
                  - checkbox "" [ref=f5e241]
                  - generic [ref=f5e242]: 
              - columnheader "Id " [ref=f5e244]:
                - text: Id
                - generic [ref=f5e245]:
                  - generic [ref=f5e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e247]:
                - text: First (& Middle) Name
                - generic [ref=f5e248]:
                  - generic [ref=f5e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e250]:
                - text: Last Name
                - generic [ref=f5e251]:
                  - generic [ref=f5e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e253]:
                - text: Job Title
                - generic [ref=f5e254]:
                  - generic [ref=f5e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e256]:
                - text: Employment Status
                - generic [ref=f5e257]:
                  - generic [ref=f5e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e259]:
                - text: Sub Unit
                - generic [ref=f5e260]:
                  - generic [ref=f5e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e262]:
                - text: Supervisor
                - generic [ref=f5e263]:
                  - generic [ref=f5e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e265]
          - rowgroup [ref=f5e266]:
            - row [ref=f5e268] [cursor=pointer]:
              - cell "" [ref=f5e269]:
                - generic [ref=f5e272]:
                  - checkbox "" [ref=f5e273]
                  - generic [ref=f5e274]: 
              - cell "0406" [ref=f5e276]
              - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" [ref=f5e278]
              - cell "EditedLast" [ref=f5e280]
              - cell [ref=f5e282]
              - cell [ref=f5e283]
              - cell [ref=f5e284]
              - cell [ref=f5e285]
              - cell [ref=f5e286]:
                - generic [ref=f5e287]:
                  - button "" [ref=f5e288]
                  - button "" [ref=f5e290]
            - row [ref=f5e293] [cursor=pointer]:
              - cell "" [ref=f5e294]:
                - generic [ref=f5e297]:
                  - checkbox "" [ref=f5e298]
                  - generic [ref=f5e299]: 
              - cell "03909" [ref=f5e301]
              - cell "ADNAN dffd" [ref=f5e303]
              - cell "kHAM" [ref=f5e305]
              - cell [ref=f5e307]
              - cell [ref=f5e308]
              - cell [ref=f5e309]
              - cell [ref=f5e310]
              - cell [ref=f5e311]:
                - generic [ref=f5e312]:
                  - button "" [ref=f5e313]
                  - button "" [ref=f5e315]
            - row [ref=f5e318] [cursor=pointer]:
              - cell "" [ref=f5e319]:
                - generic [ref=f5e322]:
                  - checkbox "" [ref=f5e323]
                  - generic [ref=f5e324]: 
              - cell "733260" [ref=f5e326]
              - cell "Aliyah North" [ref=f5e328]
              - cell "Quitzon" [ref=f5e330]
              - cell [ref=f5e332]
              - cell [ref=f5e333]
              - cell [ref=f5e334]
              - cell [ref=f5e335]
              - cell [ref=f5e336]:
                - generic [ref=f5e337]:
                  - button "" [ref=f5e338]
                  - button "" [ref=f5e340]
            - row [ref=f5e343] [cursor=pointer]:
              - cell "" [ref=f5e344]:
                - generic [ref=f5e347]:
                  - checkbox "" [ref=f5e348]
                  - generic [ref=f5e349]: 
              - cell "01715" [ref=f5e351]
              - cell "Amelia" [ref=f5e353]
              - cell "Brown" [ref=f5e355]
              - cell [ref=f5e357]
              - cell [ref=f5e358]
              - cell [ref=f5e359]
              - cell [ref=f5e360]
              - cell [ref=f5e361]:
                - generic [ref=f5e362]:
                  - button "" [ref=f5e363]
                  - button "" [ref=f5e365]
            - row [ref=f5e368] [cursor=pointer]:
              - cell "" [ref=f5e369]:
                - generic [ref=f5e372]:
                  - checkbox "" [ref=f5e373]
                  - generic [ref=f5e374]: 
              - cell "506" [ref=f5e376]
              - cell "aniket Ashok" [ref=f5e378]
              - cell "patil" [ref=f5e380]
              - cell [ref=f5e382]
              - cell [ref=f5e383]
              - cell [ref=f5e384]
              - cell [ref=f5e385]
              - cell [ref=f5e386]:
                - generic [ref=f5e387]:
                  - button "" [ref=f5e388]
                  - button "" [ref=f5e390]
            - row [ref=f5e393] [cursor=pointer]:
              - cell "" [ref=f5e394]:
                - generic [ref=f5e397]:
                  - checkbox "" [ref=f5e398]
                  - generic [ref=f5e399]: 
              - cell "0360" [ref=f5e401]
              - cell "aniket t" [ref=f5e403]
              - cell "t" [ref=f5e405]
              - cell [ref=f5e407]
              - cell [ref=f5e408]
              - cell [ref=f5e409]
              - cell [ref=f5e410]
              - cell [ref=f5e411]:
                - generic [ref=f5e412]:
                  - button "" [ref=f5e413]
                  - button "" [ref=f5e415]
            - row [ref=f5e418] [cursor=pointer]:
              - cell "" [ref=f5e419]:
                - generic [ref=f5e422]:
                  - checkbox "" [ref=f5e423]
                  - generic [ref=f5e424]: 
              - cell "792" [ref=f5e426]
              - cell "aniket Ashok" [ref=f5e428]
              - cell "patil" [ref=f5e430]
              - cell [ref=f5e432]
              - cell [ref=f5e433]
              - cell [ref=f5e434]
              - cell [ref=f5e435]
              - cell [ref=f5e436]:
                - generic [ref=f5e437]:
                  - button "" [ref=f5e438]
                  - button "" [ref=f5e440]
            - row [ref=f5e443] [cursor=pointer]:
              - cell "" [ref=f5e444]:
                - generic [ref=f5e447]:
                  - checkbox "" [ref=f5e448]
                  - generic [ref=f5e449]: 
              - cell "0367" [ref=f5e451]
              - cell "Ash J" [ref=f5e453]
              - cell "Tyson" [ref=f5e455]
              - cell [ref=f5e457]
              - cell [ref=f5e458]
              - cell [ref=f5e459]
              - cell [ref=f5e460]
              - cell [ref=f5e461]:
                - generic [ref=f5e462]:
                  - button "" [ref=f5e463]
                  - button "" [ref=f5e465]
            - row [ref=f5e468] [cursor=pointer]:
              - cell "" [ref=f5e469]:
                - generic [ref=f5e472]:
                  - checkbox "" [ref=f5e473]
                  - generic [ref=f5e474]: 
              - cell "0587" [ref=f5e476]
              - cell "Auto Test" [ref=f5e478]
              - cell "User" [ref=f5e480]
              - cell [ref=f5e482]
              - cell [ref=f5e483]
              - cell [ref=f5e484]
              - cell [ref=f5e485]
              - cell [ref=f5e486]:
                - generic [ref=f5e487]:
                  - button "" [ref=f5e488]
                  - button "" [ref=f5e490]
            - row [ref=f5e493] [cursor=pointer]:
              - cell "" [ref=f5e494]:
                - generic [ref=f5e497]:
                  - checkbox "" [ref=f5e498]
                  - generic [ref=f5e499]: 
              - cell "0567" [ref=f5e501]
              - cell "Auto Test" [ref=f5e503]
              - cell "User" [ref=f5e505]
              - cell [ref=f5e507]
              - cell [ref=f5e508]
              - cell [ref=f5e509]
              - cell [ref=f5e510]
              - cell [ref=f5e511]:
                - generic [ref=f5e512]:
                  - button "" [ref=f5e513]
                  - button "" [ref=f5e515]
            - row [ref=f5e518] [cursor=pointer]:
              - cell "" [ref=f5e519]:
                - generic [ref=f5e522]:
                  - checkbox "" [ref=f5e523]
                  - generic [ref=f5e524]: 
              - cell "0370" [ref=f5e526]
              - cell "Auto1785571204323 Test" [ref=f5e528]
              - cell "User" [ref=f5e530]
              - cell [ref=f5e532]
              - cell [ref=f5e533]
              - cell [ref=f5e534]
              - cell [ref=f5e535]
              - cell [ref=f5e536]:
                - generic [ref=f5e537]:
                  - button "" [ref=f5e538]
                  - button "" [ref=f5e540]
            - row [ref=f5e543] [cursor=pointer]:
              - cell "" [ref=f5e544]:
                - generic [ref=f5e547]:
                  - checkbox "" [ref=f5e548]
                  - generic [ref=f5e549]: 
              - cell "0372" [ref=f5e551]
              - cell "Auto1785571630533 test" [ref=f5e553]
              - cell "user" [ref=f5e555]
              - cell [ref=f5e557]
              - cell [ref=f5e558]
              - cell [ref=f5e559]
              - cell [ref=f5e560]
              - cell [ref=f5e561]:
                - generic [ref=f5e562]:
                  - button "" [ref=f5e563]
                  - button "" [ref=f5e565]
            - row [ref=f5e568] [cursor=pointer]:
              - cell "" [ref=f5e569]:
                - generic [ref=f5e572]:
                  - checkbox "" [ref=f5e573]
                  - generic [ref=f5e574]: 
              - cell "0375" [ref=f5e576]
              - cell "Auto1785571675159 test" [ref=f5e578]
              - cell "user" [ref=f5e580]
              - cell [ref=f5e582]
              - cell [ref=f5e583]
              - cell [ref=f5e584]
              - cell [ref=f5e585]
              - cell [ref=f5e586]:
                - generic [ref=f5e587]:
                  - button "" [ref=f5e588]
                  - button "" [ref=f5e590]
            - row [ref=f5e593] [cursor=pointer]:
              - cell "" [ref=f5e594]:
                - generic [ref=f5e597]:
                  - checkbox "" [ref=f5e598]
                  - generic [ref=f5e599]: 
              - cell "0390" [ref=f5e601]
              - cell "Auto1785571819293 updatedTest" [ref=f5e603]
              - cell "updatedUser" [ref=f5e605]
              - cell [ref=f5e607]
              - cell [ref=f5e608]
              - cell [ref=f5e609]
              - cell [ref=f5e610]
              - cell [ref=f5e611]:
                - generic [ref=f5e612]:
                  - button "" [ref=f5e613]
                  - button "" [ref=f5e615]
            - row [ref=f5e618] [cursor=pointer]:
              - cell "" [ref=f5e619]:
                - generic [ref=f5e622]:
                  - checkbox "" [ref=f5e623]
                  - generic [ref=f5e624]: 
              - cell "0393" [ref=f5e626]
              - cell "Auto1785571856721 test" [ref=f5e628]
              - cell "user" [ref=f5e630]
              - cell [ref=f5e632]
              - cell [ref=f5e633]
              - cell [ref=f5e634]
              - cell [ref=f5e635]
              - cell [ref=f5e636]:
                - generic [ref=f5e637]:
                  - button "" [ref=f5e638]
                  - button "" [ref=f5e640]
            - row [ref=f5e643] [cursor=pointer]:
              - cell "" [ref=f5e644]:
                - generic [ref=f5e647]:
                  - checkbox "" [ref=f5e648]
                  - generic [ref=f5e649]: 
              - cell "0396" [ref=f5e651]
              - cell "Auto1785571877148 test" [ref=f5e653]
              - cell "user" [ref=f5e655]
              - cell [ref=f5e657]
              - cell [ref=f5e658]
              - cell [ref=f5e659]
              - cell [ref=f5e660]
              - cell [ref=f5e661]:
                - generic [ref=f5e662]:
                  - button "" [ref=f5e663]
                  - button "" [ref=f5e665]
            - row [ref=f5e668] [cursor=pointer]:
              - cell "" [ref=f5e669]:
                - generic [ref=f5e672]:
                  - checkbox "" [ref=f5e673]
                  - generic [ref=f5e674]: 
              - cell "0397" [ref=f5e676]
              - cell "Auto1785571893903 updatedTest" [ref=f5e678]
              - cell "updatedUser" [ref=f5e680]
              - cell [ref=f5e682]
              - cell [ref=f5e683]
              - cell [ref=f5e684]
              - cell [ref=f5e685]
              - cell [ref=f5e686]:
                - generic [ref=f5e687]:
                  - button "" [ref=f5e688]
                  - button "" [ref=f5e690]
            - row [ref=f5e693] [cursor=pointer]:
              - cell "" [ref=f5e694]:
                - generic [ref=f5e697]:
                  - checkbox "" [ref=f5e698]
                  - generic [ref=f5e699]: 
              - cell "0398" [ref=f5e701]
              - cell "Auto1785571903048 updatedTest" [ref=f5e703]
              - cell "updatedUser" [ref=f5e705]
              - cell [ref=f5e707]
              - cell [ref=f5e708]
              - cell [ref=f5e709]
              - cell [ref=f5e710]
              - cell [ref=f5e711]:
                - generic [ref=f5e712]:
                  - button "" [ref=f5e713]
                  - button "" [ref=f5e715]
            - row [ref=f5e718] [cursor=pointer]:
              - cell "" [ref=f5e719]:
                - generic [ref=f5e722]:
                  - checkbox "" [ref=f5e723]
                  - generic [ref=f5e724]: 
              - cell "0408" [ref=f5e726]
              - cell "Auto1785571997542 test" [ref=f5e728]
              - cell "user" [ref=f5e730]
              - cell [ref=f5e732]
              - cell [ref=f5e733]
              - cell [ref=f5e734]
              - cell [ref=f5e735]
              - cell [ref=f5e736]:
                - generic [ref=f5e737]:
                  - button "" [ref=f5e738]
                  - button "" [ref=f5e740]
            - row [ref=f5e743] [cursor=pointer]:
              - cell "" [ref=f5e744]:
                - generic [ref=f5e747]:
                  - checkbox "" [ref=f5e748]
                  - generic [ref=f5e749]: 
              - cell "0410" [ref=f5e751]
              - cell "Auto1785572017407 updatedTest" [ref=f5e753]
              - cell "updatedUser" [ref=f5e755]
              - cell [ref=f5e757]
              - cell [ref=f5e758]
              - cell [ref=f5e759]
              - cell [ref=f5e760]
              - cell [ref=f5e761]:
                - generic [ref=f5e762]:
                  - button "" [ref=f5e763]
                  - button "" [ref=f5e765]
            - row [ref=f5e768] [cursor=pointer]:
              - cell "" [ref=f5e769]:
                - generic [ref=f5e772]:
                  - checkbox "" [ref=f5e773]
                  - generic [ref=f5e774]: 
              - cell "0413" [ref=f5e776]
              - cell "Auto1785572085718 Test" [ref=f5e778]
              - cell "User" [ref=f5e780]
              - cell [ref=f5e782]
              - cell [ref=f5e783]
              - cell [ref=f5e784]
              - cell [ref=f5e785]
              - cell [ref=f5e786]:
                - generic [ref=f5e787]:
                  - button "" [ref=f5e788]
                  - button "" [ref=f5e790]
            - row [ref=f5e793] [cursor=pointer]:
              - cell "" [ref=f5e794]:
                - generic [ref=f5e797]:
                  - checkbox "" [ref=f5e798]
                  - generic [ref=f5e799]: 
              - cell "0414" [ref=f5e801]
              - cell "Auto1785572093632 Test" [ref=f5e803]
              - cell "User" [ref=f5e805]
              - cell [ref=f5e807]
              - cell [ref=f5e808]
              - cell [ref=f5e809]
              - cell [ref=f5e810]
              - cell [ref=f5e811]:
                - generic [ref=f5e812]:
                  - button "" [ref=f5e813]
                  - button "" [ref=f5e815]
            - row [ref=f5e818] [cursor=pointer]:
              - cell "" [ref=f5e819]:
                - generic [ref=f5e822]:
                  - checkbox "" [ref=f5e823]
                  - generic [ref=f5e824]: 
              - cell "0416" [ref=f5e826]
              - cell "Auto1785572129579 test" [ref=f5e828]
              - cell "user" [ref=f5e830]
              - cell [ref=f5e832]
              - cell [ref=f5e833]
              - cell [ref=f5e834]
              - cell [ref=f5e835]
              - cell [ref=f5e836]:
                - generic [ref=f5e837]:
                  - button "" [ref=f5e838]
                  - button "" [ref=f5e840]
            - row [ref=f5e843] [cursor=pointer]:
              - cell "" [ref=f5e844]:
                - generic [ref=f5e847]:
                  - checkbox "" [ref=f5e848]
                  - generic [ref=f5e849]: 
              - cell "0415" [ref=f5e851]
              - cell "Auto1785572130542 Test" [ref=f5e853]
              - cell "User" [ref=f5e855]
              - cell [ref=f5e857]
              - cell [ref=f5e858]
              - cell [ref=f5e859]
              - cell [ref=f5e860]
              - cell [ref=f5e861]:
                - generic [ref=f5e862]:
                  - button "" [ref=f5e863]
                  - button "" [ref=f5e865]
            - row [ref=f5e868] [cursor=pointer]:
              - cell "" [ref=f5e869]:
                - generic [ref=f5e872]:
                  - checkbox "" [ref=f5e873]
                  - generic [ref=f5e874]: 
              - cell "0417" [ref=f5e876]
              - cell "Auto1785572163181 updatedTest" [ref=f5e878]
              - cell "updatedUser" [ref=f5e880]
              - cell [ref=f5e882]
              - cell [ref=f5e883]
              - cell [ref=f5e884]
              - cell [ref=f5e885]
              - cell [ref=f5e886]:
                - generic [ref=f5e887]:
                  - button "" [ref=f5e888]
                  - button "" [ref=f5e890]
            - row [ref=f5e893] [cursor=pointer]:
              - cell "" [ref=f5e894]:
                - generic [ref=f5e897]:
                  - checkbox "" [ref=f5e898]
                  - generic [ref=f5e899]: 
              - cell "0418" [ref=f5e901]
              - cell "Auto1785572171040 Test" [ref=f5e903]
              - cell "User" [ref=f5e905]
              - cell [ref=f5e907]
              - cell [ref=f5e908]
              - cell [ref=f5e909]
              - cell [ref=f5e910]
              - cell [ref=f5e911]:
                - generic [ref=f5e912]:
                  - button "" [ref=f5e913]
                  - button "" [ref=f5e915]
            - row [ref=f5e918] [cursor=pointer]:
              - cell "" [ref=f5e919]:
                - generic [ref=f5e922]:
                  - checkbox "" [ref=f5e923]
                  - generic [ref=f5e924]: 
              - cell "0419" [ref=f5e926]
              - cell "Auto1785572178516 Test" [ref=f5e928]
              - cell "User" [ref=f5e930]
              - cell [ref=f5e932]
              - cell [ref=f5e933]
              - cell [ref=f5e934]
              - cell [ref=f5e935]
              - cell [ref=f5e936]:
                - generic [ref=f5e937]:
                  - button "" [ref=f5e938]
                  - button "" [ref=f5e940]
            - row [ref=f5e943] [cursor=pointer]:
              - cell "" [ref=f5e944]:
                - generic [ref=f5e947]:
                  - checkbox "" [ref=f5e948]
                  - generic [ref=f5e949]: 
              - cell "0421" [ref=f5e951]
              - cell "Auto1785572197255 Test" [ref=f5e953]
              - cell "User" [ref=f5e955]
              - cell [ref=f5e957]
              - cell [ref=f5e958]
              - cell [ref=f5e959]
              - cell [ref=f5e960]
              - cell [ref=f5e961]:
                - generic [ref=f5e962]:
                  - button "" [ref=f5e963]
                  - button "" [ref=f5e965]
            - row [ref=f5e968] [cursor=pointer]:
              - cell "" [ref=f5e969]:
                - generic [ref=f5e972]:
                  - checkbox "" [ref=f5e973]
                  - generic [ref=f5e974]: 
              - cell "0422" [ref=f5e976]
              - cell "Auto1785572205071 Test" [ref=f5e978]
              - cell "User" [ref=f5e980]
              - cell [ref=f5e982]
              - cell [ref=f5e983]
              - cell [ref=f5e984]
              - cell [ref=f5e985]
              - cell [ref=f5e986]:
                - generic [ref=f5e987]:
                  - button "" [ref=f5e988]
                  - button "" [ref=f5e990]
            - row [ref=f5e993] [cursor=pointer]:
              - cell "" [ref=f5e994]:
                - generic [ref=f5e997]:
                  - checkbox "" [ref=f5e998]
                  - generic [ref=f5e999]: 
              - cell "0423" [ref=f5e1001]
              - cell "Auto1785572228736 Test" [ref=f5e1003]
              - cell "User" [ref=f5e1005]
              - cell [ref=f5e1007]
              - cell [ref=f5e1008]
              - cell [ref=f5e1009]
              - cell [ref=f5e1010]
              - cell [ref=f5e1011]:
                - generic [ref=f5e1012]:
                  - button "" [ref=f5e1013]
                  - button "" [ref=f5e1015]
            - row [ref=f5e1018] [cursor=pointer]:
              - cell "" [ref=f5e1019]:
                - generic [ref=f5e1022]:
                  - checkbox "" [ref=f5e1023]
                  - generic [ref=f5e1024]: 
              - cell "0428" [ref=f5e1026]
              - cell "Auto1785572325468 Test" [ref=f5e1028]
              - cell "User" [ref=f5e1030]
              - cell [ref=f5e1032]
              - cell [ref=f5e1033]
              - cell [ref=f5e1034]
              - cell [ref=f5e1035]
              - cell [ref=f5e1036]:
                - generic [ref=f5e1037]:
                  - button "" [ref=f5e1038]
                  - button "" [ref=f5e1040]
            - row [ref=f5e1043] [cursor=pointer]:
              - cell "" [ref=f5e1044]:
                - generic [ref=f5e1047]:
                  - checkbox "" [ref=f5e1048]
                  - generic [ref=f5e1049]: 
              - cell "0432" [ref=f5e1051]
              - cell "Auto1785572571302 test" [ref=f5e1053]
              - cell "user" [ref=f5e1055]
              - cell [ref=f5e1057]
              - cell [ref=f5e1058]
              - cell [ref=f5e1059]
              - cell [ref=f5e1060]
              - cell [ref=f5e1061]:
                - generic [ref=f5e1062]:
                  - button "" [ref=f5e1063]
                  - button "" [ref=f5e1065]
            - row [ref=f5e1068] [cursor=pointer]:
              - cell "" [ref=f5e1069]:
                - generic [ref=f5e1072]:
                  - checkbox "" [ref=f5e1073]
                  - generic [ref=f5e1074]: 
              - cell "0433" [ref=f5e1076]
              - cell "Auto1785572613318 Test" [ref=f5e1078]
              - cell "User" [ref=f5e1080]
              - cell [ref=f5e1082]
              - cell [ref=f5e1083]
              - cell [ref=f5e1084]
              - cell [ref=f5e1085]
              - cell [ref=f5e1086]:
                - generic [ref=f5e1087]:
                  - button "" [ref=f5e1088]
                  - button "" [ref=f5e1090]
            - row [ref=f5e1093] [cursor=pointer]:
              - cell "" [ref=f5e1094]:
                - generic [ref=f5e1097]:
                  - checkbox "" [ref=f5e1098]
                  - generic [ref=f5e1099]: 
              - cell "0434" [ref=f5e1101]
              - cell "Auto1785572646561 Test" [ref=f5e1103]
              - cell "User" [ref=f5e1105]
              - cell [ref=f5e1107]
              - cell [ref=f5e1108]
              - cell [ref=f5e1109]
              - cell [ref=f5e1110]
              - cell [ref=f5e1111]:
                - generic [ref=f5e1112]:
                  - button "" [ref=f5e1113]
                  - button "" [ref=f5e1115]
            - row [ref=f5e1118] [cursor=pointer]:
              - cell "" [ref=f5e1119]:
                - generic [ref=f5e1122]:
                  - checkbox "" [ref=f5e1123]
                  - generic [ref=f5e1124]: 
              - cell "0436" [ref=f5e1126]
              - cell "Auto1785572676916 Test" [ref=f5e1128]
              - cell "User" [ref=f5e1130]
              - cell [ref=f5e1132]
              - cell [ref=f5e1133]
              - cell [ref=f5e1134]
              - cell [ref=f5e1135]
              - cell [ref=f5e1136]:
                - generic [ref=f5e1137]:
                  - button "" [ref=f5e1138]
                  - button "" [ref=f5e1140]
            - row [ref=f5e1143] [cursor=pointer]:
              - cell "" [ref=f5e1144]:
                - generic [ref=f5e1147]:
                  - checkbox "" [ref=f5e1148]
                  - generic [ref=f5e1149]: 
              - cell "0441" [ref=f5e1151]
              - cell "Auto1785572727919 test" [ref=f5e1153]
              - cell "user" [ref=f5e1155]
              - cell [ref=f5e1157]
              - cell [ref=f5e1158]
              - cell [ref=f5e1159]
              - cell [ref=f5e1160]
              - cell [ref=f5e1161]:
                - generic [ref=f5e1162]:
                  - button "" [ref=f5e1163]
                  - button "" [ref=f5e1165]
            - row [ref=f5e1168] [cursor=pointer]:
              - cell "" [ref=f5e1169]:
                - generic [ref=f5e1172]:
                  - checkbox "" [ref=f5e1173]
                  - generic [ref=f5e1174]: 
              - cell "0448" [ref=f5e1176]
              - cell "Auto1785572861693 test" [ref=f5e1178]
              - cell "user" [ref=f5e1180]
              - cell [ref=f5e1182]
              - cell [ref=f5e1183]
              - cell [ref=f5e1184]
              - cell [ref=f5e1185]
              - cell [ref=f5e1186]:
                - generic [ref=f5e1187]:
                  - button "" [ref=f5e1188]
                  - button "" [ref=f5e1190]
            - row [ref=f5e1193] [cursor=pointer]:
              - cell "" [ref=f5e1194]:
                - generic [ref=f5e1197]:
                  - checkbox "" [ref=f5e1198]
                  - generic [ref=f5e1199]: 
              - cell "0449" [ref=f5e1201]
              - cell "Auto1785572892202 Test" [ref=f5e1203]
              - cell "User" [ref=f5e1205]
              - cell [ref=f5e1207]
              - cell [ref=f5e1208]
              - cell [ref=f5e1209]
              - cell [ref=f5e1210]
              - cell [ref=f5e1211]:
                - generic [ref=f5e1212]:
                  - button "" [ref=f5e1213]
                  - button "" [ref=f5e1215]
            - row [ref=f5e1218] [cursor=pointer]:
              - cell "" [ref=f5e1219]:
                - generic [ref=f5e1222]:
                  - checkbox "" [ref=f5e1223]
                  - generic [ref=f5e1224]: 
              - cell "0450" [ref=f5e1226]
              - cell "Auto1785572917943 Test" [ref=f5e1228]
              - cell "User" [ref=f5e1230]
              - cell [ref=f5e1232]
              - cell [ref=f5e1233]
              - cell [ref=f5e1234]
              - cell [ref=f5e1235]
              - cell [ref=f5e1236]:
                - generic [ref=f5e1237]:
                  - button "" [ref=f5e1238]
                  - button "" [ref=f5e1240]
            - row [ref=f5e1243] [cursor=pointer]:
              - cell "" [ref=f5e1244]:
                - generic [ref=f5e1247]:
                  - checkbox "" [ref=f5e1248]
                  - generic [ref=f5e1249]: 
              - cell "0452" [ref=f5e1251]
              - cell "Auto1785572989507 test" [ref=f5e1253]
              - cell "user" [ref=f5e1255]
              - cell [ref=f5e1257]
              - cell [ref=f5e1258]
              - cell [ref=f5e1259]
              - cell [ref=f5e1260]
              - cell [ref=f5e1261]:
                - generic [ref=f5e1262]:
                  - button "" [ref=f5e1263]
                  - button "" [ref=f5e1265]
            - row [ref=f5e1268] [cursor=pointer]:
              - cell "" [ref=f5e1269]:
                - generic [ref=f5e1272]:
                  - checkbox "" [ref=f5e1273]
                  - generic [ref=f5e1274]: 
              - cell "0457" [ref=f5e1276]
              - cell "Auto1785573180793 test" [ref=f5e1278]
              - cell "user" [ref=f5e1280]
              - cell [ref=f5e1282]
              - cell [ref=f5e1283]
              - cell [ref=f5e1284]
              - cell [ref=f5e1285]
              - cell [ref=f5e1286]:
                - generic [ref=f5e1287]:
                  - button "" [ref=f5e1288]
                  - button "" [ref=f5e1290]
            - row [ref=f5e1293] [cursor=pointer]:
              - cell "" [ref=f5e1294]:
                - generic [ref=f5e1297]:
                  - checkbox "" [ref=f5e1298]
                  - generic [ref=f5e1299]: 
              - cell "0458" [ref=f5e1301]
              - cell "Auto1785573211120 Test" [ref=f5e1303]
              - cell "User" [ref=f5e1305]
              - cell [ref=f5e1307]
              - cell [ref=f5e1308]
              - cell [ref=f5e1309]
              - cell [ref=f5e1310]
              - cell [ref=f5e1311]:
                - generic [ref=f5e1312]:
                  - button "" [ref=f5e1313]
                  - button "" [ref=f5e1315]
            - row [ref=f5e1318] [cursor=pointer]:
              - cell "" [ref=f5e1319]:
                - generic [ref=f5e1322]:
                  - checkbox "" [ref=f5e1323]
                  - generic [ref=f5e1324]: 
              - cell "0459" [ref=f5e1326]
              - cell "Auto1785573232255 Test" [ref=f5e1328]
              - cell "User" [ref=f5e1330]
              - cell [ref=f5e1332]
              - cell [ref=f5e1333]
              - cell [ref=f5e1334]
              - cell [ref=f5e1335]
              - cell [ref=f5e1336]:
                - generic [ref=f5e1337]:
                  - button "" [ref=f5e1338]
                  - button "" [ref=f5e1340]
            - row [ref=f5e1343] [cursor=pointer]:
              - cell "" [ref=f5e1344]:
                - generic [ref=f5e1347]:
                  - checkbox "" [ref=f5e1348]
                  - generic [ref=f5e1349]: 
              - cell "0461" [ref=f5e1351]
              - cell "Auto1785573283896 Test" [ref=f5e1353]
              - cell "User" [ref=f5e1355]
              - cell [ref=f5e1357]
              - cell [ref=f5e1358]
              - cell [ref=f5e1359]
              - cell [ref=f5e1360]
              - cell [ref=f5e1361]:
                - generic [ref=f5e1362]:
                  - button "" [ref=f5e1363]
                  - button "" [ref=f5e1365]
            - row [ref=f5e1368] [cursor=pointer]:
              - cell "" [ref=f5e1369]:
                - generic [ref=f5e1372]:
                  - checkbox "" [ref=f5e1373]
                  - generic [ref=f5e1374]: 
              - cell "E4XH4FUSVV" [ref=f5e1376]
              - cell "Auto1785574447457 test" [ref=f5e1378]
              - cell "user" [ref=f5e1380]
              - cell [ref=f5e1382]
              - cell [ref=f5e1383]
              - cell [ref=f5e1384]
              - cell [ref=f5e1385]
              - cell [ref=f5e1386]:
                - generic [ref=f5e1387]:
                  - button "" [ref=f5e1388]
                  - button "" [ref=f5e1390]
            - row [ref=f5e1393] [cursor=pointer]:
              - cell "" [ref=f5e1394]:
                - generic [ref=f5e1397]:
                  - checkbox "" [ref=f5e1398]
                  - generic [ref=f5e1399]: 
              - cell "0462" [ref=f5e1401]
              - cell "Auto1785574457872 test" [ref=f5e1403]
              - cell "user" [ref=f5e1405]
              - cell [ref=f5e1407]
              - cell [ref=f5e1408]
              - cell [ref=f5e1409]
              - cell [ref=f5e1410]
              - cell [ref=f5e1411]:
                - generic [ref=f5e1412]:
                  - button "" [ref=f5e1413]
                  - button "" [ref=f5e1415]
            - row [ref=f5e1418] [cursor=pointer]:
              - cell "" [ref=f5e1419]:
                - generic [ref=f5e1422]:
                  - checkbox "" [ref=f5e1423]
                  - generic [ref=f5e1424]: 
              - cell "0465" [ref=f5e1426]
              - cell "Auto1785574464248 Test" [ref=f5e1428]
              - cell "User" [ref=f5e1430]
              - cell [ref=f5e1432]
              - cell [ref=f5e1433]
              - cell [ref=f5e1434]
              - cell [ref=f5e1435]
              - cell [ref=f5e1436]:
                - generic [ref=f5e1437]:
                  - button "" [ref=f5e1438]
                  - button "" [ref=f5e1440]
            - row [ref=f5e1443] [cursor=pointer]:
              - cell "" [ref=f5e1444]:
                - generic [ref=f5e1447]:
                  - checkbox "" [ref=f5e1448]
                  - generic [ref=f5e1449]: 
              - cell "0467" [ref=f5e1451]
              - cell "Auto1785574485977 Test" [ref=f5e1453]
              - cell "User" [ref=f5e1455]
              - cell [ref=f5e1457]
              - cell [ref=f5e1458]
              - cell [ref=f5e1459]
              - cell [ref=f5e1460]
              - cell [ref=f5e1461]:
                - generic [ref=f5e1462]:
                  - button "" [ref=f5e1463]
                  - button "" [ref=f5e1465]
            - row [ref=f5e1468] [cursor=pointer]:
              - cell "" [ref=f5e1469]:
                - generic [ref=f5e1472]:
                  - checkbox "" [ref=f5e1473]
                  - generic [ref=f5e1474]: 
              - cell "E4YHTLN6HB" [ref=f5e1476]
              - cell "Auto1785574490595 Test" [ref=f5e1478]
              - cell "User" [ref=f5e1480]
              - cell [ref=f5e1482]
              - cell [ref=f5e1483]
              - cell [ref=f5e1484]
              - cell [ref=f5e1485]
              - cell [ref=f5e1486]:
                - generic [ref=f5e1487]:
                  - button "" [ref=f5e1488]
                  - button "" [ref=f5e1490]
            - row [ref=f5e1493] [cursor=pointer]:
              - cell "" [ref=f5e1494]:
                - generic [ref=f5e1497]:
                  - checkbox "" [ref=f5e1498]
                  - generic [ref=f5e1499]: 
              - cell "0468" [ref=f5e1501]
              - cell "Auto1785574492054 Test" [ref=f5e1503]
              - cell "User" [ref=f5e1505]
              - cell [ref=f5e1507]
              - cell [ref=f5e1508]
              - cell [ref=f5e1509]
              - cell [ref=f5e1510]
              - cell [ref=f5e1511]:
                - generic [ref=f5e1512]:
                  - button "" [ref=f5e1513]
                  - button "" [ref=f5e1515]
        - navigation "Pagination Navigation" [ref=f5e1518]:
          - list [ref=f5e1519]:
            - listitem [ref=f5e1520]:
              - button "1" [ref=f5e1521] [cursor=pointer]
            - listitem [ref=f5e1522]:
              - button "2" [ref=f5e1523] [cursor=pointer]
            - listitem [ref=f5e1524]:
              - button "3" [ref=f5e1525] [cursor=pointer]
            - listitem [ref=f5e1526]:
              - button "4" [ref=f5e1527] [cursor=pointer]
            - listitem [ref=f5e1528]:
              - button "5" [ref=f5e1529] [cursor=pointer]
            - listitem [ref=f5e1530]:
              - button "" [ref=f5e1531] [cursor=pointer]
    - generic [ref=f5e1533]:
      - paragraph [ref=f5e1534]: OrangeHRM OS 5.9
      - paragraph [ref=f5e1535]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e1536] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  319 |   async addEmployee(details: AddEmployeeDetails): Promise<string> {
  320 |     await this.firstnameInput.fill(details.firstName);
  321 | 
  322 |     if (details.middleName !== undefined) {
  323 |       await this.middlenameInput.fill(details.middleName);
  324 |     }
  325 | 
  326 |     await this.lastnameInput.fill(details.lastName);
  327 | 
  328 |     // Always use a unique ID unless the test provides one.
  329 |     const employeeId = details.employeeId ?? this.generateUniqueEmployeeId();
  330 | 
  331 |     await this.employeeID.fill(employeeId);
  332 |     await this.employeeID.blur();
  333 | 
  334 |     await expect(this.employeeID).toHaveValue(employeeId);
  335 | 
  336 |     // Upload an optional profile picture.
  337 |     if (details.profilePicturePath !== undefined) {
  338 |       const originalImageSource =
  339 |         await this.profilePicturePreview.getAttribute("src");
  340 | 
  341 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  342 | 
  343 |       await expect
  344 |         .poll(async () => this.profilePicturePreview.getAttribute("src"), {
  345 |           timeout: 10_000,
  346 |           message: "Waiting for profile picture preview",
  347 |         })
  348 |         .not.toBe(originalImageSource);
  349 |     }
  350 | 
  351 |     // Save and wait for the Personal Details page.
  352 |     await Promise.all([
  353 |       this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  354 |         timeout: 30_000,
  355 |       }),
  356 |       this.SaveEmployeeButton.click(),
  357 |     ]);
  358 | 
  359 |     await expect(this.personalDetailsHeading).toBeVisible({
  360 |       timeout: 20_000,
  361 |     });
  362 | 
  363 |     await expect(this.loadingSpinner).toBeHidden({
  364 |       timeout: 20_000,
  365 |     });
  366 | 
  367 |     // Verify the saved employee data.
  368 |     await expect(this.firstnameInput).toHaveValue(details.firstName, {
  369 |       timeout: 20_000,
  370 |     });
  371 | 
  372 |     await expect(this.lastnameInput).toHaveValue(details.lastName, {
  373 |       timeout: 20_000,
  374 |     });
  375 | 
  376 |     if (details.middleName !== undefined) {
  377 |       await expect(this.middlenameInput).toHaveValue(details.middleName, {
  378 |         timeout: 20_000,
  379 |       });
  380 |     }
  381 | 
  382 |     await expect(this.employeeID).toHaveValue(employeeId);
  383 | 
  384 |     return employeeId;
  385 |   }
  386 |   async gotoEmployeeList(): Promise<void> {
  387 |     await this.employeeListLink.click();
  388 |   }
  389 | 
  390 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  391 |     if (filters.employeeId !== undefined) {
  392 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  393 |     }
  394 | 
  395 |     if (filters.employeeName !== undefined) {
  396 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  397 | 
  398 |       const matchingOption = this.autocompleteOptions
  399 |         .filter({ hasText: filters.employeeName })
  400 |         .first();
  401 | 
  402 |       await expect(matchingOption).toBeVisible();
  403 |       await matchingOption.click();
  404 |     }
  405 |   }
  406 | 
  407 |   async clickOnFilterSearch(): Promise<void> {
  408 |     await this.filterSearchButton.click();
  409 |   }
  410 | 
  411 |   async verifyEmployeeSearchResult(
  412 |     employeeId: string,
  413 |     firstName: string,
  414 |     lastName: string,
  415 |   ): Promise<void> {
  416 |     await expect(this.loadingSpinner).toBeHidden();
  417 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  418 |     const cells = matchingRow.locator(".oxd-table-cell");
> 419 |     const fullName = await cells.nth(2).innerText();
      |                                         ^ TimeoutError: locator.innerText: Timeout 25000ms exceeded.
  420 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  421 |     await expect(cells.nth(1)).toHaveText(employeeId);
  422 |     expect(actualFirstName).toBe(firstName);
  423 |     await expect(cells.nth(3)).toHaveText(lastName);
  424 |     await expect(this.noRecordsFound).not.toBeVisible();
  425 |   }
  426 | 
  427 |   async verifyNoEmployeeRecordsFound(employeeId: string): Promise<void> {
  428 |     await expect(this.loadingSpinner).toBeHidden();
  429 | 
  430 |     await expect(this.noRecordsFound).toBeVisible();
  431 |     await expect(this.employeeRows).toHaveCount(0);
  432 | 
  433 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  434 |   }
  435 | 
  436 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  437 |     await expect(this.personalDetailsHeading).toBeVisible();
  438 |     //await expect(this.loadingSpinner).toBeHidden();
  439 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  440 | 
  441 |     if (details.middleName !== undefined) {
  442 |       await this.middlenameInput.fill(details.middleName);
  443 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  444 |     }
  445 | 
  446 |     if (details.lastName !== undefined) {
  447 |       await this.lastnameInput.fill(details.lastName);
  448 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  449 |     }
  450 | 
  451 |     const updateResponse = this.page.waitForResponse(
  452 |       (response) =>
  453 |         response.url().includes("/personal-details") &&
  454 |         response.request().method() === "PUT" &&
  455 |         response.ok(),
  456 |       { timeout: 20_000 },
  457 |     );
  458 | 
  459 |     await this.personalDetailsSaveButton.click();
  460 |     await updateResponse;
  461 | 
  462 |     await expect(this.successToast).toContainText("Successfully Updated");
  463 | 
  464 |     //await expect(this.loadingSpinner).toBeHidden();
  465 | 
  466 |     if (details.middleName !== undefined) {
  467 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  468 |     }
  469 | 
  470 |     if (details.lastName !== undefined) {
  471 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  472 |     }
  473 |   }
  474 |   //deleting the Records
  475 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  476 |     await expect(this.loadingSpinner).toBeHidden();
  477 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  478 |     await expect(matchingRow).toHaveCount(1);
  479 |     const deleteButton = matchingRow.locator("button").filter({
  480 |       has: this.page.locator("i.bi-trash"),
  481 |     });
  482 |     await deleteButton.click();
  483 | 
  484 |     const confirmationDilaog = this.page.getByRole("dialog");
  485 |     await expect(confirmationDilaog).toBeVisible();
  486 |     const deleteResponse = this.page.waitForResponse(
  487 |       (response) =>
  488 |         response.url().includes("/api/v2/pim/employees") &&
  489 |         response.request().method() === "DELETE" &&
  490 |         response.ok(),
  491 |       { timeout: 20_000 },
  492 |     );
  493 | 
  494 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  495 | 
  496 |     await deleteResponse;
  497 | 
  498 |     await expect(this.successToast).toContainText("Successfully Deleted");
  499 | 
  500 |     await expect(matchingRow).toHaveCount(0);
  501 |   }
  502 | 
  503 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  504 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  505 | 
  506 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  507 |       timeout: 20_000,
  508 |     });
  509 | 
  510 |     await expect(this.profilePictureValidation).toBeVisible();
  511 | 
  512 |     await expect(this.profilePictureValidation).toContainText(
  513 |       "File type not allowed",
  514 |     );
  515 |   }
  516 | 
  517 |   async getVisibleEmployeeIds(): Promise<string[]> {
  518 |     await expect(this.employeeRows.first()).toBeVisible({
  519 |       timeout: 15_000,
```