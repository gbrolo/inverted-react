import { selectLandingPageDomain } from '../selectors';

describe('selectLandingPageDomain', () => {
  it('Expect selector to select initial reducer state', () => {
    const landingPage = selectLandingPageDomain({ landingPage: null });    
    expect(landingPage).toEqual({
      text: "",
      fetching: false,
      reversedItems: [],
      alertMessage: null,
      showAlertMessage: false,
    });
  });
});
