import BasePage from './base.page.js';

class HomePage extends BasePage {
    searchFor(term) {
        this.byTest('search-query').type(term);
        this.byTest('search-submit').click();
    }

    openProductByName(name) {
        this.searchFor(name);
        cy.contains('[data-test="product-name"]', name).click();
    }

    searchResultCount() {
        return this.byTest('search-result-count');
    }

    powerToolsCheckbox() {
        return cy.contains('label', 'Power Tools')
            .find('input[name="category_id"]');
    }

    filterByPowerTools() {
        this.powerToolsCheckbox().check({ force: true });
    }

    sortBy(option) {
        this.byTest('sort').select(option);
    }

    productNames() {
        return this.byTest('product-name');
    }

    priceElements() {
        return cy.get('[data-test="product-price"]');
    }
}

export default new HomePage();