import Functions from "../utils/randomGenerate"

it('Alpha login', () => {
  cy.visit('https://beta.api.trukkr.pk')
  cy.get(':nth-child(7) > .c-sidebar-nav-link').click()
  cy.get(':nth-child(1) > :nth-child(7) > .hover-link > span').click()
  cy.get('#mui-component-select-Select').click()
  cy.get('[data-value="Edit"]').click()
  cy.get('[name="driverName"]').clear()
  cy.wait(2000)
  cy.get('[name="driverName"]').type(Functions.randomGenerator(5, "Name"))
  cy.get('.modal-body').scrollTo("bottom")
  cy.get('#mui-8').click()
  

  
})