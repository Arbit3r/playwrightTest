import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://areena.yle.fi/tv/opas');
  
  await expect(page.locator('span:has-text("22.00 Kymmenen uutiset")')).toBeTruthy();
  
});