describe ('listagem de usuarios',()=>{
    beforeEach(()=>{
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    });
    it('Listagem de Usuarios',()=>{
        cy.get('#listaUsuarios').should('be.visible');
        cy.get('#listaUsuarios > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(1) > .sc-dAbbOL > [data-test="userDataName"]').should('be.visible');
        cy.get(':nth-child(1) > .sc-dAbbOL > [data-test="userDataEmail"]').should('be.visible');
        cy.get('.sc-fPXMVe').should('be.visible');
    });

    it('Lista Vazia',()=>{
        cy.intercept('GET','/api/v1/users',{
            statusCode: 200,
            body :[],
        }).as('empetyLIst');
        cy.get('.sc-koXPp').should('be.visible');
    })
})

