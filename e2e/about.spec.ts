import {test, expect} from '@playwright/test'

test.beforeAll(async () => {
    console.log('Before tests');
});
  
test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Main area', () => {
    test('Contains a 18 h3 in about page', async ({page}) => {
        await page.goto('http://localhost:3000/about');
        
        await expect(page.locator('h3')).toHaveCount(18);
    })

    test('Contains a 1 h1 in about page', async ({page}) => {
        await page.goto('http://localhost:3000/about');
        
        await expect(page.locator('h1')).toHaveCount(1);
    })

    test('Should contain "about" in about page', async ({ page }) => {
        await page.goto('http://localhost:3000/about')
        await expect(page.locator('h1')).toContainText(["About"]);
    })

    test('Contains h2 in about page', async ({page}) => {
        await page.goto('http://localhost:3000/about');
        
        await expect(page.locator('h2')).toHaveCount(4);
    })

    test('Should contain "Meet the Developers" in about page', async ({ page }) => {
        await page.goto('http://localhost:3000/about')
        await expect(page.locator('h2')).toContainText(["Meet the Developers"]);
    })

    test('Should contain "App development start date:" in about page', async ({ page }) => {
        await page.goto('http://localhost:3000/about')
        await expect(page.locator('h3')).toContainText(["App development start date:"]);
    })

    test('Should contain "Entertainment Spot is an application that can help you find your next favorite movie or video game. This application was built using the Next.js framework and axios is being used to pull data from two separate APIs." in about page', async ({ page }) => {
        await page.goto('http://localhost:3000/about')
        await expect(page.locator('p')).toContainText(["Entertainment Spot is an application that can help you find your next favorite movie or video game. This application was built using the Next.js framework and axios is being used to pull data from two separate APIs."]);
    })

    test('Count numbers of <a> in p', async({ page }) => {
        await page.goto('http://localhost:3000/about')

        await expect(page.locator('p > a')).toHaveCount(10);
    })

    test('Count p in div', async({ page }) => {
        await page.goto('http://localhost:3000/about')

        await expect(page.locator('div > p')).toHaveCount(21);
    })
})

