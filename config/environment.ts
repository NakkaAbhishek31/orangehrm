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
  // The public OrangeHRM demo shares mutable data and sessions across tests.
  // Run serially by default; opt into parallelism explicitly when using an
  // isolated test instance.
  workers: positiveInteger(process.env.PLAYWRIGHT_WORKERS, 1),
  actionTimeoutMs: positiveInteger(process.env.ACTION_TIMEOUT_MS, 70_000),
  navigationTimeoutMs: positiveInteger(
    process.env.NAVIGATION_TIMEOUT_MS,
    70_000,
  ),
} as const;
