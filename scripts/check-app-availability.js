const DEFAULT_BASE_URL = "https://opensource-demo.orangehrmlive.com";
const baseUrl = process.env.ORANGEHRM_BASE_URL || DEFAULT_BASE_URL;
const loginUrl = new URL("/web/index.php/auth/login", baseUrl);
const attempts = 3;
const requestTimeoutMs = 20_000;
const retryDelayMs = 5_000;

if (!(["http:", "https:"].includes(loginUrl.protocol))) {
  throw new Error(`Unsupported OrangeHRM URL protocol: ${loginUrl.protocol}`);
}

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function main() {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(loginUrl, {
        signal: AbortSignal.timeout(requestTimeoutMs),
        redirect: "follow",
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      console.log(`OrangeHRM is reachable at ${response.url} (HTTP ${response.status}).`);
      return;
    } catch (error) {
      lastError = error;
      console.error(
        `OrangeHRM availability check ${attempt}/${attempts} failed: ${error.message}`,
      );

      if (attempt < attempts) {
        await delay(retryDelayMs);
      }
    }
  }

  console.error(
    `Cannot reach OrangeHRM at ${loginUrl}. Check Jenkins agent DNS, outbound HTTPS access, and ORANGEHRM_BASE_URL.`,
  );
  console.error(`Last error: ${lastError?.message || "unknown error"}`);
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
