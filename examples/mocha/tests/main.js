describe('WebdriverIO get page title @suite-attribute @main', function() {

    it('WebdriverIO get title passed @passed', function() {
        browser.url('https://webdriver.io');
        browser.getTitle().should.be.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });

    it('WebdriverIO get title failed @failed', function() {
        browser.url('https://webdriver.io');
        browser.getTitle().should.be.equal('False');
    });
});
