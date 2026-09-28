const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../../src/pages/LoginPagePractice/LoginPage");
const { ShopPage } = require("../../../src/pages/LoginPagePractice/ShopPage");
const loginData = require("../../../data/LoginPagePractice/loginData.json");
const productsData = require("../../../data/LoginPagePractice/productsData.json");

test("Successful Login to 'LoginPage Practise'", async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goToPage();
    await loginPage.login(loginData.validUser);
    const shopPage = new ShopPage(page);
    const productName = productsData.productName.firstProd
    const visibilityValidation = await shopPage.getProductLink(productName);
    await expect(visibilityValidation).toBeVisible();
    const prodText = await shopPage.getProdText(productName);
    console.log("Here is prod string:", prodText);
})