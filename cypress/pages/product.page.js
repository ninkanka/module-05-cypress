import BasePage from './base.page.js';

class ProductPage extends BasePage {
    openProduct(id) {
        this.open(`/product/${id}`);
    }

    addToCartButton() {
        return this.byTest('add-to-cart');
    }

    addToCart() {
        this.addToCartButton().should('be.enabled').click();
    }

    cartQuantity() {
        return this.byTest('cart-quantity');
    }

    productName() {
        return this.byTest('product-name');
    }

    productDescription() {
        return this.byTest('product-description');
    }

    unitPrice() {
        return this.byTest('unit-price');
    }

    productImage() {
        return cy.get('.figure-img');
    }

    productSpecs() {
        return this.byTest('product-specs');
    }
}

export default new ProductPage();