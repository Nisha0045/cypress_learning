it('Alpha login', () => {
    
    cy.visit('https://beta.api.trukkr.pk')
    cy.viewport(1280, 720)

    cy.get(':nth-child(4) > .c-sidebar-nav-link').click()
    cy.get(':nth-child(1) > :nth-child(8) > .hover-link > span').click()
    cy.get('.MuiSelect-select').click()
    cy.get('[data-value="Proceed Draft as Trip"]').click()
    cy.get('.time-slot > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-2-option-4').click()
    cy.get('#mui-20').click()
    cy.wait(5000)
    cy.get(':nth-child(1) > .form-group > .css-2b097c-container > .css-n7p1v0-control > .css-1hwfws3').click()
    //cy.get('.css-1gtu0rj-indicatorContainer').click()
    cy.get('#react-select-4-option-2').click()
    cy.get(':nth-child(1) > :nth-child(2) > .form-group > .css-2b097c-container > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-5-option-6').click()
    cy.get(':nth-child(5) > .form-group > .form-control').type('NK123')
    cy.get(':nth-child(6) > .form-group > .form-control').type('ABC-123')
    cy.get('#mui-30').click()
    cy.get('.new-trip > .col-md-6 > .form-control').type('100000')
    cy.get('#temperature').type('764')
    cy.get('#preferredPayment > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-3-option-2').click()
    cy.get('.MuiBox-root > .row > .col-12 > .form-control').type('Draft as a request using Cypresss!!!!GOOD LUCK')
    cy.get('#mui-23').click()
    



})