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

Expected: 50
Received: 49

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
              - paragraph [ref=f3e128]: LfVJZqyBDe user
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
            - generic [ref=f3e217]: (49) Records Selected
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
              - cell "LfVJZqyBDe user" [ref=f3e258]
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
              - cell "auto_user_1786515731" [ref=f3e277]
              - cell "ESS" [ref=f3e279]
              - cell "Peter Anderson" [ref=f3e281]
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
              - cell "auto_user_1786516568" [ref=f3e300]
              - cell "ESS" [ref=f3e302]
              - cell "Peter Anderson" [ref=f3e304]
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
              - cell "charanram197" [ref=f3e323]
              - cell "ESS" [ref=f3e325]
              - cell "ram k" [ref=f3e327]
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
              - cell "charanram835" [ref=f3e346]
              - cell "ESS" [ref=f3e348]
              - cell "ram k" [ref=f3e350]
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
              - cell "ess1786514914661985" [ref=f3e369]
              - cell "ESS" [ref=f3e371]
              - cell "Auto1786514914661985 User" [ref=f3e373]
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
              - cell "ess178651588968790" [ref=f3e392]
              - cell "ESS" [ref=f3e394]
              - cell "Auto178651588968790 User" [ref=f3e396]
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
              - cell "FMLName" [ref=f3e415]
              - cell "ESS" [ref=f3e417]
              - cell "Qwerty LName" [ref=f3e419]
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
              - cell "FMLName1" [ref=f3e438]
              - cell "ESS" [ref=f3e440]
              - cell "FName LName" [ref=f3e442]
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
              - cell "Gunatest" [ref=f3e461]
              - cell "ESS" [ref=f3e463]
              - cell "Guna test" [ref=f3e465]
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
              - cell "Hmgr073746" [ref=f3e484]
              - cell "ESS" [ref=f3e486]
              - cell "Hmgr QA073746" [ref=f3e488]
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
              - cell "Hmgr167226" [ref=f3e507]
              - cell "ESS" [ref=f3e509]
              - cell "Hmgr QA167226" [ref=f3e511]
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
              - cell "Hmgr244192" [ref=f3e530]
              - cell "ESS" [ref=f3e532]
              - cell "Hmgr QA244192" [ref=f3e534]
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
              - cell "Hmgr372847" [ref=f3e553]
              - cell "ESS" [ref=f3e555]
              - cell "Hmgr QA372847" [ref=f3e557]
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
              - cell "Hmgr430998" [ref=f3e576]
              - cell "ESS" [ref=f3e578]
              - cell "Hmgr QA430998" [ref=f3e580]
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
              - cell "Hmgr452519" [ref=f3e599]
              - cell "ESS" [ref=f3e601]
              - cell "Hmgr QA452519" [ref=f3e603]
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
              - cell "Hmgr545386" [ref=f3e622]
              - cell "ESS" [ref=f3e624]
              - cell "Hmgr QA545386" [ref=f3e626]
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
              - cell "Hmgr569275" [ref=f3e645]
              - cell "ESS" [ref=f3e647]
              - cell "Hmgr QA569275" [ref=f3e649]
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
              - cell "Hmgr605446" [ref=f3e668]
              - cell "ESS" [ref=f3e670]
              - cell "Hmgr QA605446" [ref=f3e672]
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
              - cell "Hmgr666923" [ref=f3e691]
              - cell "ESS" [ref=f3e693]
              - cell "Hmgr QA666923" [ref=f3e695]
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
              - cell "Hmgr725910" [ref=f3e714]
              - cell "ESS" [ref=f3e716]
              - cell "Hmgr QA725910" [ref=f3e718]
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
              - cell "Hmgr780839" [ref=f3e737]
              - cell "ESS" [ref=f3e739]
              - cell "Hmgr QA780839" [ref=f3e741]
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
              - cell "Hmgr791917" [ref=f3e760]
              - cell "ESS" [ref=f3e762]
              - cell "Hmgr QA791917" [ref=f3e764]
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
              - cell "Hmgr857814" [ref=f3e783]
              - cell "ESS" [ref=f3e785]
              - cell "Hmgr QA857814" [ref=f3e787]
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
              - cell "Hmgr967983" [ref=f3e806]
              - cell "ESS" [ref=f3e808]
              - cell "Hmgr QA967983" [ref=f3e810]
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
              - cell "Intvr073746" [ref=f3e829]
              - cell "ESS" [ref=f3e831]
              - cell "Intvr QA073746" [ref=f3e833]
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
              - cell "Intvr167226" [ref=f3e852]
              - cell "ESS" [ref=f3e854]
              - cell "Intvr QA167226" [ref=f3e856]
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
              - cell "Intvr244192" [ref=f3e875]
              - cell "ESS" [ref=f3e877]
              - cell "Intvr QA244192" [ref=f3e879]
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
              - cell "Intvr372847" [ref=f3e898]
              - cell "ESS" [ref=f3e900]
              - cell "Intvr QA372847" [ref=f3e902]
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
              - cell "Intvr430998" [ref=f3e921]
              - cell "ESS" [ref=f3e923]
              - cell "Intvr QA430998" [ref=f3e925]
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
              - cell "Intvr452519" [ref=f3e944]
              - cell "ESS" [ref=f3e946]
              - cell "Intvr QA452519" [ref=f3e948]
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
              - cell "Intvr545386" [ref=f3e967]
              - cell "ESS" [ref=f3e969]
              - cell "Intvr QA545386" [ref=f3e971]
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
              - cell "Intvr569275" [ref=f3e990]
              - cell "ESS" [ref=f3e992]
              - cell "Intvr QA569275" [ref=f3e994]
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
              - cell "Intvr605446" [ref=f3e1013]
              - cell "ESS" [ref=f3e1015]
              - cell "Intvr QA605446" [ref=f3e1017]
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
              - cell "Intvr666923" [ref=f3e1036]
              - cell "ESS" [ref=f3e1038]
              - cell "Intvr QA666923" [ref=f3e1040]
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
              - cell "Intvr725910" [ref=f3e1059]
              - cell "ESS" [ref=f3e1061]
              - cell "Intvr QA725910" [ref=f3e1063]
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
              - cell "Intvr780839" [ref=f3e1082]
              - cell "ESS" [ref=f3e1084]
              - cell "Intvr QA780839" [ref=f3e1086]
              - cell "Enabled" [ref=f3e1088]
              - cell [ref=f3e1090]:
                - generic [ref=f3e1091]:
                  - button "" [ref=f3e1092] [cursor=pointer]
                  - button "" [ref=f3e1094] [cursor=pointer]
            - row [ref=f3e1097]:
              - cell "" [ref=f3e1098]:
                - generic [ref=f3e1101] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1102]
                  - generic [ref=f3e1103]: 
              - cell "Intvr791917" [ref=f3e1105]
              - cell "ESS" [ref=f3e1107]
              - cell "Intvr QA791917" [ref=f3e1109]
              - cell "Enabled" [ref=f3e1111]
              - cell [ref=f3e1113]:
                - generic [ref=f3e1114]:
                  - button "" [ref=f3e1115] [cursor=pointer]
                  - button "" [ref=f3e1117] [cursor=pointer]
            - row [ref=f3e1120]:
              - cell "" [ref=f3e1121]:
                - generic [ref=f3e1124] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1125]
                  - generic [ref=f3e1126]: 
              - cell "Intvr857814" [ref=f3e1128]
              - cell "ESS" [ref=f3e1130]
              - cell "Intvr QA857814" [ref=f3e1132]
              - cell "Enabled" [ref=f3e1134]
              - cell [ref=f3e1136]:
                - generic [ref=f3e1137]:
                  - button "" [ref=f3e1138] [cursor=pointer]
                  - button "" [ref=f3e1140] [cursor=pointer]
            - row [ref=f3e1143]:
              - cell "" [ref=f3e1144]:
                - generic [ref=f3e1147] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1148]
                  - generic [ref=f3e1149]: 
              - cell "Intvr967983" [ref=f3e1151]
              - cell "ESS" [ref=f3e1153]
              - cell "Intvr QA967983" [ref=f3e1155]
              - cell "Enabled" [ref=f3e1157]
              - cell [ref=f3e1159]:
                - generic [ref=f3e1160]:
                  - button "" [ref=f3e1161] [cursor=pointer]
                  - button "" [ref=f3e1163] [cursor=pointer]
            - row [ref=f3e1166]:
              - cell "" [ref=f3e1167]:
                - generic [ref=f3e1170] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1171]
                  - generic [ref=f3e1172]: 
              - cell "Iyalrithu" [ref=f3e1174]
              - cell "ESS" [ref=f3e1176]
              - cell "Iyal Rithu" [ref=f3e1178]
              - cell "Enabled" [ref=f3e1180]
              - cell [ref=f3e1182]:
                - generic [ref=f3e1183]:
                  - button "" [ref=f3e1184] [cursor=pointer]
                  - button "" [ref=f3e1186] [cursor=pointer]
            - row [ref=f3e1189]:
              - cell "" [ref=f3e1190]:
                - generic [ref=f3e1193] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1194]
                  - generic [ref=f3e1195]: 
              - cell "Jobinsam@6742" [ref=f3e1197]
              - cell "ESS" [ref=f3e1199]
              - cell "Jobin Sam" [ref=f3e1201]
              - cell "Enabled" [ref=f3e1203]
              - cell [ref=f3e1205]:
                - generic [ref=f3e1206]:
                  - button "" [ref=f3e1207] [cursor=pointer]
                  - button "" [ref=f3e1209] [cursor=pointer]
            - row [ref=f3e1212]:
              - cell "" [ref=f3e1213]:
                - generic [ref=f3e1216] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1217]
                  - generic [ref=f3e1218]: 
              - cell "Praveen" [ref=f3e1220]
              - cell "ESS" [ref=f3e1222]
              - cell "Ranga Akunuri" [ref=f3e1224]
              - cell "Enabled" [ref=f3e1226]
              - cell [ref=f3e1228]:
                - generic [ref=f3e1229]:
                  - button "" [ref=f3e1230] [cursor=pointer]
                  - button "" [ref=f3e1232] [cursor=pointer]
            - row [ref=f3e1235]:
              - cell "" [ref=f3e1236]:
                - generic [ref=f3e1239] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1240]
                  - generic [ref=f3e1241]: 
              - cell "qaess7420aaac" [ref=f3e1243]
              - cell "ESS" [ref=f3e1245]
              - cell "Qaz7420aaac Automation7420aaac" [ref=f3e1247]
              - cell "Enabled" [ref=f3e1249]
              - cell [ref=f3e1251]:
                - generic [ref=f3e1252]:
                  - button "" [ref=f3e1253] [cursor=pointer]
                  - button "" [ref=f3e1255] [cursor=pointer]
            - row [ref=f3e1258]:
              - cell "" [ref=f3e1259]:
                - generic [ref=f3e1262] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1263]
                  - generic [ref=f3e1264]: 
              - cell "qaess7c566d91" [ref=f3e1266]
              - cell "ESS" [ref=f3e1268]
              - cell "Qaz7c566d91 Automation7c566d91" [ref=f3e1270]
              - cell "Enabled" [ref=f3e1272]
              - cell [ref=f3e1274]:
                - generic [ref=f3e1275]:
                  - button "" [ref=f3e1276] [cursor=pointer]
                  - button "" [ref=f3e1278] [cursor=pointer]
            - row [ref=f3e1281]:
              - cell "" [ref=f3e1282]:
                - generic [ref=f3e1285] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1286]
                  - generic [ref=f3e1287]: 
              - cell "RaviMB" [ref=f3e1289]
              - cell "Admin" [ref=f3e1291]
              - cell "Ravi B" [ref=f3e1293]
              - cell "Enabled" [ref=f3e1295]
              - cell [ref=f3e1297]:
                - generic [ref=f3e1298]:
                  - button "" [ref=f3e1299] [cursor=pointer]
                  - button "" [ref=f3e1301] [cursor=pointer]
            - row [ref=f3e1304]:
              - cell "" [ref=f3e1305]:
                - generic [ref=f3e1308] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1309]
                  - generic [ref=f3e1310]: 
              - cell "tatsuuu" [ref=f3e1312]
              - cell "ESS" [ref=f3e1314]
              - cell "tatsav latha" [ref=f3e1316]
              - cell "Enabled" [ref=f3e1318]
              - cell [ref=f3e1320]:
                - generic [ref=f3e1321]:
                  - button "" [ref=f3e1322] [cursor=pointer]
                  - button "" [ref=f3e1324] [cursor=pointer]
            - row [ref=f3e1327]:
              - cell "" [ref=f3e1328]:
                - generic [ref=f3e1331] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1332]
                  - generic [ref=f3e1333]: 
              - cell "Test Supervisor" [ref=f3e1335]
              - cell "ESS" [ref=f3e1337]
              - cell "Test Supervisor" [ref=f3e1339]
              - cell "Enabled" [ref=f3e1341]
              - cell [ref=f3e1343]:
                - generic [ref=f3e1344]:
                  - button "" [ref=f3e1345] [cursor=pointer]
                  - button "" [ref=f3e1347] [cursor=pointer]
            - row [ref=f3e1350]:
              - cell "" [ref=f3e1351]:
                - generic [ref=f3e1354] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1355]
                  - generic [ref=f3e1356]: 
              - cell "test.leave.employee" [ref=f3e1358]
              - cell "ESS" [ref=f3e1360]
              - cell "Test Leave Employee" [ref=f3e1362]
              - cell "Enabled" [ref=f3e1364]
              - cell [ref=f3e1366]:
                - generic [ref=f3e1367]:
                  - button "" [ref=f3e1368] [cursor=pointer]
                  - button "" [ref=f3e1370] [cursor=pointer]
            - row [ref=f3e1373]:
              - cell "" [ref=f3e1374]:
                - generic [ref=f3e1377] [cursor=pointer]:
                  - checkbox "" [checked] [ref=f3e1378]
                  - generic [ref=f3e1379]: 
              - cell "test.supervisor" [ref=f3e1381]
              - cell "ESS" [ref=f3e1383]
              - cell "Test Supervisor" [ref=f3e1385]
              - cell "Enabled" [ref=f3e1387]
              - cell [ref=f3e1389]:
                - generic [ref=f3e1390]:
                  - button "" [ref=f3e1391] [cursor=pointer]
                  - button "" [ref=f3e1393] [cursor=pointer]
        - navigation "Pagination Navigation" [ref=f3e1396]:
          - list [ref=f3e1397]:
            - listitem [ref=f3e1398]:
              - button "1" [ref=f3e1399] [cursor=pointer]
            - listitem [ref=f3e1400]:
              - button "2" [ref=f3e1401] [cursor=pointer]
            - listitem [ref=f3e1402]:
              - button "" [ref=f3e1403] [cursor=pointer]
    - generic [ref=f3e1405]:
      - paragraph [ref=f3e1406]: OrangeHRM OS 5.9
      - paragraph [ref=f3e1407]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e1408] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  597 |     await expect(confirmationDialog).toBeVisible();
  598 | 
  599 |     await confirmationDialog
  600 |       .getByRole("button", {
  601 |         name: "No, Cancel",
  602 |         exact: true,
  603 |       })
  604 |       .click();
  605 | 
  606 |     await expect(confirmationDialog).toBeHidden();
  607 | 
  608 |     await expect(userRow).toBeVisible();
  609 |   }
  610 |   async getVisibleSystemUsernames(): Promise<string[]> {
  611 |     await expect(this.loadingSpinner).toBeHidden();
  612 | 
  613 |     await expect(this.userRows.first()).toBeVisible({
  614 |       timeout: 15_000,
  615 |     });
  616 | 
  617 |     return this.userRows.locator(".oxd-table-cell").nth(1).allInnerTexts();
  618 |   }
  619 | 
  620 |   async goToNextSystemUsersPage(): Promise<void> {
  621 |     await expect(this.nextPageButton).toBeVisible();
  622 | 
  623 |     await expect(this.nextPageButton).toBeEnabled();
  624 | 
  625 |     await this.nextPageButton.click();
  626 | 
  627 |     await expect(this.loadingSpinner).toBeHidden();
  628 |   }
  629 | 
  630 |   async goToPreviousSystemUsersPage(): Promise<void> {
  631 |     await expect(this.previousPageButton).toBeVisible();
  632 | 
  633 |     await expect(this.previousPageButton).toBeEnabled();
  634 | 
  635 |     await this.previousPageButton.click();
  636 | 
  637 |     await expect(this.loadingSpinner).toBeHidden();
  638 |   }
  639 | 
  640 |   async selectSystemUsers(usernames: string[]): Promise<void> {
  641 |     for (const username of usernames) {
  642 |       const userRow = this.userRows.filter({
  643 |         has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  644 |           exact: true,
  645 |         }),
  646 |       });
  647 | 
  648 |       await expect(userRow).toHaveCount(1);
  649 | 
  650 |       const checkbox = userRow.locator('input[type="checkbox"]');
  651 | 
  652 |       await checkbox.check({
  653 |         force: true,
  654 |       });
  655 | 
  656 |       await expect(checkbox).toBeChecked();
  657 |     }
  658 |   }
  659 | 
  660 |   async selectAllVisibleSystemUsers(): Promise<void> {
  661 |     await expect(this.loadingSpinner).toBeHidden();
  662 | 
  663 |     const headerCheckboxLabel = this.page.locator(
  664 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  665 |     );
  666 | 
  667 |     const headerCheckbox = this.page.locator(
  668 |       ".oxd-table-header " + 'input[type="checkbox"]',
  669 |     );
  670 | 
  671 |     // Exclude disabled row checkboxes.
  672 |     const selectableRowCheckboxes = this.userRows.locator(
  673 |       'input[type="checkbox"]:not(:disabled)',
  674 |     );
  675 | 
  676 |     const selectableRowCount = await selectableRowCheckboxes.count();
  677 | 
  678 |     expect(selectableRowCount).toBeGreaterThan(0);
  679 | 
  680 |     await headerCheckboxLabel.click();
  681 | 
  682 |     await expect(headerCheckbox).toBeChecked();
  683 | 
  684 |     await expect
  685 |       .poll(
  686 |         async () =>
  687 |           selectableRowCheckboxes.evaluateAll(
  688 |             (checkboxes) =>
  689 |               checkboxes.filter(
  690 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  691 |               ).length,
  692 |           ),
  693 |         {
  694 |           timeout: 15_000,
  695 |         },
  696 |       )
> 697 |       .toBe(selectableRowCount);
      |        ^ Error: expect(received).toBe(expected) // Object.is equality
  698 |   }
  699 | 
  700 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  701 |     const headerCheckboxLabel = this.page.locator(
  702 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  703 |     );
  704 | 
  705 |     const headerCheckbox = this.page.locator(
  706 |       ".oxd-table-header " + 'input[type="checkbox"]',
  707 |     );
  708 | 
  709 |     const selectableRowCheckboxes = this.userRows.locator(
  710 |       'input[type="checkbox"]:not(:disabled)',
  711 |     );
  712 | 
  713 |     await headerCheckboxLabel.click();
  714 | 
  715 |     await expect(headerCheckbox).not.toBeChecked();
  716 | 
  717 |     await expect
  718 |       .poll(
  719 |         async () =>
  720 |           selectableRowCheckboxes.evaluateAll(
  721 |             (checkboxes) =>
  722 |               checkboxes.filter(
  723 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  724 |               ).length,
  725 |           ),
  726 |         {
  727 |           timeout: 15_000,
  728 |         },
  729 |       )
  730 |       .toBe(0);
  731 |   }
  732 | 
  733 |   async deleteSelectedSystemUsers(): Promise<void> {
  734 |     await expect(this.deleteSelectedButton).toBeVisible({
  735 |       timeout: 15_000,
  736 |     });
  737 | 
  738 |     await this.deleteSelectedButton.click();
  739 | 
  740 |     const confirmationDialog = this.page.locator(".oxd-dialog-container");
  741 | 
  742 |     await expect(confirmationDialog).toBeVisible();
  743 | 
  744 |     const confirmDeleteButton = confirmationDialog.locator(
  745 |       "button.oxd-button--label-danger",
  746 |     );
  747 | 
  748 |     await expect(confirmDeleteButton).toBeVisible();
  749 | 
  750 |     await confirmDeleteButton.click();
  751 | 
  752 |     await expect(confirmationDialog).toBeHidden({
  753 |       timeout: 20_000,
  754 |     });
  755 | 
  756 |     await expect(
  757 |       this.toastMessage.filter({
  758 |         hasText: /Successfully Deleted/i,
  759 |       }),
  760 |     ).toBeVisible({
  761 |       timeout: 20_000,
  762 |     });
  763 | 
  764 |     await expect(this.loadingSpinner).toBeHidden();
  765 |   }
  766 | 
  767 |   async updateSystemUsername(updatedUsername: string): Promise<void> {
  768 |     await this.addUsernameInput.fill(updatedUsername);
  769 | 
  770 |     await this.addUsernameInput.blur();
  771 | 
  772 |     await expect(this.addUsernameInput).toHaveValue(updatedUsername);
  773 | 
  774 |     await expect(this.usernameValidation).toBeHidden();
  775 | 
  776 |     const updatedToast = expect(
  777 |       this.toastMessage.filter({
  778 |         hasText: /Successfully Updated/i,
  779 |       }),
  780 |     ).toBeVisible({
  781 |       timeout: 20_000,
  782 |     });
  783 | 
  784 |     await this.editUserSaveButton.click();
  785 | 
  786 |     await expect(this.page).toHaveURL(/admin\/viewSystemUsers/, {
  787 |       timeout: 20_000,
  788 |     });
  789 | 
  790 |     await updatedToast;
  791 | 
  792 |     await expect(this.systemUsersHeading).toBeVisible();
  793 |   }
  794 | }
  795 | 
```