
import Functions from "../utils/randomGenerate"

it('Alpha login', () => {
  cy.visit('https://beta.api.trukkr.pk')
  cy.get(':nth-child(6) > .c-sidebar-nav-link').click()
  cy.get(':nth-child(1) > :nth-child(7) > .hover-link > span').click()
  cy.get('#mui-component-select-Select').click()
  cy.get('[data-value="Edit"]').click()
  cy.get('#regNumber').clear()
  cy.wait(2000)
  cy.get('#regNumber').type(Functions.generateRandomNumPlate(4))
  cy.get('#assignedTransporter > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.wait(1000)
  cy.get('.modal-body').scrollTo("bottom")
  cy.get('#mui-8').click()
})