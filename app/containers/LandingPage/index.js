/**
 *
 * LandingPage
 *
 */
import './landing-page.styles.css';

import React, { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import SearchBar from '../../components/SearchBar/Loadable';
import ReversedList from '../../components/ReversedList/Loadable';
import { removeReversedString, reverseString, toggleAlert } from './actions';

function AlertMessage({
  alertMessage,
  showAlertMessage,
  onToggleAlert,
}) {
  
  useEffect(() => {
    if (showAlertMessage) {
      setTimeout(() => {
        onToggleAlert(false, null);
      }, 2000);
    }
  }, [showAlertMessage]);

  return (
    showAlertMessage ?
    <motion.div 
      animate={{scale: [0, 1.09, 1]}}
      transition={{
        duration: 1,
        ease: "easeInOut",  
        times: [0, 0.2, 0.4],
      }}
      className="alert alert-danger alert-container" 
      role="alert"
    >
      {alertMessage}
    </motion.div> :
    null
  )
}

export function LandingPage({
  landingPage,
  onToggleAlert,
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
    landingPage !== undefined ?
    <SearchBar
      onButtonPress={onReverseString}
      fetching={landingPage.fetching}
    /> :
    null
  );

  const renderList = () => (
    landingPage !== undefined ?
    <ReversedList
      items={landingPage.reversedItems}
      onPressItem={onRemoveReversedString}
    /> :
    null
  );

  const renderAlert = () => (
    landingPage !== undefined ?
    <AlertMessage
      onToggleAlert={onToggleAlert}
      alertMessage={landingPage.alertMessage}
      showAlertMessage={landingPage.showAlertMessage}
    /> :
    null
  );

  return (
    <div
      className="wrapper flex-centered"
    >
      {renderHeaders()}
      {renderSearchBar()}
      {renderList()}
      {renderAlert()}
    </div>
  );
}

LandingPage.propTypes = {  
  landingPage: PropTypes.object,
  onToggleAlert: PropTypes.func,
  onReverseString: PropTypes.func,
  onRemoveReversedString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onToggleAlert: (showAlertMessage, alertMessage) => dispatch(toggleAlert(showAlertMessage, alertMessage)),
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
