import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import PesquisaDeUsuarios from "../pages/pesquisa.page";
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 
var pesquisa = new PesquisaDeUsuarios();


Given('que acessei a Funcionalidade de Listagem de usuarios', () => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
});

When(/^existem usuarios cadastrados$/, () => {
    pesquisa.getNovo().should('be.visible');
    pesquisa.getNovo().click();
    pesquisa.getNome().type('Zico');
    pesquisa.getEmail().type(randomEmail);
    pesquisa.getSalvar().click();
    pesquisa.getVoltar().click();
    pesquisa.getPrimeiroUsuario().should('be.visible');
    pesquisa.getNomeDoUsuario().should('be.visible');
	return true;
});

Then(/^pesquiso pelo email$/, () => {
    pesquisa.getPesquisa().type(randomEmail)
    cy.wait(1000);
    pesquisa.getVerDetalhes().click();
    pesquisa.getEmailAtt().should('be.visible');
	return true;
});
When(/^existe usuario cadastrado$/, () => {
    pesquisa.getPrimeiroUsuario().should('be.visible');
    pesquisa.getNomeDoUsuario().should('be.visible');
	return true;
});

Then(/^pesquiso pelo nome$/, () => {
    pesquisa.getPesquisa().type('Zico')
    pesquisa.getNomeDoUsuario().should('be.visible')
	return true;
});

Then(/^pesquiso pelo inexistente$/, () => {
    pesquisa.getPesquisa().type('SSADIROIOKARMA')
    pesquisa.getCadastro().should('be.visible')
	return true;
});

