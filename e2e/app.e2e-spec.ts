import { MyfoodtrucksPage } from './app.po';

describe('myfoodtrucks App', function() {
  let page: MyfoodtrucksPage;

  beforeEach(() => {
    page = new MyfoodtrucksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
