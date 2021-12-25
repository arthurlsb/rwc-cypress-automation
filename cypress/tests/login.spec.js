/// <reference types = "cypress" />

import login from '../support/pages/login'

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('When the user enters a valid email and password and tries to log in then he must be redirected', () => {
    cy.login()
    login.acessLoginPage()
    login.checkSucessfulLogIn()
  })

  it('When the user enters a email or password invalid and tries to log in, a message should appear on the screen', () => {
    login.submitWithInvalidField()
    cy.contains('email or password is invalid').should('be.visible')
  })

  it('When the user leaves the email field blank, and tries to log in, a message should appear on the screen', () => {
    login.submitWithBlankField('email')
    cy.contains('email can\'t be blank').should('be.visible')
  })

  it('When the user leaves the password field blank, and tries to log in, a message should appear on the screen', () => {
    login.submitWithBlankField('password')
    cy.contains('password can\'t be blank').should('be.visible')
  })

  it('When the user does not fill both fields and tries to log in, he must remain in the login screen again', () => {
    login.submithBothFieldsBlank()
    login.checkIfStayInLoginPage()
  })
})
