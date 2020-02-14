const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");
const rpConfig = require("./rp.json");

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
    }],
    logLevel: 'info',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver', [RpService, {}] ],
    reporters: [ [reportportal, rpConfig] ],
};
