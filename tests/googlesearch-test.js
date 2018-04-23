module.exports = {
  'searching' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible ('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'GitHub')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
  },

  'search results' : function (browser) {
    browser
      .pause(5000)
      .assert.containsText('#main', 'GitHub')
      .assert.visible('input[title=Results from github.com]')
      .setValue('input[title=Results from github.com]', 'Xeno828')
      .click('button[aria-label=Search button]')
      .pause(1000)
      .end();
  }
};
