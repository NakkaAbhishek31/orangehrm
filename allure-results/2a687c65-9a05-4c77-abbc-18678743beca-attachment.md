# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression
- Location: tests\Admin\admin-users.spec.ts:474:8

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 37
Received: 36

Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
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
          - generic [ref=f3e113]:
            - heading "Admin" [level=6] [ref=f3e114]
            - heading "/ User Management" [level=6] [ref=f3e115]
        - link [ref=f3e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e118] [cursor=pointer]
        - list [ref=f3e124]:
          - listitem [ref=f3e125]:
            - generic [ref=f3e126] [cursor=pointer]:
              - img "profile picture" [ref=f3e127]
              - paragraph [ref=f3e128]: John Pondicherry
              - generic [ref=f3e129]: 
      - navigation "Topbar Menu" [ref=f3e131]:
        - list [ref=f3e132]:
          - listitem [ref=f3e133] [cursor=pointer]:
            - generic [ref=f3e134]:
              - text: User Management
              - generic [ref=f3e135]: 
          - listitem [ref=f3e136] [cursor=pointer]:
            - generic [ref=f3e137]:
              - text: Job
              - generic [ref=f3e138]: 
          - listitem [ref=f3e139] [cursor=pointer]:
            - generic [ref=f3e140]:
              - text: Organization
              - generic [ref=f3e141]: 
          - listitem [ref=f3e142] [cursor=pointer]:
            - generic [ref=f3e143]:
              - text: Qualifications
              - generic [ref=f3e144]: 
          - listitem [ref=f3e145] [cursor=pointer]:
            - link "Nationalities" [ref=f3e146]:
              - /url: "#"
          - listitem [ref=f3e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f3e148]:
              - /url: "#"
          - listitem [ref=f3e149] [cursor=pointer]:
            - generic [ref=f3e150]:
              - text: Configuration
              - generic [ref=f3e151]: 
          - button "" [ref=f3e153] [cursor=pointer]
  - generic [ref=f3e155]:
    - generic [ref=f3e157]:
      - generic [ref=f3e158]:
        - generic [ref=f3e159]:
          - heading "System Users" [level=5] [ref=f3e161]
          - button "" [ref=f3e164] [cursor=pointer]
        - separator [ref=f3e166]
        - generic [ref=f3e168]:
          - generic [ref=f3e170]:
            - generic [ref=f3e172]:
              - generic [ref=f3e173]: Username
              - textbox [ref=f3e176]
            - generic [ref=f3e178]:
              - generic [ref=f3e179]: User Role
              - generic [ref=f3e183] [cursor=pointer]:
                - generic [ref=f3e184]: "-- Select --"
                - generic [ref=f3e185]: 
            - generic [ref=f3e188]:
              - generic [ref=f3e189]: Employee Name
              - textbox "Type for hints..." [ref=f3e194]
            - generic [ref=f3e196]:
              - generic [ref=f3e197]: Status
              - generic [ref=f3e201] [cursor=pointer]:
                - generic [ref=f3e202]: "-- Select --"
                - generic [ref=f3e203]: 
          - separator [ref=f3e205]
          - generic [ref=f3e206]:
            - button "Reset" [ref=f3e207] [cursor=pointer]
            - button "Search" [ref=f3e208] [cursor=pointer]
      - generic [ref=f3e209]:
        - button " Add" [ref=f3e211] [cursor=pointer]:
          - generic [ref=f3e212]: 
          - text: Add
        - generic [ref=f3e213]:
          - separator [ref=f3e214]
          - generic [ref=f3e216]:
            - generic [ref=f3e217]: (36) Records Selected
            - button " Delete Selected" [ref=f3e218] [cursor=pointer]:
              - generic [ref=f3e219]: 
              - text: Delete Selected
        - table [ref=f3e221]:
          - rowgroup [ref=f3e222]:
            - row [ref=f3e223]:
              - columnheader "" [ref=f3e224]:
                - generic [ref=f3e226] [cursor=pointer]:
                  - checkbox "" [checked] [active] [ref=f3e227]
                  - generic [ref=f3e228]: 
              - columnheader "Username " [ref=f3e230]:
                - text: Username
                - generic [ref=f3e231]:
                  - generic [ref=f3e232] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f3e233]:
                - text: User Role
                - generic [ref=f3e234]:
                  - generic [ref=f3e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f3e236]:
                - text: Employee Name
                - generic [ref=f3e237]:
                  - generic [ref=f3e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f3e239]:
                - text: Status
                - generic [ref=f3e240]:
                  - generic [ref=f3e241] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f3e242]
          - rowgroup [ref=f3e243]:
            - row [ref=f3e245]:
              - cell "" [ref=f3e246]:
                - generic [ref=f3e250]:
                  - checkbox "" [ref=f3e251]
                  - generic [ref=f3e252]: 
              - cell "Admin" [ref=f3e254]
              - cell "Admin" [ref=f3e256]
              - cell "John Pondicherry" [ref=f3e258]
              - cell "Enabled" [ref=f3e260]
              - cell [ref=f3e262]:
                - generic [ref=f3e263]:
                  - button "" [ref=f3e264] [cursor=pointer]
                  - button "" [ref=f3e266] [cursor=pointer]
            - row [ref=f3e269]:
              - cell "" [ref=f3e270]:
                - generic [ref=f3e273] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e274]
                  - generic [ref=f3e275]: 
              - cell "Adminn1" [ref=f3e277]
              - cell "ESS" [ref=f3e279]
              - cell "ks srivatsavva" [ref=f3e281]
              - cell "Enabled" [ref=f3e283]
              - cell [ref=f3e285]:
                - generic [ref=f3e286]:
                  - button "" [ref=f3e287] [cursor=pointer]
                  - button "" [ref=f3e289] [cursor=pointer]
            - row [ref=f3e292]:
              - cell "" [ref=f3e293]:
                - generic [ref=f3e296] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e297]
                  - generic [ref=f3e298]: 
              - cell "Ann Smith" [ref=f3e300]
              - cell "Admin" [ref=f3e302]
              - cell "Emily Jones" [ref=f3e304]
              - cell "Enabled" [ref=f3e306]
              - cell [ref=f3e308]:
                - generic [ref=f3e309]:
                  - button "" [ref=f3e310] [cursor=pointer]
                  - button "" [ref=f3e312] [cursor=pointer]
            - row [ref=f3e315]:
              - cell "" [ref=f3e316]:
                - generic [ref=f3e319] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e320]
                  - generic [ref=f3e321]: 
              - cell "autouser_0em24z" [ref=f3e323]
              - cell "ESS" [ref=f3e325]
              - cell "A8DCo 010Z" [ref=f3e327]
              - cell "Enabled" [ref=f3e329]
              - cell [ref=f3e331]:
                - generic [ref=f3e332]:
                  - button "" [ref=f3e333] [cursor=pointer]
                  - button "" [ref=f3e335] [cursor=pointer]
            - row [ref=f3e338]:
              - cell "" [ref=f3e339]:
                - generic [ref=f3e342] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e343]
                  - generic [ref=f3e344]: 
              - cell "autouser_2r88mx" [ref=f3e346]
              - cell "ESS" [ref=f3e348]
              - cell "A8DCo 010Z" [ref=f3e350]
              - cell "Enabled" [ref=f3e352]
              - cell [ref=f3e354]:
                - generic [ref=f3e355]:
                  - button "" [ref=f3e356] [cursor=pointer]
                  - button "" [ref=f3e358] [cursor=pointer]
            - row [ref=f3e361]:
              - cell "" [ref=f3e362]:
                - generic [ref=f3e365] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e366]
                  - generic [ref=f3e367]: 
              - cell "autouser_euhr6w" [ref=f3e369]
              - cell "ESS" [ref=f3e371]
              - cell "A8DCo 010Z" [ref=f3e373]
              - cell "Enabled" [ref=f3e375]
              - cell [ref=f3e377]:
                - generic [ref=f3e378]:
                  - button "" [ref=f3e379] [cursor=pointer]
                  - button "" [ref=f3e381] [cursor=pointer]
            - row [ref=f3e384]:
              - cell "" [ref=f3e385]:
                - generic [ref=f3e388] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e389]
                  - generic [ref=f3e390]: 
              - cell "autouser_q0x9z3" [ref=f3e392]
              - cell "ESS" [ref=f3e394]
              - cell "A8DCo 010Z" [ref=f3e396]
              - cell "Enabled" [ref=f3e398]
              - cell [ref=f3e400]:
                - generic [ref=f3e401]:
                  - button "" [ref=f3e402] [cursor=pointer]
                  - button "" [ref=f3e404] [cursor=pointer]
            - row [ref=f3e407]:
              - cell "" [ref=f3e408]:
                - generic [ref=f3e411] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e412]
                  - generic [ref=f3e413]: 
              - cell "autouser_rb79rl" [ref=f3e415]
              - cell "ESS" [ref=f3e417]
              - cell "A8DCo 010Z" [ref=f3e419]
              - cell "Enabled" [ref=f3e421]
              - cell [ref=f3e423]:
                - generic [ref=f3e424]:
                  - button "" [ref=f3e425] [cursor=pointer]
                  - button "" [ref=f3e427] [cursor=pointer]
            - row [ref=f3e430]:
              - cell "" [ref=f3e431]:
                - generic [ref=f3e434] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e435]
                  - generic [ref=f3e436]: 
              - cell "autouser_tkt458" [ref=f3e438]
              - cell "ESS" [ref=f3e440]
              - cell "A8DCo 010Z" [ref=f3e442]
              - cell "Enabled" [ref=f3e444]
              - cell [ref=f3e446]:
                - generic [ref=f3e447]:
                  - button "" [ref=f3e448] [cursor=pointer]
                  - button "" [ref=f3e450] [cursor=pointer]
            - row [ref=f3e453]:
              - cell "" [ref=f3e454]:
                - generic [ref=f3e457] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e458]
                  - generic [ref=f3e459]: 
              - cell "autouser_vdr200" [ref=f3e461]
              - cell "ESS" [ref=f3e463]
              - cell "A8DCo 010Z" [ref=f3e465]
              - cell "Enabled" [ref=f3e467]
              - cell [ref=f3e469]:
                - generic [ref=f3e470]:
                  - button "" [ref=f3e471] [cursor=pointer]
                  - button "" [ref=f3e473] [cursor=pointer]
            - row [ref=f3e476]:
              - cell "" [ref=f3e477]:
                - generic [ref=f3e480] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e481]
                  - generic [ref=f3e482]: 
              - cell "autouser_zoy7uo" [ref=f3e484]
              - cell "ESS" [ref=f3e486]
              - cell "A8DCo 010Z" [ref=f3e488]
              - cell "Enabled" [ref=f3e490]
              - cell [ref=f3e492]:
                - generic [ref=f3e493]:
                  - button "" [ref=f3e494] [cursor=pointer]
                  - button "" [ref=f3e496] [cursor=pointer]
            - row [ref=f3e499]:
              - cell "" [ref=f3e500]:
                - generic [ref=f3e503] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e504]
                  - generic [ref=f3e505]: 
              - cell "d6kN9U" [ref=f3e507]
              - cell "Admin" [ref=f3e509]
              - cell "Wynona Bogan" [ref=f3e511]
              - cell "Enabled" [ref=f3e513]
              - cell [ref=f3e515]:
                - generic [ref=f3e516]:
                  - button "" [ref=f3e517] [cursor=pointer]
                  - button "" [ref=f3e519] [cursor=pointer]
            - row [ref=f3e522]:
              - cell "" [ref=f3e523]:
                - generic [ref=f3e526] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e527]
                  - generic [ref=f3e528]: 
              - cell "Darrel_OConnell" [ref=f3e530]
              - cell "ESS" [ref=f3e532]
              - cell "Alan McLaughlin" [ref=f3e534]
              - cell "Enabled" [ref=f3e536]
              - cell [ref=f3e538]:
                - generic [ref=f3e539]:
                  - button "" [ref=f3e540] [cursor=pointer]
                  - button "" [ref=f3e542] [cursor=pointer]
            - row [ref=f3e545]:
              - cell "" [ref=f3e546]:
                - generic [ref=f3e549] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e550]
                  - generic [ref=f3e551]: 
              - cell "Dorian" [ref=f3e553]
              - cell "Admin" [ref=f3e555]
              - cell "Dorian Deckow" [ref=f3e557]
              - cell "Enabled" [ref=f3e559]
              - cell [ref=f3e561]:
                - generic [ref=f3e562]:
                  - button "" [ref=f3e563] [cursor=pointer]
                  - button "" [ref=f3e565] [cursor=pointer]
            - row [ref=f3e568]:
              - cell "" [ref=f3e569]:
                - generic [ref=f3e572] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e573]
                  - generic [ref=f3e574]: 
              - cell "FMLName" [ref=f3e576]
              - cell "ESS" [ref=f3e578]
              - cell "Qwerty LName" [ref=f3e580]
              - cell "Enabled" [ref=f3e582]
              - cell [ref=f3e584]:
                - generic [ref=f3e585]:
                  - button "" [ref=f3e586] [cursor=pointer]
                  - button "" [ref=f3e588] [cursor=pointer]
            - row [ref=f3e591]:
              - cell "" [ref=f3e592]:
                - generic [ref=f3e595] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e596]
                  - generic [ref=f3e597]: 
              - cell "FMLName1" [ref=f3e599]
              - cell "ESS" [ref=f3e601]
              - cell "FName LName" [ref=f3e603]
              - cell "Enabled" [ref=f3e605]
              - cell [ref=f3e607]:
                - generic [ref=f3e608]:
                  - button "" [ref=f3e609] [cursor=pointer]
                  - button "" [ref=f3e611] [cursor=pointer]
            - row [ref=f3e614]:
              - cell "" [ref=f3e615]:
                - generic [ref=f3e618] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e619]
                  - generic [ref=f3e620]: 
              - cell "Hardy.Abbott" [ref=f3e622]
              - cell "ESS" [ref=f3e624]
              - cell "Shelia Purdy" [ref=f3e626]
              - cell "Enabled" [ref=f3e628]
              - cell [ref=f3e630]:
                - generic [ref=f3e631]:
                  - button "" [ref=f3e632] [cursor=pointer]
                  - button "" [ref=f3e634] [cursor=pointer]
            - row [ref=f3e637]:
              - cell "" [ref=f3e638]:
                - generic [ref=f3e641] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e642]
                  - generic [ref=f3e643]: 
              - cell "hello" [ref=f3e645]
              - cell "ESS" [ref=f3e647]
              - cell "<img src=x onerror=alert(1) >" [ref=f3e649]
              - cell "Enabled" [ref=f3e651]
              - cell [ref=f3e653]:
                - generic [ref=f3e654]:
                  - button "" [ref=f3e655] [cursor=pointer]
                  - button "" [ref=f3e657] [cursor=pointer]
            - row [ref=f3e660]:
              - cell "" [ref=f3e661]:
                - generic [ref=f3e664] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e665]
                  - generic [ref=f3e666]: 
              - cell "Jobinsam@6742" [ref=f3e668]
              - cell "ESS" [ref=f3e670]
              - cell "Jobin Sam" [ref=f3e672]
              - cell "Enabled" [ref=f3e674]
              - cell [ref=f3e676]:
                - generic [ref=f3e677]:
                  - button "" [ref=f3e678] [cursor=pointer]
                  - button "" [ref=f3e680] [cursor=pointer]
            - row [ref=f3e683]:
              - cell "" [ref=f3e684]:
                - generic [ref=f3e687] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e688]
                  - generic [ref=f3e689]: 
              - cell "London_Kovacek" [ref=f3e691]
              - cell "ESS" [ref=f3e693]
              - cell "Vaughn Graham" [ref=f3e695]
              - cell "Enabled" [ref=f3e697]
              - cell [ref=f3e699]:
                - generic [ref=f3e700]:
                  - button "" [ref=f3e701] [cursor=pointer]
                  - button "" [ref=f3e703] [cursor=pointer]
            - row [ref=f3e706]:
              - cell "" [ref=f3e707]:
                - generic [ref=f3e710] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e711]
                  - generic [ref=f3e712]: 
              - cell "Monty" [ref=f3e714]
              - cell "Admin" [ref=f3e716]
              - cell "Monty VonRueden" [ref=f3e718]
              - cell "Enabled" [ref=f3e720]
              - cell [ref=f3e722]:
                - generic [ref=f3e723]:
                  - button "" [ref=f3e724] [cursor=pointer]
                  - button "" [ref=f3e726] [cursor=pointer]
            - row [ref=f3e729]:
              - cell "" [ref=f3e730]:
                - generic [ref=f3e733] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e734]
                  - generic [ref=f3e735]: 
              - cell "pentest_ess_b" [ref=f3e737]
              - cell "ESS" [ref=f3e739]
              - cell "HACKED UserB" [ref=f3e741]
              - cell "Enabled" [ref=f3e743]
              - cell [ref=f3e745]:
                - generic [ref=f3e746]:
                  - button "" [ref=f3e747] [cursor=pointer]
                  - button "" [ref=f3e749] [cursor=pointer]
            - row [ref=f3e752]:
              - cell "" [ref=f3e753]:
                - generic [ref=f3e756] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e757]
                  - generic [ref=f3e758]: 
              - cell "Rajaa" [ref=f3e760]
              - cell "ESS" [ref=f3e762]
              - cell "Rajaa P" [ref=f3e764]
              - cell "Enabled" [ref=f3e766]
              - cell [ref=f3e768]:
                - generic [ref=f3e769]:
                  - button "" [ref=f3e770] [cursor=pointer]
                  - button "" [ref=f3e772] [cursor=pointer]
            - row [ref=f3e775]:
              - cell "" [ref=f3e776]:
                - generic [ref=f3e779] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e780]
                  - generic [ref=f3e781]: 
              - cell "Silas_Spinka" [ref=f3e783]
              - cell "ESS" [ref=f3e785]
              - cell "Ismael Considine" [ref=f3e787]
              - cell "Enabled" [ref=f3e789]
              - cell [ref=f3e791]:
                - generic [ref=f3e792]:
                  - button "" [ref=f3e793] [cursor=pointer]
                  - button "" [ref=f3e795] [cursor=pointer]
            - row [ref=f3e798]:
              - cell "" [ref=f3e799]:
                - generic [ref=f3e802] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e803]
                  - generic [ref=f3e804]: 
              - cell "Surya99" [ref=f3e806]
              - cell "Admin" [ref=f3e808]
              - cell "Veena HL" [ref=f3e810]
              - cell "Enabled" [ref=f3e812]
              - cell [ref=f3e814]:
                - generic [ref=f3e815]:
                  - button "" [ref=f3e816] [cursor=pointer]
                  - button "" [ref=f3e818] [cursor=pointer]
            - row [ref=f3e821]:
              - cell "" [ref=f3e822]:
                - generic [ref=f3e825] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e826]
                  - generic [ref=f3e827]: 
              - cell "trainig" [ref=f3e829]
              - cell "Admin" [ref=f3e831]
              - cell "Nora Borer" [ref=f3e833]
              - cell "Enabled" [ref=f3e835]
              - cell [ref=f3e837]:
                - generic [ref=f3e838]:
                  - button "" [ref=f3e839] [cursor=pointer]
                  - button "" [ref=f3e841] [cursor=pointer]
            - row [ref=f3e844]:
              - cell "" [ref=f3e845]:
                - generic [ref=f3e848] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e849]
                  - generic [ref=f3e850]: 
              - cell "US222283" [ref=f3e852]
              - cell "ESS" [ref=f3e854]
              - cell "John Smith" [ref=f3e856]
              - cell "Enabled" [ref=f3e858]
              - cell [ref=f3e860]:
                - generic [ref=f3e861]:
                  - button "" [ref=f3e862] [cursor=pointer]
                  - button "" [ref=f3e864] [cursor=pointer]
            - row [ref=f3e867]:
              - cell "" [ref=f3e868]:
                - generic [ref=f3e871] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e872]
                  - generic [ref=f3e873]: 
              - cell "US331197" [ref=f3e875]
              - cell "ESS" [ref=f3e877]
              - cell "Jane Brown" [ref=f3e879]
              - cell "Enabled" [ref=f3e881]
              - cell [ref=f3e883]:
                - generic [ref=f3e884]:
                  - button "" [ref=f3e885] [cursor=pointer]
                  - button "" [ref=f3e887] [cursor=pointer]
            - row [ref=f3e890]:
              - cell "" [ref=f3e891]:
                - generic [ref=f3e894] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e895]
                  - generic [ref=f3e896]: 
              - cell "US626112" [ref=f3e898]
              - cell "ESS" [ref=f3e900]
              - cell "Alex Wilson" [ref=f3e902]
              - cell "Enabled" [ref=f3e904]
              - cell [ref=f3e906]:
                - generic [ref=f3e907]:
                  - button "" [ref=f3e908] [cursor=pointer]
                  - button "" [ref=f3e910] [cursor=pointer]
            - row [ref=f3e913]:
              - cell "" [ref=f3e914]:
                - generic [ref=f3e917] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e918]
                  - generic [ref=f3e919]: 
              - cell "US910168" [ref=f3e921]
              - cell "ESS" [ref=f3e923]
              - cell "Alex Taylor" [ref=f3e925]
              - cell "Enabled" [ref=f3e927]
              - cell [ref=f3e929]:
                - generic [ref=f3e930]:
                  - button "" [ref=f3e931] [cursor=pointer]
                  - button "" [ref=f3e933] [cursor=pointer]
            - row [ref=f3e936]:
              - cell "" [ref=f3e937]:
                - generic [ref=f3e940] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e941]
                  - generic [ref=f3e942]: 
              - cell "user1786693000863815" [ref=f3e944]
              - cell "ESS" [ref=f3e946]
              - cell "Auto178669300086369 User" [ref=f3e948]
              - cell "Enabled" [ref=f3e950]
              - cell [ref=f3e952]:
                - generic [ref=f3e953]:
                  - button "" [ref=f3e954] [cursor=pointer]
                  - button "" [ref=f3e956] [cursor=pointer]
            - row [ref=f3e959]:
              - cell "" [ref=f3e960]:
                - generic [ref=f3e963] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e964]
                  - generic [ref=f3e965]: 
              - cell "user1786693308176199" [ref=f3e967]
              - cell "ESS" [ref=f3e969]
              - cell "Auto1786693308176193 User" [ref=f3e971]
              - cell "Enabled" [ref=f3e973]
              - cell [ref=f3e975]:
                - generic [ref=f3e976]:
                  - button "" [ref=f3e977] [cursor=pointer]
                  - button "" [ref=f3e979] [cursor=pointer]
            - row [ref=f3e982]:
              - cell "" [ref=f3e983]:
                - generic [ref=f3e986] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e987]
                  - generic [ref=f3e988]: 
              - cell "user1786693740299502" [ref=f3e990]
              - cell "ESS" [ref=f3e992]
              - cell "Auto1786693740299993 User" [ref=f3e994]
              - cell "Enabled" [ref=f3e996]
              - cell [ref=f3e998]:
                - generic [ref=f3e999]:
                  - button "" [ref=f3e1000] [cursor=pointer]
                  - button "" [ref=f3e1002] [cursor=pointer]
            - row [ref=f3e1005]:
              - cell "" [ref=f3e1006]:
                - generic [ref=f3e1009] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1010]
                  - generic [ref=f3e1011]: 
              - cell "UsernameUsername" [ref=f3e1013]
              - cell "Admin" [ref=f3e1015]
              - cell "rudra h" [ref=f3e1017]
              - cell "Enabled" [ref=f3e1019]
              - cell [ref=f3e1021]:
                - generic [ref=f3e1022]:
                  - button "" [ref=f3e1023] [cursor=pointer]
                  - button "" [ref=f3e1025] [cursor=pointer]
            - row [ref=f3e1028]:
              - cell "" [ref=f3e1029]:
                - generic [ref=f3e1032] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1033]
                  - generic [ref=f3e1034]: 
              - cell "UsernameUsername123" [ref=f3e1036]
              - cell "Admin" [ref=f3e1038]
              - cell "sww test" [ref=f3e1040]
              - cell "Enabled" [ref=f3e1042]
              - cell [ref=f3e1044]:
                - generic [ref=f3e1045]:
                  - button "" [ref=f3e1046] [cursor=pointer]
                  - button "" [ref=f3e1048] [cursor=pointer]
            - row [ref=f3e1051]:
              - cell "" [ref=f3e1052]:
                - generic [ref=f3e1055] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1056]
                  - generic [ref=f3e1057]: 
              - cell "username_test_1" [ref=f3e1059]
              - cell "ESS" [ref=f3e1061]
              - cell "firname_test_2 last_name_test_2" [ref=f3e1063]
              - cell "Enabled" [ref=f3e1065]
              - cell [ref=f3e1067]:
                - generic [ref=f3e1068]:
                  - button "" [ref=f3e1069] [cursor=pointer]
                  - button "" [ref=f3e1071] [cursor=pointer]
            - row [ref=f3e1074]:
              - cell "" [ref=f3e1075]:
                - generic [ref=f3e1078] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1079]
                  - generic [ref=f3e1080]: 
              - cell "VeryTest first" [ref=f3e1082]
              - cell "Admin" [ref=f3e1084]
              - cell "Orange Test" [ref=f3e1086]
              - cell "Enabled" [ref=f3e1088]
              - cell [ref=f3e1090]:
                - generic [ref=f3e1091]:
                  - button "" [ref=f3e1092] [cursor=pointer]
                  - button "" [ref=f3e1094] [cursor=pointer]
    - generic [ref=f3e1097]:
      - paragraph [ref=f3e1098]: OrangeHRM OS 5.9
      - paragraph [ref=f3e1099]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e1100] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  610 |       .getByRole("button", {
  611 |         name: "No, Cancel",
  612 |         exact: true,
  613 |       })
  614 |       .click();
  615 | 
  616 |     await expect(confirmationDialog).toBeHidden();
  617 | 
  618 |     await expect(userRow).toBeVisible();
  619 |   }
  620 |   async getVisibleSystemUsernames(): Promise<string[]> {
  621 |     await expect(this.loadingSpinner).toBeHidden();
  622 | 
  623 |     await expect(this.userRows.first()).toBeVisible({
  624 |       timeout: 15_000,
  625 |     });
  626 | 
  627 |     return this.userRows.locator(".oxd-table-cell").nth(1).allInnerTexts();
  628 |   }
  629 | 
  630 |   async goToNextSystemUsersPage(): Promise<void> {
  631 |     await expect(this.nextPageButton).toBeVisible();
  632 | 
  633 |     await expect(this.nextPageButton).toBeEnabled();
  634 | 
  635 |     await this.nextPageButton.click();
  636 | 
  637 |     await expect(this.loadingSpinner).toBeHidden();
  638 |   }
  639 | 
  640 |   async goToPreviousSystemUsersPage(): Promise<void> {
  641 |     await expect(this.previousPageButton).toBeVisible();
  642 | 
  643 |     await expect(this.previousPageButton).toBeEnabled();
  644 | 
  645 |     await this.previousPageButton.click();
  646 | 
  647 |     await expect(this.loadingSpinner).toBeHidden();
  648 |   }
  649 | 
  650 |   async selectSystemUsers(usernames: string[]): Promise<void> {
  651 |     for (const username of usernames) {
  652 |       const userRow = this.userRows.filter({
  653 |         has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  654 |           exact: true,
  655 |         }),
  656 |       });
  657 | 
  658 |       await expect(userRow).toHaveCount(1);
  659 | 
  660 |       const checkbox = userRow.locator('input[type="checkbox"]');
  661 |       const checkboxLabel = userRow.locator(".oxd-checkbox-wrapper label");
  662 | 
  663 |       await expect(checkboxLabel).toBeVisible();
  664 |       await checkboxLabel.click();
  665 | 
  666 |       await expect(checkbox).toBeChecked();
  667 |     }
  668 | 
  669 |     await expect(this.deleteSelectedButton).toBeVisible({ timeout: 15_000 });
  670 |     await expect(this.deleteSelectedButton).toBeEnabled();
  671 |   }
  672 | 
  673 |   async selectAllVisibleSystemUsers(): Promise<void> {
  674 |     await expect(this.loadingSpinner).toBeHidden();
  675 | 
  676 |     const headerCheckboxLabel = this.page.locator(
  677 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  678 |     );
  679 | 
  680 |     const headerCheckbox = this.page.locator(
  681 |       ".oxd-table-header " + 'input[type="checkbox"]',
  682 |     );
  683 | 
  684 |     // Exclude disabled row checkboxes.
  685 |     const selectableRowCheckboxes = this.userRows.locator(
  686 |       'input[type="checkbox"]:not(:disabled)',
  687 |     );
  688 | 
  689 |     const selectableRowCount = await selectableRowCheckboxes.count();
  690 | 
  691 |     expect(selectableRowCount).toBeGreaterThan(0);
  692 | 
  693 |     await headerCheckboxLabel.click();
  694 | 
  695 |     await expect(headerCheckbox).toBeChecked();
  696 | 
  697 |     await expect
  698 |       .poll(
  699 |         async () =>
  700 |           selectableRowCheckboxes.evaluateAll(
  701 |             (checkboxes) =>
  702 |               checkboxes.filter(
  703 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  704 |               ).length,
  705 |           ),
  706 |         {
  707 |           timeout: 15_000,
  708 |         },
  709 |       )
> 710 |       .toBe(selectableRowCount);
      |        ^ Error: expect(received).toBe(expected) // Object.is equality
  711 |   }
  712 | 
  713 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  714 |     const headerCheckboxLabel = this.page.locator(
  715 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  716 |     );
  717 | 
  718 |     const headerCheckbox = this.page.locator(
  719 |       ".oxd-table-header " + 'input[type="checkbox"]',
  720 |     );
  721 | 
  722 |     const selectableRowCheckboxes = this.userRows.locator(
  723 |       'input[type="checkbox"]:not(:disabled)',
  724 |     );
  725 | 
  726 |     await headerCheckboxLabel.click();
  727 | 
  728 |     await expect(headerCheckbox).not.toBeChecked();
  729 | 
  730 |     await expect
  731 |       .poll(
  732 |         async () =>
  733 |           selectableRowCheckboxes.evaluateAll(
  734 |             (checkboxes) =>
  735 |               checkboxes.filter(
  736 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  737 |               ).length,
  738 |           ),
  739 |         {
  740 |           timeout: 15_000,
  741 |         },
  742 |       )
  743 |       .toBe(0);
  744 |   }
  745 | 
  746 |   async deleteSelectedSystemUsers(): Promise<void> {
  747 |     await expect(this.deleteSelectedButton).toBeVisible({
  748 |       timeout: 15_000,
  749 |     });
  750 |     await expect(this.deleteSelectedButton).toBeEnabled();
  751 | 
  752 |     await this.deleteSelectedButton.click();
  753 | 
  754 |     const confirmationDialog = this.page.getByRole("dialog");
  755 | 
  756 |     await expect(confirmationDialog).toBeVisible();
  757 | 
  758 |     const confirmDeleteButton = confirmationDialog
  759 |       .locator("button.oxd-button--label-danger")
  760 |       .filter({ hasText: /Yes,\s*Delete/i });
  761 | 
  762 |     await expect(confirmDeleteButton).toBeVisible();
  763 |     await expect(confirmDeleteButton).toBeEnabled();
  764 | 
  765 |     const deleteResponse = this.page.waitForResponse(
  766 |       (response) =>
  767 |         response.url().includes("/api/v2/admin/users") &&
  768 |         response.request().method() === "DELETE" &&
  769 |         response.ok(),
  770 |       { timeout: 20_000 },
  771 |     );
  772 | 
  773 |     await confirmDeleteButton.click();
  774 |     await deleteResponse;
  775 | 
  776 |     await expect(confirmationDialog).toBeHidden({
  777 |       timeout: 20_000,
  778 |     });
  779 | 
  780 |     await expect(
  781 |       this.toastMessage.filter({
  782 |         hasText: /Successfully Deleted/i,
  783 |       }),
  784 |     ).toBeVisible({
  785 |       timeout: 20_000,
  786 |     });
  787 | 
  788 |     await expect(this.loadingSpinner).toBeHidden();
  789 |   }
  790 | 
  791 |   async updateSystemUsername(updatedUsername: string): Promise<void> {
  792 |     await this.addUsernameInput.clear();
  793 |     await this.addUsernameInput.fill(updatedUsername);
  794 | 
  795 |     await this.addUsernameInput.blur();
  796 | 
  797 |     await expect(this.addUsernameInput).toHaveValue(updatedUsername);
  798 | 
  799 |     await expect(this.usernameValidation).toBeHidden();
  800 | 
  801 |     const updateUserResponse = this.page.waitForResponse(
  802 |       (response) =>
  803 |         /\/api\/v2\/admin\/users\/\d+$/.test(response.url()) &&
  804 |         response.request().method() === "PUT" &&
  805 |         response.ok(),
  806 |       { timeout: 20_000 },
  807 |     );
  808 | 
  809 |     await this.editUserSaveButton.click();
  810 |     await updateUserResponse;
```