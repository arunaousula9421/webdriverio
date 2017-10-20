browser.waitUntil(function(){
    return browser.url('/')
}, 5000, console.log(browser.getUrl()));
