import homePage from '../../pages/home.page.js';

describe('Language change', () => {
    beforeEach(() => {
        homePage.open();
    });

    it('should change the language to French', () => {
        homePage.openLanguageMenu();
        homePage.selectLanguage('fr');
        homePage.languageSelect().should('contain', 'FR');
        homePage.byTest('nav-home').should('contain', 'Accueil');
    });

    it('should change the language to German', () => {
        homePage.openLanguageMenu();
        homePage.selectLanguage('de');
        homePage.languageSelect().should('contain', 'DE');
        homePage.byTest('nav-contact').should('contain', 'Kontakt');
    });

    it('should change the language to Dutch', () => {
        homePage.openLanguageMenu();
        homePage.selectLanguage('nl');
        homePage.languageSelect().should('contain', 'NL');
        homePage.byTest('nav-sign-in').should('contain', 'Inloggen');
    });

    it('should change the language to Turkish', () => {
        homePage.openLanguageMenu();
        homePage.selectLanguage('tr');
        homePage.languageSelect().should('contain', 'TR');
        homePage.byTest('nav-contact').should('contain', 'İletişim');
    });
});