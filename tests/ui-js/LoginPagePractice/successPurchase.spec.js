const { test, expect } = require("@playwright/test");
const { ShopPage } = require("../../../src/pages/LoginPagePractice/ShopPage");
const { CheckoutPage } = require("../../../src/pages/LoginPagePractice/CheckoutPage");
const productsData = require("../../../data/LoginPagePractice/productsData.json");
const checkoutData = require("../../../data/LoginPagePractice/checkoutData.json");


test("Success purchase for 'fourthProduct.'", async ({ page }) => {
    const testProduct = productsData.productName.fourthProd //HERE IS PROD NAM WHICH WE TESTS
    const checkoutText = checkoutData.checkoutInfo.countryText

    const shopPage = new ShopPage(page);
    
    await shopPage.goToShopPage();
    await shopPage.addProdToCart(testProduct);
    await shopPage.goToCheckout();
    
    const checkoutPage = new CheckoutPage(page);
    
    expect(await checkoutPage.getProdNameInCart(testProduct)).toEqual(testProduct);
    console.log(`Name of :${testProduct}`,await checkoutPage.getProdNameInCart(testProduct)); //info for me 
    
    const actualQuantity = await checkoutPage.getQuantityFromProduct(testProduct);
    expect(actualQuantity).toEqual('1');
    console.log(`Actual quantity of ${testProduct}`,actualQuantity);
    await checkoutPage.clickCheckout();

    const actualTextDelivery = await checkoutPage.getTextAboutDelivery()
    expect(actualTextDelivery).toContain(checkoutText);
    console.log(actualTextDelivery);
    const countryInput = checkoutData.checkoutInfo.country
    await checkoutPage.enterCountryAndClick(countryInput);
    await checkoutPage.acceptTerms();
    await checkoutPage.clickPurchase();
    const successTextData = checkoutData.checkoutInfo.successText;
    const successText = await checkoutPage.getSuccessText();
    
    expect(successText).toContain(successTextData);
    console.log(successText)
})