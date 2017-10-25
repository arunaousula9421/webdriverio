class Home_Page {

    public get salesCategory() { return browser.element('[href= "/sales/"]')}
    public get salesHeader() { return browser.element('.//*[@id="search-title"]')}

}

const HomePage = new Home_Page();
export default HomePage