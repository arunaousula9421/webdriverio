class Home_Page {

    public get salesCategory() { return browser.element('[href= "/sales/"]')}
    public get salesHeader() { return browser.element('.//*[@id="search-title"]')}
    public get cityCountyField() { return browser.element('.//*[@id="cc_id"]/dt')}
    public get cityCounty() {return browser.element('//*[@id="cc_id"]/dd/ul/li')}
    // public get selectCityCountyLabel() {
    //     var cityCountyLabel;
    //     return browser.element("//*[@id='cc_id']/dd/ul/li[text()='" + cityCountyLabel + "']")
    // }
    public get searchBtn() {return browser.element('input.btn-search')}
    public get searchResults() {return browser.element('//*[@id="sr_content"]/tbody/tr/td[1]/div[@class="box"]')}
}

const HomePage = new Home_Page();
export default HomePage