/// <reference types = "cypress" />

import articles from '../support/pages/articles'
describe('Articles', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  it('When user enter the article data and publish, then the publication must be successful', () => {
    articles.acessForm()
    articles.fillForm()
    articles.submitForm()
    articles.checkIfArticleWasCreated()
  })
})
