# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_138 - Admin should filter Candidates by candidate status @positive @filter @regression
- Location: tests\Recruitment\recruitment.spec.ts:262:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Application Initiated"
Received string:    "Shortlisted"
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
              - paragraph [ref=f3e127]: Lucious Sources
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
                - generic [ref=f3e192]: Application Initiated
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
            - button "Search" [active] [ref=f3e244] [cursor=pointer]
      - generic [ref=f3e245]:
        - button " Add" [ref=f3e247] [cursor=pointer]:
          - generic [ref=f3e248]: 
          - text: Add
        - generic [ref=f3e249]:
          - separator [ref=f3e250]
          - generic [ref=f3e251]: (70) Records Found
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
              - cell "Auto47094 Automation10607" [ref=f3e290]
              - cell "(Deleted)" [ref=f3e292]
              - cell "2026-25-08" [ref=f3e294]
              - cell [ref=f3e296]
              - cell [ref=f3e297]:
                - generic [ref=f3e298]:
                  - button "" [ref=f3e299] [cursor=pointer]
                  - button "" [ref=f3e301] [cursor=pointer]
                  - button "" [ref=f3e303] [cursor=pointer]
            - row [ref=f3e306]:
              - cell "" [ref=f3e307]:
                - generic [ref=f3e310] [cursor=pointer]:
                  - checkbox "" [ref=f3e311]
                  - generic [ref=f3e312]: 
              - cell [ref=f3e314]
              - cell "Auto77641 Automation18345" [ref=f3e315]
              - cell "(Deleted)" [ref=f3e317]
              - cell "2026-25-08" [ref=f3e319]
              - cell [ref=f3e321]
              - cell [ref=f3e322]:
                - generic [ref=f3e323]:
                  - button "" [ref=f3e324] [cursor=pointer]
                  - button "" [ref=f3e326] [cursor=pointer]
            - row [ref=f3e329]:
              - cell "" [ref=f3e330]:
                - generic [ref=f3e333] [cursor=pointer]:
                  - checkbox "" [ref=f3e334]
                  - generic [ref=f3e335]: 
              - cell [ref=f3e337]
              - cell "Auto20378 Automation49333" [ref=f3e338]
              - cell "(Deleted)" [ref=f3e340]
              - cell "2026-25-08" [ref=f3e342]
              - cell [ref=f3e344]
              - cell [ref=f3e345]:
                - generic [ref=f3e346]:
                  - button "" [ref=f3e347] [cursor=pointer]
                  - button "" [ref=f3e349] [cursor=pointer]
                  - button "" [ref=f3e351] [cursor=pointer]
            - row [ref=f3e354]:
              - cell "" [ref=f3e355]:
                - generic [ref=f3e358] [cursor=pointer]:
                  - checkbox "" [ref=f3e359]
                  - generic [ref=f3e360]: 
              - cell [ref=f3e362]
              - cell "Auto50489 Automation53917" [ref=f3e363]
              - cell "(Deleted)" [ref=f3e365]
              - cell "2026-25-08" [ref=f3e367]
              - cell [ref=f3e369]
              - cell [ref=f3e370]:
                - generic [ref=f3e371]:
                  - button "" [ref=f3e372] [cursor=pointer]
                  - button "" [ref=f3e374] [cursor=pointer]
                  - button "" [ref=f3e376] [cursor=pointer]
            - row [ref=f3e379]:
              - cell "" [ref=f3e380]:
                - generic [ref=f3e383] [cursor=pointer]:
                  - checkbox "" [ref=f3e384]
                  - generic [ref=f3e385]: 
              - cell [ref=f3e387]
              - cell "Auto96680 Automation68746" [ref=f3e388]
              - cell "(Deleted)" [ref=f3e390]
              - cell "2026-25-08" [ref=f3e392]
              - cell [ref=f3e394]
              - cell [ref=f3e395]:
                - generic [ref=f3e396]:
                  - button "" [ref=f3e397] [cursor=pointer]
                  - button "" [ref=f3e399] [cursor=pointer]
            - row [ref=f3e402]:
              - cell "" [ref=f3e403]:
                - generic [ref=f3e406] [cursor=pointer]:
                  - checkbox "" [ref=f3e407]
                  - generic [ref=f3e408]: 
              - cell [ref=f3e410]
              - cell "Auto45006 Automation81547" [ref=f3e411]
              - cell "(Deleted)" [ref=f3e413]
              - cell "2026-25-08" [ref=f3e415]
              - cell [ref=f3e417]
              - cell [ref=f3e418]:
                - generic [ref=f3e419]:
                  - button "" [ref=f3e420] [cursor=pointer]
                  - button "" [ref=f3e422] [cursor=pointer]
                  - button "" [ref=f3e424] [cursor=pointer]
            - row [ref=f3e427]:
              - cell "" [ref=f3e428]:
                - generic [ref=f3e431] [cursor=pointer]:
                  - checkbox "" [ref=f3e432]
                  - generic [ref=f3e433]: 
              - cell [ref=f3e435]
              - cell "Willa Della DuBuque" [ref=f3e436]
              - cell "(Deleted)" [ref=f3e438]
              - cell "2026-25-08" [ref=f3e440]
              - cell [ref=f3e442]
              - cell [ref=f3e443]:
                - generic [ref=f3e444]:
                  - button "" [ref=f3e445] [cursor=pointer]
                  - button "" [ref=f3e447] [cursor=pointer]
            - row [ref=f3e450]:
              - cell "" [ref=f3e451]:
                - generic [ref=f3e454] [cursor=pointer]:
                  - checkbox "" [ref=f3e455]
                  - generic [ref=f3e456]: 
              - cell [ref=f3e458]
              - cell "test qa jr" [ref=f3e459]
              - cell "(Deleted)" [ref=f3e461]
              - cell "2026-25-08" [ref=f3e463]
              - cell [ref=f3e465]
              - cell [ref=f3e466]:
                - generic [ref=f3e467]:
                  - button "" [ref=f3e468] [cursor=pointer]
                  - button "" [ref=f3e470] [cursor=pointer]
            - row [ref=f3e473]:
              - cell "" [ref=f3e474]:
                - generic [ref=f3e477] [cursor=pointer]:
                  - checkbox "" [ref=f3e478]
                  - generic [ref=f3e479]: 
              - cell "Junior Account Assistant" [ref=f3e481]
              - cell "First Mid Last" [ref=f3e483]
              - cell "(Deleted)" [ref=f3e485]
              - cell "2026-25-08" [ref=f3e487]
              - cell "Application Initiated" [ref=f3e489]
              - cell [ref=f3e491]:
                - generic [ref=f3e492]:
                  - button "" [ref=f3e493] [cursor=pointer]
                  - button "" [ref=f3e495] [cursor=pointer]
            - row [ref=f3e498]:
              - cell "" [ref=f3e499]:
                - generic [ref=f3e502] [cursor=pointer]:
                  - checkbox "" [ref=f3e503]
                  - generic [ref=f3e504]: 
              - cell "Payroll Administrator" [ref=f3e506]
              - cell "testing automation task" [ref=f3e508]
              - cell "Lucious Opens Sources" [ref=f3e510]
              - cell "2026-25-08" [ref=f3e512]
              - cell "Application Initiated" [ref=f3e514]
              - cell [ref=f3e516]:
                - generic [ref=f3e517]:
                  - button "" [ref=f3e518] [cursor=pointer]
                  - button "" [ref=f3e520] [cursor=pointer]
            - row [ref=f3e523]:
              - cell "" [ref=f3e524]:
                - generic [ref=f3e527] [cursor=pointer]:
                  - checkbox "" [ref=f3e528]
                  - generic [ref=f3e529]: 
              - cell [ref=f3e531]
              - cell "Tanmay Anderson O'Keefe" [ref=f3e532]
              - cell "(Deleted)" [ref=f3e534]
              - cell "2024-29-03" [ref=f3e536]
              - cell [ref=f3e538]
              - cell [ref=f3e539]:
                - generic [ref=f3e540]:
                  - button "" [ref=f3e541] [cursor=pointer]
                  - button "" [ref=f3e543] [cursor=pointer]
            - row [ref=f3e546]:
              - cell "" [ref=f3e547]:
                - generic [ref=f3e550] [cursor=pointer]:
                  - checkbox "" [ref=f3e551]
                  - generic [ref=f3e552]: 
              - cell [ref=f3e554]
              - cell "Tanmay sree Dachu" [ref=f3e555]
              - cell "(Deleted)" [ref=f3e557]
              - cell "2024-06-02" [ref=f3e559]
              - cell [ref=f3e561]
              - cell [ref=f3e562]:
                - generic [ref=f3e563]:
                  - button "" [ref=f3e564] [cursor=pointer]
                  - button "" [ref=f3e566] [cursor=pointer]
                  - button "" [ref=f3e568] [cursor=pointer]
            - row [ref=f3e571]:
              - cell "" [ref=f3e572]:
                - generic [ref=f3e575] [cursor=pointer]:
                  - checkbox "" [ref=f3e576]
                  - generic [ref=f3e577]: 
              - cell "Senior QA Lead" [ref=f3e579]
              - cell "John Doe" [ref=f3e581]
              - cell "(Deleted)" [ref=f3e583]
              - cell "2024-06-02" [ref=f3e585]
              - cell "Shortlisted" [ref=f3e587]
              - cell [ref=f3e589]:
                - generic [ref=f3e590]:
                  - button "" [ref=f3e591] [cursor=pointer]
                  - button "" [ref=f3e593] [cursor=pointer]
                  - button "" [ref=f3e595] [cursor=pointer]
            - row [ref=f3e598]:
              - cell "" [ref=f3e599]:
                - generic [ref=f3e602] [cursor=pointer]:
                  - checkbox "" [ref=f3e603]
                  - generic [ref=f3e604]: 
              - cell "Senior QA Lead" [ref=f3e606]
              - cell "John Doe" [ref=f3e608]
              - cell "(Deleted)" [ref=f3e610]
              - cell "2024-06-02" [ref=f3e612]
              - cell "Shortlisted" [ref=f3e614]
              - cell [ref=f3e616]:
                - generic [ref=f3e617]:
                  - button "" [ref=f3e618] [cursor=pointer]
                  - button "" [ref=f3e620] [cursor=pointer]
                  - button "" [ref=f3e622] [cursor=pointer]
            - row [ref=f3e625]:
              - cell "" [ref=f3e626]:
                - generic [ref=f3e629] [cursor=pointer]:
                  - checkbox "" [ref=f3e630]
                  - generic [ref=f3e631]: 
              - cell "Senior QA Lead" [ref=f3e633]
              - cell "John Doe" [ref=f3e635]
              - cell "(Deleted)" [ref=f3e637]
              - cell "2024-06-02" [ref=f3e639]
              - cell "Shortlisted" [ref=f3e641]
              - cell [ref=f3e643]:
                - generic [ref=f3e644]:
                  - button "" [ref=f3e645] [cursor=pointer]
                  - button "" [ref=f3e647] [cursor=pointer]
                  - button "" [ref=f3e649] [cursor=pointer]
            - row [ref=f3e652]:
              - cell "" [ref=f3e653]:
                - generic [ref=f3e656] [cursor=pointer]:
                  - checkbox "" [ref=f3e657]
                  - generic [ref=f3e658]: 
              - cell "Senior QA Lead" [ref=f3e660]
              - cell "John Doe" [ref=f3e662]
              - cell "(Deleted)" [ref=f3e664]
              - cell "2024-06-02" [ref=f3e666]
              - cell "Shortlisted" [ref=f3e668]
              - cell [ref=f3e670]:
                - generic [ref=f3e671]:
                  - button "" [ref=f3e672] [cursor=pointer]
                  - button "" [ref=f3e674] [cursor=pointer]
                  - button "" [ref=f3e676] [cursor=pointer]
            - row [ref=f3e679]:
              - cell "" [ref=f3e680]:
                - generic [ref=f3e683] [cursor=pointer]:
                  - checkbox "" [ref=f3e684]
                  - generic [ref=f3e685]: 
              - cell "Senior QA Lead" [ref=f3e687]
              - cell "John Doe" [ref=f3e689]
              - cell "(Deleted)" [ref=f3e691]
              - cell "2024-06-02" [ref=f3e693]
              - cell "Shortlisted" [ref=f3e695]
              - cell [ref=f3e697]:
                - generic [ref=f3e698]:
                  - button "" [ref=f3e699] [cursor=pointer]
                  - button "" [ref=f3e701] [cursor=pointer]
                  - button "" [ref=f3e703] [cursor=pointer]
            - row [ref=f3e706]:
              - cell "" [ref=f3e707]:
                - generic [ref=f3e710] [cursor=pointer]:
                  - checkbox "" [ref=f3e711]
                  - generic [ref=f3e712]: 
              - cell "Senior QA Lead" [ref=f3e714]
              - cell "John Doe" [ref=f3e716]
              - cell "(Deleted)" [ref=f3e718]
              - cell "2024-06-02" [ref=f3e720]
              - cell "Shortlisted" [ref=f3e722]
              - cell [ref=f3e724]:
                - generic [ref=f3e725]:
                  - button "" [ref=f3e726] [cursor=pointer]
                  - button "" [ref=f3e728] [cursor=pointer]
                  - button "" [ref=f3e730] [cursor=pointer]
            - row [ref=f3e733]:
              - cell "" [ref=f3e734]:
                - generic [ref=f3e737] [cursor=pointer]:
                  - checkbox "" [ref=f3e738]
                  - generic [ref=f3e739]: 
              - cell "Senior QA Lead" [ref=f3e741]
              - cell "John Doe" [ref=f3e743]
              - cell "(Deleted)" [ref=f3e745]
              - cell "2024-06-02" [ref=f3e747]
              - cell "Rejected" [ref=f3e749]
              - cell [ref=f3e751]:
                - generic [ref=f3e752]:
                  - button "" [ref=f3e753] [cursor=pointer]
                  - button "" [ref=f3e755] [cursor=pointer]
                  - button "" [ref=f3e757] [cursor=pointer]
            - row [ref=f3e760]:
              - cell "" [ref=f3e761]:
                - generic [ref=f3e764] [cursor=pointer]:
                  - checkbox "" [ref=f3e765]
                  - generic [ref=f3e766]: 
              - cell "Senior QA Lead" [ref=f3e768]
              - cell "John Doe" [ref=f3e770]
              - cell "(Deleted)" [ref=f3e772]
              - cell "2024-06-02" [ref=f3e774]
              - cell "Shortlisted" [ref=f3e776]
              - cell [ref=f3e778]:
                - generic [ref=f3e779]:
                  - button "" [ref=f3e780] [cursor=pointer]
                  - button "" [ref=f3e782] [cursor=pointer]
                  - button "" [ref=f3e784] [cursor=pointer]
            - row [ref=f3e787]:
              - cell "" [ref=f3e788]:
                - generic [ref=f3e791] [cursor=pointer]:
                  - checkbox "" [ref=f3e792]
                  - generic [ref=f3e793]: 
              - cell [ref=f3e795]
              - cell "Manu K M" [ref=f3e796]
              - cell "(Deleted)" [ref=f3e798]
              - cell "2024-06-02" [ref=f3e800]
              - cell [ref=f3e802]
              - cell [ref=f3e803]:
                - generic [ref=f3e804]:
                  - button "" [ref=f3e805] [cursor=pointer]
                  - button "" [ref=f3e807] [cursor=pointer]
            - row [ref=f3e810]:
              - cell "" [ref=f3e811]:
                - generic [ref=f3e814] [cursor=pointer]:
                  - checkbox "" [ref=f3e815]
                  - generic [ref=f3e816]: 
              - cell [ref=f3e818]
              - cell "Manu K M" [ref=f3e819]
              - cell "(Deleted)" [ref=f3e821]
              - cell "2024-06-02" [ref=f3e823]
              - cell [ref=f3e825]
              - cell [ref=f3e826]:
                - generic [ref=f3e827]:
                  - button "" [ref=f3e828] [cursor=pointer]
                  - button "" [ref=f3e830] [cursor=pointer]
            - row [ref=f3e833]:
              - cell "" [ref=f3e834]:
                - generic [ref=f3e837] [cursor=pointer]:
                  - checkbox "" [ref=f3e838]
                  - generic [ref=f3e839]: 
              - cell [ref=f3e841]
              - cell "Manu K M" [ref=f3e842]
              - cell "(Deleted)" [ref=f3e844]
              - cell "2024-06-02" [ref=f3e846]
              - cell [ref=f3e848]
              - cell [ref=f3e849]:
                - generic [ref=f3e850]:
                  - button "" [ref=f3e851] [cursor=pointer]
                  - button "" [ref=f3e853] [cursor=pointer]
            - row [ref=f3e856]:
              - cell "" [ref=f3e857]:
                - generic [ref=f3e860] [cursor=pointer]:
                  - checkbox "" [ref=f3e861]
                  - generic [ref=f3e862]: 
              - cell [ref=f3e864]
              - cell "madhav m" [ref=f3e865]
              - cell "(Deleted)" [ref=f3e867]
              - cell "2024-06-02" [ref=f3e869]
              - cell [ref=f3e871]
              - cell [ref=f3e872]:
                - generic [ref=f3e873]:
                  - button "" [ref=f3e874] [cursor=pointer]
                  - button "" [ref=f3e876] [cursor=pointer]
            - row [ref=f3e879]:
              - cell "" [ref=f3e880]:
                - generic [ref=f3e883] [cursor=pointer]:
                  - checkbox "" [ref=f3e884]
                  - generic [ref=f3e885]: 
              - cell [ref=f3e887]
              - cell "madhav m" [ref=f3e888]
              - cell "(Deleted)" [ref=f3e890]
              - cell "2024-06-02" [ref=f3e892]
              - cell [ref=f3e894]
              - cell [ref=f3e895]:
                - generic [ref=f3e896]:
                  - button "" [ref=f3e897] [cursor=pointer]
                  - button "" [ref=f3e899] [cursor=pointer]
            - row [ref=f3e902]:
              - cell "" [ref=f3e903]:
                - generic [ref=f3e906] [cursor=pointer]:
                  - checkbox "" [ref=f3e907]
                  - generic [ref=f3e908]: 
              - cell [ref=f3e910]
              - cell "madhav m" [ref=f3e911]
              - cell "(Deleted)" [ref=f3e913]
              - cell "2024-06-02" [ref=f3e915]
              - cell [ref=f3e917]
              - cell [ref=f3e918]:
                - generic [ref=f3e919]:
                  - button "" [ref=f3e920] [cursor=pointer]
                  - button "" [ref=f3e922] [cursor=pointer]
            - row [ref=f3e925]:
              - cell "" [ref=f3e926]:
                - generic [ref=f3e929] [cursor=pointer]:
                  - checkbox "" [ref=f3e930]
                  - generic [ref=f3e931]: 
              - cell [ref=f3e933]
              - cell "madhav m" [ref=f3e934]
              - cell "(Deleted)" [ref=f3e936]
              - cell "2024-06-02" [ref=f3e938]
              - cell [ref=f3e940]
              - cell [ref=f3e941]:
                - generic [ref=f3e942]:
                  - button "" [ref=f3e943] [cursor=pointer]
                  - button "" [ref=f3e945] [cursor=pointer]
            - row [ref=f3e948]:
              - cell "" [ref=f3e949]:
                - generic [ref=f3e952] [cursor=pointer]:
                  - checkbox "" [ref=f3e953]
                  - generic [ref=f3e954]: 
              - cell [ref=f3e956]
              - cell "madhav m" [ref=f3e957]
              - cell "(Deleted)" [ref=f3e959]
              - cell "2024-06-02" [ref=f3e961]
              - cell [ref=f3e963]
              - cell [ref=f3e964]:
                - generic [ref=f3e965]:
                  - button "" [ref=f3e966] [cursor=pointer]
                  - button "" [ref=f3e968] [cursor=pointer]
            - row [ref=f3e971]:
              - cell "" [ref=f3e972]:
                - generic [ref=f3e975] [cursor=pointer]:
                  - checkbox "" [ref=f3e976]
                  - generic [ref=f3e977]: 
              - cell [ref=f3e979]
              - cell "madhav m" [ref=f3e980]
              - cell "(Deleted)" [ref=f3e982]
              - cell "2024-06-02" [ref=f3e984]
              - cell [ref=f3e986]
              - cell [ref=f3e987]:
                - generic [ref=f3e988]:
                  - button "" [ref=f3e989] [cursor=pointer]
                  - button "" [ref=f3e991] [cursor=pointer]
            - row [ref=f3e994]:
              - cell "" [ref=f3e995]:
                - generic [ref=f3e998] [cursor=pointer]:
                  - checkbox "" [ref=f3e999]
                  - generic [ref=f3e1000]: 
              - cell "Senior QA Lead" [ref=f3e1002]
              - cell "Gautham Raj R" [ref=f3e1004]
              - cell "(Deleted)" [ref=f3e1006]
              - cell "2024-06-02" [ref=f3e1008]
              - cell "Rejected" [ref=f3e1010]
              - cell [ref=f3e1012]:
                - generic [ref=f3e1013]:
                  - button "" [ref=f3e1014] [cursor=pointer]
                  - button "" [ref=f3e1016] [cursor=pointer]
                  - button "" [ref=f3e1018] [cursor=pointer]
            - row [ref=f3e1021]:
              - cell "" [ref=f3e1022]:
                - generic [ref=f3e1025] [cursor=pointer]:
                  - checkbox "" [ref=f3e1026]
                  - generic [ref=f3e1027]: 
              - cell "Senior QA Lead" [ref=f3e1029]
              - cell "Gautham Raj R" [ref=f3e1031]
              - cell "(Deleted)" [ref=f3e1033]
              - cell "2024-06-02" [ref=f3e1035]
              - cell "Shortlisted" [ref=f3e1037]
              - cell [ref=f3e1039]:
                - generic [ref=f3e1040]:
                  - button "" [ref=f3e1041] [cursor=pointer]
                  - button "" [ref=f3e1043] [cursor=pointer]
                  - button "" [ref=f3e1045] [cursor=pointer]
            - row [ref=f3e1048]:
              - cell "" [ref=f3e1049]:
                - generic [ref=f3e1052] [cursor=pointer]:
                  - checkbox "" [ref=f3e1053]
                  - generic [ref=f3e1054]: 
              - cell "Senior QA Lead" [ref=f3e1056]
              - cell "Gautham Raj R" [ref=f3e1058]
              - cell "(Deleted)" [ref=f3e1060]
              - cell "2024-06-02" [ref=f3e1062]
              - cell "Shortlisted" [ref=f3e1064]
              - cell [ref=f3e1066]:
                - generic [ref=f3e1067]:
                  - button "" [ref=f3e1068] [cursor=pointer]
                  - button "" [ref=f3e1070] [cursor=pointer]
                  - button "" [ref=f3e1072] [cursor=pointer]
            - row [ref=f3e1075]:
              - cell "" [ref=f3e1076]:
                - generic [ref=f3e1079] [cursor=pointer]:
                  - checkbox "" [ref=f3e1080]
                  - generic [ref=f3e1081]: 
              - cell "Senior QA Lead" [ref=f3e1083]
              - cell "Gautham Raj R" [ref=f3e1085]
              - cell "(Deleted)" [ref=f3e1087]
              - cell "2024-06-02" [ref=f3e1089]
              - cell "Shortlisted" [ref=f3e1091]
              - cell [ref=f3e1093]:
                - generic [ref=f3e1094]:
                  - button "" [ref=f3e1095] [cursor=pointer]
                  - button "" [ref=f3e1097] [cursor=pointer]
                  - button "" [ref=f3e1099] [cursor=pointer]
            - row [ref=f3e1102]:
              - cell "" [ref=f3e1103]:
                - generic [ref=f3e1106] [cursor=pointer]:
                  - checkbox "" [ref=f3e1107]
                  - generic [ref=f3e1108]: 
              - cell "Senior QA Lead" [ref=f3e1110]
              - cell "Gautham Raj R" [ref=f3e1112]
              - cell "(Deleted)" [ref=f3e1114]
              - cell "2024-06-02" [ref=f3e1116]
              - cell "Application Initiated" [ref=f3e1118]
              - cell [ref=f3e1120]:
                - generic [ref=f3e1121]:
                  - button "" [ref=f3e1122] [cursor=pointer]
                  - button "" [ref=f3e1124] [cursor=pointer]
                  - button "" [ref=f3e1126] [cursor=pointer]
            - row [ref=f3e1129]:
              - cell "" [ref=f3e1130]:
                - generic [ref=f3e1133] [cursor=pointer]:
                  - checkbox "" [ref=f3e1134]
                  - generic [ref=f3e1135]: 
              - cell "Senior QA Lead" [ref=f3e1137]
              - cell "Gautham Raj R" [ref=f3e1139]
              - cell "(Deleted)" [ref=f3e1141]
              - cell "2024-06-02" [ref=f3e1143]
              - cell "Application Initiated" [ref=f3e1145]
              - cell [ref=f3e1147]:
                - generic [ref=f3e1148]:
                  - button "" [ref=f3e1149] [cursor=pointer]
                  - button "" [ref=f3e1151] [cursor=pointer]
                  - button "" [ref=f3e1153] [cursor=pointer]
            - row [ref=f3e1156]:
              - cell "" [ref=f3e1157]:
                - generic [ref=f3e1160] [cursor=pointer]:
                  - checkbox "" [ref=f3e1161]
                  - generic [ref=f3e1162]: 
              - cell "Senior QA Lead" [ref=f3e1164]
              - cell "Gautham Raj R" [ref=f3e1166]
              - cell "(Deleted)" [ref=f3e1168]
              - cell "2024-06-02" [ref=f3e1170]
              - cell "Shortlisted" [ref=f3e1172]
              - cell [ref=f3e1174]:
                - generic [ref=f3e1175]:
                  - button "" [ref=f3e1176] [cursor=pointer]
                  - button "" [ref=f3e1178] [cursor=pointer]
                  - button "" [ref=f3e1180] [cursor=pointer]
            - row [ref=f3e1183]:
              - cell "" [ref=f3e1184]:
                - generic [ref=f3e1187] [cursor=pointer]:
                  - checkbox "" [ref=f3e1188]
                  - generic [ref=f3e1189]: 
              - cell "Senior QA Lead" [ref=f3e1191]
              - cell "Gautham Raj R" [ref=f3e1193]
              - cell "(Deleted)" [ref=f3e1195]
              - cell "2024-06-02" [ref=f3e1197]
              - cell "Rejected" [ref=f3e1199]
              - cell [ref=f3e1201]:
                - generic [ref=f3e1202]:
                  - button "" [ref=f3e1203] [cursor=pointer]
                  - button "" [ref=f3e1205] [cursor=pointer]
                  - button "" [ref=f3e1207] [cursor=pointer]
            - row [ref=f3e1210]:
              - cell "" [ref=f3e1211]:
                - generic [ref=f3e1214] [cursor=pointer]:
                  - checkbox "" [ref=f3e1215]
                  - generic [ref=f3e1216]: 
              - cell "Senior QA Lead" [ref=f3e1218]
              - cell "Gautham Raj R" [ref=f3e1220]
              - cell "(Deleted)" [ref=f3e1222]
              - cell "2024-06-02" [ref=f3e1224]
              - cell "Shortlisted" [ref=f3e1226]
              - cell [ref=f3e1228]:
                - generic [ref=f3e1229]:
                  - button "" [ref=f3e1230] [cursor=pointer]
                  - button "" [ref=f3e1232] [cursor=pointer]
                  - button "" [ref=f3e1234] [cursor=pointer]
            - row [ref=f3e1237]:
              - cell "" [ref=f3e1238]:
                - generic [ref=f3e1241] [cursor=pointer]:
                  - checkbox "" [ref=f3e1242]
                  - generic [ref=f3e1243]: 
              - cell "Senior QA Lead" [ref=f3e1245]
              - cell "Gautham Raj R" [ref=f3e1247]
              - cell "(Deleted)" [ref=f3e1249]
              - cell "2024-06-02" [ref=f3e1251]
              - cell "Shortlisted" [ref=f3e1253]
              - cell [ref=f3e1255]:
                - generic [ref=f3e1256]:
                  - button "" [ref=f3e1257] [cursor=pointer]
                  - button "" [ref=f3e1259] [cursor=pointer]
                  - button "" [ref=f3e1261] [cursor=pointer]
            - row [ref=f3e1264]:
              - cell "" [ref=f3e1265]:
                - generic [ref=f3e1268] [cursor=pointer]:
                  - checkbox "" [ref=f3e1269]
                  - generic [ref=f3e1270]: 
              - cell "Senior QA Lead" [ref=f3e1272]
              - cell "Gautham Raj R" [ref=f3e1274]
              - cell "(Deleted)" [ref=f3e1276]
              - cell "2024-06-02" [ref=f3e1278]
              - cell "Shortlisted" [ref=f3e1280]
              - cell [ref=f3e1282]:
                - generic [ref=f3e1283]:
                  - button "" [ref=f3e1284] [cursor=pointer]
                  - button "" [ref=f3e1286] [cursor=pointer]
                  - button "" [ref=f3e1288] [cursor=pointer]
            - row [ref=f3e1291]:
              - cell "" [ref=f3e1292]:
                - generic [ref=f3e1295] [cursor=pointer]:
                  - checkbox "" [ref=f3e1296]
                  - generic [ref=f3e1297]: 
              - cell "Senior QA Lead" [ref=f3e1299]
              - cell "Gautham Raj R" [ref=f3e1301]
              - cell "(Deleted)" [ref=f3e1303]
              - cell "2024-06-02" [ref=f3e1305]
              - cell "Shortlisted" [ref=f3e1307]
              - cell [ref=f3e1309]:
                - generic [ref=f3e1310]:
                  - button "" [ref=f3e1311] [cursor=pointer]
                  - button "" [ref=f3e1313] [cursor=pointer]
                  - button "" [ref=f3e1315] [cursor=pointer]
            - row [ref=f3e1318]:
              - cell "" [ref=f3e1319]:
                - generic [ref=f3e1322] [cursor=pointer]:
                  - checkbox "" [ref=f3e1323]
                  - generic [ref=f3e1324]: 
              - cell "Senior QA Lead" [ref=f3e1326]
              - cell "Gautham Raj R" [ref=f3e1328]
              - cell "(Deleted)" [ref=f3e1330]
              - cell "2024-06-02" [ref=f3e1332]
              - cell "Shortlisted" [ref=f3e1334]
              - cell [ref=f3e1336]:
                - generic [ref=f3e1337]:
                  - button "" [ref=f3e1338] [cursor=pointer]
                  - button "" [ref=f3e1340] [cursor=pointer]
                  - button "" [ref=f3e1342] [cursor=pointer]
            - row [ref=f3e1345]:
              - cell "" [ref=f3e1346]:
                - generic [ref=f3e1349] [cursor=pointer]:
                  - checkbox "" [ref=f3e1350]
                  - generic [ref=f3e1351]: 
              - cell "Senior QA Lead" [ref=f3e1353]
              - cell "Cedric C Ross." [ref=f3e1355]
              - cell "(Deleted)" [ref=f3e1357]
              - cell "2024-06-02" [ref=f3e1359]
              - cell "Shortlisted" [ref=f3e1361]
              - cell [ref=f3e1363]:
                - generic [ref=f3e1364]:
                  - button "" [ref=f3e1365] [cursor=pointer]
                  - button "" [ref=f3e1367] [cursor=pointer]
                  - button "" [ref=f3e1369] [cursor=pointer]
            - row [ref=f3e1372]:
              - cell "" [ref=f3e1373]:
                - generic [ref=f3e1376] [cursor=pointer]:
                  - checkbox "" [ref=f3e1377]
                  - generic [ref=f3e1378]: 
              - cell "Senior QA Lead" [ref=f3e1380]
              - cell "Cedric C Ross." [ref=f3e1382]
              - cell "(Deleted)" [ref=f3e1384]
              - cell "2024-06-02" [ref=f3e1386]
              - cell "Shortlisted" [ref=f3e1388]
              - cell [ref=f3e1390]:
                - generic [ref=f3e1391]:
                  - button "" [ref=f3e1392] [cursor=pointer]
                  - button "" [ref=f3e1394] [cursor=pointer]
                  - button "" [ref=f3e1396] [cursor=pointer]
            - row [ref=f3e1399]:
              - cell "" [ref=f3e1400]:
                - generic [ref=f3e1403] [cursor=pointer]:
                  - checkbox "" [ref=f3e1404]
                  - generic [ref=f3e1405]: 
              - cell "Payroll Administrator" [ref=f3e1407]
              - cell "TestFN TestMN TestLN" [ref=f3e1409]
              - cell "Lucious Opens Sources" [ref=f3e1411]
              - cell "2024-06-02" [ref=f3e1413]
              - cell "Application Initiated" [ref=f3e1415]
              - cell [ref=f3e1417]:
                - generic [ref=f3e1418]:
                  - button "" [ref=f3e1419] [cursor=pointer]
                  - button "" [ref=f3e1421] [cursor=pointer]
            - row [ref=f3e1424]:
              - cell "" [ref=f3e1425]:
                - generic [ref=f3e1428] [cursor=pointer]:
                  - checkbox "" [ref=f3e1429]
                  - generic [ref=f3e1430]: 
              - cell "Payroll Administrator" [ref=f3e1432]
              - cell "TestFN TestMN TestLN" [ref=f3e1434]
              - cell "Lucious Opens Sources" [ref=f3e1436]
              - cell "2024-06-02" [ref=f3e1438]
              - cell "Application Initiated" [ref=f3e1440]
              - cell [ref=f3e1442]:
                - generic [ref=f3e1443]:
                  - button "" [ref=f3e1444] [cursor=pointer]
                  - button "" [ref=f3e1446] [cursor=pointer]
            - row [ref=f3e1449]:
              - cell "" [ref=f3e1450]:
                - generic [ref=f3e1453] [cursor=pointer]:
                  - checkbox "" [ref=f3e1454]
                  - generic [ref=f3e1455]: 
              - cell "Payroll Administrator" [ref=f3e1457]
              - cell "TestFN TestMN TestLN" [ref=f3e1459]
              - cell "Lucious Opens Sources" [ref=f3e1461]
              - cell "2024-06-02" [ref=f3e1463]
              - cell "Application Initiated" [ref=f3e1465]
              - cell [ref=f3e1467]:
                - generic [ref=f3e1468]:
                  - button "" [ref=f3e1469] [cursor=pointer]
                  - button "" [ref=f3e1471] [cursor=pointer]
                  - button "" [ref=f3e1473] [cursor=pointer]
            - row [ref=f3e1476]:
              - cell "" [ref=f3e1477]:
                - generic [ref=f3e1480] [cursor=pointer]:
                  - checkbox "" [ref=f3e1481]
                  - generic [ref=f3e1482]: 
              - cell "Payroll Administrator" [ref=f3e1484]
              - cell "TestFN TestMN TestLN" [ref=f3e1486]
              - cell "Lucious Opens Sources" [ref=f3e1488]
              - cell "2024-06-02" [ref=f3e1490]
              - cell "Application Initiated" [ref=f3e1492]
              - cell [ref=f3e1494]:
                - generic [ref=f3e1495]:
                  - button "" [ref=f3e1496] [cursor=pointer]
                  - button "" [ref=f3e1498] [cursor=pointer]
                  - button "" [ref=f3e1500] [cursor=pointer]
            - row [ref=f3e1503]:
              - cell "" [ref=f3e1504]:
                - generic [ref=f3e1507] [cursor=pointer]:
                  - checkbox "" [ref=f3e1508]
                  - generic [ref=f3e1509]: 
              - cell "Payroll Administrator" [ref=f3e1511]
              - cell "TestFN TestMN TestLN" [ref=f3e1513]
              - cell "Lucious Opens Sources" [ref=f3e1515]
              - cell "2024-06-02" [ref=f3e1517]
              - cell "Application Initiated" [ref=f3e1519]
              - cell [ref=f3e1521]:
                - generic [ref=f3e1522]:
                  - button "" [ref=f3e1523] [cursor=pointer]
                  - button "" [ref=f3e1525] [cursor=pointer]
                  - button "" [ref=f3e1527] [cursor=pointer]
            - row [ref=f3e1530]:
              - cell "" [ref=f3e1531]:
                - generic [ref=f3e1534] [cursor=pointer]:
                  - checkbox "" [ref=f3e1535]
                  - generic [ref=f3e1536]: 
              - cell "Payroll Administrator" [ref=f3e1538]
              - cell "TestFN TestMN TestLN" [ref=f3e1540]
              - cell "Lucious Opens Sources" [ref=f3e1542]
              - cell "2024-06-02" [ref=f3e1544]
              - cell "Application Initiated" [ref=f3e1546]
              - cell [ref=f3e1548]:
                - generic [ref=f3e1549]:
                  - button "" [ref=f3e1550] [cursor=pointer]
                  - button "" [ref=f3e1552] [cursor=pointer]
                  - button "" [ref=f3e1554] [cursor=pointer]
        - navigation "Pagination Navigation" [ref=f3e1557]:
          - list [ref=f3e1558]:
            - listitem [ref=f3e1559]:
              - button "1" [ref=f3e1560] [cursor=pointer]
            - listitem [ref=f3e1561]:
              - button "2" [ref=f3e1562] [cursor=pointer]
            - listitem [ref=f3e1563]:
              - button "" [ref=f3e1564] [cursor=pointer]
    - generic [ref=f3e1566]:
      - paragraph [ref=f3e1567]: OrangeHRM OS 5.9
      - paragraph [ref=f3e1568]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e1569] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  201 |       data.defaultDropdownValue,
  202 |     );
  203 | 
  204 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  205 |       data.defaultDropdownValue,
  206 |     );
  207 | 
  208 |     await expect(recruitmentPage.fromDateInput).toHaveValue(defaultFromDate);
  209 | 
  210 |     await expect(recruitmentPage.toDateInput).toHaveValue(defaultToDate);
  211 | 
  212 |     await expect(recruitmentPage.candidatesTable).toBeVisible();
  213 | 
  214 |     await expect(
  215 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  216 |     ).toBeVisible({
  217 |       timeout: 15_000,
  218 |     });
  219 |   });
  220 | 
  221 |   test("TC_RECRUITMENT_137 - Admin should filter Candidates by job title @positive @filter @regression", async ({
  222 |     navigationPage,
  223 |     recruitmentPage,
  224 |   }) => {
  225 |     // Read the configured Job Title from JSON.
  226 |     const data = recruitmentData.TC_RECRUITMENT_136;
  227 |     // Navigate to Recruitment → Candidates.
  228 |     await navigationPage.gotoRecruitment();
  229 |     await recruitmentPage.navigateToCandidate();
  230 |     // Select the configured Job Title.
  231 |     await recruitmentPage.selectDropdownOption(
  232 |       recruitmentPage.jobTitleDropdown,
  233 |       data.jobTitle,
  234 |     );
  235 |     // Verify the selected Job Title remains displayed.
  236 |     await expect(recruitmentPage.jobTitleDropdown).toContainText(data.jobTitle);
  237 |     // Click Search.
  238 |     await recruitmentPage.searchCandidates();
  239 |     // Wait for the loading spinner to disappear.
  240 |     await expect(recruitmentPage.loadingSpinner).toBeHidden();
  241 |     await expect(
  242 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  243 |     ).toBeVisible({
  244 |       timeout: 15_000,
  245 |     });
  246 | 
  247 |     const candidateCount = await recruitmentPage.candidateRows.count();
  248 | 
  249 |     if (candidateCount > 0) {
  250 |       await expect(recruitmentPage.candidateRows.first()).toBeVisible();
  251 |     } else {
  252 |       await expect(recruitmentPage.noRecordsFound).toBeVisible();
  253 |     }
  254 | 
  255 |     await recruitmentPage.restButton.click();
  256 | 
  257 |     await expect(recruitmentPage.jobTitleDropdown).toContainText(
  258 |       data.defaultDropdownValue,
  259 |     );
  260 |   });
  261 | 
  262 |   test("TC_RECRUITMENT_138 - Admin should filter Candidates by candidate status @positive @filter @regression", async ({
  263 |     navigationPage,
  264 |     recruitmentPage,
  265 |   }) => {
  266 |     // Read Candidate Status and default dropdown value from JSON.
  267 |     const data = recruitmentData.TC_RECRUITMENT_138;
  268 |     // Navigate to Recruitment → Candidates.
  269 |     await navigationPage.gotoRecruitment();
  270 |     await recruitmentPage.navigateToCandidate();
  271 |     // Select the configured Candidate Status.
  272 |     await recruitmentPage.selectDropdownOption(
  273 |       recruitmentPage.candidateStatusDropdown,
  274 |       data.candidateStatus,
  275 |     );
  276 |     // Verify Candidate Status remains selected.
  277 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  278 |       data.candidateStatus,
  279 |     );
  280 |     // Click Search.
  281 |     await recruitmentPage.searchCandidates();
  282 | 
  283 |     // Wait for the loading spinner to disappear.
  284 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  285 |       timeout: 20_000,
  286 |     });
  287 | 
  288 |     await expect(
  289 |       recruitmentPage.candidateRows.first().or(recruitmentPage.noRecordsFound),
  290 |     ).toBeVisible({
  291 |       timeout: 15_000,
  292 |     });
  293 |     const statusTexts = (await recruitmentPage.candidateRows
  294 |       .locator(".oxd-table-cell:nth-child(6)")
  295 |       .allTextContents())
  296 |       .map(text => text.trim())
  297 |       .filter(Boolean);
  298 | 
  299 |     if (statusTexts.length > 0) {
  300 |       for (const statusText of statusTexts) {
> 301 |         expect(statusText).toContain(data.candidateStatus);
      |                            ^ Error: expect(received).toContain(expected) // indexOf
  302 |       }
  303 |     } else {
  304 |       await expect(recruitmentPage.noRecordsFound).toBeVisible();
  305 |     }
  306 |     // Reset the filters.
  307 |     await recruitmentPage.restButton.click();
  308 |     // Verify Candidate Status returns to “-- Select --”.
  309 | 
  310 |     await expect(recruitmentPage.candidateStatusDropdown).toContainText(
  311 |       data.defaultDropdownValue,
  312 |     );
  313 |   });
  314 | 
  315 |   test("TC_RECRUITMENT_139 - Admin should filter Candidates by vacancy @positive @filter @regression", async ({
  316 |     navigationPage,
  317 |     recruitmentPage,
  318 |   }) => {
  319 |     const data = recruitmentData.TC_RECRUITMENT_139;
  320 |     await navigationPage.gotoRecruitment();
  321 |     await recruitmentPage.navigateToCandidate();
  322 |     const selectedVacancy = await recruitmentPage.selectFirstAvailableVacancy();
  323 | 
  324 |     await expect(recruitmentPage.vacancyDropdown).toContainText(
  325 |       selectedVacancy,
  326 |     );
  327 | 
  328 |     await recruitmentPage.searchCandidates();
  329 | 
  330 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  331 |       timeout: 20_000,
  332 |     });
  333 | 
  334 |     const vacancyTexts = await recruitmentPage.candidateRows
  335 |       .locator(".oxd-table-cell:nth-child(2)")
  336 |       .allTextContents();
  337 | 
  338 |     if (vacancyTexts.length > 0) {
  339 |       for (const vacancyText of vacancyTexts) {
  340 |         expect(vacancyText).toContain(selectedVacancy);
  341 |       }
  342 |     }
  343 | 
  344 |     await recruitmentPage.restButton.click();
  345 | 
  346 |     await expect(recruitmentPage.vacancyDropdown).toContainText(
  347 |       data.defaultDropdownValue,
  348 |     );
  349 |   });
  350 |   test("TC_RECRUITMENT_140 - Admin should filter Candidates by hiring manager @positive @filter @regression", async ({
  351 |     navigationPage,
  352 |     recruitmentPage,
  353 |   }) => {
  354 |     const data = recruitmentData.TC_RECRUITMENT_140;
  355 | 
  356 |     await navigationPage.gotoRecruitment();
  357 |     await recruitmentPage.navigateToCandidate();
  358 | 
  359 |     const selectedManager =
  360 |       await recruitmentPage.selectFirstAvailableHiringManager();
  361 | 
  362 |     await expect(recruitmentPage.hiringManagerDropdown).toContainText(
  363 |       selectedManager,
  364 |     );
  365 | 
  366 |     await recruitmentPage.searchCandidates();
  367 | 
  368 |     await expect(recruitmentPage.loadingSpinner).toBeHidden({
  369 |       timeout: 20_000,
  370 |     });
  371 | 
  372 |     const managerTexts = await recruitmentPage.candidateRows
  373 |       .locator(".oxd-table-cell:nth-child(4)")
  374 |       .allTextContents();
  375 | 
  376 |     if (managerTexts.length > 0) {
  377 |       const selectedNameParts = selectedManager.split(/\s+/).filter(Boolean);
  378 | 
  379 |       for (const managerText of managerTexts.filter(
  380 |         text => !/\(Deleted\)/i.test(text),
  381 |       )) {
  382 |         for (const namePart of selectedNameParts) {
  383 |           expect(managerText).toContain(namePart);
  384 |         }
  385 |       }
  386 |     }
  387 | 
  388 |     await recruitmentPage.restButton.click();
  389 | 
  390 |     await expect(recruitmentPage.hiringManagerDropdown).toContainText(
  391 |       data.defaultDropdownValue,
  392 |     );
  393 |   });
  394 | 
  395 |   test("TC_RECRUITMENT_141 - Admin should search for a candidate by name @positive @search @autocomplete @regression", async ({
  396 |     navigationPage,
  397 |     recruitmentPage,
  398 |   }) => {
  399 |     // Read the candidate-name search value from JSON.
  400 |     const data = recruitmentData.TC_RECRUITMENT_141;
  401 |     // Navigate to Recruitment → Candidates.
```