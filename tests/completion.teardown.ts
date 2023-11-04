import { test as teardown } from "@playwright/test";
import * as fs from "fs";

teardown("Print warnings", async () => {
  console.log("This is the end");
});
