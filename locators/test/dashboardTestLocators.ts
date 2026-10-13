import type { Locator } from "@playwright/test";

export const quickLaunchCards = (widget: Locator) =>
  widget.locator(".orangehrm-quick-launch-card");
