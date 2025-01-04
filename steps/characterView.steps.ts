import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I navigate to the character view", async function () {
  await this.page.goto("/character/1");
});

Then(
  "the page should display the name, genre, species, and status",
  async function () {
    const name = this.page.locator(".name");
    const genre = this.page.locator(".genre");
    const species = this.page.locator(".species");
    const status = this.page.locator(".status");

    await expect(name).toBeVisible();
    await expect(genre).toBeVisible();
    await expect(species).toBeVisible();
    await expect(status).toBeVisible();
  }
);
