# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression
- Location: tests\PIM\pim-employee-list.spec.ts:195:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785915400858 test user' }) to be visible

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
              - paragraph [ref=f5e127]: Surya king
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
              - generic [ref=f5e165]:
                - textbox "Type for hints..." [active] [ref=f5e167]: Auto1785
                - listbox [ref=f5e168]:
                  - option "Auto1785915379845 test user" [ref=f5e169] [cursor=pointer]
                  - option "Auto1785915335550 test user" [ref=f5e171] [cursor=pointer]
                  - option "Auto1785915357013 test user" [ref=f5e173] [cursor=pointer]
                  - option "Auto1785915280020 Test User" [ref=f5e175] [cursor=pointer]
                  - option "Auto1785915356937 Test User" [ref=f5e177] [cursor=pointer]
            - generic [ref=f5e180]:
              - generic [ref=f5e181]: Employee Id
              - textbox [ref=f5e184]
            - generic [ref=f5e186]:
              - generic [ref=f5e187]: Employment Status
              - generic [ref=f5e191] [cursor=pointer]:
                - generic [ref=f5e192]: "-- Select --"
                - generic [ref=f5e193]: 
            - generic [ref=f5e196]:
              - generic [ref=f5e197]: Include
              - generic [ref=f5e201] [cursor=pointer]:
                - generic [ref=f5e202]: Current Employees Only
                - generic [ref=f5e203]: 
            - generic [ref=f5e206]:
              - generic [ref=f5e207]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e212]
            - generic [ref=f5e214]:
              - generic [ref=f5e215]: Job Title
              - generic [ref=f5e219] [cursor=pointer]:
                - generic [ref=f5e220]: "-- Select --"
                - generic [ref=f5e221]: 
            - generic [ref=f5e224]:
              - generic [ref=f5e225]: Sub Unit
              - generic [ref=f5e229] [cursor=pointer]:
                - generic [ref=f5e230]: "-- Select --"
                - generic [ref=f5e231]: 
          - separator [ref=f5e233]
          - generic [ref=f5e234]:
            - button "Reset" [ref=f5e235] [cursor=pointer]
            - button "Search" [ref=f5e236] [cursor=pointer]
      - generic [ref=f5e237]:
        - button " Add" [ref=f5e239] [cursor=pointer]:
          - generic [ref=f5e240]: 
          - text: Add
        - generic [ref=f5e241]:
          - separator [ref=f5e242]
          - generic [ref=f5e243]: (24) Records Found
        - table [ref=f5e246]:
          - rowgroup [ref=f5e247]:
            - row [ref=f5e248]:
              - columnheader "" [ref=f5e249]:
                - generic [ref=f5e251] [cursor=pointer]:
                  - checkbox "" [ref=f5e252]
                  - generic [ref=f5e253]: 
              - columnheader "Id " [ref=f5e255]:
                - text: Id
                - generic [ref=f5e256]:
                  - generic [ref=f5e257] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e258]:
                - text: First (& Middle) Name
                - generic [ref=f5e259]:
                  - generic [ref=f5e260] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e261]:
                - text: Last Name
                - generic [ref=f5e262]:
                  - generic [ref=f5e263] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e264]:
                - text: Job Title
                - generic [ref=f5e265]:
                  - generic [ref=f5e266] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e267]:
                - text: Employment Status
                - generic [ref=f5e268]:
                  - generic [ref=f5e269] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e270]:
                - text: Sub Unit
                - generic [ref=f5e271]:
                  - generic [ref=f5e272] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e273]:
                - text: Supervisor
                - generic [ref=f5e274]:
                  - generic [ref=f5e275] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e276]
          - rowgroup [ref=f5e277]:
            - row [ref=f5e279] [cursor=pointer]:
              - cell "" [ref=f5e280]:
                - generic [ref=f5e283]:
                  - checkbox "" [ref=f5e284]
                  - generic [ref=f5e285]: 
              - cell "07721" [ref=f5e287]
              - cell "A B" [ref=f5e289]
              - cell "C" [ref=f5e291]
              - cell [ref=f5e293]
              - cell [ref=f5e294]
              - cell [ref=f5e295]
              - cell [ref=f5e296]
              - cell [ref=f5e297]:
                - generic [ref=f5e298]:
                  - button "" [ref=f5e299]
                  - button "" [ref=f5e301]
            - row [ref=f5e304] [cursor=pointer]:
              - cell "" [ref=f5e305]:
                - generic [ref=f5e308]:
                  - checkbox "" [ref=f5e309]
                  - generic [ref=f5e310]: 
              - cell "0784" [ref=f5e312]
              - cell "ABCDEFGHIJKLMNOPQRSTUVWXYZABCD" [ref=f5e314]
              - cell "Doe" [ref=f5e316]
              - cell [ref=f5e318]
              - cell [ref=f5e319]
              - cell [ref=f5e320]
              - cell [ref=f5e321]
              - cell [ref=f5e322]:
                - generic [ref=f5e323]:
                  - button "" [ref=f5e324]
                  - button "" [ref=f5e326]
            - row [ref=f5e329] [cursor=pointer]:
              - cell "" [ref=f5e330]:
                - generic [ref=f5e333]:
                  - checkbox "" [ref=f5e334]
                  - generic [ref=f5e335]: 
              - cell "0794" [ref=f5e337]
              - cell "Adam" [ref=f5e339]
              - cell "Jhon" [ref=f5e341]
              - cell [ref=f5e343]
              - cell [ref=f5e344]
              - cell [ref=f5e345]
              - cell [ref=f5e346]
              - cell [ref=f5e347]:
                - generic [ref=f5e348]:
                  - button "" [ref=f5e349]
                  - button "" [ref=f5e351]
            - row [ref=f5e354] [cursor=pointer]:
              - cell "" [ref=f5e355]:
                - generic [ref=f5e358]:
                  - checkbox "" [ref=f5e359]
                  - generic [ref=f5e360]: 
              - cell "0772" [ref=f5e362]
              - cell "Auto1785915241202 Test" [ref=f5e364]
              - cell "User" [ref=f5e366]
              - cell [ref=f5e368]
              - cell [ref=f5e369]
              - cell [ref=f5e370]
              - cell [ref=f5e371]
              - cell [ref=f5e372]:
                - generic [ref=f5e373]:
                  - button "" [ref=f5e374]
                  - button "" [ref=f5e376]
            - row [ref=f5e379] [cursor=pointer]:
              - cell "" [ref=f5e380]:
                - generic [ref=f5e383]:
                  - checkbox "" [ref=f5e384]
                  - generic [ref=f5e385]: 
              - cell "0775" [ref=f5e387]
              - cell "Auto1785915260580 Test" [ref=f5e389]
              - cell "User" [ref=f5e391]
              - cell [ref=f5e393]
              - cell [ref=f5e394]
              - cell [ref=f5e395]
              - cell [ref=f5e396]
              - cell [ref=f5e397]:
                - generic [ref=f5e398]:
                  - button "" [ref=f5e399]
                  - button "" [ref=f5e401]
            - row [ref=f5e404] [cursor=pointer]:
              - cell "" [ref=f5e405]:
                - generic [ref=f5e408]:
                  - checkbox "" [ref=f5e409]
                  - generic [ref=f5e410]: 
              - cell "0777" [ref=f5e412]
              - cell "Auto1785915280020 Test" [ref=f5e414]
              - cell "User" [ref=f5e416]
              - cell [ref=f5e418]
              - cell [ref=f5e419]
              - cell [ref=f5e420]
              - cell [ref=f5e421]
              - cell [ref=f5e422]:
                - generic [ref=f5e423]:
                  - button "" [ref=f5e424]
                  - button "" [ref=f5e426]
            - row [ref=f5e429] [cursor=pointer]:
              - cell "" [ref=f5e430]:
                - generic [ref=f5e433]:
                  - checkbox "" [ref=f5e434]
                  - generic [ref=f5e435]: 
              - cell "ERVXVMMJRO" [ref=f5e437]
              - cell "Auto1785915335550 test" [ref=f5e439]
              - cell "user" [ref=f5e441]
              - cell [ref=f5e443]
              - cell [ref=f5e444]
              - cell [ref=f5e445]
              - cell [ref=f5e446]
              - cell [ref=f5e447]:
                - generic [ref=f5e448]:
                  - button "" [ref=f5e449]
                  - button "" [ref=f5e451]
            - row [ref=f5e454] [cursor=pointer]:
              - cell "" [ref=f5e455]:
                - generic [ref=f5e458]:
                  - checkbox "" [ref=f5e459]
                  - generic [ref=f5e460]: 
              - cell "ERW0NNCL2Q" [ref=f5e462]
              - cell "Auto1785915335606 Test" [ref=f5e464]
              - cell "User" [ref=f5e466]
              - cell [ref=f5e468]
              - cell [ref=f5e469]
              - cell [ref=f5e470]
              - cell [ref=f5e471]
              - cell [ref=f5e472]:
                - generic [ref=f5e473]:
                  - button "" [ref=f5e474]
                  - button "" [ref=f5e476]
            - row [ref=f5e479] [cursor=pointer]:
              - cell "" [ref=f5e480]:
                - generic [ref=f5e483]:
                  - checkbox "" [ref=f5e484]
                  - generic [ref=f5e485]: 
              - cell "ERW72EWP19" [ref=f5e487]
              - cell "Auto1785915335696 Test" [ref=f5e489]
              - cell "User" [ref=f5e491]
              - cell [ref=f5e493]
              - cell [ref=f5e494]
              - cell [ref=f5e495]
              - cell [ref=f5e496]
              - cell [ref=f5e497]:
                - generic [ref=f5e498]:
                  - button "" [ref=f5e499]
                  - button "" [ref=f5e501]
            - row [ref=f5e504] [cursor=pointer]:
              - cell "" [ref=f5e505]:
                - generic [ref=f5e508]:
                  - checkbox "" [ref=f5e509]
                  - generic [ref=f5e510]: 
              - cell "ERWXKJNIZV" [ref=f5e512]
              - cell "Auto1785915356829 test" [ref=f5e514]
              - cell "user" [ref=f5e516]
              - cell [ref=f5e518]
              - cell [ref=f5e519]
              - cell [ref=f5e520]
              - cell [ref=f5e521]
              - cell [ref=f5e522]:
                - generic [ref=f5e523]:
                  - button "" [ref=f5e524]
                  - button "" [ref=f5e526]
            - row [ref=f5e529] [cursor=pointer]:
              - cell "" [ref=f5e530]:
                - generic [ref=f5e533]:
                  - checkbox "" [ref=f5e534]
                  - generic [ref=f5e535]: 
              - cell "ERWYWDI8B2" [ref=f5e537]
              - cell "Auto1785915356937 Test" [ref=f5e539]
              - cell "User" [ref=f5e541]
              - cell [ref=f5e543]
              - cell [ref=f5e544]
              - cell [ref=f5e545]
              - cell [ref=f5e546]
              - cell [ref=f5e547]:
                - generic [ref=f5e548]:
                  - button "" [ref=f5e549]
                  - button "" [ref=f5e551]
            - row [ref=f5e554] [cursor=pointer]:
              - cell "" [ref=f5e555]:
                - generic [ref=f5e558]:
                  - checkbox "" [ref=f5e559]
                  - generic [ref=f5e560]: 
              - cell "ERWWV5PBI1" [ref=f5e562]
              - cell "Auto1785915356942 Test" [ref=f5e564]
              - cell "User" [ref=f5e566]
              - cell [ref=f5e568]
              - cell [ref=f5e569]
              - cell [ref=f5e570]
              - cell [ref=f5e571]
              - cell [ref=f5e572]:
                - generic [ref=f5e573]:
                  - button "" [ref=f5e574]
                  - button "" [ref=f5e576]
            - row [ref=f5e579] [cursor=pointer]:
              - cell "" [ref=f5e580]:
                - generic [ref=f5e583]:
                  - checkbox "" [ref=f5e584]
                  - generic [ref=f5e585]: 
              - cell "ERX1F9B9ZW" [ref=f5e587]
              - cell "Auto1785915357013 test" [ref=f5e589]
              - cell "user" [ref=f5e591]
              - cell [ref=f5e593]
              - cell [ref=f5e594]
              - cell [ref=f5e595]
              - cell [ref=f5e596]
              - cell [ref=f5e597]:
                - generic [ref=f5e598]:
                  - button "" [ref=f5e599]
                  - button "" [ref=f5e601]
            - row [ref=f5e604] [cursor=pointer]:
              - cell "" [ref=f5e605]:
                - generic [ref=f5e608]:
                  - checkbox "" [ref=f5e609]
                  - generic [ref=f5e610]: 
              - cell "ERX7DL0LB3" [ref=f5e612]
              - cell "Auto1785915379845 test" [ref=f5e614]
              - cell "user" [ref=f5e616]
              - cell [ref=f5e618]
              - cell [ref=f5e619]
              - cell [ref=f5e620]
              - cell [ref=f5e621]
              - cell [ref=f5e622]:
                - generic [ref=f5e623]:
                  - button "" [ref=f5e624]
                  - button "" [ref=f5e626]
            - row [ref=f5e629] [cursor=pointer]:
              - cell "" [ref=f5e630]:
                - generic [ref=f5e633]:
                  - checkbox "" [ref=f5e634]
                  - generic [ref=f5e635]: 
              - cell "ERXKHZ52R7" [ref=f5e637]
              - cell "Auto1785915400858 test" [ref=f5e639]
              - cell "user" [ref=f5e641]
              - cell [ref=f5e643]
              - cell [ref=f5e644]
              - cell [ref=f5e645]
              - cell [ref=f5e646]
              - cell [ref=f5e647]:
                - generic [ref=f5e648]:
                  - button "" [ref=f5e649]
                  - button "" [ref=f5e651]
            - row [ref=f5e654] [cursor=pointer]:
              - cell "" [ref=f5e655]:
                - generic [ref=f5e658]:
                  - checkbox "" [ref=f5e659]
                  - generic [ref=f5e660]: 
              - cell "ERXKNWPV4Q" [ref=f5e662]
              - cell "Auto1785915401302 Test" [ref=f5e664]
              - cell "User" [ref=f5e666]
              - cell [ref=f5e668]
              - cell [ref=f5e669]
              - cell [ref=f5e670]
              - cell [ref=f5e671]
              - cell [ref=f5e672]:
                - generic [ref=f5e673]:
                  - button "" [ref=f5e674]
                  - button "" [ref=f5e676]
            - row [ref=f5e679] [cursor=pointer]:
              - cell "" [ref=f5e680]:
                - generic [ref=f5e683]:
                  - checkbox "" [ref=f5e684]
                  - generic [ref=f5e685]: 
              - cell "EMP56990" [ref=f5e687]
              - cell "Automation" [ref=f5e689]
              - cell "Tester" [ref=f5e691]
              - cell [ref=f5e693]
              - cell [ref=f5e694]
              - cell [ref=f5e695]
              - cell [ref=f5e696]
              - cell [ref=f5e697]:
                - generic [ref=f5e698]:
                  - button "" [ref=f5e699]
                  - button "" [ref=f5e701]
            - row [ref=f5e704] [cursor=pointer]:
              - cell "" [ref=f5e705]:
                - generic [ref=f5e708]:
                  - checkbox "" [ref=f5e709]
                  - generic [ref=f5e710]: 
              - cell "EMP47340" [ref=f5e712]
              - cell "Automation" [ref=f5e714]
              - cell "Tester" [ref=f5e716]
              - cell [ref=f5e718]
              - cell [ref=f5e719]
              - cell [ref=f5e720]
              - cell [ref=f5e721]
              - cell [ref=f5e722]:
                - generic [ref=f5e723]:
                  - button "" [ref=f5e724]
                  - button "" [ref=f5e726]
            - row [ref=f5e729] [cursor=pointer]:
              - cell "" [ref=f5e730]:
                - generic [ref=f5e733]:
                  - checkbox "" [ref=f5e734]
                  - generic [ref=f5e735]: 
              - cell "ERWYYLJDWA" [ref=f5e737]
              - cell "BulkA1785915364353 Test" [ref=f5e739]
              - cell "User" [ref=f5e741]
              - cell [ref=f5e743]
              - cell [ref=f5e744]
              - cell [ref=f5e745]
              - cell [ref=f5e746]
              - cell [ref=f5e747]:
                - generic [ref=f5e748]:
                  - button "" [ref=f5e749]
                  - button "" [ref=f5e751]
            - row [ref=f5e754] [cursor=pointer]:
              - cell "" [ref=f5e755]:
                - generic [ref=f5e758]:
                  - checkbox "" [ref=f5e759]
                  - generic [ref=f5e760]: 
              - cell "ERXS3XIPVZ" [ref=f5e762]
              - cell "BulkA1785915413101 Test" [ref=f5e764]
              - cell "User" [ref=f5e766]
              - cell [ref=f5e768]
              - cell [ref=f5e769]
              - cell [ref=f5e770]
              - cell [ref=f5e771]
              - cell [ref=f5e772]:
                - generic [ref=f5e773]:
                  - button "" [ref=f5e774]
                  - button "" [ref=f5e776]
            - row [ref=f5e779] [cursor=pointer]:
              - cell "" [ref=f5e780]:
                - generic [ref=f5e783]:
                  - checkbox "" [ref=f5e784]
                  - generic [ref=f5e785]: 
              - cell "ERXE1TD6UT" [ref=f5e787]
              - cell "BulkB1785915364353 Test" [ref=f5e789]
              - cell "User" [ref=f5e791]
              - cell [ref=f5e793]
              - cell [ref=f5e794]
              - cell [ref=f5e795]
              - cell [ref=f5e796]
              - cell [ref=f5e797]:
                - generic [ref=f5e798]:
                  - button "" [ref=f5e799]
                  - button "" [ref=f5e801]
            - row [ref=f5e804] [cursor=pointer]:
              - cell "" [ref=f5e805]:
                - generic [ref=f5e808]:
                  - checkbox "" [ref=f5e809]
                  - generic [ref=f5e810]: 
              - cell "07759019" [ref=f5e812]
              - cell "Iyal" [ref=f5e814]
              - cell "Revathy" [ref=f5e816]
              - cell [ref=f5e818]
              - cell [ref=f5e819]
              - cell [ref=f5e820]
              - cell [ref=f5e821]
              - cell [ref=f5e822]:
                - generic [ref=f5e823]:
                  - button "" [ref=f5e824]
                  - button "" [ref=f5e826]
            - row [ref=f5e829] [cursor=pointer]:
              - cell "" [ref=f5e830]:
                - generic [ref=f5e833]:
                  - checkbox "" [ref=f5e834]
                  - generic [ref=f5e835]: 
              - cell "783" [ref=f5e837]
              - cell "Sam Levi" [ref=f5e839]
              - cell "Heathcote" [ref=f5e841]
              - cell [ref=f5e843]
              - cell [ref=f5e844]
              - cell [ref=f5e845]
              - cell [ref=f5e846]
              - cell [ref=f5e847]:
                - generic [ref=f5e848]:
                  - button "" [ref=f5e849]
                  - button "" [ref=f5e851]
            - row [ref=f5e854] [cursor=pointer]:
              - cell "" [ref=f5e855]:
                - generic [ref=f5e859]:
                  - checkbox "" [ref=f5e860]
                  - generic [ref=f5e861]: 
              - cell "006" [ref=f5e863]
              - cell "Surya N" [ref=f5e865]
              - cell "king" [ref=f5e867]
              - cell "HR Manager" [ref=f5e869]
              - cell "Full-Time Permanent" [ref=f5e871]
              - cell "Human Resources" [ref=f5e873]
              - cell [ref=f5e875]
              - cell [ref=f5e876]:
                - button "" [ref=f5e878]
    - generic [ref=f5e881]:
      - paragraph [ref=f5e882]: OrangeHRM OS 5.9
      - paragraph [ref=f5e883]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e884] [cursor=pointer]:
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
      |                        ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
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