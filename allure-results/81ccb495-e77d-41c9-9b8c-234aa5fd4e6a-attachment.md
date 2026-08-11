# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_069 - Admin should find a newly created employee by name @positive @search @regression
- Location: tests\Admin\admin-users.spec.ts:805:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Name1786433192404270 Test Search' }) to be visible

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
              - paragraph [ref=f4e127]: mandaa Doe
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
              - generic [ref=f4e165]:
                - textbox "Type for hints..." [active] [ref=f4e167]: Name1786433192404270
                - listbox [ref=f4e168]:
                  - option "No Records Found" [ref=f4e169] [cursor=pointer]
            - generic [ref=f4e171]:
              - generic [ref=f4e172]: Employee Id
              - textbox [ref=f4e175]
            - generic [ref=f4e177]:
              - generic [ref=f4e178]: Employment Status
              - generic [ref=f4e182] [cursor=pointer]:
                - generic [ref=f4e183]: "-- Select --"
                - generic [ref=f4e184]: 
            - generic [ref=f4e187]:
              - generic [ref=f4e188]: Include
              - generic [ref=f4e192] [cursor=pointer]:
                - generic [ref=f4e193]: Current Employees Only
                - generic [ref=f4e194]: 
            - generic [ref=f4e197]:
              - generic [ref=f4e198]: Supervisor Name
              - textbox "Type for hints..." [ref=f4e203]
            - generic [ref=f4e205]:
              - generic [ref=f4e206]: Job Title
              - generic [ref=f4e210] [cursor=pointer]:
                - generic [ref=f4e211]: "-- Select --"
                - generic [ref=f4e212]: 
            - generic [ref=f4e215]:
              - generic [ref=f4e216]: Sub Unit
              - generic [ref=f4e220] [cursor=pointer]:
                - generic [ref=f4e221]: "-- Select --"
                - generic [ref=f4e222]: 
          - separator [ref=f4e224]
          - generic [ref=f4e225]:
            - button "Reset" [ref=f4e226] [cursor=pointer]
            - button "Search" [ref=f4e227] [cursor=pointer]
      - generic [ref=f4e228]:
        - button " Add" [ref=f4e230] [cursor=pointer]:
          - generic [ref=f4e231]: 
          - text: Add
        - generic [ref=f4e232]:
          - separator [ref=f4e233]
          - generic [ref=f4e234]: (284) Records Found
        - table [ref=f4e237]:
          - rowgroup [ref=f4e238]:
            - row [ref=f4e239]:
              - columnheader "" [ref=f4e240]:
                - generic [ref=f4e242] [cursor=pointer]:
                  - checkbox "" [ref=f4e243]
                  - generic [ref=f4e244]: 
              - columnheader "Id " [ref=f4e246]:
                - text: Id
                - generic [ref=f4e247]:
                  - generic [ref=f4e248] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f4e249]:
                - text: First (& Middle) Name
                - generic [ref=f4e250]:
                  - generic [ref=f4e251] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f4e252]:
                - text: Last Name
                - generic [ref=f4e253]:
                  - generic [ref=f4e254] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f4e255]:
                - text: Job Title
                - generic [ref=f4e256]:
                  - generic [ref=f4e257] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f4e258]:
                - text: Employment Status
                - generic [ref=f4e259]:
                  - generic [ref=f4e260] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f4e261]:
                - text: Sub Unit
                - generic [ref=f4e262]:
                  - generic [ref=f4e263] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f4e264]:
                - text: Supervisor
                - generic [ref=f4e265]:
                  - generic [ref=f4e266] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f4e267]
          - rowgroup [ref=f4e268]:
            - row [ref=f4e270] [cursor=pointer]:
              - cell "" [ref=f4e271]:
                - generic [ref=f4e274]:
                  - checkbox "" [ref=f4e275]
                  - generic [ref=f4e276]: 
              - cell "403" [ref=f4e278]
              - cell "5cnhtfmx" [ref=f4e280]
              - cell "xgkqp" [ref=f4e282]
              - cell [ref=f4e284]
              - cell [ref=f4e285]
              - cell [ref=f4e286]
              - cell [ref=f4e287]
              - cell [ref=f4e288]:
                - generic [ref=f4e289]:
                  - button "" [ref=f4e290]
                  - button "" [ref=f4e292]
            - row [ref=f4e295] [cursor=pointer]:
              - cell "" [ref=f4e296]:
                - generic [ref=f4e299]:
                  - checkbox "" [ref=f4e300]
                  - generic [ref=f4e301]: 
              - cell "0574" [ref=f4e303]
              - cell "8l0221" [ref=f4e305]
              - cell "7f9722" [ref=f4e307]
              - cell [ref=f4e309]
              - cell [ref=f4e310]
              - cell [ref=f4e311]
              - cell [ref=f4e312]
              - cell [ref=f4e313]:
                - generic [ref=f4e314]:
                  - button "" [ref=f4e315]
                  - button "" [ref=f4e317]
            - row [ref=f4e320] [cursor=pointer]:
              - cell "" [ref=f4e321]:
                - generic [ref=f4e324]:
                  - checkbox "" [ref=f4e325]
                  - generic [ref=f4e326]: 
              - cell "0295" [ref=f4e328]
              - cell "99N75 425" [ref=f4e330]
              - cell "5TlV" [ref=f4e332]
              - cell [ref=f4e334]
              - cell [ref=f4e335]
              - cell [ref=f4e336]
              - cell [ref=f4e337]
              - cell [ref=f4e338]:
                - generic [ref=f4e339]:
                  - button "" [ref=f4e340]
                  - button "" [ref=f4e342]
            - row [ref=f4e345] [cursor=pointer]:
              - cell "" [ref=f4e346]:
                - generic [ref=f4e349]:
                  - checkbox "" [ref=f4e350]
                  - generic [ref=f4e351]: 
              - cell "0312" [ref=f4e353]
              - cell "A8DCo 4Ys" [ref=f4e355]
              - cell "010Z" [ref=f4e357]
              - cell [ref=f4e359]
              - cell [ref=f4e360]
              - cell [ref=f4e361]
              - cell [ref=f4e362]
              - cell [ref=f4e363]:
                - generic [ref=f4e364]:
                  - button "" [ref=f4e365]
                  - button "" [ref=f4e367]
            - row [ref=f4e370] [cursor=pointer]:
              - cell "" [ref=f4e371]:
                - generic [ref=f4e374]:
                  - checkbox "" [ref=f4e375]
                  - generic [ref=f4e376]: 
              - cell "0469" [ref=f4e378]
              - cell "aaa aa" [ref=f4e380]
              - cell "aaaaa" [ref=f4e382]
              - cell [ref=f4e384]
              - cell [ref=f4e385]
              - cell [ref=f4e386]
              - cell [ref=f4e387]
              - cell [ref=f4e388]:
                - generic [ref=f4e389]:
                  - button "" [ref=f4e390]
                  - button "" [ref=f4e392]
            - row [ref=f4e395] [cursor=pointer]:
              - cell "" [ref=f4e396]:
                - generic [ref=f4e399]:
                  - checkbox "" [ref=f4e400]
                  - generic [ref=f4e401]: 
              - cell "0588" [ref=f4e403]
              - cell "Allison" [ref=f4e405]
              - cell "Black7hny" [ref=f4e407]
              - cell [ref=f4e409]
              - cell [ref=f4e410]
              - cell [ref=f4e411]
              - cell [ref=f4e412]
              - cell [ref=f4e413]:
                - generic [ref=f4e414]:
                  - button "" [ref=f4e415]
                  - button "" [ref=f4e417]
            - row [ref=f4e420] [cursor=pointer]:
              - cell "" [ref=f4e421]:
                - generic [ref=f4e424]:
                  - checkbox "" [ref=f4e425]
                  - generic [ref=f4e426]: 
              - cell "hmZ906" [ref=f4e428]
              - cell "Allison Caprice" [ref=f4e430]
              - cell "Anderson" [ref=f4e432]
              - cell [ref=f4e434]
              - cell [ref=f4e435]
              - cell [ref=f4e436]
              - cell [ref=f4e437]
              - cell [ref=f4e438]:
                - generic [ref=f4e439]:
                  - button "" [ref=f4e440]
                  - button "" [ref=f4e442]
            - row [ref=f4e445] [cursor=pointer]:
              - cell "" [ref=f4e446]:
                - generic [ref=f4e449]:
                  - checkbox "" [ref=f4e450]
                  - generic [ref=f4e451]: 
              - cell "01715" [ref=f4e453]
              - cell "Amelia" [ref=f4e455]
              - cell "Brown" [ref=f4e457]
              - cell [ref=f4e459]
              - cell [ref=f4e460]
              - cell [ref=f4e461]
              - cell [ref=f4e462]
              - cell [ref=f4e463]:
                - generic [ref=f4e464]:
                  - button "" [ref=f4e465]
                  - button "" [ref=f4e467]
            - row [ref=f4e470] [cursor=pointer]:
              - cell "" [ref=f4e471]:
                - generic [ref=f4e474]:
                  - checkbox "" [ref=f4e475]
                  - generic [ref=f4e476]: 
              - cell "2345" [ref=f4e478]
              - cell "amjad tammem" [ref=f4e480]
              - cell "assaf" [ref=f4e482]
              - cell "QA Lead" [ref=f4e484]
              - cell "Full-Time Contract" [ref=f4e486]
              - cell "Quality Assurance" [ref=f4e488]
              - cell "aaa aaaaa" [ref=f4e490]
              - cell [ref=f4e492]:
                - generic [ref=f4e493]:
                  - button "" [ref=f4e494]
                  - button "" [ref=f4e496]
            - row [ref=f4e499] [cursor=pointer]:
              - cell "" [ref=f4e500]:
                - generic [ref=f4e503]:
                  - checkbox "" [ref=f4e504]
                  - generic [ref=f4e505]: 
              - cell "245" [ref=f4e507]
              - cell "aniket Ashok" [ref=f4e509]
              - cell "patil" [ref=f4e511]
              - cell [ref=f4e513]
              - cell [ref=f4e514]
              - cell [ref=f4e515]
              - cell [ref=f4e516]
              - cell [ref=f4e517]:
                - generic [ref=f4e518]:
                  - button "" [ref=f4e519]
                  - button "" [ref=f4e521]
            - row [ref=f4e524] [cursor=pointer]:
              - cell "" [ref=f4e525]:
                - generic [ref=f4e528]:
                  - checkbox "" [ref=f4e529]
                  - generic [ref=f4e530]: 
              - cell "0360" [ref=f4e532]
              - cell "aniket t" [ref=f4e534]
              - cell "t" [ref=f4e536]
              - cell [ref=f4e538]
              - cell [ref=f4e539]
              - cell [ref=f4e540]
              - cell [ref=f4e541]
              - cell [ref=f4e542]:
                - generic [ref=f4e543]:
                  - button "" [ref=f4e544]
                  - button "" [ref=f4e546]
            - row [ref=f4e549] [cursor=pointer]:
              - cell "" [ref=f4e550]:
                - generic [ref=f4e553]:
                  - checkbox "" [ref=f4e554]
                  - generic [ref=f4e555]: 
              - cell "886" [ref=f4e557]
              - cell "aniket Ashok" [ref=f4e559]
              - cell "patil" [ref=f4e561]
              - cell [ref=f4e563]
              - cell [ref=f4e564]
              - cell [ref=f4e565]
              - cell [ref=f4e566]
              - cell [ref=f4e567]:
                - generic [ref=f4e568]:
                  - button "" [ref=f4e569]
                  - button "" [ref=f4e571]
            - row [ref=f4e574] [cursor=pointer]:
              - cell "" [ref=f4e575]:
                - generic [ref=f4e578]:
                  - checkbox "" [ref=f4e579]
                  - generic [ref=f4e580]: 
              - cell "0431" [ref=f4e582]
              - cell "Anisa cantikk" [ref=f4e584]
              - cell "Testing" [ref=f4e586]
              - cell [ref=f4e588]
              - cell [ref=f4e589]
              - cell [ref=f4e590]
              - cell [ref=f4e591]
              - cell [ref=f4e592]:
                - generic [ref=f4e593]:
                  - button "" [ref=f4e594]
                  - button "" [ref=f4e596]
            - row [ref=f4e599] [cursor=pointer]:
              - cell "" [ref=f4e600]:
                - generic [ref=f4e603]:
                  - checkbox "" [ref=f4e604]
                  - generic [ref=f4e605]: 
              - cell "0471" [ref=f4e607]
              - cell "Anisa cantikk" [ref=f4e609]
              - cell "Edited" [ref=f4e611]
              - cell [ref=f4e613]
              - cell [ref=f4e614]
              - cell [ref=f4e615]
              - cell [ref=f4e616]
              - cell [ref=f4e617]:
                - generic [ref=f4e618]:
                  - button "" [ref=f4e619]
                  - button "" [ref=f4e621]
            - row [ref=f4e624] [cursor=pointer]:
              - cell "" [ref=f4e625]:
                - generic [ref=f4e628]:
                  - checkbox "" [ref=f4e629]
                  - generic [ref=f4e630]: 
              - cell "0578" [ref=f4e632]
              - cell "Ark" [ref=f4e634]
              - cell "Automation1786432932625" [ref=f4e636]
              - cell [ref=f4e638]
              - cell [ref=f4e639]
              - cell [ref=f4e640]
              - cell [ref=f4e641]
              - cell [ref=f4e642]:
                - generic [ref=f4e643]:
                  - button "" [ref=f4e644]
                  - button "" [ref=f4e646]
            - row [ref=f4e649] [cursor=pointer]:
              - cell "" [ref=f4e650]:
                - generic [ref=f4e653]:
                  - checkbox "" [ref=f4e654]
                  - generic [ref=f4e655]: 
              - cell "0554" [ref=f4e657]
              - cell "Ark" [ref=f4e659]
              - cell "Automation1786432425894" [ref=f4e661]
              - cell [ref=f4e663]
              - cell [ref=f4e664]
              - cell [ref=f4e665]
              - cell [ref=f4e666]
              - cell [ref=f4e667]:
                - generic [ref=f4e668]:
                  - button "" [ref=f4e669]
                  - button "" [ref=f4e671]
            - row [ref=f4e674] [cursor=pointer]:
              - cell "" [ref=f4e675]:
                - generic [ref=f4e678]:
                  - checkbox "" [ref=f4e679]
                  - generic [ref=f4e680]: 
              - cell "0585" [ref=f4e682]
              - cell "Ark" [ref=f4e684]
              - cell "Automation1786433067500" [ref=f4e686]
              - cell [ref=f4e688]
              - cell [ref=f4e689]
              - cell [ref=f4e690]
              - cell [ref=f4e691]
              - cell [ref=f4e692]:
                - generic [ref=f4e693]:
                  - button "" [ref=f4e694]
                  - button "" [ref=f4e696]
            - row [ref=f4e699] [cursor=pointer]:
              - cell "" [ref=f4e700]:
                - generic [ref=f4e703]:
                  - checkbox "" [ref=f4e704]
                  - generic [ref=f4e705]: 
              - cell "0367" [ref=f4e707]
              - cell "Ash J" [ref=f4e709]
              - cell "Tyson" [ref=f4e711]
              - cell [ref=f4e713]
              - cell [ref=f4e714]
              - cell [ref=f4e715]
              - cell [ref=f4e716]
              - cell [ref=f4e717]:
                - generic [ref=f4e718]:
                  - button "" [ref=f4e719]
                  - button "" [ref=f4e721]
            - row [ref=f4e724] [cursor=pointer]:
              - cell "" [ref=f4e725]:
                - generic [ref=f4e728]:
                  - checkbox "" [ref=f4e729]
                  - generic [ref=f4e730]: 
              - cell "0539" [ref=f4e732]
              - cell "Auto" [ref=f4e734]
              - cell "Employee" [ref=f4e736]
              - cell [ref=f4e738]
              - cell [ref=f4e739]
              - cell [ref=f4e740]
              - cell [ref=f4e741]
              - cell [ref=f4e742]:
                - generic [ref=f4e743]:
                  - button "" [ref=f4e744]
                  - button "" [ref=f4e746]
            - row [ref=f4e749] [cursor=pointer]:
              - cell "" [ref=f4e750]:
                - generic [ref=f4e753]:
                  - checkbox "" [ref=f4e754]
                  - generic [ref=f4e755]: 
              - cell "0434" [ref=f4e757]
              - cell "Auto" [ref=f4e759]
              - cell "Member" [ref=f4e761]
              - cell [ref=f4e763]
              - cell [ref=f4e764]
              - cell [ref=f4e765]
              - cell [ref=f4e766]
              - cell [ref=f4e767]:
                - generic [ref=f4e768]:
                  - button "" [ref=f4e769]
                  - button "" [ref=f4e771]
            - row [ref=f4e774] [cursor=pointer]:
              - cell "" [ref=f4e775]:
                - generic [ref=f4e778]:
                  - checkbox "" [ref=f4e779]
                  - generic [ref=f4e780]: 
              - cell "0387" [ref=f4e782]
              - cell "Auto" [ref=f4e784]
              - cell "Member" [ref=f4e786]
              - cell [ref=f4e788]
              - cell [ref=f4e789]
              - cell [ref=f4e790]
              - cell [ref=f4e791]
              - cell [ref=f4e792]:
                - generic [ref=f4e793]:
                  - button "" [ref=f4e794]
                  - button "" [ref=f4e796]
            - row [ref=f4e799] [cursor=pointer]:
              - cell "" [ref=f4e800]:
                - generic [ref=f4e803]:
                  - checkbox "" [ref=f4e804]
                  - generic [ref=f4e805]: 
              - cell "0400" [ref=f4e807]
              - cell "Auto" [ref=f4e809]
              - cell "Employee" [ref=f4e811]
              - cell [ref=f4e813]
              - cell [ref=f4e814]
              - cell [ref=f4e815]
              - cell [ref=f4e816]
              - cell [ref=f4e817]:
                - generic [ref=f4e818]:
                  - button "" [ref=f4e819]
                  - button "" [ref=f4e821]
            - row [ref=f4e824] [cursor=pointer]:
              - cell "" [ref=f4e825]:
                - generic [ref=f4e828]:
                  - checkbox "" [ref=f4e829]
                  - generic [ref=f4e830]: 
              - cell "0393" [ref=f4e832]
              - cell "Auto" [ref=f4e834]
              - cell "Member" [ref=f4e836]
              - cell [ref=f4e838]
              - cell [ref=f4e839]
              - cell [ref=f4e840]
              - cell [ref=f4e841]
              - cell [ref=f4e842]:
                - generic [ref=f4e843]:
                  - button "" [ref=f4e844]
                  - button "" [ref=f4e846]
            - row [ref=f4e849] [cursor=pointer]:
              - cell "" [ref=f4e850]:
                - generic [ref=f4e853]:
                  - checkbox "" [ref=f4e854]
                  - generic [ref=f4e855]: 
              - cell "0386" [ref=f4e857]
              - cell "Auto" [ref=f4e859]
              - cell "Employee" [ref=f4e861]
              - cell [ref=f4e863]
              - cell [ref=f4e864]
              - cell [ref=f4e865]
              - cell [ref=f4e866]
              - cell [ref=f4e867]:
                - generic [ref=f4e868]:
                  - button "" [ref=f4e869]
                  - button "" [ref=f4e871]
            - row [ref=f4e874] [cursor=pointer]:
              - cell "" [ref=f4e875]:
                - generic [ref=f4e878]:
                  - checkbox "" [ref=f4e879]
                  - generic [ref=f4e880]: 
              - cell "0446" [ref=f4e882]
              - cell "Auto" [ref=f4e884]
              - cell "Member" [ref=f4e886]
              - cell [ref=f4e888]
              - cell [ref=f4e889]
              - cell [ref=f4e890]
              - cell [ref=f4e891]
              - cell [ref=f4e892]:
                - generic [ref=f4e893]:
                  - button "" [ref=f4e894]
                  - button "" [ref=f4e896]
            - row [ref=f4e899] [cursor=pointer]:
              - cell "" [ref=f4e900]:
                - generic [ref=f4e903]:
                  - checkbox "" [ref=f4e904]
                  - generic [ref=f4e905]: 
              - cell "0424" [ref=f4e907]
              - cell "Auto" [ref=f4e909]
              - cell "Member" [ref=f4e911]
              - cell [ref=f4e913]
              - cell [ref=f4e914]
              - cell [ref=f4e915]
              - cell [ref=f4e916]
              - cell [ref=f4e917]:
                - generic [ref=f4e918]:
                  - button "" [ref=f4e919]
                  - button "" [ref=f4e921]
            - row [ref=f4e924] [cursor=pointer]:
              - cell "" [ref=f4e925]:
                - generic [ref=f4e928]:
                  - checkbox "" [ref=f4e929]
                  - generic [ref=f4e930]: 
              - cell "0391" [ref=f4e932]
              - cell "Auto" [ref=f4e934]
              - cell "Employee" [ref=f4e936]
              - cell [ref=f4e938]
              - cell [ref=f4e939]
              - cell [ref=f4e940]
              - cell [ref=f4e941]
              - cell [ref=f4e942]:
                - generic [ref=f4e943]:
                  - button "" [ref=f4e944]
                  - button "" [ref=f4e946]
            - row [ref=f4e949] [cursor=pointer]:
              - cell "" [ref=f4e950]:
                - generic [ref=f4e953]:
                  - checkbox "" [ref=f4e954]
                  - generic [ref=f4e955]: 
              - cell "0581" [ref=f4e957]
              - cell "Auto" [ref=f4e959]
              - cell "Member" [ref=f4e961]
              - cell [ref=f4e963]
              - cell [ref=f4e964]
              - cell [ref=f4e965]
              - cell [ref=f4e966]
              - cell [ref=f4e967]:
                - generic [ref=f4e968]:
                  - button "" [ref=f4e969]
                  - button "" [ref=f4e971]
            - row [ref=f4e974] [cursor=pointer]:
              - cell "" [ref=f4e975]:
                - generic [ref=f4e978]:
                  - checkbox "" [ref=f4e979]
                  - generic [ref=f4e980]: 
              - cell "0452" [ref=f4e982]
              - cell "Auto" [ref=f4e984]
              - cell "Member" [ref=f4e986]
              - cell [ref=f4e988]
              - cell [ref=f4e989]
              - cell [ref=f4e990]
              - cell [ref=f4e991]
              - cell [ref=f4e992]:
                - generic [ref=f4e993]:
                  - button "" [ref=f4e994]
                  - button "" [ref=f4e996]
            - row [ref=f4e999] [cursor=pointer]:
              - cell "" [ref=f4e1000]:
                - generic [ref=f4e1003]:
                  - checkbox "" [ref=f4e1004]
                  - generic [ref=f4e1005]: 
              - cell "0445" [ref=f4e1007]
              - cell "Auto" [ref=f4e1009]
              - cell "Employee" [ref=f4e1011]
              - cell [ref=f4e1013]
              - cell [ref=f4e1014]
              - cell [ref=f4e1015]
              - cell [ref=f4e1016]
              - cell [ref=f4e1017]:
                - generic [ref=f4e1018]:
                  - button "" [ref=f4e1019]
                  - button "" [ref=f4e1021]
            - row [ref=f4e1024] [cursor=pointer]:
              - cell "" [ref=f4e1025]:
                - generic [ref=f4e1028]:
                  - checkbox "" [ref=f4e1029]
                  - generic [ref=f4e1030]: 
              - cell "0571" [ref=f4e1032]
              - cell "Auto" [ref=f4e1034]
              - cell "Employee" [ref=f4e1036]
              - cell [ref=f4e1038]
              - cell [ref=f4e1039]
              - cell [ref=f4e1040]
              - cell [ref=f4e1041]
              - cell [ref=f4e1042]:
                - generic [ref=f4e1043]:
                  - button "" [ref=f4e1044]
                  - button "" [ref=f4e1046]
            - row [ref=f4e1049] [cursor=pointer]:
              - cell "" [ref=f4e1050]:
                - generic [ref=f4e1053]:
                  - checkbox "" [ref=f4e1054]
                  - generic [ref=f4e1055]: 
              - cell "0422" [ref=f4e1057]
              - cell "Auto" [ref=f4e1059]
              - cell "Employee" [ref=f4e1061]
              - cell [ref=f4e1063]
              - cell [ref=f4e1064]
              - cell [ref=f4e1065]
              - cell [ref=f4e1066]
              - cell [ref=f4e1067]:
                - generic [ref=f4e1068]:
                  - button "" [ref=f4e1069]
                  - button "" [ref=f4e1071]
            - row [ref=f4e1074] [cursor=pointer]:
              - cell "" [ref=f4e1075]:
                - generic [ref=f4e1078]:
                  - checkbox "" [ref=f4e1079]
                  - generic [ref=f4e1080]: 
              - cell "0436" [ref=f4e1082]
              - cell "Auto" [ref=f4e1084]
              - cell "Employee" [ref=f4e1086]
              - cell [ref=f4e1088]
              - cell [ref=f4e1089]
              - cell [ref=f4e1090]
              - cell [ref=f4e1091]
              - cell [ref=f4e1092]:
                - generic [ref=f4e1093]:
                  - button "" [ref=f4e1094]
                  - button "" [ref=f4e1096]
            - row [ref=f4e1099] [cursor=pointer]:
              - cell "" [ref=f4e1100]:
                - generic [ref=f4e1103]:
                  - checkbox "" [ref=f4e1104]
                  - generic [ref=f4e1105]: 
              - cell "0410" [ref=f4e1107]
              - cell "Auto" [ref=f4e1109]
              - cell "Member" [ref=f4e1111]
              - cell [ref=f4e1113]
              - cell [ref=f4e1114]
              - cell [ref=f4e1115]
              - cell [ref=f4e1116]
              - cell [ref=f4e1117]:
                - generic [ref=f4e1118]:
                  - button "" [ref=f4e1119]
                  - button "" [ref=f4e1121]
            - row [ref=f4e1124] [cursor=pointer]:
              - cell "" [ref=f4e1125]:
                - generic [ref=f4e1128]:
                  - checkbox "" [ref=f4e1129]
                  - generic [ref=f4e1130]: 
              - cell "0450" [ref=f4e1132]
              - cell "Auto" [ref=f4e1134]
              - cell "Employee" [ref=f4e1136]
              - cell [ref=f4e1138]
              - cell [ref=f4e1139]
              - cell [ref=f4e1140]
              - cell [ref=f4e1141]
              - cell [ref=f4e1142]:
                - generic [ref=f4e1143]:
                  - button "" [ref=f4e1144]
                  - button "" [ref=f4e1146]
            - row [ref=f4e1149] [cursor=pointer]:
              - cell "" [ref=f4e1150]:
                - generic [ref=f4e1153]:
                  - checkbox "" [ref=f4e1154]
                  - generic [ref=f4e1155]: 
              - cell "0473" [ref=f4e1157]
              - cell "Auto1786430647087781 Test" [ref=f4e1159]
              - cell "User" [ref=f4e1161]
              - cell [ref=f4e1163]
              - cell [ref=f4e1164]
              - cell [ref=f4e1165]
              - cell [ref=f4e1166]
              - cell [ref=f4e1167]:
                - generic [ref=f4e1168]:
                  - button "" [ref=f4e1169]
                  - button "" [ref=f4e1171]
            - row [ref=f4e1174] [cursor=pointer]:
              - cell "" [ref=f4e1175]:
                - generic [ref=f4e1178]:
                  - checkbox "" [ref=f4e1179]
                  - generic [ref=f4e1180]: 
              - cell "0474" [ref=f4e1182]
              - cell "Auto1786430666272835 UpdatedTest" [ref=f4e1184]
              - cell "UpdatedUser" [ref=f4e1186]
              - cell [ref=f4e1188]
              - cell [ref=f4e1189]
              - cell [ref=f4e1190]
              - cell [ref=f4e1191]
              - cell [ref=f4e1192]:
                - generic [ref=f4e1193]:
                  - button "" [ref=f4e1194]
                  - button "" [ref=f4e1196]
            - row [ref=f4e1199] [cursor=pointer]:
              - cell "" [ref=f4e1200]:
                - generic [ref=f4e1203]:
                  - checkbox "" [ref=f4e1204]
                  - generic [ref=f4e1205]: 
              - cell "0475" [ref=f4e1207]
              - cell "Auto1786430674425298 Test" [ref=f4e1209]
              - cell "User" [ref=f4e1211]
              - cell [ref=f4e1213]
              - cell [ref=f4e1214]
              - cell [ref=f4e1215]
              - cell [ref=f4e1216]
              - cell [ref=f4e1217]:
                - generic [ref=f4e1218]:
                  - button "" [ref=f4e1219]
                  - button "" [ref=f4e1221]
            - row [ref=f4e1224] [cursor=pointer]:
              - cell "" [ref=f4e1225]:
                - generic [ref=f4e1228]:
                  - checkbox "" [ref=f4e1229]
                  - generic [ref=f4e1230]: 
              - cell "0478" [ref=f4e1232]
              - cell "Auto1786430823149" [ref=f4e1234]
              - cell "User1786430823149" [ref=f4e1236]
              - cell [ref=f4e1238]
              - cell [ref=f4e1239]
              - cell [ref=f4e1240]
              - cell [ref=f4e1241]
              - cell [ref=f4e1242]:
                - generic [ref=f4e1243]:
                  - button "" [ref=f4e1244]
                  - button "" [ref=f4e1246]
            - row [ref=f4e1249] [cursor=pointer]:
              - cell "" [ref=f4e1250]:
                - generic [ref=f4e1253]:
                  - checkbox "" [ref=f4e1254]
                  - generic [ref=f4e1255]: 
              - cell "0483" [ref=f4e1257]
              - cell "Auto1786430892449" [ref=f4e1259]
              - cell "User1786430892449" [ref=f4e1261]
              - cell [ref=f4e1263]
              - cell [ref=f4e1264]
              - cell [ref=f4e1265]
              - cell [ref=f4e1266]
              - cell [ref=f4e1267]:
                - generic [ref=f4e1268]:
                  - button "" [ref=f4e1269]
                  - button "" [ref=f4e1271]
            - row [ref=f4e1274] [cursor=pointer]:
              - cell "" [ref=f4e1275]:
                - generic [ref=f4e1278]:
                  - checkbox "" [ref=f4e1279]
                  - generic [ref=f4e1280]: 
              - cell "0484" [ref=f4e1282]
              - cell "Auto1786430925507748 Test" [ref=f4e1284]
              - cell "User" [ref=f4e1286]
              - cell [ref=f4e1288]
              - cell [ref=f4e1289]
              - cell [ref=f4e1290]
              - cell [ref=f4e1291]
              - cell [ref=f4e1292]:
                - generic [ref=f4e1293]:
                  - button "" [ref=f4e1294]
                  - button "" [ref=f4e1296]
            - row [ref=f4e1299] [cursor=pointer]:
              - cell "" [ref=f4e1300]:
                - generic [ref=f4e1303]:
                  - checkbox "" [ref=f4e1304]
                  - generic [ref=f4e1305]: 
              - cell "0485" [ref=f4e1307]
              - cell "Auto1786430939895476 Test" [ref=f4e1309]
              - cell "User" [ref=f4e1311]
              - cell [ref=f4e1313]
              - cell [ref=f4e1314]
              - cell [ref=f4e1315]
              - cell [ref=f4e1316]
              - cell [ref=f4e1317]:
                - generic [ref=f4e1318]:
                  - button "" [ref=f4e1319]
                  - button "" [ref=f4e1321]
            - row [ref=f4e1324] [cursor=pointer]:
              - cell "" [ref=f4e1325]:
                - generic [ref=f4e1328]:
                  - checkbox "" [ref=f4e1329]
                  - generic [ref=f4e1330]: 
              - cell "0486" [ref=f4e1332]
              - cell "Auto1786430972906938 UpdatedTest" [ref=f4e1334]
              - cell "UpdatedUser" [ref=f4e1336]
              - cell [ref=f4e1338]
              - cell [ref=f4e1339]
              - cell [ref=f4e1340]
              - cell [ref=f4e1341]
              - cell [ref=f4e1342]:
                - generic [ref=f4e1343]:
                  - button "" [ref=f4e1344]
                  - button "" [ref=f4e1346]
            - row [ref=f4e1349] [cursor=pointer]:
              - cell "" [ref=f4e1350]:
                - generic [ref=f4e1353]:
                  - checkbox "" [ref=f4e1354]
                  - generic [ref=f4e1355]: 
              - cell "0487" [ref=f4e1357]
              - cell "Auto1786431008662282 Test" [ref=f4e1359]
              - cell "User" [ref=f4e1361]
              - cell [ref=f4e1363]
              - cell [ref=f4e1364]
              - cell [ref=f4e1365]
              - cell [ref=f4e1366]
              - cell [ref=f4e1367]:
                - generic [ref=f4e1368]:
                  - button "" [ref=f4e1369]
                  - button "" [ref=f4e1371]
            - row [ref=f4e1374] [cursor=pointer]:
              - cell "" [ref=f4e1375]:
                - generic [ref=f4e1378]:
                  - checkbox "" [ref=f4e1379]
                  - generic [ref=f4e1380]: 
              - cell "0488" [ref=f4e1382]
              - cell "Auto1786431062037255 Test" [ref=f4e1384]
              - cell "User" [ref=f4e1386]
              - cell [ref=f4e1388]
              - cell [ref=f4e1389]
              - cell [ref=f4e1390]
              - cell [ref=f4e1391]
              - cell [ref=f4e1392]:
                - generic [ref=f4e1393]:
                  - button "" [ref=f4e1394]
                  - button "" [ref=f4e1396]
            - row [ref=f4e1399] [cursor=pointer]:
              - cell "" [ref=f4e1400]:
                - generic [ref=f4e1403]:
                  - checkbox "" [ref=f4e1404]
                  - generic [ref=f4e1405]: 
              - cell "0490" [ref=f4e1407]
              - cell "Auto1786431095348483 Test" [ref=f4e1409]
              - cell "User" [ref=f4e1411]
              - cell [ref=f4e1413]
              - cell [ref=f4e1414]
              - cell [ref=f4e1415]
              - cell [ref=f4e1416]
              - cell [ref=f4e1417]:
                - generic [ref=f4e1418]:
                  - button "" [ref=f4e1419]
                  - button "" [ref=f4e1421]
            - row [ref=f4e1424] [cursor=pointer]:
              - cell "" [ref=f4e1425]:
                - generic [ref=f4e1428]:
                  - checkbox "" [ref=f4e1429]
                  - generic [ref=f4e1430]: 
              - cell "0493" [ref=f4e1432]
              - cell "Auto1786431121022117 Test" [ref=f4e1434]
              - cell "User" [ref=f4e1436]
              - cell [ref=f4e1438]
              - cell [ref=f4e1439]
              - cell [ref=f4e1440]
              - cell [ref=f4e1441]
              - cell [ref=f4e1442]:
                - generic [ref=f4e1443]:
                  - button "" [ref=f4e1444]
                  - button "" [ref=f4e1446]
            - row [ref=f4e1449] [cursor=pointer]:
              - cell "" [ref=f4e1450]:
                - generic [ref=f4e1453]:
                  - checkbox "" [ref=f4e1454]
                  - generic [ref=f4e1455]: 
              - cell "0495" [ref=f4e1457]
              - cell "Auto1786431201303541 Test" [ref=f4e1459]
              - cell "User" [ref=f4e1461]
              - cell [ref=f4e1463]
              - cell [ref=f4e1464]
              - cell [ref=f4e1465]
              - cell [ref=f4e1466]
              - cell [ref=f4e1467]:
                - generic [ref=f4e1468]:
                  - button "" [ref=f4e1469]
                  - button "" [ref=f4e1471]
            - row [ref=f4e1474] [cursor=pointer]:
              - cell "" [ref=f4e1475]:
                - generic [ref=f4e1478]:
                  - checkbox "" [ref=f4e1479]
                  - generic [ref=f4e1480]: 
              - cell "0496" [ref=f4e1482]
              - cell "Auto1786431222440562 Test" [ref=f4e1484]
              - cell "User" [ref=f4e1486]
              - cell [ref=f4e1488]
              - cell [ref=f4e1489]
              - cell [ref=f4e1490]
              - cell [ref=f4e1491]
              - cell [ref=f4e1492]:
                - generic [ref=f4e1493]:
                  - button "" [ref=f4e1494]
                  - button "" [ref=f4e1496]
            - row [ref=f4e1499] [cursor=pointer]:
              - cell "" [ref=f4e1500]:
                - generic [ref=f4e1503]:
                  - checkbox "" [ref=f4e1504]
                  - generic [ref=f4e1505]: 
              - cell "0497" [ref=f4e1507]
              - cell "Auto1786431227853796 UpdatedTest" [ref=f4e1509]
              - cell "UpdatedUser" [ref=f4e1511]
              - cell [ref=f4e1513]
              - cell [ref=f4e1514]
              - cell [ref=f4e1515]
              - cell [ref=f4e1516]
              - cell [ref=f4e1517]:
                - generic [ref=f4e1518]:
                  - button "" [ref=f4e1519]
                  - button "" [ref=f4e1521]
        - navigation "Pagination Navigation" [ref=f4e1524]:
          - list [ref=f4e1525]:
            - listitem [ref=f4e1526]:
              - button "1" [ref=f4e1527] [cursor=pointer]
            - listitem [ref=f4e1528]:
              - button "2" [ref=f4e1529] [cursor=pointer]
            - listitem [ref=f4e1530]:
              - button "3" [ref=f4e1531] [cursor=pointer]
            - listitem [ref=f4e1532]:
              - button "4" [ref=f4e1533] [cursor=pointer]
            - listitem [ref=f4e1534]:
              - button "5" [ref=f4e1535] [cursor=pointer]
            - listitem [ref=f4e1536]:
              - button "" [ref=f4e1537] [cursor=pointer]
    - generic [ref=f4e1539]:
      - paragraph [ref=f4e1540]: OrangeHRM OS 5.9
      - paragraph [ref=f4e1541]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e1542] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  567 | 
  568 |     await expect
  569 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  570 |       .not.toEqual(currentPageIds);
  571 |   }
  572 | 
  573 |   async openEmployeeById(employeeId: string): Promise<void> {
  574 |     const employeeRow = this.employeeRows.filter({
  575 |       has: this.page
  576 |         .locator(".oxd-table-cell")
  577 |         .nth(1)
  578 |         .filter({ hasText: employeeId }),
  579 |     });
  580 | 
  581 |     await expect(employeeRow).toHaveCount(1);
  582 | 
  583 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  584 | 
  585 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  586 |       timeout: 15_000,
  587 |     });
  588 |   }
  589 | 
  590 |   async cancelAddingEmployee(): Promise<void> {
  591 |     expect(this.cancelProfilepageButton).toBeVisible();
  592 |     expect(this.cancelProfilepageButton).toBeEnabled();
  593 |     this.cancelProfilepageButton.click();
  594 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  595 |   }
  596 | 
  597 |   async saveEmployeeWithoutRequiredDetails(
  598 |     details: AddEmployeeDetails,
  599 |   ): Promise<void> {
  600 |     await this.firstnameInput.fill(details.firstName);
  601 | 
  602 |     if (details.middleName !== undefined) {
  603 |       await this.middlenameInput.fill(details.middleName);
  604 |     }
  605 | 
  606 |     await this.lastnameInput.fill(details.lastName);
  607 | 
  608 |     if (details.employeeId !== undefined) {
  609 |       await this.employeeID.fill(details.employeeId);
  610 |     }
  611 | 
  612 |     if (details.profilePicturePath !== undefined) {
  613 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  614 |     }
  615 | 
  616 |     await this.SaveEmployeeButton.click();
  617 |   }
  618 | 
  619 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  620 |     if (details.firstName !== undefined) {
  621 |       await this.firstnameInput.fill(details.firstName);
  622 |     }
  623 | 
  624 |     if (details.middleName !== undefined) {
  625 |       await this.middlenameInput.fill(details.middleName);
  626 |     }
  627 | 
  628 |     if (details.lastName !== undefined) {
  629 |       await this.lastnameInput.fill(details.lastName);
  630 |     }
  631 | 
  632 |     if (details.employeeId !== undefined) {
  633 |       await this.employeeID.fill(details.employeeId);
  634 |       await this.employeeID.blur();
  635 |     }
  636 | 
  637 |     if (details.profilePicturePath !== undefined) {
  638 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  639 |     }
  640 |   }
  641 | 
  642 |   async resetEmployeeFilters(): Promise<void> {
  643 |     const employeeListResponse = this.page.waitForResponse(
  644 |       (response) =>
  645 |         response.url().includes("/api/v2/pim/employees") &&
  646 |         response.request().method() === "GET" &&
  647 |         response.ok(),
  648 |       { timeout: 15_000 },
  649 |     );
  650 | 
  651 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  652 | 
  653 |     await employeeListResponse;
  654 |     await expect(this.loadingSpinner).toBeHidden();
  655 |   }
  656 | 
  657 |   async selectEmployeeFromAutocomplete(
  658 |     partialName: string,
  659 |     expectedFullName: string,
  660 |   ): Promise<void> {
  661 |     await this.employeeNameFilterInput.fill(partialName);
  662 | 
  663 |     const matchingOption = this.page
  664 |       .locator(".oxd-autocomplete-option")
  665 |       .filter({ hasText: expectedFullName });
  666 | 
> 667 |     await matchingOption.waitFor({ state: "visible" });
      |                          ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  668 | 
  669 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  670 |     await matchingOption.click();
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
```