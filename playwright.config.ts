import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  projects: [
    { name: "setup", testMatch: /test.setup.ts/ },
    {
      name: "specs",
      dependencies: ["setup"],
    },
    {
      name: "teardown",
      dependencies: ["setup", "specs"],
      testMatch: /completion.teardown.ts/,
    },
  ],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },
});
