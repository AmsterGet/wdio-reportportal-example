describe('WebdriverIO get page title @with-retries', function() {
    this.retries(3);

    it('WebdriverIO get title passed', function() {
        browser.url('https://webdriver.io');
        browser.getTitle().should.be.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });

    it('WebdriverIO get title failed', function() {
        browser.url('https://webdriver.io');
        browser.getTitle().should.be.equal('False');
    });
});
