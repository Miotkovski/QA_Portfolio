const {BasePage} = require("../BasePage");
class FormPage extends BasePage {
    constructor(page) {
        super(page);
        this.nameInputLocator = page.locator("input[name='name']").first();
        this.emailLocator = page.locator("input[name='email']");
        this.passwordLocator = page.getByPlaceholder("Password");
        this.checkIceCreamLocator = page.locator("#exampleCheck1");
        this.genderSelectLocator = page.locator("select[id='exampleFormControlSelect1']");
        this.employStatusStudentLoc = page.locator("#inlineRadio1");
        this.employStatusEmployedLoc = page.locator("#inlineRadio2");
        this.birthDateLocator = page.locator("input[name='bday']");
        this.submitLocator = page.locator("input[value='Submit']");
        this.twoWayBindingLocator = page.locator("input[name='name']").last();
        this.successAlertLoc = page.getByText("The Form has been submitted successfully");
        this.validationErrorLocator = page.locator(".alert.alert-danger");
    }
    async goToPage(){
        await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
    }
    async fillName(name){
        await this.nameInputLocator.fill(name);
        await this.nameInputLocator.blur();
    }
    async fillUserCredentials(credentials) {
        await this.nameInputLocator.fill(credentials.name);
        await this.emailLocator.fill(credentials.email);
        await this.passwordLocator.fill(credentials.password);
    }
    async checkIceCreamCheckbox(){
        await this.checkIceCreamLocator.check();
    }
    async selectGender(gender){
        await this.genderSelectLocator.selectOption(gender);
    }
    async checkEmploymentStatus(employmentStatus){
        if(employmentStatus === "Student"){
            await this.employStatusStudentLoc.check();
        }
        else if(employmentStatus === "Employed") {
            await this.employStatusEmployedLoc.check();
        }
        else{
            throw new Error("Invalid Value of employment status. Permitted values are 'Student' and 'Employed' ") 
        }
    }
    async inputBirthDate(birthDate){
        await this.birthDateLocator.fill(birthDate);
    }
    async getTwoWayBindingText(){
        return await this.twoWayBindingLocator.inputValue();      
    }
    async clickSubmitBtn(){
        await this.submitLocator.click();
    }
    async getAlertText(){
        return this.successAlertLoc.textContent();
    }
    async fillEntireForm(userData){
        await this.goToPage();
        await this.fillUserCredentials(userData);
        await this.checkIceCreamCheckbox();
        await this.selectGender(userData.gender);
        await this.checkEmploymentStatus(userData.employmentStatus);
        await this.inputBirthDate(userData.birthDate);
        //await this.clickSubmitBtn();
    }
    

}
module.exports = { FormPage };