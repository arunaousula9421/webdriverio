var expect = require('chai').expect;

export class SearchPage { 
    public get salesHeader() { return browser.element('//*[@id="search-title"]') }
    public get cityCountyField() { return browser.element('//*[@id="cc_id"]/dt') }
    public get selectCityCounty() { return browser.elements('//*[@id="cc_id"]/dd/ul/li') }

    public getSalesHeaderTitle() {
        return this.salesHeader.getText();
    }

    validateHeaderMessage(titleMessage: string): void{
        expect(this.getSalesHeaderTitle()).to.equal(titleMessage);
    }

    public clickCityCountyField(): void{
        this.cityCountyField.click();
    }

    public getCityCountyCount(): void{
        console.log(this.selectCityCounty.value.length);
    }

    // public getRandomCityCounty(): any{
    //     var randomCityCounty = 1 + Math.floor(Math.random() * (this.getCityCountyCount - 1));
    //     console.log(randomCityCounty);
    // } 
}
