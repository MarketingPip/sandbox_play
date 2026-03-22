import { chromium } from 'playwright';
import { writeFile } from 'fs/promises';

(async () => {
  // 1. Launch the browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log("Evaluating browser context...");

  // 2. Extract globals from the browser environment
  const results = await page.evaluate(() => {
    return Object.getOwnPropertyNames(globalThis).sort();
  });

  // 3. Write results to a JSON file
  const fileName = 'browser_globals.json';
  await writeFile(fileName, JSON.stringify(results, null, 2));

  console.log(`Success! Found ${results.length} globals.`);
  console.log(`Results saved to: ${fileName}`);

  await browser.close();
})();
