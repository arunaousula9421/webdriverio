var expect = require('chai').expect;

export class SearchPage { 
    public get salesHeader() { return browser.element('//*[@id="search-title"]') }
    public get cityCountyField() { return browser.element('//*[@id="cc_id"]/dt') }
    public get selectCityCounty() { return browser.elements('//*[@id="cc_id"]/dd/ul/li') }
    //public get selectArea() { return browser.element('.//*[@id="cc_id"]/dd/ul/li[id()='" + cityCountyLabel + "']')}

    public getSalesHeaderTitle() {
        return this.salesHeader.getText();
    }

    validateHeaderMessage(titleMessage: string): void{
        expect(this.getSalesHeaderTitle()).to.equal(titleMessage);
    }

    public clickCityCountyField(): SearchPage{
        this.cityCountyField.click();
        return new SearchPage;
    }

    public getCityCountyCount(){
        var count = this.selectCityCounty.value.length;
        console.log(count);
        return count;
    }

    public getRandomCityCounty(){
        var randomCityCounty = 1 + Math.floor(Math.random() * (this.getCityCountyCount() - 1));
        console.log(randomCityCounty);
        return randomCityCounty;
    } 

    public getCityCounty() : SearchPage{
        
        var city = this.selectCityCounty.selectByIndex(this.getRandomCityCounty()).getText();
        console.log(city);      
        return new SearchPage;
     }
}
