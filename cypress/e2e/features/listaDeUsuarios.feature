Feature: Listagem de Usuarios

Scenario: Verificaçao da lista de usuarios cadastrados
    Given  que acessei a Funcionalidade de Listagem de usuarios
    When existem usuarios cadastrados
    When é informado  um email na barra de pesquisa
    When  a operçao for confirmada
    Then o usuario sera cadastrado

