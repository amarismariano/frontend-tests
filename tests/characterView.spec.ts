import { test, expect } from "@playwright/test";

test("Validate character view details", async ({ page }) => {
  console.log("⏳ Navigating to the page...");
  await page.goto("/");
  await page.waitForTimeout(2000);
  console.log("✅ Navigation successful.");

  const firstDetailLink = page.locator('a:has-text("Ver detalle")').first();
  console.log('⏳ Clicking on the first "Ver detalle" link...');
  await firstDetailLink.click();
  await page.waitForTimeout(2000);
  console.log('✅ Clicked on the first "Ver detalle" link.');

  console.log("⏳ Validating the URL...");
  await expect(page).toHaveURL(/\/character\/\d+/);
  console.log("✅ URL validated.");

  console.log("⏳ Validating character details...");
  const characterName = page.locator("h1");
  await expect(characterName).toBeVisible();
  console.log(`✅ Character name: ${await characterName.textContent()}`);
  await page.waitForTimeout(1000);

  const gender = page.locator('p:has-text("Gender")');
  await expect(gender).toBeVisible();
  console.log(`✅ Gender: ${await gender.textContent()}`);
  await page.waitForTimeout(1000);

  const specie = page.locator('p:has-text("Specie")');
  await expect(specie).toBeVisible();
  console.log(`✅ Specie: ${await specie.textContent()}`);
  await page.waitForTimeout(1000);

  const status = page.locator('p:has-text("Status")');
  await expect(status).toBeVisible();
  console.log(`✅ Status: ${await status.textContent()}`);
  await page.waitForTimeout(1000);
});
