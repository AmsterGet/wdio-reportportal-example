describe('WebdriverIO search', function() {

    describe('Test container', function() {

      describe('Test container 222', function() {
        it('searches for WebdriverIO Nested', function() {
          browser.url('https://duckduckgo.com/');
          $('#search_form_input_homepage').setValue('WebdriverIO');
          $('#search_button_homepage').click();
          var title = browser.getTitle();
          console.log('Title is: ' + title);
        });
      });
    });

    it('searches for WebdriverIO', function() {
      browser.url('https://duckduckgo.com/');
      $('#search_form_input_homepage').setValue('WebdriverIO');
      $('#search_button_homepage').click();
      var title = browser.getTitle();
      console.log('Title is: ' + title);
    });
});
