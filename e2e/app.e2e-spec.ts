import { UberMasterFrontendPage } from './app.po';

describe('uber-master-frontend App', function() {
  let page: UberMasterFrontendPage;

  beforeEach(() => {
    page = new UberMasterFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
