export default class AttUsuarios{
    linkNovoPerfil = '[href="/users/novo"]';
    inputNome = '#name';
    inputEmail = '#email';
    buttonEvniar = '.dGvNqp > .sc-dAlyuH';
    urlVoltar = '[href="/users"]';
    divPrimeiroUsuario = '#listaUsuarios > :nth-child(1)';
    pNomeDoUsuario = ':nth-child(1) > .sc-dAbbOL > [data-test="userDataName"]';
    divCampoPesquisa = '.sc-gsFSXq';
    buttonVerDetalhes = '#userDataDetalhe';
    inputEmailAtt = '#userEmail';
    divCadastroNovo = '.sc-koXPp'
    buttonAtt = '[type="button"] > .sc-dAlyuH';
    inputNomeAtt = '#userName';
    divMsgErro ='.sc-cPiKLX';
    getNovo (){
        return cy.get(this.linkNovoPerfil);
    };
    getNome (){
        return cy.get(this.inputNome);
    };
    getEmail (){
        return cy.get(this.inputEmail)
    }
    getSalvar (){
        return cy.get(this.buttonEvniar)
    }
    getVoltar (){
        return cy.get(this.urlVoltar)
    }
    getNomeDoUsuario (){
        return cy.get(this.pNomeDoUsuario);
    };
    getPrimeiroUsuario(){
        return cy.get(this.divPrimeiroUsuario);
    };
    getPesquisa (){
        return cy.get(this.divCampoPesquisa);
    };
    getVerDetalhes (){
        return cy.get(this.buttonVerDetalhes);
    };
    getEmailAtt (){
        return cy.get(this.inputEmailAtt);
    };
   getCadastro (){
    return cy.get(this.divCadastroNovo);
   }
   getEditar (){
    return cy.get(this.buttonAtt);
   }
   getNomeAtt (){
    return cy.get(this.inputNomeAtt);
   }
   getErro (){
    return cy.get(this.divMsgErro);
   }
}