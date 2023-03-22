import {test, expect} from '@playwright/test'

test.beforeAll(async () => {
    console.log('Before tests');
});
  
test.afterAll(async () => {
    console.log('After tests');
});
// test.describe('Header area', () => {
//     test('The meta tag', async ({ page }) => { 
//             // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
//             await page.goto('http://localhost:3001/index');
            
//             const metaDescriptionOne = page.locator('meta[name="author"]')
//             await expect(metaDescriptionOne).toHaveAttribute("content", "Blen, Horus, Zahir")

//             const metaDescriptionTwo = page.locator('meta[property="og:title"]');
//             await expect(metaDescriptionTwo).toHaveAttribute('content', 'Entertainment-Spot')

//             const metaDescriptionThree = page.locator('meta[property="og:description"]');
//             await expect(metaDescriptionThree).toHaveAttribute('content', 'BCIT Digital Design and Development Program')
//     })
// })

test.describe('Main area', () => {
    test('Contains a single div containing page content.', async ({page}) => {
        await page.goto('http://localhost:3000/index');
        
        await expect(page.locator('div')).toHaveCount(5);
    })
})

