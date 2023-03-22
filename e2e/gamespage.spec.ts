import {test, expect} from '@playwright/test'

test.beforeAll(async () => {
    console.log('Before tests');
});
  
test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Main area', () => {
    test('Contains 1 form in gamespage.', async ({page}) => {
        await page.goto('http://localhost:3000/gamespage');
        
        await expect(page.locator('form')).toHaveCount(1);
    })

    // test('Contains 3 div in gamespage.', async ({page}) => {
    //     await page.goto('http://localhost:3001/gamespage');
        
    //     await expect(page.locator('div')).toHaveCount(134);
    // })

})

