import { browser, element, by } from 'protractor';

export class MyfoodtrucksPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
