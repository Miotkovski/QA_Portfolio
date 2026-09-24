# Test Cases - Form Submissions

## TC009: Two-way data binding reflection in Name input
* **Priority:** Medium
* **Type:** Manual / Automated
* **Automated Test File:** [`negativeFormValidation.spec.js`](../../../tests/ui-js/LoginPagePractice/negativeFormValidation.spec.js)
* **Preconditions:** The form page is loaded (`/angularpractice/`).

### Steps to Reproduce:
1. Navigate to the form page.
2. Enter text into the main "Name" input field (e.g., `Tester`).
3. Move focus away from the input field (blur).
4. Observe the second "Two-way Data Binding" input field at the bottom of the page.

### Expected Result:
1. The text entered in the main "Name" field is immediately reflected in the "Two-way Data Binding" input field.