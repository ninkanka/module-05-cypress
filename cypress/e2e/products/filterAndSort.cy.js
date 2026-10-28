import homePage from '../../pages/home.page.js';

describe('Scenario: Filtering and sorting products', () => {
  beforeEach(() => {
    homePage.open();
  });

  it('Scenario: User filters and sorts products', () => {
    homePage.filterByPowerTools();
    homePage.sortBy('price,asc');

    homePage.priceElements().should(($elements) => {
      const prices = [...$elements].map((el) => parseFloat(el.innerText.replace(/[^\d.]/g, '')));
      expect(prices).to.not.be.empty;
      expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
    });
  });
});