# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_194 - Admin should search for a project by customer name @positive @search @project-info @regression
- Location: tests\Time\time.spec.ts:1492:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('Project Admin', { exact: true }) }).locator('input')
Expected: "Searching...."
Received: "a"
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Project Admin', { exact: true }) }).locator('input')
    43 × locator resolved to <input data-v-75e744cd="" placeholder="Type for hints..."/>
       - unexpected value "a"

```

```yaml
- textbox "Type for hints...": a
```

# Test source

```ts
  1064 |   );
  1065 | 
  1066 |   await expect(
  1067 |     this.myAttendanceDateInput
  1068 |   ).toBeVisible();
  1069 | }
  1070 | 
  1071 | async gotoPunchInOut(): Promise<void> {
  1072 |   await this.attendanceMenu.click();
  1073 | 
  1074 |   const punchInOutLink = this.page
  1075 |     .locator('.oxd-dropdown-menu:visible')
  1076 |     .getByText('Punch In/Out', {
  1077 |       exact: true,
  1078 |     });
  1079 | 
  1080 |   await expect(
  1081 |     punchInOutLink
  1082 |   ).toBeVisible();
  1083 | 
  1084 |   await punchInOutLink.click();
  1085 | 
  1086 |   await this.page.waitForURL(
  1087 |     /\/attendance\/punchIn$/,
  1088 |     {
  1089 |       timeout: 30_000,
  1090 |     }
  1091 |   );
  1092 | 
  1093 |   await expect(
  1094 |     this.punchHeading
  1095 |   ).toBeVisible();
  1096 | 
  1097 |   await expect(
  1098 |     this.punchActionButton
  1099 |   ).toBeVisible();
  1100 | }
  1101 | 
  1102 | async ensurePunchDateAndTime(): Promise<{
  1103 |   date: string;
  1104 |   time: string;
  1105 | }> {
  1106 |   const now = new Date();
  1107 | 
  1108 |   let date = await this.punchDateInput.inputValue();
  1109 |   let time = await this.punchTimeInput.inputValue();
  1110 | 
  1111 |   if (!date.trim()) {
  1112 |     const year = now.getFullYear();
  1113 |     const day = String(now.getDate()).padStart(2, "0");
  1114 |     const month = String(now.getMonth() + 1).padStart(2, "0");
  1115 |     date = `${year}-${day}-${month}`;
  1116 |     await this.punchDateInput.fill(date);
  1117 |   }
  1118 | 
  1119 |   if (!time.trim()) {
  1120 |     const hours = String(now.getHours()).padStart(2, "0");
  1121 |     const minutes = String(now.getMinutes()).padStart(2, "0");
  1122 |     time = `${hours}:${minutes}`;
  1123 |     await this.punchTimeInput.fill(time);
  1124 |   }
  1125 | 
  1126 |   await expect(this.punchDateInput).toHaveValue(date);
  1127 |   await expect(this.punchTimeInput).toHaveValue(time);
  1128 | 
  1129 |   return { date, time };
  1130 | }
  1131 | async selectAutocompleteOption(
  1132 |   input: Locator,
  1133 |   searchText: string,
  1134 |   expectedText?: string
  1135 | ): Promise<string> {
  1136 |   await input.fill(searchText);
  1137 | 
  1138 |   await expect(
  1139 |     this.visibleAutocompleteDropdown
  1140 |   ).toBeVisible({
  1141 |     timeout: 20_000,
  1142 |   });
  1143 | 
  1144 |   const option = expectedText
  1145 |     ? this.autocompleteOptions.filter({
  1146 |         hasText: expectedText,
  1147 |       }).first()
  1148 |     : this.autocompleteOptions
  1149 |         .filter({
  1150 |           hasNotText: 'No Records Found',
  1151 |         })
  1152 |         .first();
  1153 | 
  1154 |   await expect(option).toBeVisible({
  1155 |     timeout: 20_000,
  1156 |   });
  1157 | 
  1158 |   const selectedText = (
  1159 |     await option.innerText()
  1160 |   ).trim();
  1161 | 
  1162 |   await option.click();
  1163 | 
> 1164 |   await expect(input).toHaveValue(
       |                       ^ Error: expect(locator).toHaveValue(expected) failed
  1165 |     selectedText
  1166 |   );
  1167 | 
  1168 |   return selectedText;
  1169 | }
  1170 | 
  1171 | async createCustomer(
  1172 |   details: CreateCustomerDetails,
  1173 | ): Promise<void> {
  1174 |   await this.addCustomerButton.click();
  1175 | 
  1176 |   await this.customerNameInput.fill(details.name);
  1177 | 
  1178 |   if (details.description !== undefined) {
  1179 |     await this.customerDescriptionInput.fill(
  1180 |       details.description
  1181 |     );
  1182 |   }
  1183 | 
  1184 |   const responsePromise =
  1185 |     this.page.waitForResponse(
  1186 |       response =>
  1187 |         response.url().includes(
  1188 |           '/api/v2/time/customers'
  1189 |         ) &&
  1190 |         response.request().method() === 'POST',
  1191 |       {
  1192 |         timeout: 30_000,
  1193 |       }
  1194 |     );
  1195 | 
  1196 |   await this.customerSaveButton.click();
  1197 | 
  1198 |   const response = await responsePromise;
  1199 | 
  1200 |   expect(
  1201 |     response.ok(),
  1202 |     `Customer creation failed: ${response.status()}`
  1203 |   ).toBeTruthy();
  1204 | 
  1205 |   await this.page.waitForURL(
  1206 |     /\/time\/viewCustomers$/,
  1207 |     {
  1208 |       timeout: 30_000,
  1209 |     }
  1210 |   );
  1211 | }
  1212 | 
  1213 | async deleteCustomerByName(
  1214 |   customerName: string
  1215 | ): Promise<void> {
  1216 |   const customerRow = this.customerRows.filter({
  1217 |     has: this.page
  1218 |       .locator('.oxd-table-cell')
  1219 |       .nth(1)
  1220 |       .getByText(customerName, {
  1221 |         exact: true,
  1222 |       }),
  1223 |   });
  1224 | 
  1225 |   await expect(customerRow).toHaveCount(1);
  1226 | 
  1227 |   const deleteButton =
  1228 |     customerRow.getByRole('button').filter({
  1229 |       has: this.page.locator('i.bi-trash'),
  1230 |     });
  1231 | 
  1232 |   await deleteButton.click();
  1233 | 
  1234 |   await expect(
  1235 |     this.confirmationDialog
  1236 |   ).toBeVisible();
  1237 | 
  1238 |   const responsePromise =
  1239 |     this.page.waitForResponse(
  1240 |       response =>
  1241 |         response.url().includes(
  1242 |           '/api/v2/time/customers'
  1243 |         ) &&
  1244 |         response.request().method() === 'DELETE',
  1245 |       {
  1246 |         timeout: 30_000,
  1247 |       }
  1248 |     );
  1249 | 
  1250 |   await this.confirmDeleteButton.click();
  1251 | 
  1252 |   const response = await responsePromise;
  1253 | 
  1254 |   expect(response.ok()).toBeTruthy();
  1255 | 
  1256 |   await expect(customerRow).toHaveCount(0, {
  1257 |     timeout: 20_000,
  1258 |   });
  1259 | }
  1260 | 
  1261 | async createProject(
  1262 |   details: CreateProjectDetails
  1263 | ): Promise<CreatedProject> {
  1264 |   await this.selectAutocompleteOption(
```