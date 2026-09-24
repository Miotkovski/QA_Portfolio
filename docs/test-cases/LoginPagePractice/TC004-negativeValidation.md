# Test Cases - Form Submissions

## TC004: Negative validation for Name field minlength requirement
* **Priority:** Medium
* **Type:** Manual / Automated 
* **Automated Test File** [`negativeFormValidation.spec.js`](../../../tests/ui-js/LoginPagePractice/negativeFormValidation.spec.js)
* **Preconditions:** The form page is loaded (`/angularpractice/`).

### Steps to Reproduce:
1. Navigate to the form page.
2. Enter a single character (e.g., `T`) into the "Name" input field.
3. Click outside the field (blur) to trigger validation.

### Expected Result:
1. The field validation error message (e.g., "Name should be at least 2 characters long") is displayed below the input.
2. The input field is marked as invalid.`