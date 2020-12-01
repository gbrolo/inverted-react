/**
 *
 * Tests for SearchBar 
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import SearchBar from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<SearchBar />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <SearchBar />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <SearchBar />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
