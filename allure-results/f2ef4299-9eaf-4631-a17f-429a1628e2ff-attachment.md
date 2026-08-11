# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> PIM Employee List >> TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression
- Location: tests\PIM\pim-employee-list.spec.ts:196:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1786452711085105 Test User' }) to be visible

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
              - paragraph [ref=f5e127]: mandaa user
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
                - textbox "Type for hints..." [active] [ref=f5e167]: Auto1786
                - listbox [ref=f5e168]:
                  - option "Auto1786452485051794 Test User" [ref=f5e169] [cursor=pointer]
                  - option "Auto1786452679577983 Test User" [ref=f5e171] [cursor=pointer]
                  - option "Auto1786452475162202 Test User" [ref=f5e173] [cursor=pointer]
                  - option "Auto178645217228429 Test User" [ref=f5e175] [cursor=pointer]
                  - option "Auto178645258358484 Test User" [ref=f5e177] [cursor=pointer]
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
          - generic [ref=f5e243]: (178) Records Found
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
              - cell "0312" [ref=f5e287]
              - cell "A8DCo 4Ys" [ref=f5e289]
              - cell "010Z" [ref=f5e291]
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
              - cell "0998" [ref=f5e312]
              - cell "ABC" [ref=f5e314]
              - cell "Abhinay" [ref=f5e316]
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
              - cell "0999" [ref=f5e337]
              - cell "Abhinay" [ref=f5e339]
              - cell "ABC" [ref=f5e341]
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
              - cell "0445" [ref=f5e362]
              - cell "aksh1786451195039" [ref=f5e364]
              - cell "patil1786451195039" [ref=f5e366]
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
              - cell "01715" [ref=f5e387]
              - cell "Amelia" [ref=f5e389]
              - cell "Brown" [ref=f5e391]
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
              - cell "0372" [ref=f5e412]
              - cell "AMIT" [ref=f5e414]
              - cell "BURLI" [ref=f5e416]
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
              - cell "524" [ref=f5e437]
              - cell "aniket Ashok" [ref=f5e439]
              - cell "patil" [ref=f5e441]
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
              - cell "0360" [ref=f5e462]
              - cell "aniket t" [ref=f5e464]
              - cell "t" [ref=f5e466]
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
              - cell "0477" [ref=f5e487]
              - cell "Ash M" [ref=f5e489]
              - cell "Dup" [ref=f5e491]
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
              - cell "0367" [ref=f5e512]
              - cell "Ash J" [ref=f5e514]
              - cell "Tyson" [ref=f5e516]
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
              - cell "0476" [ref=f5e537]
              - cell "Ash M" [ref=f5e539]
              - cell "Dup" [ref=f5e541]
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
              - cell "0451" [ref=f5e562]
              - cell "Ash M" [ref=f5e564]
              - cell "Dup" [ref=f5e566]
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
              - cell "0454" [ref=f5e587]
              - cell "Ash M" [ref=f5e589]
              - cell "Dup" [ref=f5e591]
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
              - cell "0470" [ref=f5e612]
              - cell "Auto" [ref=f5e614]
              - cell "Employee" [ref=f5e616]
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
              - cell "0461" [ref=f5e637]
              - cell "Auto" [ref=f5e639]
              - cell "Member" [ref=f5e641]
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
              - cell "0440" [ref=f5e662]
              - cell "Auto" [ref=f5e664]
              - cell "Employee" [ref=f5e666]
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
              - cell "0467" [ref=f5e687]
              - cell "Auto1786452007650 Test" [ref=f5e689]
              - cell "User" [ref=f5e691]
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
              - cell "0468" [ref=f5e712]
              - cell "Auto1786452073703769 Test" [ref=f5e714]
              - cell "User" [ref=f5e716]
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
              - cell "0471" [ref=f5e737]
              - cell "Auto1786452132919706 Test" [ref=f5e739]
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
              - cell "0473" [ref=f5e762]
              - cell "Auto178645217228429 Test" [ref=f5e764]
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
              - cell "0481" [ref=f5e787]
              - cell "Auto1786452475162202 Test" [ref=f5e789]
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
              - cell "0483" [ref=f5e812]
              - cell "Auto1786452485051794 Test" [ref=f5e814]
              - cell "User" [ref=f5e816]
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
              - cell "0485" [ref=f5e837]
              - cell "Auto1786452533177545 Test" [ref=f5e839]
              - cell "User" [ref=f5e841]
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
                - generic [ref=f5e858]:
                  - checkbox "" [ref=f5e859]
                  - generic [ref=f5e860]: 
              - cell "0486" [ref=f5e862]
              - cell "Auto1786452552165343 Test" [ref=f5e864]
              - cell "User" [ref=f5e866]
              - cell [ref=f5e868]
              - cell [ref=f5e869]
              - cell [ref=f5e870]
              - cell [ref=f5e871]
              - cell [ref=f5e872]:
                - generic [ref=f5e873]:
                  - button "" [ref=f5e874]
                  - button "" [ref=f5e876]
            - row [ref=f5e879] [cursor=pointer]:
              - cell "" [ref=f5e880]:
                - generic [ref=f5e883]:
                  - checkbox "" [ref=f5e884]
                  - generic [ref=f5e885]: 
              - cell "0487" [ref=f5e887]
              - cell "Auto1786452568494731 Test" [ref=f5e889]
              - cell "User" [ref=f5e891]
              - cell [ref=f5e893]
              - cell [ref=f5e894]
              - cell [ref=f5e895]
              - cell [ref=f5e896]
              - cell [ref=f5e897]:
                - generic [ref=f5e898]:
                  - button "" [ref=f5e899]
                  - button "" [ref=f5e901]
            - row [ref=f5e904] [cursor=pointer]:
              - cell "" [ref=f5e905]:
                - generic [ref=f5e908]:
                  - checkbox "" [ref=f5e909]
                  - generic [ref=f5e910]: 
              - cell "0488" [ref=f5e912]
              - cell "Auto178645258358484 Test" [ref=f5e914]
              - cell "User" [ref=f5e916]
              - cell [ref=f5e918]
              - cell [ref=f5e919]
              - cell [ref=f5e920]
              - cell [ref=f5e921]
              - cell [ref=f5e922]:
                - generic [ref=f5e923]:
                  - button "" [ref=f5e924]
                  - button "" [ref=f5e926]
            - row [ref=f5e929] [cursor=pointer]:
              - cell "" [ref=f5e930]:
                - generic [ref=f5e933]:
                  - checkbox "" [ref=f5e934]
                  - generic [ref=f5e935]: 
              - cell "0489" [ref=f5e937]
              - cell "Auto1786452679577983 Test" [ref=f5e939]
              - cell "User" [ref=f5e941]
              - cell [ref=f5e943]
              - cell [ref=f5e944]
              - cell [ref=f5e945]
              - cell [ref=f5e946]
              - cell [ref=f5e947]:
                - generic [ref=f5e948]:
                  - button "" [ref=f5e949]
                  - button "" [ref=f5e951]
            - row [ref=f5e954] [cursor=pointer]:
              - cell "" [ref=f5e955]:
                - generic [ref=f5e958]:
                  - checkbox "" [ref=f5e959]
                  - generic [ref=f5e960]: 
              - cell "0492" [ref=f5e962]
              - cell "Auto1786452711085105 Test" [ref=f5e964]
              - cell "User" [ref=f5e966]
              - cell [ref=f5e968]
              - cell [ref=f5e969]
              - cell [ref=f5e970]
              - cell [ref=f5e971]
              - cell [ref=f5e972]:
                - generic [ref=f5e973]:
                  - button "" [ref=f5e974]
                  - button "" [ref=f5e976]
            - row [ref=f5e979] [cursor=pointer]:
              - cell "" [ref=f5e980]:
                - generic [ref=f5e983]:
                  - checkbox "" [ref=f5e984]
                  - generic [ref=f5e985]: 
              - cell "0303" [ref=f5e987]
              - cell "bala kumar" [ref=f5e989]
              - cell "ravi" [ref=f5e991]
              - cell [ref=f5e993]
              - cell [ref=f5e994]
              - cell [ref=f5e995]
              - cell [ref=f5e996]
              - cell [ref=f5e997]:
                - generic [ref=f5e998]:
                  - button "" [ref=f5e999]
                  - button "" [ref=f5e1001]
            - row [ref=f5e1004] [cursor=pointer]:
              - cell "" [ref=f5e1005]:
                - generic [ref=f5e1008]:
                  - checkbox "" [ref=f5e1009]
                  - generic [ref=f5e1010]: 
              - cell "0292" [ref=f5e1012]
              - cell "bmrtahvwhibmrtahvwhi" [ref=f5e1014]
              - cell "hbfqkhjfqbhbfqkhjfqb" [ref=f5e1016]
              - cell [ref=f5e1018]
              - cell [ref=f5e1019]
              - cell [ref=f5e1020]
              - cell [ref=f5e1021]
              - cell [ref=f5e1022]:
                - generic [ref=f5e1023]:
                  - button "" [ref=f5e1024]
                  - button "" [ref=f5e1026]
            - row [ref=f5e1029] [cursor=pointer]:
              - cell "" [ref=f5e1030]:
                - generic [ref=f5e1033]:
                  - checkbox "" [ref=f5e1034]
                  - generic [ref=f5e1035]: 
              - cell "3447488" [ref=f5e1037]
              - cell "BNPUJl hXFJL" [ref=f5e1039]
              - cell "rCrLNEtb" [ref=f5e1041]
              - cell [ref=f5e1043]
              - cell [ref=f5e1044]
              - cell [ref=f5e1045]
              - cell [ref=f5e1046]
              - cell [ref=f5e1047]:
                - generic [ref=f5e1048]:
                  - button "" [ref=f5e1049]
                  - button "" [ref=f5e1051]
            - row [ref=f5e1054] [cursor=pointer]:
              - cell "" [ref=f5e1055]:
                - generic [ref=f5e1058]:
                  - checkbox "" [ref=f5e1059]
                  - generic [ref=f5e1060]: 
              - cell "0452" [ref=f5e1062]
              - cell "charifa bel" [ref=f5e1064]
              - cell "belgueroua" [ref=f5e1066]
              - cell [ref=f5e1068]
              - cell [ref=f5e1069]
              - cell [ref=f5e1070]
              - cell [ref=f5e1071]
              - cell [ref=f5e1072]:
                - generic [ref=f5e1073]:
                  - button "" [ref=f5e1074]
                  - button "" [ref=f5e1076]
            - row [ref=f5e1079] [cursor=pointer]:
              - cell "" [ref=f5e1080]:
                - generic [ref=f5e1083]:
                  - checkbox "" [ref=f5e1084]
                  - generic [ref=f5e1085]: 
              - cell "0371" [ref=f5e1087]
              - cell "charifa bel" [ref=f5e1089]
              - cell "belgueroua" [ref=f5e1091]
              - cell [ref=f5e1093]
              - cell [ref=f5e1094]
              - cell [ref=f5e1095]
              - cell [ref=f5e1096]
              - cell [ref=f5e1097]:
                - generic [ref=f5e1098]:
                  - button "" [ref=f5e1099]
                  - button "" [ref=f5e1101]
            - row [ref=f5e1104] [cursor=pointer]:
              - cell "" [ref=f5e1105]:
                - generic [ref=f5e1108]:
                  - checkbox "" [ref=f5e1109]
                  - generic [ref=f5e1110]: 
              - cell "0453" [ref=f5e1112]
              - cell "charifa bel" [ref=f5e1114]
              - cell "belgueroua" [ref=f5e1116]
              - cell [ref=f5e1118]
              - cell [ref=f5e1119]
              - cell [ref=f5e1120]
              - cell [ref=f5e1121]
              - cell [ref=f5e1122]:
                - generic [ref=f5e1123]:
                  - button "" [ref=f5e1124]
                  - button "" [ref=f5e1126]
            - row [ref=f5e1129] [cursor=pointer]:
              - cell "" [ref=f5e1130]:
                - generic [ref=f5e1133]:
                  - checkbox "" [ref=f5e1134]
                  - generic [ref=f5e1135]: 
              - cell "0419" [ref=f5e1137]
              - cell "charifa bel" [ref=f5e1139]
              - cell "belgueroua" [ref=f5e1141]
              - cell [ref=f5e1143]
              - cell [ref=f5e1144]
              - cell [ref=f5e1145]
              - cell [ref=f5e1146]
              - cell [ref=f5e1147]:
                - generic [ref=f5e1148]:
                  - button "" [ref=f5e1149]
                  - button "" [ref=f5e1151]
            - row [ref=f5e1154] [cursor=pointer]:
              - cell "" [ref=f5e1155]:
                - generic [ref=f5e1158]:
                  - checkbox "" [ref=f5e1159]
                  - generic [ref=f5e1160]: 
              - cell "0320" [ref=f5e1162]
              - cell "Charles" [ref=f5e1164]
              - cell "Carter" [ref=f5e1166]
              - cell [ref=f5e1168]
              - cell [ref=f5e1169]
              - cell [ref=f5e1170]
              - cell [ref=f5e1171]
              - cell [ref=f5e1172]:
                - generic [ref=f5e1173]:
                  - button "" [ref=f5e1174]
                  - button "" [ref=f5e1176]
            - row [ref=f5e1179] [cursor=pointer]:
              - cell "" [ref=f5e1180]:
                - generic [ref=f5e1183]:
                  - checkbox "" [ref=f5e1184]
                  - generic [ref=f5e1185]: 
              - cell "00392" [ref=f5e1187]
              - cell "Charlotte" [ref=f5e1189]
              - cell "Smith" [ref=f5e1191]
              - cell [ref=f5e1193]
              - cell [ref=f5e1194]
              - cell [ref=f5e1195]
              - cell [ref=f5e1196]
              - cell [ref=f5e1197]:
                - generic [ref=f5e1198]:
                  - button "" [ref=f5e1199]
                  - button "" [ref=f5e1201]
            - row [ref=f5e1204] [cursor=pointer]:
              - cell "" [ref=f5e1205]:
                - generic [ref=f5e1208]:
                  - checkbox "" [ref=f5e1209]
                  - generic [ref=f5e1210]: 
              - cell "0363" [ref=f5e1212]
              - cell "Christopher" [ref=f5e1214]
              - cell "Mcmillan" [ref=f5e1216]
              - cell [ref=f5e1218]
              - cell [ref=f5e1219]
              - cell [ref=f5e1220]
              - cell [ref=f5e1221]
              - cell [ref=f5e1222]:
                - generic [ref=f5e1223]:
                  - button "" [ref=f5e1224]
                  - button "" [ref=f5e1226]
            - row [ref=f5e1229] [cursor=pointer]:
              - cell "" [ref=f5e1230]:
                - generic [ref=f5e1233]:
                  - checkbox "" [ref=f5e1234]
                  - generic [ref=f5e1235]: 
              - cell "0290" [ref=f5e1237]
              - cell "dhbrukkuzldhbrukkuzl" [ref=f5e1239]
              - cell "ibuvlwtfsfibuvlwtfsf" [ref=f5e1241]
              - cell [ref=f5e1243]
              - cell [ref=f5e1244]
              - cell [ref=f5e1245]
              - cell [ref=f5e1246]
              - cell [ref=f5e1247]:
                - generic [ref=f5e1248]:
                  - button "" [ref=f5e1249]
                  - button "" [ref=f5e1251]
            - row [ref=f5e1254] [cursor=pointer]:
              - cell "" [ref=f5e1255]:
                - generic [ref=f5e1258]:
                  - checkbox "" [ref=f5e1259]
                  - generic [ref=f5e1260]: 
              - cell "0294" [ref=f5e1262]
              - cell "DHINA KARAN" [ref=f5e1264]
              - cell "P" [ref=f5e1266]
              - cell [ref=f5e1268]
              - cell [ref=f5e1269]
              - cell [ref=f5e1270]
              - cell [ref=f5e1271]
              - cell [ref=f5e1272]:
                - generic [ref=f5e1273]:
                  - button "" [ref=f5e1274]
                  - button "" [ref=f5e1276]
            - row [ref=f5e1279] [cursor=pointer]:
              - cell "" [ref=f5e1280]:
                - generic [ref=f5e1283]:
                  - checkbox "" [ref=f5e1284]
                  - generic [ref=f5e1285]: 
              - cell "0377" [ref=f5e1287]
              - cell "Dhivishya" [ref=f5e1289]
              - cell "M" [ref=f5e1291]
              - cell [ref=f5e1293]
              - cell [ref=f5e1294]
              - cell [ref=f5e1295]
              - cell [ref=f5e1296]
              - cell [ref=f5e1297]:
                - generic [ref=f5e1298]:
                  - button "" [ref=f5e1299]
                  - button "" [ref=f5e1301]
            - row [ref=f5e1304] [cursor=pointer]:
              - cell "" [ref=f5e1305]:
                - generic [ref=f5e1308]:
                  - checkbox "" [ref=f5e1309]
                  - generic [ref=f5e1310]: 
              - cell "72180" [ref=f5e1312]
              - cell "ejgenS fcJxutzr" [ref=f5e1314]
              - cell "BQxMuemCYu" [ref=f5e1316]
              - cell [ref=f5e1318]
              - cell [ref=f5e1319]
              - cell [ref=f5e1320]
              - cell [ref=f5e1321]
              - cell [ref=f5e1322]:
                - generic [ref=f5e1323]:
                  - button "" [ref=f5e1324]
                  - button "" [ref=f5e1326]
            - row [ref=f5e1329] [cursor=pointer]:
              - cell "" [ref=f5e1330]:
                - generic [ref=f5e1333]:
                  - checkbox "" [ref=f5e1334]
                  - generic [ref=f5e1335]: 
              - cell "49346792" [ref=f5e1337]
              - cell "Elias Ryan" [ref=f5e1339]
              - cell "Wyman" [ref=f5e1341]
              - cell [ref=f5e1343]
              - cell [ref=f5e1344]
              - cell [ref=f5e1345]
              - cell "Kale Wilderman" [ref=f5e1346]
              - cell [ref=f5e1348]:
                - generic [ref=f5e1349]:
                  - button "" [ref=f5e1350]
                  - button "" [ref=f5e1352]
            - row [ref=f5e1355] [cursor=pointer]:
              - cell "" [ref=f5e1356]:
                - generic [ref=f5e1359]:
                  - checkbox "" [ref=f5e1360]
                  - generic [ref=f5e1361]: 
              - cell "09557" [ref=f5e1363]
              - cell "Emily" [ref=f5e1365]
              - cell "Jones" [ref=f5e1367]
              - cell [ref=f5e1369]
              - cell [ref=f5e1370]
              - cell [ref=f5e1371]
              - cell [ref=f5e1372]
              - cell [ref=f5e1373]:
                - generic [ref=f5e1374]:
                  - button "" [ref=f5e1375]
                  - button "" [ref=f5e1377]
            - row [ref=f5e1380] [cursor=pointer]:
              - cell "" [ref=f5e1381]:
                - generic [ref=f5e1384]:
                  - checkbox "" [ref=f5e1385]
                  - generic [ref=f5e1386]: 
              - cell "1235" [ref=f5e1388]
              - cell "FName Mname" [ref=f5e1390]
              - cell "LName" [ref=f5e1392]
              - cell [ref=f5e1394]
              - cell [ref=f5e1395]
              - cell [ref=f5e1396]
              - cell [ref=f5e1397]
              - cell [ref=f5e1398]:
                - generic [ref=f5e1399]:
                  - button "" [ref=f5e1400]
                  - button "" [ref=f5e1402]
            - row [ref=f5e1405] [cursor=pointer]:
              - cell "" [ref=f5e1406]:
                - generic [ref=f5e1409]:
                  - checkbox "" [ref=f5e1410]
                  - generic [ref=f5e1411]: 
              - cell "5174515" [ref=f5e1413]
              - cell "fSieHW PteIWxNf" [ref=f5e1415]
              - cell "HsdeTWnWAb" [ref=f5e1417]
              - cell [ref=f5e1419]
              - cell [ref=f5e1420]
              - cell [ref=f5e1421]
              - cell [ref=f5e1422]
              - cell [ref=f5e1423]:
                - generic [ref=f5e1424]:
                  - button "" [ref=f5e1425]
                  - button "" [ref=f5e1427]
            - row [ref=f5e1430] [cursor=pointer]:
              - cell "" [ref=f5e1431]:
                - generic [ref=f5e1434]:
                  - checkbox "" [ref=f5e1435]
                  - generic [ref=f5e1436]: 
              - cell "ATPValue" [ref=f5e1438]
              - cell "ftdkux" [ref=f5e1440]
              - cell "ltsxgy" [ref=f5e1442]
              - cell [ref=f5e1444]
              - cell [ref=f5e1445]
              - cell [ref=f5e1446]
              - cell [ref=f5e1447]
              - cell [ref=f5e1448]:
                - generic [ref=f5e1449]:
                  - button "" [ref=f5e1450]
                  - button "" [ref=f5e1452]
            - row [ref=f5e1455] [cursor=pointer]:
              - cell "" [ref=f5e1456]:
                - generic [ref=f5e1459]:
                  - checkbox "" [ref=f5e1460]
                  - generic [ref=f5e1461]: 
              - cell "ATPValue" [ref=f5e1463]
              - cell "fthnvn" [ref=f5e1465]
              - cell "ltwrrt" [ref=f5e1467]
              - cell [ref=f5e1469]
              - cell [ref=f5e1470]
              - cell [ref=f5e1471]
              - cell [ref=f5e1472]
              - cell [ref=f5e1473]:
                - generic [ref=f5e1474]:
                  - button "" [ref=f5e1475]
                  - button "" [ref=f5e1477]
            - row [ref=f5e1480] [cursor=pointer]:
              - cell "" [ref=f5e1481]:
                - generic [ref=f5e1484]:
                  - checkbox "" [ref=f5e1485]
                  - generic [ref=f5e1486]: 
              - cell "ATPValue" [ref=f5e1488]
              - cell "fthnvn" [ref=f5e1490]
              - cell "ltwrrt" [ref=f5e1492]
              - cell [ref=f5e1494]
              - cell [ref=f5e1495]
              - cell [ref=f5e1496]
              - cell [ref=f5e1497]
              - cell [ref=f5e1498]:
                - generic [ref=f5e1499]:
                  - button "" [ref=f5e1500]
                  - button "" [ref=f5e1502]
            - row [ref=f5e1505] [cursor=pointer]:
              - cell "" [ref=f5e1506]:
                - generic [ref=f5e1509]:
                  - checkbox "" [ref=f5e1510]
                  - generic [ref=f5e1511]: 
              - cell "ATPValue" [ref=f5e1513]
              - cell "fthyfv" [ref=f5e1515]
              - cell "ltrhtm" [ref=f5e1517]
              - cell [ref=f5e1519]
              - cell [ref=f5e1520]
              - cell [ref=f5e1521]
              - cell [ref=f5e1522]
              - cell [ref=f5e1523]:
                - generic [ref=f5e1524]:
                  - button "" [ref=f5e1525]
                  - button "" [ref=f5e1527]
        - navigation "Pagination Navigation" [ref=f5e1530]:
          - list [ref=f5e1531]:
            - listitem [ref=f5e1532]:
              - button "1" [ref=f5e1533] [cursor=pointer]
            - listitem [ref=f5e1534]:
              - button "2" [ref=f5e1535] [cursor=pointer]
            - listitem [ref=f5e1536]:
              - button "3" [ref=f5e1537] [cursor=pointer]
            - listitem [ref=f5e1538]:
              - button "4" [ref=f5e1539] [cursor=pointer]
            - listitem [ref=f5e1540]:
              - button "" [ref=f5e1541] [cursor=pointer]
    - generic [ref=f5e1543]:
      - paragraph [ref=f5e1544]: OrangeHRM OS 5.9
      - paragraph [ref=f5e1545]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e1546] [cursor=pointer]:
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