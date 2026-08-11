# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> PIM Employee List >> TC_PIM_037 - Admin should cancel employee deletion @negative @delete @regression
- Location: tests\PIM\pim-employee-list.spec.ts:221:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Auto1786431284585511"
Received: "Auto1786431271859326"
```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: John Doe
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Configuration
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - link "Employee List" [ref=f4e136]:
              - /url: "#"
          - listitem [ref=f4e137] [cursor=pointer]:
            - link "Add Employee" [ref=f4e138]:
              - /url: "#"
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Reports" [ref=f4e140]:
              - /url: "#"
          - button "" [ref=f4e142] [cursor=pointer]
  - generic [ref=f4e144]:
    - generic [ref=f4e146]:
      - generic [ref=f4e147]:
        - generic [ref=f4e148]:
          - heading "Employee Information" [level=5] [ref=f4e150]
          - button "" [ref=f4e153] [cursor=pointer]
        - separator [ref=f4e155]
        - generic [ref=f4e157]:
          - generic [ref=f4e159]:
            - generic [ref=f4e161]:
              - generic [ref=f4e162]: Employee Name
              - textbox "Type for hints..." [ref=f4e167]
            - generic [ref=f4e169]:
              - generic [ref=f4e170]: Employee Id
              - textbox [ref=f4e173]: "0498"
            - generic [ref=f4e175]:
              - generic [ref=f4e176]: Employment Status
              - generic [ref=f4e180] [cursor=pointer]:
                - generic [ref=f4e181]: "-- Select --"
                - generic [ref=f4e182]: 
            - generic [ref=f4e185]:
              - generic [ref=f4e186]: Include
              - generic [ref=f4e190] [cursor=pointer]:
                - generic [ref=f4e191]: Current Employees Only
                - generic [ref=f4e192]: 
            - generic [ref=f4e195]:
              - generic [ref=f4e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f4e201]
            - generic [ref=f4e203]:
              - generic [ref=f4e204]: Job Title
              - generic [ref=f4e208] [cursor=pointer]:
                - generic [ref=f4e209]: "-- Select --"
                - generic [ref=f4e210]: 
            - generic [ref=f4e213]:
              - generic [ref=f4e214]: Sub Unit
              - generic [ref=f4e218] [cursor=pointer]:
                - generic [ref=f4e219]: "-- Select --"
                - generic [ref=f4e220]: 
          - separator [ref=f4e222]
          - generic [ref=f4e223]:
            - button "Reset" [ref=f4e224] [cursor=pointer]
            - button "Search" [active] [ref=f4e225] [cursor=pointer]
      - generic [ref=f4e226]:
        - button " Add" [ref=f4e228] [cursor=pointer]:
          - generic [ref=f4e229]: 
          - text: Add
        - generic [ref=f4e230]:
          - separator [ref=f4e231]
          - generic [ref=f4e232]: (211) Records Found
        - table [ref=f4e235]:
          - rowgroup [ref=f4e236]:
            - row [ref=f4e237]:
              - columnheader "" [ref=f4e238]:
                - generic [ref=f4e240] [cursor=pointer]:
                  - checkbox "" [ref=f4e241]
                  - generic [ref=f4e242]: 
              - columnheader "Id " [ref=f4e244]:
                - text: Id
                - generic [ref=f4e245]:
                  - generic [ref=f4e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f4e247]:
                - text: First (& Middle) Name
                - generic [ref=f4e248]:
                  - generic [ref=f4e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f4e250]:
                - text: Last Name
                - generic [ref=f4e251]:
                  - generic [ref=f4e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f4e253]:
                - text: Job Title
                - generic [ref=f4e254]:
                  - generic [ref=f4e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f4e256]:
                - text: Employment Status
                - generic [ref=f4e257]:
                  - generic [ref=f4e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f4e259]:
                - text: Sub Unit
                - generic [ref=f4e260]:
                  - generic [ref=f4e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f4e262]:
                - text: Supervisor
                - generic [ref=f4e263]:
                  - generic [ref=f4e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f4e265]
          - rowgroup [ref=f4e266]:
            - row [ref=f4e268] [cursor=pointer]:
              - cell "" [ref=f4e269]:
                - generic [ref=f4e272]:
                  - checkbox "" [ref=f4e273]
                  - generic [ref=f4e274]: 
              - cell "0295" [ref=f4e276]
              - cell "99N75 425" [ref=f4e278]
              - cell "5TlV" [ref=f4e280]
              - cell [ref=f4e282]
              - cell [ref=f4e283]
              - cell [ref=f4e284]
              - cell [ref=f4e285]
              - cell [ref=f4e286]:
                - generic [ref=f4e287]:
                  - button "" [ref=f4e288]
                  - button "" [ref=f4e290]
            - row [ref=f4e293] [cursor=pointer]:
              - cell "" [ref=f4e294]:
                - generic [ref=f4e297]:
                  - checkbox "" [ref=f4e298]
                  - generic [ref=f4e299]: 
              - cell "0312" [ref=f4e301]
              - cell "A8DCo 4Ys" [ref=f4e303]
              - cell "010Z" [ref=f4e305]
              - cell [ref=f4e307]
              - cell [ref=f4e308]
              - cell [ref=f4e309]
              - cell [ref=f4e310]
              - cell [ref=f4e311]:
                - generic [ref=f4e312]:
                  - button "" [ref=f4e313]
                  - button "" [ref=f4e315]
            - row [ref=f4e318] [cursor=pointer]:
              - cell "" [ref=f4e319]:
                - generic [ref=f4e322]:
                  - checkbox "" [ref=f4e323]
                  - generic [ref=f4e324]: 
              - cell "0469" [ref=f4e326]
              - cell "aaa aa" [ref=f4e328]
              - cell "aaaaa" [ref=f4e330]
              - cell [ref=f4e332]
              - cell [ref=f4e333]
              - cell [ref=f4e334]
              - cell [ref=f4e335]
              - cell [ref=f4e336]:
                - generic [ref=f4e337]:
                  - button "" [ref=f4e338]
                  - button "" [ref=f4e340]
            - row [ref=f4e343] [cursor=pointer]:
              - cell "" [ref=f4e344]:
                - generic [ref=f4e347]:
                  - checkbox "" [ref=f4e348]
                  - generic [ref=f4e349]: 
              - cell "0414" [ref=f4e351]
              - cell "Ali Ahmed" [ref=f4e353]
              - cell "Khan" [ref=f4e355]
              - cell [ref=f4e357]
              - cell [ref=f4e358]
              - cell [ref=f4e359]
              - cell [ref=f4e360]
              - cell [ref=f4e361]:
                - generic [ref=f4e362]:
                  - button "" [ref=f4e363]
                  - button "" [ref=f4e365]
            - row [ref=f4e368] [cursor=pointer]:
              - cell "" [ref=f4e369]:
                - generic [ref=f4e372]:
                  - checkbox "" [ref=f4e373]
                  - generic [ref=f4e374]: 
              - cell "hmZ906" [ref=f4e376]
              - cell "Allison Caprice" [ref=f4e378]
              - cell "Anderson" [ref=f4e380]
              - cell [ref=f4e382]
              - cell [ref=f4e383]
              - cell [ref=f4e384]
              - cell [ref=f4e385]
              - cell [ref=f4e386]:
                - generic [ref=f4e387]:
                  - button "" [ref=f4e388]
                  - button "" [ref=f4e390]
            - row [ref=f4e393] [cursor=pointer]:
              - cell "" [ref=f4e394]:
                - generic [ref=f4e397]:
                  - checkbox "" [ref=f4e398]
                  - generic [ref=f4e399]: 
              - cell "01715" [ref=f4e401]
              - cell "Amelia" [ref=f4e403]
              - cell "Brown" [ref=f4e405]
              - cell [ref=f4e407]
              - cell [ref=f4e408]
              - cell [ref=f4e409]
              - cell [ref=f4e410]
              - cell [ref=f4e411]:
                - generic [ref=f4e412]:
                  - button "" [ref=f4e413]
                  - button "" [ref=f4e415]
            - row [ref=f4e418] [cursor=pointer]:
              - cell "" [ref=f4e419]:
                - generic [ref=f4e422]:
                  - checkbox "" [ref=f4e423]
                  - generic [ref=f4e424]: 
              - cell "245" [ref=f4e426]
              - cell "aniket Ashok" [ref=f4e428]
              - cell "patil" [ref=f4e430]
              - cell [ref=f4e432]
              - cell [ref=f4e433]
              - cell [ref=f4e434]
              - cell [ref=f4e435]
              - cell [ref=f4e436]:
                - generic [ref=f4e437]:
                  - button "" [ref=f4e438]
                  - button "" [ref=f4e440]
            - row [ref=f4e443] [cursor=pointer]:
              - cell "" [ref=f4e444]:
                - generic [ref=f4e447]:
                  - checkbox "" [ref=f4e448]
                  - generic [ref=f4e449]: 
              - cell "0360" [ref=f4e451]
              - cell "aniket t" [ref=f4e453]
              - cell "t" [ref=f4e455]
              - cell [ref=f4e457]
              - cell [ref=f4e458]
              - cell [ref=f4e459]
              - cell [ref=f4e460]
              - cell [ref=f4e461]:
                - generic [ref=f4e462]:
                  - button "" [ref=f4e463]
                  - button "" [ref=f4e465]
            - row [ref=f4e468] [cursor=pointer]:
              - cell "" [ref=f4e469]:
                - generic [ref=f4e472]:
                  - checkbox "" [ref=f4e473]
                  - generic [ref=f4e474]: 
              - cell "0471" [ref=f4e476]
              - cell "Anisa cantikk" [ref=f4e478]
              - cell "Edited" [ref=f4e480]
              - cell [ref=f4e482]
              - cell [ref=f4e483]
              - cell [ref=f4e484]
              - cell [ref=f4e485]
              - cell [ref=f4e486]:
                - generic [ref=f4e487]:
                  - button "" [ref=f4e488]
                  - button "" [ref=f4e490]
            - row [ref=f4e493] [cursor=pointer]:
              - cell "" [ref=f4e494]:
                - generic [ref=f4e497]:
                  - checkbox "" [ref=f4e498]
                  - generic [ref=f4e499]: 
              - cell "0431" [ref=f4e501]
              - cell "Anisa cantikk" [ref=f4e503]
              - cell "Testing" [ref=f4e505]
              - cell [ref=f4e507]
              - cell [ref=f4e508]
              - cell [ref=f4e509]
              - cell [ref=f4e510]
              - cell [ref=f4e511]:
                - generic [ref=f4e512]:
                  - button "" [ref=f4e513]
                  - button "" [ref=f4e515]
            - row [ref=f4e518] [cursor=pointer]:
              - cell "" [ref=f4e519]:
                - generic [ref=f4e522]:
                  - checkbox "" [ref=f4e523]
                  - generic [ref=f4e524]: 
              - cell "0367" [ref=f4e526]
              - cell "Ash J" [ref=f4e528]
              - cell "Tyson" [ref=f4e530]
              - cell [ref=f4e532]
              - cell [ref=f4e533]
              - cell [ref=f4e534]
              - cell [ref=f4e535]
              - cell [ref=f4e536]:
                - generic [ref=f4e537]:
                  - button "" [ref=f4e538]
                  - button "" [ref=f4e540]
            - row [ref=f4e543] [cursor=pointer]:
              - cell "" [ref=f4e544]:
                - generic [ref=f4e547]:
                  - checkbox "" [ref=f4e548]
                  - generic [ref=f4e549]: 
              - cell "0452" [ref=f4e551]
              - cell "Auto" [ref=f4e553]
              - cell "Member" [ref=f4e555]
              - cell [ref=f4e557]
              - cell [ref=f4e558]
              - cell [ref=f4e559]
              - cell [ref=f4e560]
              - cell [ref=f4e561]:
                - generic [ref=f4e562]:
                  - button "" [ref=f4e563]
                  - button "" [ref=f4e565]
            - row [ref=f4e568] [cursor=pointer]:
              - cell "" [ref=f4e569]:
                - generic [ref=f4e572]:
                  - checkbox "" [ref=f4e573]
                  - generic [ref=f4e574]: 
              - cell "0445" [ref=f4e576]
              - cell "Auto" [ref=f4e578]
              - cell "Employee" [ref=f4e580]
              - cell [ref=f4e582]
              - cell [ref=f4e583]
              - cell [ref=f4e584]
              - cell [ref=f4e585]
              - cell [ref=f4e586]:
                - generic [ref=f4e587]:
                  - button "" [ref=f4e588]
                  - button "" [ref=f4e590]
            - row [ref=f4e593] [cursor=pointer]:
              - cell "" [ref=f4e594]:
                - generic [ref=f4e597]:
                  - checkbox "" [ref=f4e598]
                  - generic [ref=f4e599]: 
              - cell "0387" [ref=f4e601]
              - cell "Auto" [ref=f4e603]
              - cell "Member" [ref=f4e605]
              - cell [ref=f4e607]
              - cell [ref=f4e608]
              - cell [ref=f4e609]
              - cell [ref=f4e610]
              - cell [ref=f4e611]:
                - generic [ref=f4e612]:
                  - button "" [ref=f4e613]
                  - button "" [ref=f4e615]
            - row [ref=f4e618] [cursor=pointer]:
              - cell "" [ref=f4e619]:
                - generic [ref=f4e622]:
                  - checkbox "" [ref=f4e623]
                  - generic [ref=f4e624]: 
              - cell "0422" [ref=f4e626]
              - cell "Auto" [ref=f4e628]
              - cell "Employee" [ref=f4e630]
              - cell [ref=f4e632]
              - cell [ref=f4e633]
              - cell [ref=f4e634]
              - cell [ref=f4e635]
              - cell [ref=f4e636]:
                - generic [ref=f4e637]:
                  - button "" [ref=f4e638]
                  - button "" [ref=f4e640]
            - row [ref=f4e643] [cursor=pointer]:
              - cell "" [ref=f4e644]:
                - generic [ref=f4e647]:
                  - checkbox "" [ref=f4e648]
                  - generic [ref=f4e649]: 
              - cell "0400" [ref=f4e651]
              - cell "Auto" [ref=f4e653]
              - cell "Employee" [ref=f4e655]
              - cell [ref=f4e657]
              - cell [ref=f4e658]
              - cell [ref=f4e659]
              - cell [ref=f4e660]
              - cell [ref=f4e661]:
                - generic [ref=f4e662]:
                  - button "" [ref=f4e663]
                  - button "" [ref=f4e665]
            - row [ref=f4e668] [cursor=pointer]:
              - cell "" [ref=f4e669]:
                - generic [ref=f4e672]:
                  - checkbox "" [ref=f4e673]
                  - generic [ref=f4e674]: 
              - cell "0436" [ref=f4e676]
              - cell "Auto" [ref=f4e678]
              - cell "Employee" [ref=f4e680]
              - cell [ref=f4e682]
              - cell [ref=f4e683]
              - cell [ref=f4e684]
              - cell [ref=f4e685]
              - cell [ref=f4e686]:
                - generic [ref=f4e687]:
                  - button "" [ref=f4e688]
                  - button "" [ref=f4e690]
            - row [ref=f4e693] [cursor=pointer]:
              - cell "" [ref=f4e694]:
                - generic [ref=f4e697]:
                  - checkbox "" [ref=f4e698]
                  - generic [ref=f4e699]: 
              - cell "0393" [ref=f4e701]
              - cell "Auto" [ref=f4e703]
              - cell "Member" [ref=f4e705]
              - cell [ref=f4e707]
              - cell [ref=f4e708]
              - cell [ref=f4e709]
              - cell [ref=f4e710]
              - cell [ref=f4e711]:
                - generic [ref=f4e712]:
                  - button "" [ref=f4e713]
                  - button "" [ref=f4e715]
            - row [ref=f4e718] [cursor=pointer]:
              - cell "" [ref=f4e719]:
                - generic [ref=f4e722]:
                  - checkbox "" [ref=f4e723]
                  - generic [ref=f4e724]: 
              - cell "0450" [ref=f4e726]
              - cell "Auto" [ref=f4e728]
              - cell "Employee" [ref=f4e730]
              - cell [ref=f4e732]
              - cell [ref=f4e733]
              - cell [ref=f4e734]
              - cell [ref=f4e735]
              - cell [ref=f4e736]:
                - generic [ref=f4e737]:
                  - button "" [ref=f4e738]
                  - button "" [ref=f4e740]
            - row [ref=f4e743] [cursor=pointer]:
              - cell "" [ref=f4e744]:
                - generic [ref=f4e747]:
                  - checkbox "" [ref=f4e748]
                  - generic [ref=f4e749]: 
              - cell "0386" [ref=f4e751]
              - cell "Auto" [ref=f4e753]
              - cell "Employee" [ref=f4e755]
              - cell [ref=f4e757]
              - cell [ref=f4e758]
              - cell [ref=f4e759]
              - cell [ref=f4e760]
              - cell [ref=f4e761]:
                - generic [ref=f4e762]:
                  - button "" [ref=f4e763]
                  - button "" [ref=f4e765]
            - row [ref=f4e768] [cursor=pointer]:
              - cell "" [ref=f4e769]:
                - generic [ref=f4e772]:
                  - checkbox "" [ref=f4e773]
                  - generic [ref=f4e774]: 
              - cell "0391" [ref=f4e776]
              - cell "Auto" [ref=f4e778]
              - cell "Employee" [ref=f4e780]
              - cell [ref=f4e782]
              - cell [ref=f4e783]
              - cell [ref=f4e784]
              - cell [ref=f4e785]
              - cell [ref=f4e786]:
                - generic [ref=f4e787]:
                  - button "" [ref=f4e788]
                  - button "" [ref=f4e790]
            - row [ref=f4e793] [cursor=pointer]:
              - cell "" [ref=f4e794]:
                - generic [ref=f4e797]:
                  - checkbox "" [ref=f4e798]
                  - generic [ref=f4e799]: 
              - cell "0434" [ref=f4e801]
              - cell "Auto" [ref=f4e803]
              - cell "Member" [ref=f4e805]
              - cell [ref=f4e807]
              - cell [ref=f4e808]
              - cell [ref=f4e809]
              - cell [ref=f4e810]
              - cell [ref=f4e811]:
                - generic [ref=f4e812]:
                  - button "" [ref=f4e813]
                  - button "" [ref=f4e815]
            - row [ref=f4e818] [cursor=pointer]:
              - cell "" [ref=f4e819]:
                - generic [ref=f4e822]:
                  - checkbox "" [ref=f4e823]
                  - generic [ref=f4e824]: 
              - cell "0446" [ref=f4e826]
              - cell "Auto" [ref=f4e828]
              - cell "Member" [ref=f4e830]
              - cell [ref=f4e832]
              - cell [ref=f4e833]
              - cell [ref=f4e834]
              - cell [ref=f4e835]
              - cell [ref=f4e836]:
                - generic [ref=f4e837]:
                  - button "" [ref=f4e838]
                  - button "" [ref=f4e840]
            - row [ref=f4e843] [cursor=pointer]:
              - cell "" [ref=f4e844]:
                - generic [ref=f4e847]:
                  - checkbox "" [ref=f4e848]
                  - generic [ref=f4e849]: 
              - cell "0424" [ref=f4e851]
              - cell "Auto" [ref=f4e853]
              - cell "Member" [ref=f4e855]
              - cell [ref=f4e857]
              - cell [ref=f4e858]
              - cell [ref=f4e859]
              - cell [ref=f4e860]
              - cell [ref=f4e861]:
                - generic [ref=f4e862]:
                  - button "" [ref=f4e863]
                  - button "" [ref=f4e865]
            - row [ref=f4e868] [cursor=pointer]:
              - cell "" [ref=f4e869]:
                - generic [ref=f4e872]:
                  - checkbox "" [ref=f4e873]
                  - generic [ref=f4e874]: 
              - cell "0410" [ref=f4e876]
              - cell "Auto" [ref=f4e878]
              - cell "Member" [ref=f4e880]
              - cell [ref=f4e882]
              - cell [ref=f4e883]
              - cell [ref=f4e884]
              - cell [ref=f4e885]
              - cell [ref=f4e886]:
                - generic [ref=f4e887]:
                  - button "" [ref=f4e888]
                  - button "" [ref=f4e890]
            - row [ref=f4e893] [cursor=pointer]:
              - cell "" [ref=f4e894]:
                - generic [ref=f4e897]:
                  - checkbox "" [ref=f4e898]
                  - generic [ref=f4e899]: 
              - cell "0473" [ref=f4e901]
              - cell "Auto1786430647087781 Test" [ref=f4e903]
              - cell "User" [ref=f4e905]
              - cell [ref=f4e907]
              - cell [ref=f4e908]
              - cell [ref=f4e909]
              - cell [ref=f4e910]
              - cell [ref=f4e911]:
                - generic [ref=f4e912]:
                  - button "" [ref=f4e913]
                  - button "" [ref=f4e915]
            - row [ref=f4e918] [cursor=pointer]:
              - cell "" [ref=f4e919]:
                - generic [ref=f4e922]:
                  - checkbox "" [ref=f4e923]
                  - generic [ref=f4e924]: 
              - cell "0474" [ref=f4e926]
              - cell "Auto1786430666272835 UpdatedTest" [ref=f4e928]
              - cell "UpdatedUser" [ref=f4e930]
              - cell [ref=f4e932]
              - cell [ref=f4e933]
              - cell [ref=f4e934]
              - cell [ref=f4e935]
              - cell [ref=f4e936]:
                - generic [ref=f4e937]:
                  - button "" [ref=f4e938]
                  - button "" [ref=f4e940]
            - row [ref=f4e943] [cursor=pointer]:
              - cell "" [ref=f4e944]:
                - generic [ref=f4e947]:
                  - checkbox "" [ref=f4e948]
                  - generic [ref=f4e949]: 
              - cell "0475" [ref=f4e951]
              - cell "Auto1786430674425298 Test" [ref=f4e953]
              - cell "User" [ref=f4e955]
              - cell [ref=f4e957]
              - cell [ref=f4e958]
              - cell [ref=f4e959]
              - cell [ref=f4e960]
              - cell [ref=f4e961]:
                - generic [ref=f4e962]:
                  - button "" [ref=f4e963]
                  - button "" [ref=f4e965]
            - row [ref=f4e968] [cursor=pointer]:
              - cell "" [ref=f4e969]:
                - generic [ref=f4e972]:
                  - checkbox "" [ref=f4e973]
                  - generic [ref=f4e974]: 
              - cell "0478" [ref=f4e976]
              - cell "Auto1786430823149" [ref=f4e978]
              - cell "User1786430823149" [ref=f4e980]
              - cell [ref=f4e982]
              - cell [ref=f4e983]
              - cell [ref=f4e984]
              - cell [ref=f4e985]
              - cell [ref=f4e986]:
                - generic [ref=f4e987]:
                  - button "" [ref=f4e988]
                  - button "" [ref=f4e990]
            - row [ref=f4e993] [cursor=pointer]:
              - cell "" [ref=f4e994]:
                - generic [ref=f4e997]:
                  - checkbox "" [ref=f4e998]
                  - generic [ref=f4e999]: 
              - cell "0483" [ref=f4e1001]
              - cell "Auto1786430892449" [ref=f4e1003]
              - cell "User1786430892449" [ref=f4e1005]
              - cell [ref=f4e1007]
              - cell [ref=f4e1008]
              - cell [ref=f4e1009]
              - cell [ref=f4e1010]
              - cell [ref=f4e1011]:
                - generic [ref=f4e1012]:
                  - button "" [ref=f4e1013]
                  - button "" [ref=f4e1015]
            - row [ref=f4e1018] [cursor=pointer]:
              - cell "" [ref=f4e1019]:
                - generic [ref=f4e1022]:
                  - checkbox "" [ref=f4e1023]
                  - generic [ref=f4e1024]: 
              - cell "0484" [ref=f4e1026]
              - cell "Auto1786430925507748 Test" [ref=f4e1028]
              - cell "User" [ref=f4e1030]
              - cell [ref=f4e1032]
              - cell [ref=f4e1033]
              - cell [ref=f4e1034]
              - cell [ref=f4e1035]
              - cell [ref=f4e1036]:
                - generic [ref=f4e1037]:
                  - button "" [ref=f4e1038]
                  - button "" [ref=f4e1040]
            - row [ref=f4e1043] [cursor=pointer]:
              - cell "" [ref=f4e1044]:
                - generic [ref=f4e1047]:
                  - checkbox "" [ref=f4e1048]
                  - generic [ref=f4e1049]: 
              - cell "0485" [ref=f4e1051]
              - cell "Auto1786430939895476 Test" [ref=f4e1053]
              - cell "User" [ref=f4e1055]
              - cell [ref=f4e1057]
              - cell [ref=f4e1058]
              - cell [ref=f4e1059]
              - cell [ref=f4e1060]
              - cell [ref=f4e1061]:
                - generic [ref=f4e1062]:
                  - button "" [ref=f4e1063]
                  - button "" [ref=f4e1065]
            - row [ref=f4e1068] [cursor=pointer]:
              - cell "" [ref=f4e1069]:
                - generic [ref=f4e1072]:
                  - checkbox "" [ref=f4e1073]
                  - generic [ref=f4e1074]: 
              - cell "0486" [ref=f4e1076]
              - cell "Auto1786430972906938 UpdatedTest" [ref=f4e1078]
              - cell "UpdatedUser" [ref=f4e1080]
              - cell [ref=f4e1082]
              - cell [ref=f4e1083]
              - cell [ref=f4e1084]
              - cell [ref=f4e1085]
              - cell [ref=f4e1086]:
                - generic [ref=f4e1087]:
                  - button "" [ref=f4e1088]
                  - button "" [ref=f4e1090]
            - row [ref=f4e1093] [cursor=pointer]:
              - cell "" [ref=f4e1094]:
                - generic [ref=f4e1097]:
                  - checkbox "" [ref=f4e1098]
                  - generic [ref=f4e1099]: 
              - cell "0487" [ref=f4e1101]
              - cell "Auto1786431008662282 Test" [ref=f4e1103]
              - cell "User" [ref=f4e1105]
              - cell [ref=f4e1107]
              - cell [ref=f4e1108]
              - cell [ref=f4e1109]
              - cell [ref=f4e1110]
              - cell [ref=f4e1111]:
                - generic [ref=f4e1112]:
                  - button "" [ref=f4e1113]
                  - button "" [ref=f4e1115]
            - row [ref=f4e1118] [cursor=pointer]:
              - cell "" [ref=f4e1119]:
                - generic [ref=f4e1122]:
                  - checkbox "" [ref=f4e1123]
                  - generic [ref=f4e1124]: 
              - cell "0488" [ref=f4e1126]
              - cell "Auto1786431062037255 Test" [ref=f4e1128]
              - cell "User" [ref=f4e1130]
              - cell [ref=f4e1132]
              - cell [ref=f4e1133]
              - cell [ref=f4e1134]
              - cell [ref=f4e1135]
              - cell [ref=f4e1136]:
                - generic [ref=f4e1137]:
                  - button "" [ref=f4e1138]
                  - button "" [ref=f4e1140]
            - row [ref=f4e1143] [cursor=pointer]:
              - cell "" [ref=f4e1144]:
                - generic [ref=f4e1147]:
                  - checkbox "" [ref=f4e1148]
                  - generic [ref=f4e1149]: 
              - cell "0490" [ref=f4e1151]
              - cell "Auto1786431095348483 Test" [ref=f4e1153]
              - cell "User" [ref=f4e1155]
              - cell [ref=f4e1157]
              - cell [ref=f4e1158]
              - cell [ref=f4e1159]
              - cell [ref=f4e1160]
              - cell [ref=f4e1161]:
                - generic [ref=f4e1162]:
                  - button "" [ref=f4e1163]
                  - button "" [ref=f4e1165]
            - row [ref=f4e1168] [cursor=pointer]:
              - cell "" [ref=f4e1169]:
                - generic [ref=f4e1172]:
                  - checkbox "" [ref=f4e1173]
                  - generic [ref=f4e1174]: 
              - cell "0493" [ref=f4e1176]
              - cell "Auto1786431121022117 Test" [ref=f4e1178]
              - cell "User" [ref=f4e1180]
              - cell [ref=f4e1182]
              - cell [ref=f4e1183]
              - cell [ref=f4e1184]
              - cell [ref=f4e1185]
              - cell [ref=f4e1186]:
                - generic [ref=f4e1187]:
                  - button "" [ref=f4e1188]
                  - button "" [ref=f4e1190]
            - row [ref=f4e1193] [cursor=pointer]:
              - cell "" [ref=f4e1194]:
                - generic [ref=f4e1197]:
                  - checkbox "" [ref=f4e1198]
                  - generic [ref=f4e1199]: 
              - cell "0495" [ref=f4e1201]
              - cell "Auto1786431201303541 Test" [ref=f4e1203]
              - cell "User" [ref=f4e1205]
              - cell [ref=f4e1207]
              - cell [ref=f4e1208]
              - cell [ref=f4e1209]
              - cell [ref=f4e1210]
              - cell [ref=f4e1211]:
                - generic [ref=f4e1212]:
                  - button "" [ref=f4e1213]
                  - button "" [ref=f4e1215]
            - row [ref=f4e1218] [cursor=pointer]:
              - cell "" [ref=f4e1219]:
                - generic [ref=f4e1222]:
                  - checkbox "" [ref=f4e1223]
                  - generic [ref=f4e1224]: 
              - cell "0496" [ref=f4e1226]
              - cell "Auto1786431222440562 Test" [ref=f4e1228]
              - cell "User" [ref=f4e1230]
              - cell [ref=f4e1232]
              - cell [ref=f4e1233]
              - cell [ref=f4e1234]
              - cell [ref=f4e1235]
              - cell [ref=f4e1236]:
                - generic [ref=f4e1237]:
                  - button "" [ref=f4e1238]
                  - button "" [ref=f4e1240]
            - row [ref=f4e1243] [cursor=pointer]:
              - cell "" [ref=f4e1244]:
                - generic [ref=f4e1247]:
                  - checkbox "" [ref=f4e1248]
                  - generic [ref=f4e1249]: 
              - cell "0497" [ref=f4e1251]
              - cell "Auto1786431227853796 UpdatedTest" [ref=f4e1253]
              - cell "UpdatedUser" [ref=f4e1255]
              - cell [ref=f4e1257]
              - cell [ref=f4e1258]
              - cell [ref=f4e1259]
              - cell [ref=f4e1260]
              - cell [ref=f4e1261]:
                - generic [ref=f4e1262]:
                  - button "" [ref=f4e1263]
                  - button "" [ref=f4e1265]
            - row [ref=f4e1268] [cursor=pointer]:
              - cell "" [ref=f4e1269]:
                - generic [ref=f4e1272]:
                  - checkbox "" [ref=f4e1273]
                  - generic [ref=f4e1274]: 
              - cell "0498" [ref=f4e1276]
              - cell "Auto1786431271859326 Test" [ref=f4e1278]
              - cell "User" [ref=f4e1280]
              - cell [ref=f4e1282]
              - cell [ref=f4e1283]
              - cell [ref=f4e1284]
              - cell [ref=f4e1285]
              - cell [ref=f4e1286]:
                - generic [ref=f4e1287]:
                  - button "" [ref=f4e1288]
                  - button "" [ref=f4e1290]
            - row [ref=f4e1293] [cursor=pointer]:
              - cell "" [ref=f4e1294]:
                - generic [ref=f4e1297]:
                  - checkbox "" [ref=f4e1298]
                  - generic [ref=f4e1299]: 
              - cell "E63477" [ref=f4e1301]
              - cell "AutoF1786429463477" [ref=f4e1303]
              - cell "AutoL1786429463477" [ref=f4e1305]
              - cell [ref=f4e1307]
              - cell [ref=f4e1308]
              - cell [ref=f4e1309]
              - cell [ref=f4e1310]
              - cell [ref=f4e1311]:
                - generic [ref=f4e1312]:
                  - button "" [ref=f4e1313]
                  - button "" [ref=f4e1315]
            - row [ref=f4e1318] [cursor=pointer]:
              - cell "" [ref=f4e1319]:
                - generic [ref=f4e1322]:
                  - checkbox "" [ref=f4e1323]
                  - generic [ref=f4e1324]: 
              - cell "E70824" [ref=f4e1326]
              - cell "AutoF1786430170824" [ref=f4e1328]
              - cell "AutoL1786430170824" [ref=f4e1330]
              - cell [ref=f4e1332]
              - cell [ref=f4e1333]
              - cell [ref=f4e1334]
              - cell [ref=f4e1335]
              - cell [ref=f4e1336]:
                - generic [ref=f4e1337]:
                  - button "" [ref=f4e1338]
                  - button "" [ref=f4e1340]
            - row [ref=f4e1343] [cursor=pointer]:
              - cell "" [ref=f4e1344]:
                - generic [ref=f4e1347]:
                  - checkbox "" [ref=f4e1348]
                  - generic [ref=f4e1349]: 
              - cell "0418" [ref=f4e1351]
              - cell "Ayesha Fatima" [ref=f4e1353]
              - cell "Siddiqui" [ref=f4e1355]
              - cell [ref=f4e1357]
              - cell [ref=f4e1358]
              - cell [ref=f4e1359]
              - cell [ref=f4e1360]
              - cell [ref=f4e1361]:
                - generic [ref=f4e1362]:
                  - button "" [ref=f4e1363]
                  - button "" [ref=f4e1365]
            - row [ref=f4e1368] [cursor=pointer]:
              - cell "" [ref=f4e1369]:
                - generic [ref=f4e1372]:
                  - checkbox "" [ref=f4e1373]
                  - generic [ref=f4e1374]: 
              - cell "0303" [ref=f4e1376]
              - cell "bala kumar" [ref=f4e1378]
              - cell "ravi" [ref=f4e1380]
              - cell [ref=f4e1382]
              - cell [ref=f4e1383]
              - cell [ref=f4e1384]
              - cell [ref=f4e1385]
              - cell [ref=f4e1386]:
                - generic [ref=f4e1387]:
                  - button "" [ref=f4e1388]
                  - button "" [ref=f4e1390]
            - row [ref=f4e1393] [cursor=pointer]:
              - cell "" [ref=f4e1394]:
                - generic [ref=f4e1397]:
                  - checkbox "" [ref=f4e1398]
                  - generic [ref=f4e1399]: 
              - cell "0419" [ref=f4e1401]
              - cell "Bilal Hassan" [ref=f4e1403]
              - cell "Qureshi" [ref=f4e1405]
              - cell [ref=f4e1407]
              - cell [ref=f4e1408]
              - cell [ref=f4e1409]
              - cell [ref=f4e1410]
              - cell [ref=f4e1411]:
                - generic [ref=f4e1412]:
                  - button "" [ref=f4e1413]
                  - button "" [ref=f4e1415]
            - row [ref=f4e1418] [cursor=pointer]:
              - cell "" [ref=f4e1419]:
                - generic [ref=f4e1422]:
                  - checkbox "" [ref=f4e1423]
                  - generic [ref=f4e1424]: 
              - cell "0292" [ref=f4e1426]
              - cell "bmrtahvwhibmrtahvwhi" [ref=f4e1428]
              - cell "hbfqkhjfqbhbfqkhjfqb" [ref=f4e1430]
              - cell [ref=f4e1432]
              - cell [ref=f4e1433]
              - cell [ref=f4e1434]
              - cell [ref=f4e1435]
              - cell [ref=f4e1436]:
                - generic [ref=f4e1437]:
                  - button "" [ref=f4e1438]
                  - button "" [ref=f4e1440]
            - row [ref=f4e1443] [cursor=pointer]:
              - cell "" [ref=f4e1444]:
                - generic [ref=f4e1447]:
                  - checkbox "" [ref=f4e1448]
                  - generic [ref=f4e1449]: 
              - cell "0320" [ref=f4e1451]
              - cell "Charles" [ref=f4e1453]
              - cell "Carter" [ref=f4e1455]
              - cell [ref=f4e1457]
              - cell [ref=f4e1458]
              - cell [ref=f4e1459]
              - cell [ref=f4e1460]
              - cell [ref=f4e1461]:
                - generic [ref=f4e1462]:
                  - button "" [ref=f4e1463]
                  - button "" [ref=f4e1465]
            - row [ref=f4e1468] [cursor=pointer]:
              - cell "" [ref=f4e1469]:
                - generic [ref=f4e1472]:
                  - checkbox "" [ref=f4e1473]
                  - generic [ref=f4e1474]: 
              - cell "00392" [ref=f4e1476]
              - cell "Charlotte" [ref=f4e1478]
              - cell "Smith" [ref=f4e1480]
              - cell [ref=f4e1482]
              - cell [ref=f4e1483]
              - cell [ref=f4e1484]
              - cell [ref=f4e1485]
              - cell [ref=f4e1486]:
                - generic [ref=f4e1487]:
                  - button "" [ref=f4e1488]
                  - button "" [ref=f4e1490]
            - row [ref=f4e1493] [cursor=pointer]:
              - cell "" [ref=f4e1494]:
                - generic [ref=f4e1497]:
                  - checkbox "" [ref=f4e1498]
                  - generic [ref=f4e1499]: 
              - cell "0363" [ref=f4e1501]
              - cell "Christopher" [ref=f4e1503]
              - cell "Mcmillan" [ref=f4e1505]
              - cell [ref=f4e1507]
              - cell [ref=f4e1508]
              - cell [ref=f4e1509]
              - cell [ref=f4e1510]
              - cell [ref=f4e1511]:
                - generic [ref=f4e1512]:
                  - button "" [ref=f4e1513]
                  - button "" [ref=f4e1515]
        - navigation "Pagination Navigation" [ref=f4e1518]:
          - list [ref=f4e1519]:
            - listitem [ref=f4e1520]:
              - button "1" [ref=f4e1521] [cursor=pointer]
            - listitem [ref=f4e1522]:
              - button "2" [ref=f4e1523] [cursor=pointer]
            - listitem [ref=f4e1524]:
              - button "3" [ref=f4e1525] [cursor=pointer]
            - listitem [ref=f4e1526]:
              - button "4" [ref=f4e1527] [cursor=pointer]
            - listitem [ref=f4e1528]:
              - button "5" [ref=f4e1529] [cursor=pointer]
            - listitem [ref=f4e1530]:
              - button "" [ref=f4e1531] [cursor=pointer]
    - generic [ref=f4e1533]:
      - paragraph [ref=f4e1534]: OrangeHRM OS 5.9
      - paragraph [ref=f4e1535]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e1536] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  336 | // async addEmployee(employee: EmployeeData): Promise<string> {
  337 | //   await this.firstnameInput.fill(employee.firstName);
  338 | 
  339 | //   if (employee.middleName) {
  340 | //     await this.middlenameInput.fill(employee.middleName);
  341 | //   }
  342 | 
  343 | //   await this.lastnameInput.fill(employee.lastName);
  344 | 
  345 | //   /*
  346 | //    * OrangeHRM generates the same next ID when multiple workers
  347 | //    * open Add Employee simultaneously. Override it with a unique ID.
  348 | //    */
  349 | //   const employeeId =
  350 | //     employee.employeeId ??
  351 | //     `${Date.now().toString().slice(-6)}${Math.floor(
  352 | //       Math.random() * 1000
  353 | //     )
  354 | //       .toString()
  355 | //       .padStart(3, "0")}`;
  356 | 
  357 | //   await this.employeeID.fill(employeeId);
  358 | 
  359 | //   await this.SaveEmployeeButton.click();
  360 | 
  361 | //   await expect(this.page).toHaveURL(
  362 | //     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  363 | //     {
  364 | //       timeout: 30_000,
  365 | //     }
  366 | //   );
  367 | 
  368 | //   await expect(this.personalDetailsHeading).toBeVisible({
  369 | //     timeout: 15_000,
  370 | //   });
  371 | 
  372 | //   return employeeId;
  373 | // }
  374 | 
  375 | 
  376 | async addEmployee(data: EmployeeData): Promise<string> {
  377 |   await this.firstnameInput.fill(data.firstName);
  378 | 
  379 |   if (data.middleName !== undefined) {
  380 |     await this.middlenameInput.fill(data.middleName);
  381 |   }
  382 | 
  383 |   await this.lastnameInput.fill(data.lastName);
  384 | 
  385 |   if (data.employeeId !== undefined) {
  386 |     await this.employeeID.fill(data.employeeId);
  387 |   }
  388 | 
  389 |   if (data.profilePicturePath) {
  390 |     await this.profilePictureInput.setInputFiles(
  391 |       data.profilePicturePath,
  392 |     );
  393 |   }
  394 | 
  395 |   await this.SaveEmployeeButton.click();
  396 | 
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
> 436 |     expect(actualFirstName).toBe(firstName);
      |                             ^ Error: expect(received).toBe(expected) // Object.is equality
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
  457 |     await expect(this.loadingSpinner).toBeHidden();
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
  483 |     await expect(this.loadingSpinner).toBeHidden();
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
  497 |     await expect(matchingRow).toHaveCount(1);
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
```