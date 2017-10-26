import { defineSupportCode } from 'cucumber';
let expect = require('chai').expect;
import SearchPage  from '../pages/search.page'; 

defineSupportCode(({Given, When, Then}) => {
 

    Given(/^I launch Daft and select sales category$/, () => {
        expect(SearchPage.salesCategory.getText()).to.equal('For Sale');
        SearchPage.salesCategory.click();
    });

    When(/^I navigate to search form page$/, () => {
        expect(SearchPage.salesHeader.getText()).to.equal('Properties for Sale in Ireland');
    });

    Then(/^I can select any random City or County$/, () => {
        //SearchPage.cityCountyField.click();
        // var count =  SearchPage.cityCounty.value.ELEMENT.length;
        // console.log(count);


     });

     Then(/^I perform search$/, () => {
         SearchPage.searchBtn.click();

     });

     Then(/^I can select any random search result$/, () => {
         var searchResultsCount = SearchPage.searchResults.value.ELEMENT.length;
         console.log(searchResultsCount);
     });
     
     Then(/^I should check if selected City or County matches property address$/, () => {

     });

})