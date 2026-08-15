# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> PIM Employee List >> TC_RECRUITMENT_140 - Admin should filter Candidates by hiring manager @positive @filter @regression
- Location: tests\Recruitment\recruitment.spec.ts:393:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Hiring Manager', { exact: true }) }).locator('.oxd-select-text')
Expected substring: "No Records Found"
Received string:    "-- Select --"
Timeout: 20000ms

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Hiring Manager', { exact: true }) }).locator('.oxd-select-text')
    42 × locator resolved to <div data-v-67d2aedf="" data-v-13cf171c="" class="oxd-select-text oxd-select-text--active">…</div>
       - unexpected value "-- Select --"

```

```yaml
- text: "-- Select -- "
```

# Test source

```ts
  150 |     visibleDropdown
  151 |   ).toBeVisible();
  152 | 
  153 |   const option = visibleDropdown
  154 |     .locator('.oxd-select-option')
  155 |     .filter({
  156 |       hasText: new RegExp(
  157 |         `^\\s*${optionText}\\s*$`,
  158 |         'i'
  159 |       ),
  160 |     })
  161 |     .first();
  162 | 
  163 |   await expect(option).toBeVisible({
  164 |     timeout: 15_000,
  165 |   });
  166 | 
  167 |   await option.click();
  168 | 
  169 |   await expect(dropdown).toContainText(
  170 |     optionText
  171 |   );
  172 | }
  173 | 
  174 | async selectFirstAvailableVacancy(): Promise<string> {
  175 |   await expect(
  176 |     this.vacancyDropdown
  177 |   ).toBeVisible();
  178 | 
  179 |   await this.vacancyDropdown.click();
  180 | 
  181 |   const visibleDropdown = this.page.locator(
  182 |     '.oxd-select-dropdown:visible'
  183 |   );
  184 | 
  185 |   await expect(
  186 |     visibleDropdown
  187 |   ).toBeVisible();
  188 | 
  189 |   const options = visibleDropdown.locator(
  190 |     '.oxd-select-option'
  191 |   );
  192 | 
  193 |   // The first option is normally "-- Select --".
  194 |   const firstVacancyOption = options.nth(1);
  195 | 
  196 |   await expect(
  197 |     firstVacancyOption
  198 |   ).toBeVisible({
  199 |     timeout: 15_000,
  200 |   });
  201 | 
  202 |   const selectedVacancy = (
  203 |     await firstVacancyOption.innerText()
  204 |   ).trim();
  205 | 
  206 |   await firstVacancyOption.click();
  207 | 
  208 |   await expect(
  209 |     this.vacancyDropdown
  210 |   ).toContainText(selectedVacancy);
  211 | 
  212 |   return selectedVacancy;
  213 | }
  214 | 
  215 | async selectFirstAvailableHiringManager(): Promise<string> {
  216 |   await expect(
  217 |     this.hiringManagerDropdown
  218 |   ).toBeVisible();
  219 | 
  220 |   await this.hiringManagerDropdown.click();
  221 | 
  222 |   const visibleDropdown = this.page.locator(
  223 |     '.oxd-select-dropdown:visible'
  224 |   );
  225 | 
  226 |   await expect(
  227 |     visibleDropdown
  228 |   ).toBeVisible();
  229 | 
  230 |   const managerOptions = visibleDropdown
  231 |     .locator('.oxd-select-option')
  232 |     .filter({
  233 |       hasNotText: /^-- Select --$/,
  234 |     });
  235 | 
  236 |   await expect(
  237 |     managerOptions.first()
  238 |   ).toBeVisible({
  239 |     timeout: 15_000,
  240 |   });
  241 | 
  242 |   const selectedManager = (
  243 |     await managerOptions.first().innerText()
  244 |   ).trim();
  245 | 
  246 |   await managerOptions.first().click();
  247 | 
  248 |   await expect(
  249 |     this.hiringManagerDropdown
> 250 |   ).toContainText(selectedManager);
      |     ^ Error: expect(locator).toContainText(expected) failed
  251 | 
  252 |   return selectedManager;
  253 | }
  254 | 
  255 | 
  256 | }
  257 | 
```