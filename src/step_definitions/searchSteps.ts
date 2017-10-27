import { defineSupportCode } from 'cucumber';
import { HomePage } from "../pages/home.page";
import { SearchPage } from "../pages/search.page";

defineSupportCode(({Given, When, Then}) => {
    
    let searchPage = new SearchPage();
 
    Given(/^I launch Daft and select sales category$/, () => {
        var homePage = new HomePage();
        homePage.navBarComponet()
        .clickSalesCategory();
    });

    When(/^I navigate to search form page$/, () => {
        searchPage.validateHeaderMessage('Properties for Sale in Ireland');
    });

    Then(/^I can select any random City or County$/, () => {
        searchPage.clickCityCountyField()
        .getCityCounty();
     });

     Then(/^I perform search$/, () => {
         

     });

     Then(/^I can select any random search result$/, () => {
         
     });
     
     Then(/^I should check if selected City or County matches property address$/, () => {

     });

})