import homePage from '../../pages/home.page.js';
import productPage from '../../pages/product.page.js';

describe('Scenario: Shopping cart actions', () => {
  beforeEach(() => {
    homePage.open();
    homePage.openProductByName('Slip Joint Pliers');
  });

  it('should add an item to the cart', () => {
    productPage.addToCartButton().should('be.visible').and('be.enabled');
    productPage.addToCart();
    productPage.cartQuantity().should('contain', '1');
  });
});