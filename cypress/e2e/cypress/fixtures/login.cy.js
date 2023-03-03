it('Alpha login', () => {
    cy.visit('https://beta.api.trukkr.pk')
    cy.get('#userName').type('zohaib.naqvi@artisticmilliners.com')
    cy.get('#password').type('123456789')
    cy.get('#mui-1').click()




})