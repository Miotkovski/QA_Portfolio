const {test,expect} = require("@playwright/test");
const { FormPage } = require("../../../src/pages/LoginPagePractice/FormPage");
const formData = require("../../../data/LoginPagePractice/formData.json")


test.describe("Birth Date Field Validation", () =>{
    let formPage;
    test.beforeEach(({page})=>{
        formPage = new FormPage(page);
        formPage.goToPage();
    })
    for(const {description, input, expected} of formData.birthDateValidation){
    
        test(`Should handle ${description} correctly`,async()=>{
            await formPage.inputBirthDate(input);
            await expect(formPage.birthDateLocator).toHaveValue(expected);
        });
    }
})