# WebDriver.io example with ReportPortal.io reporting
* Read more about [WebDriver.io](https://webdriver.io/)
* Read more about [ReportPortal.io](https://reportportal.io/)

## This example cover the next ReportPortal.io features:

**Will be soon**

## To use this example please create the configuration file like:

rp.json
```json
{
  "reportPortalClientConfig": {
    "token": "00000000-0000-0000-0000-00000000000",
    "endpoint": "http://localhost:8080/api/v1",
    "launch": "demo_launch",
    "project": "demo_project",
    "debug": false,
    "description": "WDIO-ReportPortal integration test",
      "tags": [
              {
                "key": "reporter",
                "value": "RP"
              },
              {
                "key": "agent",
                "value": "WDIO"
              }
            ]
  },
  "reportSeleniumCommands": false,
  "seleniumCommandsLogLevel": "debug",
  "parseTagsFromTestTitle": true
}
```
