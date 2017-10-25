import { defineSupportCode } from 'cucumber';
let expect = require('chai').expect;
import SearchPage  from '../pages/search.page'; 

defineSupportCode(({Given, When, Then}) => {
 

    Given(/^I launch Daft and select sales category$/, () => {
        expect(SearchPage.salesCategory.getText()).to.equal('For Sale');
        SearchPage.salesCategory.click();
    });

    When(/^I navigate to search form page$/, () => {

    });

    Then(/^I can select any random City or County$/, () => {

     });

     Then(/^I perform search$/, () => {

     });

     Then(/^I can select any random search result$/, () => {
     });
     
     Then(/^I should check if selected City or County matches property address$/, () => {

     });

})