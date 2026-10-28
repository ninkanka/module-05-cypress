import homePage from '../../pages/home.page.js';
import productPage from '../../pages/product.page.js';

describe('Scenario: User reads product details page', () => {
  beforeEach(() => {
    homePage.open();
    homePage.openProductByName('Claw Hammer');
  });

  it('should display the product details', () => {
    productPage.productDescription().should('be.visible');
    productPage.productName().should('be.visible');
    productPage.unitPrice().should('be.visible');
    productPage.productImage().should('be.visible');
    productPage.productSpecs().should('be.visible');
  });
});