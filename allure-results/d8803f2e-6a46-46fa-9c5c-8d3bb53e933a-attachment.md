# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-attachments.spec.ts >> TC_PIM_012 - Admin should download an employee attachment @positive @download @regression
- Location: tests\PIM\pim-attachments.spec.ts:61:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
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
              - paragraph [ref=f3e127]: mandaa user
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
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e151]:
          - generic [ref=f3e152]:
            - generic [ref=f3e154]:
              - button "Choose File"
              - generic [ref=f3e155]:
                - img "profile picture" [ref=f3e157]
                - button "" [ref=f3e158] [cursor=pointer]
            - paragraph [ref=f3e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e161]:
            - generic [ref=f3e162]:
              - generic [ref=f3e165]:
                - generic [ref=f3e166]: Employee Full Name*
                - generic [ref=f3e168]:
                  - textbox "First Name" [ref=f3e171]: Auto1786452515474
                  - textbox "Middle Name" [ref=f3e174]: Test
                  - textbox "Last Name" [ref=f3e177]: User
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0484"
                - generic [ref=f3e185]: Employee Id already exists
            - separator [ref=f3e186]
            - generic [ref=f3e187]:
              - paragraph [ref=f3e188]: Create Login Details
              - checkbox [ref=f3e191]
        - separator [ref=f3e193]
        - generic [ref=f3e194]:
          - paragraph [ref=f3e195]: "* Required"
          - button "Cancel" [ref=f3e196] [cursor=pointer]
          - button "Save" [active] [ref=f3e197] [cursor=pointer]
    - generic [ref=f3e198]:
      - paragraph [ref=f3e199]: OrangeHRM OS 5.9
      - paragraph [ref=f3e200]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e201] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import { test } from "../../fixtures/baseTest";
  3   | 
  4   | test("TC_PIM_011 - Admin should upload an employee attachment @positive @upload @regression", async ({
  5   |   page,
  6   |   loginPage,
  7   |   navigationPage,
  8   |   pimPage,
  9   |   employeeAttachmentspage,
  10  | }) => {
  11  |   const firstName = `Auto${Date.now()}`;
  12  |   const middleName = "Test";
  13  |   const lastName = "User";
  14  |   const profilePicturePath = "test-data/OIP.jpg";
  15  |   const pdfAttachement = "test-data/employee-handbook-template.pdf";
  16  |   const attachmentComment = "Attachment PDF";
  17  |   await loginPage.visitPage();
  18  |   await loginPage.login("Admin", "admin123");
  19  |   await loginPage.verifyLoginSuccessful();
  20  | 
  21  |   await navigationPage.gotoPIM();
  22  |   await pimPage.gotoAddEmployee();
  23  | 
  24  |   const employeeId = await pimPage.addEmployee({
  25  |     firstName: firstName,
  26  |     middleName: middleName,
  27  |     lastName: lastName,
  28  |     profilePicturePath: profilePicturePath,
  29  |   });
  30  | 
  31  |   await page.waitForURL(/.*pim\/viewPersonalDetails\/empNumber\/\d+$/, {
  32  |     timeout: 60000, // 60 seconds
  33  |   });
  34  | 
  35  |   await employeeAttachmentspage.clickonuploadtheAttachement();
  36  |   await employeeAttachmentspage.attachmentFileInput.setInputFiles(
  37  |     pdfAttachement,
  38  |   );
  39  |   await employeeAttachmentspage.attachmentCommentInput.fill(attachmentComment);
  40  |   await expect(employeeAttachmentspage.attachmentFileInput).toHaveValue(
  41  |     /employee-handbook-template\.pdf$/,
  42  |   );
  43  |   await expect(employeeAttachmentspage.attachmentCommentInput).toHaveValue(
  44  |     attachmentComment,
  45  |   );
  46  |   await employeeAttachmentspage.saveUploadtheAttachement();
  47  |   await employeeAttachmentspage.verifyUploadedAttachment(
  48  |     "employee-handbook-template.pdf",
  49  |     "Attachment PDF",
  50  |   );
  51  |   await pimPage.gotoEmployeeList();
  52  |   await pimPage.filterEmployeeList({ employeeId });
  53  |   await pimPage.clickOnFilterSearch();
  54  |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  55  |   await pimPage.deleteEmployeeById(employeeId);
  56  |   await pimPage.filterEmployeeList({ employeeId });
  57  |   await pimPage.clickOnFilterSearch();
  58  |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  59  | });
  60  | 
  61  | test("TC_PIM_012 - Admin should download an employee attachment @positive @download @regression", async ({
  62  |   page,
  63  |   loginPage,
  64  |   navigationPage,
  65  |   pimPage,
  66  |   employeeAttachmentspage,
  67  | }) => {
  68  |   const firstName = `Auto${Date.now()}`;
  69  |   const middleName = "Test";
  70  |   const lastName = "User";
  71  |   const profilePicturePath = "test-data/OIP.jpg";
  72  |   const pdfAttachement = "test-data/employee-handbook-template.pdf";
  73  |   const attachmentComment = "Attachment PDF";
  74  |   await loginPage.visitPage();
  75  |   await loginPage.login("Admin", "admin123");
  76  |   await loginPage.verifyLoginSuccessful();
  77  | 
  78  |   await navigationPage.gotoPIM();
  79  |   await pimPage.gotoAddEmployee();
  80  | 
  81  |   const employeeId = await pimPage.addEmployee({
  82  |     firstName: firstName,
  83  |     middleName: middleName,
  84  |     lastName: lastName,
  85  |     profilePicturePath: profilePicturePath,
  86  |   });
  87  | 
> 88  |   await page.waitForURL(/.*pim\/viewPersonalDetails\/empNumber\/\d+$/, {
      |              ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
  89  |     timeout: 60000, // 60 seconds
  90  |   });
  91  | 
  92  |   await employeeAttachmentspage.clickonuploadtheAttachement();
  93  |   await employeeAttachmentspage.attachmentFileInput.setInputFiles(
  94  |     pdfAttachement,
  95  |   );
  96  |   await employeeAttachmentspage.attachmentCommentInput.fill(attachmentComment);
  97  |   await expect(employeeAttachmentspage.attachmentFileInput).toHaveValue(
  98  |     /employee-handbook-template\.pdf$/,
  99  |   );
  100 |   await expect(employeeAttachmentspage.attachmentCommentInput).toHaveValue(
  101 |     attachmentComment,
  102 |   );
  103 |   await employeeAttachmentspage.saveUploadtheAttachement();
  104 |   await employeeAttachmentspage.verifyUploadedAttachment(
  105 |     "employee-handbook-template.pdf",
  106 |     "Attachment PDF",
  107 |   );
  108 |   await pimPage.gotoEmployeeList();
  109 |   await pimPage.filterEmployeeList({ employeeId });
  110 |   await pimPage.clickOnFilterSearch();
  111 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  112 |   await pimPage.openEmployeeById(employeeId);
  113 |   const download = await employeeAttachmentspage.downloadAttachemnt(
  114 |     "employee-handbook-template.pdf",
  115 |   );
  116 |   expect(download.suggestedFilename()).toBe("employee-handbook-template.pdf");
  117 | });
  118 | 
```