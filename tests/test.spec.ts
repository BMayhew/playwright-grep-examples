import { test, expect } from "@playwright/test"; // Import the custom matchers definition

test.describe("Custom Assertions", async () => {
  test("Working test @happy", async () => {
    expect(true).toBe(true);
  });

  test("flakey test @unsatisfactory", async () => {
    const randomBoolean = Math.random() > 0.5;
    expect(randomBoolean).toBe(true);
  });

  test("1 flakey test @happy @unsatisfactory", async () => {
    const randomBoolean = Math.random() > 0.5;
    expect(randomBoolean).toBe(true);
  });

  test("2 flakey test @unsatisfactory", async () => {
    const randomBoolean = Math.random() > 0.5;
    expect(randomBoolean).toBe(true);
  });

  test("3 flakey test @unsatisfactory", async () => {
    const randomBoolean = Math.random() > 0.5;
    expect(randomBoolean).toBe(true);
  });

  test("4 flakey test @unsatisfactory", async () => {
    const randomBoolean = Math.random() > 0.5;
    expect(randomBoolean).toBe(true);
  });
});
