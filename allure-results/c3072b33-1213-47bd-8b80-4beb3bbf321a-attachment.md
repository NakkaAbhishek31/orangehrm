# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_199 - Admin should edit an existing project successfully @positive @edit @project-info @regression
- Location: tests\Time\time.spec.ts:1580:6

# Error details

```
Error: No autocomplete option found for: UpdatedProject1787546450988 after 3 attempts
```

# Page snapshot

```yaml
- generic [ref=f11e3]:
  - generic:
    - complementary [ref=f11e4]:
      - navigation "Sidepanel" [ref=f11e5]:
        - generic [ref=f11e6]:
          - link [ref=f11e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f11e9]
          - text: 
        - generic [ref=f11e10]:
          - generic [ref=f11e11]:
            - generic [ref=f11e12]:
              - textbox "Search" [ref=f11e15]
              - button "" [ref=f11e16] [cursor=pointer]
            - separator [ref=f11e18]
          - list [ref=f11e19]:
            - listitem [ref=f11e20]:
              - link "Admin" [ref=f11e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f11e25]:
              - link "PIM" [ref=f11e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f11e41]:
              - link "Leave" [ref=f11e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f11e46]:
              - link "Time" [ref=f11e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f11e54]:
              - link "Recruitment" [ref=f11e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f11e62]:
              - link "My Info" [ref=f11e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f11e70]:
              - link "Performance" [ref=f11e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f11e80]:
              - link "Dashboard" [ref=f11e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f11e85]:
              - link "Directory" [ref=f11e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f11e90]:
              - link "Maintenance" [ref=f11e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f11e96]:
              - link "Claim" [ref=f11e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f11e105]:
              - link "Buzz" [ref=f11e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f11e110]:
      - generic [ref=f11e111]:
        - generic [ref=f11e112]:
          - text: 
          - generic [ref=f11e113]:
            - heading "Time" [level=6] [ref=f11e114]
            - heading "/ Project Info" [level=6] [ref=f11e115]
        - link [ref=f11e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f11e118] [cursor=pointer]
        - list [ref=f11e124]:
          - listitem [ref=f11e125]:
            - generic [ref=f11e126] [cursor=pointer]:
              - img "profile picture" [ref=f11e127]
              - paragraph [ref=f11e128]: Timothy Rice
              - generic [ref=f11e129]: 
      - navigation "Topbar Menu" [ref=f11e131]:
        - list [ref=f11e132]:
          - listitem [ref=f11e133] [cursor=pointer]:
            - generic [ref=f11e134]:
              - text: Timesheets
              - generic [ref=f11e135]: 
          - listitem [ref=f11e136] [cursor=pointer]:
            - generic [ref=f11e137]:
              - text: Attendance
              - generic [ref=f11e138]: 
          - listitem [ref=f11e139] [cursor=pointer]:
            - generic [ref=f11e140]:
              - text: Reports
              - generic [ref=f11e141]: 
          - listitem [ref=f11e142] [cursor=pointer]:
            - generic [ref=f11e143]:
              - text: Project Info
              - generic [ref=f11e144]: 
          - button "" [ref=f11e146] [cursor=pointer]
  - generic [ref=f11e148]:
    - generic [ref=f11e150]:
      - generic [ref=f11e151]:
        - generic [ref=f11e152]:
          - heading "Projects" [level=5] [ref=f11e154]
          - button "" [ref=f11e157] [cursor=pointer]
        - separator [ref=f11e159]
        - generic [ref=f11e161]:
          - generic [ref=f11e163]:
            - generic [ref=f11e165]:
              - generic [ref=f11e166]: Customer Name
              - textbox "Type for hints..." [ref=f11e171]
            - generic [ref=f11e173]:
              - generic [ref=f11e174]: Project
              - textbox "Type for hints..." [active] [ref=f11e179]: UpdatedProject1787546450988
            - generic [ref=f11e182]:
              - generic [ref=f11e183]: Project Admin
              - textbox "Type for hints..." [ref=f11e188]
          - separator [ref=f11e189]
          - generic [ref=f11e190]:
            - button "Reset" [ref=f11e191] [cursor=pointer]
            - button "Search" [ref=f11e192] [cursor=pointer]
      - generic [ref=f11e193]:
        - button " Add" [ref=f11e195] [cursor=pointer]:
          - generic [ref=f11e196]: 
          - text: Add
        - generic [ref=f11e197]:
          - separator [ref=f11e198]
          - generic [ref=f11e199]: (18) Records Found
        - table [ref=f11e202]:
          - rowgroup [ref=f11e203]:
            - row [ref=f11e204]:
              - columnheader "" [ref=f11e205]:
                - generic [ref=f11e207] [cursor=pointer]:
                  - checkbox "" [ref=f11e208]
                  - generic [ref=f11e209]: 
              - columnheader "Customer Name " [ref=f11e211]:
                - text: Customer Name
                - generic [ref=f11e212]:
                  - generic [ref=f11e213] [cursor=pointer]: 
                  - text:  
              - columnheader "Project " [ref=f11e214]:
                - text: Project
                - generic [ref=f11e215]:
                  - generic [ref=f11e216] [cursor=pointer]: 
                  - text:  
              - columnheader "Project Admins" [ref=f11e217]
              - columnheader "Actions" [ref=f11e218]
          - rowgroup [ref=f11e219]:
            - row [ref=f11e221]:
              - cell "" [ref=f11e222]:
                - generic [ref=f11e226]:
                  - checkbox "" [ref=f11e227]
                  - generic [ref=f11e228]: 
              - cell "ACME Ltd" [ref=f11e230]
              - cell "ACME Ltd" [ref=f11e232]
              - cell [ref=f11e234]
              - cell [ref=f11e235]:
                - generic [ref=f11e236]:
                  - button "" [ref=f11e237] [cursor=pointer]
                  - button "" [ref=f11e239] [cursor=pointer]
            - row [ref=f11e242]:
              - cell "" [ref=f11e243]:
                - generic [ref=f11e247]:
                  - checkbox "" [ref=f11e248]
                  - generic [ref=f11e249]: 
              - cell "Apache Software Foundation" [ref=f11e251]
              - cell "ASF - Phase 1" [ref=f11e253]
              - cell [ref=f11e255]
              - cell [ref=f11e256]:
                - generic [ref=f11e257]:
                  - button "" [ref=f11e258] [cursor=pointer]
                  - button "" [ref=f11e260] [cursor=pointer]
            - row [ref=f11e263]:
              - cell "" [ref=f11e264]:
                - generic [ref=f11e267] [cursor=pointer]:
                  - checkbox "" [ref=f11e268]
                  - generic [ref=f11e269]: 
              - cell "ProjectCustomer1787545006514" [ref=f11e271]
              - cell "AutoProject1787545006514" [ref=f11e273]
              - cell "A8DCo 010Z" [ref=f11e275]
              - cell [ref=f11e277]:
                - generic [ref=f11e278]:
                  - button "" [ref=f11e279] [cursor=pointer]
                  - button "" [ref=f11e281] [cursor=pointer]
            - row [ref=f11e284]:
              - cell "" [ref=f11e285]:
                - generic [ref=f11e288] [cursor=pointer]:
                  - checkbox "" [ref=f11e289]
                  - generic [ref=f11e290]: 
              - cell "CancelDeleteCustomer1787546387707" [ref=f11e292]
              - cell "CancelDeleteProject1787546387707" [ref=f11e294]
              - cell "A8DCo 010Z" [ref=f11e296]
              - cell [ref=f11e298]:
                - generic [ref=f11e299]:
                  - button "" [ref=f11e300] [cursor=pointer]
                  - button "" [ref=f11e302] [cursor=pointer]
            - row [ref=f11e305]:
              - cell "" [ref=f11e306]:
                - generic [ref=f11e310]:
                  - checkbox "" [ref=f11e311]
                  - generic [ref=f11e312]: 
              - cell "The Coca-Cola Company" [ref=f11e314]
              - cell "Coke - Phase 1" [ref=f11e316]
              - cell [ref=f11e318]
              - cell [ref=f11e319]:
                - generic [ref=f11e320]:
                  - button "" [ref=f11e321] [cursor=pointer]
                  - button "" [ref=f11e323] [cursor=pointer]
            - row [ref=f11e326]:
              - cell "" [ref=f11e327]:
                - generic [ref=f11e330] [cursor=pointer]:
                  - checkbox "" [ref=f11e331]
                  - generic [ref=f11e332]: 
              - cell "DuplicateCustomer1787546080407" [ref=f11e334]
              - cell "DuplicateProject1787546080407" [ref=f11e336]
              - cell "A8DCo 010Z" [ref=f11e338]
              - cell [ref=f11e340]:
                - generic [ref=f11e341]:
                  - button "" [ref=f11e342] [cursor=pointer]
                  - button "" [ref=f11e344] [cursor=pointer]
            - row [ref=f11e347]:
              - cell "" [ref=f11e348]:
                - generic [ref=f11e351] [cursor=pointer]:
                  - checkbox "" [ref=f11e352]
                  - generic [ref=f11e353]: 
              - cell "EditCustomer1787546021278" [ref=f11e355]
              - cell "EditProject1787546021278" [ref=f11e357]
              - cell "A8DCo 010Z" [ref=f11e359]
              - cell [ref=f11e361]:
                - generic [ref=f11e362]:
                  - button "" [ref=f11e363] [cursor=pointer]
                  - button "" [ref=f11e365] [cursor=pointer]
            - row [ref=f11e368]:
              - cell "" [ref=f11e369]:
                - generic [ref=f11e372] [cursor=pointer]:
                  - checkbox "" [ref=f11e373]
                  - generic [ref=f11e374]: 
              - cell "EditCustomer1787546450988" [ref=f11e376]
              - cell "EditProject1787546450988" [ref=f11e378]
              - cell "A8DCo 010Z" [ref=f11e380]
              - cell [ref=f11e382]:
                - generic [ref=f11e383]:
                  - button "" [ref=f11e384] [cursor=pointer]
                  - button "" [ref=f11e386] [cursor=pointer]
            - row [ref=f11e389]:
              - cell "" [ref=f11e390]:
                - generic [ref=f11e393] [cursor=pointer]:
                  - checkbox "" [ref=f11e394]
                  - generic [ref=f11e395]: 
              - cell "FilterCustomer1787545119909" [ref=f11e397]
              - cell "FilterProject1787545119909" [ref=f11e399]
              - cell "A8DCo 010Z" [ref=f11e401]
              - cell [ref=f11e403]:
                - generic [ref=f11e404]:
                  - button "" [ref=f11e405] [cursor=pointer]
                  - button "" [ref=f11e407] [cursor=pointer]
            - row [ref=f11e410]:
              - cell "" [ref=f11e411]:
                - generic [ref=f11e415]:
                  - checkbox "" [ref=f11e416]
                  - generic [ref=f11e417]: 
              - cell "Fresh Books Software Ltd" [ref=f11e419]
              - cell "Fresh Books Software Ltd - Phase I" [ref=f11e421]
              - cell [ref=f11e423]
              - cell [ref=f11e424]:
                - generic [ref=f11e425]:
                  - button "" [ref=f11e426] [cursor=pointer]
                  - button "" [ref=f11e428] [cursor=pointer]
            - row [ref=f11e431]:
              - cell "" [ref=f11e432]:
                - generic [ref=f11e436]:
                  - checkbox "" [ref=f11e437]
                  - generic [ref=f11e438]: 
              - cell "FreeWave Technologies, Inc." [ref=f11e440]
              - cell "FWT - Phase 1" [ref=f11e442]
              - cell [ref=f11e444]
              - cell [ref=f11e445]:
                - generic [ref=f11e446]:
                  - button "" [ref=f11e447] [cursor=pointer]
                  - button "" [ref=f11e449] [cursor=pointer]
            - row [ref=f11e452]:
              - cell "" [ref=f11e453]:
                - generic [ref=f11e457]:
                  - checkbox "" [ref=f11e458]
                  - generic [ref=f11e459]: 
              - cell "Internal" [ref=f11e461]
              - cell "General HR Tasks" [ref=f11e463]
              - cell "Timothy Rice" [ref=f11e465]
              - cell [ref=f11e467]:
                - generic [ref=f11e468]:
                  - button "" [ref=f11e469] [cursor=pointer]
                  - button "" [ref=f11e471] [cursor=pointer]
            - row [ref=f11e474]:
              - cell "" [ref=f11e475]:
                - generic [ref=f11e479]:
                  - checkbox "" [ref=f11e480]
                  - generic [ref=f11e481]: 
              - cell "Global Corp and Co" [ref=f11e483]
              - cell "Global Software phase - 1" [ref=f11e485]
              - cell [ref=f11e487]
              - cell [ref=f11e488]:
                - generic [ref=f11e489]:
                  - button "" [ref=f11e490] [cursor=pointer]
                  - button "" [ref=f11e492] [cursor=pointer]
            - row [ref=f11e495]:
              - cell "" [ref=f11e496]:
                - generic [ref=f11e500]:
                  - checkbox "" [ref=f11e501]
                  - generic [ref=f11e502]: 
              - cell "Global Corp and Co" [ref=f11e504]
              - cell "Global Software phase - 2" [ref=f11e506]
              - cell [ref=f11e508]
              - cell [ref=f11e509]:
                - generic [ref=f11e510]:
                  - button "" [ref=f11e511] [cursor=pointer]
                  - button "" [ref=f11e513] [cursor=pointer]
            - row [ref=f11e516]:
              - cell "" [ref=f11e517]:
                - generic [ref=f11e521]:
                  - checkbox "" [ref=f11e522]
                  - generic [ref=f11e523]: 
              - cell "The Priceline Group" [ref=f11e525]
              - cell "Priceline Group - Phase 1" [ref=f11e527]
              - cell "Timothy Rice" [ref=f11e529]
              - cell [ref=f11e531]:
                - generic [ref=f11e532]:
                  - button "" [ref=f11e533] [cursor=pointer]
                  - button "" [ref=f11e535] [cursor=pointer]
            - row [ref=f11e538]:
              - cell "" [ref=f11e539]:
                - generic [ref=f11e543]:
                  - checkbox "" [ref=f11e544]
                  - generic [ref=f11e545]: 
              - cell "Internal" [ref=f11e547]
              - cell "Recruitment" [ref=f11e549]
              - cell "Timothy Rice" [ref=f11e551]
              - cell [ref=f11e553]:
                - generic [ref=f11e554]:
                  - button "" [ref=f11e555] [cursor=pointer]
                  - button "" [ref=f11e557] [cursor=pointer]
            - row [ref=f11e560]:
              - cell "" [ref=f11e561]:
                - generic [ref=f11e564] [cursor=pointer]:
                  - checkbox "" [ref=f11e565]
                  - generic [ref=f11e566]: 
              - cell "SearchCustomer1787545063045" [ref=f11e568]
              - cell "SearchProject1787545063045" [ref=f11e570]
              - cell "A8DCo 010Z" [ref=f11e572]
              - cell [ref=f11e574]:
                - generic [ref=f11e575]:
                  - button "" [ref=f11e576] [cursor=pointer]
                  - button "" [ref=f11e578] [cursor=pointer]
            - row [ref=f11e581]:
              - cell "" [ref=f11e582]:
                - generic [ref=f11e586]:
                  - checkbox "" [ref=f11e587]
                  - generic [ref=f11e588]: 
              - cell "Internal" [ref=f11e590]
              - cell "Training and Development" [ref=f11e592]
              - cell "Timothy Rice" [ref=f11e594]
              - cell [ref=f11e596]:
                - generic [ref=f11e597]:
                  - button "" [ref=f11e598] [cursor=pointer]
                  - button "" [ref=f11e600] [cursor=pointer]
    - generic [ref=f11e603]:
      - paragraph [ref=f11e604]: OrangeHRM OS 5.9
      - paragraph [ref=f11e605]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f11e606] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1065 |       exact: true,
  1066 |     });
  1067 | 
  1068 |   await expect(
  1069 |     punchInOutLink
  1070 |   ).toBeVisible();
  1071 | 
  1072 |   await punchInOutLink.click();
  1073 | 
  1074 |   await this.page.waitForURL(
  1075 |     /\/attendance\/punchIn$/,
  1076 |     {
  1077 |       timeout: 30_000,
  1078 |     }
  1079 |   );
  1080 | 
  1081 |   await expect(
  1082 |     this.punchHeading
  1083 |   ).toBeVisible();
  1084 | 
  1085 |   await expect(
  1086 |     this.punchActionButton
  1087 |   ).toBeVisible();
  1088 | }
  1089 | 
  1090 | async ensurePunchDateAndTime(): Promise<{
  1091 |   date: string;
  1092 |   time: string;
  1093 | }> {
  1094 |   const now = new Date();
  1095 | 
  1096 |   let date = await this.punchDateInput.inputValue();
  1097 |   let time = await this.punchTimeInput.inputValue();
  1098 | 
  1099 |   if (!date.trim()) {
  1100 |     const year = now.getFullYear();
  1101 |     const day = String(now.getDate()).padStart(2, "0");
  1102 |     const month = String(now.getMonth() + 1).padStart(2, "0");
  1103 |     date = `${year}-${day}-${month}`;
  1104 |     await this.punchDateInput.fill(date);
  1105 |   }
  1106 | 
  1107 |   if (!time.trim()) {
  1108 |     const hours = String(now.getHours()).padStart(2, "0");
  1109 |     const minutes = String(now.getMinutes()).padStart(2, "0");
  1110 |     time = `${hours}:${minutes}`;
  1111 |     await this.punchTimeInput.fill(time);
  1112 |   }
  1113 | 
  1114 |   await expect(this.punchDateInput).toHaveValue(date);
  1115 |   await expect(this.punchTimeInput).toHaveValue(time);
  1116 | 
  1117 |   return { date, time };
  1118 | }
  1119 | async selectAutocompleteOption(
  1120 |   input: Locator,
  1121 |   searchText: string,
  1122 |   expectedText?: string
  1123 | ): Promise<string> {
  1124 |   const maxAttempts = 3;
  1125 | 
  1126 |   for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  1127 |     await input.fill(searchText);
  1128 | 
  1129 |     await expect(this.visibleAutocompleteDropdown).toBeVisible({
  1130 |       timeout: 20_000,
  1131 |     });
  1132 | 
  1133 |     let validOptions = this.autocompleteOptions.filter({
  1134 |       hasNotText: /Searching|No Records Found/i,
  1135 |     });
  1136 | 
  1137 |     if (expectedText !== undefined) {
  1138 |       validOptions = validOptions.filter({
  1139 |         hasText: expectedText,
  1140 |       });
  1141 |     }
  1142 | 
  1143 |     await validOptions
  1144 |       .first()
  1145 |       .or(this.autocompleteNoRecords)
  1146 |       .waitFor({
  1147 |         state: 'visible',
  1148 |         timeout: 20_000,
  1149 |       });
  1150 | 
  1151 |     if (await validOptions.first().isVisible()) {
  1152 |       await validOptions.first().click();
  1153 |       await expect(input).not.toHaveValue('');
  1154 |       return input.inputValue();
  1155 |     }
  1156 | 
  1157 |     await input.press('Escape');
  1158 | 
  1159 |     if (attempt < maxAttempts) {
  1160 |       await this.page.waitForTimeout(1_000);
  1161 |       await input.clear();
  1162 |     }
  1163 |   }
  1164 | 
> 1165 |   throw new Error(
       |         ^ Error: No autocomplete option found for: UpdatedProject1787546450988 after 3 attempts
  1166 |     `No autocomplete option found for: ${searchText} after ${maxAttempts} attempts`,
  1167 |   );
  1168 | }
  1169 | 
  1170 | async createCustomer(
  1171 |   details: CreateCustomerDetails,
  1172 | ): Promise<void> {
  1173 |   await this.addCustomerButton.click();
  1174 | 
  1175 |   await this.customerNameInput.fill(details.name);
  1176 | 
  1177 |   if (details.description !== undefined) {
  1178 |     await this.customerDescriptionInput.fill(
  1179 |       details.description
  1180 |     );
  1181 |   }
  1182 | 
  1183 |   const responsePromise =
  1184 |     this.page.waitForResponse(
  1185 |       response =>
  1186 |         response.url().includes(
  1187 |           '/api/v2/time/customers'
  1188 |         ) &&
  1189 |         response.request().method() === 'POST',
  1190 |       {
  1191 |         timeout: 30_000,
  1192 |       }
  1193 |     );
  1194 | 
  1195 |   await this.customerSaveButton.click();
  1196 | 
  1197 |   const response = await responsePromise;
  1198 | 
  1199 |   expect(
  1200 |     response.ok(),
  1201 |     `Customer creation failed: ${response.status()}`
  1202 |   ).toBeTruthy();
  1203 | 
  1204 |   await this.page.waitForURL(
  1205 |     /\/time\/viewCustomers$/,
  1206 |     {
  1207 |       timeout: 30_000,
  1208 |     }
  1209 |   );
  1210 | }
  1211 | 
  1212 | async deleteCustomerByName(
  1213 |   customerName: string
  1214 | ): Promise<void> {
  1215 |   const customerRow = this.customerRows.filter({
  1216 |     has: this.page
  1217 |       .locator('.oxd-table-cell')
  1218 |       .nth(1)
  1219 |       .getByText(customerName, {
  1220 |         exact: true,
  1221 |       }),
  1222 |   });
  1223 | 
  1224 |   await expect(customerRow).toHaveCount(1);
  1225 | 
  1226 |   const deleteButton =
  1227 |     customerRow.getByRole('button').filter({
  1228 |       has: this.page.locator('i.bi-trash'),
  1229 |     });
  1230 | 
  1231 |   await deleteButton.click();
  1232 | 
  1233 |   await expect(
  1234 |     this.confirmationDialog
  1235 |   ).toBeVisible();
  1236 | 
  1237 |   const responsePromise =
  1238 |     this.page.waitForResponse(
  1239 |       response =>
  1240 |         response.url().includes(
  1241 |           '/api/v2/time/customers'
  1242 |         ) &&
  1243 |         response.request().method() === 'DELETE',
  1244 |       {
  1245 |         timeout: 30_000,
  1246 |       }
  1247 |     );
  1248 | 
  1249 |   await this.confirmDeleteButton.click();
  1250 | 
  1251 |   const response = await responsePromise;
  1252 | 
  1253 |   expect(response.ok()).toBeTruthy();
  1254 | 
  1255 |   await expect(customerRow).toHaveCount(0, {
  1256 |     timeout: 20_000,
  1257 |   });
  1258 | }
  1259 | 
  1260 | async createProject(
  1261 |   details: CreateProjectDetails
  1262 | ): Promise<CreatedProject> {
  1263 |   await this.selectAutocompleteOption(
  1264 |     this.addProjectCustomerInput,
  1265 |     details.customerName,
```