import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import AttUsuarios from "../pages/atualizar.page";
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 
var atualizar = new AttUsuarios();



Given(/^que acessei a Funcionalidade de Listagem de usuarios$/, () => {
	cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
	return true;
});

When(/^existem usuarios cadastrados$/, () => {
	atualizar.getNovo().should('be.visible');
    atualizar.getNovo().click();
    atualizar.getNome().type('Zico');
    atualizar.getEmail().type(randomEmail);
    atualizar.getSalvar().click();
    atualizar.getVoltar().click();
    atualizar.getPrimeiroUsuario().should('be.visible');
    atualizar.getNomeDoUsuario().should('be.visible');
	return true;
});

When(/^clico para ver detalhes$/, () => {
	atualizar.getPesquisa().type(randomEmail)
    cy.wait(1000);
    atualizar.getVerDetalhes().click();
    atualizar.getEmailAtt().should('be.visible');
	return true;
});

When(/^clico para editar e escolho um email valido$/, () => {
	atualizar.getEditar().click();
	atualizar.getEmailAtt().clear().type(randomEmail)
	return true;
});

Then(/^atualizo o cadastro$/, () => {
	atualizar.getSalvar().click();
	return true;
});

When(/^clico para editar e escolho um nome valido$/, () => {
	atualizar.getEditar().click();
	atualizar.getNomeAtt().clear().type('Zico')
	return true;
});
When(/^existe usuario cadastrado$/, () => {
    atualizar.getPrimeiroUsuario().should('be.visible');
    atualizar.getNomeDoUsuario().should('be.visible');
	return true;
});

When(/^clico para editar e escolho um nome invalido$/, () => {
	atualizar.getEditar().click();
	atualizar.getNomeAtt().clear().type('Zic');
	atualizar.getSalvar().click();
	atualizar.getErro().should('be.visible');
	return true;
});

When(/^clico para editar e escolho um nome invalido#1$/, () => {
	atualizar.getEditar().click();
	atualizar.getNomeAtt().clear().type('pneumoultramicroscopicossilicovulcanoconiosepneumoultramicroscopicossilicovulcanoconiosepneumoultramicroscopicossilicovulcanoconiose');
	atualizar.getSalvar().click();
	atualizar.getErro().should('be.visible');
	return true;
});

When(/^clico para editar e escolho um email invalido$/, () => {
	atualizar.getEditar().click();
	atualizar.getEmailAtt().clear().type('Zic');
	atualizar.getSalvar().click();
	atualizar.getErro().should('be.visible');
	return true;
});
When(/^clico para editar e escolho um email invalido#1$/, () => {
	atualizar.getEditar().click();
	atualizar.getEmailAtt().clear().type('pneumoultramicroscopicossilicovulcanoconiosepneumoultramicroscopicossilicovulcanoconiosepneumoultramicroscopicossilicovulcanoconiose');
	atualizar.getSalvar().click();
	atualizar.getErro().should('be.visible');
	return true;
});
When(/^clico para editar e escolho um email invalido#2$/, () => {
	atualizar.getEditar().click();
	atualizar.getEmailAtt().clear().type('galo@');
	atualizar.getSalvar().click();
	atualizar.getErro().should('be.visible');
	return true;
});
