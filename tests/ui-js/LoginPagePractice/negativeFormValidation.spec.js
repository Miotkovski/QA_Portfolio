const { test, expect } = require("@playwright/test");
const { FormPage } = require("../../../src/pages/LoginPagePractice/FormPage");
const userData = require("../../../data/LoginPagePractice/formData.json");
//do zrobienia before each żeby nie powtarzać 
test.describe("Form Validation Tests", ()=>{
    let formPage;
    const userName = userData.userData.name;
    test.beforeEach(async({page})=>{
        formPage = new FormPage(page);
        await formPage.goToPage();
    })

    test("Should display validation error when Name field is shorter than 2 characters", async ({}) => {
        await formPage.fillNameAndBlur("T");
        await expect(formPage.nameLengthErrLocator).toBeVisible();
        await expect(formPage.nameInputLocator).toHaveClass(/ng-invalid/);
    })
    
    test("Should display validation error when name field is empty", async ({}) => {
        await formPage.nameInputLocator.focus();
        await formPage.nameInputLocator.blur();
        await expect(formPage.nameInputLocator).toHaveClass(/ng-invalid/);
        await expect(formPage.nameRequiredErrLoc).toBeVisible();
    
    })
    
    test("Should display validation error when email field is empty", async ({}) => {
        await formPage.emailInputLocator.focus();
        await formPage.emailInputLocator.blur();
        await expect(formPage.emailInputLocator).toHaveClass(/ng-invalid/);
        await expect(formPage.emailRequiredErrLoc).toBeVisible();
    });
    
    test("Radio button should be disabled", async ({}) => {
        await expect(formPage.entrepreneurStatusLoc).toBeDisabled();
    });
    
    test("Gender dropdown should contain two options: 'Female' and 'Male'", async({}) =>{
        await expect(formPage.genderSelectLocator).toHaveText(/Male.*Female/s);
    });

    test("Two-way data binding reflection in Name input", async({})=>{
        await formPage.fillNameAndBlur(userName);
        await expect(formPage.twoWayBindingLocator).toHaveValue(userName);
    });
})