const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // This runs INSIDE the browser context
  const results = await page.evaluate(() => {
    return Object.getOwnPropertyNames(globalThis).sort();
  });

  console.log("Browser Globals Found:");
  console.log(JSON.stringify(results, null, 2));

  await browser.close();
})();
