const login = {
  step1() {
    return this
      .navigate()
      .assert.title('Bankline - Logon')
      .assert.visible('@CustNumber')
      .setValue('@CustID', this.api.globals.loginId)
      .click('@submit')
  },
  step2(client) {
    return this
      .waitForElementVisible('@labelPin1', 2000)
      .getText('@labelPin1', (result) => {
        this.setValue('input#Pin1', client.globals[`pin${result.value}`])
      })
      .getText('@labelPin2', (result) => {
        this.setValue('input#Pin2', client.globals[`pin${result.value}`])
      })
      .getText('@labelPin3', (result) => {
        this.setValue('input#Pin3', client.globals[`pin${result.value}`])
      })
      .getText('@labelPass1', (result) => {
        this.setValue('input#Pass1', client.globals[`pass${result.value}`])
      })
      .getText('@labelPass2', (result) => {
        this.setValue('input#Pass2', client.globals[`pass${result.value}`])
      })
      .getText('@labelPass3', (result) => {
        this,setValue('input#Pass3', client.globals[`pass${result.value}`])
      })
      .click('@submitStep23')
  },
  step3() {
    return this
      .waitForElementVisible('@submitStep23', 2000)
      .click('@submitStep23')
  },
}

export function url() {
  return this.api.globals.url
}

export const elements = {
   CustNumber: {
     selector: 'input[id=CustNumber]',
   },
   CustID: {
     selector: 'input[id=CustID]',
   },
   submit: {
     selector: 'input[type=submit]',
   },
   labelPin1: {
     selector: 'label[for="Pin1"]',
   },
   labelPin2: {
     selector: 'label[for="Pin2"]',
   },
   labelPin3: {
     selector: 'label[for="Pin3"]',
   },
   labelPass1: {
     selector: 'label[for="Pass1"]',
   },
   labelPass2: {
     selector: 'label[for="Pass2"]',
   },
   labelPass3: {
     selector: 'label[for="Pass3"]',
   },
   submitStep23: {
     selector: '.button-submit',
   },
}
export const commands =[login]
