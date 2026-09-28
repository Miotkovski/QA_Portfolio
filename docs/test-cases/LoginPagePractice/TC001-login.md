# Test Cases - Authentication Flow

## TC001: Successful user login with valid credentials
* **Priority:** High
* **Type:** Manual / Automated 
* **Automated Test File** [`successUserLogin.spec.js`](../../../tests/ui-js/LoginPagePractice/successUserLogin.spec.js)
* **Preconditions:** The application is accessible, and valid user credentials are available in the test data.

### Steps to Reproduce:
1. Navigate to the login page (`/loginpagePractise/`).
2. Enter valid credentials (username and password).
3. Select the required role (e.g., Student) and check the terms & conditions checkbox.
4. Click the "Sign In" button.

### Expected Result:
The user is successfully redirected to the shop page, and store elements (such as product links) are visible and accessible.