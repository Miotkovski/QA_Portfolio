# Test Cases - Checkout Process (Shop Flow)

## TC002: Successful product purchase from the shop page
* **Priority:** High
* **Type:** Manual / Automated (`tests/purchaseTest.spec.js`)
* **Preconditions:** User is logged in or has direct access to the shop page.

### Steps to Reproduce:
1. Navigate to the shop page (`/shop`).
2. Add the selected product (e.g., `iPhone X`) to the cart.
3. Go to the cart/checkout page.
4. Verify that the product is present in the cart and its quantity equals 1.
5. Click the checkout button.
6. Enter the delivery country and accept the terms & conditions.
7. Click the purchase button.

### Expected Result:
A success message containing order placement confirmation text is displayed.