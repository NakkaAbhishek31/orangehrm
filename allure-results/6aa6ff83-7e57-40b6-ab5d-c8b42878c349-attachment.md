# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression
- Location: tests\Admin\admin-users.spec.ts:242:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-toast-content-text').filter({ hasText: /Successfully Saved/i })
Expected substring: "Successfully Deleted"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('.oxd-toast-content-text').filter({ hasText: /Successfully Saved/i })

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: mandaa user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox: ess1785738973101211
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  427 | }
  428 | 
  429 | 
  430 | async saveSystemUser(): Promise<void> {
  431 |   const createUserResponse =
  432 |     this.page.waitForResponse(
  433 |       response =>
  434 |         response.url().includes(
  435 |           '/api/v2/admin/users'
  436 |         ) &&
  437 |         response.request().method() === 'POST' &&
  438 |         response.ok(),
  439 |       {
  440 |         timeout: 20_000,
  441 |       }
  442 |     );
  443 | 
  444 |   const systemUsersPage =
  445 |     this.page.waitForURL(
  446 |       /admin\/viewSystemUsers/,
  447 |       {
  448 |         timeout: 20_000,
  449 |       }
  450 |     );
  451 | 
  452 |   // Begin watching for the temporary toast
  453 |   // before clicking Save.
  454 |   const successToastAppears = expect(
  455 |     this.successToast
  456 |   ).toContainText(
  457 |     'Successfully Saved',
  458 |     {
  459 |       timeout: 20_000,
  460 |     }
  461 |   );
  462 | 
  463 |   await this.addUserSaveButton.click();
  464 | 
  465 |   await Promise.all([
  466 |     createUserResponse,
  467 |     systemUsersPage,
  468 |     successToastAppears,
  469 |   ]);
  470 | 
  471 |   await expect(
  472 |     this.systemUsersHeading
  473 |   ).toBeVisible();
  474 | }
  475 | 
  476 | async deleteSystemUserByUsername(
  477 |   username: string
  478 | ): Promise<void> {
  479 |   const matchingRow = this.userRows.filter({
  480 |     has: this.page
  481 |       .locator('.oxd-table-cell')
  482 |       .nth(1)
  483 |       .getByText(username, {
  484 |         exact: true,
  485 |       }),
  486 |   });
  487 | 
  488 |   await expect(matchingRow).toHaveCount(1);
  489 | 
  490 |   await matchingRow
  491 |     .locator('button')
  492 |     .filter({
  493 |       has: this.page.locator(
  494 |         'i.bi-trash, i.bi-trash-fill'
  495 |       ),
  496 |     })
  497 |     .click();
  498 | 
  499 |   const confirmationDialog =
  500 |     this.page.getByRole('dialog');
  501 | 
  502 |   await expect(confirmationDialog).toBeVisible();
  503 | 
  504 |   const deleteResponse =
  505 |     this.page.waitForResponse(
  506 |       response =>
  507 |         response.url().includes(
  508 |           '/api/v2/admin/users'
  509 |         ) &&
  510 |         response.request().method() === 'DELETE' &&
  511 |         response.ok(),
  512 |       {
  513 |         timeout: 20_000,
  514 |       }
  515 |     );
  516 | 
  517 |   await confirmationDialog
  518 |     .getByRole('button', {
  519 |       name: /Yes, Delete/i,
  520 |     })
  521 |     .click();
  522 | 
  523 |   await deleteResponse;
  524 | 
  525 |   await expect(confirmationDialog).toBeHidden();
  526 | 
> 527 |   await expect(this.successToast).toContainText(
      |                                   ^ Error: expect(locator).toContainText(expected) failed
  528 |     'Successfully Deleted'
  529 |   );
  530 | }
  531 | 
  532 |   }
  533 | 
  534 |    
  535 | 
  536 | 
```