import { expect } from "@playwright/test";
import { test } from "../fixtures/baseTest";
import loginData from "../test-data/login.data.json";

test.describe("loginpage",()=>{
test("TC_LOGIN_001 - Admin should login with valid credentials @smoke @regression", async ({
  loginPage,
}) => {
  const data = loginData.TC_LOGIN_001;
  await loginPage.visitPage();
  await loginPage.login(data.username, data.password);
  await loginPage.verifyLoginSuccessful();
  await expect(loginPage.profileMenu).toBeVisible();
});

test("TC_LOGIN_002 - User should see an error for invalid username @negative @regression", async ({
  loginPage,
}) => {
  const data = loginData.TC_LOGIN_002;
  await loginPage.visitPage();
  await loginPage.login(data.username, data.password);
  await expect(loginPage.errorMessage).toHaveText(data.expectedError);
  await loginPage.verifyLoginUnsuccessful();
});

test("TC_LOGIN_003 - User should see an error for invalid password @negative @regression", async ({
  loginPage,
}) => {
  const data = loginData.TC_LOGIN_003;
  await loginPage.visitPage();
  await loginPage.login(data.username, data.password);
  await expect(loginPage.errorMessage).toHaveText(data.expectedError); 
  await loginPage.verifyLoginUnsuccessful();
});

test("TC_LOGIN_004 - Required validation should appear for empty credentials @negative @regression", async ({
  loginPage,
}) => {
  const data = loginData.TC_LOGIN_004;
  await loginPage.visitPage();
  await loginPage.login(data.username, data.password);

  await expect(loginPage.validationMessages).toHaveCount(
    data.expectedValidations.length,
  );

  await expect(loginPage.validationMessages).toHaveText(
    data.expectedValidations,
  );

  await loginPage.verifyLoginUnsuccessful();
});

test("TC_LOGIN_005 - Required validation should appear when username is empty @negative @validation @regression", async ({
  loginPage,
}) => {
  const data = loginData.TC_LOGIN_005;
  await loginPage.visitPage();
  await loginPage.login(data.username, data.password);
  await expect(loginPage.validationMessages).toHaveCount(
    data.expectedValidations.length,
  );
  await expect(loginPage.validationMessages).toHaveText(
    data.expectedValidations,
  );
  await loginPage.verifyLoginUnsuccessful();
});

test("TC_LOGIN_006 - Required validation should appear when password is empty @negative @validation @regression", async ({
  loginPage,
}) => {
  const data = loginData.TC_LOGIN_006;
  await loginPage.visitPage();
  await loginPage.login(data.username, data.password);
  await expect(loginPage.validationMessages).toHaveCount(
    data.expectedValidations.length,
  );
  await expect(loginPage.validationMessages).toHaveText(
    data.expectedValidations,
  );
  await loginPage.verifyLoginUnsuccessful();
});

test("TC_LOGIN_007 - User should navigate to reset password page @smoke @regression", async ({
  loginPage,
  forgotPage,
}) => {
  await loginPage.visitPage();
  await loginPage.clickOnForgotPassword();
  await forgotPage.verifyResetRequestSuccessful();
});

test("TC_LOGIN_008 - Required validation should appear when reset username is empty @negative @validation @regression", async ({
  loginPage,
  forgotPage,
}) => {
  await loginPage.visitPage();
  await loginPage.clickOnForgotPassword();
  await forgotPage.verifyResetRequestSuccessful();
  await forgotPage.usernameInput.fill("");
  await forgotPage.submitResetRequest();
  await expect(forgotPage.errorValidation).toHaveText("Required");
});

test("TC_LOGIN_009 - User should submit a password reset request with a valid username @positive @regression", async ({
  page,
  loginPage,
  forgotPage,
}) => {
  await loginPage.visitPage();
  await loginPage.clickOnForgotPassword();
  await forgotPage.verifyResetRequestSuccessful();
  await forgotPage.enterUsername("Admin");
  await forgotPage.submitResetRequest();
  await page.waitForTimeout(20000);
});

test("TC_LOGOUT_001 - Admin should logout successfully @smoke @regression", async ({
  loginPage,
  dashboardPage,
}) => {
  const data = loginData.TC_LOGOUT_001;
  await loginPage.visitPage();
  await loginPage.login(data.username, data.password);
  await loginPage.verifyLoginSuccessful();
  await dashboardPage.clickOnLogout();
  await loginPage.verifyLoginUnsuccessful();
});
});
