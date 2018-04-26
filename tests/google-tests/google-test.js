module.exports = {
  'demo' : function (browser) {
    browser
      .url('http://www.google.com') // go to this url
      .waitForElementVisible ('body', 1000) //wait for this long until page loads
      .assert.title('Google') // Make sure the page matches this title
      .assert.visible('input[type=text]') // Checks if entered value is present
      .setValue('input[type=text]', 'Jackson five') //sends the values
      .click('button[name=btnG]') //clicks search field
      .pause(1000) // waits for the page to load
      .end(); // ends the test and closes the browser down
  }
};
