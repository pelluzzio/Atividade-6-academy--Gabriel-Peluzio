import {  Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import ListagemDeusuarios from "../support/pages/lista.page";
var paginaLista = new ListagemDeusuarios();

Given('que acessei a Funcionalidade de Listagem de usuarios$', () => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
});

When('existem usuarios cadastrados', () => {
    paginaLista.getListadeUsuarios().should('be.visible');
    paginaLista.getPrimeiroUsuario().should('be.visible');
    paginaLista.getNomeDoUsuario().should('be.visible');
    paginaLista.getEmailDoUsuario().should('be.visible');
    paginaLista.getPaginação().should('be.visible');
    expect(resp.status).to.eq(200)
	return true;
});

When('é informado  um email na barra de pesquisa', () => {
	return true;
});

When('a operçao for confirmada', () => {
	return true;
});

Then('o usuario sera cadastrado', () => {
	return true;
});




