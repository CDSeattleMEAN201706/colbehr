import { RegistrationAppPage } from './app.po';

describe('registration-app App', () => {
  let page: RegistrationAppPage;

  beforeEach(() => {
    page = new RegistrationAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
