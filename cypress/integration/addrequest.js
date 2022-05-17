it('Alpha login', () => {
    cy.visit('https://beta.api.trukkr.pk/login')
    cy.get('#userName').type('zohaib.naqvi@artisticmilliners.com')
    cy.get('#password').type('123456789')
    cy.get('#mui-1').click()
    cy.get(':nth-child(4) > .c-sidebar-nav-link').click()
// cy.get(".cy.get('#mui-2')").click()


cy.get('input[type="button"]').type('book')
        cy.get('#mui-2').trigger('click')



})