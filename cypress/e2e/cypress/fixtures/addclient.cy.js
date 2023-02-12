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
    cy.get(':nth-child(9) > .c-sidebar-nav-link').click()
    cy.get('#mui-1').click()
    cy.get('[type="file"]:eq(0)').attachFile('image.png', { allowEmpty: true })
    cy.get('#clientName', { timeout: 5000 }).type(randomGenerator(5, "Name"))
    cy.get('#mobileNo', { timeout: 5000 }).type(randomGenerator(9, "phoneNumber"))
    cy.get('.css-1nfu0b0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-2-option-2').click()
    cy.get('.css-1wun7jj-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-3-option-2').click()
    cy.get('.css-101fddm-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('#react-select-4-option-2').click()
    cy.get('.basic-info > :nth-child(6) > .form-group > .form-control', { timeout: 5000 }).type(randomGenerator(5, "phoneNumber"))
    cy.get(':nth-child(7) > .form-group > .form-control', { timeout: 5000 }).type(randomGenerator(4, "phoneNumber"))
    //cy.get(':nth-child(8) > .form-group > #_id > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
    cy.get('.form-control medium-priority', { timeout: 5000 }).type(randomGenerator(5, "Name"))



})