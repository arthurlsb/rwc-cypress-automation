const el = require('./elements').ELEMENTS

class UiRegistration {
  fillForm () {
    cy.get(el.inputUsername).type('Arthur')
    cy.get(el.inputEmail).type('arthur@mail.com')
    cy.get(el.inputPassword).type('1@Axx')
  }

  submitForm () {
    cy.get(el.submitButton).click()
  }

  checkSucessfulRegistration () {
    cy.contains('No articles are here... yet.').should('be.visible')
  }

  checkRegistrationWithExistingUser () {
    cy.contains('username has already been taken').should('be.visible')
  }
}

export default new UiRegistration()
