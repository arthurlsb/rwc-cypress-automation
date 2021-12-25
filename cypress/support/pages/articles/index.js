const el = require('./elements').ELEMENTS

const Chance = require('chance')
const chance = new Chance()
const articleName = 'Music' + chance.natural()

class Articles {
  acessForm () {
    cy.get(el.linkCreateNewArticle).click()
  }

  fillForm () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('This article talks about music')
    cy.get(el.inputBody).type('music is good')
    cy.get(el.inputTag).type('music')
  }

  submitForm () {
    cy.contains('button', 'Publish Article').click()
  }

  checkIfArticleWasCreated () {
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
