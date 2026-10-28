const BASE_URL = 'https://practicesoftwaretesting.com';

export default class BasePage {
    open(path = '/') {
        cy.visit(`${BASE_URL}${path}`);
    }

    byTest(id) {
        return cy.get(`[data-test="${id}"]`);
    }

    languageSelect() {
        return this.byTest('language-select');
    }

    openLanguageMenu() {
        this.languageSelect()
            .should('have.attr', 'aria-expanded', 'false')
            .click()
            .should('have.attr', 'aria-expanded', 'true');
    }

    selectLanguage(code) {
        this.byTest(`lang-${code}`).should('be.visible').click();
    }
}