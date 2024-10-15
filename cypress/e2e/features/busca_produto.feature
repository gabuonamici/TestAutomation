Feature: Busca de produtos no Advantage Online Shopping

  Scenario: Buscar por um produto existente
    Given que o usuário está na página inicial
    When o usuário digita "laptop" no campo de busca
    And clica no botão de busca
    Then o sistema exibe uma lista de produtos relacionados a "laptop"

  Scenario: Adicionar um produto ao carrinho
    Given que o usuário buscou por "laptop"
    When o usuário adiciona o primeiro produto da lista ao carrinho
    Then o produto é adicionado ao carrinho

  Scenario: Validar que o produto está no carrinho na tela de pagamento
    Given que o usuário adicionou um produto ao carrinho
    When o usuário vai para a tela de pagamento
    Then o sistema exibe o produto corretamente no carrinho

