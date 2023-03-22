import {test, expect} from '@playwright/test'

test.beforeAll(async () => {
    console.log('Before tests');
});
  
test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Main area', () => {
    test('Contains 1 form in moviespage.', async ({page}) => {
        await page.goto('http://localhost:3000/moviespage');
        
        await expect(page.locator('div > form')).toHaveCount(1);
    })
})

