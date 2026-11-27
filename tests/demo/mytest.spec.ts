import {test, expect} from "@playwright/test";

test("basic test", async ({page}) => {
// Go to home page
await page.goto('https://moventai-sdet-practice-app.vercel.app/');
// Assert if the title is correct
await expect(page).toHaveTitle('moventAI Practice App');
// Assert header text
await expect(page.locator('//h1')).toHaveText('Welcome to the moventAI Practice App');
});
