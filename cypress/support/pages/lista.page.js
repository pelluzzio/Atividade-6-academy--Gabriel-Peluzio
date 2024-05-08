export default class ListagemDeusuarios {
    divListaDeUsuarios = '#listaUsuarios';
    pNomeDoUsuario = ':nth-child(1) > .sc-dAbbOL > [data-test="userDataName"]';
    pEmailDoUsuario = ':nth-child(1) > .sc-dAbbOL > [data-test="userDataEmail';
    divPrimeiroUsuario = '#listaUsuarios > :nth-child(1)';
    buttonDeletar = ':nth-child(1) > .sc-feUZmu > [data-test="userDataDelete"]';
    buttonVerDetalhes = '#userDataDetalhe';
    ulPaginação = '.sc-fPXMVe';
    linkNovoPerfil = '[href="/users/novo"]';
    buttonConfirmar = '.sc-lcIPJg.eIYdvr';
    inputNomePaginaATT = '#userName';
    inputIdPaginaATT = '[name="id"]';
    urlCadastre1 = '[href="/users/novo"]';
    buttonPassar = '#paginacaoProximo';
    buttonVoltar = '#paginacaoVoltar';

    getListadeUsuarios (){
        return cy.get(this.divListaDeUsuarios);
    };
    getNomeDoUsuario (){
        return cy.get(this.pNomeDoUsuario);
    };
    getPrimeiroUsuario(){
        return cy.get(this.divPrimeiroUsuario);
    };
    getEmailDoUsuario (){
        return cy.get(this.pEmailDoUsuario);
    };
    getDeletar (){
        return cy.get(this.buttonDeletar);
    };
    getVerDetalhes (){
        return cy.get(this.buttonVerDetalhes);
    };
    getPaginação (){
        return cy.get(this.ulPaginação);
    };
    getNovo (){
        return cy.get(this.linkNovoPerfil);
    };
    getConfirmar (){
        return cy.get(this.buttonConfirmar).click();
    };
    getNomeAtt (){
        return cy.get(this.inputNomePaginaATT);
    }
    getIdAtt (){
        return cy.get(this.inputIdPaginaATT);
    }
    getCadastroNovo (){
        return cy.get(this.urlCadastre1);
    }
    getPassar (){
        return cy.get(this.buttonPassar).click();
    }
    getVoltar (){
        return cy.get(this.buttonVoltar).click();
    }
}