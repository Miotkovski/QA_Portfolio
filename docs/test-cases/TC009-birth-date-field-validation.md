# Test Cases - Form Submissions

## TC009: Birth Date input boundary and format validation
* **Priority:** Low
* **Type:** Automated (Parameterized)
* **Automated Test File:** [`birthDateValidation.spec.js`](../../../tests/ui-js/LoginPagePractice/birthDateValidation.spec.js)
* **Preconditions:** The form page is loaded (`/angularpractice/`).

### Steps to Reproduce:
1. Navigate to the form page.
2. Locate the "Date of Birth" input field.
3. Enter valid boundary dates (`1000-01-01`, `3000-12-31`), outer boundary dates (`0999-01-01`, `3001-12-31`), and non-date text (`invalid-date`).

### Expected Result:
1. Valid and boundary date values are accepted and formatted correctly in the input field.
2. Invalid date value2. Non-date text is rejected by the HTML5 date input, leaving the field empty.
