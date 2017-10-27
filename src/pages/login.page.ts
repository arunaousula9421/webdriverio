var expect = require('chai').expect;

export class LoginPage {

    public get username()  { return browser.element('#auth_username') }
    public get password()  { return browser.element('#auth_password') }
    public get loginBtn() { return browser.element('#login_button') }
    public get userName(){ return browser.element('#dropdownMenu1')}

    public loginSuccess(username:string, password:string): LoginPage {
        this.username.setValue(username);
        this.password.setValue(password);
        this.loginBtn.click();
        return new LoginPage;
    }  

    public getUserName() {
        return this.userName.getText();
    }

    validateUsername(username: string):void{
        expect(this.getUserName()).to.equal(username);
    }
}