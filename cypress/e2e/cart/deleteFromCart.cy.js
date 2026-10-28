import homePage from '../../pages/home.page.js';
import productPage from '../../pages/product.page.js';
import cartPage from '../../pages/cart.page.js';

describe('Scenario: Delete item from cart', () => {
  beforeEach(() => {
    homePage.open();
    homePage.openProductByName('Combination Pliers');
    productPage.addToCart();
    productPage.cartQuantity().should('contain', '1');

    cartPage.openCheckout();
  });

  it('should delete an item from the cart', () => {
    cartPage.cartTotal().should('be.visible');
    cartPage.deleteButton().click();
    cartPage.emptyCartMessage().should('contain', 'The cart is empty');
  });
});