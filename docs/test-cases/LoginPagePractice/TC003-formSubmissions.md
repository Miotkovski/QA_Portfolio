# Test Cases - Form Submissions

## TC003: Successful user registration form submission
* **Priority:** Medium
* **Type:** Manual / Automated 
* **Automated Test File** [`formSubmission.spec.js`](../../../tests/ui-js/LoginPagePractice/formSubmission.spec.js)
* **Preconditions:** The form page is loaded, and test data is available in `formData.json`.

### Steps to Reproduce:
1. Navigate to the form page (`/angularpractice/`).
2. Fill in all required fields in the form (name, email, password, gender, employment status, date of birth).
3. Verify that the two-way data binding field dynamically updates with the entered name.
4. Click the "Submit" button.

### Expected Result:
1. The two-way binding text field matches the entered name value.
2. A success alert banner is displayed containing the expected confirmation text.