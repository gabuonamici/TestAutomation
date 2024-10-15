import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que o usuário está na página inicial', () => {
  cy.visit('/');
});

When('o usuário digita {string} no campo de busca', (produto) => {
  cy.get('#menuSearch').click();
  cy.get('.autoComplete').type(produto);
});

When('clica no botão de busca', () => {
  cy.get('.autoComplete').type('{enter}');
});

Then('o sistema exibe uma lista de produtos relacionados a {string}', (produto) => {
  cy.get('.categoryTitle').should('contain', produto);
});

When('o usuário adiciona o primeiro produto da lista ao carrinho', () => {
  cy.get('.product-container').first().find('.add-to-cart').click();
});

Then('o produto é adicionado ao carrinho', () => {
  cy.get('#cart').should('contain', '1 Item');
});

When('o usuário vai para a tela de pagamento', () => {
  cy.get('#menuCart').click();
  cy.get('#checkOutButton').click();
});

Then('o sistema exibe o produto corretamente no carrinho', () => {
  cy.get('.checkoutSummary').should('contain', 'laptop');
});
