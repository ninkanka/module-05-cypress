import homePage from '../../pages/home.page.js';

describe('Scenario: Find products by search term', () => {
    beforeEach(() => {
        homePage.open();
    });

    it('should search for an exact product 1', () => {
        homePage.searchFor('ear protection');
        homePage.searchResultCount().should('contain', 'ear protection');
    });

    it('should search for an exact product 2', () => {
        homePage.searchFor('combination pliers');
        homePage.searchResultCount().should('contain', 'combination pliers');
    });

    it('should search for an exact product 3', () => {
        homePage.searchFor('long nose pliers');
        homePage.searchResultCount().should('contain', 'long nose pliers');
    });

    it('should search for an exact product 4', () => {
        homePage.searchFor('hammer');
        homePage.searchResultCount().should('contain', 'hammer');
    });
});