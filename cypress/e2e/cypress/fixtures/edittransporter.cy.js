import Functions from "../utils/randomGenerate"

it('Alpha login', () => {
  cy.visit('https://beta.api.trukkr.pk')
  cy.get(':nth-child(8) > .c-sidebar-nav-link').click()
  cy.get(':nth-child(2) > :nth-child(5) > .hover-link > span').click()
  cy.get('#mui-component-select-Select').click()
  cy.get('[data-value="Edit"]').click()
  cy.get('#companyName').clear()
  cy.wait(2000)
  cy.get('#companyName').type(Functions.randomGenerator(5, "Name"))
  cy.get('.modal-body').scrollTo("bottom")
  cy.get('#mui-6').click()
  
})