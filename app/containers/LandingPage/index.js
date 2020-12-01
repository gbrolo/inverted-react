/**
 *
 * LandingPage
 *
 */
import './landing-page.styles.css';

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import SearchBar from '../../components/SearchBar/Loadable';
import { reverseString } from './actions';

export function LandingPage({
  onReverseString,
}) {
  useInjectReducer({ key: 'landingPage', reducer });
  useInjectSaga({ key: 'landingPage', saga });

  const renderHeaders = () => (
    <Helmet>
      <title>String Reverser</title>
      <meta name="description" content="Reverse your strings here!" />
    </Helmet>
  );  

  const renderSearchBar = () => (
    <SearchBar
      onButtonPress={onReverseString}
    />
  );

  return (
    <div
      className="wrapper flex-centered"
    >
      {renderHeaders()}
      {renderSearchBar()}
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LandingPage.propTypes = {  
};

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onReverseString: (text) => dispatch(reverseString(text)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LandingPage);
