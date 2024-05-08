Feature: Criar Usuario

    Scenario: Cadastro Valido
        Given que acessei a Funcionalidade de Listagem de usuarios
        When clico no novo usuario
        When digito nome 
        When digito email   
        Then crio o usuario
    
    Scenario: Cadastro invalido nome
        Given que acessei a Funcionalidade de Listagem de usuarios
        When clico no novo usuario
        When digito nome invalido  
        Then não crio o usuario
    
    Scenario: Cadastro invalido nome#1
        Given que acessei a Funcionalidade de Listagem de usuarios
        When clico no novo usuario
        When digito nome invalido#1 
        Then não crio o usuario
    
    Scenario: Cadastro invalido nome#2
        Given que acessei a Funcionalidade de Listagem de usuarios
        When clico no novo usuario
        When digito nome invalido#2
        Then não crio o usuario
   
    Scenario: Cadastro invalido email
        Given que acessei a Funcionalidade de Listagem de usuarios
        When clico no novo usuario
        When digito nome 
        When digito email invalido   
        Then não crio o usuario
    
    Scenario: Cadastro invalido email#1
        Given que acessei a Funcionalidade de Listagem de usuarios
        When clico no novo usuario
        When digito nome 
        When digito email invalido#1 
        Then não crio o usuario
        
    Scenario: Cadastro invalido email#2
        Given que acessei a Funcionalidade de Listagem de usuarios
        When clico no novo usuario
        When digito nome 
        When digito email invalido#2
        Then não crio o usuario