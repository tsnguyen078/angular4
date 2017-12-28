import { TransactionAppPage } from './app.po';

describe('transaction-app App', () => {
  let page: TransactionAppPage;

  beforeEach(() => {
    page = new TransactionAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
