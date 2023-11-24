describe('Page d\'accueil - Liste des produits', () => {
  it('devrait afficher trois produits', () => {
    cy.visit('http://localhost:4200/');
    cy.get('app-product-list > div').should('have.length', 3);
  });

  it('button checkout', () => {
    cy.visit('http://localhost:4200/');
    cy.login("test@test.com",'test123');
    cy.get('.fancy-button').should('be.visible').click();
    cy.url().should('include', 'http://localhost:4200/cart');

    // It clicks on the "Shipping Prices" link
    cy.get('a[routerLink="/shipping"]').click();

    // It should verify the URL path
    cy.url().should('include', '/shipping');

    // It should see a list of 3 prices
    cy.get('.shipping-item').should('be.visible');
    cy.get('.shipping-item').should('have.length', 3);
    cy.logout();
  });
});


