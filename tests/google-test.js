module.exports = {
  'demo' : function (browser) {
    browser
      .url('http://www.google.com') // go to this url
      .waitForElementVisible ('body', 1000) //wait for this long until page loads
      .assert.title('Google') // Make sure the page matches this title
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'nightwatchjs') //sends the values
      .click('button[name=btnG]') //clicks search field
      .pause(1000)
      .end();
  }
};
