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
    - banner [ref=f7e70]:
      - generic [ref=f7e71]:
        - generic [ref=f7e72]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f7e74]
        - list [ref=f7e76]:
          - listitem [ref=f7e77]:
            - generic [ref=f7e78] [cursor=pointer]:
              - img "profile picture" [ref=f7e79]
              - paragraph [ref=f7e80]: Auto1786007209581 User
              - generic [ref=f7e81]: 
      - navigation "Topbar Menu" [ref=f7e83]:
        - list [ref=f7e84]:
          - button "" [ref=f7e86] [cursor=pointer]
  - generic [ref=f7e88]:
    - generic [ref=f7e90]:
      - generic [ref=f7e92]:
        - generic [ref=f7e94]:
          - generic [ref=f7e95]: 
          - paragraph [ref=f7e96]: Time at Work
        - separator [ref=f7e97]
      - generic [ref=f7e101]:
        - generic [ref=f7e103]:
          - generic [ref=f7e104]: 
          - paragraph [ref=f7e105]: My Actions
        - separator [ref=f7e106]
        - generic [ref=f7e108]:
          - img "No Content" [ref=f7e109]
          - paragraph [ref=f7e110]: No Pending Actions to Perform
      - generic [ref=f7e112]:
        - generic [ref=f7e114]:
          - generic [ref=f7e115]: 
          - paragraph [ref=f7e116]: Quick Launch
        - separator [ref=f7e117]
      - generic [ref=f7e121]:
        - paragraph [ref=f7e127]: Employees on Leave Today
        - separator [ref=f7e128]
    - generic [ref=f7e131]:
      - paragraph [ref=f7e132]: OrangeHRM OS 5.9
      - paragraph [ref=f7e133]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f7e134] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```