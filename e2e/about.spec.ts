import {test, expect} from '@playwright/test'

test.beforeAll(async () => {
    console.log('Before tests');
});
  
test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Main area', () => {
    test('Contains a single div containing page content.', async ({page}) => {
        await page.goto('http://localhost:3000/about');
        
        await expect(page.locator('h3')).toHaveCount(18);
    })
})

