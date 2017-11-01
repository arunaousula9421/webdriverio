#src/features/login.features

Feature: Login to Daft.ie
  As a Daft User
  I would like to Login to using valid credentials

@Login
Scenario Outline: Login Test on Daft
Given Daft.ie is launched and Login is selected
When I enter <username> and <password>
Then I should successfully Logged in

Examples:
|  username   | password |
| arunaousula | dsch1234 |


