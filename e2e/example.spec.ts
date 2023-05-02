import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('https://draw-raw.vercel.app/')
  // Find an element with the text 'About Page' and click on it
  const title = await page.title()

  expect(title).toBe("DrawRaw");
})

test('should have image', async ({ page }) => {
  await page.goto('https://draw-raw.vercel.app/')
  
  let canvas = page.locator('div:nth-child(2) > div').first()
  await expect(canvas).toBeEmpty()
})