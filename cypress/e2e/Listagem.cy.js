import ListagemDeusuarios from "../support/pages/lista.page";

describe('listagem de usuarios', () => {
    var paginaLista = new ListagemDeusuarios();
    beforeEach(() => {
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    });


    it('Listagem de Usuarios', () => {
        
        paginaLista.getListadeUsuarios().should('be.visible');
        paginaLista.getPrimeiroUsuario().should('be.visible');
        paginaLista.getNomeDoUsuario().should('be.visible');
        paginaLista.getEmailDoUsuario().should('be.visible');
        paginaLista.getPaginação().should('be.visible');
        expect(resp.status).to.eq(200)

    });
describe('Ver Detalhes',()=>{
    it('Deve ser possivel ver detalhes do usuario', () => {
        paginaLista.getVerDetalhes().should('be.visible');
        paginaLista.getVerDetalhes().click();
        expect(resp.status).to.eq(200)
        
    })
});
describe('Apagar um Usuario',()=>{
    it('Deve ser possivel deletar um usuario', () => {
        paginaLista.getDeletar().should('be.visible');
        paginaLista.getDeletar().click();
        paginaLista.getConfirmar().click();
        expect(resp.status).to.eq(204)
    })
});
describe('Botao de criar novo usuario',()=>{
    it('Deve ser possivel acessar novo usuario', () => {
        paginaLista.getNovo().should('be.visible');
        paginaLista.getNovo().click();
        expect(resp.status).to.eq(200)
    })
});

describe('Lista Vazia',()=> {

        it('Lista Vazia',()=> {
        cy.intercept('GET', '/api/v1/users', {
            statusCode: 200,
            body: [],
        }).as('empetyLIst');
        cy.get('.sc-koXPp').should('be.visible').click();
    })
})   

})

