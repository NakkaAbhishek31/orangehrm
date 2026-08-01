# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression
- Location: tests\PIM\pim-employee-list.spec.ts:281:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('E5UFF7OPXF', { exact: true }) })
Expected: 1
Received: 0
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('E5UFF7OPXF', { exact: true }) })
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
              - link "Recruitment" [ref=f7e42] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f7e49]:
              - link "My Info" [ref=f7e50] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f7e57]:
              - link "Performance" [ref=f7e58] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f7e67]:
              - link "Dashboard" [ref=f7e68] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f7e72]:
              - link "Directory" [ref=f7e73] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f7e77]:
              - link "Maintenance" [ref=f7e78] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f7e83]:
              - link "Claim" [ref=f7e84] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f7e92]:
              - link "Buzz" [ref=f7e93] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f7e97]:
      - generic [ref=f7e98]:
        - generic [ref=f7e99]:
          - text: 
          - heading "PIM" [level=6] [ref=f7e101]
        - link [ref=f7e103]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f7e104] [cursor=pointer]
        - list [ref=f7e110]:
          - listitem [ref=f7e111]:
            - generic [ref=f7e112] [cursor=pointer]:
              - img "profile picture" [ref=f7e113]
              - paragraph [ref=f7e114]: Noor Eman
              - generic [ref=f7e115]: 
      - navigation "Topbar Menu" [ref=f7e117]:
        - list [ref=f7e118]:
          - listitem [ref=f7e119] [cursor=pointer]:
            - generic [ref=f7e120]:
              - text: Configuration
              - generic [ref=f7e121]: 
          - listitem [ref=f7e122] [cursor=pointer]:
            - link "Employee List" [ref=f7e123]:
              - /url: "#"
          - listitem [ref=f7e124] [cursor=pointer]:
            - link "Add Employee" [ref=f7e125]:
              - /url: "#"
          - listitem [ref=f7e126] [cursor=pointer]:
            - link "Reports" [ref=f7e127]:
              - /url: "#"
          - button "" [ref=f7e129] [cursor=pointer]
  - generic [ref=f7e131]:
    - generic [ref=f7e133]:
      - generic [ref=f7e134]:
        - generic [ref=f7e135]:
          - heading "Employee Information" [level=5] [ref=f7e137]
          - button "" [ref=f7e140] [cursor=pointer]
        - separator [ref=f7e142]
        - generic [ref=f7e144]:
          - generic [ref=f7e146]:
            - generic [ref=f7e148]:
              - generic [ref=f7e149]: Employee Name
              - textbox "Type for hints..." [ref=f7e154]
            - generic [ref=f7e156]:
              - generic [ref=f7e157]: Employee Id
              - textbox [ref=f7e160]
            - generic [ref=f7e162]:
              - generic [ref=f7e163]: Employment Status
              - generic [ref=f7e167] [cursor=pointer]:
                - generic [ref=f7e168]: "-- Select --"
                - generic [ref=f7e169]: 
            - generic [ref=f7e172]:
              - generic [ref=f7e173]: Include
              - generic [ref=f7e177] [cursor=pointer]:
                - generic [ref=f7e178]: Current Employees Only
                - generic [ref=f7e179]: 
            - generic [ref=f7e182]:
              - generic [ref=f7e183]: Supervisor Name
              - textbox "Type for hints..." [ref=f7e188]
            - generic [ref=f7e190]:
              - generic [ref=f7e191]: Job Title
              - generic [ref=f7e195] [cursor=pointer]:
                - generic [ref=f7e196]: "-- Select --"
                - generic [ref=f7e197]: 
            - generic [ref=f7e200]:
              - generic [ref=f7e201]: Sub Unit
              - generic [ref=f7e205] [cursor=pointer]:
                - generic [ref=f7e206]: "-- Select --"
                - generic [ref=f7e207]: 
          - separator [ref=f7e209]
          - generic [ref=f7e210]:
            - button "Reset" [ref=f7e211] [cursor=pointer]
            - button "Search" [ref=f7e212] [cursor=pointer]
      - generic [ref=f7e213]:
        - button " Add" [ref=f7e215] [cursor=pointer]:
          - generic [ref=f7e216]: 
          - text: Add
        - generic [ref=f7e217]:
          - separator [ref=f7e218]
          - generic [ref=f7e219]: (275) Records Found
        - table [ref=f7e222]:
          - rowgroup [ref=f7e223]:
            - row [ref=f7e224]:
              - columnheader "" [ref=f7e225]:
                - generic [ref=f7e227] [cursor=pointer]:
                  - checkbox "" [ref=f7e228]
                  - generic [ref=f7e229]: 
              - columnheader "Id " [ref=f7e231]:
                - text: Id
                - generic [ref=f7e232]:
                  - generic [ref=f7e233] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f7e234]:
                - text: First (& Middle) Name
                - generic [ref=f7e235]:
                  - generic [ref=f7e236] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f7e237]:
                - text: Last Name
                - generic [ref=f7e238]:
                  - generic [ref=f7e239] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f7e240]:
                - text: Job Title
                - generic [ref=f7e241]:
                  - generic [ref=f7e242] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f7e243]:
                - text: Employment Status
                - generic [ref=f7e244]:
                  - generic [ref=f7e245] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f7e246]:
                - text: Sub Unit
                - generic [ref=f7e247]:
                  - generic [ref=f7e248] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f7e249]:
                - text: Supervisor
                - generic [ref=f7e250]:
                  - generic [ref=f7e251] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f7e252]
          - rowgroup [ref=f7e253]:
            - row [ref=f7e255] [cursor=pointer]:
              - cell "" [ref=f7e256]:
                - generic [ref=f7e259]:
                  - checkbox "" [ref=f7e260]
                  - generic [ref=f7e261]: 
              - cell "0406" [ref=f7e263]
              - cell "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" [ref=f7e265]
              - cell "EditedLast" [ref=f7e267]
              - cell [ref=f7e269]
              - cell [ref=f7e270]
              - cell [ref=f7e271]
              - cell [ref=f7e272]
              - cell [ref=f7e273]:
                - generic [ref=f7e274]:
                  - button "" [ref=f7e275]
                  - button "" [ref=f7e277]
            - row [ref=f7e280] [cursor=pointer]:
              - cell "" [ref=f7e281]:
                - generic [ref=f7e284]:
                  - checkbox "" [ref=f7e285]
                  - generic [ref=f7e286]: 
              - cell "0611" [ref=f7e288]
              - cell "AdminTest575942" [ref=f7e290]
              - cell "UserCreate" [ref=f7e292]
              - cell [ref=f7e294]
              - cell [ref=f7e295]
              - cell [ref=f7e296]
              - cell [ref=f7e297]
              - cell [ref=f7e298]:
                - generic [ref=f7e299]:
                  - button "" [ref=f7e300]
                  - button "" [ref=f7e302]
            - row [ref=f7e305] [cursor=pointer]:
              - cell "" [ref=f7e306]:
                - generic [ref=f7e309]:
                  - checkbox "" [ref=f7e310]
                  - generic [ref=f7e311]: 
              - cell "03909" [ref=f7e313]
              - cell "ADNAN dffd" [ref=f7e315]
              - cell "kHAM" [ref=f7e317]
              - cell [ref=f7e319]
              - cell [ref=f7e320]
              - cell [ref=f7e321]
              - cell [ref=f7e322]
              - cell [ref=f7e323]:
                - generic [ref=f7e324]:
                  - button "" [ref=f7e325]
                  - button "" [ref=f7e327]
            - row [ref=f7e330] [cursor=pointer]:
              - cell "" [ref=f7e331]:
                - generic [ref=f7e334]:
                  - checkbox "" [ref=f7e335]
                  - generic [ref=f7e336]: 
              - cell "733260" [ref=f7e338]
              - cell "Aliyah North" [ref=f7e340]
              - cell "Quitzon" [ref=f7e342]
              - cell [ref=f7e344]
              - cell [ref=f7e345]
              - cell [ref=f7e346]
              - cell [ref=f7e347]
              - cell [ref=f7e348]:
                - generic [ref=f7e349]:
                  - button "" [ref=f7e350]
                  - button "" [ref=f7e352]
            - row [ref=f7e355] [cursor=pointer]:
              - cell "" [ref=f7e356]:
                - generic [ref=f7e359]:
                  - checkbox "" [ref=f7e360]
                  - generic [ref=f7e361]: 
              - cell "01715" [ref=f7e363]
              - cell "Amelia" [ref=f7e365]
              - cell "Brown" [ref=f7e367]
              - cell [ref=f7e369]
              - cell [ref=f7e370]
              - cell [ref=f7e371]
              - cell [ref=f7e372]
              - cell [ref=f7e373]:
                - generic [ref=f7e374]:
                  - button "" [ref=f7e375]
                  - button "" [ref=f7e377]
            - row [ref=f7e380] [cursor=pointer]:
              - cell "" [ref=f7e381]:
                - generic [ref=f7e384]:
                  - checkbox "" [ref=f7e385]
                  - generic [ref=f7e386]: 
              - cell "506" [ref=f7e388]
              - cell "aniket Ashok" [ref=f7e390]
              - cell "patil" [ref=f7e392]
              - cell [ref=f7e394]
              - cell [ref=f7e395]
              - cell [ref=f7e396]
              - cell [ref=f7e397]
              - cell [ref=f7e398]:
                - generic [ref=f7e399]:
                  - button "" [ref=f7e400]
                  - button "" [ref=f7e402]
            - row [ref=f7e405] [cursor=pointer]:
              - cell "" [ref=f7e406]:
                - generic [ref=f7e409]:
                  - checkbox "" [ref=f7e410]
                  - generic [ref=f7e411]: 
              - cell "0360" [ref=f7e413]
              - cell "aniket t" [ref=f7e415]
              - cell "t" [ref=f7e417]
              - cell [ref=f7e419]
              - cell [ref=f7e420]
              - cell [ref=f7e421]
              - cell [ref=f7e422]
              - cell [ref=f7e423]:
                - generic [ref=f7e424]:
                  - button "" [ref=f7e425]
                  - button "" [ref=f7e427]
            - row [ref=f7e430] [cursor=pointer]:
              - cell "" [ref=f7e431]:
                - generic [ref=f7e434]:
                  - checkbox "" [ref=f7e435]
                  - generic [ref=f7e436]: 
              - cell "792" [ref=f7e438]
              - cell "aniket Ashok" [ref=f7e440]
              - cell "patil" [ref=f7e442]
              - cell [ref=f7e444]
              - cell [ref=f7e445]
              - cell [ref=f7e446]
              - cell [ref=f7e447]
              - cell [ref=f7e448]:
                - generic [ref=f7e449]:
                  - button "" [ref=f7e450]
                  - button "" [ref=f7e452]
            - row [ref=f7e455] [cursor=pointer]:
              - cell "" [ref=f7e456]:
                - generic [ref=f7e459]:
                  - checkbox "" [ref=f7e460]
                  - generic [ref=f7e461]: 
              - cell "0367" [ref=f7e463]
              - cell "Ash J" [ref=f7e465]
              - cell "Tyson" [ref=f7e467]
              - cell [ref=f7e469]
              - cell [ref=f7e470]
              - cell [ref=f7e471]
              - cell [ref=f7e472]
              - cell [ref=f7e473]:
                - generic [ref=f7e474]:
                  - button "" [ref=f7e475]
                  - button "" [ref=f7e477]
            - row [ref=f7e480] [cursor=pointer]:
              - cell "" [ref=f7e481]:
                - generic [ref=f7e484]:
                  - checkbox "" [ref=f7e485]
                  - generic [ref=f7e486]: 
              - cell "0615" [ref=f7e488]
              - cell "Auto Test" [ref=f7e490]
              - cell "User" [ref=f7e492]
              - cell [ref=f7e494]
              - cell [ref=f7e495]
              - cell [ref=f7e496]
              - cell [ref=f7e497]
              - cell [ref=f7e498]:
                - generic [ref=f7e499]:
                  - button "" [ref=f7e500]
                  - button "" [ref=f7e502]
            - row [ref=f7e505] [cursor=pointer]:
              - cell "" [ref=f7e506]:
                - generic [ref=f7e509]:
                  - checkbox "" [ref=f7e510]
                  - generic [ref=f7e511]: 
              - cell "0587" [ref=f7e513]
              - cell "Auto Test" [ref=f7e515]
              - cell "User" [ref=f7e517]
              - cell [ref=f7e519]
              - cell [ref=f7e520]
              - cell [ref=f7e521]
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
              - cell "0567" [ref=f7e538]
              - cell "Auto Test" [ref=f7e540]
              - cell "User" [ref=f7e542]
              - cell [ref=f7e544]
              - cell [ref=f7e545]
              - cell [ref=f7e546]
              - cell [ref=f7e547]
              - cell [ref=f7e548]:
                - generic [ref=f7e549]:
                  - button "" [ref=f7e550]
                  - button "" [ref=f7e552]
            - row [ref=f7e555] [cursor=pointer]:
              - cell "" [ref=f7e556]:
                - generic [ref=f7e559]:
                  - checkbox "" [ref=f7e560]
                  - generic [ref=f7e561]: 
              - cell "0370" [ref=f7e563]
              - cell "Auto1785571204323 Test" [ref=f7e565]
              - cell "User" [ref=f7e567]
              - cell [ref=f7e569]
              - cell [ref=f7e570]
              - cell [ref=f7e571]
              - cell [ref=f7e572]
              - cell [ref=f7e573]:
                - generic [ref=f7e574]:
                  - button "" [ref=f7e575]
                  - button "" [ref=f7e577]
            - row [ref=f7e580] [cursor=pointer]:
              - cell "" [ref=f7e581]:
                - generic [ref=f7e584]:
                  - checkbox "" [ref=f7e585]
                  - generic [ref=f7e586]: 
              - cell "0372" [ref=f7e588]
              - cell "Auto1785571630533 test" [ref=f7e590]
              - cell "user" [ref=f7e592]
              - cell [ref=f7e594]
              - cell [ref=f7e595]
              - cell [ref=f7e596]
              - cell [ref=f7e597]
              - cell [ref=f7e598]:
                - generic [ref=f7e599]:
                  - button "" [ref=f7e600]
                  - button "" [ref=f7e602]
            - row [ref=f7e605] [cursor=pointer]:
              - cell "" [ref=f7e606]:
                - generic [ref=f7e609]:
                  - checkbox "" [ref=f7e610]
                  - generic [ref=f7e611]: 
              - cell "0375" [ref=f7e613]
              - cell "Auto1785571675159 test" [ref=f7e615]
              - cell "user" [ref=f7e617]
              - cell [ref=f7e619]
              - cell [ref=f7e620]
              - cell [ref=f7e621]
              - cell [ref=f7e622]
              - cell [ref=f7e623]:
                - generic [ref=f7e624]:
                  - button "" [ref=f7e625]
                  - button "" [ref=f7e627]
            - row [ref=f7e630] [cursor=pointer]:
              - cell "" [ref=f7e631]:
                - generic [ref=f7e634]:
                  - checkbox "" [ref=f7e635]
                  - generic [ref=f7e636]: 
              - cell "0390" [ref=f7e638]
              - cell "Auto1785571819293 updatedTest" [ref=f7e640]
              - cell "updatedUser" [ref=f7e642]
              - cell [ref=f7e644]
              - cell [ref=f7e645]
              - cell [ref=f7e646]
              - cell [ref=f7e647]
              - cell [ref=f7e648]:
                - generic [ref=f7e649]:
                  - button "" [ref=f7e650]
                  - button "" [ref=f7e652]
            - row [ref=f7e655] [cursor=pointer]:
              - cell "" [ref=f7e656]:
                - generic [ref=f7e659]:
                  - checkbox "" [ref=f7e660]
                  - generic [ref=f7e661]: 
              - cell "0393" [ref=f7e663]
              - cell "Auto1785571856721 test" [ref=f7e665]
              - cell "user" [ref=f7e667]
              - cell [ref=f7e669]
              - cell [ref=f7e670]
              - cell [ref=f7e671]
              - cell [ref=f7e672]
              - cell [ref=f7e673]:
                - generic [ref=f7e674]:
                  - button "" [ref=f7e675]
                  - button "" [ref=f7e677]
            - row [ref=f7e680] [cursor=pointer]:
              - cell "" [ref=f7e681]:
                - generic [ref=f7e684]:
                  - checkbox "" [ref=f7e685]
                  - generic [ref=f7e686]: 
              - cell "0396" [ref=f7e688]
              - cell "Auto1785571877148 test" [ref=f7e690]
              - cell "user" [ref=f7e692]
              - cell [ref=f7e694]
              - cell [ref=f7e695]
              - cell [ref=f7e696]
              - cell [ref=f7e697]
              - cell [ref=f7e698]:
                - generic [ref=f7e699]:
                  - button "" [ref=f7e700]
                  - button "" [ref=f7e702]
            - row [ref=f7e705] [cursor=pointer]:
              - cell "" [ref=f7e706]:
                - generic [ref=f7e709]:
                  - checkbox "" [ref=f7e710]
                  - generic [ref=f7e711]: 
              - cell "0397" [ref=f7e713]
              - cell "Auto1785571893903 updatedTest" [ref=f7e715]
              - cell "updatedUser" [ref=f7e717]
              - cell [ref=f7e719]
              - cell [ref=f7e720]
              - cell [ref=f7e721]
              - cell [ref=f7e722]
              - cell [ref=f7e723]:
                - generic [ref=f7e724]:
                  - button "" [ref=f7e725]
                  - button "" [ref=f7e727]
            - row [ref=f7e730] [cursor=pointer]:
              - cell "" [ref=f7e731]:
                - generic [ref=f7e734]:
                  - checkbox "" [ref=f7e735]
                  - generic [ref=f7e736]: 
              - cell "0398" [ref=f7e738]
              - cell "Auto1785571903048 updatedTest" [ref=f7e740]
              - cell "updatedUser" [ref=f7e742]
              - cell [ref=f7e744]
              - cell [ref=f7e745]
              - cell [ref=f7e746]
              - cell [ref=f7e747]
              - cell [ref=f7e748]:
                - generic [ref=f7e749]:
                  - button "" [ref=f7e750]
                  - button "" [ref=f7e752]
            - row [ref=f7e755] [cursor=pointer]:
              - cell "" [ref=f7e756]:
                - generic [ref=f7e759]:
                  - checkbox "" [ref=f7e760]
                  - generic [ref=f7e761]: 
              - cell "0408" [ref=f7e763]
              - cell "Auto1785571997542 test" [ref=f7e765]
              - cell "user" [ref=f7e767]
              - cell [ref=f7e769]
              - cell [ref=f7e770]
              - cell [ref=f7e771]
              - cell [ref=f7e772]
              - cell [ref=f7e773]:
                - generic [ref=f7e774]:
                  - button "" [ref=f7e775]
                  - button "" [ref=f7e777]
            - row [ref=f7e780] [cursor=pointer]:
              - cell "" [ref=f7e781]:
                - generic [ref=f7e784]:
                  - checkbox "" [ref=f7e785]
                  - generic [ref=f7e786]: 
              - cell "0410" [ref=f7e788]
              - cell "Auto1785572017407 updatedTest" [ref=f7e790]
              - cell "updatedUser" [ref=f7e792]
              - cell [ref=f7e794]
              - cell [ref=f7e795]
              - cell [ref=f7e796]
              - cell [ref=f7e797]
              - cell [ref=f7e798]:
                - generic [ref=f7e799]:
                  - button "" [ref=f7e800]
                  - button "" [ref=f7e802]
            - row [ref=f7e805] [cursor=pointer]:
              - cell "" [ref=f7e806]:
                - generic [ref=f7e809]:
                  - checkbox "" [ref=f7e810]
                  - generic [ref=f7e811]: 
              - cell "0413" [ref=f7e813]
              - cell "Auto1785572085718 Test" [ref=f7e815]
              - cell "User" [ref=f7e817]
              - cell [ref=f7e819]
              - cell [ref=f7e820]
              - cell [ref=f7e821]
              - cell [ref=f7e822]
              - cell [ref=f7e823]:
                - generic [ref=f7e824]:
                  - button "" [ref=f7e825]
                  - button "" [ref=f7e827]
            - row [ref=f7e830] [cursor=pointer]:
              - cell "" [ref=f7e831]:
                - generic [ref=f7e834]:
                  - checkbox "" [ref=f7e835]
                  - generic [ref=f7e836]: 
              - cell "0414" [ref=f7e838]
              - cell "Auto1785572093632 Test" [ref=f7e840]
              - cell "User" [ref=f7e842]
              - cell [ref=f7e844]
              - cell [ref=f7e845]
              - cell [ref=f7e846]
              - cell [ref=f7e847]
              - cell [ref=f7e848]:
                - generic [ref=f7e849]:
                  - button "" [ref=f7e850]
                  - button "" [ref=f7e852]
            - row [ref=f7e855] [cursor=pointer]:
              - cell "" [ref=f7e856]:
                - generic [ref=f7e859]:
                  - checkbox "" [ref=f7e860]
                  - generic [ref=f7e861]: 
              - cell "0416" [ref=f7e863]
              - cell "Auto1785572129579 test" [ref=f7e865]
              - cell "user" [ref=f7e867]
              - cell [ref=f7e869]
              - cell [ref=f7e870]
              - cell [ref=f7e871]
              - cell [ref=f7e872]
              - cell [ref=f7e873]:
                - generic [ref=f7e874]:
                  - button "" [ref=f7e875]
                  - button "" [ref=f7e877]
            - row [ref=f7e880] [cursor=pointer]:
              - cell "" [ref=f7e881]:
                - generic [ref=f7e884]:
                  - checkbox "" [ref=f7e885]
                  - generic [ref=f7e886]: 
              - cell "0415" [ref=f7e888]
              - cell "Auto1785572130542 Test" [ref=f7e890]
              - cell "User" [ref=f7e892]
              - cell [ref=f7e894]
              - cell [ref=f7e895]
              - cell [ref=f7e896]
              - cell [ref=f7e897]
              - cell [ref=f7e898]:
                - generic [ref=f7e899]:
                  - button "" [ref=f7e900]
                  - button "" [ref=f7e902]
            - row [ref=f7e905] [cursor=pointer]:
              - cell "" [ref=f7e906]:
                - generic [ref=f7e909]:
                  - checkbox "" [ref=f7e910]
                  - generic [ref=f7e911]: 
              - cell "0417" [ref=f7e913]
              - cell "Auto1785572163181 updatedTest" [ref=f7e915]
              - cell "updatedUser" [ref=f7e917]
              - cell [ref=f7e919]
              - cell [ref=f7e920]
              - cell [ref=f7e921]
              - cell [ref=f7e922]
              - cell [ref=f7e923]:
                - generic [ref=f7e924]:
                  - button "" [ref=f7e925]
                  - button "" [ref=f7e927]
            - row [ref=f7e930] [cursor=pointer]:
              - cell "" [ref=f7e931]:
                - generic [ref=f7e934]:
                  - checkbox "" [ref=f7e935]
                  - generic [ref=f7e936]: 
              - cell "0418" [ref=f7e938]
              - cell "Auto1785572171040 Test" [ref=f7e940]
              - cell "User" [ref=f7e942]
              - cell [ref=f7e944]
              - cell [ref=f7e945]
              - cell [ref=f7e946]
              - cell [ref=f7e947]
              - cell [ref=f7e948]:
                - generic [ref=f7e949]:
                  - button "" [ref=f7e950]
                  - button "" [ref=f7e952]
            - row [ref=f7e955] [cursor=pointer]:
              - cell "" [ref=f7e956]:
                - generic [ref=f7e959]:
                  - checkbox "" [ref=f7e960]
                  - generic [ref=f7e961]: 
              - cell "0419" [ref=f7e963]
              - cell "Auto1785572178516 Test" [ref=f7e965]
              - cell "User" [ref=f7e967]
              - cell [ref=f7e969]
              - cell [ref=f7e970]
              - cell [ref=f7e971]
              - cell [ref=f7e972]
              - cell [ref=f7e973]:
                - generic [ref=f7e974]:
                  - button "" [ref=f7e975]
                  - button "" [ref=f7e977]
            - row [ref=f7e980] [cursor=pointer]:
              - cell "" [ref=f7e981]:
                - generic [ref=f7e984]:
                  - checkbox "" [ref=f7e985]
                  - generic [ref=f7e986]: 
              - cell "0421" [ref=f7e988]
              - cell "Auto1785572197255 Test" [ref=f7e990]
              - cell "User" [ref=f7e992]
              - cell [ref=f7e994]
              - cell [ref=f7e995]
              - cell [ref=f7e996]
              - cell [ref=f7e997]
              - cell [ref=f7e998]:
                - generic [ref=f7e999]:
                  - button "" [ref=f7e1000]
                  - button "" [ref=f7e1002]
            - row [ref=f7e1005] [cursor=pointer]:
              - cell "" [ref=f7e1006]:
                - generic [ref=f7e1009]:
                  - checkbox "" [ref=f7e1010]
                  - generic [ref=f7e1011]: 
              - cell "0422" [ref=f7e1013]
              - cell "Auto1785572205071 Test" [ref=f7e1015]
              - cell "User" [ref=f7e1017]
              - cell [ref=f7e1019]
              - cell [ref=f7e1020]
              - cell [ref=f7e1021]
              - cell [ref=f7e1022]
              - cell [ref=f7e1023]:
                - generic [ref=f7e1024]:
                  - button "" [ref=f7e1025]
                  - button "" [ref=f7e1027]
            - row [ref=f7e1030] [cursor=pointer]:
              - cell "" [ref=f7e1031]:
                - generic [ref=f7e1034]:
                  - checkbox "" [ref=f7e1035]
                  - generic [ref=f7e1036]: 
              - cell "0423" [ref=f7e1038]
              - cell "Auto1785572228736 Test" [ref=f7e1040]
              - cell "User" [ref=f7e1042]
              - cell [ref=f7e1044]
              - cell [ref=f7e1045]
              - cell [ref=f7e1046]
              - cell [ref=f7e1047]
              - cell [ref=f7e1048]:
                - generic [ref=f7e1049]:
                  - button "" [ref=f7e1050]
                  - button "" [ref=f7e1052]
            - row [ref=f7e1055] [cursor=pointer]:
              - cell "" [ref=f7e1056]:
                - generic [ref=f7e1059]:
                  - checkbox "" [ref=f7e1060]
                  - generic [ref=f7e1061]: 
              - cell "0428" [ref=f7e1063]
              - cell "Auto1785572325468 Test" [ref=f7e1065]
              - cell "User" [ref=f7e1067]
              - cell [ref=f7e1069]
              - cell [ref=f7e1070]
              - cell [ref=f7e1071]
              - cell [ref=f7e1072]
              - cell [ref=f7e1073]:
                - generic [ref=f7e1074]:
                  - button "" [ref=f7e1075]
                  - button "" [ref=f7e1077]
            - row [ref=f7e1080] [cursor=pointer]:
              - cell "" [ref=f7e1081]:
                - generic [ref=f7e1084]:
                  - checkbox "" [ref=f7e1085]
                  - generic [ref=f7e1086]: 
              - cell "0432" [ref=f7e1088]
              - cell "Auto1785572571302 test" [ref=f7e1090]
              - cell "user" [ref=f7e1092]
              - cell [ref=f7e1094]
              - cell [ref=f7e1095]
              - cell [ref=f7e1096]
              - cell [ref=f7e1097]
              - cell [ref=f7e1098]:
                - generic [ref=f7e1099]:
                  - button "" [ref=f7e1100]
                  - button "" [ref=f7e1102]
            - row [ref=f7e1105] [cursor=pointer]:
              - cell "" [ref=f7e1106]:
                - generic [ref=f7e1109]:
                  - checkbox "" [ref=f7e1110]
                  - generic [ref=f7e1111]: 
              - cell "0433" [ref=f7e1113]
              - cell "Auto1785572613318 Test" [ref=f7e1115]
              - cell "User" [ref=f7e1117]
              - cell [ref=f7e1119]
              - cell [ref=f7e1120]
              - cell [ref=f7e1121]
              - cell [ref=f7e1122]
              - cell [ref=f7e1123]:
                - generic [ref=f7e1124]:
                  - button "" [ref=f7e1125]
                  - button "" [ref=f7e1127]
            - row [ref=f7e1130] [cursor=pointer]:
              - cell "" [ref=f7e1131]:
                - generic [ref=f7e1134]:
                  - checkbox "" [ref=f7e1135]
                  - generic [ref=f7e1136]: 
              - cell "0434" [ref=f7e1138]
              - cell "Auto1785572646561 Test" [ref=f7e1140]
              - cell "User" [ref=f7e1142]
              - cell [ref=f7e1144]
              - cell [ref=f7e1145]
              - cell [ref=f7e1146]
              - cell [ref=f7e1147]
              - cell [ref=f7e1148]:
                - generic [ref=f7e1149]:
                  - button "" [ref=f7e1150]
                  - button "" [ref=f7e1152]
            - row [ref=f7e1155] [cursor=pointer]:
              - cell "" [ref=f7e1156]:
                - generic [ref=f7e1159]:
                  - checkbox "" [ref=f7e1160]
                  - generic [ref=f7e1161]: 
              - cell "0436" [ref=f7e1163]
              - cell "Auto1785572676916 Test" [ref=f7e1165]
              - cell "User" [ref=f7e1167]
              - cell [ref=f7e1169]
              - cell [ref=f7e1170]
              - cell [ref=f7e1171]
              - cell [ref=f7e1172]
              - cell [ref=f7e1173]:
                - generic [ref=f7e1174]:
                  - button "" [ref=f7e1175]
                  - button "" [ref=f7e1177]
            - row [ref=f7e1180] [cursor=pointer]:
              - cell "" [ref=f7e1181]:
                - generic [ref=f7e1184]:
                  - checkbox "" [ref=f7e1185]
                  - generic [ref=f7e1186]: 
              - cell "0441" [ref=f7e1188]
              - cell "Auto1785572727919 test" [ref=f7e1190]
              - cell "user" [ref=f7e1192]
              - cell [ref=f7e1194]
              - cell [ref=f7e1195]
              - cell [ref=f7e1196]
              - cell [ref=f7e1197]
              - cell [ref=f7e1198]:
                - generic [ref=f7e1199]:
                  - button "" [ref=f7e1200]
                  - button "" [ref=f7e1202]
            - row [ref=f7e1205] [cursor=pointer]:
              - cell "" [ref=f7e1206]:
                - generic [ref=f7e1209]:
                  - checkbox "" [ref=f7e1210]
                  - generic [ref=f7e1211]: 
              - cell "0448" [ref=f7e1213]
              - cell "Auto1785572861693 test" [ref=f7e1215]
              - cell "user" [ref=f7e1217]
              - cell [ref=f7e1219]
              - cell [ref=f7e1220]
              - cell [ref=f7e1221]
              - cell [ref=f7e1222]
              - cell [ref=f7e1223]:
                - generic [ref=f7e1224]:
                  - button "" [ref=f7e1225]
                  - button "" [ref=f7e1227]
            - row [ref=f7e1230] [cursor=pointer]:
              - cell "" [ref=f7e1231]:
                - generic [ref=f7e1234]:
                  - checkbox "" [ref=f7e1235]
                  - generic [ref=f7e1236]: 
              - cell "0449" [ref=f7e1238]
              - cell "Auto1785572892202 Test" [ref=f7e1240]
              - cell "User" [ref=f7e1242]
              - cell [ref=f7e1244]
              - cell [ref=f7e1245]
              - cell [ref=f7e1246]
              - cell [ref=f7e1247]
              - cell [ref=f7e1248]:
                - generic [ref=f7e1249]:
                  - button "" [ref=f7e1250]
                  - button "" [ref=f7e1252]
            - row [ref=f7e1255] [cursor=pointer]:
              - cell "" [ref=f7e1256]:
                - generic [ref=f7e1259]:
                  - checkbox "" [ref=f7e1260]
                  - generic [ref=f7e1261]: 
              - cell "0450" [ref=f7e1263]
              - cell "Auto1785572917943 Test" [ref=f7e1265]
              - cell "User" [ref=f7e1267]
              - cell [ref=f7e1269]
              - cell [ref=f7e1270]
              - cell [ref=f7e1271]
              - cell [ref=f7e1272]
              - cell [ref=f7e1273]:
                - generic [ref=f7e1274]:
                  - button "" [ref=f7e1275]
                  - button "" [ref=f7e1277]
            - row [ref=f7e1280] [cursor=pointer]:
              - cell "" [ref=f7e1281]:
                - generic [ref=f7e1284]:
                  - checkbox "" [ref=f7e1285]
                  - generic [ref=f7e1286]: 
              - cell "0452" [ref=f7e1288]
              - cell "Auto1785572989507 test" [ref=f7e1290]
              - cell "user" [ref=f7e1292]
              - cell [ref=f7e1294]
              - cell [ref=f7e1295]
              - cell [ref=f7e1296]
              - cell [ref=f7e1297]
              - cell [ref=f7e1298]:
                - generic [ref=f7e1299]:
                  - button "" [ref=f7e1300]
                  - button "" [ref=f7e1302]
            - row [ref=f7e1305] [cursor=pointer]:
              - cell "" [ref=f7e1306]:
                - generic [ref=f7e1309]:
                  - checkbox "" [ref=f7e1310]
                  - generic [ref=f7e1311]: 
              - cell "0457" [ref=f7e1313]
              - cell "Auto1785573180793 test" [ref=f7e1315]
              - cell "user" [ref=f7e1317]
              - cell [ref=f7e1319]
              - cell [ref=f7e1320]
              - cell [ref=f7e1321]
              - cell [ref=f7e1322]
              - cell [ref=f7e1323]:
                - generic [ref=f7e1324]:
                  - button "" [ref=f7e1325]
                  - button "" [ref=f7e1327]
            - row [ref=f7e1330] [cursor=pointer]:
              - cell "" [ref=f7e1331]:
                - generic [ref=f7e1334]:
                  - checkbox "" [ref=f7e1335]
                  - generic [ref=f7e1336]: 
              - cell "0458" [ref=f7e1338]
              - cell "Auto1785573211120 Test" [ref=f7e1340]
              - cell "User" [ref=f7e1342]
              - cell [ref=f7e1344]
              - cell [ref=f7e1345]
              - cell [ref=f7e1346]
              - cell [ref=f7e1347]
              - cell [ref=f7e1348]:
                - generic [ref=f7e1349]:
                  - button "" [ref=f7e1350]
                  - button "" [ref=f7e1352]
            - row [ref=f7e1355] [cursor=pointer]:
              - cell "" [ref=f7e1356]:
                - generic [ref=f7e1359]:
                  - checkbox "" [ref=f7e1360]
                  - generic [ref=f7e1361]: 
              - cell "0459" [ref=f7e1363]
              - cell "Auto1785573232255 Test" [ref=f7e1365]
              - cell "User" [ref=f7e1367]
              - cell [ref=f7e1369]
              - cell [ref=f7e1370]
              - cell [ref=f7e1371]
              - cell [ref=f7e1372]
              - cell [ref=f7e1373]:
                - generic [ref=f7e1374]:
                  - button "" [ref=f7e1375]
                  - button "" [ref=f7e1377]
            - row [ref=f7e1380] [cursor=pointer]:
              - cell "" [ref=f7e1381]:
                - generic [ref=f7e1384]:
                  - checkbox "" [ref=f7e1385]
                  - generic [ref=f7e1386]: 
              - cell "0461" [ref=f7e1388]
              - cell "Auto1785573283896 Test" [ref=f7e1390]
              - cell "User" [ref=f7e1392]
              - cell [ref=f7e1394]
              - cell [ref=f7e1395]
              - cell [ref=f7e1396]
              - cell [ref=f7e1397]
              - cell [ref=f7e1398]:
                - generic [ref=f7e1399]:
                  - button "" [ref=f7e1400]
                  - button "" [ref=f7e1402]
            - row [ref=f7e1405] [cursor=pointer]:
              - cell "" [ref=f7e1406]:
                - generic [ref=f7e1409]:
                  - checkbox "" [ref=f7e1410]
                  - generic [ref=f7e1411]: 
              - cell "E4XH4FUSVV" [ref=f7e1413]
              - cell "Auto1785574447457 test" [ref=f7e1415]
              - cell "user" [ref=f7e1417]
              - cell [ref=f7e1419]
              - cell [ref=f7e1420]
              - cell [ref=f7e1421]
              - cell [ref=f7e1422]
              - cell [ref=f7e1423]:
                - generic [ref=f7e1424]:
                  - button "" [ref=f7e1425]
                  - button "" [ref=f7e1427]
            - row [ref=f7e1430] [cursor=pointer]:
              - cell "" [ref=f7e1431]:
                - generic [ref=f7e1434]:
                  - checkbox "" [ref=f7e1435]
                  - generic [ref=f7e1436]: 
              - cell "0462" [ref=f7e1438]
              - cell "Auto1785574457872 test" [ref=f7e1440]
              - cell "user" [ref=f7e1442]
              - cell [ref=f7e1444]
              - cell [ref=f7e1445]
              - cell [ref=f7e1446]
              - cell [ref=f7e1447]
              - cell [ref=f7e1448]:
                - generic [ref=f7e1449]:
                  - button "" [ref=f7e1450]
                  - button "" [ref=f7e1452]
            - row [ref=f7e1455] [cursor=pointer]:
              - cell "" [ref=f7e1456]:
                - generic [ref=f7e1459]:
                  - checkbox "" [ref=f7e1460]
                  - generic [ref=f7e1461]: 
              - cell "0465" [ref=f7e1463]
              - cell "Auto1785574464248 Test" [ref=f7e1465]
              - cell "User" [ref=f7e1467]
              - cell [ref=f7e1469]
              - cell [ref=f7e1470]
              - cell [ref=f7e1471]
              - cell [ref=f7e1472]
              - cell [ref=f7e1473]:
                - generic [ref=f7e1474]:
                  - button "" [ref=f7e1475]
                  - button "" [ref=f7e1477]
            - row [ref=f7e1480] [cursor=pointer]:
              - cell "" [ref=f7e1481]:
                - generic [ref=f7e1484]:
                  - checkbox "" [ref=f7e1485]
                  - generic [ref=f7e1486]: 
              - cell "0467" [ref=f7e1488]
              - cell "Auto1785574485977 Test" [ref=f7e1490]
              - cell "User" [ref=f7e1492]
              - cell [ref=f7e1494]
              - cell [ref=f7e1495]
              - cell [ref=f7e1496]
              - cell [ref=f7e1497]
              - cell [ref=f7e1498]:
                - generic [ref=f7e1499]:
                  - button "" [ref=f7e1500]
                  - button "" [ref=f7e1502]
        - navigation "Pagination Navigation" [ref=f7e1505]:
          - list [ref=f7e1506]:
            - listitem [ref=f7e1507]:
              - button "1" [ref=f7e1508] [cursor=pointer]
            - listitem [ref=f7e1509]:
              - button "2" [ref=f7e1510] [cursor=pointer]
            - listitem [ref=f7e1511]:
              - button "3" [ref=f7e1512] [cursor=pointer]
            - listitem [ref=f7e1513]:
              - button "4" [ref=f7e1514] [cursor=pointer]
            - listitem [ref=f7e1515]:
              - button "5" [ref=f7e1516] [cursor=pointer]
            - listitem [ref=f7e1517]:
              - button "" [ref=f7e1518] [cursor=pointer]
    - generic [ref=f7e1520]:
      - paragraph [ref=f7e1521]: OrangeHRM OS 5.9
      - paragraph [ref=f7e1522]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f7e1523] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
  758 |         .getByText(employeeId, { exact: true }),
  759 |     });
  760 | 
