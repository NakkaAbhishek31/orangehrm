import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import apiData from "../../test-data/api.data.json";
import { expectJsonCollection } from "../../support/api/collectionAssertions";
import { authenticatedUserMenu } from "../../locators/test/apiTestLocators";

test.describe("OrangeHRM - REST API", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/web/index.php/dashboard/index", {
      waitUntil: "domcontentloaded",
    });
    await expect(authenticatedUserMenu(page)).toBeVisible();
  });

  test("TC_API_393 - Authenticated user should retrieve employees @api @smoke @positive @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.employeeEndpoint);
    await expectJsonCollection(response);
  });

  test("TC_API_394 - Employee response should contain collection metadata @api @positive @schema @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.employeeEndpoint);
    const body = await expectJsonCollection(response);

    expect(body.meta).toBeDefined();
    expect(typeof body.meta).toBe("object");
  });

  test("TC_API_395 - Employee response data should contain employee identifiers @api @positive @schema @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.employeeEndpoint);
    const body = await expectJsonCollection(response);

    if (body.data.length > 0) {
      expect(body.data[0]).toEqual(
        expect.objectContaining({
          empNumber: expect.any(Number),
        }),
      );
    }
  });

  test("TC_API_396 - Authenticated user should retrieve job titles @api @positive @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.jobTitlesEndpoint);
    await expectJsonCollection(response);
  });

  test("TC_API_397 - Authenticated user should retrieve locations @api @positive @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.locationsEndpoint);
    await expectJsonCollection(response);
  });

  test("TC_API_398 - Authenticated user should retrieve organization subunits @api @positive @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.subunitsEndpoint);
    await expectJsonCollection(response);
  });

  test("TC_API_399 - Authenticated user should retrieve leave types @api @positive @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.leaveTypesEndpoint);
    await expectJsonCollection(response);
  });

  test("TC_API_400 - Authenticated user should retrieve Directory employees @api @positive @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.directoryEndpoint);
    await expectJsonCollection(response);
  });

  test("TC_API_401 - Authenticated user should retrieve Recruitment candidates @api @positive @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.candidatesEndpoint);
    await expectJsonCollection(response);
  });

  test("TC_API_402 - Unknown API endpoint should return Not Found @api @negative @regression", async ({
    context,
  }) => {
    const response = await context.request.get(apiData.unknownEndpoint);

    expect(response.status()).toBe(404);
  });
});
