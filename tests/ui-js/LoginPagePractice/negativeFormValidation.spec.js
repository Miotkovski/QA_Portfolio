const{test,expect} = require("@playwright/test");
const { FormPage } = require("../../../src/pages/LoginPagePractice/FormPage");

test("Should display validation error when Name field is shorter than 2 characters", async({page}) =>{
    const formPage = new FormPage(page);
    await formPage.goToPage();
    await formPage.fillName("T");
    await expect(formPage.validationErrorLocator).toBeVisible();
    await expect(formPage.nameInputLocator).toHaveClass(/ng-invalid/);
})