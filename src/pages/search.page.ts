var expect = require('chai').expect;

export class SearchPage { 
    public get salesHeader() { return browser.element('//*[@id="search-title"]') }
    public get cityCountyField() { return browser.element('//*[@id="cc_id"]/dt') }
    public get getCityCountyList() { return browser.elements('//*[@id="cc_id"]/dd/ul/li') }
    public get selectCityCounty() { return browser.element('//*[@id="cc_id"]/dd/ul/li') }
    public get searchBtn() { return browser.element('') }

    
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
        var count = this.getCityCountyList.value.length;
        console.log(count);
        return count;
    }

    public getRandomCityCounty(){
        var randomCityCounty = 1 + Math.floor(Math.random() * (this.getCityCountyCount() - 1));
        console.log(randomCityCounty);
        return randomCityCounty;
    } 

    // public getCityCounty() : SearchPage{
        
    //     var city = this.selectCityCounty.selectByIndex(this.getRandomCityCounty()).getText();
    //     console.log(city);      
    //     return new SearchPage;
    //  }

    public clickCityCounty(): SearchPage{
        browser.element('.//*[@id="cc_id"]/dd/ul/li['+this.getRandomCityCounty()+']').click();
        return new SearchPage;
    }

    public getSelectedCityCounty(): SearchPage{
        this.cityCountyField.getText();
        return new SearchPage;
    }
}
