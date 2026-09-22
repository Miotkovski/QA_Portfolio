const { test, expect } = require("@playwright/test");
const { FormPage } = require("../../../src/pages/LoginPagePractice/FormPage");

test("Should display validation error when Name field is shorter than 2 characters", async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.goToPage();
    await formPage.fillNameAndBlur("T");
    await expect(formPage.nameLengthErrLocator).toBeVisible();
    await expect(formPage.nameInputLocator).toHaveClass(/ng-invalid/);
})

test("Should display validation error when name field is empty", async ({ page }) => {
    const formPage = new FormPage(page);
    //najezdza i bluruje field name 
    await formPage.goToPage();
    await formPage.nameInputLocator.focus();
    await formPage.nameInputLocator.blur();
    await expect(formPage.nameInputLocator).toHaveClass(/ng-invalid/);
    await expect(formPage.nameRequiredErrLoc).toBeVisible();

})

test("Should display validation error when email field is empty", async ({ page }) => {
    //najezdza i bluruje field email
    await formPage.emailInputLocator.focus();
    await formPage.emailInputLocator.blur();
    await expect(formPage.emailInputLocator).toHaveClass(/ng-invalid/);
    await expect(formPage.emailRequiredErrLoc).toBeVisible();
});

test.only("Radio button should be disabled", async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.goToPage();
    await expect(formPage.entrepreneurStatusLoc).toBeDisabled();
});