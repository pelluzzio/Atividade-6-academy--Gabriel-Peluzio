Feature: Atualizar Usuario 

    Scenario: Atualizar email valido 
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existem usuarios cadastrados
        When clico para ver detalhes
        When clico para editar e escolho um email valido   
        Then atualizo o cadastro

    Scenario: Atualizar nome valido 
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existe usuario cadastrado
        When clico para ver detalhes
        When clico para editar e escolho um nome valido   
        Then atualizo o cadastro
   
    Scenario: Atualizar nome invalido 
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existe usuario cadastrado
        When clico para ver detalhes
        When clico para editar e escolho um nome invalido  
        Then atualizo o cadastro

    Scenario: Atualizar nome invalido#1 
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existe usuario cadastrado
        When clico para ver detalhes
        When clico para editar e escolho um nome invalido#1 
        Then atualizo o cadastro
    Scenario: Atualizar email invalido 
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existe usuario cadastrado
        When clico para ver detalhes
        When clico para editar e escolho um email invalido
        Then atualizo o cadastro
     Scenario: Atualizar email invalido#1
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existe usuario cadastrado
        When clico para ver detalhes
        When clico para editar e escolho um email invalido#1
        Then atualizo o cadastro
    Scenario: Atualizar email invalido#2
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existe usuario cadastrado
        When clico para ver detalhes
        When clico para editar e escolho um email invalido#2
        Then atualizo o cadastro
