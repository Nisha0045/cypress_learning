import Functions from "../utils/randomGenerate"

it('Alpha login', () => {
  cy.visit('https://beta.api.trukkr.pk')
  cy.get(':nth-child(7) > .c-sidebar-nav-link').click()
  cy.get('#mui-1').click()
  cy.get('.css-q3ik4o > :nth-child(1)').click()
  cy.get('[name="driverName"]', { timeout: 5000 }).type(Functions.randomGenerator(5, "Name"))
  cy.get('[type="file"]:eq(0)').attachFile('image.png', { allowEmpty: true })
  cy.get('[name="mobileNo"]', { timeout: 5000 }).type(Functions.randomGenerator(9, "phoneNumber"))
  cy.get(':nth-child(1) > .form-group > .css-2b097c-container > .css-n7p1v0-control > .css-1hwfws3').click()
  cy.get('#react-select-2-option-2', { timeout: 5000 }).click()
  cy.get('#_id > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.get('#react-select-3-option-55').click()
  cy.get('#address').type('Gizri phase 4 karachi')
  cy.get(':nth-child(4) > h2 > .float-right', { timeout: 5000 }).click()
  cy.get('#cnicNo', { timeout: 5000 }).type(Functions.randomGenerator(14, "CNICNO"))
  cy.get('#licenseNo', { timeout: 5000 }).type(Functions.randomGenerator(18, "CNICNO"))
  cy.get(':nth-child(1) > .form-group > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
  cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root').click()
  cy.get(':nth-child(2) > .form-group > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
  cy.get(':nth-child(4) > :nth-child(4) > .MuiButtonBase-root').first().click()
  cy.get('[type="file"]:eq(1)').attachFile('image.png', { allowEmpty: true })
  cy.get(':nth-child(7) > h2 > .float-right').click()
  cy.get('#bankName').type(Functions.randomGenerator(7, "Name"))
  cy.get('#accountTitle').type(Functions.randomGenerator(7, "Name"))
  cy.get('#iban').type(Functions.randomGenerator(14, "phoneNumber"))
  cy.get('#mui-7').click()
})