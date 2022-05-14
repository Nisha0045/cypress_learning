// const cypress = require("cypress");



it('login portal ', () => {
  var email= ""
  var password=""
   function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    //assing values for login 
email=result + "@aharo.com"
password='123456789'
    return result;

  }  
   function randomnumbergenerator(length) {
    var result           = '';
    var characters       = '123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

  }  

     cy.visit('https://af8c-202-5-144-98.ngrok.io/')
     cy.get('[href="/login/supplier"]').click();
     cy.get('#userName').type('03'+randomnumbergenerator(9))
     cy.get('#mui-2').click();
    //  cy.get('input').type('1828')
    cy.get('#otp').type('1828')
     cy.get('#mui-3').click();
     cy.get('#userName').type(makeid(6) + "@aharo.com")

     cy.get('#password').type('123456789')
     cy.get('#mui-4').click()
     cy.get('#companyName').type('trukkr')
     cy.get('#name').type('new trukkkr office')
     cy.get('#street').type('korangi crossing ')
  
     cy.get('.css-6q0nyr-Svg').click()
     cy.get('#react-select-3-option-3').click()
    //  cy.get('.css-1hb7zxy-IndicatorsContainer > :nth-child(2) > .css-6q0nyr-Svg').click()
    cy.get(':nth-child(3) > .MuiRadio-root > .PrivateSwitchBase-input').click()
    cy.get('#CNIC_NTN').type('422013456543')
     cy.get('#mui-5').click()
     
     // cy.get('#mui-1')
     cy.get('#userName').type(email)
     cy.get('#password').type(password)
     cy.get('#mui-6').click()

   })
