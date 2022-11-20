
//const { axe } = require('@axe-core/playwright').default;
const AxeBuilder = require('@axe-core/playwright').default;
const { chromium } = require('playwright')
const { expect } = require('@playwright/test')

const parallelTests = async (capability) => {
  console.log('Initialising test:: ', capability['LT:Options']['name'])

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  })

  const context = await browser.newContext();
  const page = await context.newPage()
  let testError = 0;
  try {
    const builder = new AxeBuilder({ page });
    builder.options({ reviewOnFail: true });
    const results = await builder 
      .analyze()
      //console.log(" Vialations: " +results.violations.length);
      //console.log(" Incomplete: " +results.incomplete.length);      
      //console.log(" Inapplicable: " +results.inapplicable.length);    
      //console.log(" Passes: " +results.passes.length);
      //expect(results.violations.length).toEqual([]);
      testError = results.violations.length + results.inapplicable.length;
    } catch (e) {
    console.error('Something bad happened:', e.message);
  }

  await page.goto('https://areena.yle.fi/tv/opas');

  await expect(page.locator('span:has-text("22.00 Kymmenen uutiset")')).toBeTruthy();
  console.log("Testing errors: "+ testError);
  await browser.close()
}

// Capabilities array for with the respective configuration for the parallel tests
const capabilities = [
  {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test on Windows 10 - Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  },
  {
    'browserName': 'MicrosoftEdge',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 8',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test on Windows 8 - MicrosoftEdge',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  },
  {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'MacOS Big sur',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test on MacOS Big sur - Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  }]

capabilities.forEach(async (capability) => {
  await parallelTests(capability)
})