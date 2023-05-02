import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Erase your beautiful canvas' }).click();
  await page.locator('div:nth-child(3)').first().click();
  await page.locator('div:nth-child(2) > div').first().click();
  await page.locator('.w-\\[60px\\]').click();
});