import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I navigate to the home page", async function () {
  await this.page.goto("/");
});

Then(
  'all cards should display the name, image, and "Ver detalle" link',
  async function () {
    const cards = this.page.locator(".card");

    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);

    for (let i = 0; i < cardCount; i++) {
      const card = cards.nth(i);

      const name = await card.locator(".name").textContent();
      const image = await card.locator("img");
      const link = await card.locator("text=Ver detalle");

      expect(name).not.toBeNull();
      expect(await image.getAttribute("src")).not.toBeNull();
      await expect(link).toBeVisible();
    }
  }
);

When(
  'I click on the "Ver detalle" button of the first card',
  async function () {
    const link = this.page.locator("text=Ver detalle").first();
    await link.click();
  }
);

Then("I should be navigated to the character view", async function () {
  await expect(this.page).toHaveURL(/character\/1/);
});
