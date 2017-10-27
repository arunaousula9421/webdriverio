import { defineSupportCode } from 'cucumber';
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";

defineSupportCode(({Given, When, Then}) => {
    
    let loginPage = new LoginPage();
 
    Given(/^Daft.ie is launched and Login is selected$/, () => {
        var homePage = new HomePage();
        homePage.bannerComponent()
        .clickLoginBtn();
    });

    When(/^I enter (.*) and (.*)$/, (username, password) => {
        loginPage.loginSuccess(username, password);
    });

    Then(/^I should successfully Logged in$/, () => {
        loginPage.validateUsername('Arunkumar Aousula');   
     });
    })