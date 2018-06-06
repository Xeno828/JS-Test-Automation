const dashboard = {
  menuVisible() {
    return this
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('@menu', 5000)
  },
  clickPaymentMenu() {
    return this
      .waitForElementVisible('body', 3000)
      .waitForElementVisible('@paymentMenu', 5000)
      .assert.visible('@paymentMenu')
      .click('@paymentMenu')
  },
  clickMakeTransferLink() {
    return this
      .waitForElementVisible('body', 3000)
      .assert.visible('@makeTransferLink')
      .click('@makeTransferLink')
  },
}

export const elements = {
  menu: {
    selector: 'div#header-nav',
  },
  paymentMenu: {
    selector: 'li#payments-dropdown',
  },
  makeTransferLink: {
    selector: 'a[href="#/payments/make-payment"]',
  },
}
export const commands = [dashboard]
