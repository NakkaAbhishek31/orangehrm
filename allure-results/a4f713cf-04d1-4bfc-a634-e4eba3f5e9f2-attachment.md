# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_036 - Enabled employee account should login successfully @positive @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:653:5

# Error details

```
Test timeout of 60000ms exceeded.
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
              - link "Leave" [ref=f7e21] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f7e25]:
              - link "Time" [ref=f7e26] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f7e33]:
              - link "My Info" [ref=f7e34] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f7e41]:
              - link "Performance" [ref=f7e42] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f7e51]:
              - link "Dashboard" [ref=f7e52] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f7e56]:
              - link "Directory" [ref=f7e57] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f7e61]:
              - link "Claim" [ref=f7e62] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f7e70]:
              - link "Buzz" [ref=f7e71] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f7e75]:
      - generic [ref=f7e76]:
        - generic [ref=f7e77]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f7e79]
        - list [ref=f7e81]:
          - listitem [ref=f7e82]:
            - generic [ref=f7e83] [cursor=pointer]:
              - img "profile picture" [ref=f7e84]
              - paragraph [ref=f7e85]: Auto1786074427043 User
              - generic [ref=f7e86]: 
      - navigation "Topbar Menu" [ref=f7e88]:
        - list [ref=f7e89]:
          - button "" [ref=f7e91] [cursor=pointer]
  - generic [ref=f7e93]:
    - generic [ref=f7e95]:
      - generic [ref=f7e97]:
        - generic [ref=f7e99]:
          - generic [ref=f7e100]: 
          - paragraph [ref=f7e101]: Time at Work
        - separator [ref=f7e102]
        - generic [ref=f7e104]:
          - generic [ref=f7e105]:
            - img "profile picture" [ref=f7e107]
            - generic [ref=f7e108]:
              - paragraph [ref=f7e109]: Not Punched In
              - paragraph
          - generic [ref=f7e110]:
            - generic [ref=f7e111]: 0h 0m Today
            - button "" [ref=f7e112] [cursor=pointer]
          - separator [ref=f7e114]
          - generic [ref=f7e115]:
            - generic [ref=f7e116]:
              - paragraph [ref=f7e117]: This Week
              - paragraph [ref=f7e118]: Aug 03 - Aug 09
            - generic [ref=f7e119]:
              - generic [ref=f7e120]: 
              - paragraph [ref=f7e121]: 0h 0m
      - generic [ref=f7e125]:
        - generic [ref=f7e127]:
          - generic [ref=f7e128]: 
          - paragraph [ref=f7e129]: My Actions
        - separator [ref=f7e130]
        - generic [ref=f7e132]:
          - img "No Content" [ref=f7e133]
          - paragraph [ref=f7e134]: No Pending Actions to Perform
      - generic [ref=f7e136]:
        - generic [ref=f7e138]:
          - generic [ref=f7e139]: 
          - paragraph [ref=f7e140]: Quick Launch
        - separator [ref=f7e141]
        - generic [ref=f7e143]:
          - generic [ref=f7e144]:
            - button "Apply Leave" [ref=f7e145] [cursor=pointer]
            - generic "Apply Leave" [ref=f7e148]:
              - paragraph [ref=f7e149]: Apply Leave
          - generic [ref=f7e150]:
            - button "My Leave" [ref=f7e151] [cursor=pointer]
            - generic "My Leave" [ref=f7e156]:
              - paragraph [ref=f7e157]: My Leave
          - generic [ref=f7e158]:
            - button "My Timesheet" [ref=f7e159] [cursor=pointer]
            - generic "My Timesheet" [ref=f7e162]:
              - paragraph [ref=f7e163]: My Timesheet
      - generic [ref=f7e165]:
        - generic [ref=f7e167]:
          - generic [ref=f7e168]: 
          - paragraph [ref=f7e169]: Buzz Latest Posts
        - separator [ref=f7e170]
        - generic [ref=f7e172]:
          - generic [ref=f7e173]:
            - generic [ref=f7e174] [cursor=pointer]:
              - img "profile picture" [ref=f7e176]
              - generic [ref=f7e177]:
                - paragraph [ref=f7e178]: Ge orged akh ild Russe lld
                - paragraph [ref=f7e179]: 2026-07-08 08:46 AM
            - separator [ref=f7e180]
            - paragraph [ref=f7e181]: Hi, I am Neelgagan
          - generic [ref=f7e182]:
            - generic [ref=f7e183] [cursor=pointer]:
              - img "profile picture" [ref=f7e185]
              - generic [ref=f7e186]:
                - paragraph [ref=f7e187]: Ge orged akh ild Russe lld
                - paragraph [ref=f7e188]: 2020-08-10 09:08 AM
            - separator [ref=f7e189]
            - paragraph [ref=f7e190]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
      - generic [ref=f7e192]:
        - paragraph [ref=f7e198]: Employees on Leave Today
        - separator [ref=f7e199]
        - generic [ref=f7e201]:
          - img "No Content" [ref=f7e202]
          - paragraph [ref=f7e203]: No Employees are on Leave Today
    - generic [ref=f7e204]:
      - paragraph [ref=f7e205]: OrangeHRM OS 5.9
      - paragraph [ref=f7e206]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f7e207] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```