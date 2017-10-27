import { HomePage } from "../pages/home.page"


export class NavBar {
    public get salesCategory() {return browser.element('[href= "/sales/"]')}

    public clickSalesCategory(): HomePage {
        this.salesCategory.click();
        return new HomePage;
    }

}