it('Alpha login', () => {

  function generateRandomNumPlate(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    //assing values for Numplate
    const specialCreator = "-";
    const threeDigitNumber = Math.floor(Math.random() * 1000);
    result = result + specialCreator + threeDigitNumber;
    return result;
  }
  function generateRandomChasisNum(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const Numbers = Math.floor(Math.random() * 1000);
    result = result + Numbers;
    return result;

  }

  cy.visit('https://beta.api.trukkr.pk')

  cy.get(':nth-child(6) > .c-sidebar-nav-link').click()
  cy.get('#mui-1').click()
  cy.get('#regNumber', { timeout: 5000 }).type(generateRandomNumPlate(4))

  cy.get(':nth-child(3) > .form-group > #_id > .css-n7p1v0-control > .css-1hwfws3').should('be.visible').click()
  cy.get('#react-select-3-option-1', { timeout: 5000 }).click()
  cy.get(':nth-child(4) > .form-group > #_id > .css-n7p1v0-control > .css-1hwfws3').should('be.visible').click()
  cy.get('#react-select-4-option-0', { timeout: 5000 }).click()
  cy.get('#chasisNo', { timeout: 500 }).type(generateRandomChasisNum(7))
  cy.get('#engineNo', { timeout: 500 }).type(generateRandomChasisNum(9))
  cy.get('#fuelType > .css-n7p1v0-control > .css-1hwfws3', { timeout: 500 }).click()
  cy.get('#react-select-6-option-1', { timeout: 5000 }).click()
  cy.get(':nth-child(3) > .documents-section > .text-center > .w-100 > .inner-div', { timeout: 5000 }).click()

  cy.get('[type="file"]').attachFile('image.png', { allowEmpty: true })

  cy.get('h2 > .float-right', { timeout: 5000 }).click()
  cy.wait(2000)
  cy.get('[type="file"]').attachFile('image.png', { allowEmpty: true })
  cy.get('#mui-5').click()

})