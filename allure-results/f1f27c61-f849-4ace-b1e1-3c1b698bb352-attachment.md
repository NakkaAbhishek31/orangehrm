# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_143 - Admin should search Candidates using combined vacancy, status, and date filters @positive @filter @regression
- Location: tests\Recruitment\recruitment.spec.ts:490:7

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
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
              - paragraph [ref=f3e127]: Demo Source
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
                - generic [ref=f3e172]: Junior Account Assistant
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
                - textbox "From" [ref=f3e218]: 2026-29-05
                - generic [ref=f3e219] [cursor=pointer]: 
              - generic [ref=f3e220]: Should be a valid date in yyyy-mm-dd format
            - generic [ref=f3e222]:
              - generic [ref=f3e227]:
                - textbox "To" [ref=f3e228]: 2026-27-08
                - generic [ref=f3e229] [cursor=pointer]: 
              - generic [ref=f3e230]: Should be a valid date in yyyy-mm-dd format
          - generic [ref=f3e234]:
            - generic [ref=f3e235]: Method of Application
            - generic [ref=f3e239] [cursor=pointer]:
              - generic [ref=f3e240]: "-- Select --"
              - generic [ref=f3e241]: 
          - separator [ref=f3e243]
          - generic [ref=f3e244]:
            - button "Reset" [ref=f3e245] [cursor=pointer]
            - button "Search" [active] [ref=f3e246] [cursor=pointer]
      - generic [ref=f3e247]:
        - button " Add" [ref=f3e249] [cursor=pointer]:
          - generic [ref=f3e250]: 
          - text: Add
        - generic [ref=f3e251]:
          - separator [ref=f3e252]
          - generic [ref=f3e253]: (112) Records Found
        - table [ref=f3e256]:
          - rowgroup [ref=f3e257]:
            - row [ref=f3e258]:
              - columnheader "" [ref=f3e259]:
                - generic [ref=f3e261] [cursor=pointer]:
                  - checkbox "" [ref=f3e262]
                  - generic [ref=f3e263]: 
              - columnheader "Vacancy " [ref=f3e265]:
                - text: Vacancy
                - generic [ref=f3e266]:
                  - generic [ref=f3e267] [cursor=pointer]: 
                  - text:  
              - columnheader "Candidate " [ref=f3e268]:
                - text: Candidate
                - generic [ref=f3e269]:
                  - generic [ref=f3e270] [cursor=pointer]: 
                  - text:  
              - columnheader "Hiring Manager " [ref=f3e271]:
                - text: Hiring Manager
                - generic [ref=f3e272]:
                  - generic [ref=f3e273] [cursor=pointer]: 
                  - text:  
              - columnheader "Date of Application " [ref=f3e274]:
                - text: Date of Application
                - generic [ref=f3e275]:
                  - generic [ref=f3e276] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f3e277]:
                - text: Status
                - generic [ref=f3e278]:
                  - generic [ref=f3e279] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f3e280]
          - rowgroup [ref=f3e281]:
            - row [ref=f3e283]:
              - cell "" [ref=f3e284]:
                - generic [ref=f3e287] [cursor=pointer]:
                  - checkbox "" [ref=f3e288]
                  - generic [ref=f3e289]: 
              - cell "Junior Account Assistant" [ref=f3e291]
              - cell "asasdasf asdsa asmere" [ref=f3e293]
              - cell "(Deleted)" [ref=f3e295]
              - cell "2026-08-27" [ref=f3e297]
              - cell "Application Initiated" [ref=f3e299]
              - cell [ref=f3e301]:
                - generic [ref=f3e302]:
                  - button "" [ref=f3e303] [cursor=pointer]
                  - button "" [ref=f3e305] [cursor=pointer]
            - row [ref=f3e308]:
              - cell "" [ref=f3e309]:
                - generic [ref=f3e312] [cursor=pointer]:
                  - checkbox "" [ref=f3e313]
                  - generic [ref=f3e314]: 
              - cell "Junior Account Assistant" [ref=f3e316]
              - cell "asasdasf asdsa asmere" [ref=f3e318]
              - cell "(Deleted)" [ref=f3e320]
              - cell "2026-08-27" [ref=f3e322]
              - cell "Application Initiated" [ref=f3e324]
              - cell [ref=f3e326]:
                - generic [ref=f3e327]:
                  - button "" [ref=f3e328] [cursor=pointer]
                  - button "" [ref=f3e330] [cursor=pointer]
            - row [ref=f3e333]:
              - cell "" [ref=f3e334]:
                - generic [ref=f3e337] [cursor=pointer]:
                  - checkbox "" [ref=f3e338]
                  - generic [ref=f3e339]: 
              - cell "Junior Account Assistant" [ref=f3e341]
              - cell "asasdasf asdsa asmere" [ref=f3e343]
              - cell "(Deleted)" [ref=f3e345]
              - cell "2026-08-27" [ref=f3e347]
              - cell "Application Initiated" [ref=f3e349]
              - cell [ref=f3e351]:
                - generic [ref=f3e352]:
                  - button "" [ref=f3e353] [cursor=pointer]
                  - button "" [ref=f3e355] [cursor=pointer]
            - row [ref=f3e358]:
              - cell "" [ref=f3e359]:
                - generic [ref=f3e362] [cursor=pointer]:
                  - checkbox "" [ref=f3e363]
                  - generic [ref=f3e364]: 
              - cell "Junior Account Assistant" [ref=f3e366]
              - cell "asasdasf asdsa asmere" [ref=f3e368]
              - cell "(Deleted)" [ref=f3e370]
              - cell "2026-08-27" [ref=f3e372]
              - cell "Application Initiated" [ref=f3e374]
              - cell [ref=f3e376]:
                - generic [ref=f3e377]:
                  - button "" [ref=f3e378] [cursor=pointer]
                  - button "" [ref=f3e380] [cursor=pointer]
            - row [ref=f3e383]:
              - cell "" [ref=f3e384]:
                - generic [ref=f3e387] [cursor=pointer]:
                  - checkbox "" [ref=f3e388]
                  - generic [ref=f3e389]: 
              - cell "Junior Account Assistant" [ref=f3e391]
              - cell "asasdasf asdsa asmere" [ref=f3e393]
              - cell "(Deleted)" [ref=f3e395]
              - cell "2026-08-27" [ref=f3e397]
              - cell "Application Initiated" [ref=f3e399]
              - cell [ref=f3e401]:
                - generic [ref=f3e402]:
                  - button "" [ref=f3e403] [cursor=pointer]
                  - button "" [ref=f3e405] [cursor=pointer]
            - row [ref=f3e408]:
              - cell "" [ref=f3e409]:
                - generic [ref=f3e412] [cursor=pointer]:
                  - checkbox "" [ref=f3e413]
                  - generic [ref=f3e414]: 
              - cell "Junior Account Assistant" [ref=f3e416]
              - cell "asasdasf asdsa asmere" [ref=f3e418]
              - cell "(Deleted)" [ref=f3e420]
              - cell "2026-08-27" [ref=f3e422]
              - cell "Application Initiated" [ref=f3e424]
              - cell [ref=f3e426]:
                - generic [ref=f3e427]:
                  - button "" [ref=f3e428] [cursor=pointer]
                  - button "" [ref=f3e430] [cursor=pointer]
            - row [ref=f3e433]:
              - cell "" [ref=f3e434]:
                - generic [ref=f3e437] [cursor=pointer]:
                  - checkbox "" [ref=f3e438]
                  - generic [ref=f3e439]: 
              - cell "Junior Account Assistant" [ref=f3e441]
              - cell "asasdasf asdsa asmere" [ref=f3e443]
              - cell "(Deleted)" [ref=f3e445]
              - cell "2026-08-27" [ref=f3e447]
              - cell "Application Initiated" [ref=f3e449]
              - cell [ref=f3e451]:
                - generic [ref=f3e452]:
                  - button "" [ref=f3e453] [cursor=pointer]
                  - button "" [ref=f3e455] [cursor=pointer]
            - row [ref=f3e458]:
              - cell "" [ref=f3e459]:
                - generic [ref=f3e462] [cursor=pointer]:
                  - checkbox "" [ref=f3e463]
                  - generic [ref=f3e464]: 
              - cell [ref=f3e466]
              - cell "EmptyInterview1787819004146 Test Candidate" [ref=f3e467]
              - cell "(Deleted)" [ref=f3e469]
              - cell "2026-08-27" [ref=f3e471]
              - cell [ref=f3e473]
              - cell [ref=f3e474]:
                - generic [ref=f3e475]:
                  - button "" [ref=f3e476] [cursor=pointer]
                  - button "" [ref=f3e478] [cursor=pointer]
            - row [ref=f3e481]:
              - cell "" [ref=f3e482]:
                - generic [ref=f3e485] [cursor=pointer]:
                  - checkbox "" [ref=f3e486]
                  - generic [ref=f3e487]: 
              - cell [ref=f3e489]
              - cell "CancelInterview1787819019275 Test Candidate" [ref=f3e490]
              - cell "(Deleted)" [ref=f3e492]
              - cell "2026-08-27" [ref=f3e494]
              - cell [ref=f3e496]
              - cell [ref=f3e497]:
                - generic [ref=f3e498]:
                  - button "" [ref=f3e499] [cursor=pointer]
                  - button "" [ref=f3e501] [cursor=pointer]
            - row [ref=f3e504]:
              - cell "" [ref=f3e505]:
                - generic [ref=f3e508] [cursor=pointer]:
                  - checkbox "" [ref=f3e509]
                  - generic [ref=f3e510]: 
              - cell [ref=f3e512]
              - cell "EmptyInterview1787819122344 Test Candidate" [ref=f3e513]
              - cell "(Deleted)" [ref=f3e515]
              - cell "2026-08-27" [ref=f3e517]
              - cell [ref=f3e519]
              - cell [ref=f3e520]:
                - generic [ref=f3e521]:
                  - button "" [ref=f3e522] [cursor=pointer]
                  - button "" [ref=f3e524] [cursor=pointer]
            - row [ref=f3e527]:
              - cell "" [ref=f3e528]:
                - generic [ref=f3e531] [cursor=pointer]:
                  - checkbox "" [ref=f3e532]
                  - generic [ref=f3e533]: 
              - cell [ref=f3e535]
              - cell "CancelInterview1787819140688 Test Candidate" [ref=f3e536]
              - cell "(Deleted)" [ref=f3e538]
              - cell "2026-08-27" [ref=f3e540]
              - cell [ref=f3e542]
              - cell [ref=f3e543]:
                - generic [ref=f3e544]:
                  - button "" [ref=f3e545] [cursor=pointer]
                  - button "" [ref=f3e547] [cursor=pointer]
            - row [ref=f3e550]:
              - cell "" [ref=f3e551]:
                - generic [ref=f3e554] [cursor=pointer]:
                  - checkbox "" [ref=f3e555]
                  - generic [ref=f3e556]: 
              - cell [ref=f3e558]
              - cell "PassedInterview1787819149492 Test Candidate" [ref=f3e559]
              - cell "(Deleted)" [ref=f3e561]
              - cell "2026-08-27" [ref=f3e563]
              - cell [ref=f3e565]
              - cell [ref=f3e566]:
                - generic [ref=f3e567]:
                  - button "" [ref=f3e568] [cursor=pointer]
                  - button "" [ref=f3e570] [cursor=pointer]
            - row [ref=f3e573]:
              - cell "" [ref=f3e574]:
                - generic [ref=f3e577] [cursor=pointer]:
                  - checkbox "" [ref=f3e578]
                  - generic [ref=f3e579]: 
              - cell [ref=f3e581]
              - cell "EmptyInterview1787819224052 Test Candidate" [ref=f3e582]
              - cell "(Deleted)" [ref=f3e584]
              - cell "2026-08-27" [ref=f3e586]
              - cell [ref=f3e588]
              - cell [ref=f3e589]:
                - generic [ref=f3e590]:
                  - button "" [ref=f3e591] [cursor=pointer]
                  - button "" [ref=f3e593] [cursor=pointer]
            - row [ref=f3e596]:
              - cell "" [ref=f3e597]:
                - generic [ref=f3e600] [cursor=pointer]:
                  - checkbox "" [ref=f3e601]
                  - generic [ref=f3e602]: 
              - cell [ref=f3e604]
              - cell "FailedInterview1787819237681 Test Candidate" [ref=f3e605]
              - cell "(Deleted)" [ref=f3e607]
              - cell "2026-08-27" [ref=f3e609]
              - cell [ref=f3e611]
              - cell [ref=f3e612]:
                - generic [ref=f3e613]:
                  - button "" [ref=f3e614] [cursor=pointer]
                  - button "" [ref=f3e616] [cursor=pointer]
            - row [ref=f3e619]:
              - cell "" [ref=f3e620]:
                - generic [ref=f3e623] [cursor=pointer]:
                  - checkbox "" [ref=f3e624]
                  - generic [ref=f3e625]: 
              - cell [ref=f3e627]
              - cell "CancelInterview1787819244440 Test Candidate" [ref=f3e628]
              - cell "(Deleted)" [ref=f3e630]
              - cell "2026-08-27" [ref=f3e632]
              - cell [ref=f3e634]
              - cell [ref=f3e635]:
                - generic [ref=f3e636]:
                  - button "" [ref=f3e637] [cursor=pointer]
                  - button "" [ref=f3e639] [cursor=pointer]
            - row [ref=f3e642]:
              - cell "" [ref=f3e643]:
                - generic [ref=f3e646] [cursor=pointer]:
                  - checkbox "" [ref=f3e647]
                  - generic [ref=f3e648]: 
              - cell [ref=f3e650]
              - cell "PassedInterview1787819246620 Test Candidate" [ref=f3e651]
              - cell "(Deleted)" [ref=f3e653]
              - cell "2026-08-27" [ref=f3e655]
              - cell [ref=f3e657]
              - cell [ref=f3e658]:
                - generic [ref=f3e659]:
                  - button "" [ref=f3e660] [cursor=pointer]
                  - button "" [ref=f3e662] [cursor=pointer]
            - row [ref=f3e665]:
              - cell "" [ref=f3e666]:
                - generic [ref=f3e669] [cursor=pointer]:
                  - checkbox "" [ref=f3e670]
                  - generic [ref=f3e671]: 
              - cell [ref=f3e673]
              - cell "OfferJob1787819259142 Test Candidate" [ref=f3e674]
              - cell "(Deleted)" [ref=f3e676]
              - cell "2026-08-27" [ref=f3e678]
              - cell [ref=f3e680]
              - cell [ref=f3e681]:
                - generic [ref=f3e682]:
                  - button "" [ref=f3e683] [cursor=pointer]
                  - button "" [ref=f3e685] [cursor=pointer]
            - row [ref=f3e688]:
              - cell "" [ref=f3e689]:
                - generic [ref=f3e692] [cursor=pointer]:
                  - checkbox "" [ref=f3e693]
                  - generic [ref=f3e694]: 
              - cell [ref=f3e696]
              - cell "HireCandidate1787819280742 Test Candidate" [ref=f3e697]
              - cell "(Deleted)" [ref=f3e699]
              - cell "2026-08-27" [ref=f3e701]
              - cell [ref=f3e703]
              - cell [ref=f3e704]:
                - generic [ref=f3e705]:
                  - button "" [ref=f3e706] [cursor=pointer]
                  - button "" [ref=f3e708] [cursor=pointer]
            - row [ref=f3e711]:
              - cell "" [ref=f3e712]:
                - generic [ref=f3e715] [cursor=pointer]:
                  - checkbox "" [ref=f3e716]
                  - generic [ref=f3e717]: 
              - cell [ref=f3e719]
              - cell "RejectCandidate1787819303229 Test Candidate" [ref=f3e720]
              - cell "(Deleted)" [ref=f3e722]
              - cell "2026-08-27" [ref=f3e724]
              - cell [ref=f3e726]
              - cell [ref=f3e727]:
                - generic [ref=f3e728]:
                  - button "" [ref=f3e729] [cursor=pointer]
                  - button "" [ref=f3e731] [cursor=pointer]
            - row [ref=f3e734]:
              - cell "" [ref=f3e735]:
                - generic [ref=f3e738] [cursor=pointer]:
                  - checkbox "" [ref=f3e739]
                  - generic [ref=f3e740]: 
              - cell [ref=f3e742]
              - cell "FailedInterview1787819307112 Test Candidate" [ref=f3e743]
              - cell "(Deleted)" [ref=f3e745]
              - cell "2026-08-27" [ref=f3e747]
              - cell [ref=f3e749]
              - cell [ref=f3e750]:
                - generic [ref=f3e751]:
                  - button "" [ref=f3e752] [cursor=pointer]
                  - button "" [ref=f3e754] [cursor=pointer]
            - row [ref=f3e757]:
              - cell "" [ref=f3e758]:
                - generic [ref=f3e761] [cursor=pointer]:
                  - checkbox "" [ref=f3e762]
                  - generic [ref=f3e763]: 
              - cell [ref=f3e765]
              - cell "CancelReject1787819313962 Test Candidate" [ref=f3e766]
              - cell "(Deleted)" [ref=f3e768]
              - cell "2026-08-27" [ref=f3e770]
              - cell [ref=f3e772]
              - cell [ref=f3e773]:
                - generic [ref=f3e774]:
                  - button "" [ref=f3e775] [cursor=pointer]
                  - button "" [ref=f3e777] [cursor=pointer]
            - row [ref=f3e780]:
              - cell "" [ref=f3e781]:
                - generic [ref=f3e784] [cursor=pointer]:
                  - checkbox "" [ref=f3e785]
                  - generic [ref=f3e786]: 
              - cell [ref=f3e788]
              - cell "PassedInterview1787819321026 Test Candidate" [ref=f3e789]
              - cell "(Deleted)" [ref=f3e791]
              - cell "2026-08-27" [ref=f3e793]
              - cell [ref=f3e795]
              - cell [ref=f3e796]:
                - generic [ref=f3e797]:
                  - button "" [ref=f3e798] [cursor=pointer]
                  - button "" [ref=f3e800] [cursor=pointer]
            - row [ref=f3e803]:
              - cell "" [ref=f3e804]:
                - generic [ref=f3e807] [cursor=pointer]:
                  - checkbox "" [ref=f3e808]
                  - generic [ref=f3e809]: 
              - cell [ref=f3e811]
              - cell "OfferJob1787819332404 Test Candidate" [ref=f3e812]
              - cell "(Deleted)" [ref=f3e814]
              - cell "2026-08-27" [ref=f3e816]
              - cell [ref=f3e818]
              - cell [ref=f3e819]:
                - generic [ref=f3e820]:
                  - button "" [ref=f3e821] [cursor=pointer]
                  - button "" [ref=f3e823] [cursor=pointer]
            - row [ref=f3e826]:
              - cell "" [ref=f3e827]:
                - generic [ref=f3e830] [cursor=pointer]:
                  - checkbox "" [ref=f3e831]
                  - generic [ref=f3e832]: 
              - cell [ref=f3e834]
              - cell "HireCandidate1787819360327 Test Candidate" [ref=f3e835]
              - cell "(Deleted)" [ref=f3e837]
              - cell "2026-08-27" [ref=f3e839]
              - cell [ref=f3e841]
              - cell [ref=f3e842]:
                - generic [ref=f3e843]:
                  - button "" [ref=f3e844] [cursor=pointer]
                  - button "" [ref=f3e846] [cursor=pointer]
            - row [ref=f3e849]:
              - cell "" [ref=f3e850]:
                - generic [ref=f3e853] [cursor=pointer]:
                  - checkbox "" [ref=f3e854]
                  - generic [ref=f3e855]: 
              - cell [ref=f3e857]
              - cell "RejectCandidate1787819405385 Test Candidate" [ref=f3e858]
              - cell "(Deleted)" [ref=f3e860]
              - cell "2026-08-27" [ref=f3e862]
              - cell [ref=f3e864]
              - cell [ref=f3e865]:
                - generic [ref=f3e866]:
                  - button "" [ref=f3e867] [cursor=pointer]
                  - button "" [ref=f3e869] [cursor=pointer]
            - row [ref=f3e872]:
              - cell "" [ref=f3e873]:
                - generic [ref=f3e876] [cursor=pointer]:
                  - checkbox "" [ref=f3e877]
                  - generic [ref=f3e878]: 
              - cell [ref=f3e880]
              - cell "FailedInterview1787819420985 Test Candidate" [ref=f3e881]
              - cell "(Deleted)" [ref=f3e883]
              - cell "2026-08-27" [ref=f3e885]
              - cell [ref=f3e887]
              - cell [ref=f3e888]:
                - generic [ref=f3e889]:
                  - button "" [ref=f3e890] [cursor=pointer]
                  - button "" [ref=f3e892] [cursor=pointer]
            - row [ref=f3e895]:
              - cell "" [ref=f3e896]:
                - generic [ref=f3e899] [cursor=pointer]:
                  - checkbox "" [ref=f3e900]
                  - generic [ref=f3e901]: 
              - cell [ref=f3e903]
              - cell "CancelReject1787819424261 Test Candidate" [ref=f3e904]
              - cell "(Deleted)" [ref=f3e906]
              - cell "2026-08-27" [ref=f3e908]
              - cell [ref=f3e910]
              - cell [ref=f3e911]:
                - generic [ref=f3e912]:
                  - button "" [ref=f3e913] [cursor=pointer]
                  - button "" [ref=f3e915] [cursor=pointer]
            - row [ref=f3e918]:
              - cell "" [ref=f3e919]:
                - generic [ref=f3e922] [cursor=pointer]:
                  - checkbox "" [ref=f3e923]
                  - generic [ref=f3e924]: 
              - cell [ref=f3e926]
              - cell "OfferJob1787819452734 Test Candidate" [ref=f3e927]
              - cell "(Deleted)" [ref=f3e929]
              - cell "2026-08-27" [ref=f3e931]
              - cell [ref=f3e933]
              - cell [ref=f3e934]:
                - generic [ref=f3e935]:
                  - button "" [ref=f3e936] [cursor=pointer]
                  - button "" [ref=f3e938] [cursor=pointer]
            - row [ref=f3e941]:
              - cell "" [ref=f3e942]:
                - generic [ref=f3e945] [cursor=pointer]:
                  - checkbox "" [ref=f3e946]
                  - generic [ref=f3e947]: 
              - cell [ref=f3e949]
              - cell "HireCandidate1787819475053 Test Candidate" [ref=f3e950]
              - cell "(Deleted)" [ref=f3e952]
              - cell "2026-08-27" [ref=f3e954]
              - cell [ref=f3e956]
              - cell [ref=f3e957]:
                - generic [ref=f3e958]:
                  - button "" [ref=f3e959] [cursor=pointer]
                  - button "" [ref=f3e961] [cursor=pointer]
            - row [ref=f3e964]:
              - cell "" [ref=f3e965]:
                - generic [ref=f3e968] [cursor=pointer]:
                  - checkbox "" [ref=f3e969]
                  - generic [ref=f3e970]: 
              - cell [ref=f3e972]
              - cell "RejectCandidate1787819511261 Test Candidate" [ref=f3e973]
              - cell "(Deleted)" [ref=f3e975]
              - cell "2026-08-27" [ref=f3e977]
              - cell [ref=f3e979]
              - cell [ref=f3e980]:
                - generic [ref=f3e981]:
                  - button "" [ref=f3e982] [cursor=pointer]
                  - button "" [ref=f3e984] [cursor=pointer]
            - row [ref=f3e987]:
              - cell "" [ref=f3e988]:
                - generic [ref=f3e991] [cursor=pointer]:
                  - checkbox "" [ref=f3e992]
                  - generic [ref=f3e993]: 
              - cell [ref=f3e995]
              - cell "CancelReject1787819530535 Test Candidate" [ref=f3e996]
              - cell "(Deleted)" [ref=f3e998]
              - cell "2026-08-27" [ref=f3e1000]
              - cell [ref=f3e1002]
              - cell [ref=f3e1003]:
                - generic [ref=f3e1004]:
                  - button "" [ref=f3e1005] [cursor=pointer]
                  - button "" [ref=f3e1007] [cursor=pointer]
            - row [ref=f3e1010]:
              - cell "" [ref=f3e1011]:
                - generic [ref=f3e1014] [cursor=pointer]:
                  - checkbox "" [ref=f3e1015]
                  - generic [ref=f3e1016]: 
              - cell "Payroll Administrator" [ref=f3e1018]
              - cell "testing automation task" [ref=f3e1020]
              - cell "Demo Open Source" [ref=f3e1022]
              - cell "2026-08-27" [ref=f3e1024]
              - cell "Application Initiated" [ref=f3e1026]
              - cell [ref=f3e1028]:
                - generic [ref=f3e1029]:
                  - button "" [ref=f3e1030] [cursor=pointer]
                  - button "" [ref=f3e1032] [cursor=pointer]
            - row [ref=f3e1035]:
              - cell "" [ref=f3e1036]:
                - generic [ref=f3e1039] [cursor=pointer]:
                  - checkbox "" [ref=f3e1040]
                  - generic [ref=f3e1041]: 
              - cell [ref=f3e1043]
              - cell "AutoCandidate1787817993919 Test User" [ref=f3e1044]
              - cell "(Deleted)" [ref=f3e1046]
              - cell "2026-08-27" [ref=f3e1048]
              - cell [ref=f3e1050]
              - cell [ref=f3e1051]:
                - generic [ref=f3e1052]:
                  - button "" [ref=f3e1053] [cursor=pointer]
                  - button "" [ref=f3e1055] [cursor=pointer]
            - row [ref=f3e1058]:
              - cell "" [ref=f3e1059]:
                - generic [ref=f3e1062] [cursor=pointer]:
                  - checkbox "" [ref=f3e1063]
                  - generic [ref=f3e1064]: 
              - cell [ref=f3e1066]
              - cell "ResumeCandidate1787818008706 Test User" [ref=f3e1067]
              - cell "(Deleted)" [ref=f3e1069]
              - cell "2026-08-27" [ref=f3e1071]
              - cell [ref=f3e1073]
              - cell [ref=f3e1074]:
                - generic [ref=f3e1075]:
                  - button "" [ref=f3e1076] [cursor=pointer]
                  - button "" [ref=f3e1078] [cursor=pointer]
            - row [ref=f3e1081]:
              - cell "" [ref=f3e1082]:
                - generic [ref=f3e1085] [cursor=pointer]:
                  - checkbox "" [ref=f3e1086]
                  - generic [ref=f3e1087]: 
              - cell [ref=f3e1089]
              - cell "ProfileCandidate1787818062910 Test User" [ref=f3e1090]
              - cell "(Deleted)" [ref=f3e1092]
              - cell "2026-08-27" [ref=f3e1094]
              - cell [ref=f3e1096]
              - cell [ref=f3e1097]:
                - generic [ref=f3e1098]:
                  - button "" [ref=f3e1099] [cursor=pointer]
                  - button "" [ref=f3e1101] [cursor=pointer]
            - row [ref=f3e1104]:
              - cell "" [ref=f3e1105]:
                - generic [ref=f3e1108] [cursor=pointer]:
                  - checkbox "" [ref=f3e1109]
                  - generic [ref=f3e1110]: 
              - cell [ref=f3e1112]
              - cell "SearchCandidate1787818061899 Test User" [ref=f3e1113]
              - cell "(Deleted)" [ref=f3e1115]
              - cell "2026-08-27" [ref=f3e1117]
              - cell [ref=f3e1119]
              - cell [ref=f3e1120]:
                - generic [ref=f3e1121]:
                  - button "" [ref=f3e1122] [cursor=pointer]
                  - button "" [ref=f3e1124] [cursor=pointer]
            - row [ref=f3e1127]:
              - cell "" [ref=f3e1128]:
                - generic [ref=f3e1131] [cursor=pointer]:
                  - checkbox "" [ref=f3e1132]
                  - generic [ref=f3e1133]: 
              - cell [ref=f3e1135]
              - cell "EditCandidate1787818087596 Test User" [ref=f3e1136]
              - cell "(Deleted)" [ref=f3e1138]
              - cell "2026-08-27" [ref=f3e1140]
              - cell [ref=f3e1142]
              - cell [ref=f3e1143]:
                - generic [ref=f3e1144]:
                  - button "" [ref=f3e1145] [cursor=pointer]
                  - button "" [ref=f3e1147] [cursor=pointer]
            - row [ref=f3e1150]:
              - cell "" [ref=f3e1151]:
                - generic [ref=f3e1154] [cursor=pointer]:
                  - checkbox "" [ref=f3e1155]
                  - generic [ref=f3e1156]: 
              - cell [ref=f3e1158]
              - cell "CancelDeleteCandidate18086223 Test User" [ref=f3e1159]
              - cell "(Deleted)" [ref=f3e1161]
              - cell "2026-08-27" [ref=f3e1163]
              - cell [ref=f3e1165]
              - cell [ref=f3e1166]:
                - generic [ref=f3e1167]:
                  - button "" [ref=f3e1168] [cursor=pointer]
                  - button "" [ref=f3e1170] [cursor=pointer]
            - row [ref=f3e1173]:
              - cell "" [ref=f3e1174]:
                - generic [ref=f3e1177] [cursor=pointer]:
                  - checkbox "" [ref=f3e1178]
                  - generic [ref=f3e1179]: 
              - cell [ref=f3e1181]
              - cell "Shortlist1787818110503 Test User" [ref=f3e1182]
              - cell "(Deleted)" [ref=f3e1184]
              - cell "2026-08-27" [ref=f3e1186]
              - cell [ref=f3e1188]
              - cell [ref=f3e1189]:
                - generic [ref=f3e1190]:
                  - button "" [ref=f3e1191] [cursor=pointer]
                  - button "" [ref=f3e1193] [cursor=pointer]
            - row [ref=f3e1196]:
              - cell "" [ref=f3e1197]:
                - generic [ref=f3e1200] [cursor=pointer]:
                  - checkbox "" [ref=f3e1201]
                  - generic [ref=f3e1202]: 
              - cell [ref=f3e1204]
              - cell "AutoCandidate1787818829953 Test User" [ref=f3e1205]
              - cell "(Deleted)" [ref=f3e1207]
              - cell "2026-08-27" [ref=f3e1209]
              - cell [ref=f3e1211]
              - cell [ref=f3e1212]:
                - generic [ref=f3e1213]:
                  - button "" [ref=f3e1214] [cursor=pointer]
                  - button "" [ref=f3e1216] [cursor=pointer]
            - row [ref=f3e1219]:
              - cell "" [ref=f3e1220]:
                - generic [ref=f3e1223] [cursor=pointer]:
                  - checkbox "" [ref=f3e1224]
                  - generic [ref=f3e1225]: 
              - cell [ref=f3e1227]
              - cell "ResumeCandidate1787818833434 Test User" [ref=f3e1228]
              - cell "(Deleted)" [ref=f3e1230]
              - cell "2026-08-27" [ref=f3e1232]
              - cell [ref=f3e1234]
              - cell [ref=f3e1235]:
                - generic [ref=f3e1236]:
                  - button "" [ref=f3e1237] [cursor=pointer]
                  - button "" [ref=f3e1239] [cursor=pointer]
            - row [ref=f3e1242]:
              - cell "" [ref=f3e1243]:
                - generic [ref=f3e1246] [cursor=pointer]:
                  - checkbox "" [ref=f3e1247]
                  - generic [ref=f3e1248]: 
              - cell [ref=f3e1250]
              - cell "ProfileCandidate1787818901036 Test User" [ref=f3e1251]
              - cell "(Deleted)" [ref=f3e1253]
              - cell "2026-08-27" [ref=f3e1255]
              - cell [ref=f3e1257]
              - cell [ref=f3e1258]:
                - generic [ref=f3e1259]:
                  - button "" [ref=f3e1260] [cursor=pointer]
                  - button "" [ref=f3e1262] [cursor=pointer]
            - row [ref=f3e1265]:
              - cell "" [ref=f3e1266]:
                - generic [ref=f3e1269] [cursor=pointer]:
                  - checkbox "" [ref=f3e1270]
                  - generic [ref=f3e1271]: 
              - cell [ref=f3e1273]
              - cell "SearchCandidate1787818900824 Test User" [ref=f3e1274]
              - cell "(Deleted)" [ref=f3e1276]
              - cell "2026-08-27" [ref=f3e1278]
              - cell [ref=f3e1280]
              - cell [ref=f3e1281]:
                - generic [ref=f3e1282]:
                  - button "" [ref=f3e1283] [cursor=pointer]
                  - button "" [ref=f3e1285] [cursor=pointer]
            - row [ref=f3e1288]:
              - cell "" [ref=f3e1289]:
                - generic [ref=f3e1292] [cursor=pointer]:
                  - checkbox "" [ref=f3e1293]
                  - generic [ref=f3e1294]: 
              - cell [ref=f3e1296]
              - cell "Shortlist1787818928714 Test User" [ref=f3e1297]
              - cell "(Deleted)" [ref=f3e1299]
              - cell "2026-08-27" [ref=f3e1301]
              - cell [ref=f3e1303]
              - cell [ref=f3e1304]:
                - generic [ref=f3e1305]:
                  - button "" [ref=f3e1306] [cursor=pointer]
                  - button "" [ref=f3e1308] [cursor=pointer]
            - row [ref=f3e1311]:
              - cell "" [ref=f3e1312]:
                - generic [ref=f3e1315] [cursor=pointer]:
                  - checkbox "" [ref=f3e1316]
                  - generic [ref=f3e1317]: 
              - cell [ref=f3e1319]
              - cell "EditCandidate1787818927245 Test User" [ref=f3e1320]
              - cell "(Deleted)" [ref=f3e1322]
              - cell "2026-08-27" [ref=f3e1324]
              - cell [ref=f3e1326]
              - cell [ref=f3e1327]:
                - generic [ref=f3e1328]:
                  - button "" [ref=f3e1329] [cursor=pointer]
                  - button "" [ref=f3e1331] [cursor=pointer]
            - row [ref=f3e1334]:
              - cell "" [ref=f3e1335]:
                - generic [ref=f3e1338] [cursor=pointer]:
                  - checkbox "" [ref=f3e1339]
                  - generic [ref=f3e1340]: 
              - cell [ref=f3e1342]
              - cell "CancelDeleteCandidate18928746 Test User" [ref=f3e1343]
              - cell "(Deleted)" [ref=f3e1345]
              - cell "2026-08-27" [ref=f3e1347]
              - cell [ref=f3e1349]
              - cell [ref=f3e1350]:
                - generic [ref=f3e1351]:
                  - button "" [ref=f3e1352] [cursor=pointer]
                  - button "" [ref=f3e1354] [cursor=pointer]
            - row [ref=f3e1357]:
              - cell "" [ref=f3e1358]:
                - generic [ref=f3e1361] [cursor=pointer]:
                  - checkbox "" [ref=f3e1362]
                  - generic [ref=f3e1363]: 
              - cell [ref=f3e1365]
              - cell "Interview1787818999432 Test User" [ref=f3e1366]
              - cell "(Deleted)" [ref=f3e1368]
              - cell "2026-08-27" [ref=f3e1370]
              - cell [ref=f3e1372]
              - cell [ref=f3e1373]:
                - generic [ref=f3e1374]:
                  - button "" [ref=f3e1375] [cursor=pointer]
                  - button "" [ref=f3e1377] [cursor=pointer]
            - row [ref=f3e1380]:
              - cell "" [ref=f3e1381]:
                - generic [ref=f3e1384] [cursor=pointer]:
                  - checkbox "" [ref=f3e1385]
                  - generic [ref=f3e1386]: 
              - cell [ref=f3e1388]
              - cell "Shortlist1787819040774 Test User" [ref=f3e1389]
              - cell "(Deleted)" [ref=f3e1391]
              - cell "2026-08-27" [ref=f3e1393]
              - cell [ref=f3e1395]
              - cell [ref=f3e1396]:
                - generic [ref=f3e1397]:
                  - button "" [ref=f3e1398] [cursor=pointer]
                  - button "" [ref=f3e1400] [cursor=pointer]
            - row [ref=f3e1403]:
              - cell "" [ref=f3e1404]:
                - generic [ref=f3e1407] [cursor=pointer]:
                  - checkbox "" [ref=f3e1408]
                  - generic [ref=f3e1409]: 
              - cell [ref=f3e1411]
              - cell "EditCandidate1787819049406 Test User" [ref=f3e1412]
              - cell "(Deleted)" [ref=f3e1414]
              - cell "2026-08-27" [ref=f3e1416]
              - cell [ref=f3e1418]
              - cell [ref=f3e1419]:
                - generic [ref=f3e1420]:
                  - button "" [ref=f3e1421] [cursor=pointer]
                  - button "" [ref=f3e1423] [cursor=pointer]
            - row [ref=f3e1426]:
              - cell "" [ref=f3e1427]:
                - generic [ref=f3e1430] [cursor=pointer]:
                  - checkbox "" [ref=f3e1431]
                  - generic [ref=f3e1432]: 
              - cell [ref=f3e1434]
              - cell "Interview1787819131493 Test User" [ref=f3e1435]
              - cell "(Deleted)" [ref=f3e1437]
              - cell "2026-08-27" [ref=f3e1439]
              - cell [ref=f3e1441]
              - cell [ref=f3e1442]:
                - generic [ref=f3e1443]:
                  - button "" [ref=f3e1444] [cursor=pointer]
                  - button "" [ref=f3e1446] [cursor=pointer]
        - navigation "Pagination Navigation" [ref=f3e1449]:
          - list [ref=f3e1450]:
            - listitem [ref=f3e1451]:
              - button "1" [ref=f3e1452] [cursor=pointer]
            - listitem [ref=f3e1453]:
              - button "2" [ref=f3e1454] [cursor=pointer]
            - listitem [ref=f3e1455]:
              - button "3" [ref=f3e1456] [cursor=pointer]
            - listitem [ref=f3e1457]:
              - button "" [ref=f3e1458] [cursor=pointer]
    - generic [ref=f3e1460]:
      - paragraph [ref=f3e1461]: OrangeHRM OS 5.9
      - paragraph [ref=f3e1462]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e1463] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  458 |   })
  459 |   .locator('input');
  460 | 
  461 | this.interviewSaveButton = page.getByRole(
  462 |   'button',
  463 |   {
  464 |     name: 'Save',
  465 |     exact: true,
  466 |   }
  467 | );
  468 | 
  469 | this.interviewCancelButton = page.getByRole(
  470 |   'button',
  471 |   {
  472 |     name: 'Cancel',
  473 |     exact: true,
  474 |   }
  475 | );
  476 | this.markInterviewPassedButton =
  477 |   page.getByRole('button', {
  478 |     name: 'Mark Interview Passed',
  479 |     exact: true,
  480 |   });
  481 | 
  482 | this.markInterviewFailedButton =
  483 |   page.getByRole('button', {
  484 |     name: 'Mark Interview Failed',
  485 |     exact: true,
  486 |   });
  487 | 
  488 | this.offerJobButton =
  489 |   page.getByRole('button', {
  490 |     name: 'Offer Job',
  491 |     exact: true,
  492 |   });
  493 | 
  494 | this.hireCandidateButton =
  495 |   page.getByRole('button', {
  496 |     name: 'Hire',
  497 |     exact: true,
  498 |   });
  499 | 
  500 | this.workflowNotesInput = page
  501 |   .locator('form')
  502 |   .locator('textarea')
  503 |   .first();
  504 | 
  505 | this.workflowSaveButton = page
  506 |   .locator('form')
  507 |   .getByRole('button', {
  508 |     name: 'Save',
  509 |     exact: true,
  510 |   });
  511 | 
  512 | this.candidateStatusText = page
  513 |   .locator('.orangehrm-recruitment-status')
  514 |   .or(
  515 |     page.getByText(
  516 |       /^(Application Initiated|Shortlisted|Interview Scheduled|Interview Passed|Interview Failed|Job Offered|Hired|Rejected)$/,
  517 |       { exact: true }
  518 |     )
  519 |   )
  520 |   .first();
  521 | 
  522 | this.updateSuccessToast = page
  523 |   .locator('.oxd-toast-content-text')
  524 |   .filter({
  525 |     hasText: /Successfully Updated/i,
  526 |   });
  527 |     this.rejectButton = page.getByRole(
  528 |   'button',
  529 |   {
  530 |     name: 'Reject',
  531 |     exact: true,
  532 |   }
  533 | );
  534 | 
  535 | this.rejectCandidateHeading = page.getByRole(
  536 |   'heading',
  537 |   {
  538 |     name: 'Reject Candidate',
  539 |     exact: true,
  540 |   }
  541 | );
  542 | 
  543 | this.workflowCancelButton = page
  544 |   .locator('form')
  545 |   .getByRole('button', {
  546 |     name: 'Cancel',
  547 |     exact: true,
  548 |   });
  549 |   }
  550 | 
  551 |   async navigateToCandidate(): Promise<void> {
  552 |     await this.candidateLink.click();
  553 |     await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
  554 |     await expect(this.candidatePageHeading).toBeVisible();
  555 |   }
  556 | 
  557 |   async searchCandidates(): Promise<void> {
> 558 |     const candidatesResponse = this.page.waitForResponse(
      |                                          ^ TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
  559 |       (response) =>
  560 |         response.url().includes("/api/v2/recruitment/candidates") &&
  561 |         response.request().method() === "GET" &&
  562 |         response.ok(),
  563 |       { timeout: API_TIMEOUT },
  564 |     );
  565 | 
  566 |     await this.searchButton.click();
  567 |     await candidatesResponse;
  568 |     await expect(this.loadingSpinner).toBeHidden({ timeout: API_TIMEOUT });
  569 |   }
  570 | 
  571 |   async selectDropdownOption(
  572 |     dropdown: Locator,
  573 |     optionText: string,
  574 |   ): Promise<void> {
  575 |     await expect(dropdown).toBeVisible();
  576 |     await dropdown.click();
  577 | 
  578 |     const option = this.visibleDropdown()
  579 |       .locator(".oxd-select-option")
  580 |       .filter({
  581 |         hasText: new RegExp(`^\\s*${escapeRegExp(optionText)}\\s*$`, "i"),
  582 |       })
  583 |       .first();
  584 | 
  585 |     await expect(option).toBeVisible({ timeout: DEFAULT_TIMEOUT });
  586 |     await option.click();
  587 |     await expect(dropdown).toContainText(optionText);
  588 |   }
  589 | 
  590 |   async selectFirstAvailableVacancy(): Promise<string> {
  591 |     return this.selectFirstAvailableDropdownOption(this.vacancyDropdown);
  592 |   }
  593 | 
  594 |   async selectFirstAvailableHiringManager(): Promise<string> {
  595 |     return this.selectFirstAvailableDropdownOption(this.hiringManagerDropdown);
  596 |   }
  597 | 
  598 |   async selectFirstAvailableCandidate(searchText: string): Promise<string> {
  599 |     await this.candidateNameInput.fill(searchText);
  600 | 
  601 |     const dropdown = this.page.locator(".oxd-autocomplete-dropdown:visible");
  602 | 
  603 |     await expect(dropdown).toBeVisible({
  604 |       timeout: 15_000,
  605 |     });
  606 | 
  607 |     const options = dropdown.locator(".oxd-autocomplete-option").filter({
  608 |       hasNotText: /Searching|No Records Found/i,
  609 |     });
  610 | 
  611 |     const option = options.first();
  612 | 
  613 |     await expect(option).toBeVisible({
  614 |       timeout: 30_000,
  615 |     });
  616 | 
  617 |     await option.click();
  618 | 
  619 |     await expect(this.candidateNameInput).not.toHaveValue("");
  620 | 
  621 |     const selectedCandidate = await this.candidateNameInput.inputValue();
  622 | 
  623 |     return selectedCandidate;
  624 |   }
  625 | 
  626 |   private inputGroupByLabel(label: string): Locator {
  627 |     return this.page.locator(".oxd-input-group").filter({
  628 |       has: this.page.locator("label").getByText(label, { exact: true }),
  629 |     });
  630 |   }
  631 | 
  632 |   private dropdownByLabel(label: string): Locator {
  633 |     return this.inputGroupByLabel(label).locator(".oxd-select-text");
  634 |   }
  635 | 
  636 |   private visibleDropdown(): Locator {
  637 |     return this.page.locator(".oxd-select-dropdown:visible");
  638 |   }
  639 | 
  640 |   private async selectFirstAvailableDropdownOption(
  641 |     dropdown: Locator,
  642 |   ): Promise<string> {
  643 |     await expect(dropdown).toBeVisible();
  644 |     await dropdown.click();
  645 | 
  646 |     const options = this.visibleDropdown()
  647 |       .locator(".oxd-select-option")
  648 |       .filter({ hasNotText: /^(-- Select --|No Records Found)$/ });
  649 |     const firstOption = options.first();
  650 | 
  651 |     await expect(firstOption).toBeVisible({ timeout: DEFAULT_TIMEOUT });
  652 |     const selectedText = (await firstOption.innerText()).trim();
  653 | 
  654 |     await firstOption.click();
  655 |     await expect(dropdown).toContainText(selectedText);
  656 | 
  657 |     return selectedText;
  658 |   }
```