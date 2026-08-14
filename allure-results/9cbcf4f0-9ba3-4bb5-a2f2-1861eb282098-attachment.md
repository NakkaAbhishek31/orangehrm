# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:613:6

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
```

# Page snapshot

```yaml
- generic [ref=f9e3]:
  - generic:
    - complementary [ref=f9e4]:
      - navigation "Sidepanel" [ref=f9e5]:
        - generic [ref=f9e6]:
          - link [ref=f9e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f9e9]
          - text: 
        - generic [ref=f9e10]:
          - generic [ref=f9e11]:
            - generic [ref=f9e12]:
              - textbox "Search" [ref=f9e15]
              - button "" [ref=f9e16] [cursor=pointer]
            - separator [ref=f9e18]
          - list [ref=f9e19]:
            - listitem [ref=f9e20]:
              - link "Admin" [ref=f9e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f9e25]:
              - link "PIM" [ref=f9e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f9e41]:
              - link "Leave" [ref=f9e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f9e46]:
              - link "Time" [ref=f9e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f9e54]:
              - link "Recruitment" [ref=f9e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f9e62]:
              - link "My Info" [ref=f9e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f9e70]:
              - link "Performance" [ref=f9e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f9e80]:
              - link "Dashboard" [ref=f9e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f9e85]:
              - link "Directory" [ref=f9e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f9e90]:
              - link "Maintenance" [ref=f9e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f9e96]:
              - link "Claim" [ref=f9e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f9e105]:
              - link "Buzz" [ref=f9e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f9e110]:
      - generic [ref=f9e111]:
        - generic [ref=f9e112]:
          - text: 
          - heading "Admin" [level=6] [ref=f9e114]
        - link [ref=f9e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f9e117] [cursor=pointer]
        - list [ref=f9e123]:
          - listitem [ref=f9e124]:
            - generic [ref=f9e125] [cursor=pointer]:
              - img "profile picture" [ref=f9e126]
              - paragraph [ref=f9e127]: manda user
              - generic [ref=f9e128]: 
      - navigation "Topbar Menu" [ref=f9e130]:
        - list [ref=f9e131]:
          - listitem [ref=f9e132] [cursor=pointer]:
            - generic [ref=f9e133]:
              - text: User Management
              - generic [ref=f9e134]: 
          - listitem [ref=f9e135] [cursor=pointer]:
            - generic [ref=f9e136]:
              - text: Job
              - generic [ref=f9e137]: 
          - listitem [ref=f9e138] [cursor=pointer]:
            - generic [ref=f9e139]:
              - text: Organization
              - generic [ref=f9e140]: 
          - listitem [ref=f9e141] [cursor=pointer]:
            - generic [ref=f9e142]:
              - text: Qualifications
              - generic [ref=f9e143]: 
          - listitem [ref=f9e144] [cursor=pointer]:
            - link "Nationalities" [ref=f9e145]:
              - /url: "#"
          - listitem [ref=f9e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=f9e147]:
              - /url: "#"
          - listitem [ref=f9e148] [cursor=pointer]:
            - generic [ref=f9e149]:
              - text: Configuration
              - generic [ref=f9e150]: 
          - button "" [ref=f9e152] [cursor=pointer]
  - generic [ref=f9e154]:
    - generic [ref=f9e157]:
      - heading "Edit User" [level=6] [ref=f9e158]
      - separator [ref=f9e159]
      - generic [ref=f9e160]:
        - generic [ref=f9e162]:
          - generic [ref=f9e164]:
            - generic [ref=f9e165]: User Role*
            - generic [ref=f9e169] [cursor=pointer]:
              - generic [ref=f9e170]: ESS
              - generic [ref=f9e171]: 
          - generic [ref=f9e174]:
            - generic [ref=f9e175]: Employee Name*
            - textbox "Type for hints..." [ref=f9e180]: Auto178669486673645 Test User
          - generic [ref=f9e182]:
            - generic [ref=f9e183]: Status*
            - generic [ref=f9e187] [cursor=pointer]:
              - generic [ref=f9e188]: Enabled
              - generic [ref=f9e189]: 
          - generic [ref=f9e192]:
            - generic [ref=f9e193]: Username*
            - textbox [ref=f9e196]: ess178669486673645
          - generic [ref=f9e198]:
            - generic [ref=f9e199]: Change Password ?
            - generic [ref=f9e203] [cursor=pointer]:
              - checkbox " Yes" [ref=f9e204]
              - generic [ref=f9e205]: 
              - text: "Yes"
        - separator [ref=f9e207]
        - generic [ref=f9e208]:
          - paragraph [ref=f9e209]: "* Required"
          - button "Cancel" [ref=f9e210] [cursor=pointer]
          - button "Save" [ref=f9e211] [cursor=pointer]
    - generic [ref=f9e212]:
      - paragraph [ref=f9e213]: OrangeHRM OS 5.9
      - paragraph [ref=f9e214]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f9e215] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  703 |     await expect
  704 |       .poll(
  705 |         async () =>
  706 |           selectableRowCheckboxes.evaluateAll(
  707 |             (checkboxes) =>
  708 |               checkboxes.filter(
  709 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  710 |               ).length,
  711 |           ),
  712 |         {
  713 |           timeout: 15_000,
  714 |         },
  715 |       )
  716 |       .toBe(selectableRowCount);
  717 |   }
  718 | 
  719 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  720 |     const headerCheckboxLabel = this.page.locator(
  721 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  722 |     );
  723 | 
  724 |     const headerCheckbox = this.page.locator(
  725 |       ".oxd-table-header " + 'input[type="checkbox"]',
  726 |     );
  727 | 
  728 |     const selectableRowCheckboxes = this.userRows
  729 |       .filter({
  730 |         hasNot: this.page
  731 |           .locator(".oxd-table-cell")
  732 |           .nth(1)
  733 |           .getByText("Admin", { exact: true }),
  734 |       })
  735 |       .locator('input[type="checkbox"]');
  736 | 
  737 |     await headerCheckboxLabel.click();
  738 | 
  739 |     await expect(headerCheckbox).not.toBeChecked();
  740 | 
  741 |     await expect
  742 |       .poll(
  743 |         async () =>
  744 |           selectableRowCheckboxes.evaluateAll(
  745 |             (checkboxes) =>
  746 |               checkboxes.filter(
  747 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  748 |               ).length,
  749 |           ),
  750 |         {
  751 |           timeout: 15_000,
  752 |         },
  753 |       )
  754 |       .toBe(0);
  755 |   }
  756 | 
  757 |   async deleteSelectedSystemUsers(): Promise<void> {
  758 |     await expect(this.deleteSelectedButton).toBeVisible({
  759 |       timeout: 15_000,
  760 |     });
  761 |     await expect(this.deleteSelectedButton).toBeEnabled();
  762 | 
  763 |     await this.deleteSelectedButton.click();
  764 | 
  765 |     const confirmationDialog = this.page.getByRole("dialog");
  766 | 
  767 |     await expect(confirmationDialog).toBeVisible();
  768 | 
  769 |     const confirmDeleteButton = confirmationDialog
  770 |       .locator("button.oxd-button--label-danger")
  771 |       .filter({ hasText: /Yes,\s*Delete/i });
  772 | 
  773 |     await expect(confirmDeleteButton).toBeVisible();
  774 |     await expect(confirmDeleteButton).toBeEnabled();
  775 | 
  776 |     const deleteResponse = this.page.waitForResponse(
  777 |       (response) =>
  778 |         response.url().includes("/api/v2/admin/users") &&
  779 |         response.request().method() === "DELETE" &&
  780 |         response.ok(),
  781 |       { timeout: 20_000 },
  782 |     );
  783 | 
  784 |     await confirmDeleteButton.click();
  785 |     await deleteResponse;
  786 | 
  787 |     await expect(confirmationDialog).toBeHidden({
  788 |       timeout: 20_000,
  789 |     });
  790 | 
  791 |     await expect(
  792 |       this.toastMessage.filter({
  793 |         hasText: /Successfully Deleted/i,
  794 |       }),
  795 |     ).toBeVisible({
  796 |       timeout: 20_000,
  797 |     });
  798 | 
  799 |     await expect(this.loadingSpinner).toBeHidden();
  800 |   }
  801 | 
  802 |   async updateSystemUsername(updatedUsername: string): Promise<void> {
> 803 |     const usernameValidationResponse = this.page.waitForResponse(
      |                                                  ^ TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
  804 |       (response) => {
  805 |         const url = new URL(response.url());
  806 |         return (
  807 |           url.pathname.endsWith("/api/v2/admin/users") &&
  808 |           url.searchParams.get("username") === updatedUsername &&
  809 |           response.request().method() === "GET" &&
  810 |           response.ok()
  811 |         );
  812 |       },
  813 |       { timeout: 20_000 },
  814 |     );
  815 | 
  816 |     await this.addUsernameInput.clear();
  817 |     await this.addUsernameInput.fill(updatedUsername);
  818 | 
  819 |     await this.addUsernameInput.blur();
  820 |     await usernameValidationResponse;
  821 | 
  822 |     await expect(this.addUsernameInput).toHaveValue(updatedUsername);
  823 | 
  824 |     await expect(this.usernameValidation).toBeHidden();
  825 | 
  826 |     const updateUserResponse = this.page.waitForResponse(
  827 |       (response) =>
  828 |         /\/api\/v2\/admin\/users\/\d+$/.test(response.url()) &&
  829 |         response.request().method() === "PUT" &&
  830 |         response.ok(),
  831 |       { timeout: 20_000 },
  832 |     );
  833 | 
  834 |     await this.editUserSaveButton.click();
  835 |     const response = await updateUserResponse;
  836 |     const requestBody = response.request().postDataJSON() as {
  837 |       username?: string;
  838 |     };
  839 |     expect(requestBody.username).toBe(updatedUsername);
  840 | 
  841 |     await expect(this.page).toHaveURL(/admin\/viewSystemUsers/, {
  842 |       timeout: 20_000,
  843 |     });
  844 |     await expect(this.systemUsersHeading).toBeVisible();
  845 |   }
  846 | }
  847 | 
```