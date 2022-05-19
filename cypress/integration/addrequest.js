it('Alpha login', () => {
    cy.visit('https://beta.api.trukkr.pk')
    cy.get('#userName').type('zohaib.naqvi@artisticmilliners.com')
    cy.get('#password').type('123456789')
    cy.get('#mui-1').click()
     cy.get(':nth-child(4) > .c-sidebar-nav-link').click()
     cy.get('#mui-2', { timeout: 5000 }).click({ force: true })
  
// cy.get(".cy.get('#mui-2')").click()

// cy.get("#mui-1").click();

// cy.get(".container-fluid button:nth-Add New Request").click();

// cy.get('.MuiButton-root').click()


})