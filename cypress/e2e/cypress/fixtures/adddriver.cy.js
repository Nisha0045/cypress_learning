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
    else {
      return null
    }
  }
  cy.visit('https://beta.api.trukkr.pk')
  cy.get(':nth-child(7) > .c-sidebar-nav-link').click()
  cy.get('#mui-1').click()
  cy.get('.css-q3ik4o > :nth-child(1)').click()
  //  cy.get('.form-control medium-priority',{ timeout: 5000 }).type(generateRandomNumPlate())
  // })

  cy.get('[name="driverName"]', { timeout: 5000 }).type(randomGenerator(5, "Name"))
  cy.get('[name="mobileNo"]', { timeout: 5000 }).type(randomGenerator(9, "phoneNumber"))
  cy.get(':nth-child(1) > .form-group > .css-2b097c-container > .css-n7p1v0-control > .css-1hwfws3').click()
  cy.get('#react-select-2-option-2', { timeout: 5000 }).click()
  cy.get('#_id > .css-n7p1v0-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
  cy.get('#react-select-3-option-55').click()
  cy.get('#address').type('Gizri phase 4 karachi')
  cy.get(':float-right pr-3 cursor').click()


})