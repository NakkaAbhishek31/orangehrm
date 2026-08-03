# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-attachments.spec.ts >> TC_PIM_012 - Admin should download an employee attachment @positive @download @regression
- Location: tests\PIM\pim-attachments.spec.ts:65:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /Add Employee/i })
    - locator resolved to <a href="#" class="oxd-topbar-body-nav-tab-item">Add Employee</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

```

# Test source

```ts
  144 | 
  145 |     this.employeeIdCells = page.locator(
  146 |       '.oxd-table-body [role="row"] [role="cell"]:nth-child(2)',
  147 |     );
  148 | 
  149 |     this.cancelProfilepageButton = page.getByRole("button", {
  150 |       name: /Cancel/i,
  151 |     });
  152 | 
  153 |     this.requiredValidationMessages = page.locator(
  154 |       ".oxd-input-field-error-message",
  155 |     );
  156 |     this.createLoginDetailsSwitch = page
  157 |       .locator(".oxd-form-row")
  158 |       .filter({ hasText: "Create Login Details" })
  159 |       .locator(".oxd-switch-input");
  160 |     this.employeeUsernameInput = page
  161 |       .locator(".oxd-input-group")
  162 |       .filter({
  163 |         has: page.getByText("Username", { exact: true }),
  164 |       })
  165 |       .locator("input");
  166 | 
  167 |     this.employeePasswordInput = page
  168 |       .locator(".oxd-input-group")
  169 |       .filter({
  170 |         has: page.getByText("Password", { exact: true }),
  171 |       })
  172 |       .locator("input");
  173 | 
  174 |     this.confirmPasswordInput = page
  175 |       .locator(".oxd-input-group")
  176 |       .filter({
  177 |         has: page.getByText("Confirm Password", {
  178 |           exact: true,
  179 |         }),
  180 |       })
  181 |       .locator("input");
  182 | 
  183 |     this.enabledStatusRadio = page
  184 |       .getByText("Enabled", { exact: true })
  185 |       .locator("..")
  186 |       .locator('input[type="radio"]');
  187 | 
  188 |     this.disabledStatusRadio = page
  189 |       .getByText("Disabled", { exact: true })
  190 |       .locator("..")
  191 |       .locator('input[type="radio"]');
  192 | 
  193 |     this.confirmPasswordValidation = page
  194 |       .locator(".oxd-input-group")
  195 |       .filter({
  196 |         has: page.getByText("Confirm Password", {
  197 |           exact: true,
  198 |         }),
  199 |       })
  200 |       .locator(".oxd-input-field-error-message");
  201 | 
  202 |     this.passwordValidation = page
  203 |       .locator(".oxd-input-group")
  204 |       .filter({
  205 |         has: page.getByText("Password", { exact: true }),
  206 |       })
  207 |       .locator(".oxd-input-field-error-message");
  208 | 
  209 |     this.passwordStrengthIndicator = page
  210 |       .locator(".oxd-input-group")
  211 |       .filter({
  212 |         has: page.getByText("Password", { exact: true }),
  213 |       })
  214 |       .locator("span")
  215 |       .filter({
  216 |         hasText: /Weak|Better|Medium|Strong/i,
  217 |       });
  218 | 
  219 |     const createLoginDetailsRow = page
  220 |       .locator(".oxd-form-row")
  221 |       .filter({ hasText: "Create Login Details" });
  222 | 
  223 |     this.createLoginDetailsCheckbox = createLoginDetailsRow.locator(
  224 |       'input[type="checkbox"]',
  225 |     );
  226 | 
  227 |     this.createLoginDetailsSwitch = createLoginDetailsRow.locator(
  228 |       "span.oxd-switch-input",
  229 |     );
  230 | 
  231 |     this.usernameValidation = page
  232 |       .locator(".oxd-input-group")
  233 |       .filter({
  234 |         has: page.getByText("Username", { exact: true }),
  235 |       })
  236 |       .locator(".oxd-input-field-error-message");
  237 | 
  238 |     this.canceldeletiondilogbutton = page.getByRole("button", {
  239 |       name: /No, Cancel/i,
  240 |     });
  241 |   }
  242 | 
  243 |   async gotoAddEmployee(): Promise<void> {
> 244 |     await this.AddEmployeeLink.click();
      |                                ^ Error: locator.click: Test timeout of 60000ms exceeded.
  245 |   }
  246 | 
  247 |   // async addEmployee(details: AddEmployeeDetails): Promise<string> {
  248 |   //   if (details.firstName !== undefined) {
  249 |   //     await this.firstnameInput.fill(details.firstName);
  250 |   //   }
  251 | 
  252 |   //   if (details.middleName !== undefined) {
  253 |   //     await this.middlenameInput.fill(details.middleName);
  254 |   //   }
  255 | 
  256 |   //   if (details.lastName !== undefined) {
  257 |   //     await this.lastnameInput.fill(details.lastName);
  258 |   //   }
  259 | 
  260 |   //   let employeeId = details.employeeId ?? (await this.employeeID.inputValue());
  261 | 
  262 |   //   // if (details.employeeId !== undefined) {
  263 |   //   //   await this.employeeID.fill(employeeId);
  264 |   //   // }
  265 | 
  266 |   //   // await this.employeeID.blur();
  267 | 
  268 |   //   // const duplicateIdFound = await this.employeeIdValidation
  269 |   //   //   .waitFor({
  270 |   //   //     state: "visible",
  271 |   //   //     timeout: 3_000,
  272 |   //   //   })
  273 |   //   //   .then(() => true)
  274 |   //   //   .catch(() => false);
  275 | 
  276 |   //   // if (duplicateIdFound) {
  277 |   //   //   employeeId = `E${Date.now().toString().slice(-9)}`;
  278 | 
  279 |   //   //   await this.employeeID.fill(employeeId);
  280 |   //   //   await this.employeeID.blur();
  281 | 
  282 |   //   //   await expect(this.employeeID).toHaveValue(employeeId);
  283 |   //   //   await expect(this.employeeIdValidation).toBeHidden();
  284 |   //   // }
  285 | 
  286 |   //   if (details.profilePicturePath !== undefined) {
  287 |   //     const defaultImageSrc =
  288 |   //       await this.profilePicturePreview.getAttribute("src");
  289 | 
  290 |   //     await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  291 | 
  292 |   //     await expect(this.profilePicturePreview).not.toHaveAttribute(
  293 |   //       "src",
  294 |   //       defaultImageSrc ?? "",
  295 |   //     );
  296 |   //   }
  297 | 
  298 |   //   const personalDetailsLoaded = this.page.waitForResponse(
  299 |   //     (response) =>
  300 |   //       response.url().includes("/personal-details") &&
  301 |   //       response.request().method() === "GET" &&
  302 |   //       response.ok(),
  303 |   //     { timeout: 20_000 },
  304 |   //   );
  305 | 
  306 |   //   await this.SaveEmployeeButton.click();
  307 | 
  308 |   //   await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  309 |   //     timeout: 20_000,
  310 |   //   });
  311 | 
  312 |   //   await personalDetailsLoaded;
  313 |   //   await expect(this.loadingSpinner).toBeHidden();
  314 |   //   await expect(this.personalDetailsHeading).toBeVisible();
  315 | 
  316 |   //   return employeeId;
  317 |   // }
  318 | 
  319 |   async addEmployee(details: AddEmployeeDetails): Promise<string> {
  320 |     await this.firstnameInput.fill(details.firstName);
  321 | 
  322 |     if (details.middleName !== undefined) {
  323 |       await this.middlenameInput.fill(details.middleName);
  324 |     }
  325 | 
  326 |     await this.lastnameInput.fill(details.lastName);
  327 | 
  328 |     // Always use a unique ID unless the test provides one.
  329 |     const employeeId = details.employeeId ?? this.generateUniqueEmployeeId();
  330 | 
  331 |     await this.employeeID.fill(employeeId);
  332 |     await this.employeeID.blur();
  333 | 
  334 |     await expect(this.employeeID).toHaveValue(employeeId);
  335 | 
  336 |     // Upload an optional profile picture.
  337 |     if (details.profilePicturePath !== undefined) {
  338 |       const originalImageSource =
  339 |         await this.profilePicturePreview.getAttribute("src");
  340 | 
  341 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  342 | 
  343 |       await expect
  344 |         .poll(async () => this.profilePicturePreview.getAttribute("src"), {
```