import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://areena.yle.fi/1-3339547');
  
  await expect(page.locator('span:has-text("Test cases for finding 3rd season, 5th episodes name and date")')).toBeTruthy();
  
});