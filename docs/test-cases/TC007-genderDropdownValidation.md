# Test Cases - Form Submissions

## TC007: Gender dropdown options validation
* **Priority:** Low
* **Type:** Manual / Automated
* **Automated Test File:** [`negativeFormValidation.spec.js`](../../../tests/ui-js/LoginPagePractice/negativeFormValidation.spec.js)
* **Preconditions:** The form page is loaded (`/angularpractice/`).

### Steps to Reproduce:
1. Navigate to the form page.
2. Locate the "Gender" select dropdown.
3. Verify the available options in the dropdown list.

### Expected Result:
1. The dropdown contains exactly two options: "Female" and "Male".