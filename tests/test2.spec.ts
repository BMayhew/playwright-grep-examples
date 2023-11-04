import { test, expect } from "@playwright/test"; // Import the custom matchers definition

test.describe("Test 2", async () => {
  test("Working test no tag", async () => {
    expect(true).toBe(true);
  });
});
