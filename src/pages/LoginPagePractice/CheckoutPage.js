const { BasePage } = require("./BasePage");

class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
        this.checkoutBtnLocator = page.locator("button:has-text('Checkout')");
        this.deliveryTextLocator = page.locator("label[for='country']");
        this.countryInputLocator = page.locator("#country");
        this.termsLocator = page.locator("label[for='checkbox2']");
        this.purchaseBtnLocator = page.locator("input[value='Purchase']");
        this.successTextLocator = page.getByText("Success! Thank you! Your order will be delivered in next few weeks :-).");
    }

    async getProdNameInCart(productName) {
        const whatIsInCart = await this.page.getByRole("link", { name: productName });
        const text = await whatIsInCart.textContent();
        return text.trim();
    }
    async getQuantityFromProduct(productName) {

        const tableRow = this.page.locator("tbody tr").filter({
            has: this.page.getByRole('link', { name: productName })
        });
        const quantity = await tableRow.locator('.form-control').inputValue();
        return quantity;//assercja w teście = 1 
    }
    async clickCheckout() {
        await this.checkoutBtnLocator.click();
    }
    async getTextAboutDelivery() {
        const textCountry = await this.deliveryTextLocator.textContent();
        return textCountry.trim();
    }
    async enterCountryAndClick(country) {
        await this.countryInputLocator.pressSequentially(country, { delay: 150 });
        const countrySuggestionLocator = this.page.locator(`.suggestions ul li a`,{hasText:country});
        await countrySuggestionLocator.waitFor({state:'visible',timeout:7500});
        await countrySuggestionLocator.click();
        await this.page.waitForTimeout(2000);
        await countrySuggestionLocator.click();
        // await this.page.locator('.suggestions').waitFor({ state: 'hidden' });
    }
    async acceptTerms() {
        await this.termsLocator.click();
    }
    async clickPurchase(){
        await this.purchaseBtnLocator.click();
    }
    async getSuccessText(){
        const successText = await this.successTextLocator.textContent();
        return successText.trim();
    }
    async completePurchase(country){
        await this.enterCountryAndClick(country)
        await this.acceptTerms();
        await this.clickPurchase();
    }

}
module.exports = { CheckoutPage };