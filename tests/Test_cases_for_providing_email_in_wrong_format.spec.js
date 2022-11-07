import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://yle.fi/aihe/yle-tunnus');
  await page.getByRole('button', { name: 'Hyväksy kaikki' }).click();
  await page.getByRole('button', { name: 'Luo Yle Tunnus' }).click();
  await page.frameLocator('role=dialog[name="luo Yle-tunnus"] >> iframe').getByLabel('Sähköposti').click();
  await page.frameLocator('role=dialog[name="luo Yle-tunnus"] >> iframe').getByLabel('Sähköposti').fill('sdfdsg');
  await page.frameLocator('role=dialog[name="luo Yle-tunnus"] >> iframe').getByText('SalasanaMillainen on hyvä salasana?Hyvä salasana on riittävän pitkä (yli 12 merk').click();
  await page.frameLocator('role=dialog[name="luo Yle-tunnus"] >> iframe').getByText('Tarkista sähköpostiosoitteen muoto.').click();

 const errorMessage =  await page.frameLocator('role=dialog[name="luo Yle-tunnus"] >> iframe').getByText('Tarkista sähköpostiosoitteen muoto.')
 await expect(errorMessage).toContainText('Tarkista sähköpostiosoitteen muoto.')

});



