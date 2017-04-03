import { AliceNodePage } from './app.po';

describe('alice-node App', () => {
  let page: AliceNodePage;

  beforeEach(() => {
    page = new AliceNodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
