# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_150 - Required validation should appear when candidate last name is empty @negative @validation @regression
- Location: tests\Recruitment\recruitment.spec.ts:1119:8

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByPlaceholder('Last Name', { exact: true })
Expected: "Required"
Received: ""
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for getByPlaceholder('Last Name', { exact: true })
    43 × locator resolved to <input name="lastName" data-v-1f99f73c="" placeholder="Last Name" class="oxd-input oxd-input--active oxd-input--error orangehrm-lastname"/>
       - unexpected value ""

```

```yaml
- textbox "Last Name"
```

# Test source

```ts
  1054 | 
  1055 |     await expect(recruitmentPage.firstNameInput).toHaveValue(firstName);
  1056 | 
  1057 |     await expect(recruitmentPage.lastNameInput).toHaveValue(data.lastName);
  1058 | 
  1059 |     await expect(recruitmentPage.emailInput).toHaveValue(email);
  1060 | 
  1061 |     console.log(`Created candidate ID: ${candidateId}`);
  1062 |   });
  1063 | 
  1064 |   test.only("TC_RECRUITMENT_149 - Invalid validation should appear for an incorrectly formatted candidate email @negative @validation @regression", async ({
  1065 |     page,
  1066 |     navigationPage,
  1067 |     recruitmentPage,
  1068 |   }) => {
  1069 |     // Read candidate details and invalid email from JSON.
  1070 |     const data = recruitmentData.TC_RECRUITMENT_149;
  1071 | 
  1072 |     const uniqueValue = Date.now();
  1073 |     // Generate a unique First Name.
  1074 | 
  1075 |     const firstName = `${data.firstNamePrefix}${uniqueValue}`;
  1076 | 
  1077 |     // Navigate to Recruitment → Candidates.
  1078 | 
  1079 |     await navigationPage.gotoRecruitment();
  1080 | 
  1081 |     await recruitmentPage.navigateToCandidate();
  1082 |     // Open the Add Candidate page.
  1083 |     await recruitmentPage.addCandidateButton.click();
  1084 | 
  1085 |     // Fill First Name, Middle Name and Last Name.
  1086 |     await recruitmentPage.firstNameInput.fill(firstName);
  1087 | 
  1088 |     await recruitmentPage.middleNameInput.fill(data.middleName);
  1089 | 
  1090 |     await recruitmentPage.lastNameInput.fill(data.lastName);
  1091 | 
  1092 |     await recruitmentPage.selectFirstAvailableAddCandidateVacancy();
  1093 | 
  1094 |     // Enter an incorrectly formatted email address.
  1095 |     await recruitmentPage.emailInput.fill(data.invalidEmail);
  1096 |     // Click Save.
  1097 |     await recruitmentPage.saveButton.click();
  1098 |     // Verify the Email validation message appears.
  1099 |     await expect(recruitmentPage.emailValidation).toBeVisible();
  1100 |     // Verify the validation message says:
  1101 |     // “Expected format: admin@example.com”.
  1102 |     await expect(recruitmentPage.emailValidation).toHaveText(
  1103 |       data.validationMessage,
  1104 |     );
  1105 | 
  1106 |     // Verify the invalid email remains displayed.
  1107 |     await expect(recruitmentPage.emailInput).toHaveValue(data.invalidEmail);
  1108 | 
  1109 |     // Verify the user remains on the Add Candidate page.
  1110 |     await expect(page).toHaveURL(new RegExp(`${data.addCandidateUrlPath}$`));
  1111 |     // Verify no success notification appears.
  1112 |     await expect(recruitmentPage.successToast).not.toBeVisible();
  1113 | 
  1114 |     // Click Cancel and return to Candidates.
  1115 |     await recruitmentPage.cancelButton.click();
  1116 |     await expect(page).toHaveURL(new RegExp(`${data.candidatesUrlPath}$`));
  1117 |   });
  1118 | 
  1119 |   test.only('TC_RECRUITMENT_150 - Required validation should appear when candidate last name is empty @negative @validation @regression',
  1120 |   async ({ page, navigationPage, recruitmentPage }) => {
  1121 |     // Read candidate details and invalid email from JSON.
  1122 |     const data = recruitmentData.TC_RECRUITMENT_150;
  1123 | 
  1124 |     const uniqueValue = Date.now();
  1125 |     // Generate a unique First Name.
  1126 | 
  1127 |     const firstName = `${data.firstNamePrefix}${uniqueValue}`;
  1128 | 
  1129 |      const email = `${data.emailPrefix}${uniqueValue}` + `${data.emailDomain}`;
  1130 | 
  1131 | 
  1132 |     // Navigate to Recruitment → Candidates.
  1133 | 
  1134 |     await navigationPage.gotoRecruitment();
  1135 | 
  1136 |     await recruitmentPage.navigateToCandidate();
  1137 |     // Open the Add Candidate page.
  1138 |     await recruitmentPage.addCandidateButton.click();
  1139 | 
  1140 |     // Fill First Name, Middle Name and Last Name.
  1141 |     await recruitmentPage.firstNameInput.fill(firstName);
  1142 | 
  1143 |     // Leave Last Name empty.
  1144 |     await recruitmentPage.lastNameInput.fill('');
  1145 |     // Select the first available Vacancy dynamically.
  1146 |     await recruitmentPage.selectFirstAvailableAddCandidateVacancy();
  1147 |     // Fill a valid Email.
  1148 |     await recruitmentPage.emailInput.fill(email);
  1149 |     // Click Save.
  1150 |     await recruitmentPage.saveButton.click();
  1151 |     // Verify Required validation appears
  1152 |     // under the Last Name field.
  1153 | 
> 1154 |     await expect (recruitmentPage.lastNameInput).toHaveValue(data.requiredMessage);
       |                                                  ^ Error: expect(locator).toHaveValue(expected) failed
  1155 |     // Verify First Name and Email keep their values.
  1156 |       await expect (recruitmentPage.firstNameInput).toHaveValue(firstName);
  1157 |             await expect (recruitmentPage.emailInput).toHaveValue(email);
  1158 |     // Verify the user remains on the Add Candidate page. 
  1159 |      await expect(page).toHaveURL(data.addCandidateUrlPath);
  1160 |     // Verify no success notification appears.
  1161 |       await expect(recruitmentPage.successToast).not.toBeVisible();
  1162 |     // Click Cancel and return to Candidates.
  1163 |    await recruitmentPage.cancelButton.click();
  1164 |          await expect(page).toHaveURL(data.candidatesUrlPath);
  1165 |   }
  1166 | );
  1167 | 
  1168 | 
  1169 | });
  1170 | 
```