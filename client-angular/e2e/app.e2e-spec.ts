import { PicobizPage } from './app.po';

describe('picobiz App', function() {
  let page: PicobizPage;

  beforeEach(() => {
    page = new PicobizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
