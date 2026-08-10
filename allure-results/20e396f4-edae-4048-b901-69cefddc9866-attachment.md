# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_PIM_072 - Reset should clear employee ID and name filters @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:2365:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('//div[@class=\'oxd-grid-4 orangehrm-full-width-grid\']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]')
Expected: "Test Employee"
Received: "Test  Employee"
Timeout:  10000ms

Call log:
  - Expect "toHaveValue" with timeout 10000ms
  - waiting for locator('//div[@class=\'oxd-grid-4 orangehrm-full-width-grid\']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]')
    23 × locator resolved to <input data-v-75e744cd="" placeholder="Type for hints..."/>
       - unexpected value "Test  Employee"

```

```yaml
- textbox "Type for hints...": Test Employee
```

# Test source

```ts
  2286 |   await loginPage.visitPage();
  2287 |   await loginPage.login("Admin","admin123");
  2288 |   await loginPage.verifyLoginSuccessful();
  2289 |   await navigationPage.gotoPIM();
  2290 |   await pimPage.gotoAddEmployee();
  2291 | 
  2292 |   const employeeId=await pimPage.addEmployee({firstName,middleName,lastName});
  2293 |    await pimPage.gotoAddEmployee();
  2294 |     const fullName = `${firstName} ${middleName} ${lastName}`;
  2295 | 
  2296 |   await pimPage.selectEmployeeFromAutocomplete(
  2297 |     firstName,
  2298 |     fullName
  2299 |   );
  2300 | 
  2301 |   await pimPage.clickOnFilterSearch();
  2302 |   await pimPage.verifyEmployeeSearchResult(employeeId,firstName,lastName);
  2303 |   await pimPage.deleteEmployeeById(employeeId);
  2304 | 
  2305 | });
  2306 | 
  2307 | test("TC_PIM_070 - Employee search should return no records for an invalid ID @negative @search @regression", async ({
  2308 |   loginPage,
  2309 |   navigationPage,
  2310 |   pimPage,
  2311 | }) => {
  2312 |    const invalidEmployeeId = `999${Date.now()}`;
  2313 |    await loginPage.visitPage();
  2314 |    await loginPage.login("Admin", "admin123");
  2315 |    await loginPage.verifyLoginSuccessful();
  2316 | 
  2317 |    await navigationPage.gotoPIM();
  2318 |    await pimPage.gotoEmployeeList();
  2319 | 
  2320 |    await pimPage.filterEmployeeList({employeeId: invalidEmployeeId,});
  2321 | 
  2322 |    await pimPage.clickOnFilterSearch();
  2323 |    await pimPage.verifyNoEmployeeRecordsFound(invalidEmployeeId);
  2324 |    
  2325 | 
  2326 | 
  2327 | });
  2328 | 
  2329 | 
  2330 | test("TC_PIM_071 - Deleted employee should not appear in search results @positive @delete @regression", async ({
  2331 |   loginPage,
  2332 |   navigationPage,
  2333 |   pimPage,
  2334 | }) => {
  2335 |   const firstName = `Delete${randomUUID().slice(0, 8)}`;
  2336 |   const lastName = "User";
  2337 |   const  middleName="Test";
  2338 | 
  2339 |   await loginPage.visitPage();
  2340 |   await loginPage.login("Admin","admin123");
  2341 |   await loginPage.verifyLoginSuccessful();
  2342 |    await navigationPage.gotoPIM();
  2343 |    await pimPage.gotoAddEmployee();
  2344 | 
  2345 | const employeeId=await pimPage.addEmployee({firstName,middleName,lastName});
  2346 | 
  2347 | await pimPage.gotoEmployeeList();
  2348 | await pimPage.filterEmployeeList({employeeId});
  2349 | await pimPage.clickOnFilterSearch();
  2350 | 
  2351 |   await pimPage.verifyEmployeeSearchResult(
  2352 |     employeeId,
  2353 |     firstName,
  2354 |     lastName
  2355 |   );
  2356 | 
  2357 |   await pimPage.deleteEmployeeById(employeeId);
  2358 |   await pimPage.filterEmployeeList({employeeId});
  2359 |   await pimPage.clickOnFilterSearch();
  2360 |   await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  2361 | 
  2362 | });
  2363 | 
  2364 | 
  2365 | test("TC_PIM_072 - Reset should clear employee ID and name filters @positive @filter @regression", async ({
  2366 |   loginPage,
  2367 |   navigationPage,
  2368 |   pimPage,
  2369 | }) => {
  2370 | 
  2371 |   const employeeId = "999999";
  2372 |   const employeeName = "Test Employee";
  2373 |   await loginPage.visitPage();
  2374 |   await loginPage.login("Admin", "admin123");
  2375 |   await loginPage.verifyLoginSuccessful();
  2376 |   await navigationPage.gotoPIM();
  2377 |   await pimPage.gotoEmployeeList();
  2378 | 
  2379 |   await pimPage.filterEmployeeList({employeeId,employeeName});
  2380 |   await expect(
  2381 |     pimPage.employeeIdFilterInput
  2382 |   ).toHaveValue(employeeId);
  2383 | 
  2384 |   await expect(
  2385 |     pimPage.employeeNameFilterInput
> 2386 |   ).toHaveValue(employeeName);
       |     ^ Error: expect(locator).toHaveValue(expected) failed
  2387 | 
  2388 |   await pimPage.resetEmployeeFilters();
  2389 | 
  2390 |   await expect(
  2391 |     pimPage.employeeIdFilterInput
  2392 |   ).toHaveValue("");
  2393 | 
  2394 |   await expect(
  2395 |     pimPage.employeeNameFilterInput
  2396 |   ).toHaveValue("");
  2397 | 
  2398 |   expect(
  2399 |     (await pimPage.getVisibleEmployeeIds()).length
  2400 |   ).toBeGreaterThan(0);
  2401 | });
  2402 | 
  2403 | test("TC_PIM_073 - Admin should open employee details after searching by ID @positive @navigation @regression", async ({
  2404 |   page,
  2405 |   loginPage,
  2406 |   navigationPage,
  2407 |   pimPage,
  2408 | }, testInfo) => {
  2409 |    test.setTimeout(120_000);
  2410 |   const uniqueEmployeeId =
  2411 |     `${testInfo.workerIndex}` +
  2412 |     `${Date.now().toString().slice(-6)}` +
  2413 |     `${Math.floor(Math.random() * 100)
  2414 |       .toString()
  2415 |       .padStart(2, "0")}`;
  2416 | 
  2417 |   const firstName = `Open${randomUUID().slice(0, 8)}`;
  2418 |   const middleName = "Test";
  2419 |   const lastName = "Details";
  2420 | 
  2421 |   await loginPage.visitPage();
  2422 |   await loginPage.login("Admin", "admin123");
  2423 |   await loginPage.verifyLoginSuccessful();
  2424 | 
  2425 |   await navigationPage.gotoPIM();
  2426 |   await pimPage.gotoAddEmployee();
  2427 | 
  2428 |   const employeeId = await pimPage.addEmployee({
  2429 |     firstName,
  2430 |     middleName,
  2431 |     lastName,
  2432 |     employeeId: uniqueEmployeeId,
  2433 |   });
  2434 | 
  2435 |   await expect(page).toHaveURL(
  2436 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  2437 |     {
  2438 |       timeout: 30_000,
  2439 |     }
  2440 |   );
  2441 | 
  2442 |   await expect(pimPage.personalDetailsHeading).toBeVisible({
  2443 |     timeout: 15_000,
  2444 |   });
  2445 | 
  2446 |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  2447 |   await expect(pimPage.middlenameInput).toHaveValue(middleName);
  2448 |   await expect(pimPage.lastnameInput).toHaveValue(lastName);
  2449 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  2450 | 
  2451 |   await pimPage.gotoEmployeeList();
  2452 | 
  2453 |   await pimPage.filterEmployeeList({
  2454 |     employeeId,
  2455 |   });
  2456 | 
  2457 |   await pimPage.clickOnFilterSearch();
  2458 | 
  2459 |   await pimPage.verifyEmployeeSearchResult(
  2460 |     employeeId,
  2461 |     firstName,
  2462 |     lastName
  2463 |   );
  2464 | 
  2465 |   await pimPage.openEmployeeById(employeeId);
  2466 | 
  2467 |   await expect(page).toHaveURL(
  2468 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  2469 |     {
  2470 |       timeout: 15_000,
  2471 |     }
  2472 |   );
  2473 | 
  2474 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  2475 | 
  2476 |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  2477 |   await expect(pimPage.middlenameInput).toHaveValue(middleName);
  2478 |   await expect(pimPage.lastnameInput).toHaveValue(lastName);
  2479 |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  2480 | 
  2481 |   // Cleanup
  2482 |   await pimPage.gotoEmployeeList();
  2483 | 
  2484 |   await pimPage.filterEmployeeList({
  2485 |     employeeId,
  2486 |   });
```