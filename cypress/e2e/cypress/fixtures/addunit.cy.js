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

    cy.get(':nth-child(10) > .c-sidebar-nav-link').click()
    cy.get('#mui-1').click()
    cy.get('#unitName', { timeout: 5000 }).type(randomGenerator(5, "Name"))
    cy.get(':nth-child(2) > .form-group > #_id > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-2-option-2').click()
    cy.get('#contactPerson', { timeout: 5000 }).type(randomGenerator(5, "Name"))
    cy.get('#contactNumber', { timeout: 5000 }).type(randomGenerator(9, "phoneNumber"))
    cy.get(':nth-child(5) > .form-group > .form-control', { timeout: 5000 }).type(randomGenerator(4, "phoneNumber"))
    cy.get(':nth-child(6) > .form-group > .form-control', { timeout: 5000 }).type(randomGenerator(4, "phoneNumber"))
    cy.get('.css-1nfu0b0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-3-option-3').click()
    cy.get('.css-1wun7jj-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-4-option-1').click()
    cy.get('.css-101fddm-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-5-option-1').click()
    cy.get(':nth-child(9) > .form-group > #_id > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-6-option-1').click()
    cy.get('#address').type('Gizri phase 4 karachi')
    cy.get('#mui-5').click()

})
