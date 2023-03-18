import Functions from "../utils/randomGenerate"

it('Alpha login', () => {
  cy.visit('https://beta.api.trukkr.pk')
  cy.get(':nth-child(9) > .c-sidebar-nav-link').click()
  cy.get(':nth-child(1) > :nth-child(4) > .hover-link > span').click()
  cy.get('#mui-component-select-Select').click()
  cy.get('[data-value="Edit"]').click()
  cy.get('.css-1nfu0b0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.get('#react-select-2-option-1').click()
  cy.get('.css-1wun7jj-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.get('#react-select-3-option-2').click()
  cy.get('.css-101fddm-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.get('#react-select-4-option-1').click()
  cy.get('.modal-body').scrollTo("bottom")
  cy.get(':nth-child(2) > .form-group > #_id > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.get('#react-select-6-option-55').click()
  cy.get('#location\[0\]\.address').clear()
  cy.get('#location\[0\]\.address').type('DEfenec phase 4 gizri')






  
})