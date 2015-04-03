var testUtil = require('angular2/src/test_lib/e2e_util');

describe('Zippy Component', () => {

  afterEach(testUtil.verifyNoBrowserErrors);

  describe('dynamic reflection', () => {
    var URL = 'examples/src/zippy_component/index.html';

    beforeEach(() => {
      browser.get(URL);
    });

    it('should change the zippy title depending on it\'s state', () => {
      let zippyTitle = element(by.css('.zippy__title'));

      expect(zippyTitle.getText()).toEqual('▾ Details');
      zippyTitle.click();
      expect(zippyTitle.getText()).toEqual('▸ Details');
    });

    it('should have zippy content', () => {
      expect(element(by.css('.zippy__content')).getText()).toEqual('This is some content.');
    });

    it('should toggle when the zippy title is clicked', () => {
      element(by.css('.zippy__title')).click();
      expect(element(by.css('.zippy__content')).isDisplayed()).toBe(false);
      element(by.css('.zippy__title')).click();
      expect(element(by.css('.zippy__content')).isDisplayed()).toBe(true);
    });
  });
});
