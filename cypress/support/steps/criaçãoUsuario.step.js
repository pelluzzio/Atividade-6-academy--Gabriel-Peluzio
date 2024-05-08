import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import CriaçãoUsuario from "../pages/criaçãoUsuario.page";
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 
var criação = new CriaçãoUsuario();

Given(/^que acessei a Funcionalidade de Listagem de usuarios$/, () => {
	cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
	return true;
});

When(/^clico no novo usuario$/, () => {
    criação.getNovo().should('be.visible')
    criação.getNovo().click();
	return true;
});

When(/^digito nome$/, () => {
    criação.getNome().type('Zico')
	return true;
});

When(/^digito email$/, () => {
    criação.getEmail().type(randomEmail)
	return true;
});

Then(/^crio o usuario$/, () => {
    criação.getSalvar().click();
    cy.wait(1000)
    criação.getAprovado().should('be.visible')
	return true;
});
When(/^digito nome invalido$/, () => {
    criação.getNome().type('Zic')
    criação.getEmail().type(randomEmail)
    criação.getErro1().should('be.visible')
	return true;
});
When(/^digito nome invalido#1$/, () => {
    criação.getNome().type('pneumoultramicroscopicossilicovulcanoconiosepneumoultramicroscopicossilicovulcanoconiosepneumoultramicroscopicossilicovulcanoconiose')
    criação.getEmail().type(randomEmail)
    criação.getErro1().should('be.visible')
	return true;
});
When(/^digito nome invalido#2$/, () => {
    criação.getEmail().type(randomEmail)
    criação.getErro1().should('be.visible')
	return true;
});
Then(/^não crio o usuario$/, () => {
    criação.getSalvar().click();
	return true;
});

When(/^digito email invalido$/, () => {
    criação.getEmail().type('zic');
    criação.getSalvar().click();
    criação.getErro1().should('be.visible');
	return true;
});
When(/^digito email invalido#1$/, () => {
    criação.getEmail().type('pneumoultramicroscopicossilicovulcanoconiosepneumoultramicroscopicossilicovulcanoconiosepneumoultramicroscopicossilicovulcanoconiose');
    criação.getSalvar().click();
    criação.getErro1().should('be.visible');
	return true;
});
When(/^digito email invalido#2$/, () => {
    criação.getEmail().type('galo@');
    criação.getSalvar().click();
    criação.getErro1().should('be.visible');
	return true;
});