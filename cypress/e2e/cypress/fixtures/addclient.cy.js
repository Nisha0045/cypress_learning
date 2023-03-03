import Functions from "../utils/randomGenerate"
it('Alpha login', () => {
    cy.visit('https://beta.api.trukkr.pk')
    cy.get(':nth-child(9) > .c-sidebar-nav-link').click()
    cy.get('#mui-1').click()
    cy.get('[type="file"]:eq(0)').attachFile('image.png', { allowEmpty: true })
    cy.get('#clientName', { timeout: 5000 }).type(Functions.randomGenerator(5, "Name"))
    cy.get('#mobileNo', { timeout: 5000 }).type(Functions.randomGenerator(9, "phoneNumber"))
    cy.get('.css-1nfu0b0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-2-option-2').click()
    cy.get('.css-1wun7jj-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-3-option-2').click()
    cy.get('.css-101fddm-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-4-option-2').click()
    cy.get('.basic-info > :nth-child(6) > .form-group > .form-control', { timeout: 5000 }).type(Functions.randomGenerator(5, "phoneNumber"))
    cy.get(':nth-child(7) > .form-group > .form-control', { timeout: 5000 }).type(Functions.randomGenerator(4, "phoneNumber"))
    cy.get('input[name="location.0.locationName"]').type('Trukkr Office')
    cy.get(':nth-child(2) > .form-group > #_id > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-6-option-55').click()
    cy.get('input[name="location[0].address"]').type('Gizri phase 4 karachi')
    cy.get('#mui-7').click()





})