it('Alpha login', () => {

    function generateRandomNumPlate(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

    }


cy.visit('https://beta.api.trukkr.pk')
cy.get(':nth-child(7) > .c-sidebar-nav-link').click()
cy.get('#mui-1').click()
cy.get('.css-q3ik4o > :nth-child(1)').click()
cy.get('class="form-control medium-priority', { timeout: 5000 }).type(generateRandomNumPlate())
})