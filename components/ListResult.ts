import { expect, type Locator } from "@playwright/test";

/** Waits until an OrangeHRM list has records or its explicit empty state. */
export const waitForListResult = async (
  loadingSpinner: Locator,
  records: Locator,
  emptyState: Locator,
): Promise<void> => {
  await expect(loadingSpinner).toBeHidden({ timeout: 30_000 });
  await expect
    .poll(
      async () =>
        (await records.count()) > 0 || (await emptyState.isVisible()),
      {
        timeout: 20_000,
        message: "Expected list records or an empty-state message",
      },
    )
    .toBe(true);
};
