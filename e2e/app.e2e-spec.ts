import { OpenHouseAppPage } from './app.po';

describe('open-house App', () => {
  let page: OpenHouseAppPage;

  beforeEach(() => {
    page = new OpenHouseAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
