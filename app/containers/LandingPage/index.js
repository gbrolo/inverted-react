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
import ReversedList from '../../components/ReversedList/Loadable';
import { removeReversedString, reverseString } from './actions';

export function LandingPage({
  landingPage,
  onReverseString,
  onRemoveReversedString,
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

  const renderList = () => (
    <ReversedList
      items={landingPage.reversedItems}
      onPressItem={onRemoveReversedString}
    />
  );

  return (
    <div
      className="wrapper flex-centered"
    >
      {renderHeaders()}
      {renderSearchBar()}
      {renderList()}
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
    onRemoveReversedString: (id) => dispatch(removeReversedString(id)),
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
