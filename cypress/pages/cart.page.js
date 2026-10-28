import BasePage from './base.page.js';

class CartPage extends BasePage {
    openCheckout() {
        this.open('/checkout');
    }

    cartTotal() {
        return this.byTest('cart-total');
    }

    deleteButton() {
        return cy.get('.col-md-1 > .btn');
    }

    emptyCartMessage() {
        return cy.get('.ng-star-inserted');
    }
}

export default new CartPage();