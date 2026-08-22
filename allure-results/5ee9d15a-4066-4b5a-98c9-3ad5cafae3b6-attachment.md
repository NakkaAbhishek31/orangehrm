# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_188 - Admin should add a new customer successfully @positive @create @project-info @regression
- Location: tests\Time\time.spec.ts:1059:6

# Error details

```
TimeoutError: locator.click: Timeout 70000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add', exact: true }).first()
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/time/addCustomer" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/time/addCustomer"

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Time" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Surya king
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Timesheets
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - generic [ref=f4e136]:
              - text: Attendance
              - generic [ref=f4e137]: 
          - listitem [ref=f4e138] [cursor=pointer]:
            - generic [ref=f4e139]:
              - text: Reports
              - generic [ref=f4e140]: 
          - listitem [ref=f4e141] [cursor=pointer]:
            - generic [ref=f4e142]:
              - text: Project Info
              - generic [ref=f4e143]: 
          - button "" [ref=f4e145] [cursor=pointer]
  - generic [ref=f4e147]:
    - generic [ref=f4e150]:
      - heading "Add Customer" [level=6] [ref=f4e151]
      - separator [ref=f4e152]
      - generic [ref=f4e153]:
        - generic [ref=f4e155]:
          - generic [ref=f4e156]: Name*
          - textbox [ref=f4e159]
        - generic [ref=f4e161]:
          - generic [ref=f4e162]: Description
          - textbox "Type description here" [ref=f4e165]
        - separator [ref=f4e166]
        - generic [ref=f4e167]:
          - paragraph [ref=f4e168]: "* Required"
          - button "Cancel" [ref=f4e169] [cursor=pointer]
          - button "Save" [ref=f4e170] [cursor=pointer]
    - generic [ref=f4e171]:
      - paragraph [ref=f4e172]: OrangeHRM OS 5.9
      - paragraph [ref=f4e173]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e174] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  976  |       new RegExp(
  977  |         `${data.customersUrlPath}$`
  978  |       )
  979  |     );
  980  | 
  981  |     await expect(
  982  |       timePage.customersHeading
  983  |     ).toBeVisible();
  984  |   }
  985  | );
  986  | 
  987  | test.only('TC_TIME_187 - Admin should cancel adding a new customer @negative @cancel @project-info @regression',
  988  |   async ({
  989  |     page,
  990  |     navigationPage,
  991  |     timePage,
  992  |   }) => {
  993  |     const data =
  994  |       timeData.TC_TIME_187;
  995  | 
  996  |     const customerName =
  997  |       `${data.customerNamePrefix}${Date.now()}`;
  998  | 
  999  |     await navigationPage.gotoTime();
  1000 | 
  1001 |     await timePage.gotoCustomers();
  1002 | 
  1003 |     await timePage.addCustomerButton.click();
  1004 | 
  1005 |     await expect(
  1006 |       timePage.addCustomerHeading
  1007 |     ).toBeVisible();
  1008 | 
  1009 |     await timePage.customerNameInput.fill(
  1010 |       customerName
  1011 |     );
  1012 | 
  1013 |     await timePage
  1014 |       .customerDescriptionInput
  1015 |       .fill(data.description);
  1016 | 
  1017 |     await expect(
  1018 |       timePage.customerNameInput
  1019 |     ).toHaveValue(customerName);
  1020 | 
  1021 |     await expect(
  1022 |       timePage.customerDescriptionInput
  1023 |     ).toHaveValue(data.description);
  1024 | 
  1025 |     // Cancel without saving.
  1026 |     await timePage.customerCancelButton.click();
  1027 | 
  1028 |     await expect(page).toHaveURL(
  1029 |       new RegExp(
  1030 |         `${data.customersUrlPath}$`
  1031 |       )
  1032 |     );
  1033 | 
  1034 |     await expect(
  1035 |       timePage.customersHeading
  1036 |     ).toBeVisible();
  1037 | 
  1038 |     // Verify the cancelled customer is not
  1039 |     // present in the current customer list.
  1040 |     const cancelledCustomerRow =
  1041 |       timePage.customerRows.filter({
  1042 |         has: page
  1043 |           .locator('.oxd-table-cell')
  1044 |           .nth(1)
  1045 |           .getByText(customerName, {
  1046 |             exact: true,
  1047 |           }),
  1048 |       });
  1049 | 
  1050 |     await expect(
  1051 |       cancelledCustomerRow
  1052 |     ).toHaveCount(0);
  1053 | 
  1054 |     await expect(
  1055 |       timePage.timeSuccessToast
  1056 |     ).not.toBeVisible();
  1057 |   }
  1058 | );
  1059 | test.only(
  1060 |   'TC_TIME_188 - Admin should add a new customer successfully @positive @create @project-info @regression',
  1061 |   async ({
  1062 |     page,
  1063 |     navigationPage,
  1064 |     timePage,
  1065 |   }) => {
  1066 |     const data =
  1067 |       timeData.TC_TIME_188;
  1068 | 
  1069 |     const customerName =
  1070 |       `${data.customerNamePrefix}${Date.now()}`;
  1071 | 
  1072 |     await navigationPage.gotoTime();
  1073 | 
  1074 |     await timePage.gotoCustomers();
  1075 | 
> 1076 |     await timePage.addCustomerButton.click();
       |                                      ^ TimeoutError: locator.click: Timeout 70000ms exceeded.
  1077 | 
  1078 |     await expect(
  1079 |       timePage.addCustomerHeading
  1080 |     ).toBeVisible();
  1081 | 
  1082 |     await timePage.customerNameInput.fill(
  1083 |       customerName
  1084 |     );
  1085 | 
  1086 |     await timePage
  1087 |       .customerDescriptionInput
  1088 |       .fill(data.description);
  1089 | 
  1090 |     const createResponsePromise =
  1091 |       page.waitForResponse(
  1092 |         response =>
  1093 |           response.url().includes(
  1094 |             '/api/v2/time/customers'
  1095 |           ) &&
  1096 |           response.request().method() === 'POST',
  1097 |         {
  1098 |           timeout: 30_000,
  1099 |         }
  1100 |       );
  1101 | 
  1102 |     const saveToastPromise =
  1103 |       timePage.timeSuccessToast.waitFor({
  1104 |         state: 'visible',
  1105 |         timeout: 15_000,
  1106 |       });
  1107 | 
  1108 |     await timePage.customerSaveButton.click();
  1109 | 
  1110 |     const createResponse =
  1111 |       await createResponsePromise;
  1112 | 
  1113 |     await saveToastPromise;
  1114 | 
  1115 |     const responseBody =
  1116 |       await createResponse.text();
  1117 | 
  1118 |     expect(
  1119 |       createResponse.ok(),
  1120 |       `Customer creation failed with ${createResponse.status()}: ${responseBody}`
  1121 |     ).toBeTruthy();
  1122 | 
  1123 |     await expect(page).toHaveURL(
  1124 |       /\/time\/viewCustomers$/
  1125 |     );
  1126 | 
  1127 |     const createdCustomerRow =
  1128 |       timePage.customerRows.filter({
  1129 |         has: page
  1130 |           .locator('.oxd-table-cell')
  1131 |           .nth(1)
  1132 |           .getByText(customerName, {
  1133 |             exact: true,
  1134 |           }),
  1135 |       });
  1136 | 
  1137 |     await expect(
  1138 |       createdCustomerRow
  1139 |     ).toHaveCount(1, {
  1140 |       timeout: 20_000,
  1141 |     });
  1142 | 
  1143 |     const cells =
  1144 |       createdCustomerRow.locator(
  1145 |         '.oxd-table-cell'
  1146 |       );
  1147 | 
  1148 |     await expect(
  1149 |       cells.nth(1)
  1150 |     ).toHaveText(customerName);
  1151 | 
  1152 |     await expect(
  1153 |       cells.nth(2)
  1154 |     ).toContainText(data.description);
  1155 | 
  1156 |     // Cleanup: delete the created customer.
  1157 |     const deleteButton =
  1158 |       createdCustomerRow
  1159 |         .getByRole('button')
  1160 |         .filter({
  1161 |           has: page.locator('i.bi-trash'),
  1162 |         });
  1163 | 
  1164 |     await deleteButton.click();
  1165 | 
  1166 |     const confirmationDialog =
  1167 |       page.getByRole('dialog');
  1168 | 
  1169 |     await expect(
  1170 |       confirmationDialog
  1171 |     ).toBeVisible();
  1172 | 
  1173 |     const deleteResponsePromise =
  1174 |       page.waitForResponse(
  1175 |         response =>
  1176 |           response.url().includes(
```