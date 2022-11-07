import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://areena.yle.fi/tv/opas');
  await page.getByRole('heading', { name: 'Yle TV1' }).getByRole('link', { name: 'Yle TV1' }).click();
  await expect(page).toHaveURL('https://areena.yle.fi/tv/ohjelmat/yle-tv1');
});



