import { test, expect } from "@playwright/test";

test("home shows ENV label", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/ENV:/i)).toBeVisible();
});
