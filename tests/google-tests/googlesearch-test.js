module.exports = {
  'searching' : function (browser) {
    browser
      .url('https://www.google.com') // loads up the browser to this URL
      .waitForElementVisible ('body', 1000) // Waits for this CSS value to be present, for this amount of time
      .assert.title('Google') // Checks if CSS value is present
      .assert.visible('input[type=text]') // Checks if CSS value is present
      .setValue('input[type=text]', 'GitHub') // Sends the value to this CSS element.
      .sendKeys('input[type=text]', browser.Keys.ENTER) // on this CSS value, send this key value
  },

  'search results' : function (browser) {
    browser
      .pause(5000) // Pause for this amount of time to allow page to load
      .assert.containsText('#main', 'GitHub') // checks that the CSS value entered, contains this value
      .assert.visible('input[title=Results from github.com]') // Checks that this CSS value is present
      .setValue('input[title=Results from github.com]', 'Xeno828') // On this CSS element, send this value
      .click('button[aria-label=Search button]') // Click this CSS element
      .pause(1000) // Pause for this amount of time
      .end(); // Ends the test and closes the browser
  }
};
