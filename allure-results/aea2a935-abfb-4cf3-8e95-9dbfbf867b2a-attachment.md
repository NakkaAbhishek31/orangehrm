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
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785576255923 test user' }) to be visible

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
              - link "Recruitment" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e49]:
              - link "My Info" [ref=f5e50] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e57]:
              - link "Performance" [ref=f5e58] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e67]:
              - link "Dashboard" [ref=f5e68] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e72]:
              - link "Directory" [ref=f5e73] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e77]:
              - link "Maintenance" [ref=f5e78] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e83]:
              - link "Claim" [ref=f5e84] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e92]:
              - link "Buzz" [ref=f5e93] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e97]:
      - generic [ref=f5e98]:
        - generic [ref=f5e99]:
          - text: 
          - heading "PIM" [level=6] [ref=f5e101]
        - link [ref=f5e103]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e104] [cursor=pointer]
        - list [ref=f5e110]:
          - listitem [ref=f5e111]:
            - generic [ref=f5e112] [cursor=pointer]:
              - img "profile picture" [ref=f5e113]
              - paragraph [ref=f5e114]: Noor Eman
              - generic [ref=f5e115]: 
      - navigation "Topbar Menu" [ref=f5e117]:
        - list [ref=f5e118]:
          - listitem [ref=f5e119] [cursor=pointer]:
            - generic [ref=f5e120]:
              - text: Configuration
              - generic [ref=f5e121]: 
          - listitem [ref=f5e122] [cursor=pointer]:
            - link "Employee List" [ref=f5e123]:
              - /url: "#"
          - listitem [ref=f5e124] [cursor=pointer]:
            - link "Add Employee" [ref=f5e125]:
              - /url: "#"
          - listitem [ref=f5e126] [cursor=pointer]:
            - link "Reports" [ref=f5e127]:
              - /url: "#"
          - button "" [ref=f5e129] [cursor=pointer]
  - generic [ref=f5e131]:
    - generic [ref=f5e133]:
      - generic [ref=f5e134]:
        - generic [ref=f5e135]:
          - heading "Employee Information" [level=5] [ref=f5e137]
          - button "" [ref=f5e140] [cursor=pointer]
        - separator [ref=f5e142]
        - generic [ref=f5e144]:
          - generic [ref=f5e146]:
            - generic [ref=f5e148]:
              - generic [ref=f5e149]: Employee Name
              - generic [ref=f5e152]:
                - textbox "Type for hints..." [active] [ref=f5e154]: Auto1785
                - listbox [ref=f5e155]:
                  - option "Auto1785575698096 updatedTest updatedUser" [ref=f5e156] [cursor=pointer]
                  - option "Auto1785572163181 updatedTest updatedUser" [ref=f5e158] [cursor=pointer]
                  - option "Auto1785575094436 updatedTest updatedUser" [ref=f5e160] [cursor=pointer]
                  - option "Auto1785575498456 updatedTest updatedUser" [ref=f5e162] [cursor=pointer]
                  - option "Auto1785576118889 updatedTest updatedUser" [ref=f5e164] [cursor=pointer]
            - generic [ref=f5e167]:
              - generic [ref=f5e168]: Employee Id
              - textbox [ref=f5e171]
            - generic [ref=f5e173]:
              - generic [ref=f5e174]: Employment Status
              - generic [ref=f5e178] [cursor=pointer]:
                - generic [ref=f5e179]: "-- Select --"
                - generic [ref=f5e180]: 
            - generic [ref=f5e183]:
              - generic [ref=f5e184]: Include
              - generic [ref=f5e188] [cursor=pointer]:
                - generic [ref=f5e189]: Current Employees Only
                - generic [ref=f5e190]: 
            - generic [ref=f5e193]:
              - generic [ref=f5e194]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e199]
            - generic [ref=f5e201]:
              - generic [ref=f5e202]: Job Title
              - generic [ref=f5e206] [cursor=pointer]:
                - generic [ref=f5e207]: "-- Select --"
                - generic [ref=f5e208]: 
            - generic [ref=f5e211]:
              - generic [ref=f5e212]: Sub Unit
              - generic [ref=f5e216] [cursor=pointer]:
                - generic [ref=f5e217]: "-- Select --"
                - generic [ref=f5e218]: 
          - separator [ref=f5e220]
          - generic [ref=f5e221]:
            - button "Reset" [ref=f5e222] [cursor=pointer]
            - button "Search" [ref=f5e223] [cursor=pointer]
      - generic [ref=f5e224]:
        - button " Add" [ref=f5e226] [cursor=pointer]:
          - generic [ref=f5e227]: 
          - text: Add
        - generic [ref=f5e228]:
          - separator [ref=f5e229]
          - generic [ref=f5e230]: (291) Records Found
        - table [ref=f5e233]:
          - rowgroup [ref=f5e234]:
            - row [ref=f5e235]:
              - columnheader "" [ref=f5e236]:
                - generic [ref=f5e238] [cursor=pointer]:
                  - checkbox "" [ref=f5e239]
                  - generic [ref=f5e240]: 
              - columnheader "Id " [ref=f5e242]:
                - text: Id
                - generic [ref=f5e243]:
                  - generic [ref=f5e244] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e245]:
                - text: First (& Middle) Name
                - generic [ref=f5e246]:
                  - generic [ref=f5e247] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e248]:
                - text: Last Name
                - generic [ref=f5e249]:
                  - generic [ref=f5e250] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e251]:
                - text: Job Title
                - generic [ref=f5e252]:
                  - generic [ref=f5e253] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e254]:
                - text: Employment Status
                - generic [ref=f5e255]:
                  - generic [ref=f5e256] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e257]:
                - text: Sub Unit
                - generic [ref=f5e258]:
                  - generic [ref=f5e259] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e260]:
                - text: Supervisor
                - generic [ref=f5e261]:
                  - generic [ref=f5e262] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e263]
          - rowgroup [ref=f5e264]:
            - row [ref=f5e266] [cursor=pointer]:
              - cell "" [ref=f5e267]:
                - generic [ref=f5e270]:
                  - checkbox "" [ref=f5e271]
                  - generic [ref=f5e272]: 
              - cell "0611" [ref=f5e274]
              - cell "AdminTest575942" [ref=f5e276]
              - cell "EditedLast" [ref=f5e278]
              - cell [ref=f5e280]
              - cell [ref=f5e281]
              - cell [ref=f5e282]
              - cell [ref=f5e283]
              - cell [ref=f5e284]:
                - generic [ref=f5e285]:
                  - button "" [ref=f5e286]
                  - button "" [ref=f5e288]
            - row [ref=f5e291] [cursor=pointer]:
              - cell "" [ref=f5e292]:
                - generic [ref=f5e295]:
                  - checkbox "" [ref=f5e296]
                  - generic [ref=f5e297]: 
              - cell "0634" [ref=f5e299]
              - cell "AdminTest576262" [ref=f5e301]
              - cell "UserCreate" [ref=f5e303]
              - cell [ref=f5e305]
              - cell [ref=f5e306]
              - cell [ref=f5e307]
              - cell [ref=f5e308]
              - cell [ref=f5e309]:
                - generic [ref=f5e310]:
                  - button "" [ref=f5e311]
                  - button "" [ref=f5e313]
            - row [ref=f5e316] [cursor=pointer]:
              - cell "" [ref=f5e317]:
                - generic [ref=f5e320]:
                  - checkbox "" [ref=f5e321]
                  - generic [ref=f5e322]: 
              - cell "03909" [ref=f5e324]
              - cell "ADNAN dffd" [ref=f5e326]
              - cell "kHAM" [ref=f5e328]
              - cell [ref=f5e330]
              - cell [ref=f5e331]
              - cell [ref=f5e332]
              - cell [ref=f5e333]
              - cell [ref=f5e334]:
                - generic [ref=f5e335]:
                  - button "" [ref=f5e336]
                  - button "" [ref=f5e338]
            - row [ref=f5e341] [cursor=pointer]:
              - cell "" [ref=f5e342]:
                - generic [ref=f5e345]:
                  - checkbox "" [ref=f5e346]
                  - generic [ref=f5e347]: 
              - cell "733260" [ref=f5e349]
              - cell "Aliyah North" [ref=f5e351]
              - cell "Quitzon" [ref=f5e353]
              - cell [ref=f5e355]
              - cell [ref=f5e356]
              - cell [ref=f5e357]
              - cell [ref=f5e358]
              - cell [ref=f5e359]:
                - generic [ref=f5e360]:
                  - button "" [ref=f5e361]
                  - button "" [ref=f5e363]
            - row [ref=f5e366] [cursor=pointer]:
              - cell "" [ref=f5e367]:
                - generic [ref=f5e370]:
                  - checkbox "" [ref=f5e371]
                  - generic [ref=f5e372]: 
              - cell "01715" [ref=f5e374]
              - cell "Amelia" [ref=f5e376]
              - cell "Brown" [ref=f5e378]
              - cell [ref=f5e380]
              - cell [ref=f5e381]
              - cell [ref=f5e382]
              - cell [ref=f5e383]
              - cell [ref=f5e384]:
                - generic [ref=f5e385]:
                  - button "" [ref=f5e386]
                  - button "" [ref=f5e388]
            - row [ref=f5e391] [cursor=pointer]:
              - cell "" [ref=f5e392]:
                - generic [ref=f5e395]:
                  - checkbox "" [ref=f5e396]
                  - generic [ref=f5e397]: 
              - cell "506" [ref=f5e399]
              - cell "aniket Ashok" [ref=f5e401]
              - cell "patil" [ref=f5e403]
              - cell [ref=f5e405]
              - cell [ref=f5e406]
              - cell [ref=f5e407]
              - cell [ref=f5e408]
              - cell [ref=f5e409]:
                - generic [ref=f5e410]:
                  - button "" [ref=f5e411]
                  - button "" [ref=f5e413]
            - row [ref=f5e416] [cursor=pointer]:
              - cell "" [ref=f5e417]:
                - generic [ref=f5e420]:
                  - checkbox "" [ref=f5e421]
                  - generic [ref=f5e422]: 
              - cell "0360" [ref=f5e424]
              - cell "aniket t" [ref=f5e426]
              - cell "t" [ref=f5e428]
              - cell [ref=f5e430]
              - cell [ref=f5e431]
              - cell [ref=f5e432]
              - cell [ref=f5e433]
              - cell [ref=f5e434]:
                - generic [ref=f5e435]:
                  - button "" [ref=f5e436]
                  - button "" [ref=f5e438]
            - row [ref=f5e441] [cursor=pointer]:
              - cell "" [ref=f5e442]:
                - generic [ref=f5e445]:
                  - checkbox "" [ref=f5e446]
                  - generic [ref=f5e447]: 
              - cell "792" [ref=f5e449]
              - cell "aniket Ashok" [ref=f5e451]
              - cell "patil" [ref=f5e453]
              - cell [ref=f5e455]
              - cell [ref=f5e456]
              - cell [ref=f5e457]
              - cell [ref=f5e458]
              - cell [ref=f5e459]:
                - generic [ref=f5e460]:
                  - button "" [ref=f5e461]
                  - button "" [ref=f5e463]
            - row [ref=f5e466] [cursor=pointer]:
              - cell "" [ref=f5e467]:
                - generic [ref=f5e470]:
                  - checkbox "" [ref=f5e471]
                  - generic [ref=f5e472]: 
              - cell "0367" [ref=f5e474]
              - cell "Ash J" [ref=f5e476]
              - cell "Tyson" [ref=f5e478]
              - cell [ref=f5e480]
              - cell [ref=f5e481]
              - cell [ref=f5e482]
              - cell [ref=f5e483]
              - cell [ref=f5e484]:
                - generic [ref=f5e485]:
                  - button "" [ref=f5e486]
                  - button "" [ref=f5e488]
            - row [ref=f5e491] [cursor=pointer]:
              - cell "" [ref=f5e492]:
                - generic [ref=f5e495]:
                  - checkbox "" [ref=f5e496]
                  - generic [ref=f5e497]: 
              - cell "0587" [ref=f5e499]
              - cell "Auto Test" [ref=f5e501]
              - cell "User" [ref=f5e503]
              - cell [ref=f5e505]
              - cell [ref=f5e506]
              - cell [ref=f5e507]
              - cell [ref=f5e508]
              - cell [ref=f5e509]:
                - generic [ref=f5e510]:
                  - button "" [ref=f5e511]
                  - button "" [ref=f5e513]
            - row [ref=f5e516] [cursor=pointer]:
              - cell "" [ref=f5e517]:
                - generic [ref=f5e520]:
                  - checkbox "" [ref=f5e521]
                  - generic [ref=f5e522]: 
              - cell "0567" [ref=f5e524]
              - cell "Auto Test" [ref=f5e526]
              - cell "User" [ref=f5e528]
              - cell [ref=f5e530]
              - cell [ref=f5e531]
              - cell [ref=f5e532]
              - cell [ref=f5e533]
              - cell [ref=f5e534]:
                - generic [ref=f5e535]:
                  - button "" [ref=f5e536]
                  - button "" [ref=f5e538]
            - row [ref=f5e541] [cursor=pointer]:
              - cell "" [ref=f5e542]:
                - generic [ref=f5e545]:
                  - checkbox "" [ref=f5e546]
                  - generic [ref=f5e547]: 
              - cell "0615" [ref=f5e549]
              - cell "Auto Test" [ref=f5e551]
              - cell "User" [ref=f5e553]
              - cell [ref=f5e555]
              - cell [ref=f5e556]
              - cell [ref=f5e557]
              - cell [ref=f5e558]
              - cell [ref=f5e559]:
                - generic [ref=f5e560]:
                  - button "" [ref=f5e561]
                  - button "" [ref=f5e563]
            - row [ref=f5e566] [cursor=pointer]:
              - cell "" [ref=f5e567]:
                - generic [ref=f5e570]:
                  - checkbox "" [ref=f5e571]
                  - generic [ref=f5e572]: 
              - cell "0370" [ref=f5e574]
              - cell "Auto1785571204323 Test" [ref=f5e576]
              - cell "User" [ref=f5e578]
              - cell [ref=f5e580]
              - cell [ref=f5e581]
              - cell [ref=f5e582]
              - cell [ref=f5e583]
              - cell [ref=f5e584]:
                - generic [ref=f5e585]:
                  - button "" [ref=f5e586]
                  - button "" [ref=f5e588]
            - row [ref=f5e591] [cursor=pointer]:
              - cell "" [ref=f5e592]:
                - generic [ref=f5e595]:
                  - checkbox "" [ref=f5e596]
                  - generic [ref=f5e597]: 
              - cell "0372" [ref=f5e599]
              - cell "Auto1785571630533 test" [ref=f5e601]
              - cell "user" [ref=f5e603]
              - cell [ref=f5e605]
              - cell [ref=f5e606]
              - cell [ref=f5e607]
              - cell [ref=f5e608]
              - cell [ref=f5e609]:
                - generic [ref=f5e610]:
                  - button "" [ref=f5e611]
                  - button "" [ref=f5e613]
            - row [ref=f5e616] [cursor=pointer]:
              - cell "" [ref=f5e617]:
                - generic [ref=f5e620]:
                  - checkbox "" [ref=f5e621]
                  - generic [ref=f5e622]: 
              - cell "0375" [ref=f5e624]
              - cell "Auto1785571675159 test" [ref=f5e626]
              - cell "user" [ref=f5e628]
              - cell [ref=f5e630]
              - cell [ref=f5e631]
              - cell [ref=f5e632]
              - cell [ref=f5e633]
              - cell [ref=f5e634]:
                - generic [ref=f5e635]:
                  - button "" [ref=f5e636]
                  - button "" [ref=f5e638]
            - row [ref=f5e641] [cursor=pointer]:
              - cell "" [ref=f5e642]:
                - generic [ref=f5e645]:
                  - checkbox "" [ref=f5e646]
                  - generic [ref=f5e647]: 
              - cell "0390" [ref=f5e649]
              - cell "Auto1785571819293 updatedTest" [ref=f5e651]
              - cell "updatedUser" [ref=f5e653]
              - cell [ref=f5e655]
              - cell [ref=f5e656]
              - cell [ref=f5e657]
              - cell [ref=f5e658]
              - cell [ref=f5e659]:
                - generic [ref=f5e660]:
                  - button "" [ref=f5e661]
                  - button "" [ref=f5e663]
            - row [ref=f5e666] [cursor=pointer]:
              - cell "" [ref=f5e667]:
                - generic [ref=f5e670]:
                  - checkbox "" [ref=f5e671]
                  - generic [ref=f5e672]: 
              - cell "0393" [ref=f5e674]
              - cell "Auto1785571856721 test" [ref=f5e676]
              - cell "user" [ref=f5e678]
              - cell [ref=f5e680]
              - cell [ref=f5e681]
              - cell [ref=f5e682]
              - cell [ref=f5e683]
              - cell [ref=f5e684]:
                - generic [ref=f5e685]:
                  - button "" [ref=f5e686]
                  - button "" [ref=f5e688]
            - row [ref=f5e691] [cursor=pointer]:
              - cell "" [ref=f5e692]:
                - generic [ref=f5e695]:
                  - checkbox "" [ref=f5e696]
                  - generic [ref=f5e697]: 
              - cell "0396" [ref=f5e699]
              - cell "Auto1785571877148 test" [ref=f5e701]
              - cell "user" [ref=f5e703]
              - cell [ref=f5e705]
              - cell [ref=f5e706]
              - cell [ref=f5e707]
              - cell [ref=f5e708]
              - cell [ref=f5e709]:
                - generic [ref=f5e710]:
                  - button "" [ref=f5e711]
                  - button "" [ref=f5e713]
            - row [ref=f5e716] [cursor=pointer]:
              - cell "" [ref=f5e717]:
                - generic [ref=f5e720]:
                  - checkbox "" [ref=f5e721]
                  - generic [ref=f5e722]: 
              - cell "0397" [ref=f5e724]
              - cell "Auto1785571893903 updatedTest" [ref=f5e726]
              - cell "updatedUser" [ref=f5e728]
              - cell [ref=f5e730]
              - cell [ref=f5e731]
              - cell [ref=f5e732]
              - cell [ref=f5e733]
              - cell [ref=f5e734]:
                - generic [ref=f5e735]:
                  - button "" [ref=f5e736]
                  - button "" [ref=f5e738]
            - row [ref=f5e741] [cursor=pointer]:
              - cell "" [ref=f5e742]:
                - generic [ref=f5e745]:
                  - checkbox "" [ref=f5e746]
                  - generic [ref=f5e747]: 
              - cell "0398" [ref=f5e749]
              - cell "Auto1785571903048 updatedTest" [ref=f5e751]
              - cell "updatedUser" [ref=f5e753]
              - cell [ref=f5e755]
              - cell [ref=f5e756]
              - cell [ref=f5e757]
              - cell [ref=f5e758]
              - cell [ref=f5e759]:
                - generic [ref=f5e760]:
                  - button "" [ref=f5e761]
                  - button "" [ref=f5e763]
            - row [ref=f5e766] [cursor=pointer]:
              - cell "" [ref=f5e767]:
                - generic [ref=f5e770]:
                  - checkbox "" [ref=f5e771]
                  - generic [ref=f5e772]: 
              - cell "0408" [ref=f5e774]
              - cell "Auto1785571997542 test" [ref=f5e776]
              - cell "user" [ref=f5e778]
              - cell [ref=f5e780]
              - cell [ref=f5e781]
              - cell [ref=f5e782]
              - cell [ref=f5e783]
              - cell [ref=f5e784]:
                - generic [ref=f5e785]:
                  - button "" [ref=f5e786]
                  - button "" [ref=f5e788]
            - row [ref=f5e791] [cursor=pointer]:
              - cell "" [ref=f5e792]:
                - generic [ref=f5e795]:
                  - checkbox "" [ref=f5e796]
                  - generic [ref=f5e797]: 
              - cell "0410" [ref=f5e799]
              - cell "Auto1785572017407 updatedTest" [ref=f5e801]
              - cell "updatedUser" [ref=f5e803]
              - cell [ref=f5e805]
              - cell [ref=f5e806]
              - cell [ref=f5e807]
              - cell [ref=f5e808]
              - cell [ref=f5e809]:
                - generic [ref=f5e810]:
                  - button "" [ref=f5e811]
                  - button "" [ref=f5e813]
            - row [ref=f5e816] [cursor=pointer]:
              - cell "" [ref=f5e817]:
                - generic [ref=f5e820]:
                  - checkbox "" [ref=f5e821]
                  - generic [ref=f5e822]: 
              - cell "0413" [ref=f5e824]
              - cell "Auto1785572085718 Test" [ref=f5e826]
              - cell "User" [ref=f5e828]
              - cell [ref=f5e830]
              - cell [ref=f5e831]
              - cell [ref=f5e832]
              - cell [ref=f5e833]
              - cell [ref=f5e834]:
                - generic [ref=f5e835]:
                  - button "" [ref=f5e836]
                  - button "" [ref=f5e838]
            - row [ref=f5e841] [cursor=pointer]:
              - cell "" [ref=f5e842]:
                - generic [ref=f5e845]:
                  - checkbox "" [ref=f5e846]
                  - generic [ref=f5e847]: 
              - cell "0414" [ref=f5e849]
              - cell "Auto1785572093632 Test" [ref=f5e851]
              - cell "User" [ref=f5e853]
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
              - cell "0416" [ref=f5e874]
              - cell "Auto1785572129579 test" [ref=f5e876]
              - cell "user" [ref=f5e878]
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
              - cell "0415" [ref=f5e899]
              - cell "Auto1785572130542 Test" [ref=f5e901]
              - cell "User" [ref=f5e903]
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
              - cell "0417" [ref=f5e924]
              - cell "Auto1785572163181 updatedTest" [ref=f5e926]
              - cell "updatedUser" [ref=f5e928]
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
              - cell "0418" [ref=f5e949]
              - cell "Auto1785572171040 Test" [ref=f5e951]
              - cell "User" [ref=f5e953]
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
              - cell "0419" [ref=f5e974]
              - cell "Auto1785572178516 Test" [ref=f5e976]
              - cell "User" [ref=f5e978]
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
              - cell "0421" [ref=f5e999]
              - cell "Auto1785572197255 Test" [ref=f5e1001]
              - cell "User" [ref=f5e1003]
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
              - cell "0422" [ref=f5e1024]
              - cell "Auto1785572205071 Test" [ref=f5e1026]
              - cell "User" [ref=f5e1028]
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
              - cell "0423" [ref=f5e1049]
              - cell "Auto1785572228736 Test" [ref=f5e1051]
              - cell "User" [ref=f5e1053]
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
              - cell "0428" [ref=f5e1074]
              - cell "Auto1785572325468 Test" [ref=f5e1076]
              - cell "User" [ref=f5e1078]
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
              - cell "0432" [ref=f5e1099]
              - cell "Auto1785572571302 test" [ref=f5e1101]
              - cell "user" [ref=f5e1103]
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
              - cell "0433" [ref=f5e1124]
              - cell "Auto1785572613318 Test" [ref=f5e1126]
              - cell "User" [ref=f5e1128]
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
              - cell "0434" [ref=f5e1149]
              - cell "Auto1785572646561 Test" [ref=f5e1151]
              - cell "User" [ref=f5e1153]
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
              - cell "0436" [ref=f5e1174]
              - cell "Auto1785572676916 Test" [ref=f5e1176]
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
              - cell "0441" [ref=f5e1199]
              - cell "Auto1785572727919 test" [ref=f5e1201]
              - cell "user" [ref=f5e1203]
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
              - cell "0448" [ref=f5e1224]
              - cell "Auto1785572861693 test" [ref=f5e1226]
              - cell "user" [ref=f5e1228]
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
              - cell "0449" [ref=f5e1249]
              - cell "Auto1785572892202 Test" [ref=f5e1251]
              - cell "User" [ref=f5e1253]
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
              - cell "0450" [ref=f5e1274]
              - cell "Auto1785572917943 Test" [ref=f5e1276]
              - cell "User" [ref=f5e1278]
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
              - cell "0452" [ref=f5e1299]
              - cell "Auto1785572989507 test" [ref=f5e1301]
              - cell "user" [ref=f5e1303]
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
              - cell "0457" [ref=f5e1324]
              - cell "Auto1785573180793 test" [ref=f5e1326]
              - cell "user" [ref=f5e1328]
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
              - cell "0458" [ref=f5e1349]
              - cell "Auto1785573211120 Test" [ref=f5e1351]
              - cell "User" [ref=f5e1353]
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
              - cell "0459" [ref=f5e1374]
              - cell "Auto1785573232255 Test" [ref=f5e1376]
              - cell "User" [ref=f5e1378]
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
              - cell "0461" [ref=f5e1399]
              - cell "Auto1785573283896 Test" [ref=f5e1401]
              - cell "User" [ref=f5e1403]
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
              - cell "E4XH4FUSVV" [ref=f5e1424]
              - cell "Auto1785574447457 test" [ref=f5e1426]
              - cell "user" [ref=f5e1428]
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
              - cell "0462" [ref=f5e1449]
              - cell "Auto1785574457872 test" [ref=f5e1451]
              - cell "user" [ref=f5e1453]
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
              - cell "0465" [ref=f5e1474]
              - cell "Auto1785574464248 Test" [ref=f5e1476]
              - cell "User" [ref=f5e1478]
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
              - cell "0467" [ref=f5e1499]
              - cell "Auto1785574485977 Test" [ref=f5e1501]
              - cell "User" [ref=f5e1503]
              - cell [ref=f5e1505]
              - cell [ref=f5e1506]
              - cell [ref=f5e1507]
              - cell [ref=f5e1508]
              - cell [ref=f5e1509]:
                - generic [ref=f5e1510]:
                  - button "" [ref=f5e1511]
                  - button "" [ref=f5e1513]
        - navigation "Pagination Navigation" [ref=f5e1516]:
          - list [ref=f5e1517]:
            - listitem [ref=f5e1518]:
              - button "1" [ref=f5e1519] [cursor=pointer]
            - listitem [ref=f5e1520]:
              - button "2" [ref=f5e1521] [cursor=pointer]
            - listitem [ref=f5e1522]:
              - button "3" [ref=f5e1523] [cursor=pointer]
            - listitem [ref=f5e1524]:
              - button "4" [ref=f5e1525] [cursor=pointer]
            - listitem [ref=f5e1526]:
              - button "5" [ref=f5e1527] [cursor=pointer]
            - listitem [ref=f5e1528]:
              - button "" [ref=f5e1529] [cursor=pointer]
    - generic [ref=f5e1531]:
      - paragraph [ref=f5e1532]: OrangeHRM OS 5.9
      - paragraph [ref=f5e1533]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e1534] [cursor=pointer]:
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