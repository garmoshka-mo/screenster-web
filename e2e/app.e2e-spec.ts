import { ScreensterWebPage } from './app.po';

describe('screenster-web App', () => {
  let page: ScreensterWebPage;

  beforeEach(() => {
    page = new ScreensterWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
