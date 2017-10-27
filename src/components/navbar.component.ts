import { HomePage } from "../pages/home.page"


export class NavBar {
    public get Category() {return browser.element('[href= "/sales/"]')}

    public selectCategory(): HomePage {
        this.Category.click();
        return new HomePage;
    }

}