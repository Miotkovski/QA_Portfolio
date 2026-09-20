const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../../src/pages/LoginPagePractice/LoginPage");
const { ShopPage } = require("../../../src/pages/LoginPagePractice/ShopPage");
const loginData = require("../../../data/LoginPagePractice/loginData.json");
const prodData = require("../../../data/LoginPagePractice/productsData.json");

test("Successful Login to 'LoginPage Practise'", async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goToPage();
    await loginPage.entryUserCredentials(loginData.validUser.username, loginData.validUser.password);
    await loginPage.selectAdminStudentTerms();
    await loginPage.clickSignInBtn();
    const shopPage = new ShopPage(page);
    const visibilityValidation = await shopPage.getProductLink(prodData.productName.firstProd);
    await expect(visibilityValidation).toBeVisible();
    const prodText = await shopPage.getProdText(prodData.productName.firstProd);
    console.log("Here is prod string:", prodText);
})