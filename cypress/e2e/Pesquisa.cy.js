describe('Pesquisa por usuarios',()=>{
    before('Email para pesquisa',()=>{
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
        cy.login();
        
      });
    beforeEach('Visita',()=>{
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
    })
     
    it('Busca por email',()=>{
        cy.get('.sc-gsFSXq').type('galo@gmail.com');
        cy.get('#userData').should('be.visible');
        cy.get('[data-test="userDataName"]').should('be.visible');
        cy.get('[data-test="userDataEmail"]').should('be.visible');
      })
    it('Busca por nome',()=>{
        cy.get('.sc-gsFSXq').type('Zico');
        cy.get('#userData').should('be.visible');
        cy.get(':nth-child(1) > .sc-dAbbOL > [data-test="userDataName"]').should('be.visible');
        cy.get(':nth-child(1) > .sc-dAbbOL > [data-test="userDataEmail"]').should('be.visible');;
    })  
    it('Busca por usuario inexistente',()=>{
        cy.get('.sc-gsFSXq').type('Inexistente');
        cy.get('.sc-koXPp').should('be.visible');

    })  
})