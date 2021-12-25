const el = require('./elements').ELEMENTS

class Login {
  acessLoginPage () {
    cy.get(el.acessLogin).click()
  }

  checkSucessfulLogIn () {
    cy.get(el.yourFeedText).should('contain', 'Your Feed')
  }

  submitWithInvalidField () {
    cy.intercept({
      method: 'POST',
      path: '/api/users/login'
    }, {
      statusCode: 403,
      fixture: 'login-email-or-password-invalid'
    }).as('postLogin')

    this.acessLoginPage()
    cy.get(el.sumbitButton).click()
  }

  submitWithBlankField (blankField) {
    let fixtureAux = ''

    if (blankField === 'email') {
      fixtureAux = 'login-email-blank'
    } else if (blankField === 'password') {
      fixtureAux = 'login-password-blank'
    }

    cy.intercept({
      method: 'POST',
      path: '/api/users/login'
    }, {
      statusCode: 422,
      fixture: fixtureAux
    }).as('postLogin')

    this.acessLoginPage()
    cy.get(el.sumbitButton).click()
  }

  submithBothFieldsBlank () {
    cy.intercept({
      method: 'POST',
      path: '/api/users/login'
    }, {
      statusCode: 500,
      fixture: 'login-blank-fields'
    }).as('postLogin')

    this.acessLoginPage()
    cy.get(el.sumbitButton).click()
  }

  checkIfStayInLoginPage () {
    cy.get(el.sumbitButton).should('be.visible')
  }
}
export default new Login()
