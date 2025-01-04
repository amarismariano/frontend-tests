import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I navigate to the character view", async function () {
  await this.page.goto("/character/1");
});

When("I click the home button", async function () {
  const homeButton = this.page.locator("text=Home");
  await homeButton.click();
});

Then("I should be navigated to the home page", async function () {
  await expect(this.page).toHaveURL("/");
});
