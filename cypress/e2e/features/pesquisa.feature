Feature: Pesquisa de Usuario

    Scenario: Pesquisa por email
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existem usuarios cadastrados
        Then pesquiso pelo email 
    
    Scenario: Pesquisa por nome
        Given que acessei a Funcionalidade de Listagem de usuarios
        When existe usuario cadastrado
        Then pesquiso pelo nome     
     
     Scenario: Pesquisa por usuario inexistente 
        Given que acessei a Funcionalidade de Listagem de usuarios
        Then pesquiso pelo inexistente     