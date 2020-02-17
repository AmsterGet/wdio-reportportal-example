const reportportal = require('wdio-reportportal-reporter');
const path = require('path');
const fs = require('fs');

const sendFile = (fileName, fileType) => {
    const file = path.join(__dirname, `../files/${fileName}`);
    reportportal.sendFile('info', fileName, fs.readFileSync(file), fileType);
};

describe('WebdriverIO search with attachments', function() {

    describe('Test for search', function() {
        it('searches for WebdriverIO with HTML attachment', function() {
          browser.url('https://duckduckgo.com/');
          $('#search_form_input_homepage').setValue('WebdriverIO');
          $('#search_button_homepage').click();
          var title = browser.getTitle();
          console.log('Title is: ' + title);

          sendFile('test.html', 'text/html');
        });
    });

    it('searches for WebdriverIO with JSON attachment', function() {
      browser.url('https://duckduckgo.com/');
      $('#search_form_input_homepage').setValue('WebdriverIO');
      $('#search_button_homepage').click();
      var title = browser.getTitle();
      console.log('Title is: ' + title);

      sendFile('test.json', 'application/json');
    });
});
