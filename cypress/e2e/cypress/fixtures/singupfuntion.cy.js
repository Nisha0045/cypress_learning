// *************************SINGUP AS A S using random funtions*****
it('login portal ', () => {
  var email= ""
  var password=""
   function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));  //chartat get the satring value from specific index Math.floor using for round of value 
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

     cy.visit('https://beta.api.trukkr.pk')
     cy.get('[href="/login/supplier"]').click();
     cy.get('#userName').type('03'+randomnumbergenerator(9))
     cy.get('#mui-3').click();
    cy.get('input[name="otp"]').type('8281')
     cy.get('#mui-5').click();
     cy.get('#userName').type(makeid(6) + "@aharo.com")
     cy.get('#password').type('123456789')
     cy.get('#mui-7').click()
     cy.get('#companyName').type('trukkr')
     cy.get('#name').type('new trukkkr office')
     cy.get('#street').type('korangi crossing ')
     cy.get('.css-tlfecz-indicatorContainer').click()
     cy.get('#react-select-2-option-55').click()
    cy.get(':nth-child(3) > .MuiRadio-root > .PrivateSwitchBase-input').click()
    cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.get('#CNIC_NTN').type('422013456543')
     cy.get('#mui-9').click()
     cy.get('#userName').type(email)
     cy.get('#password').type(password)
     cy.get('#mui-11').click()

})


