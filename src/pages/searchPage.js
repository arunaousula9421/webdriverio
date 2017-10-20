var SearchPage = function () {
    this.salesCategory = '[href= "/sales/"]';
    this.salesHeader = './/*[@id="search-title"]';

    this.cityCountyDropDown = 'cityCountyDropDown';
    this.cityCounty = '//*[@id="cc_id"]/dd/ul/li';

    this.cityCountyCount;
    this.randomCityCountyIndex;

    this.selectCityCountyLabel = function (cityCountyLabel) {
    $(".//*[@id='cc_id']/dd/ul/li[text()='" + cityCountyLabel + "']").click();
       };

    
    // this.submitButton = $('input.btn-search');
    // this.searchResults = $("//*[@id='sr_content']/tbody/tr/td[1]/div[@class='box']");

    // this.searchResultsCount;
    // this.randomSearchResultsIndex;

    // this.randomSearchResult = function (randomSearchResultsIndex, searchResult) {
    //     return $(".//*[@id='sr_content']/tbody/tr/td[1]/div[@class='box'][" + randomSearchResultsIndex + "]/div[1]/h2/a");
    // }
 
    // this.addressRegex;
}

module.exports = new SearchPage();