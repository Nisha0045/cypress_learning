it('Alpha login', () => {
    cy.visit('https://beta.api.trukkr.pk')
    cy.get('#userName').type('zohaib.naqvi@artisticmilliners.com')
    cy.get('#password').type('123456789')
    cy.get('#mui-1').click()
     cy.get(':nth-child(4) > .c-sidebar-nav-link').click()
     cy.get('#mui-2', { timeout: 5000 }).click({ force: true })
  

cy.get(':nth-child(1) > .MuiTypography-root > .row > .col-12 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > #client-dropdown').click()
cy.get('#client-dropdown-option-1', { timeout: 5000 }).click({ force: true })
// cy.get('MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-b52kj1', { timeout: 5000 }).click({ force: true 
cy.get(':nth-child(2) > .MuiTypography-root > .row > .col-12 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > #client-dropdown').click()
cy.get('#client-dropdown-option-2', { timeout: 5000 }).click({ force: true })
cy.get('#mui-6').click()
cy.get(':nth-child(4) > :nth-child(5) > .MuiButtonBase-root').click()
cy.get('#mui-7').click()
cy.get('.css-1umqo6f').click()


})
// })
