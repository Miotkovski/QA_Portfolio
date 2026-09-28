const {test,expect} = require("@playwright/test");
const formData = require("../../../data/LoginPagePractice/formData.json");
const {FormPage} = require("../../../src/pages/LoginPagePractice/FormPage");
test("Submit User Registration Form", async({page}) =>{
    const formPage = new FormPage(page);
    await formPage.fillEntireForm(formData.userData);
    const twoWayText = await formPage.getTwoWayBindingText();
    expect(twoWayText).toBe(formData.userData.name);
    await formPage.clickSubmitBtn();
    const alertText = await formPage.getAlertText();
    expect(alertText).toContain(formData.userData.successAlert);
})