# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_057 - Admin should delete multiple System Users using bulk selection @positive @bulk-delete @regression
- Location: tests\Admin\admin-users.spec.ts:1047:6

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('dialog').getByRole('button', { name: 'Yes, Delete', exact: true })

```

# Page snapshot

```yaml
- generic [ref=f12e2]:
  - generic [ref=f12e3]:
    - generic:
      - complementary [ref=f12e4]:
        - navigation "Sidepanel" [ref=f12e5]:
          - generic [ref=f12e6]:
            - link [ref=f12e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f12e9]
            - text: 
          - generic [ref=f12e10]:
            - generic [ref=f12e11]:
              - generic [ref=f12e12]:
                - textbox "Search" [ref=f12e15]
                - button "" [ref=f12e16] [cursor=pointer]
              - separator [ref=f12e18]
            - list [ref=f12e19]:
              - listitem [ref=f12e20]:
                - link "Admin" [ref=f12e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f12e25]:
                - link "PIM" [ref=f12e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f12e41]:
                - link "Leave" [ref=f12e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f12e46]:
                - link "Time" [ref=f12e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f12e54]:
                - link "Recruitment" [ref=f12e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f12e62]:
                - link "My Info" [ref=f12e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f12e70]:
                - link "Performance" [ref=f12e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f12e80]:
                - link "Dashboard" [ref=f12e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f12e85]:
                - link "Directory" [ref=f12e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f12e90]:
                - link "Maintenance" [ref=f12e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f12e96]:
                - link "Claim" [ref=f12e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f12e105]:
                - link "Buzz" [ref=f12e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f12e110]:
        - generic [ref=f12e111]:
          - generic [ref=f12e112]:
            - text: 
            - generic [ref=f12e113]:
              - heading "Admin" [level=6] [ref=f12e114]
              - heading "/ User Management" [level=6] [ref=f12e115]
          - link [ref=f12e117]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f12e118] [cursor=pointer]
          - list [ref=f12e124]:
            - listitem [ref=f12e125]:
              - generic [ref=f12e126] [cursor=pointer]:
                - img "profile picture" [ref=f12e127]
                - paragraph [ref=f12e128]: Shriyansh Bendkhale
                - generic [ref=f12e129]: 
        - navigation "Topbar Menu" [ref=f12e131]:
          - list [ref=f12e132]:
            - listitem [ref=f12e133] [cursor=pointer]:
              - generic [ref=f12e134]:
                - text: User Management
                - generic [ref=f12e135]: 
            - listitem [ref=f12e136] [cursor=pointer]:
              - generic [ref=f12e137]:
                - text: Job
                - generic [ref=f12e138]: 
            - listitem [ref=f12e139] [cursor=pointer]:
              - generic [ref=f12e140]:
                - text: Organization
                - generic [ref=f12e141]: 
            - listitem [ref=f12e142] [cursor=pointer]:
              - generic [ref=f12e143]:
                - text: Qualifications
                - generic [ref=f12e144]: 
            - listitem [ref=f12e145] [cursor=pointer]:
              - link "Nationalities" [ref=f12e146]:
                - /url: "#"
            - listitem [ref=f12e147] [cursor=pointer]:
              - link "Corporate Branding" [ref=f12e148]:
                - /url: "#"
            - listitem [ref=f12e149] [cursor=pointer]:
              - generic [ref=f12e150]:
                - text: Configuration
                - generic [ref=f12e151]: 
            - button "" [ref=f12e153] [cursor=pointer]
    - generic [ref=f12e155]:
      - generic [ref=f12e157]:
        - generic [ref=f12e158]:
          - generic [ref=f12e159]:
            - heading "System Users" [level=5] [ref=f12e161]
            - button "" [ref=f12e164] [cursor=pointer]
          - separator [ref=f12e166]
          - generic [ref=f12e168]:
            - generic [ref=f12e170]:
              - generic [ref=f12e172]:
                - generic [ref=f12e173]: Username
                - textbox [ref=f12e176]
              - generic [ref=f12e178]:
                - generic [ref=f12e179]: User Role
                - generic [ref=f12e183] [cursor=pointer]:
                  - generic [ref=f12e184]: "-- Select --"
                  - generic [ref=f12e185]: 
              - generic [ref=f12e188]:
                - generic [ref=f12e189]: Employee Name
                - textbox "Type for hints..." [ref=f12e194]
              - generic [ref=f12e196]:
                - generic [ref=f12e197]: Status
                - generic [ref=f12e201] [cursor=pointer]:
                  - generic [ref=f12e202]: "-- Select --"
                  - generic [ref=f12e203]: 
            - separator [ref=f12e205]
            - generic [ref=f12e206]:
              - button "Reset" [ref=f12e207] [cursor=pointer]
              - button "Search" [ref=f12e208] [cursor=pointer]
        - generic [ref=f12e209]:
          - button " Add" [ref=f12e211] [cursor=pointer]:
            - generic [ref=f12e212]: 
            - text: Add
          - generic [ref=f12e213]:
            - separator [ref=f12e214]
            - generic [ref=f12e216]:
              - generic [ref=f12e217]: (2) Records Selected
              - button " Delete Selected" [active] [ref=f12e218] [cursor=pointer]:
                - generic [ref=f12e219]: 
                - text: Delete Selected
          - table [ref=f12e221]:
            - rowgroup [ref=f12e222]:
              - row [ref=f12e223]:
                - columnheader "" [ref=f12e224]:
                  - generic [ref=f12e226] [cursor=pointer]:
                    - checkbox "" [checked] [ref=f12e227]
                    - generic [ref=f12e228]: 
                - columnheader "Username " [ref=f12e230]:
                  - text: Username
                  - generic [ref=f12e231]:
                    - generic [ref=f12e232] [cursor=pointer]: 
                    - text:  
                - columnheader "User Role " [ref=f12e233]:
                  - text: User Role
                  - generic [ref=f12e234]:
                    - generic [ref=f12e235] [cursor=pointer]: 
                    - text:  
                - columnheader "Employee Name " [ref=f12e236]:
                  - text: Employee Name
                  - generic [ref=f12e237]:
                    - generic [ref=f12e238] [cursor=pointer]: 
                    - text:  
                - columnheader "Status " [ref=f12e239]:
                  - text: Status
                  - generic [ref=f12e240]:
                    - generic [ref=f12e241] [cursor=pointer]: 
                    - text:  
                - columnheader "Actions" [ref=f12e242]
            - rowgroup [ref=f12e243]:
              - row [ref=f12e245]:
                - cell "" [ref=f12e246]:
                  - generic [ref=f12e250]:
                    - checkbox "" [ref=f12e251]
                    - generic [ref=f12e252]: 
                - cell "Admin" [ref=f12e254]
                - cell "Admin" [ref=f12e256]
                - cell "Shriyansh Bendkhale" [ref=f12e258]
                - cell "Enabled" [ref=f12e260]
                - cell [ref=f12e262]:
                  - generic [ref=f12e263]:
                    - button "" [ref=f12e264] [cursor=pointer]
                    - button "" [ref=f12e266] [cursor=pointer]
              - row [ref=f12e269]:
                - cell "" [ref=f12e270]:
                  - generic [ref=f12e273] [cursor=pointer]:
                    - checkbox "" [ref=f12e274]
                    - generic [ref=f12e275]: 
                - cell "AhsTestuser1" [ref=f12e277]
                - cell "Admin" [ref=f12e279]
                - cell "Ahs Emp" [ref=f12e281]
                - cell "Enabled" [ref=f12e283]
                - cell [ref=f12e285]:
                  - generic [ref=f12e286]:
                    - button "" [ref=f12e287] [cursor=pointer]
                    - button "" [ref=f12e289] [cursor=pointer]
              - row [ref=f12e292]:
                - cell "" [ref=f12e293]:
                  - generic [ref=f12e296] [cursor=pointer]:
                    - checkbox "" [ref=f12e297]
                    - generic [ref=f12e298]: 
                - cell "alex.hunter_02428_fmq" [ref=f12e300]
                - cell "ESS" [ref=f12e302]
                - cell "Alex Hunter" [ref=f12e304]
                - cell "Enabled" [ref=f12e306]
                - cell [ref=f12e308]:
                  - generic [ref=f12e309]:
                    - button "" [ref=f12e310] [cursor=pointer]
                    - button "" [ref=f12e312] [cursor=pointer]
              - row [ref=f12e315]:
                - cell "" [ref=f12e316]:
                  - generic [ref=f12e319] [cursor=pointer]:
                    - checkbox "" [ref=f12e320]
                    - generic [ref=f12e321]: 
                - cell "alex.hunter_24112_qv3" [ref=f12e323]
                - cell "ESS" [ref=f12e325]
                - cell "Alex Hunter" [ref=f12e327]
                - cell "Enabled" [ref=f12e329]
                - cell [ref=f12e331]:
                  - generic [ref=f12e332]:
                    - button "" [ref=f12e333] [cursor=pointer]
                    - button "" [ref=f12e335] [cursor=pointer]
              - row [ref=f12e338]:
                - cell "" [ref=f12e339]:
                  - generic [ref=f12e342] [cursor=pointer]:
                    - checkbox "" [ref=f12e343]
                    - generic [ref=f12e344]: 
                - cell "alex.hunter_70771_qbq" [ref=f12e346]
                - cell "ESS" [ref=f12e348]
                - cell "Alex Hunter" [ref=f12e350]
                - cell "Enabled" [ref=f12e352]
                - cell [ref=f12e354]:
                  - generic [ref=f12e355]:
                    - button "" [ref=f12e356] [cursor=pointer]
                    - button "" [ref=f12e358] [cursor=pointer]
              - row [ref=f12e361]:
                - cell "" [ref=f12e362]:
                  - generic [ref=f12e365] [cursor=pointer]:
                    - checkbox "" [ref=f12e366]
                    - generic [ref=f12e367]: 
                - cell "alex.hunter_82257_40u" [ref=f12e369]
                - cell "ESS" [ref=f12e371]
                - cell "Alex Hunter" [ref=f12e373]
                - cell "Enabled" [ref=f12e375]
                - cell [ref=f12e377]:
                  - generic [ref=f12e378]:
                    - button "" [ref=f12e379] [cursor=pointer]
                    - button "" [ref=f12e381] [cursor=pointer]
              - row [ref=f12e384]:
                - cell "" [ref=f12e385]:
                  - generic [ref=f12e388] [cursor=pointer]:
                    - checkbox "" [ref=f12e389]
                    - generic [ref=f12e390]: 
                - cell "charan01" [ref=f12e392]
                - cell "ESS" [ref=f12e394]
                - cell "Charan h" [ref=f12e396]
                - cell "Enabled" [ref=f12e398]
                - cell [ref=f12e400]:
                  - generic [ref=f12e401]:
                    - button "" [ref=f12e402] [cursor=pointer]
                    - button "" [ref=f12e404] [cursor=pointer]
              - row [ref=f12e407]:
                - cell "" [ref=f12e408]:
                  - generic [ref=f12e411] [cursor=pointer]:
                    - checkbox "" [ref=f12e412]
                    - generic [ref=f12e413]: 
                - cell "cuhwmypetnrg_of28cuhwmypetnrg_of28" [ref=f12e415]
                - cell "ESS" [ref=f12e417]
                - cell "Cuhwmy Rgqahur" [ref=f12e419]
                - cell "Enabled" [ref=f12e421]
                - cell [ref=f12e423]:
                  - generic [ref=f12e424]:
                    - button "" [ref=f12e425] [cursor=pointer]
                    - button "" [ref=f12e427] [cursor=pointer]
              - row [ref=f12e430]:
                - cell "" [ref=f12e431]:
                  - generic [ref=f12e434] [cursor=pointer]:
                    - checkbox "" [ref=f12e435]
                    - generic [ref=f12e436]: 
                - cell "Employee123 Employee123 Employee123" [ref=f12e438]
                - cell "ESS" [ref=f12e440]
                - cell "Employee123 Employee123" [ref=f12e442]
                - cell "Enabled" [ref=f12e444]
                - cell [ref=f12e446]:
                  - generic [ref=f12e447]:
                    - button "" [ref=f12e448] [cursor=pointer]
                    - button "" [ref=f12e450] [cursor=pointer]
              - row [ref=f12e453]:
                - cell "" [ref=f12e454]:
                  - generic [ref=f12e457] [cursor=pointer]:
                    - checkbox "" [ref=f12e458]
                    - generic [ref=f12e459]: 
                - cell "ess.kz4tph" [ref=f12e461]
                - cell "ESS" [ref=f12e463]
                - cell "Ona Gorczany9lgful" [ref=f12e465]
                - cell "Enabled" [ref=f12e467]
                - cell [ref=f12e469]:
                  - generic [ref=f12e470]:
                    - button "" [ref=f12e471] [cursor=pointer]
                    - button "" [ref=f12e473] [cursor=pointer]
              - row [ref=f12e476]:
                - cell "" [ref=f12e477]:
                  - generic [ref=f12e480] [cursor=pointer]:
                    - checkbox "" [ref=f12e481]
                    - generic [ref=f12e482]: 
                - cell "ess.ondlqf" [ref=f12e484]
                - cell "ESS" [ref=f12e486]
                - cell "Jay Brekkexcknf3" [ref=f12e488]
                - cell "Enabled" [ref=f12e490]
                - cell [ref=f12e492]:
                  - generic [ref=f12e493]:
                    - button "" [ref=f12e494] [cursor=pointer]
                    - button "" [ref=f12e496] [cursor=pointer]
              - row [ref=f12e499]:
                - cell "" [ref=f12e500]:
                  - generic [ref=f12e503] [cursor=pointer]:
                    - checkbox "" [ref=f12e504]
                    - generic [ref=f12e505]: 
                - cell "ess.uqnpca" [ref=f12e507]
                - cell "ESS" [ref=f12e509]
                - cell "Frances Jacobskirnd6" [ref=f12e511]
                - cell "Enabled" [ref=f12e513]
                - cell [ref=f12e515]:
                  - generic [ref=f12e516]:
                    - button "" [ref=f12e517] [cursor=pointer]
                    - button "" [ref=f12e519] [cursor=pointer]
              - row [ref=f12e522]:
                - cell "" [ref=f12e523]:
                  - generic [ref=f12e526] [cursor=pointer]:
                    - checkbox "" [checked] [ref=f12e527]
                    - generic [ref=f12e528]: 
                - cell "essA1785827522517565" [ref=f12e530]
                - cell "ESS" [ref=f12e532]
                - cell "AutoA1785827522517565 User" [ref=f12e534]
                - cell "Enabled" [ref=f12e536]
                - cell [ref=f12e538]:
                  - generic [ref=f12e539]:
                    - button "" [ref=f12e540] [cursor=pointer]
                    - button "" [ref=f12e542] [cursor=pointer]
              - row [ref=f12e545]:
                - cell "" [ref=f12e546]:
                  - generic [ref=f12e549] [cursor=pointer]:
                    - checkbox "" [checked] [ref=f12e550]
                    - generic [ref=f12e551]: 
                - cell "essB1785827522517565" [ref=f12e553]
                - cell "ESS" [ref=f12e555]
                - cell "AutoB1785827522517565 User" [ref=f12e557]
                - cell "Enabled" [ref=f12e559]
                - cell [ref=f12e561]:
                  - generic [ref=f12e562]:
                    - button "" [ref=f12e563] [cursor=pointer]
                    - button "" [ref=f12e565] [cursor=pointer]
              - row [ref=f12e568]:
                - cell "" [ref=f12e569]:
                  - generic [ref=f12e572] [cursor=pointer]:
                    - checkbox "" [ref=f12e573]
                    - generic [ref=f12e574]: 
                - cell "exploress1785823433148" [ref=f12e576]
                - cell "ESS" [ref=f12e578]
                - cell "ExploreMyInfo Test1785823422949" [ref=f12e580]
                - cell "Enabled" [ref=f12e582]
                - cell [ref=f12e584]:
                  - generic [ref=f12e585]:
                    - button "" [ref=f12e586] [cursor=pointer]
                    - button "" [ref=f12e588] [cursor=pointer]
              - row [ref=f12e591]:
                - cell "" [ref=f12e592]:
                  - generic [ref=f12e595] [cursor=pointer]:
                    - checkbox "" [ref=f12e596]
                    - generic [ref=f12e597]: 
                - cell "exploress1785823509494" [ref=f12e599]
                - cell "ESS" [ref=f12e601]
                - cell "ExploreMyInfo Test1785823498364" [ref=f12e603]
                - cell "Enabled" [ref=f12e605]
                - cell [ref=f12e607]:
                  - generic [ref=f12e608]:
                    - button "" [ref=f12e609] [cursor=pointer]
                    - button "" [ref=f12e611] [cursor=pointer]
              - row [ref=f12e614]:
                - cell "" [ref=f12e615]:
                  - generic [ref=f12e618] [cursor=pointer]:
                    - checkbox "" [ref=f12e619]
                    - generic [ref=f12e620]: 
                - cell "fabi.divani" [ref=f12e622]
                - cell "ESS" [ref=f12e624]
                - cell "Fabian Divani" [ref=f12e626]
                - cell "Enabled" [ref=f12e628]
                - cell [ref=f12e630]:
                  - generic [ref=f12e631]:
                    - button "" [ref=f12e632] [cursor=pointer]
                    - button "" [ref=f12e634] [cursor=pointer]
              - row [ref=f12e637]:
                - cell "" [ref=f12e638]:
                  - generic [ref=f12e641] [cursor=pointer]:
                    - checkbox "" [ref=f12e642]
                    - generic [ref=f12e643]: 
                - cell "FMLName" [ref=f12e645]
                - cell "ESS" [ref=f12e647]
                - cell "Qwerty LName" [ref=f12e649]
                - cell "Enabled" [ref=f12e651]
                - cell [ref=f12e653]:
                  - generic [ref=f12e654]:
                    - button "" [ref=f12e655] [cursor=pointer]
                    - button "" [ref=f12e657] [cursor=pointer]
              - row [ref=f12e660]:
                - cell "" [ref=f12e661]:
                  - generic [ref=f12e664] [cursor=pointer]:
                    - checkbox "" [ref=f12e665]
                    - generic [ref=f12e666]: 
                - cell "FMLName1" [ref=f12e668]
                - cell "ESS" [ref=f12e670]
                - cell "FName LName" [ref=f12e672]
                - cell "Enabled" [ref=f12e674]
                - cell [ref=f12e676]:
                  - generic [ref=f12e677]:
                    - button "" [ref=f12e678] [cursor=pointer]
                    - button "" [ref=f12e680] [cursor=pointer]
              - row [ref=f12e683]:
                - cell "" [ref=f12e684]:
                  - generic [ref=f12e687] [cursor=pointer]:
                    - checkbox "" [ref=f12e688]
                    - generic [ref=f12e689]: 
                - cell "Henrietta_Greenfelder" [ref=f12e691]
                - cell "ESS" [ref=f12e693]
                - cell "Henrietta Greenfelder" [ref=f12e695]
                - cell "Enabled" [ref=f12e697]
                - cell [ref=f12e699]:
                  - generic [ref=f12e700]:
                    - button "" [ref=f12e701] [cursor=pointer]
                    - button "" [ref=f12e703] [cursor=pointer]
              - row [ref=f12e706]:
                - cell "" [ref=f12e707]:
                  - generic [ref=f12e710] [cursor=pointer]:
                    - checkbox "" [ref=f12e711]
                    - generic [ref=f12e712]: 
                - cell "John123" [ref=f12e714]
                - cell "Admin" [ref=f12e716]
                - cell "joker selvam" [ref=f12e718]
                - cell "Enabled" [ref=f12e720]
                - cell [ref=f12e722]:
                  - generic [ref=f12e723]:
                    - button "" [ref=f12e724] [cursor=pointer]
                    - button "" [ref=f12e726] [cursor=pointer]
              - row [ref=f12e729]:
                - cell "" [ref=f12e730]:
                  - generic [ref=f12e733] [cursor=pointer]:
                    - checkbox "" [ref=f12e734]
                    - generic [ref=f12e735]: 
                - cell "kabelo" [ref=f12e737]
                - cell "ESS" [ref=f12e739]
                - cell "Kabelo Tlhape" [ref=f12e741]
                - cell "Enabled" [ref=f12e743]
                - cell [ref=f12e745]:
                  - generic [ref=f12e746]:
                    - button "" [ref=f12e747] [cursor=pointer]
                    - button "" [ref=f12e749] [cursor=pointer]
              - row [ref=f12e752]:
                - cell "" [ref=f12e753]:
                  - generic [ref=f12e756] [cursor=pointer]:
                    - checkbox "" [ref=f12e757]
                    - generic [ref=f12e758]: 
                - cell "kammo ji" [ref=f12e760]
                - cell "ESS" [ref=f12e762]
                - cell "Shreya Rathod" [ref=f12e764]
                - cell "Enabled" [ref=f12e766]
                - cell [ref=f12e768]:
                  - generic [ref=f12e769]:
                    - button "" [ref=f12e770] [cursor=pointer]
                    - button "" [ref=f12e772] [cursor=pointer]
              - row [ref=f12e775]:
                - cell "" [ref=f12e776]:
                  - generic [ref=f12e779] [cursor=pointer]:
                    - checkbox "" [ref=f12e780]
                    - generic [ref=f12e781]: 
                - cell "kaswika" [ref=f12e783]
                - cell "ESS" [ref=f12e785]
                - cell "kaswika nekkanti" [ref=f12e787]
                - cell "Enabled" [ref=f12e789]
                - cell [ref=f12e791]:
                  - generic [ref=f12e792]:
                    - button "" [ref=f12e793] [cursor=pointer]
                    - button "" [ref=f12e795] [cursor=pointer]
              - row [ref=f12e798]:
                - cell "" [ref=f12e799]:
                  - generic [ref=f12e802] [cursor=pointer]:
                    - checkbox "" [ref=f12e803]
                    - generic [ref=f12e804]: 
                - cell "LiSi7" [ref=f12e806]
                - cell "ESS" [ref=f12e808]
                - cell "Li Si" [ref=f12e810]
                - cell "Enabled" [ref=f12e812]
                - cell [ref=f12e814]:
                  - generic [ref=f12e815]:
                    - button "" [ref=f12e816] [cursor=pointer]
                    - button "" [ref=f12e818] [cursor=pointer]
              - row [ref=f12e821]:
                - cell "" [ref=f12e822]:
                  - generic [ref=f12e825] [cursor=pointer]:
                    - checkbox "" [ref=f12e826]
                    - generic [ref=f12e827]: 
                - cell "littondas" [ref=f12e829]
                - cell "ESS" [ref=f12e831]
                - cell "Rahul Das" [ref=f12e833]
                - cell "Enabled" [ref=f12e835]
                - cell [ref=f12e837]:
                  - generic [ref=f12e838]:
                    - button "" [ref=f12e839] [cursor=pointer]
                    - button "" [ref=f12e841] [cursor=pointer]
              - row [ref=f12e844]:
                - cell "" [ref=f12e845]:
                  - generic [ref=f12e848] [cursor=pointer]:
                    - checkbox "" [ref=f12e849]
                    - generic [ref=f12e850]: 
                - cell "lqxchdnjwhmzhhhac73lqxchdnjwhmzhhhac73" [ref=f12e852]
                - cell "Admin" [ref=f12e854]
                - cell "Lqxchd Mzhhhac" [ref=f12e856]
                - cell "Enabled" [ref=f12e858]
                - cell [ref=f12e860]:
                  - generic [ref=f12e861]:
                    - button "" [ref=f12e862] [cursor=pointer]
                    - button "" [ref=f12e864] [cursor=pointer]
              - row [ref=f12e867]:
                - cell "" [ref=f12e868]:
                  - generic [ref=f12e871] [cursor=pointer]:
                    - checkbox "" [ref=f12e872]
                    - generic [ref=f12e873]: 
                - cell "martin1785827652556" [ref=f12e875]
                - cell "ESS" [ref=f12e877]
                - cell "Amelia Brown" [ref=f12e879]
                - cell "Enabled" [ref=f12e881]
                - cell [ref=f12e883]:
                  - generic [ref=f12e884]:
                    - button "" [ref=f12e885] [cursor=pointer]
                    - button "" [ref=f12e887] [cursor=pointer]
              - row [ref=f12e890]:
                - cell "" [ref=f12e891]:
                  - generic [ref=f12e894] [cursor=pointer]:
                    - checkbox "" [ref=f12e895]
                    - generic [ref=f12e896]: 
                - cell "Nomps" [ref=f12e898]
                - cell "ESS" [ref=f12e900]
                - cell "Nomps Mathe" [ref=f12e902]
                - cell "Enabled" [ref=f12e904]
                - cell [ref=f12e906]:
                  - generic [ref=f12e907]:
                    - button "" [ref=f12e908] [cursor=pointer]
                    - button "" [ref=f12e910] [cursor=pointer]
              - row [ref=f12e913]:
                - cell "" [ref=f12e914]:
                  - generic [ref=f12e917] [cursor=pointer]:
                    - checkbox "" [ref=f12e918]
                    - generic [ref=f12e919]: 
                - cell "onkar004" [ref=f12e921]
                - cell "Admin" [ref=f12e923]
                - cell "Orange Test" [ref=f12e925]
                - cell "Enabled" [ref=f12e927]
                - cell [ref=f12e929]:
                  - generic [ref=f12e930]:
                    - button "" [ref=f12e931] [cursor=pointer]
                    - button "" [ref=f12e933] [cursor=pointer]
              - row [ref=f12e936]:
                - cell "" [ref=f12e937]:
                  - generic [ref=f12e940] [cursor=pointer]:
                    - checkbox "" [ref=f12e941]
                    - generic [ref=f12e942]: 
                - cell "pallove@gmail.com" [ref=f12e944]
                - cell "ESS" [ref=f12e946]
                - cell "Pallave Jain" [ref=f12e948]
                - cell "Enabled" [ref=f12e950]
                - cell [ref=f12e952]:
                  - generic [ref=f12e953]:
                    - button "" [ref=f12e954] [cursor=pointer]
                    - button "" [ref=f12e956] [cursor=pointer]
              - row [ref=f12e959]:
                - cell "" [ref=f12e960]:
                  - generic [ref=f12e963] [cursor=pointer]:
                    - checkbox "" [ref=f12e964]
                    - generic [ref=f12e965]: 
                - cell "Peter" [ref=f12e967]
                - cell "ESS" [ref=f12e969]
                - cell "Peter Anderson" [ref=f12e971]
                - cell "Enabled" [ref=f12e973]
                - cell [ref=f12e975]:
                  - generic [ref=f12e976]:
                    - button "" [ref=f12e977] [cursor=pointer]
                    - button "" [ref=f12e979] [cursor=pointer]
              - row [ref=f12e982]:
                - cell "" [ref=f12e983]:
                  - generic [ref=f12e986] [cursor=pointer]:
                    - checkbox "" [ref=f12e987]
                    - generic [ref=f12e988]: 
                - cell "pimuser24049293" [ref=f12e990]
                - cell "ESS" [ref=f12e992]
                - cell "Raj ravi" [ref=f12e994]
                - cell "Enabled" [ref=f12e996]
                - cell [ref=f12e998]:
                  - generic [ref=f12e999]:
                    - button "" [ref=f12e1000] [cursor=pointer]
                    - button "" [ref=f12e1002] [cursor=pointer]
              - row [ref=f12e1005]:
                - cell "" [ref=f12e1006]:
                  - generic [ref=f12e1009] [cursor=pointer]:
                    - checkbox "" [ref=f12e1010]
                    - generic [ref=f12e1011]: 
                - cell "pimuser24219495" [ref=f12e1013]
                - cell "ESS" [ref=f12e1015]
                - cell "Raj ravi" [ref=f12e1017]
                - cell "Enabled" [ref=f12e1019]
                - cell [ref=f12e1021]:
                  - generic [ref=f12e1022]:
                    - button "" [ref=f12e1023] [cursor=pointer]
                    - button "" [ref=f12e1025] [cursor=pointer]
              - row [ref=f12e1028]:
                - cell "" [ref=f12e1029]:
                  - generic [ref=f12e1032] [cursor=pointer]:
                    - checkbox "" [ref=f12e1033]
                    - generic [ref=f12e1034]: 
                - cell "qa_user_1785825137117" [ref=f12e1036]
                - cell "ESS" [ref=f12e1038]
                - cell "QA LoginTester1785825134094" [ref=f12e1040]
                - cell "Enabled" [ref=f12e1042]
                - cell [ref=f12e1044]:
                  - generic [ref=f12e1045]:
                    - button "" [ref=f12e1046] [cursor=pointer]
                    - button "" [ref=f12e1048] [cursor=pointer]
              - row [ref=f12e1051]:
                - cell "" [ref=f12e1052]:
                  - generic [ref=f12e1055] [cursor=pointer]:
                    - checkbox "" [ref=f12e1056]
                    - generic [ref=f12e1057]: 
                - cell "qa_user_1785825349241" [ref=f12e1059]
                - cell "ESS" [ref=f12e1061]
                - cell "QA LoginTester1785825348714" [ref=f12e1063]
                - cell "Enabled" [ref=f12e1065]
                - cell [ref=f12e1067]:
                  - generic [ref=f12e1068]:
                    - button "" [ref=f12e1069] [cursor=pointer]
                    - button "" [ref=f12e1071] [cursor=pointer]
              - row [ref=f12e1074]:
                - cell "" [ref=f12e1075]:
                  - generic [ref=f12e1078] [cursor=pointer]:
                    - checkbox "" [ref=f12e1079]
                    - generic [ref=f12e1080]: 
                - cell "qa_user_1785827169652" [ref=f12e1082]
                - cell "ESS" [ref=f12e1084]
                - cell "QA LoginTester1785827167098" [ref=f12e1086]
                - cell "Enabled" [ref=f12e1088]
                - cell [ref=f12e1090]:
                  - generic [ref=f12e1091]:
                    - button "" [ref=f12e1092] [cursor=pointer]
                    - button "" [ref=f12e1094] [cursor=pointer]
              - row [ref=f12e1097]:
                - cell "" [ref=f12e1098]:
                  - generic [ref=f12e1101] [cursor=pointer]:
                    - checkbox "" [ref=f12e1102]
                    - generic [ref=f12e1103]: 
                - cell "rajan@gmail.com" [ref=f12e1105]
                - cell "ESS" [ref=f12e1107]
                - cell "Rajan Prajapati" [ref=f12e1109]
                - cell "Enabled" [ref=f12e1111]
                - cell [ref=f12e1113]:
                  - generic [ref=f12e1114]:
                    - button "" [ref=f12e1115] [cursor=pointer]
                    - button "" [ref=f12e1117] [cursor=pointer]
              - row [ref=f12e1120]:
                - cell "" [ref=f12e1121]:
                  - generic [ref=f12e1124] [cursor=pointer]:
                    - checkbox "" [ref=f12e1125]
                    - generic [ref=f12e1126]: 
                - cell "sharif@gmail.com" [ref=f12e1128]
                - cell "ESS" [ref=f12e1130]
                - cell "MD Sharif Nawaz" [ref=f12e1132]
                - cell "Enabled" [ref=f12e1134]
                - cell [ref=f12e1136]:
                  - generic [ref=f12e1137]:
                    - button "" [ref=f12e1138] [cursor=pointer]
                    - button "" [ref=f12e1140] [cursor=pointer]
              - row [ref=f12e1143]:
                - cell "" [ref=f12e1144]:
                  - generic [ref=f12e1147] [cursor=pointer]:
                    - checkbox "" [ref=f12e1148]
                    - generic [ref=f12e1149]: 
                - cell "smithaja" [ref=f12e1151]
                - cell "Admin" [ref=f12e1153]
                - cell "Joy Smith" [ref=f12e1155]
                - cell "Enabled" [ref=f12e1157]
                - cell [ref=f12e1159]:
                  - generic [ref=f12e1160]:
                    - button "" [ref=f12e1161] [cursor=pointer]
                    - button "" [ref=f12e1163] [cursor=pointer]
              - row [ref=f12e1166]:
                - cell "" [ref=f12e1167]:
                  - generic [ref=f12e1170] [cursor=pointer]:
                    - checkbox "" [ref=f12e1171]
                    - generic [ref=f12e1172]: 
                - cell "stester" [ref=f12e1174]
                - cell "ESS" [ref=f12e1176]
                - cell "stester test" [ref=f12e1178]
                - cell "Enabled" [ref=f12e1180]
                - cell [ref=f12e1182]:
                  - generic [ref=f12e1183]:
                    - button "" [ref=f12e1184] [cursor=pointer]
                    - button "" [ref=f12e1186] [cursor=pointer]
              - row [ref=f12e1189]:
                - cell "" [ref=f12e1190]:
                  - generic [ref=f12e1193] [cursor=pointer]:
                    - checkbox "" [ref=f12e1194]
                    - generic [ref=f12e1195]: 
                - cell "sudarshan@gmail.com" [ref=f12e1197]
                - cell "ESS" [ref=f12e1199]
                - cell "Sudarshan Kale" [ref=f12e1201]
                - cell "Enabled" [ref=f12e1203]
                - cell [ref=f12e1205]:
                  - generic [ref=f12e1206]:
                    - button "" [ref=f12e1207] [cursor=pointer]
                    - button "" [ref=f12e1209] [cursor=pointer]
              - row [ref=f12e1212]:
                - cell "" [ref=f12e1213]:
                  - generic [ref=f12e1216] [cursor=pointer]:
                    - checkbox "" [ref=f12e1217]
                    - generic [ref=f12e1218]: 
                - cell "sudhir@gmail.com" [ref=f12e1220]
                - cell "ESS" [ref=f12e1222]
                - cell "Sudhir Kalmegh" [ref=f12e1224]
                - cell "Enabled" [ref=f12e1226]
                - cell [ref=f12e1228]:
                  - generic [ref=f12e1229]:
                    - button "" [ref=f12e1230] [cursor=pointer]
                    - button "" [ref=f12e1232] [cursor=pointer]
              - row [ref=f12e1235]:
                - cell "" [ref=f12e1236]:
                  - generic [ref=f12e1239] [cursor=pointer]:
                    - checkbox "" [ref=f12e1240]
                    - generic [ref=f12e1241]: 
                - cell "tp_canon_probe_944x68" [ref=f12e1243]
                - cell "ESS" [ref=f12e1245]
                - cell "TestPilot User_944x68" [ref=f12e1247]
                - cell "Enabled" [ref=f12e1249]
                - cell [ref=f12e1251]:
                  - generic [ref=f12e1252]:
                    - button "" [ref=f12e1253] [cursor=pointer]
                    - button "" [ref=f12e1255] [cursor=pointer]
              - row [ref=f12e1258]:
                - cell "" [ref=f12e1259]:
                  - generic [ref=f12e1262] [cursor=pointer]:
                    - checkbox "" [ref=f12e1263]
                    - generic [ref=f12e1264]: 
                - cell "tp_gen_probe_msw17h" [ref=f12e1266]
                - cell "ESS" [ref=f12e1268]
                - cell "TestPilot User_msw17h" [ref=f12e1270]
                - cell "Enabled" [ref=f12e1272]
                - cell [ref=f12e1274]:
                  - generic [ref=f12e1275]:
                    - button "" [ref=f12e1276] [cursor=pointer]
                    - button "" [ref=f12e1278] [cursor=pointer]
              - row [ref=f12e1281]:
                - cell "" [ref=f12e1282]:
                  - generic [ref=f12e1285] [cursor=pointer]:
                    - checkbox "" [ref=f12e1286]
                    - generic [ref=f12e1287]: 
                - cell "umesh@gmail.com" [ref=f12e1289]
                - cell "ESS" [ref=f12e1291]
                - cell "Umesh Bobade" [ref=f12e1293]
                - cell "Enabled" [ref=f12e1295]
                - cell [ref=f12e1297]:
                  - generic [ref=f12e1298]:
                    - button "" [ref=f12e1299] [cursor=pointer]
                    - button "" [ref=f12e1301] [cursor=pointer]
      - generic [ref=f12e1304]:
        - paragraph [ref=f12e1305]: OrangeHRM OS 5.9
        - paragraph [ref=f12e1306]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f12e1307] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - dialog [ref=f12e1308]:
    - document [ref=f12e1311]:
      - button "×" [ref=f12e1312] [cursor=pointer]
      - paragraph [ref=f12e1314]: Are you Sure?
      - paragraph [ref=f12e1316]: The selected record will be permanently deleted. Are you sure you want to continue?
      - generic [ref=f12e1317]:
        - button "No, Cancel" [ref=f12e1318] [cursor=pointer]
        - button " Yes, Delete" [ref=f12e1319] [cursor=pointer]:
          - generic [ref=f12e1320]: 
          - text: Yes, Delete
