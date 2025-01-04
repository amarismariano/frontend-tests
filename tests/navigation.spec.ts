import { test, expect } from "@playwright/test";

test("Validate navigation using the home button", async ({ page }) => {
  console.log("⏳ Navigating to the page...");
  await page.goto("/");
  await page.waitForTimeout(2000);
  console.log("✅ Navigation successful.");

  const homeButton = page.locator('a:has-text("Home")');
  console.log("⏳ Clicking on the Home button...");
  await homeButton.click();
  await page.waitForTimeout(2000);
  console.log("✅ Home button clicked.");

  console.log("⏳ Validating the URL...");
  await expect(page).toHaveURL("/");
  console.log("✅ URL validated.");
});
