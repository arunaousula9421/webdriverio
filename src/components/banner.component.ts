import { LoginPage } from "../pages/login.page";
var expect = require('chai').expect;

export class BannerComponent {

    public get loginBtn() { return browser.element('=Login to MyDaft')}
    public get registerBtn() { return browser.element('=Register')}
    public get advertiseMyPropertyBtn() {return browser.element('=Advertise My Property')}
    

    public clickLoginBtn():LoginPage {
        this.loginBtn.click();
        return new LoginPage();
    }

    public clickRegisterBtn():LoginPage {
        this.registerBtn.click();
        return new LoginPage();
    }

    

    // public hoverAdvertiseMyPropertyBtn(category: String):LoginPage {
    //     //this.advertiseMyPropertyBtn.moveToObject()
    // }

}