```

# Test source

```ts
  544 | 
  545 |     await this.editUserSaveButton.click();
  546 | 
  547 |     await Promise.all([
  548 |       updateResponse,
  549 |       updatedToast,
  550 |       this.page.waitForURL(/admin\/viewSystemUsers/, {
  551 |         timeout: 20_000,
  552 |       }),
  553 |     ]);
  554 |   }
  555 | 
  556 |   async cancelSystemUserDeletion(username: string): Promise<void> {
  557 |     const userRow = this.userRows.filter({
  558 |       has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  559 |         exact: true,
  560 |       }),
  561 |     });
  562 | 
  563 |     await expect(userRow).toHaveCount(1);
  564 | 
  565 |     await userRow
  566 |       .getByRole("button")
  567 |       .filter({
  568 |         has: this.page.locator("i.bi-trash"),
  569 |       })
  570 |       .click();
  571 | 
  572 |     const confirmationDialog = this.page.getByRole("dialog");
  573 | 
  574 |     await expect(confirmationDialog).toBeVisible();
  575 | 
  576 |     await confirmationDialog
  577 |       .getByRole("button", {
  578 |         name: "No, Cancel",
  579 |         exact: true,
  580 |       })
  581 |       .click();
  582 | 
  583 |     await expect(confirmationDialog).toBeHidden();
  584 | 
  585 |     await expect(userRow).toBeVisible();
  586 |   }
  587 | 
  588 |   async selectSystemUsers(usernames: string[]): Promise<void> {
  589 |     for (const username of usernames) {
  590 |       const userRow = this.userRows.filter({
  591 |         has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  592 |           exact: true,
  593 |         }),
  594 |       });
  595 | 
  596 |       await expect(userRow).toHaveCount(1);
  597 | 
  598 |       const checkbox = userRow.locator('input[type="checkbox"]');
  599 | 
  600 |       await checkbox.check({
  601 |         force: true,
  602 |       });
  603 | 
  604 |       await expect(checkbox).toBeChecked();
  605 |     }
  606 |   }
  607 | 
  608 |   async deleteSelectedSystemUsers(): Promise<void> {
  609 |     const deleteSelectedButton = this.page.getByRole("button", {
  610 |       name: /Delete Selected/i,
  611 |     });
  612 | 
  613 |     await expect(deleteSelectedButton).toBeVisible();
  614 | 
  615 |     await deleteSelectedButton.click();
  616 | 
  617 |     const confirmationDialog = this.page.getByRole("dialog");
  618 | 
  619 |     await expect(confirmationDialog).toBeVisible();
  620 | 
  621 |     const deleteResponse = this.page.waitForResponse(
  622 |       (response) =>
  623 |         response.url().includes("/api/v2/admin/users") &&
  624 |         response.request().method() === "DELETE" &&
  625 |         response.ok(),
  626 |       {
  627 |         timeout: 20_000,
  628 |       },
  629 |     );
  630 | 
  631 |     const deletedToast = expect(
  632 |       this.toastMessage.filter({
  633 |         hasText: /Successfully Deleted/i,
  634 |       }),
  635 |     ).toBeVisible({
  636 |       timeout: 20_000,
  637 |     });
  638 | 
  639 |     await confirmationDialog
  640 |       .getByRole("button", {
  641 |         name: "Yes, Delete",
  642 |         exact: true,
  643 |       })
> 644 |       .click();
      |        ^ Error: locator.click: Test ended.
  645 | 
  646 |     await Promise.all([deleteResponse, deletedToast]);
  647 | 
  648 |     await expect(confirmationDialog).toBeHidden();
  649 |   }
  650 | 
  651 |   async selectAllVisibleSystemUsers(): Promise<void> {
  652 |     await expect(this.loadingSpinner).toBeHidden();
  653 | 
  654 |     const headerCheckbox = this.page.locator(
  655 |       '.oxd-table-header input[type="checkbox"]',
  656 |     );
  657 | 
  658 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  659 | 
  660 |     const rowCount = await rowCheckboxes.count();
  661 | 
  662 |     expect(rowCount).toBeGreaterThan(0);
  663 | 
  664 |     await headerCheckbox.check({
  665 |       force: true,
  666 |     });
  667 | 
  668 |     await expect(headerCheckbox).toBeChecked();
  669 | 
  670 |     for (let index = 0; index < rowCount; index++) {
  671 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
  672 |     }
  673 |   }
  674 | 
  675 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  676 |     const headerCheckbox = this.page.locator(
  677 |       '.oxd-table-header input[type="checkbox"]',
  678 |     );
  679 | 
  680 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  681 | 
  682 |     const rowCount = await rowCheckboxes.count();
  683 | 
  684 |     await headerCheckbox.uncheck({
  685 |       force: true,
  686 |     });
  687 | 
  688 |     await expect(headerCheckbox).not.toBeChecked();
  689 | 
  690 |     for (let index = 0; index < rowCount; index++) {
  691 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  692 |     }
  693 |   }
  694 | 
  695 | 
  696 |   async getVisibleSystemUsernames(): Promise<string[]> {
  697 |   await expect(
  698 |     this.loadingSpinner
  699 |   ).toBeHidden();
  700 | 
  701 |   await expect(
  702 |     this.userRows.first()
  703 |   ).toBeVisible({
  704 |     timeout: 15_000,
  705 |   });
  706 | 
  707 |   return this.userRows
  708 |     .locator('.oxd-table-cell')
  709 |     .nth(1)
  710 |     .allInnerTexts();
  711 | }
  712 | 
  713 | async goToNextSystemUsersPage(): Promise<void> {
  714 |   await expect(
  715 |     this.nextPageButton
  716 |   ).toBeVisible();
  717 | 
  718 |   await expect(
  719 |     this.nextPageButton
  720 |   ).toBeEnabled();
  721 | 
  722 |   await this.nextPageButton.click();
  723 | 
  724 |   await expect(
  725 |     this.loadingSpinner
  726 |   ).toBeHidden();
  727 | }
  728 | 
  729 | async goToPreviousSystemUsersPage(): Promise<void> {
  730 |   await expect(
  731 |     this.previousPageButton
  732 |   ).toBeVisible();
  733 | 
  734 |   await expect(
  735 |     this.previousPageButton
  736 |   ).toBeEnabled();
  737 | 
  738 |   await this.previousPageButton.click();
  739 | 
  740 |   await expect(
  741 |     this.loadingSpinner
  742 |   ).toBeHidden();
  743 | }
  744 | }
```