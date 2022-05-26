// it('Alpha login', () => {
//     cy.visit('https://portal-alpha.trukkr.pk/')
//     //     cy.get(‘input[name=“master@trukkr.pk”]’)
//     //    .invoke(‘text’)
//     //    .then(sometext => cy.log(sometext));
//     // cy.get(‘input[name=“master@trukkr.pk”]‘).then(($text)=>{
//     //     const txt = $text.text()
//     //     cy.log(txt)
//     // })
//     cy.get('#username', { timeout: 5000 }).type('master@trukkr.pk', { force: true })
//     cy.get('#password', { timeout: 5000 }).type('king1122', { force: true })
//     // cy.get(‘.Iinput’, { timeout: 5000 }).click({ multiple: true })
//     cy.get('.ant-form', { timeout: 5000 }).submit({ multiple: true })
//     cy.get('.ant-menu-submenu ant-menu-submenu-inline',{timeout:500}).click({ force: true })



// })
it('Alpha login', () => {
    cy.visit('https://portal-alpha.trukkr.pk/')
    cy.get('#username', { timeout: 5000 }).type('master@trukkr.pk', { force: true })
    cy.get('#password', { timeout: 5000 }).type('king1122', { force: true })
    // cy.get(‘.Iinput’, { timeout: 5000 }).click({ multiple: true })
    cy.get('.ant-form', { timeout: 5000 }).submit({ multiple: true })
    cy.get('.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow').click({ multiple: true, force: true })
    // cy.get('.ant-menu-item ant-menu-item-selected').click()
    // cy.get('.ant-menu-item' ,{ timeout: 5000 }).click({ force: true })
    cy.get('#UserRoleManagement/Menu>:nth-child(2) > a').click()
    
    
})

