const { BasePage } = require("./BasePage");

class ShopPage extends BasePage {
    constructor(page) {
        super(page);
        this.shopNameLocator = page.getByRole("heading", { name: 'Shop Name' }); // here also assertion
        this.productCards = page.locator("app-card"); //4 results
        this.checkoutLocator = page.locator("a.nav-link:has-text('Checkout')");
        this.confirmCheckoutBtn = page.locator("td button:has-text('Checkout')");
    }

    async getProductLink(productName) {
        const productLocator = this.page.getByRole("link", { name: productName });
        productLocator.waitFor({ state: 'visible', timeout: 10000 });
        return productLocator;

    }
    async getProdText(productName) {
        return this.page.getByRole("link", { name: productName }).textContent();
    }
    async addProdToCart(productName) {
        const targetProduct = this.productCards.filter({
            has: this.page.getByRole("link", { name: productName })
        });
        await targetProduct.getByRole("button", { name: 'Add' }).click();
    }
    async goToCheckout() {
        await this.checkoutLocator.click();
        await this.confirmCheckoutBtn.waitFor({ state: 'visible', timeout: 5000 });
    }
}
module.exports = { ShopPage };