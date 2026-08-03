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
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785580497236 test user' }) to be visible

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
              - paragraph [ref=f5e127]: manda user
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
                  - option "Auto1785580406162 updatedTest updatedUser" [ref=f5e169] [cursor=pointer]
                  - option "Auto1785580446568 updatedTest updatedUser" [ref=f5e171] [cursor=pointer]
                  - option "Auto1785580431561 test user" [ref=f5e173] [cursor=pointer]
                  - option "Auto1785580233273 test user" [ref=f5e175] [cursor=pointer]
                  - option "Auto1785580413822 Test User" [ref=f5e177] [cursor=pointer]
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
          - generic [ref=f5e243]: (50) Records Found
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
              - cell "E8C088AFJN" [ref=f5e287]
              - cell "Auto1785580161105 Test" [ref=f5e289]
              - cell "User" [ref=f5e291]
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
              - cell "E8CEIBFUX7" [ref=f5e312]
              - cell "Auto1785580183632 Test" [ref=f5e314]
              - cell "User" [ref=f5e316]
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
              - cell "0436" [ref=f5e337]
              - cell "Auto1785580184002 Test" [ref=f5e339]
              - cell "User" [ref=f5e341]
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
              - cell "0438" [ref=f5e362]
              - cell "Auto1785580208580 Test" [ref=f5e364]
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
              - cell "0440" [ref=f5e387]
              - cell "Auto1785580231768 Test" [ref=f5e389]
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
              - cell "E8DH4O7GVH" [ref=f5e412]
              - cell "Auto1785580233273 test" [ref=f5e414]
              - cell "user" [ref=f5e416]
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
              - cell "E8GT2PI77N" [ref=f5e437]
              - cell "Auto1785580379293 test" [ref=f5e439]
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
              - cell "E8GOOGM1JM" [ref=f5e462]
              - cell "Auto1785580379364 test" [ref=f5e464]
              - cell "user" [ref=f5e466]
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
              - cell "E8H72FG1XT" [ref=f5e487]
              - cell "Auto1785580406162 updatedTest" [ref=f5e489]
              - cell "updatedUser" [ref=f5e491]
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
              - cell "E8H9QNY89E" [ref=f5e512]
              - cell "Auto1785580409611 Test" [ref=f5e514]
              - cell "User" [ref=f5e516]
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
              - cell "E8HILIT5ZQ" [ref=f5e537]
              - cell "Auto1785580413822 Test" [ref=f5e539]
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
              - cell "E8HPORA5IP" [ref=f5e562]
              - cell "Auto1785580431561 test" [ref=f5e564]
              - cell "user" [ref=f5e566]
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
              - cell "E8HYNC5AKS" [ref=f5e587]
              - cell "Auto1785580441449 Test" [ref=f5e589]
              - cell "User" [ref=f5e591]
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
              - cell "E8I0J4GV0C" [ref=f5e612]
              - cell "Auto1785580446568 updatedTest" [ref=f5e614]
              - cell "updatedUser" [ref=f5e616]
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
              - cell "E8J4WUK0B3" [ref=f5e637]
              - cell "Auto1785580497236 test" [ref=f5e639]
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
              - cell "E8J5KNDPTW" [ref=f5e662]
              - cell "Auto1785580498368 Test" [ref=f5e664]
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
                - generic [ref=f5e684]:
                  - checkbox "" [ref=f5e685]
                  - generic [ref=f5e686]: 
              - cell "muser" [ref=f5e688]
              - cell "manda akhil" [ref=f5e690]
              - cell "user" [ref=f5e692]
              - cell "HR Manager" [ref=f5e694]
              - cell "Full-Time Permanent" [ref=f5e696]
              - cell "Human Resources" [ref=f5e698]
              - cell [ref=f5e700]
              - cell [ref=f5e701]:
                - button "" [ref=f5e703]
            - row [ref=f5e706] [cursor=pointer]:
              - cell "" [ref=f5e707]:
                - generic [ref=f5e710]:
                  - checkbox "" [ref=f5e711]
                  - generic [ref=f5e712]: 
              - cell "0034" [ref=f5e714]
              - cell "Russel" [ref=f5e716]
              - cell "Hamilton" [ref=f5e718]
              - cell "Software Engineer" [ref=f5e720]
              - cell "Full-Time Permanent" [ref=f5e722]
              - cell "Development" [ref=f5e724]
              - cell [ref=f5e726]
              - cell [ref=f5e727]:
                - generic [ref=f5e728]:
                  - button "" [ref=f5e729]
                  - button "" [ref=f5e731]
            - row [ref=f5e734] [cursor=pointer]:
              - cell "" [ref=f5e735]:
                - generic [ref=f5e738]:
                  - checkbox "" [ref=f5e739]
                  - generic [ref=f5e740]: 
              - cell "0300" [ref=f5e742]
              - cell "Sagar hag" [ref=f5e744]
              - cell "hgfkag" [ref=f5e746]
              - cell [ref=f5e748]
              - cell [ref=f5e749]
              - cell [ref=f5e750]
              - cell [ref=f5e751]
              - cell [ref=f5e752]:
                - generic [ref=f5e753]:
                  - button "" [ref=f5e754]
                  - button "" [ref=f5e756]
            - row [ref=f5e759] [cursor=pointer]:
              - cell "" [ref=f5e760]:
                - generic [ref=f5e763]:
                  - checkbox "" [ref=f5e764]
                  - generic [ref=f5e765]: 
              - cell "0087" [ref=f5e767]
              - cell "Sania" [ref=f5e769]
              - cell "Shaheen" [ref=f5e771]
              - cell "Customer Success Manager" [ref=f5e773]
              - cell "Full-Time Permanent" [ref=f5e775]
              - cell "Technical Support" [ref=f5e777]
              - cell [ref=f5e779]
              - cell [ref=f5e780]:
                - generic [ref=f5e781]:
                  - button "" [ref=f5e782]
                  - button "" [ref=f5e784]
            - row [ref=f5e787] [cursor=pointer]:
              - cell "" [ref=f5e788]:
                - generic [ref=f5e791]:
                  - checkbox "" [ref=f5e792]
                  - generic [ref=f5e793]: 
              - cell "0648" [ref=f5e795]
              - cell "sansa" [ref=f5e797]
              - cell "stark" [ref=f5e799]
              - cell [ref=f5e801]
              - cell [ref=f5e802]
              - cell [ref=f5e803]
              - cell [ref=f5e804]
              - cell [ref=f5e805]:
                - generic [ref=f5e806]:
                  - button "" [ref=f5e807]
                  - button "" [ref=f5e809]
            - row [ref=f5e812] [cursor=pointer]:
              - cell "" [ref=f5e813]:
                - generic [ref=f5e816]:
                  - checkbox "" [ref=f5e817]
                  - generic [ref=f5e818]: 
              - cell "0103" [ref=f5e820]
              - cell "Sara" [ref=f5e822]
              - cell "Tencrady" [ref=f5e824]
              - cell "Payroll Administrator" [ref=f5e826]
              - cell "Full-Time Permanent" [ref=f5e828]
              - cell "Human Resources" [ref=f5e830]
              - cell "manda user" [ref=f5e832]
              - cell [ref=f5e834]:
                - generic [ref=f5e835]:
                  - button "" [ref=f5e836]
                  - button "" [ref=f5e838]
            - row [ref=f5e841] [cursor=pointer]:
              - cell "" [ref=f5e842]:
                - generic [ref=f5e845]:
                  - checkbox "" [ref=f5e846]
                  - generic [ref=f5e847]: 
              - cell "0271" [ref=f5e849]
              - cell "savi N" [ref=f5e851]
              - cell "n" [ref=f5e853]
              - cell [ref=f5e855]
              - cell [ref=f5e856]
              - cell [ref=f5e857]
              - cell [ref=f5e858]
              - cell [ref=f5e859]:
                - generic [ref=f5e860]:
                  - button "" [ref=f5e861]
                  - button "" [ref=f5e863]
            - row [ref=f5e866] [cursor=pointer]:
              - cell "" [ref=f5e867]:
                - generic [ref=f5e870]:
                  - checkbox "" [ref=f5e871]
                  - generic [ref=f5e872]: 
              - cell "0270" [ref=f5e874]
              - cell "savi g" [ref=f5e876]
              - cell "n" [ref=f5e878]
              - cell [ref=f5e880]
              - cell [ref=f5e881]
              - cell [ref=f5e882]
              - cell [ref=f5e883]
              - cell [ref=f5e884]:
                - generic [ref=f5e885]:
                  - button "" [ref=f5e886]
                  - button "" [ref=f5e888]
            - row [ref=f5e891] [cursor=pointer]:
              - cell "" [ref=f5e892]:
                - generic [ref=f5e895]:
                  - checkbox "" [ref=f5e896]
                  - generic [ref=f5e897]: 
              - cell "0289" [ref=f5e899]
              - cell "savi g" [ref=f5e901]
              - cell "n" [ref=f5e903]
              - cell [ref=f5e905]
              - cell [ref=f5e906]
              - cell [ref=f5e907]
              - cell [ref=f5e908]
              - cell [ref=f5e909]:
                - generic [ref=f5e910]:
                  - button "" [ref=f5e911]
                  - button "" [ref=f5e913]
            - row [ref=f5e916] [cursor=pointer]:
              - cell "" [ref=f5e917]:
                - generic [ref=f5e920]:
                  - checkbox "" [ref=f5e921]
                  - generic [ref=f5e922]: 
              - cell "0266" [ref=f5e924]
              - cell "savi N" [ref=f5e926]
              - cell "g" [ref=f5e928]
              - cell [ref=f5e930]
              - cell [ref=f5e931]
              - cell [ref=f5e932]
              - cell [ref=f5e933]
              - cell [ref=f5e934]:
                - generic [ref=f5e935]:
                  - button "" [ref=f5e936]
                  - button "" [ref=f5e938]
            - row [ref=f5e941] [cursor=pointer]:
              - cell "" [ref=f5e942]:
                - generic [ref=f5e945]:
                  - checkbox "" [ref=f5e946]
                  - generic [ref=f5e947]: 
              - cell "0303029900" [ref=f5e949]
              - cell "savina dulvin" [ref=f5e951]
              - cell "dulvin" [ref=f5e953]
              - cell [ref=f5e955]
              - cell [ref=f5e956]
              - cell [ref=f5e957]
              - cell [ref=f5e958]
              - cell [ref=f5e959]:
                - generic [ref=f5e960]:
                  - button "" [ref=f5e961]
                  - button "" [ref=f5e963]
            - row [ref=f5e966] [cursor=pointer]:
              - cell "" [ref=f5e967]:
                - generic [ref=f5e970]:
                  - checkbox "" [ref=f5e971]
                  - generic [ref=f5e972]: 
              - cell "0293029900" [ref=f5e974]
              - cell "savina dulvin" [ref=f5e976]
              - cell "dulvin" [ref=f5e978]
              - cell [ref=f5e980]
              - cell [ref=f5e981]
              - cell [ref=f5e982]
              - cell [ref=f5e983]
              - cell [ref=f5e984]:
                - generic [ref=f5e985]:
                  - button "" [ref=f5e986]
                  - button "" [ref=f5e988]
            - row [ref=f5e991] [cursor=pointer]:
              - cell "" [ref=f5e992]:
                - generic [ref=f5e995]:
                  - checkbox "" [ref=f5e996]
                  - generic [ref=f5e997]: 
              - cell "0291029900" [ref=f5e999]
              - cell "savina dulvin" [ref=f5e1001]
              - cell "dulvin" [ref=f5e1003]
              - cell [ref=f5e1005]
              - cell [ref=f5e1006]
              - cell [ref=f5e1007]
              - cell [ref=f5e1008]
              - cell [ref=f5e1009]:
                - generic [ref=f5e1010]:
                  - button "" [ref=f5e1011]
                  - button "" [ref=f5e1013]
            - row [ref=f5e1016] [cursor=pointer]:
              - cell "" [ref=f5e1017]:
                - generic [ref=f5e1020]:
                  - checkbox "" [ref=f5e1021]
                  - generic [ref=f5e1022]: 
              - cell "03671" [ref=f5e1024]
              - cell "Sharath V" [ref=f5e1026]
              - cell "Thampi" [ref=f5e1028]
              - cell [ref=f5e1030]
              - cell [ref=f5e1031]
              - cell [ref=f5e1032]
              - cell [ref=f5e1033]
              - cell [ref=f5e1034]:
                - generic [ref=f5e1035]:
                  - button "" [ref=f5e1036]
                  - button "" [ref=f5e1038]
            - row [ref=f5e1041] [cursor=pointer]:
              - cell "" [ref=f5e1042]:
                - generic [ref=f5e1045]:
                  - checkbox "" [ref=f5e1046]
                  - generic [ref=f5e1047]: 
              - cell "03660447" [ref=f5e1049]
              - cell "Shivaduth S" [ref=f5e1051]
              - cell "Thampi" [ref=f5e1053]
              - cell [ref=f5e1055]
              - cell [ref=f5e1056]
              - cell [ref=f5e1057]
              - cell [ref=f5e1058]
              - cell [ref=f5e1059]:
                - generic [ref=f5e1060]:
                  - button "" [ref=f5e1061]
                  - button "" [ref=f5e1063]
            - row [ref=f5e1066] [cursor=pointer]:
              - cell "" [ref=f5e1067]:
                - generic [ref=f5e1070]:
                  - checkbox "" [ref=f5e1071]
                  - generic [ref=f5e1072]: 
              - cell "0303" [ref=f5e1074]
              - cell "siva kumar" [ref=f5e1076]
              - cell "selvi" [ref=f5e1078]
              - cell [ref=f5e1080]
              - cell [ref=f5e1081]
              - cell [ref=f5e1082]
              - cell [ref=f5e1083]
              - cell [ref=f5e1084]:
                - generic [ref=f5e1085]:
                  - button "" [ref=f5e1086]
                  - button "" [ref=f5e1088]
            - row [ref=f5e1091] [cursor=pointer]:
              - cell "" [ref=f5e1092]:
                - generic [ref=f5e1095]:
                  - checkbox "" [ref=f5e1096]
                  - generic [ref=f5e1097]: 
              - cell "0319" [ref=f5e1099]
              - cell "sree hema" [ref=f5e1101]
              - cell "latha" [ref=f5e1103]
              - cell [ref=f5e1105]
              - cell [ref=f5e1106]
              - cell [ref=f5e1107]
              - cell [ref=f5e1108]
              - cell [ref=f5e1109]:
                - generic [ref=f5e1110]:
                  - button "" [ref=f5e1111]
                  - button "" [ref=f5e1113]
            - row [ref=f5e1116] [cursor=pointer]:
              - cell "" [ref=f5e1117]:
                - generic [ref=f5e1120]:
                  - checkbox "" [ref=f5e1121]
                  - generic [ref=f5e1122]: 
              - cell "0313" [ref=f5e1124]
              - cell "sww" [ref=f5e1126]
              - cell "test" [ref=f5e1128]
              - cell [ref=f5e1130]
              - cell [ref=f5e1131]
              - cell [ref=f5e1132]
              - cell [ref=f5e1133]
              - cell [ref=f5e1134]:
                - generic [ref=f5e1135]:
                  - button "" [ref=f5e1136]
                  - button "" [ref=f5e1138]
            - row [ref=f5e1141] [cursor=pointer]:
              - cell "" [ref=f5e1142]:
                - generic [ref=f5e1145]:
                  - checkbox "" [ref=f5e1146]
                  - generic [ref=f5e1147]: 
              - cell "0310" [ref=f5e1149]
              - cell "sww" [ref=f5e1151]
              - cell "test" [ref=f5e1153]
              - cell [ref=f5e1155]
              - cell [ref=f5e1156]
              - cell [ref=f5e1157]
              - cell [ref=f5e1158]
              - cell [ref=f5e1159]:
                - generic [ref=f5e1160]:
                  - button "" [ref=f5e1161]
                  - button "" [ref=f5e1163]
            - row [ref=f5e1166] [cursor=pointer]:
              - cell "" [ref=f5e1167]:
                - generic [ref=f5e1170]:
                  - checkbox "" [ref=f5e1171]
                  - generic [ref=f5e1172]: 
              - cell "03875012" [ref=f5e1174]
              - cell "Test Automation" [ref=f5e1176]
              - cell "User" [ref=f5e1178]
              - cell [ref=f5e1180]
              - cell [ref=f5e1181]
              - cell [ref=f5e1182]
              - cell [ref=f5e1183]
              - cell [ref=f5e1184]:
                - generic [ref=f5e1185]:
                  - button "" [ref=f5e1186]
                  - button "" [ref=f5e1188]
            - row [ref=f5e1191] [cursor=pointer]:
              - cell "" [ref=f5e1192]:
                - generic [ref=f5e1195]:
                  - checkbox "" [ref=f5e1196]
                  - generic [ref=f5e1197]: 
              - cell "03694567" [ref=f5e1199]
              - cell "Thomas Kutty" [ref=f5e1201]
              - cell "Benny" [ref=f5e1203]
              - cell [ref=f5e1205]
              - cell [ref=f5e1206]
              - cell [ref=f5e1207]
              - cell [ref=f5e1208]
              - cell [ref=f5e1209]:
                - generic [ref=f5e1210]:
                  - button "" [ref=f5e1211]
                  - button "" [ref=f5e1213]
            - row [ref=f5e1216] [cursor=pointer]:
              - cell "" [ref=f5e1217]:
                - generic [ref=f5e1220]:
                  - checkbox "" [ref=f5e1221]
                  - generic [ref=f5e1222]: 
              - cell "0039" [ref=f5e1224]
              - cell "Timothy Lewis" [ref=f5e1226]
              - cell "Amiano" [ref=f5e1228]
              - cell [ref=f5e1230]
              - cell [ref=f5e1231]
              - cell [ref=f5e1232]
              - cell [ref=f5e1233]
              - cell [ref=f5e1234]:
                - generic [ref=f5e1235]:
                  - button "" [ref=f5e1236]
                  - button "" [ref=f5e1238]
            - row [ref=f5e1241] [cursor=pointer]:
              - cell "" [ref=f5e1242]:
                - generic [ref=f5e1245]:
                  - checkbox "" [ref=f5e1246]
                  - generic [ref=f5e1247]: 
              - cell "0318" [ref=f5e1249]
              - cell "Tristan" [ref=f5e1251]
              - cell "L" [ref=f5e1253]
              - cell [ref=f5e1255]
              - cell [ref=f5e1256]
              - cell [ref=f5e1257]
              - cell [ref=f5e1258]
              - cell [ref=f5e1259]:
                - generic [ref=f5e1260]:
                  - button "" [ref=f5e1261]
                  - button "" [ref=f5e1263]
            - row [ref=f5e1266] [cursor=pointer]:
              - cell "" [ref=f5e1267]:
                - generic [ref=f5e1270]:
                  - checkbox "" [ref=f5e1271]
                  - generic [ref=f5e1272]: 
              - cell "0279" [ref=f5e1274]
              - cell "uehwadquzwuehwadquzw" [ref=f5e1276]
              - cell "hzzdyzwxmwhzzdyzwxmw" [ref=f5e1278]
              - cell [ref=f5e1280]
              - cell [ref=f5e1281]
              - cell [ref=f5e1282]
              - cell [ref=f5e1283]
              - cell [ref=f5e1284]:
                - generic [ref=f5e1285]:
                  - button "" [ref=f5e1286]
                  - button "" [ref=f5e1288]
            - row [ref=f5e1291] [cursor=pointer]:
              - cell "" [ref=f5e1292]:
                - generic [ref=f5e1295]:
                  - checkbox "" [ref=f5e1296]
                  - generic [ref=f5e1297]: 
              - cell "0281" [ref=f5e1299]
              - cell "Urvi" [ref=f5e1301]
              - cell "Sri" [ref=f5e1303]
              - cell [ref=f5e1305]
              - cell [ref=f5e1306]
              - cell [ref=f5e1307]
              - cell [ref=f5e1308]
              - cell [ref=f5e1309]:
                - generic [ref=f5e1310]:
                  - button "" [ref=f5e1311]
                  - button "" [ref=f5e1313]
            - row [ref=f5e1316] [cursor=pointer]:
              - cell "" [ref=f5e1317]:
                - generic [ref=f5e1320]:
                  - checkbox "" [ref=f5e1321]
                  - generic [ref=f5e1322]: 
              - cell "0280" [ref=f5e1324]
              - cell "Urvi" [ref=f5e1326]
              - cell "Sri" [ref=f5e1328]
              - cell [ref=f5e1330]
              - cell [ref=f5e1331]
              - cell [ref=f5e1332]
              - cell [ref=f5e1333]
              - cell [ref=f5e1334]:
                - generic [ref=f5e1335]:
                  - button "" [ref=f5e1336]
                  - button "" [ref=f5e1338]
            - row [ref=f5e1341] [cursor=pointer]:
              - cell "" [ref=f5e1342]:
                - generic [ref=f5e1345]:
                  - checkbox "" [ref=f5e1346]
                  - generic [ref=f5e1347]: 
              - cell "0273" [ref=f5e1349]
              - cell "Urvi" [ref=f5e1351]
              - cell "Sri" [ref=f5e1353]
              - cell [ref=f5e1355]
              - cell [ref=f5e1356]
              - cell [ref=f5e1357]
              - cell [ref=f5e1358]
              - cell [ref=f5e1359]:
                - generic [ref=f5e1360]:
                  - button "" [ref=f5e1361]
                  - button "" [ref=f5e1363]
            - row [ref=f5e1366] [cursor=pointer]:
              - cell "" [ref=f5e1367]:
                - generic [ref=f5e1370]:
                  - checkbox "" [ref=f5e1371]
                  - generic [ref=f5e1372]: 
              - cell "0274" [ref=f5e1374]
              - cell "Urvi" [ref=f5e1376]
              - cell "Sri" [ref=f5e1378]
              - cell [ref=f5e1380]
              - cell [ref=f5e1381]
              - cell [ref=f5e1382]
              - cell [ref=f5e1383]
              - cell [ref=f5e1384]:
                - generic [ref=f5e1385]:
                  - button "" [ref=f5e1386]
                  - button "" [ref=f5e1388]
            - row [ref=f5e1391] [cursor=pointer]:
              - cell "" [ref=f5e1392]:
                - generic [ref=f5e1395]:
                  - checkbox "" [ref=f5e1396]
                  - generic [ref=f5e1397]: 
              - cell "0285" [ref=f5e1399]
              - cell "Urvi" [ref=f5e1401]
              - cell "Sri" [ref=f5e1403]
              - cell [ref=f5e1405]
              - cell [ref=f5e1406]
              - cell [ref=f5e1407]
              - cell [ref=f5e1408]
              - cell [ref=f5e1409]:
                - generic [ref=f5e1410]:
                  - button "" [ref=f5e1411]
                  - button "" [ref=f5e1413]
            - row [ref=f5e1416] [cursor=pointer]:
              - cell "" [ref=f5e1417]:
                - generic [ref=f5e1420]:
                  - checkbox "" [ref=f5e1421]
                  - generic [ref=f5e1422]: 
              - cell "0284" [ref=f5e1424]
              - cell "Urvi" [ref=f5e1426]
              - cell "Sri" [ref=f5e1428]
              - cell [ref=f5e1430]
              - cell [ref=f5e1431]
              - cell [ref=f5e1432]
              - cell [ref=f5e1433]
              - cell [ref=f5e1434]:
                - generic [ref=f5e1435]:
                  - button "" [ref=f5e1436]
                  - button "" [ref=f5e1438]
            - row [ref=f5e1441] [cursor=pointer]:
              - cell "" [ref=f5e1442]:
                - generic [ref=f5e1445]:
                  - checkbox "" [ref=f5e1446]
                  - generic [ref=f5e1447]: 
              - cell "0249" [ref=f5e1449]
              - cell "Virat" [ref=f5e1451]
              - cell "Kohli" [ref=f5e1453]
              - cell [ref=f5e1455]
              - cell [ref=f5e1456]
              - cell [ref=f5e1457]
              - cell [ref=f5e1458]
              - cell [ref=f5e1459]:
                - generic [ref=f5e1460]:
                  - button "" [ref=f5e1461]
                  - button "" [ref=f5e1463]
            - row [ref=f5e1466] [cursor=pointer]:
              - cell "" [ref=f5e1467]:
                - generic [ref=f5e1470]:
                  - checkbox "" [ref=f5e1471]
                  - generic [ref=f5e1472]: 
              - cell "09876" [ref=f5e1474]
              - cell "yedghjb1 ru84" [ref=f5e1476]
              - cell "90jsnd" [ref=f5e1478]
              - cell [ref=f5e1480]
              - cell [ref=f5e1481]
              - cell [ref=f5e1482]
              - cell [ref=f5e1483]
              - cell [ref=f5e1484]:
                - generic [ref=f5e1485]:
                  - button "" [ref=f5e1486]
                  - button "" [ref=f5e1488]
            - row [ref=f5e1491] [cursor=pointer]:
              - cell "" [ref=f5e1492]:
                - generic [ref=f5e1495]:
                  - checkbox "" [ref=f5e1496]
                  - generic [ref=f5e1497]: 
              - cell "0311" [ref=f5e1499]
              - cell "yqlluQZYFR" [ref=f5e1501]
              - cell "yaTQBtZgLf" [ref=f5e1503]
              - cell [ref=f5e1505]
              - cell [ref=f5e1506]
              - cell [ref=f5e1507]
              - cell [ref=f5e1508]
              - cell [ref=f5e1509]:
                - generic [ref=f5e1510]:
                  - button "" [ref=f5e1511]
                  - button "" [ref=f5e1513]
            - row [ref=f5e1516] [cursor=pointer]:
              - cell "" [ref=f5e1517]:
                - generic [ref=f5e1520]:
                  - checkbox "" [ref=f5e1521]
                  - generic [ref=f5e1522]: 
              - cell "0259" [ref=f5e1524]
              - cell "zlnudvgazrzlnudvgazr" [ref=f5e1526]
              - cell "smzocpbvswsmzocpbvsw" [ref=f5e1528]
              - cell [ref=f5e1530]
              - cell [ref=f5e1531]
              - cell [ref=f5e1532]
              - cell [ref=f5e1533]
              - cell [ref=f5e1534]:
                - generic [ref=f5e1535]:
                  - button "" [ref=f5e1536]
                  - button "" [ref=f5e1538]
    - generic [ref=f5e1541]:
      - paragraph [ref=f5e1542]: OrangeHRM OS 5.9
      - paragraph [ref=f5e1543]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e1544] [cursor=pointer]:
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