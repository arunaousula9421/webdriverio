// Before And After hooks used while feature executes

var outputDir = './reports/';
var screenshotDir = './reports/screenshots/';
var targetJson = outputDir + 'cucumber_report.json';

var JsonFormatter = require('cucumber').JsonFormatter;
var fse = require('fs-extra');
var reporter = require('cucumber-html-reporter');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({registerHandler}) {
	  registerHandler('BeforeFeatures', function() {
		  	var configData = require('../../data/config.json');
			console.log("Launching test in environment: ", browser.options.args.params.testEnv);
			config = configData[browser.options.args.params.testEnv];
			//browser.driver.manage().window().maximize();
			browser.url(config.baseUrl);
	  });
});

defineSupportCode(function({setDefaultTimeout}) {
	  setDefaultTimeout(10 * 60 * 1000);
});

defineSupportCode(function({After, registerListener}) {
	
	var writeScreenshotToFile = function(image) {
		if (!fse.existsSync(screenshotDir)) {
			fse.mkdirSync(screenshotDir);
		}
		var date = new Date();
		var timestamp = date.getTime();
		var filename = "error_"+timestamp+".png";
		var stream = fse.createWriteStream(screenshotDir + filename);
		stream.write(image);
        stream.end();
	};
	
	After(function(scenario) {
		let self = this;
		if (scenario.isFailed()) {
			var screenShot = browser.saveScreenshot();
			writeScreenshotToFile(screenShot);
			} 
	});
	
	var createHtmlReport = function (sourceJson) {

	    var options = {
	        theme: 'bootstrap',
	        jsonFile: sourceJson,
	        output: outputDir+'cucumber_report.html',
	        reportSuiteAsScenarios: true,
	        launchReport: true
	    };

	   reporter.generate(options);
	};

	jsonFormatter = new JsonFormatter;
	jsonFormatter.log = function(string) {
		if (!fse.existsSync(outputDir)) {
			fse.mkdirSync(outputDir);
		}
		
		fse.writeFile(targetJson, string, function(err) {
			if (err) {
				console.log('Failed to save cucumber test results to json file.');
				console.log(err);
			} else {
				createHtmlReport(targetJson);
			}
		});
	};

	registerListener(jsonFormatter);
});