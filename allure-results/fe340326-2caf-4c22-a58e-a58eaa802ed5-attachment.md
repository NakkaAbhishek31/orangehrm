# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression
- Location: tests\PIM\pim-employee-list.spec.ts:195:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 25000ms exceeded.
Call log:
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785605793483 test user' }) to be visible

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
    - banner [ref=f5e105]:
      - generic [ref=f5e106]:
        - generic [ref=f5e107]:
          - text: 
          - heading "PIM" [level=6] [ref=f5e109]
        - link [ref=f5e111]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e112] [cursor=pointer]
        - list [ref=f5e118]:
          - listitem [ref=f5e119]:
            - generic [ref=f5e120] [cursor=pointer]:
              - img "profile picture" [ref=f5e121]
              - paragraph [ref=f5e122]: vineeth M2365
              - generic [ref=f5e123]: 
      - navigation "Topbar Menu" [ref=f5e125]:
        - list [ref=f5e126]:
          - listitem [ref=f5e127] [cursor=pointer]:
            - generic [ref=f5e128]:
              - text: Configuration
              - generic [ref=f5e129]: 
          - listitem [ref=f5e130] [cursor=pointer]:
            - link "Employee List" [ref=f5e131]:
              - /url: "#"
          - listitem [ref=f5e132] [cursor=pointer]:
            - link "Add Employee" [ref=f5e133]:
              - /url: "#"
          - listitem [ref=f5e134] [cursor=pointer]:
            - link "Reports" [ref=f5e135]:
              - /url: "#"
          - button "" [ref=f5e137] [cursor=pointer]
  - generic [ref=f5e139]:
    - generic [ref=f5e141]:
      - generic [ref=f5e142]:
        - generic [ref=f5e143]:
          - heading "Employee Information" [level=5] [ref=f5e145]
          - button "" [ref=f5e148] [cursor=pointer]
        - separator [ref=f5e150]
        - generic [ref=f5e152]:
          - generic [ref=f5e154]:
            - generic [ref=f5e156]:
              - generic [ref=f5e157]: Employee Name
              - generic [ref=f5e160]:
                - textbox "Type for hints..." [active] [ref=f5e162]: Auto1785
                - listbox [ref=f5e163]:
                  - option "Auto1785604569165 updatedTest updatedUser" [ref=f5e164] [cursor=pointer]
                  - option "Auto1785605673216 updatedTest updatedUser" [ref=f5e166] [cursor=pointer]
                  - option "Auto1785605050377 updatedTest updatedUser" [ref=f5e168] [cursor=pointer]
                  - option "Auto1785605601009 Test User" [ref=f5e170] [cursor=pointer]
                  - option "Auto1785605698770 Test User" [ref=f5e172] [cursor=pointer]
            - generic [ref=f5e175]:
              - generic [ref=f5e176]: Employee Id
              - textbox [ref=f5e179]
            - generic [ref=f5e181]:
              - generic [ref=f5e182]: Employment Status
              - generic [ref=f5e186] [cursor=pointer]:
                - generic [ref=f5e187]: "-- Select --"
                - generic [ref=f5e188]: 
            - generic [ref=f5e191]:
              - generic [ref=f5e192]: Include
              - generic [ref=f5e196] [cursor=pointer]:
                - generic [ref=f5e197]: Current Employees Only
                - generic [ref=f5e198]: 
            - generic [ref=f5e201]:
              - generic [ref=f5e202]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e207]
            - generic [ref=f5e209]:
              - generic [ref=f5e210]: Job Title
              - generic [ref=f5e214] [cursor=pointer]:
                - generic [ref=f5e215]: "-- Select --"
                - generic [ref=f5e216]: 
            - generic [ref=f5e219]:
              - generic [ref=f5e220]: Sub Unit
              - generic [ref=f5e224] [cursor=pointer]:
                - generic [ref=f5e225]: "-- Select --"
                - generic [ref=f5e226]: 
          - separator [ref=f5e228]
          - generic [ref=f5e229]:
            - button "Reset" [ref=f5e230] [cursor=pointer]
            - button "Search" [ref=f5e231] [cursor=pointer]
      - generic [ref=f5e232]:
        - button " Add" [ref=f5e234] [cursor=pointer]:
          - generic [ref=f5e235]: 
          - text: Add
        - generic [ref=f5e236]:
          - separator [ref=f5e237]
          - generic [ref=f5e238]: (206) Records Found
        - table [ref=f5e241]:
          - rowgroup [ref=f5e242]:
            - row [ref=f5e243]:
              - columnheader "" [ref=f5e244]:
                - generic [ref=f5e246] [cursor=pointer]:
                  - checkbox "" [ref=f5e247]
                  - generic [ref=f5e248]: 
              - columnheader "Id " [ref=f5e250]:
                - text: Id
                - generic [ref=f5e251]:
                  - generic [ref=f5e252] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e253]:
                - text: First (& Middle) Name
                - generic [ref=f5e254]:
                  - generic [ref=f5e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e256]:
                - text: Last Name
                - generic [ref=f5e257]:
                  - generic [ref=f5e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e259]:
                - text: Job Title
                - generic [ref=f5e260]:
                  - generic [ref=f5e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e262]:
                - text: Employment Status
                - generic [ref=f5e263]:
                  - generic [ref=f5e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e265]:
                - text: Sub Unit
                - generic [ref=f5e266]:
                  - generic [ref=f5e267] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e268]:
                - text: Supervisor
                - generic [ref=f5e269]:
                  - generic [ref=f5e270] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e271]
          - rowgroup [ref=f5e272]:
            - row [ref=f5e274] [cursor=pointer]:
              - cell "" [ref=f5e275]:
                - generic [ref=f5e278]:
                  - checkbox "" [ref=f5e279]
                  - generic [ref=f5e280]: 
              - cell "0123" [ref=f5e282]
              - cell "abc" [ref=f5e284]
              - cell "def" [ref=f5e286]
              - cell [ref=f5e288]
              - cell [ref=f5e289]
              - cell [ref=f5e290]
              - cell [ref=f5e291]
              - cell [ref=f5e292]:
                - generic [ref=f5e293]:
                  - button "" [ref=f5e294]
                  - button "" [ref=f5e296]
            - row [ref=f5e299] [cursor=pointer]:
              - cell "" [ref=f5e300]:
                - generic [ref=f5e303]:
                  - checkbox "" [ref=f5e304]
                  - generic [ref=f5e305]: 
              - cell "0478" [ref=f5e307]
              - cell "Aditya" [ref=f5e309]
              - cell "Gupta" [ref=f5e311]
              - cell [ref=f5e313]
              - cell [ref=f5e314]
              - cell [ref=f5e315]
              - cell [ref=f5e316]
              - cell [ref=f5e317]:
                - generic [ref=f5e318]:
                  - button "" [ref=f5e319]
                  - button "" [ref=f5e321]
            - row [ref=f5e324] [cursor=pointer]:
              - cell "" [ref=f5e325]:
                - generic [ref=f5e328]:
                  - checkbox "" [ref=f5e329]
                  - generic [ref=f5e330]: 
              - cell "83065" [ref=f5e332]
              - cell "Alexander" [ref=f5e334]
              - cell "Jones" [ref=f5e336]
              - cell [ref=f5e338]
              - cell [ref=f5e339]
              - cell [ref=f5e340]
              - cell [ref=f5e341]
              - cell [ref=f5e342]:
                - generic [ref=f5e343]:
                  - button "" [ref=f5e344]
                  - button "" [ref=f5e346]
            - row [ref=f5e349] [cursor=pointer]:
              - cell "" [ref=f5e350]:
                - generic [ref=f5e353]:
                  - checkbox "" [ref=f5e354]
                  - generic [ref=f5e355]: 
              - cell "59894" [ref=f5e357]
              - cell "Alexander" [ref=f5e359]
              - cell "Jones" [ref=f5e361]
              - cell [ref=f5e363]
              - cell [ref=f5e364]
              - cell [ref=f5e365]
              - cell [ref=f5e366]
              - cell [ref=f5e367]:
                - generic [ref=f5e368]:
                  - button "" [ref=f5e369]
                  - button "" [ref=f5e371]
            - row [ref=f5e374] [cursor=pointer]:
              - cell "" [ref=f5e375]:
                - generic [ref=f5e378]:
                  - checkbox "" [ref=f5e379]
                  - generic [ref=f5e380]: 
              - cell "01715" [ref=f5e382]
              - cell "Amelia" [ref=f5e384]
              - cell "Brown" [ref=f5e386]
              - cell [ref=f5e388]
              - cell [ref=f5e389]
              - cell [ref=f5e390]
              - cell [ref=f5e391]
              - cell [ref=f5e392]:
                - generic [ref=f5e393]:
                  - button "" [ref=f5e394]
                  - button "" [ref=f5e396]
            - row [ref=f5e399] [cursor=pointer]:
              - cell "" [ref=f5e400]:
                - generic [ref=f5e403]:
                  - checkbox "" [ref=f5e404]
                  - generic [ref=f5e405]: 
              - cell "0482" [ref=f5e407]
              - cell "Amit" [ref=f5e409]
              - cell "Goyal" [ref=f5e411]
              - cell [ref=f5e413]
              - cell [ref=f5e414]
              - cell [ref=f5e415]
              - cell [ref=f5e416]
              - cell [ref=f5e417]:
                - generic [ref=f5e418]:
                  - button "" [ref=f5e419]
                  - button "" [ref=f5e421]
            - row [ref=f5e424] [cursor=pointer]:
              - cell "" [ref=f5e425]:
                - generic [ref=f5e428]:
                  - checkbox "" [ref=f5e429]
                  - generic [ref=f5e430]: 
              - cell "0360" [ref=f5e432]
              - cell "aniket t" [ref=f5e434]
              - cell "t" [ref=f5e436]
              - cell [ref=f5e438]
              - cell [ref=f5e439]
              - cell [ref=f5e440]
              - cell [ref=f5e441]
              - cell [ref=f5e442]:
                - generic [ref=f5e443]:
                  - button "" [ref=f5e444]
                  - button "" [ref=f5e446]
            - row [ref=f5e449] [cursor=pointer]:
              - cell "" [ref=f5e450]:
                - generic [ref=f5e453]:
                  - checkbox "" [ref=f5e454]
                  - generic [ref=f5e455]: 
              - cell "607" [ref=f5e457]
              - cell "aniket Ashok" [ref=f5e459]
              - cell "patil" [ref=f5e461]
              - cell [ref=f5e463]
              - cell [ref=f5e464]
              - cell [ref=f5e465]
              - cell [ref=f5e466]
              - cell [ref=f5e467]:
                - generic [ref=f5e468]:
                  - button "" [ref=f5e469]
                  - button "" [ref=f5e471]
            - row [ref=f5e474] [cursor=pointer]:
              - cell "" [ref=f5e475]:
                - generic [ref=f5e478]:
                  - checkbox "" [ref=f5e479]
                  - generic [ref=f5e480]: 
              - cell "933" [ref=f5e482]
              - cell "aniket Ashok" [ref=f5e484]
              - cell "patil" [ref=f5e486]
              - cell [ref=f5e488]
              - cell [ref=f5e489]
              - cell [ref=f5e490]
              - cell [ref=f5e491]
              - cell [ref=f5e492]:
                - generic [ref=f5e493]:
                  - button "" [ref=f5e494]
                  - button "" [ref=f5e496]
            - row [ref=f5e499] [cursor=pointer]:
              - cell "" [ref=f5e500]:
                - generic [ref=f5e503]:
                  - checkbox "" [ref=f5e504]
                  - generic [ref=f5e505]: 
              - cell "0393s" [ref=f5e507]
              - cell "as as" [ref=f5e509]
              - cell "as" [ref=f5e511]
              - cell [ref=f5e513]
              - cell [ref=f5e514]
              - cell [ref=f5e515]
              - cell [ref=f5e516]
              - cell [ref=f5e517]:
                - generic [ref=f5e518]:
                  - button "" [ref=f5e519]
                  - button "" [ref=f5e521]
            - row [ref=f5e524] [cursor=pointer]:
              - cell "" [ref=f5e525]:
                - generic [ref=f5e528]:
                  - checkbox "" [ref=f5e529]
                  - generic [ref=f5e530]: 
              - cell "0465s" [ref=f5e532]
              - cell "as as" [ref=f5e534]
              - cell "as" [ref=f5e536]
              - cell [ref=f5e538]
              - cell [ref=f5e539]
              - cell [ref=f5e540]
              - cell [ref=f5e541]
              - cell [ref=f5e542]:
                - generic [ref=f5e543]:
                  - button "" [ref=f5e544]
                  - button "" [ref=f5e546]
            - row [ref=f5e549] [cursor=pointer]:
              - cell "" [ref=f5e550]:
                - generic [ref=f5e553]:
                  - checkbox "" [ref=f5e554]
                  - generic [ref=f5e555]: 
              - cell "0466" [ref=f5e557]
              - cell "Ash M" [ref=f5e559]
              - cell "Dup" [ref=f5e561]
              - cell [ref=f5e563]
              - cell [ref=f5e564]
              - cell [ref=f5e565]
              - cell [ref=f5e566]
              - cell [ref=f5e567]:
                - generic [ref=f5e568]:
                  - button "" [ref=f5e569]
                  - button "" [ref=f5e571]
            - row [ref=f5e574] [cursor=pointer]:
              - cell "" [ref=f5e575]:
                - generic [ref=f5e578]:
                  - checkbox "" [ref=f5e579]
                  - generic [ref=f5e580]: 
              - cell "0367" [ref=f5e582]
              - cell "Ash J" [ref=f5e584]
              - cell "Tyson" [ref=f5e586]
              - cell [ref=f5e588]
              - cell [ref=f5e589]
              - cell [ref=f5e590]
              - cell [ref=f5e591]
              - cell [ref=f5e592]:
                - generic [ref=f5e593]:
                  - button "" [ref=f5e594]
                  - button "" [ref=f5e596]
            - row [ref=f5e599] [cursor=pointer]:
              - cell "" [ref=f5e600]:
                - generic [ref=f5e603]:
                  - checkbox "" [ref=f5e604]
                  - generic [ref=f5e605]: 
              - cell "04861" [ref=f5e607]
              - cell "Ash M" [ref=f5e609]
              - cell "Dup" [ref=f5e611]
              - cell [ref=f5e613]
              - cell [ref=f5e614]
              - cell [ref=f5e615]
              - cell [ref=f5e616]
              - cell [ref=f5e617]:
                - generic [ref=f5e618]:
                  - button "" [ref=f5e619]
                  - button "" [ref=f5e621]
            - row [ref=f5e624] [cursor=pointer]:
              - cell "" [ref=f5e625]:
                - generic [ref=f5e628]:
                  - checkbox "" [ref=f5e629]
                  - generic [ref=f5e630]: 
              - cell "EMV5A5H20S" [ref=f5e632]
              - cell "Auto1785604568791 Test" [ref=f5e634]
              - cell "User" [ref=f5e636]
              - cell [ref=f5e638]
              - cell [ref=f5e639]
              - cell [ref=f5e640]
              - cell [ref=f5e641]
              - cell [ref=f5e642]:
                - generic [ref=f5e643]:
                  - button "" [ref=f5e644]
                  - button "" [ref=f5e646]
            - row [ref=f5e649] [cursor=pointer]:
              - cell "" [ref=f5e650]:
                - generic [ref=f5e653]:
                  - checkbox "" [ref=f5e654]
                  - generic [ref=f5e655]: 
              - cell "EMV8R8Y963" [ref=f5e657]
              - cell "Auto1785604569165 updatedTest" [ref=f5e659]
              - cell "updatedUser" [ref=f5e661]
              - cell [ref=f5e663]
              - cell [ref=f5e664]
              - cell [ref=f5e665]
              - cell [ref=f5e666]
              - cell [ref=f5e667]:
                - generic [ref=f5e668]:
                  - button "" [ref=f5e669]
                  - button "" [ref=f5e671]
            - row [ref=f5e674] [cursor=pointer]:
              - cell "" [ref=f5e675]:
                - generic [ref=f5e678]:
                  - checkbox "" [ref=f5e679]
                  - generic [ref=f5e680]: 
              - cell "EMVB88JKY0" [ref=f5e682]
              - cell "Auto1785604580732 Test" [ref=f5e684]
              - cell "User" [ref=f5e686]
              - cell [ref=f5e688]
              - cell [ref=f5e689]
              - cell [ref=f5e690]
              - cell [ref=f5e691]
              - cell [ref=f5e692]:
                - generic [ref=f5e693]:
                  - button "" [ref=f5e694]
                  - button "" [ref=f5e696]
            - row [ref=f5e699] [cursor=pointer]:
              - cell "" [ref=f5e700]:
                - generic [ref=f5e703]:
                  - checkbox "" [ref=f5e704]
                  - generic [ref=f5e705]: 
              - cell "EMVTM2LQ6I" [ref=f5e707]
              - cell "Auto1785604599327 Test" [ref=f5e709]
              - cell "User" [ref=f5e711]
              - cell [ref=f5e713]
              - cell [ref=f5e714]
              - cell [ref=f5e715]
              - cell [ref=f5e716]
              - cell [ref=f5e717]:
                - generic [ref=f5e718]:
                  - button "" [ref=f5e719]
                  - button "" [ref=f5e721]
            - row [ref=f5e724] [cursor=pointer]:
              - cell "" [ref=f5e725]:
                - generic [ref=f5e728]:
                  - checkbox "" [ref=f5e729]
                  - generic [ref=f5e730]: 
              - cell "EMWY9MJT34" [ref=f5e732]
              - cell "Auto1785604657799 test" [ref=f5e734]
              - cell "user" [ref=f5e736]
              - cell [ref=f5e738]
              - cell [ref=f5e739]
              - cell [ref=f5e740]
              - cell [ref=f5e741]
              - cell [ref=f5e742]:
                - generic [ref=f5e743]:
                  - button "" [ref=f5e744]
                  - button "" [ref=f5e746]
            - row [ref=f5e749] [cursor=pointer]:
              - cell "" [ref=f5e750]:
                - generic [ref=f5e753]:
                  - checkbox "" [ref=f5e754]
                  - generic [ref=f5e755]: 
              - cell "0458" [ref=f5e757]
              - cell "Auto1785604709617 Test" [ref=f5e759]
              - cell "User" [ref=f5e761]
              - cell [ref=f5e763]
              - cell [ref=f5e764]
              - cell [ref=f5e765]
              - cell [ref=f5e766]
              - cell [ref=f5e767]:
                - generic [ref=f5e768]:
                  - button "" [ref=f5e769]
                  - button "" [ref=f5e771]
            - row [ref=f5e774] [cursor=pointer]:
              - cell "" [ref=f5e775]:
                - generic [ref=f5e778]:
                  - checkbox "" [ref=f5e779]
                  - generic [ref=f5e780]: 
              - cell "0461" [ref=f5e782]
              - cell "Auto1785604801710 Test" [ref=f5e784]
              - cell "User" [ref=f5e786]
              - cell [ref=f5e788]
              - cell [ref=f5e789]
              - cell [ref=f5e790]
              - cell [ref=f5e791]
              - cell [ref=f5e792]:
                - generic [ref=f5e793]:
                  - button "" [ref=f5e794]
                  - button "" [ref=f5e796]
            - row [ref=f5e799] [cursor=pointer]:
              - cell "" [ref=f5e800]:
                - generic [ref=f5e803]:
                  - checkbox "" [ref=f5e804]
                  - generic [ref=f5e805]: 
              - cell "0462" [ref=f5e807]
              - cell "Auto1785604834191 Test" [ref=f5e809]
              - cell "User" [ref=f5e811]
              - cell [ref=f5e813]
              - cell [ref=f5e814]
              - cell [ref=f5e815]
              - cell [ref=f5e816]
              - cell [ref=f5e817]:
                - generic [ref=f5e818]:
                  - button "" [ref=f5e819]
                  - button "" [ref=f5e821]
            - row [ref=f5e824] [cursor=pointer]:
              - cell "" [ref=f5e825]:
                - generic [ref=f5e828]:
                  - checkbox "" [ref=f5e829]
                  - generic [ref=f5e830]: 
              - cell "EN51EP5KA3" [ref=f5e832]
              - cell "Auto1785605032244 test" [ref=f5e834]
              - cell "user" [ref=f5e836]
              - cell [ref=f5e838]
              - cell [ref=f5e839]
              - cell [ref=f5e840]
              - cell [ref=f5e841]
              - cell [ref=f5e842]:
                - generic [ref=f5e843]:
                  - button "" [ref=f5e844]
                  - button "" [ref=f5e846]
            - row [ref=f5e849] [cursor=pointer]:
              - cell "" [ref=f5e850]:
                - generic [ref=f5e853]:
                  - checkbox "" [ref=f5e854]
                  - generic [ref=f5e855]: 
              - cell "EN5D694ETM" [ref=f5e857]
              - cell "Auto1785605050377 updatedTest" [ref=f5e859]
              - cell "updatedUser" [ref=f5e861]
              - cell [ref=f5e863]
              - cell [ref=f5e864]
              - cell [ref=f5e865]
              - cell [ref=f5e866]
              - cell [ref=f5e867]:
                - generic [ref=f5e868]:
                  - button "" [ref=f5e869]
                  - button "" [ref=f5e871]
            - row [ref=f5e874] [cursor=pointer]:
              - cell "" [ref=f5e875]:
                - generic [ref=f5e878]:
                  - checkbox "" [ref=f5e879]
                  - generic [ref=f5e880]: 
              - cell "0485" [ref=f5e882]
              - cell "Auto1785605564885 Test" [ref=f5e884]
              - cell "User" [ref=f5e886]
              - cell [ref=f5e888]
              - cell [ref=f5e889]
              - cell [ref=f5e890]
              - cell [ref=f5e891]
              - cell [ref=f5e892]:
                - generic [ref=f5e893]:
                  - button "" [ref=f5e894]
                  - button "" [ref=f5e896]
            - row [ref=f5e899] [cursor=pointer]:
              - cell "" [ref=f5e900]:
                - generic [ref=f5e903]:
                  - checkbox "" [ref=f5e904]
                  - generic [ref=f5e905]: 
              - cell "0488" [ref=f5e907]
              - cell "Auto1785605601009 Test" [ref=f5e909]
              - cell "User" [ref=f5e911]
              - cell [ref=f5e913]
              - cell [ref=f5e914]
              - cell [ref=f5e915]
              - cell [ref=f5e916]
              - cell [ref=f5e917]:
                - generic [ref=f5e918]:
                  - button "" [ref=f5e919]
                  - button "" [ref=f5e921]
            - row [ref=f5e924] [cursor=pointer]:
              - cell "" [ref=f5e925]:
                - generic [ref=f5e928]:
                  - checkbox "" [ref=f5e929]
                  - generic [ref=f5e930]: 
              - cell "0494" [ref=f5e932]
              - cell "Auto1785605631029 Test" [ref=f5e934]
              - cell "User" [ref=f5e936]
              - cell [ref=f5e938]
              - cell [ref=f5e939]
              - cell [ref=f5e940]
              - cell [ref=f5e941]
              - cell [ref=f5e942]:
                - generic [ref=f5e943]:
                  - button "" [ref=f5e944]
                  - button "" [ref=f5e946]
            - row [ref=f5e949] [cursor=pointer]:
              - cell "" [ref=f5e950]:
                - generic [ref=f5e953]:
                  - checkbox "" [ref=f5e954]
                  - generic [ref=f5e955]: 
              - cell "ENIC9G7BR7" [ref=f5e957]
              - cell "Auto1785605645539 test" [ref=f5e959]
              - cell "user" [ref=f5e961]
              - cell [ref=f5e963]
              - cell [ref=f5e964]
              - cell [ref=f5e965]
              - cell [ref=f5e966]
              - cell [ref=f5e967]:
                - generic [ref=f5e968]:
                  - button "" [ref=f5e969]
                  - button "" [ref=f5e971]
            - row [ref=f5e974] [cursor=pointer]:
              - cell "" [ref=f5e975]:
                - generic [ref=f5e978]:
                  - checkbox "" [ref=f5e979]
                  - generic [ref=f5e980]: 
              - cell "ENI767OAFL" [ref=f5e982]
              - cell "Auto1785605645545 test" [ref=f5e984]
              - cell "user" [ref=f5e986]
              - cell [ref=f5e988]
              - cell [ref=f5e989]
              - cell [ref=f5e990]
              - cell [ref=f5e991]
              - cell [ref=f5e992]:
                - generic [ref=f5e993]:
                  - button "" [ref=f5e994]
                  - button "" [ref=f5e996]
            - row [ref=f5e999] [cursor=pointer]:
              - cell "" [ref=f5e1000]:
                - generic [ref=f5e1003]:
                  - checkbox "" [ref=f5e1004]
                  - generic [ref=f5e1005]: 
              - cell "ENIVVE0R9M" [ref=f5e1007]
              - cell "Auto1785605673216 updatedTest" [ref=f5e1009]
              - cell "updatedUser" [ref=f5e1011]
              - cell [ref=f5e1013]
              - cell [ref=f5e1014]
              - cell [ref=f5e1015]
              - cell [ref=f5e1016]
              - cell [ref=f5e1017]:
                - generic [ref=f5e1018]:
                  - button "" [ref=f5e1019]
                  - button "" [ref=f5e1021]
            - row [ref=f5e1024] [cursor=pointer]:
              - cell "" [ref=f5e1025]:
                - generic [ref=f5e1028]:
                  - checkbox "" [ref=f5e1029]
                  - generic [ref=f5e1030]: 
              - cell "ENJ758PVYI" [ref=f5e1032]
              - cell "Auto1785605693802 Test" [ref=f5e1034]
              - cell "User" [ref=f5e1036]
              - cell [ref=f5e1038]
              - cell [ref=f5e1039]
              - cell [ref=f5e1040]
              - cell [ref=f5e1041]
              - cell [ref=f5e1042]:
                - generic [ref=f5e1043]:
                  - button "" [ref=f5e1044]
                  - button "" [ref=f5e1046]
            - row [ref=f5e1049] [cursor=pointer]:
              - cell "" [ref=f5e1050]:
                - generic [ref=f5e1053]:
                  - checkbox "" [ref=f5e1054]
                  - generic [ref=f5e1055]: 
              - cell "ENJBDH2BS6" [ref=f5e1057]
              - cell "Auto1785605698770 Test" [ref=f5e1059]
              - cell "User" [ref=f5e1061]
              - cell [ref=f5e1063]
              - cell [ref=f5e1064]
              - cell [ref=f5e1065]
              - cell [ref=f5e1066]
              - cell [ref=f5e1067]:
                - generic [ref=f5e1068]:
                  - button "" [ref=f5e1069]
                  - button "" [ref=f5e1071]
            - row [ref=f5e1074] [cursor=pointer]:
              - cell "" [ref=f5e1075]:
                - generic [ref=f5e1078]:
                  - checkbox "" [ref=f5e1079]
                  - generic [ref=f5e1080]: 
              - cell "ENK0BN437B" [ref=f5e1082]
              - cell "Auto1785605720620 Test" [ref=f5e1084]
              - cell "User" [ref=f5e1086]
              - cell [ref=f5e1088]
              - cell [ref=f5e1089]
              - cell [ref=f5e1090]
              - cell [ref=f5e1091]
              - cell [ref=f5e1092]:
                - generic [ref=f5e1093]:
                  - button "" [ref=f5e1094]
                  - button "" [ref=f5e1096]
            - row [ref=f5e1099] [cursor=pointer]:
              - cell "" [ref=f5e1100]:
                - generic [ref=f5e1103]:
                  - checkbox "" [ref=f5e1104]
                  - generic [ref=f5e1105]: 
              - cell "ENKCMJZO7R" [ref=f5e1107]
              - cell "Auto1785605747342 test" [ref=f5e1109]
              - cell "user" [ref=f5e1111]
              - cell [ref=f5e1113]
              - cell [ref=f5e1114]
              - cell [ref=f5e1115]
              - cell [ref=f5e1116]
              - cell [ref=f5e1117]:
                - generic [ref=f5e1118]:
                  - button "" [ref=f5e1119]
                  - button "" [ref=f5e1121]
            - row [ref=f5e1124] [cursor=pointer]:
              - cell "" [ref=f5e1125]:
                - generic [ref=f5e1128]:
                  - checkbox "" [ref=f5e1129]
                  - generic [ref=f5e1130]: 
              - cell "ENKZU9EMWP" [ref=f5e1132]
              - cell "Auto1785605778272 Test" [ref=f5e1134]
              - cell "User" [ref=f5e1136]
              - cell [ref=f5e1138]
              - cell [ref=f5e1139]
              - cell [ref=f5e1140]
              - cell [ref=f5e1141]
              - cell [ref=f5e1142]:
                - generic [ref=f5e1143]:
                  - button "" [ref=f5e1144]
                  - button "" [ref=f5e1146]
            - row [ref=f5e1149] [cursor=pointer]:
              - cell "" [ref=f5e1150]:
                - generic [ref=f5e1153]:
                  - checkbox "" [ref=f5e1154]
                  - generic [ref=f5e1155]: 
              - cell "ENLB2Q9DJA" [ref=f5e1157]
              - cell "Auto1785605793483 test" [ref=f5e1159]
              - cell "user" [ref=f5e1161]
              - cell [ref=f5e1163]
              - cell [ref=f5e1164]
              - cell [ref=f5e1165]
              - cell [ref=f5e1166]
              - cell [ref=f5e1167]:
                - generic [ref=f5e1168]:
                  - button "" [ref=f5e1169]
                  - button "" [ref=f5e1171]
            - row [ref=f5e1174] [cursor=pointer]:
              - cell "" [ref=f5e1175]:
                - generic [ref=f5e1178]:
                  - checkbox "" [ref=f5e1179]
                  - generic [ref=f5e1180]: 
              - cell "ENLF7EPI06" [ref=f5e1182]
              - cell "Auto1785605798142 Test" [ref=f5e1184]
              - cell "User" [ref=f5e1186]
              - cell [ref=f5e1188]
              - cell [ref=f5e1189]
              - cell [ref=f5e1190]
              - cell [ref=f5e1191]
              - cell [ref=f5e1192]:
                - generic [ref=f5e1193]:
                  - button "" [ref=f5e1194]
                  - button "" [ref=f5e1196]
            - row [ref=f5e1199] [cursor=pointer]:
              - cell "" [ref=f5e1200]:
                - generic [ref=f5e1203]:
                  - checkbox "" [ref=f5e1204]
                  - generic [ref=f5e1205]: 
              - cell "E33490" [ref=f5e1207]
              - cell "AutoF1785600733490" [ref=f5e1209]
              - cell "AutoL1785600733490" [ref=f5e1211]
              - cell [ref=f5e1213]
              - cell [ref=f5e1214]
              - cell [ref=f5e1215]
              - cell [ref=f5e1216]
              - cell [ref=f5e1217]:
                - generic [ref=f5e1218]:
                  - button "" [ref=f5e1219]
                  - button "" [ref=f5e1221]
            - row [ref=f5e1224] [cursor=pointer]:
              - cell "" [ref=f5e1225]:
                - generic [ref=f5e1228]:
                  - checkbox "" [ref=f5e1229]
                  - generic [ref=f5e1230]: 
              - cell "E38532" [ref=f5e1232]
              - cell "AutoF1785600738532" [ref=f5e1234]
              - cell "AutoL1785600738532" [ref=f5e1236]
              - cell [ref=f5e1238]
              - cell [ref=f5e1239]
              - cell [ref=f5e1240]
              - cell [ref=f5e1241]
              - cell [ref=f5e1242]:
                - generic [ref=f5e1243]:
                  - button "" [ref=f5e1244]
                  - button "" [ref=f5e1246]
            - row [ref=f5e1249] [cursor=pointer]:
              - cell "" [ref=f5e1250]:
                - generic [ref=f5e1253]:
                  - checkbox "" [ref=f5e1254]
                  - generic [ref=f5e1255]: 
              - cell "0471" [ref=f5e1257]
              - cell "Automation" [ref=f5e1259]
              - cell "Tester" [ref=f5e1261]
              - cell [ref=f5e1263]
              - cell [ref=f5e1264]
              - cell [ref=f5e1265]
              - cell [ref=f5e1266]
              - cell [ref=f5e1267]:
                - generic [ref=f5e1268]:
                  - button "" [ref=f5e1269]
                  - button "" [ref=f5e1271]
            - row [ref=f5e1274] [cursor=pointer]:
              - cell "" [ref=f5e1275]:
                - generic [ref=f5e1278]:
                  - checkbox "" [ref=f5e1279]
                  - generic [ref=f5e1280]: 
              - cell "75307" [ref=f5e1282]
              - cell "Ava" [ref=f5e1284]
              - cell "Taylor" [ref=f5e1286]
              - cell [ref=f5e1288]
              - cell [ref=f5e1289]
              - cell [ref=f5e1290]
              - cell [ref=f5e1291]
              - cell [ref=f5e1292]:
                - generic [ref=f5e1293]:
                  - button "" [ref=f5e1294]
                  - button "" [ref=f5e1296]
            - row [ref=f5e1299] [cursor=pointer]:
              - cell "" [ref=f5e1300]:
                - generic [ref=f5e1303]:
                  - checkbox "" [ref=f5e1304]
                  - generic [ref=f5e1305]: 
              - cell "0303" [ref=f5e1307]
              - cell "bala kumar" [ref=f5e1309]
              - cell "ravi" [ref=f5e1311]
              - cell [ref=f5e1313]
              - cell [ref=f5e1314]
              - cell [ref=f5e1315]
              - cell [ref=f5e1316]
              - cell [ref=f5e1317]:
                - generic [ref=f5e1318]:
                  - button "" [ref=f5e1319]
                  - button "" [ref=f5e1321]
            - row [ref=f5e1324] [cursor=pointer]:
              - cell "" [ref=f5e1325]:
                - generic [ref=f5e1328]:
                  - checkbox "" [ref=f5e1329]
                  - generic [ref=f5e1330]: 
              - cell "2278" [ref=f5e1332]
              - cell "Ben Noah" [ref=f5e1334]
              - cell "Weimann" [ref=f5e1336]
              - cell [ref=f5e1338]
              - cell [ref=f5e1339]
              - cell [ref=f5e1340]
              - cell [ref=f5e1341]
              - cell [ref=f5e1342]:
                - generic [ref=f5e1343]:
                  - button "" [ref=f5e1344]
                  - button "" [ref=f5e1346]
            - row [ref=f5e1349] [cursor=pointer]:
              - cell "" [ref=f5e1350]:
                - generic [ref=f5e1353]:
                  - checkbox "" [ref=f5e1354]
                  - generic [ref=f5e1355]: 
              - cell "0292" [ref=f5e1357]
              - cell "bmrtahvwhibmrtahvwhi" [ref=f5e1359]
              - cell "hbfqkhjfqbhbfqkhjfqb" [ref=f5e1361]
              - cell [ref=f5e1363]
              - cell [ref=f5e1364]
              - cell [ref=f5e1365]
              - cell [ref=f5e1366]
              - cell [ref=f5e1367]:
                - generic [ref=f5e1368]:
                  - button "" [ref=f5e1369]
                  - button "" [ref=f5e1371]
            - row [ref=f5e1374] [cursor=pointer]:
              - cell "" [ref=f5e1375]:
                - generic [ref=f5e1378]:
                  - checkbox "" [ref=f5e1379]
                  - generic [ref=f5e1380]: 
              - cell "0320" [ref=f5e1382]
              - cell "Charles" [ref=f5e1384]
              - cell "Carter" [ref=f5e1386]
              - cell [ref=f5e1388]
              - cell [ref=f5e1389]
              - cell [ref=f5e1390]
              - cell [ref=f5e1391]
              - cell [ref=f5e1392]:
                - generic [ref=f5e1393]:
                  - button "" [ref=f5e1394]
                  - button "" [ref=f5e1396]
            - row [ref=f5e1399] [cursor=pointer]:
              - cell "" [ref=f5e1400]:
                - generic [ref=f5e1403]:
                  - checkbox "" [ref=f5e1404]
                  - generic [ref=f5e1405]: 
              - cell "00392" [ref=f5e1407]
              - cell "Charlotte" [ref=f5e1409]
              - cell "Smith" [ref=f5e1411]
              - cell [ref=f5e1413]
              - cell [ref=f5e1414]
              - cell [ref=f5e1415]
              - cell [ref=f5e1416]
              - cell [ref=f5e1417]:
                - generic [ref=f5e1418]:
                  - button "" [ref=f5e1419]
                  - button "" [ref=f5e1421]
            - row [ref=f5e1424] [cursor=pointer]:
              - cell "" [ref=f5e1425]:
                - generic [ref=f5e1428]:
                  - checkbox "" [ref=f5e1429]
                  - generic [ref=f5e1430]: 
              - cell "0363" [ref=f5e1432]
              - cell "Christopher" [ref=f5e1434]
              - cell "Mcmillan" [ref=f5e1436]
              - cell [ref=f5e1438]
              - cell [ref=f5e1439]
              - cell [ref=f5e1440]
              - cell [ref=f5e1441]
              - cell [ref=f5e1442]:
                - generic [ref=f5e1443]:
                  - button "" [ref=f5e1444]
                  - button "" [ref=f5e1446]
            - row [ref=f5e1449] [cursor=pointer]:
              - cell "" [ref=f5e1450]:
                - generic [ref=f5e1453]:
                  - checkbox "" [ref=f5e1454]
                  - generic [ref=f5e1455]: 
              - cell "5299" [ref=f5e1457]
              - cell "CLzscg" [ref=f5e1459]
              - cell "NmMkLg" [ref=f5e1461]
              - cell [ref=f5e1463]
              - cell [ref=f5e1464]
              - cell [ref=f5e1465]
              - cell [ref=f5e1466]
              - cell [ref=f5e1467]:
                - generic [ref=f5e1468]:
                  - button "" [ref=f5e1469]
                  - button "" [ref=f5e1471]
            - row [ref=f5e1474] [cursor=pointer]:
              - cell "" [ref=f5e1475]:
                - generic [ref=f5e1478]:
                  - checkbox "" [ref=f5e1479]
                  - generic [ref=f5e1480]: 
              - cell "DA76451" [ref=f5e1482]
              - cell "DataA1785600676451" [ref=f5e1484]
              - cell "LastA1785600676451" [ref=f5e1486]
              - cell [ref=f5e1488]
              - cell [ref=f5e1489]
              - cell [ref=f5e1490]
              - cell [ref=f5e1491]
              - cell [ref=f5e1492]:
                - generic [ref=f5e1493]:
                  - button "" [ref=f5e1494]
                  - button "" [ref=f5e1496]
            - row [ref=f5e1499] [cursor=pointer]:
              - cell "" [ref=f5e1500]:
                - generic [ref=f5e1503]:
                  - checkbox "" [ref=f5e1504]
                  - generic [ref=f5e1505]: 
              - cell "DA83222" [ref=f5e1507]
              - cell "DataA1785600683222" [ref=f5e1509]
              - cell "LastA1785600683222" [ref=f5e1511]
              - cell [ref=f5e1513]
              - cell [ref=f5e1514]
              - cell [ref=f5e1515]
              - cell [ref=f5e1516]
              - cell [ref=f5e1517]:
                - generic [ref=f5e1518]:
                  - button "" [ref=f5e1519]
                  - button "" [ref=f5e1521]
        - navigation "Pagination Navigation" [ref=f5e1524]:
          - list [ref=f5e1525]:
            - listitem [ref=f5e1526]:
              - button "1" [ref=f5e1527] [cursor=pointer]
            - listitem [ref=f5e1528]:
              - button "2" [ref=f5e1529] [cursor=pointer]
            - listitem [ref=f5e1530]:
              - button "3" [ref=f5e1531] [cursor=pointer]
            - listitem [ref=f5e1532]:
              - button "4" [ref=f5e1533] [cursor=pointer]
            - listitem [ref=f5e1534]:
              - button "5" [ref=f5e1535] [cursor=pointer]
            - listitem [ref=f5e1536]:
              - button "" [ref=f5e1537] [cursor=pointer]
    - generic [ref=f5e1539]:
      - paragraph [ref=f5e1540]: OrangeHRM OS 5.9
      - paragraph [ref=f5e1541]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e1542] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  557 | 
  558 |     await expect
  559 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  560 |       .not.toEqual(currentPageIds);
  561 |   }
  562 | 
  563 |   async openEmployeeById(employeeId: string): Promise<void> {
  564 |     const employeeRow = this.employeeRows.filter({
  565 |       has: this.page
  566 |         .locator(".oxd-table-cell")
  567 |         .nth(1)
  568 |         .filter({ hasText: employeeId }),
  569 |     });
  570 | 
  571 |     await expect(employeeRow).toHaveCount(1);
  572 | 
  573 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  574 | 
  575 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  576 |       timeout: 15_000,
  577 |     });
  578 |   }
  579 | 
  580 |   async cancelAddingEmployee(): Promise<void> {
  581 |     expect(this.cancelProfilepageButton).toBeVisible();
  582 |     expect(this.cancelProfilepageButton).toBeEnabled();
  583 |     this.cancelProfilepageButton.click();
  584 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  585 |   }
  586 | 
  587 |   async saveEmployeeWithoutRequiredDetails(
  588 |     details: AddEmployeeDetails,
  589 |   ): Promise<void> {
  590 |     await this.firstnameInput.fill(details.firstName);
  591 | 
  592 |     if (details.middleName !== undefined) {
  593 |       await this.middlenameInput.fill(details.middleName);
  594 |     }
  595 | 
  596 |     await this.lastnameInput.fill(details.lastName);
  597 | 
  598 |     if (details.employeeId !== undefined) {
  599 |       await this.employeeID.fill(details.employeeId);
  600 |     }
  601 | 
  602 |     if (details.profilePicturePath !== undefined) {
  603 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  604 |     }
  605 | 
  606 |     await this.SaveEmployeeButton.click();
  607 |   }
  608 | 
  609 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  610 |     if (details.firstName !== undefined) {
  611 |       await this.firstnameInput.fill(details.firstName);
  612 |     }
  613 | 
  614 |     if (details.middleName !== undefined) {
  615 |       await this.middlenameInput.fill(details.middleName);
  616 |     }
  617 | 
  618 |     if (details.lastName !== undefined) {
  619 |       await this.lastnameInput.fill(details.lastName);
  620 |     }
  621 | 
  622 |     if (details.employeeId !== undefined) {
  623 |       await this.employeeID.fill(details.employeeId);
  624 |       await this.employeeID.blur();
  625 |     }
  626 | 
  627 |     if (details.profilePicturePath !== undefined) {
  628 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  629 |     }
  630 |   }
  631 | 
  632 |   async resetEmployeeFilters(): Promise<void> {
  633 |     const employeeListResponse = this.page.waitForResponse(
  634 |       (response) =>
  635 |         response.url().includes("/api/v2/pim/employees") &&
  636 |         response.request().method() === "GET" &&
  637 |         response.ok(),
  638 |       { timeout: 15_000 },
  639 |     );
  640 | 
  641 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  642 | 
  643 |     await employeeListResponse;
  644 |     await expect(this.loadingSpinner).toBeHidden();
  645 |   }
  646 | 
  647 |   async selectEmployeeFromAutocomplete(
  648 |     partialName: string,
  649 |     expectedFullName: string,
  650 |   ): Promise<void> {
  651 |     await this.employeeNameFilterInput.fill(partialName);
  652 | 
  653 |   const matchingOption = this.page
  654 |   .locator(".oxd-autocomplete-option")
  655 |   .filter({ hasText: expectedFullName });
  656 | 
> 657 |   await matchingOption.waitFor({ state: "visible" });
      |                        ^ TimeoutError: locator.waitFor: Timeout 25000ms exceeded.
  658 | 
  659 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  660 |     await matchingOption.click();
  661 |   }
  662 | 
  663 |   async addEmployeeWithLoginDetails(
  664 |     details: EmployeeWithLoginDetails,
  665 |   ): Promise<string> {
  666 |     await this.fillAddEmployeeForm({
  667 |       firstName: details.firstName,
  668 |       middleName: details.middleName,
  669 |       lastName: details.lastName,
  670 |       employeeId: details.employeeId,
  671 |       profilePicturePath: details.profilePicturePath,
  672 |     });
  673 | 
  674 |     const employeeId = await this.employeeID.inputValue();
  675 | 
  676 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  677 |       await this.createLoginDetailsSwitch.click();
  678 |     }
  679 | 
  680 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  681 | 
  682 |     await expect(this.employeeUsernameInput).toBeVisible();
  683 |     await expect(this.employeePasswordInput).toBeVisible();
  684 |     await expect(this.confirmPasswordInput).toBeVisible();
  685 | 
  686 |     await this.employeeUsernameInput.fill(details.username);
  687 |     await this.employeePasswordInput.fill(details.password);
  688 |     await this.confirmPasswordInput.fill(details.password);
  689 | 
  690 |     if (details.status === "Disabled") {
  691 |       await this.disabledStatusRadio.check({
  692 |         force: true,
  693 |       });
  694 | 
  695 |       await expect(this.disabledStatusRadio).toBeChecked();
  696 |     } else {
  697 |       await this.enabledStatusRadio.check({
  698 |         force: true,
  699 |       });
  700 | 
  701 |       await expect(this.enabledStatusRadio).toBeChecked();
  702 |     }
  703 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  704 | 
  705 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  706 | 
  707 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  708 | 
  709 |     const createEmployeeResponse = this.page.waitForResponse(
  710 |       (response) =>
  711 |         response.url().includes("/api/v2/pim/employees") &&
  712 |         response.request().method() === "POST" &&
  713 |         response.ok(),
  714 |       { timeout: 20_000 },
  715 |     );
  716 | 
  717 |     await this.SaveEmployeeButton.click();
  718 | 
  719 |     await createEmployeeResponse;
  720 | 
  721 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  722 |       timeout: 20_000,
  723 |     });
  724 | 
  725 |     await expect(this.loadingSpinner).toBeHidden();
  726 | 
  727 |     return employeeId;
  728 |   }
  729 | 
  730 |   async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
  731 |     await expect(this.passwordStrengthIndicator).toBeVisible();
  732 | 
  733 |     await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  734 |   }
  735 | 
  736 |   async canceldeleteEmployeeById(employeeId: string): Promise<void> {
  737 |     await expect(this.loadingSpinner).toBeHidden();
  738 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  739 |     await expect(matchingRow).toHaveCount(1);
  740 |     const deleteButton = matchingRow.locator("button").filter({
  741 |       has: this.page.locator("i.bi-trash"),
  742 |     });
  743 |     await deleteButton.click();
  744 | 
  745 |     const confirmationDilaog = this.page.getByRole("dialog");
  746 |     await expect(confirmationDilaog).toBeVisible();
  747 | 
  748 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  749 | 
  750 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  751 |   }
  752 | 
  753 |   async selectEmployeeById(employeeId: string): Promise<void> {
  754 |     const employeeRow = this.employeeRows.filter({
  755 |       has: this.page
  756 |         .locator(".oxd-table-cell")
  757 |         .nth(1)
```