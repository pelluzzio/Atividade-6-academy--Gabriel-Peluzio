import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();
import {slowCypressDown} from 'cypress-slow-down'
slowCypressDown(400)

describe('Cadastro de Usuario', () => {
  before('Teste',()=>{
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
    cy.contains('a[href="/users/novo"]', 'Novo').click();
    cy.get('#name').type('Zico');
    cy.get('#email').type('galo@gmail.com');
    cy.contains('button', 'Salvar').click();
  });
  
  beforeEach('Verificar o preenchimento dos campos', () => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
    cy.contains('a[href="/users/novo"]', 'Novo').click();
  });

  describe('Cadastro Valido', () => {
    it('Cadastro valido', () => {
      cy.get('#name').type('Zico');
      cy.get('#email').type(randomEmail);
      cy.contains('button', 'Salvar').click();
      cy.get('.go2072408551').should('be.visible');

    })
  });

  describe('Cadastro com nome vazio', () => {
    it('Cadastro sem nome', () => {
      cy.get('#name');
      cy.get('#email').type(randomEmail);
      cy.contains('button', 'Salvar').click();
      cy.contains('O campo nome é obrigatório').should('be.visible');

    });
  });

  describe('Cadastro com email mal formatado', () => {
    it('Cadastro com email errado', () => {
      cy.get('#name').type('Azir');
      cy.get('#email').type('imperadordeshurima@gmail');
      cy.contains('button', 'Salvar').click();
      cy.contains('Formato de e-mail inválido').should('be.visible');

    });
  });

  describe('Cadastro com nome com + de 100 caracteres', () => {
    it('Cadastro + de 100', () => {
      cy.get('#name').type('abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijskdfkajsdfkhaskdfhkashdfkhasdkfjhaskdhfkahwsdfkhaskdhfkashdfkhaskdfhkasjhdk');
      cy.get('#email').type(randomEmail);
      cy.contains('button', 'Salvar').click();
      cy.contains('Informe no máximo 100 caracteres para o nome').should('be.visible');

    });
  });

  describe('Cadastro repetido', () => {
    it('Cadastro igual', () => {
      cy.get('#name').type('Zico');
      cy.get('#email').type('galo@gmail.com');
      cy.contains('button', 'Salvar').click();
      cy.contains('Erro').should('be.visible');

    });
  });

  describe('Cadastro com email + de 60 caracteres', () => {
    it('Cadastro email +60', () => {
      cy.get('#name').type('Zico');
      cy.get('#email').type('umavezflamengosempreflamengoflamengosempreeueidesereomeumaiorprazervelobrilharsejanaterrasejanomarvencervencervencerumavezflamengoflamengoatemorrer@gmail.com');
      cy.contains('button', 'Salvar').click();
      cy.contains('Informe no máximo 60 caracteres para o e-mail').should('be.visible');

    });
  });

  describe('Cadastro com nome com - de 4 caracteres', () => {
    it('Cadastro - de 4', () => {
      cy.get('#name').type('Ana');
      cy.get('#email').type(randomEmail);
      cy.contains('button', 'Salvar').click();
      cy.contains('Informe pelo menos 4 letras para o nome').should('be.visible');

    });
  });






})

