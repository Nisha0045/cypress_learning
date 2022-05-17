it('Alpha login', () => {
        cy.visit('https://portal-alpha.trukkr.pk/')


    //     cy.get('input[name="master@trukkr.pk"]')
    //    .invoke('text')
    //    .then(sometext => cy.log(sometext));

        // cy.get('input[name="master@trukkr.pk"]').then(($text)=>{
        //     const txt = $text.text()
        //     cy.log(txt)
    
        // })

        cy.get('#username').type('master@trukkr.pk')
        cy.get('#password').type('king1122')
        cy.get('#mui-6').click()
    })

   