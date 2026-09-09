const positiveInteger = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
};

export const environment = {
  baseUrl:
    process.env.ORANGEHRM_BASE_URL ??
    "https://opensource-demo.orangehrmlive.com",
  adminUsername: process.env.ORANGEHRM_ADMIN_USERNAME ?? "Admin",
  adminPassword: process.env.ORANGEHRM_ADMIN_PASSWORD ?? "admin123",
  workers: positiveInteger(process.env.PLAYWRIGHT_WORKERS, 6),
  actionTimeoutMs: positiveInteger(process.env.ACTION_TIMEOUT_MS, 70_000),
  navigationTimeoutMs: positiveInteger(
    process.env.NAVIGATION_TIMEOUT_MS,
    70_000,
  ),
} as const;
