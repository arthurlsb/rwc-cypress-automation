/// <reference types = "cypress" />

import uiRegistration from '../support/pages/uiRegistration'

describe('Registration', () => {
  it('Sucessful registration', () => {
    cy.intercept({
      // https://api.realworld.io/api/users
      // POST
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'sucessful-registration'
    }).as('postUsers')

    cy.visit('register')
    uiRegistration.fillForm()
    uiRegistration.submitForm()
    uiRegistration.checkSucessfulRegistration()
  })

  it('Registration with existing user', () => {
    cy.intercept({
      // https://api.realworld.io/api/users
      // POST
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'registration-existing-user'
    }).as('postUsers')

    cy.visit('register')
    uiRegistration.submitForm()
    uiRegistration.checkRegistrationWithExistingUser()
  })
})
