# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_144 - Admin should navigate to the Add Candidate page @smoke @navigation @regression
- Location: tests\Recruitment\recruitment.spec.ts:661:6

# Error details

```
TimeoutError: locator.click: Timeout 70000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add', exact: true })

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
          - heading "Recruitment" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: mandaMuhammad userTariq
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - link "Candidates" [ref=f3e133]:
              - /url: "#"
          - listitem [ref=f3e134] [cursor=pointer]:
            - link "Vacancies" [ref=f3e135]:
              - /url: "#"
          - button "" [ref=f3e137] [cursor=pointer]
  - generic [ref=f3e139]:
    - generic [ref=f3e141]:
      - generic [ref=f3e142]:
        - generic [ref=f3e143]:
          - heading "Candidates" [level=5] [ref=f3e145]
          - button "" [ref=f3e148] [cursor=pointer]
        - separator [ref=f3e150]
        - generic [ref=f3e152]:
          - generic [ref=f3e154]:
            - generic [ref=f3e156]:
              - generic [ref=f3e157]: Job Title
              - generic [ref=f3e161] [cursor=pointer]:
                - generic [ref=f3e162]: "-- Select --"
                - generic [ref=f3e163]: 
            - generic [ref=f3e166]:
              - generic [ref=f3e167]: Vacancy
              - generic [ref=f3e171] [cursor=pointer]:
                - generic [ref=f3e172]: "-- Select --"
                - generic [ref=f3e173]: 
            - generic [ref=f3e176]:
              - generic [ref=f3e177]: Hiring Manager
              - generic [ref=f3e181] [cursor=pointer]:
                - generic [ref=f3e182]: "-- Select --"
                - generic [ref=f3e183]: 
            - generic [ref=f3e186]:
              - generic [ref=f3e187]: Status
              - generic [ref=f3e191] [cursor=pointer]:
                - generic [ref=f3e192]: "-- Select --"
                - generic [ref=f3e193]: 
          - generic [ref=f3e196]:
            - generic [ref=f3e198]:
              - generic [ref=f3e199]: Candidate Name
              - textbox "Type for hints..." [ref=f3e204]
            - generic [ref=f3e206]:
              - generic [ref=f3e207]: Keywords
              - textbox "Enter comma seperated words..." [ref=f3e210]
            - generic [ref=f3e212]:
              - generic [ref=f3e213]: Date of Application
              - generic [ref=f3e217]:
                - textbox "From" [ref=f3e218]
                - generic [ref=f3e219] [cursor=pointer]: 
            - generic [ref=f3e226]:
              - textbox "To" [ref=f3e227]
              - generic [ref=f3e228] [cursor=pointer]: 
          - generic [ref=f3e232]:
            - generic [ref=f3e233]: Method of Application
            - generic [ref=f3e237] [cursor=pointer]:
              - generic [ref=f3e238]: "-- Select --"
              - generic [ref=f3e239]: 
          - separator [ref=f3e241]
          - generic [ref=f3e242]:
            - button "Reset" [ref=f3e243] [cursor=pointer]
            - button "Search" [ref=f3e244] [cursor=pointer]
      - generic [ref=f3e245]:
        - button " Add" [ref=f3e247] [cursor=pointer]:
          - generic [ref=f3e248]: 
          - text: Add
        - generic [ref=f3e249]:
          - separator [ref=f3e250]
          - generic [ref=f3e251]: (63) Records Found
        - table [ref=f3e254]:
          - rowgroup [ref=f3e255]:
            - row [ref=f3e256]:
              - columnheader "" [ref=f3e257]:
                - generic [ref=f3e259] [cursor=pointer]:
                  - checkbox "" [ref=f3e260]
                  - generic [ref=f3e261]: 
              - columnheader "Vacancy " [ref=f3e263]:
                - text: Vacancy
                - generic [ref=f3e264]:
                  - generic [ref=f3e265] [cursor=pointer]: 
                  - text:  
              - columnheader "Candidate " [ref=f3e266]:
                - text: Candidate
                - generic [ref=f3e267]:
                  - generic [ref=f3e268] [cursor=pointer]: 
                  - text:  
              - columnheader "Hiring Manager " [ref=f3e269]:
                - text: Hiring Manager
                - generic [ref=f3e270]:
                  - generic [ref=f3e271] [cursor=pointer]: 
                  - text:  
              - columnheader "Date of Application " [ref=f3e272]:
                - text: Date of Application
                - generic [ref=f3e273]:
                  - generic [ref=f3e274] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f3e275]:
                - text: Status
                - generic [ref=f3e276]:
                  - generic [ref=f3e277] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f3e278]
          - rowgroup [ref=f3e279]:
            - row [ref=f3e281]:
              - cell "" [ref=f3e282]:
                - generic [ref=f3e285] [cursor=pointer]:
                  - checkbox "" [ref=f3e286]
                  - generic [ref=f3e287]: 
              - cell [ref=f3e289]
              - cell "Muhammad Haris Tariq" [ref=f3e290]
              - cell "(Deleted)" [ref=f3e292]
              - cell "2026-15-08" [ref=f3e294]
              - cell [ref=f3e296]
              - cell [ref=f3e297]:
                - generic [ref=f3e298]:
                  - button "" [ref=f3e299] [cursor=pointer]
                  - button "" [ref=f3e301] [cursor=pointer]
            - row [ref=f3e304]:
              - cell "" [ref=f3e305]:
                - generic [ref=f3e308] [cursor=pointer]:
                  - checkbox "" [ref=f3e309]
                  - generic [ref=f3e310]: 
              - cell "Senior QA Lead" [ref=f3e312]
              - cell "Muhammad Harry Tariq" [ref=f3e314]
              - cell "(Deleted)" [ref=f3e316]
              - cell "2026-15-08" [ref=f3e318]
              - cell "Application Initiated" [ref=f3e320]
              - cell [ref=f3e322]:
                - generic [ref=f3e323]:
                  - button "" [ref=f3e324] [cursor=pointer]
                  - button "" [ref=f3e326] [cursor=pointer]
            - row [ref=f3e329]:
              - cell "" [ref=f3e330]:
                - generic [ref=f3e333] [cursor=pointer]:
                  - checkbox "" [ref=f3e334]
                  - generic [ref=f3e335]: 
              - cell "Senior QA Lead" [ref=f3e337]
              - cell "Muhammad Haris Tariq" [ref=f3e339]
              - cell "(Deleted)" [ref=f3e341]
              - cell "2026-10-07" [ref=f3e343]
              - cell "Application Initiated" [ref=f3e345]
              - cell [ref=f3e347]:
                - generic [ref=f3e348]:
                  - button "" [ref=f3e349] [cursor=pointer]
                  - button "" [ref=f3e351] [cursor=pointer]
            - row [ref=f3e354]:
              - cell "" [ref=f3e355]:
                - generic [ref=f3e358] [cursor=pointer]:
                  - checkbox "" [ref=f3e359]
                  - generic [ref=f3e360]: 
              - cell [ref=f3e362]
              - cell "Tanmay Anderson O'Keefe" [ref=f3e363]
              - cell "(Deleted)" [ref=f3e365]
              - cell "2024-29-03" [ref=f3e367]
              - cell [ref=f3e369]
              - cell [ref=f3e370]:
                - generic [ref=f3e371]:
                  - button "" [ref=f3e372] [cursor=pointer]
                  - button "" [ref=f3e374] [cursor=pointer]
            - row [ref=f3e377]:
              - cell "" [ref=f3e378]:
                - generic [ref=f3e381] [cursor=pointer]:
                  - checkbox "" [ref=f3e382]
                  - generic [ref=f3e383]: 
              - cell [ref=f3e385]
              - cell "Tanmay sree Dachu" [ref=f3e386]
              - cell "(Deleted)" [ref=f3e388]
              - cell "2024-06-02" [ref=f3e390]
              - cell [ref=f3e392]
              - cell [ref=f3e393]:
                - generic [ref=f3e394]:
                  - button "" [ref=f3e395] [cursor=pointer]
                  - button "" [ref=f3e397] [cursor=pointer]
                  - button "" [ref=f3e399] [cursor=pointer]
            - row [ref=f3e402]:
              - cell "" [ref=f3e403]:
                - generic [ref=f3e406] [cursor=pointer]:
                  - checkbox "" [ref=f3e407]
                  - generic [ref=f3e408]: 
              - cell "Senior QA Lead" [ref=f3e410]
              - cell "John Doe" [ref=f3e412]
              - cell "(Deleted)" [ref=f3e414]
              - cell "2024-06-02" [ref=f3e416]
              - cell "Shortlisted" [ref=f3e418]
              - cell [ref=f3e420]:
                - generic [ref=f3e421]:
                  - button "" [ref=f3e422] [cursor=pointer]
                  - button "" [ref=f3e424] [cursor=pointer]
                  - button "" [ref=f3e426] [cursor=pointer]
            - row [ref=f3e429]:
              - cell "" [ref=f3e430]:
                - generic [ref=f3e433] [cursor=pointer]:
                  - checkbox "" [ref=f3e434]
                  - generic [ref=f3e435]: 
              - cell "Senior QA Lead" [ref=f3e437]
              - cell "John Doe" [ref=f3e439]
              - cell "(Deleted)" [ref=f3e441]
              - cell "2024-06-02" [ref=f3e443]
              - cell "Shortlisted" [ref=f3e445]
              - cell [ref=f3e447]:
                - generic [ref=f3e448]:
                  - button "" [ref=f3e449] [cursor=pointer]
                  - button "" [ref=f3e451] [cursor=pointer]
                  - button "" [ref=f3e453] [cursor=pointer]
            - row [ref=f3e456]:
              - cell "" [ref=f3e457]:
                - generic [ref=f3e460] [cursor=pointer]:
                  - checkbox "" [ref=f3e461]
                  - generic [ref=f3e462]: 
              - cell "Senior QA Lead" [ref=f3e464]
              - cell "John Doe" [ref=f3e466]
              - cell "(Deleted)" [ref=f3e468]
              - cell "2024-06-02" [ref=f3e470]
              - cell "Shortlisted" [ref=f3e472]
              - cell [ref=f3e474]:
                - generic [ref=f3e475]:
                  - button "" [ref=f3e476] [cursor=pointer]
                  - button "" [ref=f3e478] [cursor=pointer]
                  - button "" [ref=f3e480] [cursor=pointer]
            - row [ref=f3e483]:
              - cell "" [ref=f3e484]:
                - generic [ref=f3e487] [cursor=pointer]:
                  - checkbox "" [ref=f3e488]
                  - generic [ref=f3e489]: 
              - cell "Senior QA Lead" [ref=f3e491]
              - cell "John Doe" [ref=f3e493]
              - cell "(Deleted)" [ref=f3e495]
              - cell "2024-06-02" [ref=f3e497]
              - cell "Shortlisted" [ref=f3e499]
              - cell [ref=f3e501]:
                - generic [ref=f3e502]:
                  - button "" [ref=f3e503] [cursor=pointer]
                  - button "" [ref=f3e505] [cursor=pointer]
                  - button "" [ref=f3e507] [cursor=pointer]
            - row [ref=f3e510]:
              - cell "" [ref=f3e511]:
                - generic [ref=f3e514] [cursor=pointer]:
                  - checkbox "" [ref=f3e515]
                  - generic [ref=f3e516]: 
              - cell "Senior QA Lead" [ref=f3e518]
              - cell "John Doe" [ref=f3e520]
              - cell "(Deleted)" [ref=f3e522]
              - cell "2024-06-02" [ref=f3e524]
              - cell "Shortlisted" [ref=f3e526]
              - cell [ref=f3e528]:
                - generic [ref=f3e529]:
                  - button "" [ref=f3e530] [cursor=pointer]
                  - button "" [ref=f3e532] [cursor=pointer]
                  - button "" [ref=f3e534] [cursor=pointer]
            - row [ref=f3e537]:
              - cell "" [ref=f3e538]:
                - generic [ref=f3e541] [cursor=pointer]:
                  - checkbox "" [ref=f3e542]
                  - generic [ref=f3e543]: 
              - cell "Senior QA Lead" [ref=f3e545]
              - cell "John Doe" [ref=f3e547]
              - cell "(Deleted)" [ref=f3e549]
              - cell "2024-06-02" [ref=f3e551]
              - cell "Shortlisted" [ref=f3e553]
              - cell [ref=f3e555]:
                - generic [ref=f3e556]:
                  - button "" [ref=f3e557] [cursor=pointer]
                  - button "" [ref=f3e559] [cursor=pointer]
                  - button "" [ref=f3e561] [cursor=pointer]
            - row [ref=f3e564]:
              - cell "" [ref=f3e565]:
                - generic [ref=f3e568] [cursor=pointer]:
                  - checkbox "" [ref=f3e569]
                  - generic [ref=f3e570]: 
              - cell "Senior QA Lead" [ref=f3e572]
              - cell "John Doe" [ref=f3e574]
              - cell "(Deleted)" [ref=f3e576]
              - cell "2024-06-02" [ref=f3e578]
              - cell "Rejected" [ref=f3e580]
              - cell [ref=f3e582]:
                - generic [ref=f3e583]:
                  - button "" [ref=f3e584] [cursor=pointer]
                  - button "" [ref=f3e586] [cursor=pointer]
                  - button "" [ref=f3e588] [cursor=pointer]
            - row [ref=f3e591]:
              - cell "" [ref=f3e592]:
                - generic [ref=f3e595] [cursor=pointer]:
                  - checkbox "" [ref=f3e596]
                  - generic [ref=f3e597]: 
              - cell "Senior QA Lead" [ref=f3e599]
              - cell "John Doe" [ref=f3e601]
              - cell "(Deleted)" [ref=f3e603]
              - cell "2024-06-02" [ref=f3e605]
              - cell "Shortlisted" [ref=f3e607]
              - cell [ref=f3e609]:
                - generic [ref=f3e610]:
                  - button "" [ref=f3e611] [cursor=pointer]
                  - button "" [ref=f3e613] [cursor=pointer]
                  - button "" [ref=f3e615] [cursor=pointer]
            - row [ref=f3e618]:
              - cell "" [ref=f3e619]:
                - generic [ref=f3e622] [cursor=pointer]:
                  - checkbox "" [ref=f3e623]
                  - generic [ref=f3e624]: 
              - cell [ref=f3e626]
              - cell "Manu K M" [ref=f3e627]
              - cell "(Deleted)" [ref=f3e629]
              - cell "2024-06-02" [ref=f3e631]
              - cell [ref=f3e633]
              - cell [ref=f3e634]:
                - generic [ref=f3e635]:
                  - button "" [ref=f3e636] [cursor=pointer]
                  - button "" [ref=f3e638] [cursor=pointer]
            - row [ref=f3e641]:
              - cell "" [ref=f3e642]:
                - generic [ref=f3e645] [cursor=pointer]:
                  - checkbox "" [ref=f3e646]
                  - generic [ref=f3e647]: 
              - cell [ref=f3e649]
              - cell "Manu K M" [ref=f3e650]
              - cell "(Deleted)" [ref=f3e652]
              - cell "2024-06-02" [ref=f3e654]
              - cell [ref=f3e656]
              - cell [ref=f3e657]:
                - generic [ref=f3e658]:
                  - button "" [ref=f3e659] [cursor=pointer]
                  - button "" [ref=f3e661] [cursor=pointer]
            - row [ref=f3e664]:
              - cell "" [ref=f3e665]:
                - generic [ref=f3e668] [cursor=pointer]:
                  - checkbox "" [ref=f3e669]
                  - generic [ref=f3e670]: 
              - cell [ref=f3e672]
              - cell "Manu K M" [ref=f3e673]
              - cell "(Deleted)" [ref=f3e675]
              - cell "2024-06-02" [ref=f3e677]
              - cell [ref=f3e679]
              - cell [ref=f3e680]:
                - generic [ref=f3e681]:
                  - button "" [ref=f3e682] [cursor=pointer]
                  - button "" [ref=f3e684] [cursor=pointer]
            - row [ref=f3e687]:
              - cell "" [ref=f3e688]:
                - generic [ref=f3e691] [cursor=pointer]:
                  - checkbox "" [ref=f3e692]
                  - generic [ref=f3e693]: 
              - cell [ref=f3e695]
              - cell "madhav m" [ref=f3e696]
              - cell "(Deleted)" [ref=f3e698]
              - cell "2024-06-02" [ref=f3e700]
              - cell [ref=f3e702]
              - cell [ref=f3e703]:
                - generic [ref=f3e704]:
                  - button "" [ref=f3e705] [cursor=pointer]
                  - button "" [ref=f3e707] [cursor=pointer]
            - row [ref=f3e710]:
              - cell "" [ref=f3e711]:
                - generic [ref=f3e714] [cursor=pointer]:
                  - checkbox "" [ref=f3e715]
                  - generic [ref=f3e716]: 
              - cell [ref=f3e718]
              - cell "madhav m" [ref=f3e719]
              - cell "(Deleted)" [ref=f3e721]
              - cell "2024-06-02" [ref=f3e723]
              - cell [ref=f3e725]
              - cell [ref=f3e726]:
                - generic [ref=f3e727]:
                  - button "" [ref=f3e728] [cursor=pointer]
                  - button "" [ref=f3e730] [cursor=pointer]
            - row [ref=f3e733]:
              - cell "" [ref=f3e734]:
                - generic [ref=f3e737] [cursor=pointer]:
                  - checkbox "" [ref=f3e738]
                  - generic [ref=f3e739]: 
              - cell [ref=f3e741]
              - cell "madhav m" [ref=f3e742]
              - cell "(Deleted)" [ref=f3e744]
              - cell "2024-06-02" [ref=f3e746]
              - cell [ref=f3e748]
              - cell [ref=f3e749]:
                - generic [ref=f3e750]:
                  - button "" [ref=f3e751] [cursor=pointer]
                  - button "" [ref=f3e753] [cursor=pointer]
            - row [ref=f3e756]:
              - cell "" [ref=f3e757]:
                - generic [ref=f3e760] [cursor=pointer]:
                  - checkbox "" [ref=f3e761]
                  - generic [ref=f3e762]: 
              - cell [ref=f3e764]
              - cell "madhav m" [ref=f3e765]
              - cell "(Deleted)" [ref=f3e767]
              - cell "2024-06-02" [ref=f3e769]
              - cell [ref=f3e771]
              - cell [ref=f3e772]:
                - generic [ref=f3e773]:
                  - button "" [ref=f3e774] [cursor=pointer]
                  - button "" [ref=f3e776] [cursor=pointer]
            - row [ref=f3e779]:
              - cell "" [ref=f3e780]:
                - generic [ref=f3e783] [cursor=pointer]:
                  - checkbox "" [ref=f3e784]
                  - generic [ref=f3e785]: 
              - cell [ref=f3e787]
              - cell "madhav m" [ref=f3e788]
              - cell "(Deleted)" [ref=f3e790]
              - cell "2024-06-02" [ref=f3e792]
              - cell [ref=f3e794]
              - cell [ref=f3e795]:
                - generic [ref=f3e796]:
                  - button "" [ref=f3e797] [cursor=pointer]
                  - button "" [ref=f3e799] [cursor=pointer]
            - row [ref=f3e802]:
              - cell "" [ref=f3e803]:
                - generic [ref=f3e806] [cursor=pointer]:
                  - checkbox "" [ref=f3e807]
                  - generic [ref=f3e808]: 
              - cell [ref=f3e810]
              - cell "madhav m" [ref=f3e811]
              - cell "(Deleted)" [ref=f3e813]
              - cell "2024-06-02" [ref=f3e815]
              - cell [ref=f3e817]
              - cell [ref=f3e818]:
                - generic [ref=f3e819]:
                  - button "" [ref=f3e820] [cursor=pointer]
                  - button "" [ref=f3e822] [cursor=pointer]
            - row [ref=f3e825]:
              - cell "" [ref=f3e826]:
                - generic [ref=f3e829] [cursor=pointer]:
                  - checkbox "" [ref=f3e830]
                  - generic [ref=f3e831]: 
              - cell "Senior QA Lead" [ref=f3e833]
              - cell "Gautham Raj R" [ref=f3e835]
              - cell "(Deleted)" [ref=f3e837]
              - cell "2024-06-02" [ref=f3e839]
              - cell "Rejected" [ref=f3e841]
              - cell [ref=f3e843]:
                - generic [ref=f3e844]:
                  - button "" [ref=f3e845] [cursor=pointer]
                  - button "" [ref=f3e847] [cursor=pointer]
                  - button "" [ref=f3e849] [cursor=pointer]
            - row [ref=f3e852]:
              - cell "" [ref=f3e853]:
                - generic [ref=f3e856] [cursor=pointer]:
                  - checkbox "" [ref=f3e857]
                  - generic [ref=f3e858]: 
              - cell "Senior QA Lead" [ref=f3e860]
              - cell "Gautham Raj R" [ref=f3e862]
              - cell "(Deleted)" [ref=f3e864]
              - cell "2024-06-02" [ref=f3e866]
              - cell "Shortlisted" [ref=f3e868]
              - cell [ref=f3e870]:
                - generic [ref=f3e871]:
                  - button "" [ref=f3e872] [cursor=pointer]
                  - button "" [ref=f3e874] [cursor=pointer]
                  - button "" [ref=f3e876] [cursor=pointer]
            - row [ref=f3e879]:
              - cell "" [ref=f3e880]:
                - generic [ref=f3e883] [cursor=pointer]:
                  - checkbox "" [ref=f3e884]
                  - generic [ref=f3e885]: 
              - cell "Senior QA Lead" [ref=f3e887]
              - cell "Gautham Raj R" [ref=f3e889]
              - cell "(Deleted)" [ref=f3e891]
              - cell "2024-06-02" [ref=f3e893]
              - cell "Shortlisted" [ref=f3e895]
              - cell [ref=f3e897]:
                - generic [ref=f3e898]:
                  - button "" [ref=f3e899] [cursor=pointer]
                  - button "" [ref=f3e901] [cursor=pointer]
                  - button "" [ref=f3e903] [cursor=pointer]
            - row [ref=f3e906]:
              - cell "" [ref=f3e907]:
                - generic [ref=f3e910] [cursor=pointer]:
                  - checkbox "" [ref=f3e911]
                  - generic [ref=f3e912]: 
              - cell "Senior QA Lead" [ref=f3e914]
              - cell "Gautham Raj R" [ref=f3e916]
              - cell "(Deleted)" [ref=f3e918]
              - cell "2024-06-02" [ref=f3e920]
              - cell "Shortlisted" [ref=f3e922]
              - cell [ref=f3e924]:
                - generic [ref=f3e925]:
                  - button "" [ref=f3e926] [cursor=pointer]
                  - button "" [ref=f3e928] [cursor=pointer]
                  - button "" [ref=f3e930] [cursor=pointer]
            - row [ref=f3e933]:
              - cell "" [ref=f3e934]:
                - generic [ref=f3e937] [cursor=pointer]:
                  - checkbox "" [ref=f3e938]
                  - generic [ref=f3e939]: 
              - cell "Senior QA Lead" [ref=f3e941]
              - cell "Gautham Raj R" [ref=f3e943]
              - cell "(Deleted)" [ref=f3e945]
              - cell "2024-06-02" [ref=f3e947]
              - cell "Application Initiated" [ref=f3e949]
              - cell [ref=f3e951]:
                - generic [ref=f3e952]:
                  - button "" [ref=f3e953] [cursor=pointer]
                  - button "" [ref=f3e955] [cursor=pointer]
                  - button "" [ref=f3e957] [cursor=pointer]
            - row [ref=f3e960]:
              - cell "" [ref=f3e961]:
                - generic [ref=f3e964] [cursor=pointer]:
                  - checkbox "" [ref=f3e965]
                  - generic [ref=f3e966]: 
              - cell "Senior QA Lead" [ref=f3e968]
              - cell "Gautham Raj R" [ref=f3e970]
              - cell "(Deleted)" [ref=f3e972]
              - cell "2024-06-02" [ref=f3e974]
              - cell "Application Initiated" [ref=f3e976]
              - cell [ref=f3e978]:
                - generic [ref=f3e979]:
                  - button "" [ref=f3e980] [cursor=pointer]
                  - button "" [ref=f3e982] [cursor=pointer]
                  - button "" [ref=f3e984] [cursor=pointer]
            - row [ref=f3e987]:
              - cell "" [ref=f3e988]:
                - generic [ref=f3e991] [cursor=pointer]:
                  - checkbox "" [ref=f3e992]
                  - generic [ref=f3e993]: 
              - cell "Senior QA Lead" [ref=f3e995]
              - cell "Gautham Raj R" [ref=f3e997]
              - cell "(Deleted)" [ref=f3e999]
              - cell "2024-06-02" [ref=f3e1001]
              - cell "Shortlisted" [ref=f3e1003]
              - cell [ref=f3e1005]:
                - generic [ref=f3e1006]:
                  - button "" [ref=f3e1007] [cursor=pointer]
                  - button "" [ref=f3e1009] [cursor=pointer]
                  - button "" [ref=f3e1011] [cursor=pointer]
            - row [ref=f3e1014]:
              - cell "" [ref=f3e1015]:
                - generic [ref=f3e1018] [cursor=pointer]:
                  - checkbox "" [ref=f3e1019]
                  - generic [ref=f3e1020]: 
              - cell "Senior QA Lead" [ref=f3e1022]
              - cell "Gautham Raj R" [ref=f3e1024]
              - cell "(Deleted)" [ref=f3e1026]
              - cell "2024-06-02" [ref=f3e1028]
              - cell "Rejected" [ref=f3e1030]
              - cell [ref=f3e1032]:
                - generic [ref=f3e1033]:
                  - button "" [ref=f3e1034] [cursor=pointer]
                  - button "" [ref=f3e1036] [cursor=pointer]
                  - button "" [ref=f3e1038] [cursor=pointer]
            - row [ref=f3e1041]:
              - cell "" [ref=f3e1042]:
                - generic [ref=f3e1045] [cursor=pointer]:
                  - checkbox "" [ref=f3e1046]
                  - generic [ref=f3e1047]: 
              - cell "Senior QA Lead" [ref=f3e1049]
              - cell "Gautham Raj R" [ref=f3e1051]
              - cell "(Deleted)" [ref=f3e1053]
              - cell "2024-06-02" [ref=f3e1055]
              - cell "Shortlisted" [ref=f3e1057]
              - cell [ref=f3e1059]:
                - generic [ref=f3e1060]:
                  - button "" [ref=f3e1061] [cursor=pointer]
                  - button "" [ref=f3e1063] [cursor=pointer]
                  - button "" [ref=f3e1065] [cursor=pointer]
            - row [ref=f3e1068]:
              - cell "" [ref=f3e1069]:
                - generic [ref=f3e1072] [cursor=pointer]:
                  - checkbox "" [ref=f3e1073]
                  - generic [ref=f3e1074]: 
              - cell "Senior QA Lead" [ref=f3e1076]
              - cell "Gautham Raj R" [ref=f3e1078]
              - cell "(Deleted)" [ref=f3e1080]
              - cell "2024-06-02" [ref=f3e1082]
              - cell "Shortlisted" [ref=f3e1084]
              - cell [ref=f3e1086]:
                - generic [ref=f3e1087]:
                  - button "" [ref=f3e1088] [cursor=pointer]
                  - button "" [ref=f3e1090] [cursor=pointer]
                  - button "" [ref=f3e1092] [cursor=pointer]
            - row [ref=f3e1095]:
              - cell "" [ref=f3e1096]:
                - generic [ref=f3e1099] [cursor=pointer]:
                  - checkbox "" [ref=f3e1100]
                  - generic [ref=f3e1101]: 
              - cell "Senior QA Lead" [ref=f3e1103]
              - cell "Gautham Raj R" [ref=f3e1105]
              - cell "(Deleted)" [ref=f3e1107]
              - cell "2024-06-02" [ref=f3e1109]
              - cell "Shortlisted" [ref=f3e1111]
              - cell [ref=f3e1113]:
                - generic [ref=f3e1114]:
                  - button "" [ref=f3e1115] [cursor=pointer]
                  - button "" [ref=f3e1117] [cursor=pointer]
                  - button "" [ref=f3e1119] [cursor=pointer]
            - row [ref=f3e1122]:
              - cell "" [ref=f3e1123]:
                - generic [ref=f3e1126] [cursor=pointer]:
                  - checkbox "" [ref=f3e1127]
                  - generic [ref=f3e1128]: 
              - cell "Senior QA Lead" [ref=f3e1130]
              - cell "Gautham Raj R" [ref=f3e1132]
              - cell "(Deleted)" [ref=f3e1134]
              - cell "2024-06-02" [ref=f3e1136]
              - cell "Shortlisted" [ref=f3e1138]
              - cell [ref=f3e1140]:
                - generic [ref=f3e1141]:
                  - button "" [ref=f3e1142] [cursor=pointer]
                  - button "" [ref=f3e1144] [cursor=pointer]
                  - button "" [ref=f3e1146] [cursor=pointer]
            - row [ref=f3e1149]:
              - cell "" [ref=f3e1150]:
                - generic [ref=f3e1153] [cursor=pointer]:
                  - checkbox "" [ref=f3e1154]
                  - generic [ref=f3e1155]: 
              - cell "Senior QA Lead" [ref=f3e1157]
              - cell "Gautham Raj R" [ref=f3e1159]
              - cell "(Deleted)" [ref=f3e1161]
              - cell "2024-06-02" [ref=f3e1163]
              - cell "Shortlisted" [ref=f3e1165]
              - cell [ref=f3e1167]:
                - generic [ref=f3e1168]:
                  - button "" [ref=f3e1169] [cursor=pointer]
                  - button "" [ref=f3e1171] [cursor=pointer]
                  - button "" [ref=f3e1173] [cursor=pointer]
            - row [ref=f3e1176]:
              - cell "" [ref=f3e1177]:
                - generic [ref=f3e1180] [cursor=pointer]:
                  - checkbox "" [ref=f3e1181]
                  - generic [ref=f3e1182]: 
              - cell "Senior QA Lead" [ref=f3e1184]
              - cell "Cedric C Ross." [ref=f3e1186]
              - cell "(Deleted)" [ref=f3e1188]
              - cell "2024-06-02" [ref=f3e1190]
              - cell "Shortlisted" [ref=f3e1192]
              - cell [ref=f3e1194]:
                - generic [ref=f3e1195]:
                  - button "" [ref=f3e1196] [cursor=pointer]
                  - button "" [ref=f3e1198] [cursor=pointer]
                  - button "" [ref=f3e1200] [cursor=pointer]
            - row [ref=f3e1203]:
              - cell "" [ref=f3e1204]:
                - generic [ref=f3e1207] [cursor=pointer]:
                  - checkbox "" [ref=f3e1208]
                  - generic [ref=f3e1209]: 
              - cell "Senior QA Lead" [ref=f3e1211]
              - cell "Cedric C Ross." [ref=f3e1213]
              - cell "(Deleted)" [ref=f3e1215]
              - cell "2024-06-02" [ref=f3e1217]
              - cell "Shortlisted" [ref=f3e1219]
              - cell [ref=f3e1221]:
                - generic [ref=f3e1222]:
                  - button "" [ref=f3e1223] [cursor=pointer]
                  - button "" [ref=f3e1225] [cursor=pointer]
                  - button "" [ref=f3e1227] [cursor=pointer]
            - row [ref=f3e1230]:
              - cell "" [ref=f3e1231]:
                - generic [ref=f3e1234] [cursor=pointer]:
                  - checkbox "" [ref=f3e1235]
                  - generic [ref=f3e1236]: 
              - cell "Payroll Administrator" [ref=f3e1238]
              - cell "TestFN TestMN TestLN" [ref=f3e1240]
              - cell "mandaMuhammad akhilHaris userTariq" [ref=f3e1242]
              - cell "2024-06-02" [ref=f3e1244]
              - cell "Application Initiated" [ref=f3e1246]
              - cell [ref=f3e1248]:
                - generic [ref=f3e1249]:
                  - button "" [ref=f3e1250] [cursor=pointer]
                  - button "" [ref=f3e1252] [cursor=pointer]
            - row [ref=f3e1255]:
              - cell "" [ref=f3e1256]:
                - generic [ref=f3e1259] [cursor=pointer]:
                  - checkbox "" [ref=f3e1260]
                  - generic [ref=f3e1261]: 
              - cell "Payroll Administrator" [ref=f3e1263]
              - cell "TestFN TestMN TestLN" [ref=f3e1265]
              - cell "mandaMuhammad akhilHaris userTariq" [ref=f3e1267]
              - cell "2024-06-02" [ref=f3e1269]
              - cell "Application Initiated" [ref=f3e1271]
              - cell [ref=f3e1273]:
                - generic [ref=f3e1274]:
                  - button "" [ref=f3e1275] [cursor=pointer]
                  - button "" [ref=f3e1277] [cursor=pointer]
            - row [ref=f3e1280]:
              - cell "" [ref=f3e1281]:
                - generic [ref=f3e1284] [cursor=pointer]:
                  - checkbox "" [ref=f3e1285]
                  - generic [ref=f3e1286]: 
              - cell "Payroll Administrator" [ref=f3e1288]
              - cell "TestFN TestMN TestLN" [ref=f3e1290]
              - cell "mandaMuhammad akhilHaris userTariq" [ref=f3e1292]
              - cell "2024-06-02" [ref=f3e1294]
              - cell "Application Initiated" [ref=f3e1296]
              - cell [ref=f3e1298]:
                - generic [ref=f3e1299]:
                  - button "" [ref=f3e1300] [cursor=pointer]
                  - button "" [ref=f3e1302] [cursor=pointer]
                  - button "" [ref=f3e1304] [cursor=pointer]
            - row [ref=f3e1307]:
              - cell "" [ref=f3e1308]:
                - generic [ref=f3e1311] [cursor=pointer]:
                  - checkbox "" [ref=f3e1312]
                  - generic [ref=f3e1313]: 
              - cell "Payroll Administrator" [ref=f3e1315]
              - cell "TestFN TestMN TestLN" [ref=f3e1317]
              - cell "mandaMuhammad akhilHaris userTariq" [ref=f3e1319]
              - cell "2024-06-02" [ref=f3e1321]
              - cell "Application Initiated" [ref=f3e1323]
              - cell [ref=f3e1325]:
                - generic [ref=f3e1326]:
                  - button "" [ref=f3e1327] [cursor=pointer]
                  - button "" [ref=f3e1329] [cursor=pointer]
                  - button "" [ref=f3e1331] [cursor=pointer]
            - row [ref=f3e1334]:
              - cell "" [ref=f3e1335]:
                - generic [ref=f3e1338] [cursor=pointer]:
                  - checkbox "" [ref=f3e1339]
                  - generic [ref=f3e1340]: 
              - cell "Payroll Administrator" [ref=f3e1342]
              - cell "TestFN TestMN TestLN" [ref=f3e1344]
              - cell "mandaMuhammad akhilHaris userTariq" [ref=f3e1346]
              - cell "2024-06-02" [ref=f3e1348]
              - cell "Application Initiated" [ref=f3e1350]
              - cell [ref=f3e1352]:
                - generic [ref=f3e1353]:
                  - button "" [ref=f3e1354] [cursor=pointer]
                  - button "" [ref=f3e1356] [cursor=pointer]
                  - button "" [ref=f3e1358] [cursor=pointer]
            - row [ref=f3e1361]:
              - cell "" [ref=f3e1362]:
                - generic [ref=f3e1365] [cursor=pointer]:
                  - checkbox "" [ref=f3e1366]
                  - generic [ref=f3e1367]: 
              - cell "Payroll Administrator" [ref=f3e1369]
              - cell "TestFN TestMN TestLN" [ref=f3e1371]
              - cell "mandaMuhammad akhilHaris userTariq" [ref=f3e1373]
              - cell "2024-06-02" [ref=f3e1375]
              - cell "Application Initiated" [ref=f3e1377]
              - cell [ref=f3e1379]:
                - generic [ref=f3e1380]:
                  - button "" [ref=f3e1381] [cursor=pointer]
                  - button "" [ref=f3e1383] [cursor=pointer]
                  - button "" [ref=f3e1385] [cursor=pointer]
            - row [ref=f3e1388]:
              - cell "" [ref=f3e1389]:
                - generic [ref=f3e1392] [cursor=pointer]:
                  - checkbox "" [ref=f3e1393]
                  - generic [ref=f3e1394]: 
              - cell "Payroll Administrator" [ref=f3e1396]
              - cell "TestFN TestMN TestLN" [ref=f3e1398]
              - cell "mandaMuhammad akhilHaris userTariq" [ref=f3e1400]
              - cell "2024-06-02" [ref=f3e1402]
              - cell "Application Initiated" [ref=f3e1404]
              - cell [ref=f3e1406]:
                - generic [ref=f3e1407]:
                  - button "" [ref=f3e1408] [cursor=pointer]
                  - button "" [ref=f3e1410] [cursor=pointer]
                  - button "" [ref=f3e1412] [cursor=pointer]
            - row [ref=f3e1415]:
              - cell "" [ref=f3e1416]:
                - generic [ref=f3e1419] [cursor=pointer]:
                  - checkbox "" [ref=f3e1420]
                  - generic [ref=f3e1421]: 
              - cell [ref=f3e1423]
              - cell "AntoAnto 09:58 AM M Varghese" [ref=f3e1424]
              - cell "(Deleted)" [ref=f3e1426]
              - cell "2024-06-02" [ref=f3e1428]
              - cell [ref=f3e1430]
              - cell [ref=f3e1431]:
                - generic [ref=f3e1432]:
                  - button "" [ref=f3e1433] [cursor=pointer]
                  - button "" [ref=f3e1435] [cursor=pointer]
            - row [ref=f3e1438]:
              - cell "" [ref=f3e1439]:
                - generic [ref=f3e1442] [cursor=pointer]:
                  - checkbox "" [ref=f3e1443]
                  - generic [ref=f3e1444]: 
              - cell [ref=f3e1446]
              - cell "Anto 10:15 AM M Varghese" [ref=f3e1447]
              - cell "(Deleted)" [ref=f3e1449]
              - cell "2024-06-02" [ref=f3e1451]
              - cell [ref=f3e1453]
              - cell [ref=f3e1454]:
                - generic [ref=f3e1455]:
                  - button "" [ref=f3e1456] [cursor=pointer]
                  - button "" [ref=f3e1458] [cursor=pointer]
            - row [ref=f3e1461]:
              - cell "" [ref=f3e1462]:
                - generic [ref=f3e1465] [cursor=pointer]:
                  - checkbox "" [ref=f3e1466]
                  - generic [ref=f3e1467]: 
              - cell [ref=f3e1469]
              - cell "Anto 10:20 AM M Varghese" [ref=f3e1470]
              - cell "(Deleted)" [ref=f3e1472]
              - cell "2024-06-02" [ref=f3e1474]
              - cell [ref=f3e1476]
              - cell [ref=f3e1477]:
                - generic [ref=f3e1478]:
                  - button "" [ref=f3e1479] [cursor=pointer]
                  - button "" [ref=f3e1481] [cursor=pointer]
            - row [ref=f3e1484]:
              - cell "" [ref=f3e1485]:
                - generic [ref=f3e1488] [cursor=pointer]:
                  - checkbox "" [ref=f3e1489]
                  - generic [ref=f3e1490]: 
              - cell [ref=f3e1492]
              - cell "Anto 10:26 AM M Varghese" [ref=f3e1493]
              - cell "(Deleted)" [ref=f3e1495]
              - cell "2024-06-02" [ref=f3e1497]
              - cell [ref=f3e1499]
              - cell [ref=f3e1500]:
                - generic [ref=f3e1501]:
                  - button "" [ref=f3e1502] [cursor=pointer]
                  - button "" [ref=f3e1504] [cursor=pointer]
            - row [ref=f3e1507]:
              - cell "" [ref=f3e1508]:
                - generic [ref=f3e1511] [cursor=pointer]:
                  - checkbox "" [ref=f3e1512]
                  - generic [ref=f3e1513]: 
              - cell [ref=f3e1515]
              - cell "Anto 10:28 AM M Varghese" [ref=f3e1516]
              - cell "(Deleted)" [ref=f3e1518]
              - cell "2024-06-02" [ref=f3e1520]
              - cell [ref=f3e1522]
              - cell [ref=f3e1523]:
                - generic [ref=f3e1524]:
                  - button "" [ref=f3e1525] [cursor=pointer]
                  - button "" [ref=f3e1527] [cursor=pointer]
            - row [ref=f3e1530]:
              - cell "" [ref=f3e1531]:
                - generic [ref=f3e1534] [cursor=pointer]:
                  - checkbox "" [ref=f3e1535]
                  - generic [ref=f3e1536]: 
              - cell [ref=f3e1538]
              - cell "Anto 10:37 AM M Varghese" [ref=f3e1539]
              - cell "(Deleted)" [ref=f3e1541]
              - cell "2024-06-02" [ref=f3e1543]
              - cell [ref=f3e1545]
              - cell [ref=f3e1546]:
                - generic [ref=f3e1547]:
                  - button "" [ref=f3e1548] [cursor=pointer]
                  - button "" [ref=f3e1550] [cursor=pointer]
        - navigation "Pagination Navigation" [ref=f3e1553]:
          - list [ref=f3e1554]:
            - listitem [ref=f3e1555]:
              - button "1" [ref=f3e1556] [cursor=pointer]
            - listitem [ref=f3e1557]:
              - button "2" [ref=f3e1558] [cursor=pointer]
            - listitem [ref=f3e1559]:
              - button "" [ref=f3e1560] [cursor=pointer]
    - generic [ref=f3e1562]:
      - paragraph [ref=f3e1563]: OrangeHRM OS 5.9
      - paragraph [ref=f3e1564]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e1565] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  567 |     await expect(
  568 |       recruitmentPage.candidateStatusDropdown
  569 |     ).toContainText(data.candidateStatus);
  570 | 
  571 |     await expect(
  572 |       recruitmentPage.fromDateInput
  573 |     ).toHaveValue(fromDate);
  574 | 
  575 |     await expect(
  576 |       recruitmentPage.toDateInput
  577 |     ).toHaveValue(toDate);
  578 | 
  579 |     await recruitmentPage.searchButton.click();
  580 | 
  581 |     await expect(
  582 |       recruitmentPage.loadingSpinner
  583 |     ).toBeHidden({
  584 |       timeout: 20_000,
  585 |     });
  586 | 
  587 |     // Verify that filters remain selected.
  588 |     await expect(
  589 |       recruitmentPage.vacancyDropdown
  590 |     ).toContainText(selectedVacancy);
  591 | 
  592 |     await expect(
  593 |       recruitmentPage.candidateStatusDropdown
  594 |     ).toContainText(data.candidateStatus);
  595 | 
  596 |     await expect(
  597 |       recruitmentPage.fromDateInput
  598 |     ).toHaveValue(fromDate);
  599 | 
  600 |     await expect(
  601 |       recruitmentPage.toDateInput
  602 |     ).toHaveValue(toDate);
  603 | 
  604 |     await expect(
  605 |       recruitmentPage.candidateRows
  606 |         .first()
  607 |         .or(recruitmentPage.noRecordsFound)
  608 |     ).toBeVisible({
  609 |       timeout: 15_000,
  610 |     });
  611 | 
  612 |     const candidateCount =
  613 |       await recruitmentPage.candidateRows.count();
  614 | 
  615 |     if (candidateCount > 0) {
  616 |       for (
  617 |         let index = 0;
  618 |         index < candidateCount;
  619 |         index++
  620 |       ) {
  621 |         const cells =
  622 |           recruitmentPage.candidateRows
  623 |             .nth(index)
  624 |             .locator('.oxd-table-cell');
  625 | 
  626 |         const vacancyCell = cells.nth(1);
  627 |         const statusCell = cells.nth(5);
  628 | 
  629 |         await expect(
  630 |           vacancyCell
  631 |         ).toContainText(selectedVacancy);
  632 | 
  633 |         await expect(
  634 |           statusCell
  635 |         ).toContainText(
  636 |           data.candidateStatus
  637 |         );
  638 |       }
  639 |     } else {
  640 |       await expect(
  641 |         recruitmentPage.noRecordsFound
  642 |       ).toBeVisible();
  643 |     }
  644 | 
  645 |     await recruitmentPage.restButton.click();
  646 | 
  647 |     await expect(
  648 |       recruitmentPage.vacancyDropdown
  649 |     ).toContainText(
  650 |       data.defaultDropdownValue
  651 |     );
  652 | 
  653 |     await expect(
  654 |       recruitmentPage.candidateStatusDropdown
  655 |     ).toContainText(
  656 |       data.defaultDropdownValue
  657 |     );
  658 |   }
  659 | );
  660 | 
  661 | test.only('TC_RECRUITMENT_144 - Admin should navigate to the Add Candidate page @smoke @navigation @regression',
  662 |   async ({ page, navigationPage, recruitmentPage }) => {
  663 |     // Navigate to Recruitment → Candidates.
  664 |        await navigationPage.gotoRecruitment();
  665 |        await recruitmentPage.navigateToCandidate();
  666 |     // Click the Add button.
> 667 |         await recruitmentPage.addCandidateButton.click()
      |                                                  ^ TimeoutError: locator.click: Timeout 70000ms exceeded.
  668 |     // Verify navigation to the Add Candidate page.
  669 |       await expect(page).toHaveURL(/recruitment\/addCandidate/);
  670 |     // Verify the Add Candidate heading.
  671 |        await expect(recruitmentPage.addCandidateHeading).toBeVisible();
  672 |     // Verify First Name input.
  673 |         await expect(recruitmentPage.firstNameInput).toBeVisible();
  674 |     // Verify Middle Name input.
  675 |            await expect(recruitmentPage.middleNameInput).toBeVisible();
  676 | 
  677 |     // Verify Last Name input.
  678 |         await expect(recruitmentPage.lastNameInput).toBeVisible();
  679 | 
  680 |     // Verify Vacancy dropdown.
  681 |         await expect(recruitmentPage.vacancyDropdown).toBeVisible();
  682 | 
  683 |     // Verify Email input.
  684 |         await expect(recruitmentPage.emailInput).toBeVisible();
  685 | 
  686 |     // Verify Contact Number input.
  687 |              await expect(recruitmentPage.contactNumberInput).toBeVisible();
  688 | 
  689 | 
  690 |     // Verify Resume upload field.
  691 | 
  692 |       await expect(recruitmentPage.resumeInput).toBeVisible();
  693 | 
  694 |     // Verify Keywords input.
  695 |       await expect(recruitmentPage.addkeywordsInput).toBeVisible();
  696 |     // Verify Date of Application input.
  697 | await expect(recruitmentPage.applicationDateInput).toBeVisible();
  698 |     // Verify Notes input.
  699 |     await expect(recruitmentPage.notesInput).toBeVisible();
  700 | 
  701 |     // Verify Consent to Keep Data checkbox.
  702 |  await expect(recruitmentPage.consentCheckboxLabel).toBeVisible();
  703 | 
  704 |     // Verify Save and Cancel buttons.
  705 |     await expect(recruitmentPage.saveButton).toBeVisible();
  706 |     await expect(recruitmentPage.cancelButton).toBeVisible();
  707 |   }
  708 | );
  709 | 
  710 | 
  711 | });
  712 | 
```