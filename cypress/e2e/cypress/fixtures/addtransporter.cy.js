it('Alpha login', () => {

    function randomGenerator(length, type) {
        var result = '';
        var alphabates = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var numbers = '1234567890'
        var characters = null
        var charactersLength = 0
        if (type == "phoneNumber") {
          charactersLength = numbers.length
          characters = numbers
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return "03" + result;
        }
        else if (type === "Name") {
          //var alphabates = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          charactersLength = alphabates.length
          characters = alphabates
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result
    
        }
    }
    cy.visit('https://beta.api.trukkr.pk')
    cy.get(':nth-child(8) > .c-sidebar-nav-link').click()
    cy.get('#mui-1').click()
    cy.get('.css-q3ik4o > :nth-child(1)').click()
    cy.get('#companyName', { timeout: 5000 }).type(randomGenerator(5, "Name"))
    cy.get('[type="file"]:eq(0)').attachFile('image.png', { allowEmpty: true })

    cy.get('#transporterName', { timeout: 5000 }).type(randomGenerator(5, "Name"))
    cy.get('#mobileNo', { timeout: 5000 }).type(randomGenerator(9, "phoneNumber"))
    cy.get('.css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').should('be.visible').click()
    // cy.get('.css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').select(['#react-select-2-option-3', '#react-select-2-option-5']);
    cy.get('#react-select-2-option-3').click()
    cy.get('#commodity').click()
    cy.get(':nth-child(4) > .cursor > .float-right').click()
    cy.get('#cnicNo').type(randomGenerator(14, "phoneNumber"))
    cy.get('#licenseNo').type(randomGenerator(14, "phoneNumber"))
    cy.get('[type="file"]:eq(1)').attachFile('image.png', { allowEmpty: true })
    cy.get(':nth-child(7) > .cursor > .float-right').click()
    cy.get('#bankName').type(randomGenerator(7, "Name"))
    cy.get('#accountTitle').type(randomGenerator(7, "Name"))
    cy.get('#iban').type(randomGenerator(14, "phoneNumber"))
    cy.get('#mui-5').click()

})
