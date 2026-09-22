# Test Cases - Form Submissions

## TC006: Disabled "Entrepreneur" radio button state
* **Priority:** Low
* **Type:** Manual / Automated
* **Automated Test File:** [`negativeFormValidation.spec.js`](../../../tests/ui-js/LoginPagePractice/negativeFormValidation.spec.js)
* **Preconditions:** The form page is loaded (`/angularpractice/`).

### Steps to Reproduce:
1. Navigate to the form page.
2. Locate the "Entrepreneur (disabled)" radio button.
3. Attempt to click or select the option.

### Expected Result:
1. The radio button is disabled in the UI and cannot be selected.
2. The element contains the `disabled` attribute in the DOM.