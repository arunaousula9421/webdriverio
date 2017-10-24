//var page = require('../pages/basePage.js');
var search = require('../pages/searchPage.js');
var { defineSupportCode } = require('cucumber');
//var cityCountyLabelGlobal;
//var searchResultGlobal;

defineSupportCode(function ({ Given, When, Then }) {
    Given('I launch Daft and select sales category', function () {
        browser.waitUntil(search.salesCategory);
        expect(browser.getText(search.salesCategory)).to.equal('For Sale');
        browser.click(search.salesCategory);
    });

    When('I navigate to search form page', function () {
        expect(browser.getText(search.salesHeader)).to.equal('Properties for Sale in Ireland');
    });

    Then('I can select any random City or County', function () {
        console.log('Hello');
    //     browser.click(search.cityCountyDropDown);
    //     browser.count(search.cityCounty).then(function (count) {
    //     search.cityCountyCount = count;
    //     search.randomCityCountyIndex = 1 + Math.floor(Math.random() * (search.cityCountyCount - 1));
    //     }).then(function () {
    //     search.cityCounty.get(search.randomCityCountyIndex).getText().then(function (cityCountyLabel) {
    //     search.selectCityCountyLabel(cityCountyLabel);
    //     cityCountyLabelGlobal = cityCountyLabel;
    //      });
    //   });
    });

    Then('I perform search', function () {
        console.log('Hello');
        // search.submitButton.click();
        // done();
    });

    Then('I can select any random search result', function () {
        console.log('Hello');
        // search.searchResults.count().then(function (count) {
        //     search.searchResultsCount = count;
        //     search.randomSearchResultsIndex = 1 + Math.floor(Math.random() * (search.searchResultsCount - 1));
        //     search.randomSearchResult(search.randomSearchResultsIndex).getText().then(function (searchResult) {
        //         searchResultGlobal = searchResult;
        //     });
        // });
    });

   Then('I should check if selected City or County matches property address', function () {
    console.log('Hello');
        //  if (cityCountyLabelGlobal == 'Dublin City' || cityCountyLabelGlobal == 'Co. Dublin') {
        //   expect(searchResultGlobal).to.match(new RegExp('Dublin [1-9]{1,2}w?|Co. Dublin'));
        // } else if (cityCountyLabelGlobal == 'Belfast City') {
        //   expect(searchResultGlobal).to.match(new RegExp('(Co. Antrim|[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?\s?[0-9][A-Za-z]{2})'));
        // } else if (cityCountyLabelGlobal.includes('City')) {
        //   search.addressRegex = 'Co. ' + cityCountyLabelGlobal.split(" ")[0];
        //   expect(searchResultGlobal).contain(search.addressRegex);
        // } else {
        //   search.addressRegex = cityCountyLabelGlobal;
        //   expect(searchResultGlobal).contain(search.addressRegex);
        // }
    });
});