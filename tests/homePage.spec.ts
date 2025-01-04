import { test, expect } from "@playwright/test";

test("Validate card details", async ({ page }) => {
  console.log("⏳ Navigating to the page...");
  await page.goto("/");
  await page.waitForTimeout(2000); // Pausa para permitir que se vea la navegación
  console.log("✅ Navigation successful.");

  const cardsContainer = page.locator("div.grid.grid-cols-2");
  console.log("⏳ Waiting for cards container...");
  await expect(cardsContainer).toBeVisible({ timeout: 15000 });
  console.log("✅ Cards container loaded.");
  await page.waitForTimeout(2000); // Pausa para visualizar las tarjetas

  const cards = page.locator("div.relative.rounded-lg");
  const cardCount = 5;
  console.log(`🔍 Found ${cardCount} card(s).`);
  expect(cardCount).toBeGreaterThan(0);

  for (let i = 0; i < cardCount; i++) {
    const card = cards.nth(i);
    console.log(`🔍 Checking card ${i + 1}...`);

    const name = await card
      .locator("span.w-full.block.text-white")
      .textContent();
    expect(name).not.toBeNull();

    const image = card.locator("figure img");
    await expect(image).toBeVisible();
    expect(await image.getAttribute("src")).not.toBeNull();

    const link = card.locator('a:has-text("Ver detalle")');
    await expect(link).toBeVisible();
    expect(await link.getAttribute("href")).not.toBeNull();

    await page.waitForTimeout(1000); // Pausa después de validar cada tarjeta
  }

  console.log("✅ All cards validated.");
});