> 761 |     await expect(employeeRow).toHaveCount(1);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
  762 | 
  763 |     const rowCheckbox = employeeRow.locator('input[type="checkbox"]');
  764 | 
  765 |     await rowCheckbox.check({
  766 |       force: true,
  767 |     });
  768 | 
  769 |     await expect(rowCheckbox).toBeChecked();
  770 |   }
  771 | 
  772 |   async deleteSelectedEmployees(): Promise<void> {
  773 |     const deleteSelectedButton = this.page.getByRole("button", {
  774 |       name: /Delete Selected/i,
  775 |     });
  776 | 
  777 |     await expect(deleteSelectedButton).toBeVisible();
  778 |     await deleteSelectedButton.click();
  779 | 
  780 |     const confirmationDialog = this.page.getByRole("dialog");
  781 | 
  782 |     await expect(confirmationDialog).toBeVisible();
  783 | 
  784 |     const deleteResponse = this.page.waitForResponse(
  785 |       (response) =>
  786 |         response.url().includes("/api/v2/pim/employees") &&
  787 |         response.request().method() === "DELETE" &&
  788 |         response.ok(),
  789 |       { timeout: 20_000 },
  790 |     );
  791 | 
  792 |     await confirmationDialog
  793 |       .getByRole("button", {
  794 |         name: /Yes, Delete/i,
  795 |       })
  796 |       .click();
  797 | 
  798 |     await deleteResponse;
  799 | 
  800 |     await expect(confirmationDialog).toBeHidden();
  801 | 
  802 |     await expect(this.successToast).toContainText("Successfully Deleted");
  803 | 
  804 |     await expect(this.loadingSpinner).toBeHidden();
  805 |   }
  806 | 
  807 |   async selectAllVisibleEmployees(): Promise<void> {
  808 |     await expect(this.loadingSpinner).toBeHidden({
  809 |       timeout: 20_000,
  810 |     });
  811 | 
  812 |     await expect(this.employeeRows.first()).toBeVisible({
  813 |       timeout: 20_000,
  814 |     });
  815 | 
  816 |     const headerCheckbox = this.page.locator(
  817 |       '.oxd-table-header input[type="checkbox"]',
  818 |     );
  819 | 
  820 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  821 | 
  822 |     await expect
  823 |       .poll(async () => rowCheckboxes.count(), {
  824 |         timeout: 20_000,
  825 |         message: "Waiting for Employee List rows to load",
  826 |       })
  827 |       .toBeGreaterThan(0);
  828 | 
  829 |     const rowCount = await rowCheckboxes.count();
  830 | 
  831 |     await headerCheckbox.check({
  832 |       force: true,
  833 |     });
  834 | 
  835 |     await expect(headerCheckbox).toBeChecked();
  836 | 
  837 |     for (let index = 0; index < rowCount; index++) {
  838 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
  839 |     }
  840 |   }
  841 | 
  842 |   async deselectAllVisibleEmployees(): Promise<void> {
  843 |     const headerCheckbox = this.page.locator(
  844 |       '.oxd-table-header input[type="checkbox"]',
  845 |     );
  846 | 
  847 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  848 | 
  849 |     const rowCount = await rowCheckboxes.count();
  850 | 
  851 |     expect(rowCount).toBeGreaterThan(0);
  852 | 
  853 |     await headerCheckbox.uncheck({
  854 |       force: true,
  855 |     });
  856 | 
  857 |     await expect(headerCheckbox).not.toBeChecked();
  858 | 
  859 |     for (let index = 0; index < rowCount; index++) {
  860 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  861 |     }
```