# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_079 - Reset should restore Employee List after unsuccessful search @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:1091:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card')
Expected: 0
Received: 50
Timeout:  15000ms

Call log:
  - Expect "toHaveCount" with timeout 15000ms
  - waiting for locator('.oxd-table-body .oxd-table-card')
    33 × locator resolved to 50 elements
       - unexpected value "50"

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: 12345!@#$% user
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e146]:
      - generic [ref=f3e147]:
        - generic [ref=f3e148]:
          - heading "Employee Information" [level=5] [ref=f3e150]
          - button "" [ref=f3e153] [cursor=pointer]
        - separator [ref=f3e155]
        - generic [ref=f3e157]:
          - generic [ref=f3e159]:
            - generic [ref=f3e161]:
              - generic [ref=f3e162]: Employee Name
              - textbox "Type for hints..." [ref=f3e167]
            - generic [ref=f3e169]:
              - generic [ref=f3e170]: Employee Id
              - textbox [ref=f3e173]: "91787638368400"
            - generic [ref=f3e175]:
              - generic [ref=f3e176]: Employment Status
              - generic [ref=f3e180] [cursor=pointer]:
                - generic [ref=f3e181]: "-- Select --"
                - generic [ref=f3e182]: 
            - generic [ref=f3e185]:
              - generic [ref=f3e186]: Include
              - generic [ref=f3e190] [cursor=pointer]:
                - generic [ref=f3e191]: Current Employees Only
                - generic [ref=f3e192]: 
            - generic [ref=f3e195]:
              - generic [ref=f3e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f3e201]
            - generic [ref=f3e203]:
              - generic [ref=f3e204]: Job Title
              - generic [ref=f3e208] [cursor=pointer]:
                - generic [ref=f3e209]: "-- Select --"
                - generic [ref=f3e210]: 
            - generic [ref=f3e213]:
              - generic [ref=f3e214]: Sub Unit
              - generic [ref=f3e218] [cursor=pointer]:
                - generic [ref=f3e219]: "-- Select --"
                - generic [ref=f3e220]: 
          - separator [ref=f3e222]
          - generic [ref=f3e223]:
            - button "Reset" [ref=f3e224] [cursor=pointer]
            - button "Search" [active] [ref=f3e225] [cursor=pointer]
      - generic [ref=f3e226]:
        - button " Add" [ref=f3e228] [cursor=pointer]:
          - generic [ref=f3e229]: 
          - text: Add
        - generic [ref=f3e230]:
          - separator [ref=f3e231]
          - generic [ref=f3e232]: (112) Records Found
        - table [ref=f3e235]:
          - rowgroup [ref=f3e236]:
            - row [ref=f3e237]:
              - columnheader "" [ref=f3e238]:
                - generic [ref=f3e240] [cursor=pointer]:
                  - checkbox "" [ref=f3e241]
                  - generic [ref=f3e242]: 
              - columnheader "Id " [ref=f3e244]:
                - text: Id
                - generic [ref=f3e245]:
                  - generic [ref=f3e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f3e247]:
                - text: First (& Middle) Name
                - generic [ref=f3e248]:
                  - generic [ref=f3e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f3e250]:
                - text: Last Name
                - generic [ref=f3e251]:
                  - generic [ref=f3e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f3e253]:
                - text: Job Title
                - generic [ref=f3e254]:
                  - generic [ref=f3e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f3e256]:
                - text: Employment Status
                - generic [ref=f3e257]:
                  - generic [ref=f3e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f3e259]:
                - text: Sub Unit
                - generic [ref=f3e260]:
                  - generic [ref=f3e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f3e262]:
                - text: Supervisor
                - generic [ref=f3e263]:
                  - generic [ref=f3e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f3e265]
          - rowgroup [ref=f3e266]:
            - row [ref=f3e268] [cursor=pointer]:
              - cell "" [ref=f3e269]:
                - generic [ref=f3e273]:
                  - checkbox "" [ref=f3e274]
                  - generic [ref=f3e275]: 
              - cell "muser" [ref=f3e277]
              - cell "12345!@#$% akhil" [ref=f3e279]
              - cell "user" [ref=f3e281]
              - cell "HR Manager" [ref=f3e283]
              - cell "Full-Time Permanent" [ref=f3e285]
              - cell "Human Resources" [ref=f3e287]
              - cell [ref=f3e289]
              - cell [ref=f3e290]:
                - button "" [ref=f3e292]
            - row [ref=f3e295] [cursor=pointer]:
              - cell "" [ref=f3e296]:
                - generic [ref=f3e299]:
                  - checkbox "" [ref=f3e300]
                  - generic [ref=f3e301]: 
              - cell "0295" [ref=f3e303]
              - cell "99N75 425" [ref=f3e305]
              - cell "5TlV" [ref=f3e307]
              - cell [ref=f3e309]
              - cell [ref=f3e310]
              - cell [ref=f3e311]
              - cell [ref=f3e312]
              - cell [ref=f3e313]:
                - generic [ref=f3e314]:
                  - button "" [ref=f3e315]
                  - button "" [ref=f3e317]
            - row [ref=f3e320] [cursor=pointer]:
              - cell "" [ref=f3e321]:
                - generic [ref=f3e324]:
                  - checkbox "" [ref=f3e325]
                  - generic [ref=f3e326]: 
              - cell "0312" [ref=f3e328]
              - cell "A8DCo 4Ys" [ref=f3e330]
              - cell "010Z" [ref=f3e332]
              - cell [ref=f3e334]
              - cell [ref=f3e335]
              - cell [ref=f3e336]
              - cell [ref=f3e337]
              - cell [ref=f3e338]:
                - generic [ref=f3e339]:
                  - button "" [ref=f3e340]
                  - button "" [ref=f3e342]
            - row [ref=f3e345] [cursor=pointer]:
              - cell "" [ref=f3e346]:
                - generic [ref=f3e349]:
                  - checkbox "" [ref=f3e350]
                  - generic [ref=f3e351]: 
              - cell "01715" [ref=f3e353]
              - cell "Amelia" [ref=f3e355]
              - cell "Brown" [ref=f3e357]
              - cell [ref=f3e359]
              - cell [ref=f3e360]
              - cell [ref=f3e361]
              - cell [ref=f3e362]
              - cell [ref=f3e363]:
                - generic [ref=f3e364]:
                  - button "" [ref=f3e365]
                  - button "" [ref=f3e367]
            - row [ref=f3e370] [cursor=pointer]:
              - cell "" [ref=f3e371]:
                - generic [ref=f3e374]:
                  - checkbox "" [ref=f3e375]
                  - generic [ref=f3e376]: 
              - cell "471" [ref=f3e378]
              - cell "aniket Ashok" [ref=f3e380]
              - cell "patil" [ref=f3e382]
              - cell [ref=f3e384]
              - cell [ref=f3e385]
              - cell [ref=f3e386]
              - cell [ref=f3e387]
              - cell [ref=f3e388]:
                - generic [ref=f3e389]:
                  - button "" [ref=f3e390]
                  - button "" [ref=f3e392]
            - row [ref=f3e395] [cursor=pointer]:
              - cell "" [ref=f3e396]:
                - generic [ref=f3e399]:
                  - checkbox "" [ref=f3e400]
                  - generic [ref=f3e401]: 
              - cell "0360" [ref=f3e403]
              - cell "aniket t" [ref=f3e405]
              - cell "t" [ref=f3e407]
              - cell [ref=f3e409]
              - cell [ref=f3e410]
              - cell [ref=f3e411]
              - cell [ref=f3e412]
              - cell [ref=f3e413]:
                - generic [ref=f3e414]:
                  - button "" [ref=f3e415]
                  - button "" [ref=f3e417]
            - row [ref=f3e420] [cursor=pointer]:
              - cell "" [ref=f3e421]:
                - generic [ref=f3e424]:
                  - checkbox "" [ref=f3e425]
                  - generic [ref=f3e426]: 
              - cell "0411" [ref=f3e428]
              - cell "Anup Automation" [ref=f3e430]
              - cell "Test" [ref=f3e432]
              - cell [ref=f3e434]
              - cell [ref=f3e435]
              - cell [ref=f3e436]
              - cell [ref=f3e437]
              - cell [ref=f3e438]:
                - generic [ref=f3e439]:
                  - button "" [ref=f3e440]
                  - button "" [ref=f3e442]
            - row [ref=f3e445] [cursor=pointer]:
              - cell "" [ref=f3e446]:
                - generic [ref=f3e449]:
                  - checkbox "" [ref=f3e450]
                  - generic [ref=f3e451]: 
              - cell "0400" [ref=f3e453]
              - cell "Anup Automation" [ref=f3e455]
              - cell "Test" [ref=f3e457]
              - cell [ref=f3e459]
              - cell [ref=f3e460]
              - cell [ref=f3e461]
              - cell [ref=f3e462]
              - cell [ref=f3e463]:
                - generic [ref=f3e464]:
                  - button "" [ref=f3e465]
                  - button "" [ref=f3e467]
            - row [ref=f3e470] [cursor=pointer]:
              - cell "" [ref=f3e471]:
                - generic [ref=f3e474]:
                  - checkbox "" [ref=f3e475]
                  - generic [ref=f3e476]: 
              - cell [ref=f3e478]
              - cell "Anup45808 Test45808" [ref=f3e479]
              - cell "Employee45808" [ref=f3e481]
              - cell [ref=f3e483]
              - cell [ref=f3e484]
              - cell [ref=f3e485]
              - cell [ref=f3e486]
              - cell [ref=f3e487]:
                - generic [ref=f3e488]:
                  - button "" [ref=f3e489]
                  - button "" [ref=f3e491]
            - row [ref=f3e494] [cursor=pointer]:
              - cell "" [ref=f3e495]:
                - generic [ref=f3e498]:
                  - checkbox "" [ref=f3e499]
                  - generic [ref=f3e500]: 
              - cell [ref=f3e502]
              - cell "Anup54166 Test54166" [ref=f3e503]
              - cell "Employee54166" [ref=f3e505]
              - cell [ref=f3e507]
              - cell [ref=f3e508]
              - cell [ref=f3e509]
              - cell [ref=f3e510]
              - cell [ref=f3e511]:
                - generic [ref=f3e512]:
                  - button "" [ref=f3e513]
                  - button "" [ref=f3e515]
            - row [ref=f3e518] [cursor=pointer]:
              - cell "" [ref=f3e519]:
                - generic [ref=f3e522]:
                  - checkbox "" [ref=f3e523]
                  - generic [ref=f3e524]: 
              - cell [ref=f3e526]
              - cell "AnupUpdated Automation" [ref=f3e527]
              - cell "EmployeeUpdated" [ref=f3e529]
              - cell [ref=f3e531]
              - cell [ref=f3e532]
              - cell [ref=f3e533]
              - cell [ref=f3e534]
              - cell [ref=f3e535]:
                - generic [ref=f3e536]:
                  - button "" [ref=f3e537]
                  - button "" [ref=f3e539]
            - row [ref=f3e542] [cursor=pointer]:
              - cell "" [ref=f3e543]:
                - generic [ref=f3e546]:
                  - checkbox "" [ref=f3e547]
                  - generic [ref=f3e548]: 
              - cell [ref=f3e550]
              - cell "AnupUpdated Automation" [ref=f3e551]
              - cell "EmployeeUpdated" [ref=f3e553]
              - cell [ref=f3e555]
              - cell [ref=f3e556]
              - cell [ref=f3e557]
              - cell [ref=f3e558]
              - cell [ref=f3e559]:
                - generic [ref=f3e560]:
                  - button "" [ref=f3e561]
                  - button "" [ref=f3e563]
            - row [ref=f3e566] [cursor=pointer]:
              - cell "" [ref=f3e567]:
                - generic [ref=f3e570]:
                  - checkbox "" [ref=f3e571]
                  - generic [ref=f3e572]: 
              - cell "0367" [ref=f3e574]
              - cell "Ash J" [ref=f3e576]
              - cell "Tyson" [ref=f3e578]
              - cell [ref=f3e580]
              - cell [ref=f3e581]
              - cell [ref=f3e582]
              - cell [ref=f3e583]
              - cell [ref=f3e584]:
                - generic [ref=f3e585]:
                  - button "" [ref=f3e586]
                  - button "" [ref=f3e588]
            - row [ref=f3e591] [cursor=pointer]:
              - cell "" [ref=f3e592]:
                - generic [ref=f3e595]:
                  - checkbox "" [ref=f3e596]
                  - generic [ref=f3e597]: 
              - cell "0303" [ref=f3e599]
              - cell "bala kumar" [ref=f3e601]
              - cell "ravi" [ref=f3e603]
              - cell [ref=f3e605]
              - cell [ref=f3e606]
              - cell [ref=f3e607]
              - cell [ref=f3e608]
              - cell [ref=f3e609]:
                - generic [ref=f3e610]:
                  - button "" [ref=f3e611]
                  - button "" [ref=f3e613]
            - row [ref=f3e616] [cursor=pointer]:
              - cell "" [ref=f3e617]:
                - generic [ref=f3e620]:
                  - checkbox "" [ref=f3e621]
                  - generic [ref=f3e622]: 
              - cell "0292" [ref=f3e624]
              - cell "bmrtahvwhibmrtahvwhi" [ref=f3e626]
              - cell "hbfqkhjfqbhbfqkhjfqb" [ref=f3e628]
              - cell [ref=f3e630]
              - cell [ref=f3e631]
              - cell [ref=f3e632]
              - cell [ref=f3e633]
              - cell [ref=f3e634]:
                - generic [ref=f3e635]:
                  - button "" [ref=f3e636]
                  - button "" [ref=f3e638]
            - row [ref=f3e641] [cursor=pointer]:
              - cell "" [ref=f3e642]:
                - generic [ref=f3e645]:
                  - checkbox "" [ref=f3e646]
                  - generic [ref=f3e647]: 
              - cell "379211942" [ref=f3e649]
              - cell "Cancel1787637916197445 Test" [ref=f3e651]
              - cell "Delete" [ref=f3e653]
              - cell [ref=f3e655]
              - cell [ref=f3e656]
              - cell [ref=f3e657]
              - cell [ref=f3e658]
              - cell [ref=f3e659]:
                - generic [ref=f3e660]:
                  - button "" [ref=f3e661]
                  - button "" [ref=f3e663]
            - row [ref=f3e666] [cursor=pointer]:
              - cell "" [ref=f3e667]:
                - generic [ref=f3e670]:
                  - checkbox "" [ref=f3e671]
                  - generic [ref=f3e672]: 
              - cell "0320" [ref=f3e674]
              - cell "Charles" [ref=f3e676]
              - cell "Carter" [ref=f3e678]
              - cell [ref=f3e680]
              - cell [ref=f3e681]
              - cell [ref=f3e682]
              - cell [ref=f3e683]
              - cell [ref=f3e684]:
                - generic [ref=f3e685]:
                  - button "" [ref=f3e686]
                  - button "" [ref=f3e688]
            - row [ref=f3e691] [cursor=pointer]:
              - cell "" [ref=f3e692]:
                - generic [ref=f3e695]:
                  - checkbox "" [ref=f3e696]
                  - generic [ref=f3e697]: 
              - cell "1014" [ref=f3e699]
              - cell "Charli" [ref=f3e701]
              - cell "H" [ref=f3e703]
              - cell [ref=f3e705]
              - cell [ref=f3e706]
              - cell [ref=f3e707]
              - cell [ref=f3e708]
              - cell [ref=f3e709]:
                - generic [ref=f3e710]:
                  - button "" [ref=f3e711]
                  - button "" [ref=f3e713]
            - row [ref=f3e716] [cursor=pointer]:
              - cell "" [ref=f3e717]:
                - generic [ref=f3e720]:
                  - checkbox "" [ref=f3e721]
                  - generic [ref=f3e722]: 
              - cell "00392" [ref=f3e724]
              - cell "Charlotte" [ref=f3e726]
              - cell "Smith" [ref=f3e728]
              - cell [ref=f3e730]
              - cell [ref=f3e731]
              - cell [ref=f3e732]
              - cell [ref=f3e733]
              - cell [ref=f3e734]:
                - generic [ref=f3e735]:
                  - button "" [ref=f3e736]
                  - button "" [ref=f3e738]
            - row [ref=f3e741] [cursor=pointer]:
              - cell "" [ref=f3e742]:
                - generic [ref=f3e745]:
                  - checkbox "" [ref=f3e746]
                  - generic [ref=f3e747]: 
              - cell "0363" [ref=f3e749]
              - cell "Christopher" [ref=f3e751]
              - cell "Mcmillan" [ref=f3e753]
              - cell [ref=f3e755]
              - cell [ref=f3e756]
              - cell [ref=f3e757]
              - cell [ref=f3e758]
              - cell [ref=f3e759]:
                - generic [ref=f3e760]:
                  - button "" [ref=f3e761]
                  - button "" [ref=f3e763]
            - row [ref=f3e766] [cursor=pointer]:
              - cell "" [ref=f3e767]:
                - generic [ref=f3e770]:
                  - checkbox "" [ref=f3e771]
                  - generic [ref=f3e772]: 
              - cell "exs2uop9wf" [ref=f3e774]
              - cell "DeleteFirstmt89exs21mio" [ref=f3e776]
              - cell "DeleteLastmt89exs21mio" [ref=f3e778]
              - cell [ref=f3e780]
              - cell [ref=f3e781]
              - cell [ref=f3e782]
              - cell [ref=f3e783]
              - cell [ref=f3e784]:
                - generic [ref=f3e785]:
                  - button "" [ref=f3e786]
                  - button "" [ref=f3e788]
            - row [ref=f3e791] [cursor=pointer]:
              - cell "" [ref=f3e792]:
                - generic [ref=f3e795]:
                  - checkbox "" [ref=f3e796]
                  - generic [ref=f3e797]: 
              - cell "0290" [ref=f3e799]
              - cell "dhbrukkuzldhbrukkuzl" [ref=f3e801]
              - cell "ibuvlwtfsfibuvlwtfsf" [ref=f3e803]
              - cell [ref=f3e805]
              - cell [ref=f3e806]
              - cell [ref=f3e807]
              - cell [ref=f3e808]
              - cell [ref=f3e809]:
                - generic [ref=f3e810]:
                  - button "" [ref=f3e811]
                  - button "" [ref=f3e813]
            - row [ref=f3e816] [cursor=pointer]:
              - cell "" [ref=f3e817]:
                - generic [ref=f3e820]:
                  - checkbox "" [ref=f3e821]
                  - generic [ref=f3e822]: 
              - cell "0294" [ref=f3e824]
              - cell "DHINA KARAN" [ref=f3e826]
              - cell "P" [ref=f3e828]
              - cell [ref=f3e830]
              - cell [ref=f3e831]
              - cell [ref=f3e832]
              - cell [ref=f3e833]
              - cell [ref=f3e834]:
                - generic [ref=f3e835]:
                  - button "" [ref=f3e836]
                  - button "" [ref=f3e838]
            - row [ref=f3e841] [cursor=pointer]:
              - cell "" [ref=f3e842]:
                - generic [ref=f3e845]:
                  - checkbox "" [ref=f3e846]
                  - generic [ref=f3e847]: 
              - cell "ec9pfjyv4j" [ref=f3e849]
              - cell "EditFirstmt89ec9p8elf" [ref=f3e851]
              - cell "EditLastmt89ec9p8elf" [ref=f3e853]
              - cell [ref=f3e855]
              - cell [ref=f3e856]
              - cell [ref=f3e857]
              - cell [ref=f3e858]
              - cell [ref=f3e859]:
                - generic [ref=f3e860]:
                  - button "" [ref=f3e861]
                  - button "" [ref=f3e863]
            - row [ref=f3e866] [cursor=pointer]:
              - cell "" [ref=f3e867]:
                - generic [ref=f3e870]:
                  - checkbox "" [ref=f3e871]
                  - generic [ref=f3e872]: 
              - cell "m7kvttbcbz" [ref=f3e874]
              - cell "EditFirstmt89m7kv4fi9" [ref=f3e876]
              - cell "EditLastmt89m7kv4fi9" [ref=f3e878]
              - cell [ref=f3e880]
              - cell [ref=f3e881]
              - cell [ref=f3e882]
              - cell [ref=f3e883]
              - cell [ref=f3e884]:
                - generic [ref=f3e885]:
                  - button "" [ref=f3e886]
                  - button "" [ref=f3e888]
            - row [ref=f3e891] [cursor=pointer]:
              - cell "" [ref=f3e892]:
                - generic [ref=f3e895]:
                  - checkbox "" [ref=f3e896]
                  - generic [ref=f3e897]: 
              - cell "09557" [ref=f3e899]
              - cell "Emily" [ref=f3e901]
              - cell "Jones" [ref=f3e903]
              - cell [ref=f3e905]
              - cell [ref=f3e906]
              - cell [ref=f3e907]
              - cell [ref=f3e908]
              - cell [ref=f3e909]:
                - generic [ref=f3e910]:
                  - button "" [ref=f3e911]
                  - button "" [ref=f3e913]
            - row [ref=f3e916] [cursor=pointer]:
              - cell "" [ref=f3e917]:
                - generic [ref=f3e920]:
                  - checkbox "" [ref=f3e921]
                  - generic [ref=f3e922]: 
              - cell "1235" [ref=f3e924]
              - cell "FName Mname" [ref=f3e926]
              - cell "LName" [ref=f3e928]
              - cell [ref=f3e930]
              - cell [ref=f3e931]
              - cell [ref=f3e932]
              - cell [ref=f3e933]
              - cell [ref=f3e934]:
                - generic [ref=f3e935]:
                  - button "" [ref=f3e936]
                  - button "" [ref=f3e938]
            - row [ref=f3e941] [cursor=pointer]:
              - cell "" [ref=f3e942]:
                - generic [ref=f3e945]:
                  - checkbox "" [ref=f3e946]
                  - generic [ref=f3e947]: 
              - cell "ATPValue" [ref=f3e949]
              - cell "ftdkux" [ref=f3e951]
              - cell "ltsxgy" [ref=f3e953]
              - cell [ref=f3e955]
              - cell [ref=f3e956]
              - cell [ref=f3e957]
              - cell [ref=f3e958]
              - cell [ref=f3e959]:
                - generic [ref=f3e960]:
                  - button "" [ref=f3e961]
                  - button "" [ref=f3e963]
            - row [ref=f3e966] [cursor=pointer]:
              - cell "" [ref=f3e967]:
                - generic [ref=f3e970]:
                  - checkbox "" [ref=f3e971]
                  - generic [ref=f3e972]: 
              - cell "ATPValue" [ref=f3e974]
              - cell "fthnvn" [ref=f3e976]
              - cell "ltwrrt" [ref=f3e978]
              - cell [ref=f3e980]
              - cell [ref=f3e981]
              - cell [ref=f3e982]
              - cell [ref=f3e983]
              - cell [ref=f3e984]:
                - generic [ref=f3e985]:
                  - button "" [ref=f3e986]
                  - button "" [ref=f3e988]
            - row [ref=f3e991] [cursor=pointer]:
              - cell "" [ref=f3e992]:
                - generic [ref=f3e995]:
                  - checkbox "" [ref=f3e996]
                  - generic [ref=f3e997]: 
              - cell "ATPValue" [ref=f3e999]
              - cell "fthnvn" [ref=f3e1001]
              - cell "ltwrrt" [ref=f3e1003]
              - cell [ref=f3e1005]
              - cell [ref=f3e1006]
              - cell [ref=f3e1007]
              - cell [ref=f3e1008]
              - cell [ref=f3e1009]:
                - generic [ref=f3e1010]:
                  - button "" [ref=f3e1011]
                  - button "" [ref=f3e1013]
            - row [ref=f3e1016] [cursor=pointer]:
              - cell "" [ref=f3e1017]:
                - generic [ref=f3e1020]:
                  - checkbox "" [ref=f3e1021]
                  - generic [ref=f3e1022]: 
              - cell "ATPValue" [ref=f3e1024]
              - cell "fthyfv" [ref=f3e1026]
              - cell "ltrhtm" [ref=f3e1028]
              - cell [ref=f3e1030]
              - cell [ref=f3e1031]
              - cell [ref=f3e1032]
              - cell [ref=f3e1033]
              - cell [ref=f3e1034]:
                - generic [ref=f3e1035]:
                  - button "" [ref=f3e1036]
                  - button "" [ref=f3e1038]
            - row [ref=f3e1041] [cursor=pointer]:
              - cell "" [ref=f3e1042]:
                - generic [ref=f3e1045]:
                  - checkbox "" [ref=f3e1046]
                  - generic [ref=f3e1047]: 
              - cell "ATPValue" [ref=f3e1049]
              - cell "ftioiu" [ref=f3e1051]
              - cell "ltpugr" [ref=f3e1053]
              - cell [ref=f3e1055]
              - cell [ref=f3e1056]
              - cell [ref=f3e1057]
              - cell [ref=f3e1058]
              - cell [ref=f3e1059]:
                - generic [ref=f3e1060]:
                  - button "" [ref=f3e1061]
                  - button "" [ref=f3e1063]
            - row [ref=f3e1066] [cursor=pointer]:
              - cell "" [ref=f3e1067]:
                - generic [ref=f3e1070]:
                  - checkbox "" [ref=f3e1071]
                  - generic [ref=f3e1072]: 
              - cell "ATPValue" [ref=f3e1074]
              - cell "ftioiu" [ref=f3e1076]
              - cell "ltpugr" [ref=f3e1078]
              - cell [ref=f3e1080]
              - cell [ref=f3e1081]
              - cell [ref=f3e1082]
              - cell [ref=f3e1083]
              - cell [ref=f3e1084]:
                - generic [ref=f3e1085]:
                  - button "" [ref=f3e1086]
                  - button "" [ref=f3e1088]
            - row [ref=f3e1091] [cursor=pointer]:
              - cell "" [ref=f3e1092]:
                - generic [ref=f3e1095]:
                  - checkbox "" [ref=f3e1096]
                  - generic [ref=f3e1097]: 
              - cell "ATPValue" [ref=f3e1099]
              - cell "ftioiu" [ref=f3e1101]
              - cell "ltpugr" [ref=f3e1103]
              - cell [ref=f3e1105]
              - cell [ref=f3e1106]
              - cell [ref=f3e1107]
              - cell [ref=f3e1108]
              - cell [ref=f3e1109]:
                - generic [ref=f3e1110]:
                  - button "" [ref=f3e1111]
                  - button "" [ref=f3e1113]
            - row [ref=f3e1116] [cursor=pointer]:
              - cell "" [ref=f3e1117]:
                - generic [ref=f3e1120]:
                  - checkbox "" [ref=f3e1121]
                  - generic [ref=f3e1122]: 
              - cell "ATPValue" [ref=f3e1124]
              - cell "ftioiu" [ref=f3e1126]
              - cell "ltpugr" [ref=f3e1128]
              - cell [ref=f3e1130]
              - cell [ref=f3e1131]
              - cell [ref=f3e1132]
              - cell [ref=f3e1133]
              - cell [ref=f3e1134]:
                - generic [ref=f3e1135]:
                  - button "" [ref=f3e1136]
                  - button "" [ref=f3e1138]
            - row [ref=f3e1141] [cursor=pointer]:
              - cell "" [ref=f3e1142]:
                - generic [ref=f3e1145]:
                  - checkbox "" [ref=f3e1146]
                  - generic [ref=f3e1147]: 
              - cell "ATPValue" [ref=f3e1149]
              - cell "ftndlm" [ref=f3e1151]
              - cell "ltdyyf" [ref=f3e1153]
              - cell [ref=f3e1155]
              - cell [ref=f3e1156]
              - cell [ref=f3e1157]
              - cell [ref=f3e1158]
              - cell [ref=f3e1159]:
                - generic [ref=f3e1160]:
                  - button "" [ref=f3e1161]
                  - button "" [ref=f3e1163]
            - row [ref=f3e1166] [cursor=pointer]:
              - cell "" [ref=f3e1167]:
                - generic [ref=f3e1170]:
                  - checkbox "" [ref=f3e1171]
                  - generic [ref=f3e1172]: 
              - cell "ATPValue" [ref=f3e1174]
              - cell "ftpjte" [ref=f3e1176]
              - cell "ltpzkj" [ref=f3e1178]
              - cell [ref=f3e1180]
              - cell [ref=f3e1181]
              - cell [ref=f3e1182]
              - cell [ref=f3e1183]
              - cell [ref=f3e1184]:
                - generic [ref=f3e1185]:
                  - button "" [ref=f3e1186]
                  - button "" [ref=f3e1188]
            - row [ref=f3e1191] [cursor=pointer]:
              - cell "" [ref=f3e1192]:
                - generic [ref=f3e1195]:
                  - checkbox "" [ref=f3e1196]
                  - generic [ref=f3e1197]: 
              - cell "ATPValue" [ref=f3e1199]
              - cell "ftyseo" [ref=f3e1201]
              - cell "ltzbbp" [ref=f3e1203]
              - cell [ref=f3e1205]
              - cell [ref=f3e1206]
              - cell [ref=f3e1207]
              - cell [ref=f3e1208]
              - cell [ref=f3e1209]:
                - generic [ref=f3e1210]:
                  - button "" [ref=f3e1211]
                  - button "" [ref=f3e1213]
            - row [ref=f3e1216] [cursor=pointer]:
              - cell "" [ref=f3e1217]:
                - generic [ref=f3e1220]:
                  - checkbox "" [ref=f3e1221]
                  - generic [ref=f3e1222]: 
              - cell "ATPValue" [ref=f3e1224]
              - cell "ftyseo" [ref=f3e1226]
              - cell "ltzbbp" [ref=f3e1228]
              - cell [ref=f3e1230]
              - cell [ref=f3e1231]
              - cell [ref=f3e1232]
              - cell [ref=f3e1233]
              - cell [ref=f3e1234]:
                - generic [ref=f3e1235]:
                  - button "" [ref=f3e1236]
                  - button "" [ref=f3e1238]
            - row [ref=f3e1241] [cursor=pointer]:
              - cell "" [ref=f3e1242]:
                - generic [ref=f3e1245]:
                  - checkbox "" [ref=f3e1246]
                  - generic [ref=f3e1247]: 
              - cell "ATPValue" [ref=f3e1249]
              - cell "ftyseo" [ref=f3e1251]
              - cell "ltzbbp" [ref=f3e1253]
              - cell [ref=f3e1255]
              - cell [ref=f3e1256]
              - cell [ref=f3e1257]
              - cell [ref=f3e1258]
              - cell [ref=f3e1259]:
                - generic [ref=f3e1260]:
                  - button "" [ref=f3e1261]
                  - button "" [ref=f3e1263]
            - row [ref=f3e1266] [cursor=pointer]:
              - cell "" [ref=f3e1267]:
                - generic [ref=f3e1270]:
                  - checkbox "" [ref=f3e1271]
                  - generic [ref=f3e1272]: 
              - cell "ATPValue" [ref=f3e1274]
              - cell "ftyseo" [ref=f3e1276]
              - cell "ltzbbp" [ref=f3e1278]
              - cell [ref=f3e1280]
              - cell [ref=f3e1281]
              - cell [ref=f3e1282]
              - cell [ref=f3e1283]
              - cell [ref=f3e1284]:
                - generic [ref=f3e1285]:
                  - button "" [ref=f3e1286]
                  - button "" [ref=f3e1288]
            - row [ref=f3e1291] [cursor=pointer]:
              - cell "" [ref=f3e1292]:
                - generic [ref=f3e1295]:
                  - checkbox "" [ref=f3e1296]
                  - generic [ref=f3e1297]: 
              - cell "ATPValue" [ref=f3e1299]
              - cell "ftyseo" [ref=f3e1301]
              - cell "ltzbbp" [ref=f3e1303]
              - cell [ref=f3e1305]
              - cell [ref=f3e1306]
              - cell [ref=f3e1307]
              - cell [ref=f3e1308]
              - cell [ref=f3e1309]:
                - generic [ref=f3e1310]:
                  - button "" [ref=f3e1311]
                  - button "" [ref=f3e1313]
            - row [ref=f3e1316] [cursor=pointer]:
              - cell "" [ref=f3e1317]:
                - generic [ref=f3e1320]:
                  - checkbox "" [ref=f3e1321]
                  - generic [ref=f3e1322]: 
              - cell "ATPValue" [ref=f3e1324]
              - cell "ftyseo" [ref=f3e1326]
              - cell "ltzbbp" [ref=f3e1328]
              - cell [ref=f3e1330]
              - cell [ref=f3e1331]
              - cell [ref=f3e1332]
              - cell [ref=f3e1333]
              - cell [ref=f3e1334]:
                - generic [ref=f3e1335]:
                  - button "" [ref=f3e1336]
                  - button "" [ref=f3e1338]
            - row [ref=f3e1341] [cursor=pointer]:
              - cell "" [ref=f3e1342]:
                - generic [ref=f3e1345]:
                  - checkbox "" [ref=f3e1346]
                  - generic [ref=f3e1347]: 
              - cell "0315hh" [ref=f3e1349]
              - cell "hh" [ref=f3e1351]
              - cell "hh" [ref=f3e1353]
              - cell [ref=f3e1355]
              - cell [ref=f3e1356]
              - cell [ref=f3e1357]
              - cell [ref=f3e1358]
              - cell [ref=f3e1359]:
                - generic [ref=f3e1360]:
                  - button "" [ref=f3e1361]
                  - button "" [ref=f3e1363]
            - row [ref=f3e1366] [cursor=pointer]:
              - cell "" [ref=f3e1367]:
                - generic [ref=f3e1370]:
                  - checkbox "" [ref=f3e1371]
                  - generic [ref=f3e1372]: 
              - cell "0375" [ref=f3e1374]
              - cell "hi hello" [ref=f3e1376]
              - cell "hi" [ref=f3e1378]
              - cell [ref=f3e1380]
              - cell [ref=f3e1381]
              - cell [ref=f3e1382]
              - cell [ref=f3e1383]
              - cell [ref=f3e1384]:
                - generic [ref=f3e1385]:
                  - button "" [ref=f3e1386]
                  - button "" [ref=f3e1388]
            - row [ref=f3e1391] [cursor=pointer]:
              - cell "" [ref=f3e1392]:
                - generic [ref=f3e1395]:
                  - checkbox "" [ref=f3e1396]
                  - generic [ref=f3e1397]: 
              - cell "0365" [ref=f3e1399]
              - cell "James" [ref=f3e1401]
              - cell "Butler" [ref=f3e1403]
              - cell [ref=f3e1405]
              - cell [ref=f3e1406]
              - cell [ref=f3e1407]
              - cell [ref=f3e1408]
              - cell [ref=f3e1409]:
                - generic [ref=f3e1410]:
                  - button "" [ref=f3e1411]
                  - button "" [ref=f3e1413]
            - row [ref=f3e1416] [cursor=pointer]:
              - cell "" [ref=f3e1417]:
                - generic [ref=f3e1420]:
                  - checkbox "" [ref=f3e1421]
                  - generic [ref=f3e1422]: 
              - cell "0367010" [ref=f3e1424]
              - cell "Jobin Mathew" [ref=f3e1426]
              - cell "Sam" [ref=f3e1428]
              - cell [ref=f3e1430]
              - cell [ref=f3e1431]
              - cell [ref=f3e1432]
              - cell [ref=f3e1433]
              - cell [ref=f3e1434]:
                - generic [ref=f3e1435]:
                  - button "" [ref=f3e1436]
                  - button "" [ref=f3e1438]
            - row [ref=f3e1441] [cursor=pointer]:
              - cell "" [ref=f3e1442]:
                - generic [ref=f3e1445]:
                  - checkbox "" [ref=f3e1446]
                  - generic [ref=f3e1447]: 
              - cell "0303" [ref=f3e1449]
              - cell "joker john" [ref=f3e1451]
              - cell "selvam" [ref=f3e1453]
              - cell [ref=f3e1455]
              - cell [ref=f3e1456]
              - cell [ref=f3e1457]
              - cell [ref=f3e1458]
              - cell [ref=f3e1459]:
                - generic [ref=f3e1460]:
                  - button "" [ref=f3e1461]
                  - button "" [ref=f3e1463]
            - row [ref=f3e1466] [cursor=pointer]:
              - cell "" [ref=f3e1467]:
                - generic [ref=f3e1470]:
                  - checkbox "" [ref=f3e1471]
                  - generic [ref=f3e1472]: 
              - cell "0361" [ref=f3e1474]
              - cell "Joseph" [ref=f3e1476]
              - cell "Evans" [ref=f3e1478]
              - cell [ref=f3e1480]
              - cell [ref=f3e1481]
              - cell [ref=f3e1482]
              - cell [ref=f3e1483]
              - cell [ref=f3e1484]:
                - generic [ref=f3e1485]:
                  - button "" [ref=f3e1486]
                  - button "" [ref=f3e1488]
            - row [ref=f3e1491] [cursor=pointer]:
              - cell "" [ref=f3e1492]:
                - generic [ref=f3e1495]:
                  - checkbox "" [ref=f3e1496]
                  - generic [ref=f3e1497]: 
              - cell "0359" [ref=f3e1499]
              - cell "Joy" [ref=f3e1501]
              - cell "Smith" [ref=f3e1503]
              - cell [ref=f3e1505]
              - cell [ref=f3e1506]
              - cell [ref=f3e1507]
              - cell [ref=f3e1508]
              - cell [ref=f3e1509]:
                - generic [ref=f3e1510]:
                  - button "" [ref=f3e1511]
                  - button "" [ref=f3e1513]
        - navigation "Pagination Navigation" [ref=f3e1516]:
          - list [ref=f3e1517]:
            - listitem [ref=f3e1518]:
              - button "1" [ref=f3e1519] [cursor=pointer]
            - listitem [ref=f3e1520]:
              - button "2" [ref=f3e1521] [cursor=pointer]
            - listitem [ref=f3e1522]:
              - button "3" [ref=f3e1523] [cursor=pointer]
            - listitem [ref=f3e1524]:
              - button "" [ref=f3e1525] [cursor=pointer]
    - generic [ref=f3e1527]:
      - paragraph [ref=f3e1528]: OrangeHRM OS 5.9
      - paragraph [ref=f3e1529]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e1530] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  363 | 
  364 |   //   await expect(this.personalDetailsHeading).toBeVisible({
  365 |   //     timeout: 15_000,
  366 |   //   });
  367 | 
  368 |   //   return employeeId;
  369 |   // }
  370 | 
  371 |   async addEmployee(data: EmployeeData): Promise<string> {
  372 |     await this.firstnameInput.fill(data.firstName);
  373 | 
  374 |     if (data.middleName !== undefined) {
  375 |       await this.middlenameInput.fill(data.middleName);
  376 |     }
  377 | 
  378 |     await this.lastnameInput.fill(data.lastName);
  379 | 
  380 |     const employeeId =
  381 |       data.employeeId ??
  382 |       `${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 10)}`;
  383 |     await this.employeeID.fill(employeeId);
  384 | 
  385 |     if (data.profilePicturePath) {
  386 |       await this.profilePictureInput.setInputFiles(data.profilePicturePath);
  387 |     }
  388 | 
  389 |     const createEmployeeResponse = this.page.waitForResponse(
  390 |       (response) =>
  391 |         response.url().includes("/api/v2/pim/employees") &&
  392 |         response.request().method() === "POST" &&
  393 |         response.ok(),
  394 |       { timeout: 20_000 },
  395 |     );
  396 | 
  397 |     await this.SaveEmployeeButton.click();
  398 |     await createEmployeeResponse;
  399 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  400 |       timeout: 20_000,
  401 |     });
  402 |     await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });
  403 | 
  404 |     return employeeId;
  405 |   }
  406 | 
  407 |   async gotoEmployeeList(): Promise<void> {
  408 |     await this.employeeListLink.click();
  409 |   }
  410 | 
  411 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  412 |     if (filters.employeeId !== undefined) {
  413 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  414 |     }
  415 | 
  416 |     if (filters.employeeName !== undefined) {
  417 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  418 | 
  419 |       const matchingOption = this.autocompleteOptions
  420 |         .filter({ hasText: filters.employeeName })
  421 |         .first();
  422 | 
  423 |       await expect(matchingOption).toBeVisible();
  424 |       await matchingOption.click();
  425 |     }
  426 |   }
  427 | 
  428 |   async clickOnFilterSearch(): Promise<void> {
  429 |     const employeeListResponse = this.page.waitForResponse(
  430 |       (response) =>
  431 |         response.url().includes("/api/v2/pim/employees") &&
  432 |         response.request().method() === "GET" &&
  433 |         response.ok(),
  434 |       { timeout: 20_000 },
  435 |     );
  436 | 
  437 |     await this.filterSearchButton.click();
  438 |     await employeeListResponse;
  439 |     await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });
  440 |   }
  441 | 
  442 |   async verifyEmployeeSearchResult(
  443 |     employeeId: string,
  444 |     firstName: string,
  445 |     lastName: string,
  446 |   ): Promise<void> {
  447 |     await expect(this.loadingSpinner).toBeHidden();
  448 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  449 |     const cells = matchingRow.locator(".oxd-table-cell");
  450 |     const fullName = await cells.nth(2).innerText();
  451 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  452 |     await expect(cells.nth(1)).toHaveText(employeeId);
  453 |     expect(actualFirstName).toBe(firstName);
  454 |     await expect(cells.nth(3)).toHaveText(lastName);
  455 |     await expect(this.noRecordsFound).not.toBeVisible();
  456 |   }
  457 | 
  458 |   async verifyNoEmployeeRecordsFound(employeeId: string) {
  459 |     await expect(this.loadingSpinner).toBeHidden({
  460 |       timeout: 15_000,
  461 |     });
  462 | 
> 463 |     await expect(this.employeeRows).toHaveCount(0, {
      |                                     ^ Error: expect(locator).toHaveCount(expected) failed
  464 |       timeout: 15_000,
  465 |     });
  466 | 
  467 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  468 |   }
  469 | 
  470 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  471 |     await expect(this.personalDetailsHeading).toBeVisible();
  472 |     await expect(this.loadingSpinner).toBeHidden();
  473 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  474 | 
  475 |     if (details.middleName !== undefined) {
  476 |       await this.middlenameInput.fill(details.middleName);
  477 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  478 |     }
  479 | 
  480 |     if (details.lastName !== undefined) {
  481 |       await this.lastnameInput.fill(details.lastName);
  482 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  483 |     }
  484 | 
  485 |     const updateResponse = this.page.waitForResponse(
  486 |       (response) =>
  487 |         response.url().includes("/personal-details") &&
  488 |         response.request().method() === "PUT" &&
  489 |         response.ok(),
  490 |       { timeout: 20_000 },
  491 |     );
  492 | 
  493 |     await this.personalDetailsSaveButton.click();
  494 |     await updateResponse;
  495 | 
  496 |     await expect(this.successToast).toContainText("Successfully Updated");
  497 | 
  498 |     await expect(this.loadingSpinner).toBeHidden();
  499 | 
  500 |     if (details.middleName !== undefined) {
  501 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  502 |     }
  503 | 
  504 |     if (details.lastName !== undefined) {
  505 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  506 |     }
  507 |   }
  508 |   //deleting the Records
  509 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  510 |     await expect(this.loadingSpinner).toBeHidden();
  511 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  512 |     await expect(matchingRow).toHaveCount(1);
  513 |     const deleteButton = matchingRow.locator("button").filter({
  514 |       has: this.page.locator("i.bi-trash"),
  515 |     });
  516 |     await deleteButton.click();
  517 | 
  518 |     const confirmationDilaog = this.page.getByRole("dialog");
  519 |     await expect(confirmationDilaog).toBeVisible();
  520 |     const deleteResponse = this.page.waitForResponse(
  521 |       (response) =>
  522 |         response.url().includes("/api/v2/pim/employees") &&
  523 |         response.request().method() === "DELETE" &&
  524 |         response.ok(),
  525 |       { timeout: 20_000 },
  526 |     );
  527 | 
  528 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  529 | 
  530 |     await deleteResponse;
  531 | 
  532 |     await expect(this.successToast).toContainText("Successfully Deleted");
  533 | 
  534 |     await expect(matchingRow).toHaveCount(0);
  535 |   }
  536 | 
  537 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  538 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  539 | 
  540 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  541 |       timeout: 20_000,
  542 |     });
  543 | 
  544 |     await expect(this.profilePictureValidation).toBeVisible();
  545 | 
  546 |     await expect(this.profilePictureValidation).toContainText(
  547 |       "File type not allowed",
  548 |     );
  549 |   }
  550 | 
  551 |   async getVisibleEmployeeIds(): Promise<string[]> {
  552 |     await expect(this.employeeRows.first()).toBeVisible({
  553 |       timeout: 15_000,
  554 |     });
  555 | 
  556 |     await expect(this.employeeIdCells.first()).toBeVisible({
  557 |       timeout: 15_000,
  558 |     });
  559 | 
  560 |     const employeeIds = await this.employeeIdCells.allTextContents();
  561 | 
  562 |     return employeeIds
  563 |       .map((employeeId) => employeeId.trim())
```