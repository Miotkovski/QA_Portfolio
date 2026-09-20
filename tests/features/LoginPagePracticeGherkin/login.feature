Feature: Success login 

    Scenario: Successful login with valid data
        Given the user is on the login page
        When the user fills in the form with valid details
        And clicks the "Sign In" button
        Then the user should see Shop page
        
