# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_153 - Admin should delete an existing candidate @positive @delete @regression
- Location: tests\Recruitment\recruitment.spec.ts:1536:6

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.orangehrm-container').locator('.oxd-table-body .oxd-table-card')
Expected: 0
Received: 50
Timeout:  20000ms

Call log:
  - Expect "toHaveCount" with timeout 20000ms
  - waiting for locator('.orangehrm-container').locator('.oxd-table-body .oxd-table-card')
    42 × locator resolved to 50 elements
       - unexpected value "50"

```

# Page snapshot

```yaml
- generic [ref=f6e3]:
  - generic:
    - complementary [ref=f6e4]:
      - navigation "Sidepanel" [ref=f6e5]:
        - generic [ref=f6e6]:
          - link [ref=f6e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f6e9]
          - text: 
        - generic [ref=f6e10]:
          - generic [ref=f6e11]:
            - generic [ref=f6e12]:
              - textbox "Search" [ref=f6e15]
              - button "" [ref=f6e16] [cursor=pointer]
            - separator [ref=f6e18]
          - list [ref=f6e19]:
            - listitem [ref=f6e20]:
              - link "Admin" [ref=f6e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f6e25]:
              - link "PIM" [ref=f6e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f6e41]:
              - link "Leave" [ref=f6e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f6e46]:
              - link "Time" [ref=f6e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f6e54]:
              - link "Recruitment" [ref=f6e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f6e62]:
              - link "My Info" [ref=f6e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f6e70]:
              - link "Performance" [ref=f6e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f6e80]:
              - link "Dashboard" [ref=f6e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f6e85]:
              - link "Directory" [ref=f6e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f6e90]:
              - link "Maintenance" [ref=f6e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f6e96]:
              - link "Claim" [ref=f6e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f6e105]:
              - link "Buzz" [ref=f6e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f6e110]:
      - generic [ref=f6e111]:
        - generic [ref=f6e112]:
          - text: 
          - heading "Recruitment" [level=6] [ref=f6e114]
        - link [ref=f6e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f6e117] [cursor=pointer]
        - list [ref=f6e123]:
          - listitem [ref=f6e124]:
            - generic [ref=f6e125] [cursor=pointer]:
              - img "profile picture" [ref=f6e126]
              - paragraph [ref=f6e127]: 123 13333
              - generic [ref=f6e128]: 
      - navigation "Topbar Menu" [ref=f6e130]:
        - list [ref=f6e131]:
          - listitem [ref=f6e132] [cursor=pointer]:
            - link "Candidates" [ref=f6e133]:
              - /url: "#"
          - listitem [ref=f6e134] [cursor=pointer]:
            - link "Vacancies" [ref=f6e135]:
              - /url: "#"
          - button "" [ref=f6e137] [cursor=pointer]
  - generic [ref=f6e139]:
    - generic [ref=f6e141]:
      - generic [ref=f6e142]:
        - generic [ref=f6e143]:
          - heading "Candidates" [level=5] [ref=f6e145]
          - button "" [ref=f6e148] [cursor=pointer]
        - separator [ref=f6e150]
        - generic [ref=f6e152]:
          - generic [ref=f6e154]:
            - generic [ref=f6e156]:
              - generic [ref=f6e157]: Job Title
              - generic [ref=f6e161] [cursor=pointer]:
                - generic [ref=f6e162]: "-- Select --"
                - generic [ref=f6e163]: 
            - generic [ref=f6e166]:
              - generic [ref=f6e167]: Vacancy
              - generic [ref=f6e171] [cursor=pointer]:
                - generic [ref=f6e172]: "-- Select --"
                - generic [ref=f6e173]: 
            - generic [ref=f6e176]:
              - generic [ref=f6e177]: Hiring Manager
              - generic [ref=f6e181] [cursor=pointer]:
                - generic [ref=f6e182]: "-- Select --"
                - generic [ref=f6e183]: 
            - generic [ref=f6e186]:
              - generic [ref=f6e187]: Status
              - generic [ref=f6e191] [cursor=pointer]:
                - generic [ref=f6e192]: "-- Select --"
                - generic [ref=f6e193]: 
          - generic [ref=f6e196]:
            - generic [ref=f6e198]:
              - generic [ref=f6e199]: Candidate Name
              - textbox "Type for hints..." [ref=f6e204]: DeleteCandidate1786954199596
              - generic [ref=f6e205]: Invalid
            - generic [ref=f6e207]:
              - generic [ref=f6e208]: Keywords
              - textbox "Enter comma seperated words..." [ref=f6e211]
            - generic [ref=f6e213]:
              - generic [ref=f6e214]: Date of Application
              - generic [ref=f6e218]:
                - textbox "From" [ref=f6e219]
                - generic [ref=f6e220] [cursor=pointer]: 
            - generic [ref=f6e227]:
              - textbox "To" [ref=f6e228]
              - generic [ref=f6e229] [cursor=pointer]: 
          - generic [ref=f6e233]:
            - generic [ref=f6e234]: Method of Application
            - generic [ref=f6e238] [cursor=pointer]:
              - generic [ref=f6e239]: "-- Select --"
              - generic [ref=f6e240]: 
          - separator [ref=f6e242]
          - generic [ref=f6e243]:
            - button "Reset" [ref=f6e244] [cursor=pointer]
            - button "Search" [active] [ref=f6e245] [cursor=pointer]
      - generic [ref=f6e246]:
        - button " Add" [ref=f6e248] [cursor=pointer]:
          - generic [ref=f6e249]: 
          - text: Add
        - generic [ref=f6e250]:
          - separator [ref=f6e251]
          - generic [ref=f6e252]: (61) Records Found
        - table [ref=f6e255]:
          - rowgroup [ref=f6e256]:
            - row [ref=f6e257]:
              - columnheader "" [ref=f6e258]:
                - generic [ref=f6e260] [cursor=pointer]:
                  - checkbox "" [ref=f6e261]
                  - generic [ref=f6e262]: 
              - columnheader "Vacancy " [ref=f6e264]:
                - text: Vacancy
                - generic [ref=f6e265]:
                  - generic [ref=f6e266] [cursor=pointer]: 
                  - text:  
              - columnheader "Candidate " [ref=f6e267]:
                - text: Candidate
                - generic [ref=f6e268]:
                  - generic [ref=f6e269] [cursor=pointer]: 
                  - text:  
              - columnheader "Hiring Manager " [ref=f6e270]:
                - text: Hiring Manager
                - generic [ref=f6e271]:
                  - generic [ref=f6e272] [cursor=pointer]: 
                  - text:  
              - columnheader "Date of Application " [ref=f6e273]:
                - text: Date of Application
                - generic [ref=f6e274]:
                  - generic [ref=f6e275] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f6e276]:
                - text: Status
                - generic [ref=f6e277]:
                  - generic [ref=f6e278] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f6e279]
          - rowgroup [ref=f6e280]:
            - row [ref=f6e282]:
              - cell "" [ref=f6e283]:
                - generic [ref=f6e286] [cursor=pointer]:
                  - checkbox "" [ref=f6e287]
                  - generic [ref=f6e288]: 
              - cell "Payroll Administrator" [ref=f6e290]
              - cell "testing automation task" [ref=f6e292]
              - cell "123 13333" [ref=f6e294]
              - cell "2026-17-08" [ref=f6e296]
              - cell "Application Initiated" [ref=f6e298]
              - cell [ref=f6e300]:
                - generic [ref=f6e301]:
                  - button "" [ref=f6e302] [cursor=pointer]
                  - button "" [ref=f6e304] [cursor=pointer]
            - row [ref=f6e307]:
              - cell "" [ref=f6e308]:
                - generic [ref=f6e311] [cursor=pointer]:
                  - checkbox "" [ref=f6e312]
                  - generic [ref=f6e313]: 
              - cell [ref=f6e315]
              - cell "Tanmay Anderson O'Keefe" [ref=f6e316]
              - cell "(Deleted)" [ref=f6e318]
              - cell "2024-29-03" [ref=f6e320]
              - cell [ref=f6e322]
              - cell [ref=f6e323]:
                - generic [ref=f6e324]:
                  - button "" [ref=f6e325] [cursor=pointer]
                  - button "" [ref=f6e327] [cursor=pointer]
            - row [ref=f6e330]:
              - cell "" [ref=f6e331]:
                - generic [ref=f6e334] [cursor=pointer]:
                  - checkbox "" [ref=f6e335]
                  - generic [ref=f6e336]: 
              - cell [ref=f6e338]
              - cell "Tanmay sree Dachu" [ref=f6e339]
              - cell "(Deleted)" [ref=f6e341]
              - cell "2024-06-02" [ref=f6e343]
              - cell [ref=f6e345]
              - cell [ref=f6e346]:
                - generic [ref=f6e347]:
                  - button "" [ref=f6e348] [cursor=pointer]
                  - button "" [ref=f6e350] [cursor=pointer]
                  - button "" [ref=f6e352] [cursor=pointer]
            - row [ref=f6e355]:
              - cell "" [ref=f6e356]:
                - generic [ref=f6e359] [cursor=pointer]:
                  - checkbox "" [ref=f6e360]
                  - generic [ref=f6e361]: 
              - cell "Senior QA Lead" [ref=f6e363]
              - cell "John Doe" [ref=f6e365]
              - cell "(Deleted)" [ref=f6e367]
              - cell "2024-06-02" [ref=f6e369]
              - cell "Shortlisted" [ref=f6e371]
              - cell [ref=f6e373]:
                - generic [ref=f6e374]:
                  - button "" [ref=f6e375] [cursor=pointer]
                  - button "" [ref=f6e377] [cursor=pointer]
                  - button "" [ref=f6e379] [cursor=pointer]
            - row [ref=f6e382]:
              - cell "" [ref=f6e383]:
                - generic [ref=f6e386] [cursor=pointer]:
                  - checkbox "" [ref=f6e387]
                  - generic [ref=f6e388]: 
              - cell "Senior QA Lead" [ref=f6e390]
              - cell "John Doe" [ref=f6e392]
              - cell "(Deleted)" [ref=f6e394]
              - cell "2024-06-02" [ref=f6e396]
              - cell "Shortlisted" [ref=f6e398]
              - cell [ref=f6e400]:
                - generic [ref=f6e401]:
                  - button "" [ref=f6e402] [cursor=pointer]
                  - button "" [ref=f6e404] [cursor=pointer]
                  - button "" [ref=f6e406] [cursor=pointer]
            - row [ref=f6e409]:
              - cell "" [ref=f6e410]:
                - generic [ref=f6e413] [cursor=pointer]:
                  - checkbox "" [ref=f6e414]
                  - generic [ref=f6e415]: 
              - cell "Senior QA Lead" [ref=f6e417]
              - cell "John Doe" [ref=f6e419]
              - cell "(Deleted)" [ref=f6e421]
              - cell "2024-06-02" [ref=f6e423]
              - cell "Shortlisted" [ref=f6e425]
              - cell [ref=f6e427]:
                - generic [ref=f6e428]:
                  - button "" [ref=f6e429] [cursor=pointer]
                  - button "" [ref=f6e431] [cursor=pointer]
                  - button "" [ref=f6e433] [cursor=pointer]
            - row [ref=f6e436]:
              - cell "" [ref=f6e437]:
                - generic [ref=f6e440] [cursor=pointer]:
                  - checkbox "" [ref=f6e441]
                  - generic [ref=f6e442]: 
              - cell "Senior QA Lead" [ref=f6e444]
              - cell "John Doe" [ref=f6e446]
              - cell "(Deleted)" [ref=f6e448]
              - cell "2024-06-02" [ref=f6e450]
              - cell "Shortlisted" [ref=f6e452]
              - cell [ref=f6e454]:
                - generic [ref=f6e455]:
                  - button "" [ref=f6e456] [cursor=pointer]
                  - button "" [ref=f6e458] [cursor=pointer]
                  - button "" [ref=f6e460] [cursor=pointer]
            - row [ref=f6e463]:
              - cell "" [ref=f6e464]:
                - generic [ref=f6e467] [cursor=pointer]:
                  - checkbox "" [ref=f6e468]
                  - generic [ref=f6e469]: 
              - cell "Senior QA Lead" [ref=f6e471]
              - cell "John Doe" [ref=f6e473]
              - cell "(Deleted)" [ref=f6e475]
              - cell "2024-06-02" [ref=f6e477]
              - cell "Shortlisted" [ref=f6e479]
              - cell [ref=f6e481]:
                - generic [ref=f6e482]:
                  - button "" [ref=f6e483] [cursor=pointer]
                  - button "" [ref=f6e485] [cursor=pointer]
                  - button "" [ref=f6e487] [cursor=pointer]
            - row [ref=f6e490]:
              - cell "" [ref=f6e491]:
                - generic [ref=f6e494] [cursor=pointer]:
                  - checkbox "" [ref=f6e495]
                  - generic [ref=f6e496]: 
              - cell "Senior QA Lead" [ref=f6e498]
              - cell "John Doe" [ref=f6e500]
              - cell "(Deleted)" [ref=f6e502]
              - cell "2024-06-02" [ref=f6e504]
              - cell "Shortlisted" [ref=f6e506]
              - cell [ref=f6e508]:
                - generic [ref=f6e509]:
                  - button "" [ref=f6e510] [cursor=pointer]
                  - button "" [ref=f6e512] [cursor=pointer]
                  - button "" [ref=f6e514] [cursor=pointer]
            - row [ref=f6e517]:
              - cell "" [ref=f6e518]:
                - generic [ref=f6e521] [cursor=pointer]:
                  - checkbox "" [ref=f6e522]
                  - generic [ref=f6e523]: 
              - cell "Senior QA Lead" [ref=f6e525]
              - cell "John Doe" [ref=f6e527]
              - cell "(Deleted)" [ref=f6e529]
              - cell "2024-06-02" [ref=f6e531]
              - cell "Rejected" [ref=f6e533]
              - cell [ref=f6e535]:
                - generic [ref=f6e536]:
                  - button "" [ref=f6e537] [cursor=pointer]
                  - button "" [ref=f6e539] [cursor=pointer]
                  - button "" [ref=f6e541] [cursor=pointer]
            - row [ref=f6e544]:
              - cell "" [ref=f6e545]:
                - generic [ref=f6e548] [cursor=pointer]:
                  - checkbox "" [ref=f6e549]
                  - generic [ref=f6e550]: 
              - cell "Senior QA Lead" [ref=f6e552]
              - cell "John Doe" [ref=f6e554]
              - cell "(Deleted)" [ref=f6e556]
              - cell "2024-06-02" [ref=f6e558]
              - cell "Shortlisted" [ref=f6e560]
              - cell [ref=f6e562]:
                - generic [ref=f6e563]:
                  - button "" [ref=f6e564] [cursor=pointer]
                  - button "" [ref=f6e566] [cursor=pointer]
                  - button "" [ref=f6e568] [cursor=pointer]
            - row [ref=f6e571]:
              - cell "" [ref=f6e572]:
                - generic [ref=f6e575] [cursor=pointer]:
                  - checkbox "" [ref=f6e576]
                  - generic [ref=f6e577]: 
              - cell [ref=f6e579]
              - cell "Manu K M" [ref=f6e580]
              - cell "(Deleted)" [ref=f6e582]
              - cell "2024-06-02" [ref=f6e584]
              - cell [ref=f6e586]
              - cell [ref=f6e587]:
                - generic [ref=f6e588]:
                  - button "" [ref=f6e589] [cursor=pointer]
                  - button "" [ref=f6e591] [cursor=pointer]
            - row [ref=f6e594]:
              - cell "" [ref=f6e595]:
                - generic [ref=f6e598] [cursor=pointer]:
                  - checkbox "" [ref=f6e599]
                  - generic [ref=f6e600]: 
              - cell [ref=f6e602]
              - cell "Manu K M" [ref=f6e603]
              - cell "(Deleted)" [ref=f6e605]
              - cell "2024-06-02" [ref=f6e607]
              - cell [ref=f6e609]
              - cell [ref=f6e610]:
                - generic [ref=f6e611]:
                  - button "" [ref=f6e612] [cursor=pointer]
                  - button "" [ref=f6e614] [cursor=pointer]
            - row [ref=f6e617]:
              - cell "" [ref=f6e618]:
                - generic [ref=f6e621] [cursor=pointer]:
                  - checkbox "" [ref=f6e622]
                  - generic [ref=f6e623]: 
              - cell [ref=f6e625]
              - cell "Manu K M" [ref=f6e626]
              - cell "(Deleted)" [ref=f6e628]
              - cell "2024-06-02" [ref=f6e630]
              - cell [ref=f6e632]
              - cell [ref=f6e633]:
                - generic [ref=f6e634]:
                  - button "" [ref=f6e635] [cursor=pointer]
                  - button "" [ref=f6e637] [cursor=pointer]
            - row [ref=f6e640]:
              - cell "" [ref=f6e641]:
                - generic [ref=f6e644] [cursor=pointer]:
                  - checkbox "" [ref=f6e645]
                  - generic [ref=f6e646]: 
              - cell [ref=f6e648]
              - cell "madhav m" [ref=f6e649]
              - cell "(Deleted)" [ref=f6e651]
              - cell "2024-06-02" [ref=f6e653]
              - cell [ref=f6e655]
              - cell [ref=f6e656]:
                - generic [ref=f6e657]:
                  - button "" [ref=f6e658] [cursor=pointer]
                  - button "" [ref=f6e660] [cursor=pointer]
            - row [ref=f6e663]:
              - cell "" [ref=f6e664]:
                - generic [ref=f6e667] [cursor=pointer]:
                  - checkbox "" [ref=f6e668]
                  - generic [ref=f6e669]: 
              - cell [ref=f6e671]
              - cell "madhav m" [ref=f6e672]
              - cell "(Deleted)" [ref=f6e674]
              - cell "2024-06-02" [ref=f6e676]
              - cell [ref=f6e678]
              - cell [ref=f6e679]:
                - generic [ref=f6e680]:
                  - button "" [ref=f6e681] [cursor=pointer]
                  - button "" [ref=f6e683] [cursor=pointer]
            - row [ref=f6e686]:
              - cell "" [ref=f6e687]:
                - generic [ref=f6e690] [cursor=pointer]:
                  - checkbox "" [ref=f6e691]
                  - generic [ref=f6e692]: 
              - cell [ref=f6e694]
              - cell "madhav m" [ref=f6e695]
              - cell "(Deleted)" [ref=f6e697]
              - cell "2024-06-02" [ref=f6e699]
              - cell [ref=f6e701]
              - cell [ref=f6e702]:
                - generic [ref=f6e703]:
                  - button "" [ref=f6e704] [cursor=pointer]
                  - button "" [ref=f6e706] [cursor=pointer]
            - row [ref=f6e709]:
              - cell "" [ref=f6e710]:
                - generic [ref=f6e713] [cursor=pointer]:
                  - checkbox "" [ref=f6e714]
                  - generic [ref=f6e715]: 
              - cell [ref=f6e717]
              - cell "madhav m" [ref=f6e718]
              - cell "(Deleted)" [ref=f6e720]
              - cell "2024-06-02" [ref=f6e722]
              - cell [ref=f6e724]
              - cell [ref=f6e725]:
                - generic [ref=f6e726]:
                  - button "" [ref=f6e727] [cursor=pointer]
                  - button "" [ref=f6e729] [cursor=pointer]
            - row [ref=f6e732]:
              - cell "" [ref=f6e733]:
                - generic [ref=f6e736] [cursor=pointer]:
                  - checkbox "" [ref=f6e737]
                  - generic [ref=f6e738]: 
              - cell [ref=f6e740]
              - cell "madhav m" [ref=f6e741]
              - cell "(Deleted)" [ref=f6e743]
              - cell "2024-06-02" [ref=f6e745]
              - cell [ref=f6e747]
              - cell [ref=f6e748]:
                - generic [ref=f6e749]:
                  - button "" [ref=f6e750] [cursor=pointer]
                  - button "" [ref=f6e752] [cursor=pointer]
            - row [ref=f6e755]:
              - cell "" [ref=f6e756]:
                - generic [ref=f6e759] [cursor=pointer]:
                  - checkbox "" [ref=f6e760]
                  - generic [ref=f6e761]: 
              - cell [ref=f6e763]
              - cell "madhav m" [ref=f6e764]
              - cell "(Deleted)" [ref=f6e766]
              - cell "2024-06-02" [ref=f6e768]
              - cell [ref=f6e770]
              - cell [ref=f6e771]:
                - generic [ref=f6e772]:
                  - button "" [ref=f6e773] [cursor=pointer]
                  - button "" [ref=f6e775] [cursor=pointer]
            - row [ref=f6e778]:
              - cell "" [ref=f6e779]:
                - generic [ref=f6e782] [cursor=pointer]:
                  - checkbox "" [ref=f6e783]
                  - generic [ref=f6e784]: 
              - cell "Senior QA Lead" [ref=f6e786]
              - cell "Gautham Raj R" [ref=f6e788]
              - cell "(Deleted)" [ref=f6e790]
              - cell "2024-06-02" [ref=f6e792]
              - cell "Rejected" [ref=f6e794]
              - cell [ref=f6e796]:
                - generic [ref=f6e797]:
                  - button "" [ref=f6e798] [cursor=pointer]
                  - button "" [ref=f6e800] [cursor=pointer]
                  - button "" [ref=f6e802] [cursor=pointer]
            - row [ref=f6e805]:
              - cell "" [ref=f6e806]:
                - generic [ref=f6e809] [cursor=pointer]:
                  - checkbox "" [ref=f6e810]
                  - generic [ref=f6e811]: 
              - cell "Senior QA Lead" [ref=f6e813]
              - cell "Gautham Raj R" [ref=f6e815]
              - cell "(Deleted)" [ref=f6e817]
              - cell "2024-06-02" [ref=f6e819]
              - cell "Shortlisted" [ref=f6e821]
              - cell [ref=f6e823]:
                - generic [ref=f6e824]:
                  - button "" [ref=f6e825] [cursor=pointer]
                  - button "" [ref=f6e827] [cursor=pointer]
                  - button "" [ref=f6e829] [cursor=pointer]
            - row [ref=f6e832]:
              - cell "" [ref=f6e833]:
                - generic [ref=f6e836] [cursor=pointer]:
                  - checkbox "" [ref=f6e837]
                  - generic [ref=f6e838]: 
              - cell "Senior QA Lead" [ref=f6e840]
              - cell "Gautham Raj R" [ref=f6e842]
              - cell "(Deleted)" [ref=f6e844]
              - cell "2024-06-02" [ref=f6e846]
              - cell "Shortlisted" [ref=f6e848]
              - cell [ref=f6e850]:
                - generic [ref=f6e851]:
                  - button "" [ref=f6e852] [cursor=pointer]
                  - button "" [ref=f6e854] [cursor=pointer]
                  - button "" [ref=f6e856] [cursor=pointer]
            - row [ref=f6e859]:
              - cell "" [ref=f6e860]:
                - generic [ref=f6e863] [cursor=pointer]:
                  - checkbox "" [ref=f6e864]
                  - generic [ref=f6e865]: 
              - cell "Senior QA Lead" [ref=f6e867]
              - cell "Gautham Raj R" [ref=f6e869]
              - cell "(Deleted)" [ref=f6e871]
              - cell "2024-06-02" [ref=f6e873]
              - cell "Shortlisted" [ref=f6e875]
              - cell [ref=f6e877]:
                - generic [ref=f6e878]:
                  - button "" [ref=f6e879] [cursor=pointer]
                  - button "" [ref=f6e881] [cursor=pointer]
                  - button "" [ref=f6e883] [cursor=pointer]
            - row [ref=f6e886]:
              - cell "" [ref=f6e887]:
                - generic [ref=f6e890] [cursor=pointer]:
                  - checkbox "" [ref=f6e891]
                  - generic [ref=f6e892]: 
              - cell "Senior QA Lead" [ref=f6e894]
              - cell "Gautham Raj R" [ref=f6e896]
              - cell "(Deleted)" [ref=f6e898]
              - cell "2024-06-02" [ref=f6e900]
              - cell "Application Initiated" [ref=f6e902]
              - cell [ref=f6e904]:
                - generic [ref=f6e905]:
                  - button "" [ref=f6e906] [cursor=pointer]
                  - button "" [ref=f6e908] [cursor=pointer]
                  - button "" [ref=f6e910] [cursor=pointer]
            - row [ref=f6e913]:
              - cell "" [ref=f6e914]:
                - generic [ref=f6e917] [cursor=pointer]:
                  - checkbox "" [ref=f6e918]
                  - generic [ref=f6e919]: 
              - cell "Senior QA Lead" [ref=f6e921]
              - cell "Gautham Raj R" [ref=f6e923]
              - cell "(Deleted)" [ref=f6e925]
              - cell "2024-06-02" [ref=f6e927]
              - cell "Application Initiated" [ref=f6e929]
              - cell [ref=f6e931]:
                - generic [ref=f6e932]:
                  - button "" [ref=f6e933] [cursor=pointer]
                  - button "" [ref=f6e935] [cursor=pointer]
                  - button "" [ref=f6e937] [cursor=pointer]
            - row [ref=f6e940]:
              - cell "" [ref=f6e941]:
                - generic [ref=f6e944] [cursor=pointer]:
                  - checkbox "" [ref=f6e945]
                  - generic [ref=f6e946]: 
              - cell "Senior QA Lead" [ref=f6e948]
              - cell "Gautham Raj R" [ref=f6e950]
              - cell "(Deleted)" [ref=f6e952]
              - cell "2024-06-02" [ref=f6e954]
              - cell "Shortlisted" [ref=f6e956]
              - cell [ref=f6e958]:
                - generic [ref=f6e959]:
                  - button "" [ref=f6e960] [cursor=pointer]
                  - button "" [ref=f6e962] [cursor=pointer]
                  - button "" [ref=f6e964] [cursor=pointer]
            - row [ref=f6e967]:
              - cell "" [ref=f6e968]:
                - generic [ref=f6e971] [cursor=pointer]:
                  - checkbox "" [ref=f6e972]
                  - generic [ref=f6e973]: 
              - cell "Senior QA Lead" [ref=f6e975]
              - cell "Gautham Raj R" [ref=f6e977]
              - cell "(Deleted)" [ref=f6e979]
              - cell "2024-06-02" [ref=f6e981]
              - cell "Rejected" [ref=f6e983]
              - cell [ref=f6e985]:
                - generic [ref=f6e986]:
                  - button "" [ref=f6e987] [cursor=pointer]
                  - button "" [ref=f6e989] [cursor=pointer]
                  - button "" [ref=f6e991] [cursor=pointer]
            - row [ref=f6e994]:
              - cell "" [ref=f6e995]:
                - generic [ref=f6e998] [cursor=pointer]:
                  - checkbox "" [ref=f6e999]
                  - generic [ref=f6e1000]: 
              - cell "Senior QA Lead" [ref=f6e1002]
              - cell "Gautham Raj R" [ref=f6e1004]
              - cell "(Deleted)" [ref=f6e1006]
              - cell "2024-06-02" [ref=f6e1008]
              - cell "Shortlisted" [ref=f6e1010]
              - cell [ref=f6e1012]:
                - generic [ref=f6e1013]:
                  - button "" [ref=f6e1014] [cursor=pointer]
                  - button "" [ref=f6e1016] [cursor=pointer]
                  - button "" [ref=f6e1018] [cursor=pointer]
            - row [ref=f6e1021]:
              - cell "" [ref=f6e1022]:
                - generic [ref=f6e1025] [cursor=pointer]:
                  - checkbox "" [ref=f6e1026]
                  - generic [ref=f6e1027]: 
              - cell "Senior QA Lead" [ref=f6e1029]
              - cell "Gautham Raj R" [ref=f6e1031]
              - cell "(Deleted)" [ref=f6e1033]
              - cell "2024-06-02" [ref=f6e1035]
              - cell "Shortlisted" [ref=f6e1037]
              - cell [ref=f6e1039]:
                - generic [ref=f6e1040]:
                  - button "" [ref=f6e1041] [cursor=pointer]
                  - button "" [ref=f6e1043] [cursor=pointer]
                  - button "" [ref=f6e1045] [cursor=pointer]
            - row [ref=f6e1048]:
              - cell "" [ref=f6e1049]:
                - generic [ref=f6e1052] [cursor=pointer]:
                  - checkbox "" [ref=f6e1053]
                  - generic [ref=f6e1054]: 
              - cell "Senior QA Lead" [ref=f6e1056]
              - cell "Gautham Raj R" [ref=f6e1058]
              - cell "(Deleted)" [ref=f6e1060]
              - cell "2024-06-02" [ref=f6e1062]
              - cell "Shortlisted" [ref=f6e1064]
              - cell [ref=f6e1066]:
                - generic [ref=f6e1067]:
                  - button "" [ref=f6e1068] [cursor=pointer]
                  - button "" [ref=f6e1070] [cursor=pointer]
                  - button "" [ref=f6e1072] [cursor=pointer]
            - row [ref=f6e1075]:
              - cell "" [ref=f6e1076]:
                - generic [ref=f6e1079] [cursor=pointer]:
                  - checkbox "" [ref=f6e1080]
                  - generic [ref=f6e1081]: 
              - cell "Senior QA Lead" [ref=f6e1083]
              - cell "Gautham Raj R" [ref=f6e1085]
              - cell "(Deleted)" [ref=f6e1087]
              - cell "2024-06-02" [ref=f6e1089]
              - cell "Shortlisted" [ref=f6e1091]
              - cell [ref=f6e1093]:
                - generic [ref=f6e1094]:
                  - button "" [ref=f6e1095] [cursor=pointer]
                  - button "" [ref=f6e1097] [cursor=pointer]
                  - button "" [ref=f6e1099] [cursor=pointer]
            - row [ref=f6e1102]:
              - cell "" [ref=f6e1103]:
                - generic [ref=f6e1106] [cursor=pointer]:
                  - checkbox "" [ref=f6e1107]
                  - generic [ref=f6e1108]: 
              - cell "Senior QA Lead" [ref=f6e1110]
              - cell "Gautham Raj R" [ref=f6e1112]
              - cell "(Deleted)" [ref=f6e1114]
              - cell "2024-06-02" [ref=f6e1116]
              - cell "Shortlisted" [ref=f6e1118]
              - cell [ref=f6e1120]:
                - generic [ref=f6e1121]:
                  - button "" [ref=f6e1122] [cursor=pointer]
                  - button "" [ref=f6e1124] [cursor=pointer]
                  - button "" [ref=f6e1126] [cursor=pointer]
            - row [ref=f6e1129]:
              - cell "" [ref=f6e1130]:
                - generic [ref=f6e1133] [cursor=pointer]:
                  - checkbox "" [ref=f6e1134]
                  - generic [ref=f6e1135]: 
              - cell "Senior QA Lead" [ref=f6e1137]
              - cell "Cedric C Ross." [ref=f6e1139]
              - cell "(Deleted)" [ref=f6e1141]
              - cell "2024-06-02" [ref=f6e1143]
              - cell "Shortlisted" [ref=f6e1145]
              - cell [ref=f6e1147]:
                - generic [ref=f6e1148]:
                  - button "" [ref=f6e1149] [cursor=pointer]
                  - button "" [ref=f6e1151] [cursor=pointer]
                  - button "" [ref=f6e1153] [cursor=pointer]
            - row [ref=f6e1156]:
              - cell "" [ref=f6e1157]:
                - generic [ref=f6e1160] [cursor=pointer]:
                  - checkbox "" [ref=f6e1161]
                  - generic [ref=f6e1162]: 
              - cell "Senior QA Lead" [ref=f6e1164]
              - cell "Cedric C Ross." [ref=f6e1166]
              - cell "(Deleted)" [ref=f6e1168]
              - cell "2024-06-02" [ref=f6e1170]
              - cell "Shortlisted" [ref=f6e1172]
              - cell [ref=f6e1174]:
                - generic [ref=f6e1175]:
                  - button "" [ref=f6e1176] [cursor=pointer]
                  - button "" [ref=f6e1178] [cursor=pointer]
                  - button "" [ref=f6e1180] [cursor=pointer]
            - row [ref=f6e1183]:
              - cell "" [ref=f6e1184]:
                - generic [ref=f6e1187] [cursor=pointer]:
                  - checkbox "" [ref=f6e1188]
                  - generic [ref=f6e1189]: 
              - cell "Payroll Administrator" [ref=f6e1191]
              - cell "TestFN TestMN TestLN" [ref=f6e1193]
              - cell "123 13333" [ref=f6e1195]
              - cell "2024-06-02" [ref=f6e1197]
              - cell "Application Initiated" [ref=f6e1199]
              - cell [ref=f6e1201]:
                - generic [ref=f6e1202]:
                  - button "" [ref=f6e1203] [cursor=pointer]
                  - button "" [ref=f6e1205] [cursor=pointer]
            - row [ref=f6e1208]:
              - cell "" [ref=f6e1209]:
                - generic [ref=f6e1212] [cursor=pointer]:
                  - checkbox "" [ref=f6e1213]
                  - generic [ref=f6e1214]: 
              - cell "Payroll Administrator" [ref=f6e1216]
              - cell "TestFN TestMN TestLN" [ref=f6e1218]
              - cell "123 13333" [ref=f6e1220]
              - cell "2024-06-02" [ref=f6e1222]
              - cell "Application Initiated" [ref=f6e1224]
              - cell [ref=f6e1226]:
                - generic [ref=f6e1227]:
                  - button "" [ref=f6e1228] [cursor=pointer]
                  - button "" [ref=f6e1230] [cursor=pointer]
            - row [ref=f6e1233]:
              - cell "" [ref=f6e1234]:
                - generic [ref=f6e1237] [cursor=pointer]:
                  - checkbox "" [ref=f6e1238]
                  - generic [ref=f6e1239]: 
              - cell "Payroll Administrator" [ref=f6e1241]
              - cell "TestFN TestMN TestLN" [ref=f6e1243]
              - cell "123 13333" [ref=f6e1245]
              - cell "2024-06-02" [ref=f6e1247]
              - cell "Application Initiated" [ref=f6e1249]
              - cell [ref=f6e1251]:
                - generic [ref=f6e1252]:
                  - button "" [ref=f6e1253] [cursor=pointer]
                  - button "" [ref=f6e1255] [cursor=pointer]
                  - button "" [ref=f6e1257] [cursor=pointer]
            - row [ref=f6e1260]:
              - cell "" [ref=f6e1261]:
                - generic [ref=f6e1264] [cursor=pointer]:
                  - checkbox "" [ref=f6e1265]
                  - generic [ref=f6e1266]: 
              - cell "Payroll Administrator" [ref=f6e1268]
              - cell "TestFN TestMN TestLN" [ref=f6e1270]
              - cell "123 13333" [ref=f6e1272]
              - cell "2024-06-02" [ref=f6e1274]
              - cell "Application Initiated" [ref=f6e1276]
              - cell [ref=f6e1278]:
                - generic [ref=f6e1279]:
                  - button "" [ref=f6e1280] [cursor=pointer]
                  - button "" [ref=f6e1282] [cursor=pointer]
                  - button "" [ref=f6e1284] [cursor=pointer]
            - row [ref=f6e1287]:
              - cell "" [ref=f6e1288]:
                - generic [ref=f6e1291] [cursor=pointer]:
                  - checkbox "" [ref=f6e1292]
                  - generic [ref=f6e1293]: 
              - cell "Payroll Administrator" [ref=f6e1295]
              - cell "TestFN TestMN TestLN" [ref=f6e1297]
              - cell "123 13333" [ref=f6e1299]
              - cell "2024-06-02" [ref=f6e1301]
              - cell "Application Initiated" [ref=f6e1303]
              - cell [ref=f6e1305]:
                - generic [ref=f6e1306]:
                  - button "" [ref=f6e1307] [cursor=pointer]
                  - button "" [ref=f6e1309] [cursor=pointer]
                  - button "" [ref=f6e1311] [cursor=pointer]
            - row [ref=f6e1314]:
              - cell "" [ref=f6e1315]:
                - generic [ref=f6e1318] [cursor=pointer]:
                  - checkbox "" [ref=f6e1319]
                  - generic [ref=f6e1320]: 
              - cell "Payroll Administrator" [ref=f6e1322]
              - cell "TestFN TestMN TestLN" [ref=f6e1324]
              - cell "123 13333" [ref=f6e1326]
              - cell "2024-06-02" [ref=f6e1328]
              - cell "Application Initiated" [ref=f6e1330]
              - cell [ref=f6e1332]:
                - generic [ref=f6e1333]:
                  - button "" [ref=f6e1334] [cursor=pointer]
                  - button "" [ref=f6e1336] [cursor=pointer]
                  - button "" [ref=f6e1338] [cursor=pointer]
            - row [ref=f6e1341]:
              - cell "" [ref=f6e1342]:
                - generic [ref=f6e1345] [cursor=pointer]:
                  - checkbox "" [ref=f6e1346]
                  - generic [ref=f6e1347]: 
              - cell "Payroll Administrator" [ref=f6e1349]
              - cell "TestFN TestMN TestLN" [ref=f6e1351]
              - cell "123 13333" [ref=f6e1353]
              - cell "2024-06-02" [ref=f6e1355]
              - cell "Application Initiated" [ref=f6e1357]
              - cell [ref=f6e1359]:
                - generic [ref=f6e1360]:
                  - button "" [ref=f6e1361] [cursor=pointer]
                  - button "" [ref=f6e1363] [cursor=pointer]
                  - button "" [ref=f6e1365] [cursor=pointer]
            - row [ref=f6e1368]:
              - cell "" [ref=f6e1369]:
                - generic [ref=f6e1372] [cursor=pointer]:
                  - checkbox "" [ref=f6e1373]
                  - generic [ref=f6e1374]: 
              - cell [ref=f6e1376]
              - cell "AntoAnto 09:58 AM M Varghese" [ref=f6e1377]
              - cell "(Deleted)" [ref=f6e1379]
              - cell "2024-06-02" [ref=f6e1381]
              - cell [ref=f6e1383]
              - cell [ref=f6e1384]:
                - generic [ref=f6e1385]:
                  - button "" [ref=f6e1386] [cursor=pointer]
                  - button "" [ref=f6e1388] [cursor=pointer]
            - row [ref=f6e1391]:
              - cell "" [ref=f6e1392]:
                - generic [ref=f6e1395] [cursor=pointer]:
                  - checkbox "" [ref=f6e1396]
                  - generic [ref=f6e1397]: 
              - cell [ref=f6e1399]
              - cell "Anto 10:15 AM M Varghese" [ref=f6e1400]
              - cell "(Deleted)" [ref=f6e1402]
              - cell "2024-06-02" [ref=f6e1404]
              - cell [ref=f6e1406]
              - cell [ref=f6e1407]:
                - generic [ref=f6e1408]:
                  - button "" [ref=f6e1409] [cursor=pointer]
                  - button "" [ref=f6e1411] [cursor=pointer]
            - row [ref=f6e1414]:
              - cell "" [ref=f6e1415]:
                - generic [ref=f6e1418] [cursor=pointer]:
                  - checkbox "" [ref=f6e1419]
                  - generic [ref=f6e1420]: 
              - cell [ref=f6e1422]
              - cell "Anto 10:20 AM M Varghese" [ref=f6e1423]
              - cell "(Deleted)" [ref=f6e1425]
              - cell "2024-06-02" [ref=f6e1427]
              - cell [ref=f6e1429]
              - cell [ref=f6e1430]:
                - generic [ref=f6e1431]:
                  - button "" [ref=f6e1432] [cursor=pointer]
                  - button "" [ref=f6e1434] [cursor=pointer]
            - row [ref=f6e1437]:
              - cell "" [ref=f6e1438]:
                - generic [ref=f6e1441] [cursor=pointer]:
                  - checkbox "" [ref=f6e1442]
                  - generic [ref=f6e1443]: 
              - cell [ref=f6e1445]
              - cell "Anto 10:26 AM M Varghese" [ref=f6e1446]
              - cell "(Deleted)" [ref=f6e1448]
              - cell "2024-06-02" [ref=f6e1450]
              - cell [ref=f6e1452]
              - cell [ref=f6e1453]:
                - generic [ref=f6e1454]:
                  - button "" [ref=f6e1455] [cursor=pointer]
                  - button "" [ref=f6e1457] [cursor=pointer]
            - row [ref=f6e1460]:
              - cell "" [ref=f6e1461]:
                - generic [ref=f6e1464] [cursor=pointer]:
                  - checkbox "" [ref=f6e1465]
                  - generic [ref=f6e1466]: 
              - cell [ref=f6e1468]
              - cell "Anto 10:28 AM M Varghese" [ref=f6e1469]
              - cell "(Deleted)" [ref=f6e1471]
              - cell "2024-06-02" [ref=f6e1473]
              - cell [ref=f6e1475]
              - cell [ref=f6e1476]:
                - generic [ref=f6e1477]:
                  - button "" [ref=f6e1478] [cursor=pointer]
                  - button "" [ref=f6e1480] [cursor=pointer]
            - row [ref=f6e1483]:
              - cell "" [ref=f6e1484]:
                - generic [ref=f6e1487] [cursor=pointer]:
                  - checkbox "" [ref=f6e1488]
                  - generic [ref=f6e1489]: 
              - cell [ref=f6e1491]
              - cell "Anto 10:37 AM M Varghese" [ref=f6e1492]
              - cell "(Deleted)" [ref=f6e1494]
              - cell "2024-06-02" [ref=f6e1496]
              - cell [ref=f6e1498]
              - cell [ref=f6e1499]:
                - generic [ref=f6e1500]:
                  - button "" [ref=f6e1501] [cursor=pointer]
                  - button "" [ref=f6e1503] [cursor=pointer]
            - row [ref=f6e1506]:
              - cell "" [ref=f6e1507]:
                - generic [ref=f6e1510] [cursor=pointer]:
                  - checkbox "" [ref=f6e1511]
                  - generic [ref=f6e1512]: 
              - cell [ref=f6e1514]
              - cell "Anto 10:40 AM M Varghese" [ref=f6e1515]
              - cell "(Deleted)" [ref=f6e1517]
              - cell "2024-06-02" [ref=f6e1519]
              - cell [ref=f6e1521]
              - cell [ref=f6e1522]:
                - generic [ref=f6e1523]:
                  - button "" [ref=f6e1524] [cursor=pointer]
                  - button "" [ref=f6e1526] [cursor=pointer]
            - row [ref=f6e1529]:
              - cell "" [ref=f6e1530]:
                - generic [ref=f6e1533] [cursor=pointer]:
                  - checkbox "" [ref=f6e1534]
                  - generic [ref=f6e1535]: 
              - cell "Senior QA Lead" [ref=f6e1537]
              - cell "Murali13s Krishna7d5 Veerfa3" [ref=f6e1539]
              - cell "(Deleted)" [ref=f6e1541]
              - cell "2024-06-02" [ref=f6e1543]
              - cell "Application Initiated" [ref=f6e1545]
              - cell [ref=f6e1547]:
                - generic [ref=f6e1548]:
                  - button "" [ref=f6e1549] [cursor=pointer]
                  - button "" [ref=f6e1551] [cursor=pointer]
                  - button "" [ref=f6e1553] [cursor=pointer]
        - navigation "Pagination Navigation" [ref=f6e1556]:
          - list [ref=f6e1557]:
            - listitem [ref=f6e1558]:
              - button "1" [ref=f6e1559] [cursor=pointer]
            - listitem [ref=f6e1560]:
              - button "2" [ref=f6e1561] [cursor=pointer]
            - listitem [ref=f6e1562]:
              - button "" [ref=f6e1563] [cursor=pointer]
    - generic [ref=f6e1565]:
      - paragraph [ref=f6e1566]: OrangeHRM OS 5.9
      - paragraph [ref=f6e1567]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f6e1568] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1533 | );
  1534 | 
  1535 | 
  1536 | test.only('TC_RECRUITMENT_153 - Admin should delete an existing candidate @positive @delete @regression', async ({
  1537 |     page,
  1538 |     navigationPage,
  1539 |     recruitmentPage,
  1540 |   }) => {
  1541 |     const data =
  1542 |       recruitmentData.TC_RECRUITMENT_153;
  1543 | 
  1544 |     const uniqueValue = Date.now();
  1545 | 
  1546 |     const firstName =
  1547 |       `${data.firstNamePrefix}${uniqueValue}`;
  1548 | 
  1549 |     const email =
  1550 |       `${data.emailPrefix}${uniqueValue}` +
  1551 |       `${data.emailDomain}`;
  1552 | 
  1553 |     await navigationPage.gotoRecruitment();
  1554 | 
  1555 |     await recruitmentPage.navigateToCandidate();
  1556 | 
  1557 |     await recruitmentPage.addCandidateButton.click();
  1558 |  
  1559 | 
  1560 |     const createdCandidate =
  1561 |       await recruitmentPage.createCandidate({
  1562 |         firstName,
  1563 |         middleName: data.middleName,
  1564 |         lastName: data.lastName,
  1565 |         email,
  1566 |         contactNumber: data.contactNumber,
  1567 |       });
  1568 | 
  1569 |     const candidateId =
  1570 |       createdCandidate.candidateId;
  1571 | 
  1572 |     expect(candidateId).not.toBe('');
  1573 | 
  1574 |     await expect(page).toHaveURL(
  1575 |       new RegExp(
  1576 |         `/recruitment/addCandidate/${candidateId}$`
  1577 |       ),
  1578 |       {
  1579 |         timeout: 30_000,
  1580 |       }
  1581 |     );
  1582 | 
  1583 |     // Return to Candidates List.
  1584 |     await navigationPage.gotoRecruitment();
  1585 | 
  1586 |     await expect(page).toHaveURL(
  1587 |       /\/recruitment\/viewCandidates$/
  1588 |     );
  1589 | 
  1590 |     // Search and delete the created candidate.
  1591 |     await recruitmentPage.deleteCandidateByName(
  1592 |       firstName
  1593 |     );
  1594 | 
  1595 |     // Clear the previous candidate filter.
  1596 |     await recruitmentPage.restButton.click();
  1597 | 
  1598 |     await expect(
  1599 |       recruitmentPage.candidateNameInput
  1600 |     ).toHaveValue('');
  1601 | 
  1602 |     // Search for the deleted candidate again.
  1603 |     await recruitmentPage.candidateNameInput.fill(
  1604 |       firstName
  1605 |     );
  1606 | 
  1607 |     await expect(
  1608 |       recruitmentPage
  1609 |         .candidateAutocompleteDropdown
  1610 |     ).toBeVisible({
  1611 |       timeout: 15_000,
  1612 |     });
  1613 | 
  1614 |     await expect(
  1615 |       recruitmentPage
  1616 |         .candidateAutocompleteNoRecords
  1617 |     ).toHaveText(data.noRecordsMessage);
  1618 | 
  1619 |     await recruitmentPage.candidateNameInput.press(
  1620 |       'Escape'
  1621 |     );
  1622 | 
  1623 |     await recruitmentPage.searchButton.click();
  1624 | 
  1625 |     // Since no autocomplete option was selected,
  1626 |     // OrangeHRM should display Invalid.
  1627 |     await expect(
  1628 |       recruitmentPage.candidateNameValidation
  1629 |     ).toHaveText(data.invalidMessage);
  1630 | 
  1631 |     await expect(
  1632 |       recruitmentPage.candidateRows
> 1633 |     ).toHaveCount(0);
       |       ^ Error: expect(locator).toHaveCount(expected) failed
  1634 | 
  1635 |     await expect(
  1636 |       recruitmentPage.noRecordsFound
  1637 |     ).toBeVisible();
  1638 | 
  1639 |     // Clear the filter after verification.
  1640 |     await recruitmentPage.candidateNameInput.clear();
  1641 | 
  1642 |     await expect(
  1643 |       recruitmentPage.candidateNameValidation
  1644 |     ).toBeHidden();
  1645 |   }
  1646 | );
  1647 | 
  1648 | 
  1649 | test.only( 'TC_RECRUITMENT_154 - Admin should cancel candidate deletion @negative @cancel @delete @regression',
  1650 |   async ({
  1651 |     page,
  1652 |     navigationPage,
  1653 |     recruitmentPage,
  1654 |   }) => {
  1655 |     const data =
  1656 |       recruitmentData.TC_RECRUITMENT_154;
  1657 | 
  1658 |     const uniqueValue = Date.now();
  1659 | 
  1660 |     const firstName =
  1661 |       `${data.firstNamePrefix}${uniqueValue}`;
  1662 | 
  1663 |     const email =
  1664 |       `${data.emailPrefix}${uniqueValue}` +
  1665 |       `${data.emailDomain}`;
  1666 | 
  1667 |     await navigationPage.gotoRecruitment();
  1668 | 
  1669 |     await recruitmentPage.navigateToCandidate();
  1670 |     await recruitmentPage.addCandidateButton.click();
  1671 | 
  1672 |     const createdCandidate =
  1673 |       await recruitmentPage.createCandidate({
  1674 |         firstName,
  1675 |         middleName: data.middleName,
  1676 |         lastName: data.lastName,
  1677 |         email,
  1678 |         contactNumber: data.contactNumber,
  1679 |       });
  1680 | 
  1681 |     const candidateId =
  1682 |       createdCandidate.candidateId;
  1683 | 
  1684 |     expect(candidateId).not.toBe('');
  1685 | 
  1686 |     await expect(page).toHaveURL(
  1687 |       new RegExp(
  1688 |         `/recruitment/addCandidate/${candidateId}$`
  1689 |       ),
  1690 |       {
  1691 |         timeout: 30_000,
  1692 |       }
  1693 |     );
  1694 | 
  1695 |     await navigationPage.gotoRecruitment();
  1696 | 
  1697 |     await expect(page).toHaveURL(
  1698 |       /\/recruitment\/viewCandidates$/
  1699 |     );
  1700 | 
  1701 |     // Open deletion dialog and cancel.
  1702 |     await recruitmentPage
  1703 |       .cancelCandidateDeletion(firstName);
  1704 | 
  1705 |     // Reset and search again to prove
  1706 |     // the candidate was not deleted.
  1707 |     await recruitmentPage.restButton.click();
  1708 | 
  1709 |     const selectedCandidate =
  1710 |       await recruitmentPage
  1711 |         .selectFirstAvailableCandidate(firstName);
  1712 | 
  1713 |     if (selectedCandidate === null) {
  1714 |       throw new Error(
  1715 |         `Candidate disappeared after cancelling deletion: ${firstName}`
  1716 |       );
  1717 |     }
  1718 | 
  1719 |     await recruitmentPage.searchButton.click();
  1720 | 
  1721 |     await expect(
  1722 |       recruitmentPage.loadingSpinner
  1723 |     ).toBeHidden({
  1724 |       timeout: 20_000,
  1725 |     });
  1726 | 
  1727 |     await expect(
  1728 |       recruitmentPage.candidateRows
  1729 |     ).toHaveCount(1, {
  1730 |       timeout: 20_000,
  1731 |     });
  1732 | 
  1733 |     const candidateCell =
```