# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_082 - Reset should clear a selected employee name filter @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:1072:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'ResetName1786453800195223 Test User' }) to be visible

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
              - paragraph [ref=f4e127]: Daisy Nguyen
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
                - textbox "Type for hints..." [active] [ref=f4e167]: ResetName1786453800195223
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
          - generic [ref=f4e234]: (207) Records Found
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
              - cell "05137" [ref=f4e278]
              - cell "66 6" [ref=f4e280]
              - cell "6" [ref=f4e282]
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
              - cell "idtest" [ref=f4e303]
              - cell "A8DCo middle_name_testing" [ref=f4e305]
              - cell "010Z" [ref=f4e307]
              - cell "Chief Technical Officer" [ref=f4e309]
              - cell "Full-Time Contract" [ref=f4e311]
              - cell "Administration" [ref=f4e313]
              - cell [ref=f4e315]
              - cell [ref=f4e316]:
                - generic [ref=f4e317]:
                  - button "" [ref=f4e318]
                  - button "" [ref=f4e320]
            - row [ref=f4e323] [cursor=pointer]:
              - cell "" [ref=f4e324]:
                - generic [ref=f4e327]:
                  - checkbox "" [ref=f4e328]
                  - generic [ref=f4e329]: 
              - cell "dfa2ea3a" [ref=f4e331]
              - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" [ref=f4e333]
              - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" [ref=f4e335]
              - cell [ref=f4e337]
              - cell [ref=f4e338]
              - cell [ref=f4e339]
              - cell [ref=f4e340]
              - cell [ref=f4e341]:
                - generic [ref=f4e342]:
                  - button "" [ref=f4e343]
                  - button "" [ref=f4e345]
            - row [ref=f4e348] [cursor=pointer]:
              - cell "" [ref=f4e349]:
                - generic [ref=f4e352]:
                  - checkbox "" [ref=f4e353]
                  - generic [ref=f4e354]: 
              - cell "0998" [ref=f4e356]
              - cell "ABC" [ref=f4e358]
              - cell "Abhinay" [ref=f4e360]
              - cell "Account Assistant" [ref=f4e362]
              - cell "Full-Time Permanent" [ref=f4e364]
              - cell "Engineering" [ref=f4e366]
              - cell [ref=f4e368]
              - cell [ref=f4e369]:
                - generic [ref=f4e370]:
                  - button "" [ref=f4e371]
                  - button "" [ref=f4e373]
            - row [ref=f4e376] [cursor=pointer]:
              - cell "" [ref=f4e377]:
                - generic [ref=f4e380]:
                  - checkbox "" [ref=f4e381]
                  - generic [ref=f4e382]: 
              - cell "0999" [ref=f4e384]
              - cell "Abhinay" [ref=f4e386]
              - cell "ABC" [ref=f4e388]
              - cell "Payroll Administrator" [ref=f4e390]
              - cell "Part-Time Internship" [ref=f4e392]
              - cell "Sales & Marketing" [ref=f4e394]
              - cell [ref=f4e396]
              - cell [ref=f4e397]:
                - generic [ref=f4e398]:
                  - button "" [ref=f4e399]
                  - button "" [ref=f4e401]
            - row [ref=f4e404] [cursor=pointer]:
              - cell "" [ref=f4e405]:
                - generic [ref=f4e408]:
                  - checkbox "" [ref=f4e409]
                  - generic [ref=f4e410]: 
              - cell "0445" [ref=f4e412]
              - cell "aksh1786451195039" [ref=f4e414]
              - cell "patil1786451195039" [ref=f4e416]
              - cell "Finance Manager" [ref=f4e418]
              - cell "Full-Time Permanent" [ref=f4e420]
              - cell "Administration" [ref=f4e422]
              - cell [ref=f4e424]
              - cell [ref=f4e425]:
                - generic [ref=f4e426]:
                  - button "" [ref=f4e427]
                  - button "" [ref=f4e429]
            - row [ref=f4e432] [cursor=pointer]:
              - cell "" [ref=f4e433]:
                - generic [ref=f4e436]:
                  - checkbox "" [ref=f4e437]
                  - generic [ref=f4e438]: 
              - cell "01715" [ref=f4e440]
              - cell "Amelia" [ref=f4e442]
              - cell "Brown" [ref=f4e444]
              - cell "Customer Success Manager" [ref=f4e446]
              - cell "Full-Time Permanent" [ref=f4e448]
              - cell "Development" [ref=f4e450]
              - cell [ref=f4e452]
              - cell [ref=f4e453]:
                - generic [ref=f4e454]:
                  - button "" [ref=f4e455]
                  - button "" [ref=f4e457]
            - row [ref=f4e460] [cursor=pointer]:
              - cell "" [ref=f4e461]:
                - generic [ref=f4e464]:
                  - checkbox "" [ref=f4e465]
                  - generic [ref=f4e466]: 
              - cell "0372" [ref=f4e468]
              - cell "AMIT" [ref=f4e470]
              - cell "BURLI" [ref=f4e472]
              - cell [ref=f4e474]
              - cell [ref=f4e475]
              - cell "Human Resources" [ref=f4e476]
              - cell [ref=f4e478]
              - cell [ref=f4e479]:
                - generic [ref=f4e480]:
                  - button "" [ref=f4e481]
                  - button "" [ref=f4e483]
            - row [ref=f4e486] [cursor=pointer]:
              - cell "" [ref=f4e487]:
                - generic [ref=f4e490]:
                  - checkbox "" [ref=f4e491]
                  - generic [ref=f4e492]: 
              - cell "524" [ref=f4e494]
              - cell "aniket Ashok" [ref=f4e496]
              - cell "patil" [ref=f4e498]
              - cell [ref=f4e500]
              - cell [ref=f4e501]
              - cell "Administration" [ref=f4e502]
              - cell [ref=f4e504]
              - cell [ref=f4e505]:
                - generic [ref=f4e506]:
                  - button "" [ref=f4e507]
                  - button "" [ref=f4e509]
            - row [ref=f4e512] [cursor=pointer]:
              - cell "" [ref=f4e513]:
                - generic [ref=f4e516]:
                  - checkbox "" [ref=f4e517]
                  - generic [ref=f4e518]: 
              - cell "0360" [ref=f4e520]
              - cell "aniket t" [ref=f4e522]
              - cell "t" [ref=f4e524]
              - cell [ref=f4e526]
              - cell [ref=f4e527]
              - cell "Development" [ref=f4e528]
              - cell [ref=f4e530]
              - cell [ref=f4e531]:
                - generic [ref=f4e532]:
                  - button "" [ref=f4e533]
                  - button "" [ref=f4e535]
            - row [ref=f4e538] [cursor=pointer]:
              - cell "" [ref=f4e539]:
                - generic [ref=f4e542]:
                  - checkbox "" [ref=f4e543]
                  - generic [ref=f4e544]: 
              - cell "229" [ref=f4e546]
              - cell "aniket Ashok" [ref=f4e548]
              - cell "patil" [ref=f4e550]
              - cell [ref=f4e552]
              - cell [ref=f4e553]
              - cell [ref=f4e554]
              - cell [ref=f4e555]
              - cell [ref=f4e556]:
                - generic [ref=f4e557]:
                  - button "" [ref=f4e558]
                  - button "" [ref=f4e560]
            - row [ref=f4e563] [cursor=pointer]:
              - cell "" [ref=f4e564]:
                - generic [ref=f4e567]:
                  - checkbox "" [ref=f4e568]
                  - generic [ref=f4e569]: 
              - cell "0367" [ref=f4e571]
              - cell "Ash J" [ref=f4e573]
              - cell "Tyson" [ref=f4e575]
              - cell [ref=f4e577]
              - cell [ref=f4e578]
              - cell [ref=f4e579]
              - cell [ref=f4e580]
              - cell [ref=f4e581]:
                - generic [ref=f4e582]:
                  - button "" [ref=f4e583]
                  - button "" [ref=f4e585]
            - row [ref=f4e588] [cursor=pointer]:
              - cell "" [ref=f4e589]:
                - generic [ref=f4e592]:
                  - checkbox "" [ref=f4e593]
                  - generic [ref=f4e594]: 
              - cell "0477" [ref=f4e596]
              - cell "Ash M" [ref=f4e598]
              - cell "Dup" [ref=f4e600]
              - cell [ref=f4e602]
              - cell [ref=f4e603]
              - cell "Quality Assurance" [ref=f4e604]
              - cell [ref=f4e606]
              - cell [ref=f4e607]:
                - generic [ref=f4e608]:
                  - button "" [ref=f4e609]
                  - button "" [ref=f4e611]
            - row [ref=f4e614] [cursor=pointer]:
              - cell "" [ref=f4e615]:
                - generic [ref=f4e618]:
                  - checkbox "" [ref=f4e619]
                  - generic [ref=f4e620]: 
              - cell "0451" [ref=f4e622]
              - cell "Ash M" [ref=f4e624]
              - cell "Dup" [ref=f4e626]
              - cell [ref=f4e628]
              - cell [ref=f4e629]
              - cell [ref=f4e630]
              - cell [ref=f4e631]
              - cell [ref=f4e632]:
                - generic [ref=f4e633]:
                  - button "" [ref=f4e634]
                  - button "" [ref=f4e636]
            - row [ref=f4e639] [cursor=pointer]:
              - cell "" [ref=f4e640]:
                - generic [ref=f4e643]:
                  - checkbox "" [ref=f4e644]
                  - generic [ref=f4e645]: 
              - cell "0476" [ref=f4e647]
              - cell "Ash M" [ref=f4e649]
              - cell "Dup" [ref=f4e651]
              - cell [ref=f4e653]
              - cell [ref=f4e654]
              - cell [ref=f4e655]
              - cell [ref=f4e656]
              - cell [ref=f4e657]:
                - generic [ref=f4e658]:
                  - button "" [ref=f4e659]
                  - button "" [ref=f4e661]
            - row [ref=f4e664] [cursor=pointer]:
              - cell "" [ref=f4e665]:
                - generic [ref=f4e668]:
                  - checkbox "" [ref=f4e669]
                  - generic [ref=f4e670]: 
              - cell "0454" [ref=f4e672]
              - cell "Ash M" [ref=f4e674]
              - cell "Dup" [ref=f4e676]
              - cell [ref=f4e678]
              - cell [ref=f4e679]
              - cell [ref=f4e680]
              - cell [ref=f4e681]
              - cell [ref=f4e682]:
                - generic [ref=f4e683]:
                  - button "" [ref=f4e684]
                  - button "" [ref=f4e686]
            - row [ref=f4e689] [cursor=pointer]:
              - cell "" [ref=f4e690]:
                - generic [ref=f4e693]:
                  - checkbox "" [ref=f4e694]
                  - generic [ref=f4e695]: 
              - cell "0440" [ref=f4e697]
              - cell "Auto" [ref=f4e699]
              - cell "Employee" [ref=f4e701]
              - cell [ref=f4e703]
              - cell [ref=f4e704]
              - cell [ref=f4e705]
              - cell [ref=f4e706]
              - cell [ref=f4e707]:
                - generic [ref=f4e708]:
                  - button "" [ref=f4e709]
                  - button "" [ref=f4e711]
            - row [ref=f4e714] [cursor=pointer]:
              - cell "" [ref=f4e715]:
                - generic [ref=f4e718]:
                  - checkbox "" [ref=f4e719]
                  - generic [ref=f4e720]: 
              - cell "0470" [ref=f4e722]
              - cell "Auto" [ref=f4e724]
              - cell "Employee" [ref=f4e726]
              - cell [ref=f4e728]
              - cell [ref=f4e729]
              - cell [ref=f4e730]
              - cell [ref=f4e731]
              - cell [ref=f4e732]:
                - generic [ref=f4e733]:
                  - button "" [ref=f4e734]
                  - button "" [ref=f4e736]
            - row [ref=f4e739] [cursor=pointer]:
              - cell "" [ref=f4e740]:
                - generic [ref=f4e743]:
                  - checkbox "" [ref=f4e744]
                  - generic [ref=f4e745]: 
              - cell "0461" [ref=f4e747]
              - cell "Auto" [ref=f4e749]
              - cell "Member" [ref=f4e751]
              - cell [ref=f4e753]
              - cell [ref=f4e754]
              - cell [ref=f4e755]
              - cell [ref=f4e756]
              - cell [ref=f4e757]:
                - generic [ref=f4e758]:
                  - button "" [ref=f4e759]
                  - button "" [ref=f4e761]
            - row [ref=f4e764] [cursor=pointer]:
              - cell "" [ref=f4e765]:
                - generic [ref=f4e768]:
                  - checkbox "" [ref=f4e769]
                  - generic [ref=f4e770]: 
              - cell "0467" [ref=f4e772]
              - cell "Auto1786452007650 Test" [ref=f4e774]
              - cell "User" [ref=f4e776]
              - cell [ref=f4e778]
              - cell [ref=f4e779]
              - cell [ref=f4e780]
              - cell [ref=f4e781]
              - cell [ref=f4e782]:
                - generic [ref=f4e783]:
                  - button "" [ref=f4e784]
                  - button "" [ref=f4e786]
            - row [ref=f4e789] [cursor=pointer]:
              - cell "" [ref=f4e790]:
                - generic [ref=f4e793]:
                  - checkbox "" [ref=f4e794]
                  - generic [ref=f4e795]: 
              - cell "0468" [ref=f4e797]
              - cell "Auto1786452073703769 Test" [ref=f4e799]
              - cell "User" [ref=f4e801]
              - cell [ref=f4e803]
              - cell [ref=f4e804]
              - cell [ref=f4e805]
              - cell [ref=f4e806]
              - cell [ref=f4e807]:
                - generic [ref=f4e808]:
                  - button "" [ref=f4e809]
                  - button "" [ref=f4e811]
            - row [ref=f4e814] [cursor=pointer]:
              - cell "" [ref=f4e815]:
                - generic [ref=f4e818]:
                  - checkbox "" [ref=f4e819]
                  - generic [ref=f4e820]: 
              - cell "0471" [ref=f4e822]
              - cell "Auto1786452132919706 Test" [ref=f4e824]
              - cell "User" [ref=f4e826]
              - cell [ref=f4e828]
              - cell [ref=f4e829]
              - cell [ref=f4e830]
              - cell [ref=f4e831]
              - cell [ref=f4e832]:
                - generic [ref=f4e833]:
                  - button "" [ref=f4e834]
                  - button "" [ref=f4e836]
            - row [ref=f4e839] [cursor=pointer]:
              - cell "" [ref=f4e840]:
                - generic [ref=f4e843]:
                  - checkbox "" [ref=f4e844]
                  - generic [ref=f4e845]: 
              - cell "0473" [ref=f4e847]
              - cell "Auto178645217228429 Test" [ref=f4e849]
              - cell "User" [ref=f4e851]
              - cell [ref=f4e853]
              - cell [ref=f4e854]
              - cell [ref=f4e855]
              - cell [ref=f4e856]
              - cell [ref=f4e857]:
                - generic [ref=f4e858]:
                  - button "" [ref=f4e859]
                  - button "" [ref=f4e861]
            - row [ref=f4e864] [cursor=pointer]:
              - cell "" [ref=f4e865]:
                - generic [ref=f4e868]:
                  - checkbox "" [ref=f4e869]
                  - generic [ref=f4e870]: 
              - cell "0481" [ref=f4e872]
              - cell "Auto1786452475162202 Test" [ref=f4e874]
              - cell "User" [ref=f4e876]
              - cell [ref=f4e878]
              - cell [ref=f4e879]
              - cell [ref=f4e880]
              - cell [ref=f4e881]
              - cell [ref=f4e882]:
                - generic [ref=f4e883]:
                  - button "" [ref=f4e884]
                  - button "" [ref=f4e886]
            - row [ref=f4e889] [cursor=pointer]:
              - cell "" [ref=f4e890]:
                - generic [ref=f4e893]:
                  - checkbox "" [ref=f4e894]
                  - generic [ref=f4e895]: 
              - cell "0483" [ref=f4e897]
              - cell "Auto1786452485051794 Test" [ref=f4e899]
              - cell "User" [ref=f4e901]
              - cell [ref=f4e903]
              - cell [ref=f4e904]
              - cell [ref=f4e905]
              - cell [ref=f4e906]
              - cell [ref=f4e907]:
                - generic [ref=f4e908]:
                  - button "" [ref=f4e909]
                  - button "" [ref=f4e911]
            - row [ref=f4e914] [cursor=pointer]:
              - cell "" [ref=f4e915]:
                - generic [ref=f4e918]:
                  - checkbox "" [ref=f4e919]
                  - generic [ref=f4e920]: 
              - cell "0485" [ref=f4e922]
              - cell "Auto1786452533177545 Test" [ref=f4e924]
              - cell "User" [ref=f4e926]
              - cell [ref=f4e928]
              - cell [ref=f4e929]
              - cell [ref=f4e930]
              - cell [ref=f4e931]
              - cell [ref=f4e932]:
                - generic [ref=f4e933]:
                  - button "" [ref=f4e934]
                  - button "" [ref=f4e936]
            - row [ref=f4e939] [cursor=pointer]:
              - cell "" [ref=f4e940]:
                - generic [ref=f4e943]:
                  - checkbox "" [ref=f4e944]
                  - generic [ref=f4e945]: 
              - cell "0486" [ref=f4e947]
              - cell "Auto1786452552165343 Test" [ref=f4e949]
              - cell "User" [ref=f4e951]
              - cell [ref=f4e953]
              - cell [ref=f4e954]
              - cell [ref=f4e955]
              - cell [ref=f4e956]
              - cell [ref=f4e957]:
                - generic [ref=f4e958]:
                  - button "" [ref=f4e959]
                  - button "" [ref=f4e961]
            - row [ref=f4e964] [cursor=pointer]:
              - cell "" [ref=f4e965]:
                - generic [ref=f4e968]:
                  - checkbox "" [ref=f4e969]
                  - generic [ref=f4e970]: 
              - cell "0487" [ref=f4e972]
              - cell "Auto1786452568494731 Test" [ref=f4e974]
              - cell "User" [ref=f4e976]
              - cell [ref=f4e978]
              - cell [ref=f4e979]
              - cell [ref=f4e980]
              - cell [ref=f4e981]
              - cell [ref=f4e982]:
                - generic [ref=f4e983]:
                  - button "" [ref=f4e984]
                  - button "" [ref=f4e986]
            - row [ref=f4e989] [cursor=pointer]:
              - cell "" [ref=f4e990]:
                - generic [ref=f4e993]:
                  - checkbox "" [ref=f4e994]
                  - generic [ref=f4e995]: 
              - cell "0488" [ref=f4e997]
              - cell "Auto178645258358484 Test" [ref=f4e999]
              - cell "User" [ref=f4e1001]
              - cell [ref=f4e1003]
              - cell [ref=f4e1004]
              - cell [ref=f4e1005]
              - cell [ref=f4e1006]
              - cell [ref=f4e1007]:
                - generic [ref=f4e1008]:
                  - button "" [ref=f4e1009]
                  - button "" [ref=f4e1011]
            - row [ref=f4e1014] [cursor=pointer]:
              - cell "" [ref=f4e1015]:
                - generic [ref=f4e1018]:
                  - checkbox "" [ref=f4e1019]
                  - generic [ref=f4e1020]: 
              - cell "0489" [ref=f4e1022]
              - cell "Auto1786452679577983 Test" [ref=f4e1024]
              - cell "User" [ref=f4e1026]
              - cell [ref=f4e1028]
              - cell [ref=f4e1029]
              - cell [ref=f4e1030]
              - cell [ref=f4e1031]
              - cell [ref=f4e1032]:
                - generic [ref=f4e1033]:
                  - button "" [ref=f4e1034]
                  - button "" [ref=f4e1036]
            - row [ref=f4e1039] [cursor=pointer]:
              - cell "" [ref=f4e1040]:
                - generic [ref=f4e1043]:
                  - checkbox "" [ref=f4e1044]
                  - generic [ref=f4e1045]: 
              - cell "0492" [ref=f4e1047]
              - cell "Auto1786452711085105 Test" [ref=f4e1049]
              - cell "User" [ref=f4e1051]
              - cell [ref=f4e1053]
              - cell [ref=f4e1054]
              - cell [ref=f4e1055]
              - cell [ref=f4e1056]
              - cell [ref=f4e1057]:
                - generic [ref=f4e1058]:
                  - button "" [ref=f4e1059]
                  - button "" [ref=f4e1061]
            - row [ref=f4e1064] [cursor=pointer]:
              - cell "" [ref=f4e1065]:
                - generic [ref=f4e1068]:
                  - checkbox "" [ref=f4e1069]
                  - generic [ref=f4e1070]: 
              - cell "0493" [ref=f4e1072]
              - cell "Auto178645273895678 Test" [ref=f4e1074]
              - cell "User" [ref=f4e1076]
              - cell [ref=f4e1078]
              - cell [ref=f4e1079]
              - cell [ref=f4e1080]
              - cell [ref=f4e1081]
              - cell [ref=f4e1082]:
                - generic [ref=f4e1083]:
                  - button "" [ref=f4e1084]
                  - button "" [ref=f4e1086]
            - row [ref=f4e1089] [cursor=pointer]:
              - cell "" [ref=f4e1090]:
                - generic [ref=f4e1093]:
                  - checkbox "" [ref=f4e1094]
                  - generic [ref=f4e1095]: 
              - cell "0499" [ref=f4e1097]
              - cell "Auto178645294208846 Test" [ref=f4e1099]
              - cell "User" [ref=f4e1101]
              - cell [ref=f4e1103]
              - cell [ref=f4e1104]
              - cell [ref=f4e1105]
              - cell [ref=f4e1106]
              - cell [ref=f4e1107]:
                - generic [ref=f4e1108]:
                  - button "" [ref=f4e1109]
                  - button "" [ref=f4e1111]
            - row [ref=f4e1114] [cursor=pointer]:
              - cell "" [ref=f4e1115]:
                - generic [ref=f4e1118]:
                  - checkbox "" [ref=f4e1119]
                  - generic [ref=f4e1120]: 
              - cell "0501" [ref=f4e1122]
              - cell "Auto1786452964115742 Test" [ref=f4e1124]
              - cell "User" [ref=f4e1126]
              - cell [ref=f4e1128]
              - cell [ref=f4e1129]
              - cell [ref=f4e1130]
              - cell [ref=f4e1131]
              - cell [ref=f4e1132]:
                - generic [ref=f4e1133]:
                  - button "" [ref=f4e1134]
                  - button "" [ref=f4e1136]
            - row [ref=f4e1139] [cursor=pointer]:
              - cell "" [ref=f4e1140]:
                - generic [ref=f4e1143]:
                  - checkbox "" [ref=f4e1144]
                  - generic [ref=f4e1145]: 
              - cell "0504" [ref=f4e1147]
              - cell "Auto1786452994658914 Test" [ref=f4e1149]
              - cell "User" [ref=f4e1151]
              - cell [ref=f4e1153]
              - cell [ref=f4e1154]
              - cell [ref=f4e1155]
              - cell [ref=f4e1156]
              - cell [ref=f4e1157]:
                - generic [ref=f4e1158]:
                  - button "" [ref=f4e1159]
                  - button "" [ref=f4e1161]
            - row [ref=f4e1164] [cursor=pointer]:
              - cell "" [ref=f4e1165]:
                - generic [ref=f4e1168]:
                  - checkbox "" [ref=f4e1169]
                  - generic [ref=f4e1170]: 
              - cell "0507" [ref=f4e1172]
              - cell "Auto1786453048790771 Test" [ref=f4e1174]
              - cell "User" [ref=f4e1176]
              - cell [ref=f4e1178]
              - cell [ref=f4e1179]
              - cell [ref=f4e1180]
              - cell [ref=f4e1181]
              - cell [ref=f4e1182]:
                - generic [ref=f4e1183]:
                  - button "" [ref=f4e1184]
                  - button "" [ref=f4e1186]
            - row [ref=f4e1189] [cursor=pointer]:
              - cell "" [ref=f4e1190]:
                - generic [ref=f4e1193]:
                  - checkbox "" [ref=f4e1194]
                  - generic [ref=f4e1195]: 
              - cell "0519" [ref=f4e1197]
              - cell "Auto1786453350789413 Test" [ref=f4e1199]
              - cell "User" [ref=f4e1201]
              - cell [ref=f4e1203]
              - cell [ref=f4e1204]
              - cell [ref=f4e1205]
              - cell [ref=f4e1206]
              - cell [ref=f4e1207]:
                - generic [ref=f4e1208]:
                  - button "" [ref=f4e1209]
                  - button "" [ref=f4e1211]
            - row [ref=f4e1214] [cursor=pointer]:
              - cell "" [ref=f4e1215]:
                - generic [ref=f4e1218]:
                  - checkbox "" [ref=f4e1219]
                  - generic [ref=f4e1220]: 
              - cell "0522" [ref=f4e1222]
              - cell "Auto1786453397200280 Test" [ref=f4e1224]
              - cell "User" [ref=f4e1226]
              - cell [ref=f4e1228]
              - cell [ref=f4e1229]
              - cell [ref=f4e1230]
              - cell [ref=f4e1231]
              - cell [ref=f4e1232]:
                - generic [ref=f4e1233]:
                  - button "" [ref=f4e1234]
                  - button "" [ref=f4e1236]
            - row [ref=f4e1239] [cursor=pointer]:
              - cell "" [ref=f4e1240]:
                - generic [ref=f4e1243]:
                  - checkbox "" [ref=f4e1244]
                  - generic [ref=f4e1245]: 
              - cell "0570" [ref=f4e1247]
              - cell "Auto1786453790063913 Test" [ref=f4e1249]
              - cell "User" [ref=f4e1251]
              - cell [ref=f4e1253]
              - cell [ref=f4e1254]
              - cell [ref=f4e1255]
              - cell [ref=f4e1256]
              - cell [ref=f4e1257]:
                - generic [ref=f4e1258]:
                  - button "" [ref=f4e1259]
                  - button "" [ref=f4e1261]
            - row [ref=f4e1264] [cursor=pointer]:
              - cell "" [ref=f4e1265]:
                - generic [ref=f4e1268]:
                  - checkbox "" [ref=f4e1269]
                  - generic [ref=f4e1270]: 
              - cell "0495" [ref=f4e1272]
              - cell "AutoB1786452900477108 Test" [ref=f4e1274]
              - cell "User" [ref=f4e1276]
              - cell [ref=f4e1278]
              - cell [ref=f4e1279]
              - cell [ref=f4e1280]
              - cell [ref=f4e1281]
              - cell [ref=f4e1282]:
                - generic [ref=f4e1283]:
                  - button "" [ref=f4e1284]
                  - button "" [ref=f4e1286]
            - row [ref=f4e1289] [cursor=pointer]:
              - cell "" [ref=f4e1290]:
                - generic [ref=f4e1293]:
                  - checkbox "" [ref=f4e1294]
                  - generic [ref=f4e1295]: 
              - cell "0498" [ref=f4e1297]
              - cell "AutoB1786452936019378 Test" [ref=f4e1299]
              - cell "User" [ref=f4e1301]
              - cell [ref=f4e1303]
              - cell [ref=f4e1304]
              - cell [ref=f4e1305]
              - cell [ref=f4e1306]
              - cell [ref=f4e1307]:
                - generic [ref=f4e1308]:
                  - button "" [ref=f4e1309]
                  - button "" [ref=f4e1311]
            - row [ref=f4e1314] [cursor=pointer]:
              - cell "" [ref=f4e1315]:
                - generic [ref=f4e1318]:
                  - checkbox "" [ref=f4e1319]
                  - generic [ref=f4e1320]: 
              - cell "0303" [ref=f4e1322]
              - cell "bala kumar" [ref=f4e1324]
              - cell "ravi" [ref=f4e1326]
              - cell [ref=f4e1328]
              - cell [ref=f4e1329]
              - cell [ref=f4e1330]
              - cell [ref=f4e1331]
              - cell [ref=f4e1332]:
                - generic [ref=f4e1333]:
                  - button "" [ref=f4e1334]
                  - button "" [ref=f4e1336]
            - row [ref=f4e1339] [cursor=pointer]:
              - cell "" [ref=f4e1340]:
                - generic [ref=f4e1343]:
                  - checkbox "" [ref=f4e1344]
                  - generic [ref=f4e1345]: 
              - cell "0292" [ref=f4e1347]
              - cell "bmrtahvwhibmrtahvwhi" [ref=f4e1349]
              - cell "hbfqkhjfqbhbfqkhjfqb" [ref=f4e1351]
              - cell [ref=f4e1353]
              - cell [ref=f4e1354]
              - cell [ref=f4e1355]
              - cell [ref=f4e1356]
              - cell [ref=f4e1357]:
                - generic [ref=f4e1358]:
                  - button "" [ref=f4e1359]
                  - button "" [ref=f4e1361]
            - row [ref=f4e1364] [cursor=pointer]:
              - cell "" [ref=f4e1365]:
                - generic [ref=f4e1368]:
                  - checkbox "" [ref=f4e1369]
                  - generic [ref=f4e1370]: 
              - cell "3447488" [ref=f4e1372]
              - cell "BNPUJl hXFJL" [ref=f4e1374]
              - cell "rCrLNEtb" [ref=f4e1376]
              - cell [ref=f4e1378]
              - cell [ref=f4e1379]
              - cell [ref=f4e1380]
              - cell [ref=f4e1381]
              - cell [ref=f4e1382]:
                - generic [ref=f4e1383]:
                  - button "" [ref=f4e1384]
                  - button "" [ref=f4e1386]
            - row [ref=f4e1389] [cursor=pointer]:
              - cell "" [ref=f4e1390]:
                - generic [ref=f4e1393]:
                  - checkbox "" [ref=f4e1394]
                  - generic [ref=f4e1395]: 
              - cell "0452" [ref=f4e1397]
              - cell "charifa bel" [ref=f4e1399]
              - cell "belgueroua" [ref=f4e1401]
              - cell [ref=f4e1403]
              - cell [ref=f4e1404]
              - cell [ref=f4e1405]
              - cell [ref=f4e1406]
              - cell [ref=f4e1407]:
                - generic [ref=f4e1408]:
                  - button "" [ref=f4e1409]
                  - button "" [ref=f4e1411]
            - row [ref=f4e1414] [cursor=pointer]:
              - cell "" [ref=f4e1415]:
                - generic [ref=f4e1418]:
                  - checkbox "" [ref=f4e1419]
                  - generic [ref=f4e1420]: 
              - cell "0371" [ref=f4e1422]
              - cell "charifa bel" [ref=f4e1424]
              - cell "belgueroua" [ref=f4e1426]
              - cell [ref=f4e1428]
              - cell [ref=f4e1429]
              - cell [ref=f4e1430]
              - cell [ref=f4e1431]
              - cell [ref=f4e1432]:
                - generic [ref=f4e1433]:
                  - button "" [ref=f4e1434]
                  - button "" [ref=f4e1436]
            - row [ref=f4e1439] [cursor=pointer]:
              - cell "" [ref=f4e1440]:
                - generic [ref=f4e1443]:
                  - checkbox "" [ref=f4e1444]
                  - generic [ref=f4e1445]: 
              - cell "0453" [ref=f4e1447]
              - cell "charifa bel" [ref=f4e1449]
              - cell "belgueroua" [ref=f4e1451]
              - cell [ref=f4e1453]
              - cell [ref=f4e1454]
              - cell [ref=f4e1455]
              - cell [ref=f4e1456]
              - cell [ref=f4e1457]:
                - generic [ref=f4e1458]:
                  - button "" [ref=f4e1459]
                  - button "" [ref=f4e1461]
            - row [ref=f4e1464] [cursor=pointer]:
              - cell "" [ref=f4e1465]:
                - generic [ref=f4e1468]:
                  - checkbox "" [ref=f4e1469]
                  - generic [ref=f4e1470]: 
              - cell "0419" [ref=f4e1472]
              - cell "charifa bel" [ref=f4e1474]
              - cell "belgueroua" [ref=f4e1476]
              - cell [ref=f4e1478]
              - cell [ref=f4e1479]
              - cell [ref=f4e1480]
              - cell [ref=f4e1481]
              - cell [ref=f4e1482]:
                - generic [ref=f4e1483]:
                  - button "" [ref=f4e1484]
                  - button "" [ref=f4e1486]
            - row [ref=f4e1489] [cursor=pointer]:
              - cell "" [ref=f4e1490]:
                - generic [ref=f4e1493]:
                  - checkbox "" [ref=f4e1494]
                  - generic [ref=f4e1495]: 
              - cell "0320" [ref=f4e1497]
              - cell "Charles" [ref=f4e1499]
              - cell "Carter" [ref=f4e1501]
              - cell [ref=f4e1503]
              - cell [ref=f4e1504]
              - cell [ref=f4e1505]
              - cell [ref=f4e1506]
              - cell [ref=f4e1507]:
                - generic [ref=f4e1508]:
                  - button "" [ref=f4e1509]
                  - button "" [ref=f4e1511]
            - row [ref=f4e1514] [cursor=pointer]:
              - cell "" [ref=f4e1515]:
                - generic [ref=f4e1518]:
                  - checkbox "" [ref=f4e1519]
                  - generic [ref=f4e1520]: 
              - cell "00392" [ref=f4e1522]
              - cell "Charlotte" [ref=f4e1524]
              - cell "Smith" [ref=f4e1526]
              - cell [ref=f4e1528]
              - cell [ref=f4e1529]
              - cell [ref=f4e1530]
              - cell [ref=f4e1531]
              - cell [ref=f4e1532]:
                - generic [ref=f4e1533]:
                  - button "" [ref=f4e1534]
                  - button "" [ref=f4e1536]
        - navigation "Pagination Navigation" [ref=f4e1539]:
          - list [ref=f4e1540]:
            - listitem [ref=f4e1541]:
              - button "1" [ref=f4e1542] [cursor=pointer]
            - listitem [ref=f4e1543]:
              - button "2" [ref=f4e1544] [cursor=pointer]
            - listitem [ref=f4e1545]:
              - button "3" [ref=f4e1546] [cursor=pointer]
            - listitem [ref=f4e1547]:
              - button "4" [ref=f4e1548] [cursor=pointer]
            - listitem [ref=f4e1549]:
              - button "5" [ref=f4e1550] [cursor=pointer]
            - listitem [ref=f4e1551]:
              - button "" [ref=f4e1552] [cursor=pointer]
    - generic [ref=f4e1554]:
      - paragraph [ref=f4e1555]: OrangeHRM OS 5.9
      - paragraph [ref=f4e1556]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e1557] [cursor=pointer]:
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