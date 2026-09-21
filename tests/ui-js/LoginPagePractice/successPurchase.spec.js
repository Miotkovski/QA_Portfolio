const { test, expect } = require("@playwright/test");
const { ShopPage } = require("../../../src/pages/LoginPagePractice/ShopPage");
const { CheckoutPage } = require("../../../src/pages/LoginPagePractice/CheckoutPage");
const productsData = require("../../../data/LoginPagePractice/productsData.json");
const checkoutData = require("../../../data/LoginPagePractice/checkoutData.json");

test("Success purchase for 'fourthProduct.'", async ({ page }) => {
    const testProduct = productsData.productName.fourthProd;
    const { countryText, country, successText: successTextData } = checkoutData.checkoutInfo;

    const shopPage = new ShopPage(page);
    await shopPage.goToShopPage();
    await shopPage.addProdToCart(testProduct);
    await shopPage.goToCheckout();

    const checkoutPage = new CheckoutPage(page);
    expect(await checkoutPage.getProdNameInCart(testProduct)).toEqual(testProduct);
    expect(await checkoutPage.getQuantityFromProduct(testProduct)).toEqual('1');
    
    await checkoutPage.clickCheckout();

    expect(await checkoutPage.getTextAboutDelivery()).toContain(countryText);

    await checkoutPage.completePurchase(country);

    expect(await checkoutPage.getSuccessText()).toContain(successTextData);
});