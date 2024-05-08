import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import ListagemDeusuarios from "../pages/lista.page";
var paginaLista = new ListagemDeusuarios();

Given('que acessei a Funcionalidade de Listagem de usuarios', () => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
});

When('existem usuarios cadastrados', () => {
    paginaLista.getPrimeiroUsuario().should('be.visible');
    paginaLista.getNomeDoUsuario().should('be.visible');
    paginaLista.getEmailDoUsuario().should('be.visible');
	return true;
});

Then(/^Usuarios são listados$/, () => {
    paginaLista.getListadeUsuarios ().should('be.visible');
    paginaLista.getPaginação().should('be.visible');

    return true;

});


Then(/^é possivel ver os detalhes da conta$/, () => {
    paginaLista.getVerDetalhes().should('be.visible');
    paginaLista.getVerDetalhes().click();
    paginaLista.getNomeAtt().should('be.visible');
    paginaLista.getIdAtt().should('be.visible');
    return true;
});

Then(/^é possivel apagar uma conta$/, () => {
    paginaLista.getDeletar().should('be.visible');
    paginaLista.getDeletar().click();
    paginaLista.getConfirmar();
    
	return true;
});


Then(/^deve ser possivel acessar novo usuario$/, () => {
    paginaLista.getNovo().should('be.visible');
    paginaLista.getNovo().click();
	return true;
});

When(/^nao existem usuarios cadastrados$/, () => {
	cy.intercept('GET', '/api/v1/users', {
        statusCode: 200,
        body: [],
    }).as('empetyLIst');
    return true;
});

Then(/^opção de cadastrar novo usuario$/, () => {
    paginaLista.getCadastroNovo().should('be.visible').click();
	return true;
});

Then(/^passam-se as paginas e voltam=se as paginas$/, () => {
    paginaLista.getPassar();
    paginaLista.getVoltar();

	return true;
});


