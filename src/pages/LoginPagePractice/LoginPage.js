const { BasePage } = require("./BasePage");

class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.usernameLocator = page.locator("#username");
        this.passwordLocator= page.locator("#password");
        this.adminRadioBtnLocator = page.locator("input[value*='admin']");
        this.userRoleLocator = page.locator("select");
        this.termsLocator = page.locator("#terms");
        this.signInBtn = page.locator('#signInBtn')
    };
async goToPage(){
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
}
async entryUserCredentials(username,password){
    await this.usernameLocator.fill(username);
    await this.passwordLocator.fill(password);
}
async selectAdminStudentTerms(){
    await this.adminRadioBtnLocator.check()
    await this.userRoleLocator.selectOption("Student");
    await this.termsLocator.check();
}
async clickSignInBtn(){
    await this.signInBtn.click();
}
async login(userData){
    await this.entryUserCredentials(userData.username,userData.password);
    await this.selectAdminStudentTerms();
    await this.clickSignInBtn();
}

}
module.exports = {LoginPage};