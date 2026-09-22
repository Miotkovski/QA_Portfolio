# Test Cases - Form Submissions

## TC005: Negative validation for required Email and Name field
* **Priority:** Medium
* **Type:** Manual / Automated
* **Automated Test File** [`negativeFormValidation.spec.js`](../../../tests/ui-js/LoginPagePractice/negativeFormValidation.spec.js)
* **Preconditions:** The form page is loaded (`/angularpractice/`).

### Steps to Reproduce:
1. Navigate to the form page.
2. Focus on the "Email" input field and immediately leave it empty (blur).
3. Focus on the "Name" input field and immediately leave it empty (blur).

### Expected Result:
1. Below email and name fields display error 'Name is required' & 'Email is required'.
2. The input field is marked as invalid by receiving the `ng-invalid` class in the DOM.