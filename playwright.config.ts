import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://vue-aknxx1.stackblitz.io",
    browserName: "chromium",
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    navigationTimeout: 20000,
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
  },
  timeout: 60000,
  retries: 1,
  workers: 1,
});
