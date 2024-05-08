Feature: Listagem de Usuarios

    Scenario: Verificaçao da lista de usuarios cadastrados
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existem usuarios cadastrados
        Then Usuarios são listados 

    
    Scenario: Verificaçao do botao ver detalhes 
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existem usuarios cadastrados
        Then é possivel ver os detalhes da conta 

    
    Scenario: Verificaçao do botao deletar
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existem usuarios cadastrados
        Then é possivel apagar uma conta 
    
     Scenario: Verificaçao do botao novo 
        Given que acessei a Funcionalidade de Listagem de usuarios
        Then deve ser possivel acessar novo usuario
    
    Scenario: Verificaçao da lista sem usuarios cadastrados
        Given que acessei a Funcionalidade de Listagem de usuarios
        When nao existem usuarios cadastrados
        Then opção de cadastrar novo usuario
    
     Scenario: Verificaçao da paginação com mais 6 usuarios cadastrados 
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existem usuarios cadastrados
        Then passam-se as paginas e voltam=se as paginas
        
    

