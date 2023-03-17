import Functions from "../utils/randomGenerate"

it('Alpha login', () => {
  cy.visit('https://beta.api.trukkr.pk')
  cy.get(':nth-child(10) > .c-sidebar-nav-link').click()
  cy.get(':nth-child(2) > :nth-child(5) > .hover-link > span').click()
  cy.get('#mui-component-select-Select').click()
  cy.get('[data-value="Edit"]').click()
  cy.wait(2000)
  cy.get('.css-1nfu0b0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.get('#react-select-3-option-1').click()
  cy.get('.css-1wun7jj-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.get('#react-select-4-option-1').click()
  cy.get('.css-101fddm-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.get('#react-select-5-option-1').click()
  cy.get('.modal-body').scrollTo("bottom")
  
  

  


})