
import Functions from "../utils/randomGenerate"

it('Alpha login', () => {
  cy.visit('https://beta.api.trukkr.pk')
  cy.get(':nth-child(6) > .c-sidebar-nav-link').click()
  cy.get(':nth-child(1) > :nth-child(7) > .hover-link > span').click()
  cy.get('#mui-component-select-Select').click()
  cy.get('[data-value="Edit"]').click()
  cy.get('#regNumber').clear()
  cy.get('.modal-body').scrollTo("bottom")
//   cy.window().then((win) => {
//     win.scrollTo(0, 500); // This will scroll the window to 500 pixels from the top of the page
//   });
  //cy.scrollTo(0,500)



})