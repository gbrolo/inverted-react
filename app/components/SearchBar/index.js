/**
 *
 * SearchBar
 *
 */

import './search-bar.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SearchBar({
  fetching,
  onButtonPress,
}) {
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleReverseButton = (e) => {
    e.preventDefault();    
    onButtonPress(value);
    setValue("");
  };

  const renderSpinner = () => (
    fetching ?
    <div 
      className="spinner-border text-dark" 
      role="status" 
      style={{ marginLeft: '16px' }}
    /> :
    null
  )

  const renderSearchInput = () => (
    <form
      className="search-bar-form"
    >
      <div
        className="row flex-centered"        
      >
        <label
          htmlFor="input-search" 
          className="search-box-label"
        >
          <FormattedMessage {...messages.searchPlaceholder}/>            
        </label>
      </div>
      <div className="row">
        <div className="col-sm flex-centered">     
          <motion.div
            whileHover={{ scale: 1.05 }}            
            className="search-full-w"
          >
            <input 
              type="text" 
              className="form-control search-full-w" 
              id="input-search"
              value={value}
              onChange={handleChangeValue}
            />          
          </motion.div>     
        </div>     
        <div className="col-sm flex-centered">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="search-full-w"
          >
            <button 
              type="submit" 
              onClick={handleReverseButton}
              className="btn btn-primary search-full-w flex-centered"
              style={{ flexDirection: 'row' }}
            >
              <FormattedMessage {...messages.reverseButton}/>  
              {renderSpinner()}
            </button>      
          </motion.div>
        </div>   
      </div>
    </form>
  );
  return (
    <nav className="search-bar-wrapper navbar fixed-top navbar-expand-lg navbar-dark bg-dark flex-centered">
      {renderSearchInput()}
    </nav>
  );
}

SearchBar.propTypes = {};

export default memo(SearchBar);
