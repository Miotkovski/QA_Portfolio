class BasePage {
    constructor(page) {
        this.page = page;
        this.homeNavLocator = page.getByText('Home', { exact: true });
        this.shopNavLocator = page.getByRole('link', { name: 'Shop' });
    }

    async goToShopPage(){
        await this.page.goto("https://rahulshettyacademy.com/angularpractice/shop");
    }

    async navigateToHome() {
        await this.homeNavLocator.click();
    }
    async navigateToShop(){
        await this.shopNavLocator.click();
    }
}
module.exports = {BasePage};