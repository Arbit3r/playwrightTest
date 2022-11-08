import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
   await page.goto('https://areena.yle.fi/1-3339547');

  await page.getByRole('button', { name: 'Vain välttämättömät' }).click();
  await expect(page).toHaveTitle(/Kummeli/); // create a locator
  await page.getByRole('button', { name: 'Kausi 3' }).click();

  await page.getByRole('link', { name: 'Jakso 5: Kummeli' }).click();
  await expect(page).toHaveURL('https://areena.yle.fi/1-1796319');

  page.once('load', () => console.log('Page loaded!'));
  
  const data = await page.evaluate(() => {
    return{
      SarjaNimi: document.title,
      Episode: document.querySelector('h1').innerHTML,
      Date: document.querySelector('time').innerHTML
    }
  });

  console.log('Kausin 3 tiedot --->>>>', data);
  //await page.waitForTimeout(5000);
});