describe('Page d\'accueil - Liste des produits', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.get('app-product-list > div').should('have.length', 3);
    });
  
  it('Buy Iphone XR', () => {
    cy.visit('http://localhost:4200/');
    cy.login("test@test.com","test");

    //Recupere le a avec le title Iphone XL details
    cy.get('a[title="Phone XL details"]').click();

    cy.url().should('include', 'http://localhost:4200/products/1');

    cy.get('button').contains('Buy').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Your product has been added to the cart!');
    });

    cy.get('.fancy-button').should('be.visible').click();
    cy.url().should('include', 'http://localhost:4200/cart');

    cy.get('.cart-item').should('have.length', 1);
    //Il faut remplir le champs name et email
    cy.get('#name').type('test');
    cy.get('#address').type('test@test');
    //Clique sur le bouton submit
    cy.get('button').contains('Purchase').click();

    cy.get('.card-items').should('have.length', 0);
    cy.logout();
  });
})