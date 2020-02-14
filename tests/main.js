describe('WebdriverIO search', function() {

    it('searches for WebdriverIO failed', function() {
        browser.url('https://duckduckgo.com/');
        $('#search_form_input_homepage2323').setValue('WebdriverIO');
        $('#search_button_homepage').click();
        var title = browser.getTitle();
        console.log('Title is: ' + title);
    });
});
