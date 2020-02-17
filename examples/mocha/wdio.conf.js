const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");
const path = require('path');
const fs = require('fs');
const rpConfig = require("../../rp.json");

exports.config = {
    runner: 'local',
    port: 9515, // default for ChromeDriver
    path: '/',
    specs: [
        './tests/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu'],
        }
    }],
    logLevel: 'info',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver', [RpService, {}] ],
    reporters: [ [reportportal, rpConfig] ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    },

    before: function() {
        const chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    },

    afterTest(test, context, { error, result, duration, passed, retries }) {
        if (test.passed === false) {
            const filename = "screnshot.png";
            const outputFile = path.join(__dirname, `screenshots/${filename}`);
            browser.saveScreenshot(outputFile);
            reportportal.sendFileToTest(test, 'info', filename, fs.readFileSync(outputFile));
        }

        // don't report retries when spec doesn't have retries
        if(test._retries === -1) {
            return;
        }
        // don't report retries when it is last retry
        if(test._retries === test._currentRetry ) {
            return;
        }
        // don't report retries when it is not failed - wdio will end test by itself
        if(test.error) {
            const data = {
                error: JSON.stringify(test.error, Object.getOwnPropertyNames(test.error)),
            };
            reportportal.finishTestManually(data);
        }
    },

    afterSuite(suite) {
        reportportal.sendLogToTest(suite, 'info', 'suite level log');
    }
};
