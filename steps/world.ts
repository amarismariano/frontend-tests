import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";

class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  async openBrowser() {
    this.browser = await chromium.launch({ headless: true });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
