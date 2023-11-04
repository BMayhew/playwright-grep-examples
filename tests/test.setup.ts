import { test as setup } from "@playwright/test";

setup("this is a setup step", async () => {
  console.log("this is a setup step");
});
