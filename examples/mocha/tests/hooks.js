describe('WebdriverIO search with hooks', function() {

    before(function () {});

    after(function (test) {
        if (test.passed === true) {
            console.log(test);
        }
    });

    beforeEach(function () {});

    afterEach(function (test) {
        if (test.passed === true) {
            console.log(test);
        }
    });

    it('searches for WebdriverIO', function() {
      browser.url('https://duckduckgo.com/');
      $('#search_form_input_homepage').setValue('WebdriverIO');
      $('#search_button_homepage').click();
      var title = browser.getTitle();
      console.log('Title is: ' + title);
    });
});
