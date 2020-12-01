/**
 *
 * ReversedList
 *
 */

import './reversed-list.styles.css';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ListItem({
  item,
  onPressItem,
}) {

  return (
    <motion.div      
      animate={{scale: [0, 1.09, 1]}}
      transition={{
        duration: 1,
        ease: "easeInOut",  
        times: [0, 0.2, 0.4],
      }}
      className="mb-2"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="card flex-centered text-white bg-dark list-item-card pt-3"
        onClick={() => onPressItem(item.text)}
      >
        <h6 className="list-item-text">{item.text}: {item.reversed.text}</h6>
        <p className="list-item-text">
          <FormattedMessage {...messages.palindrome}/>
          <FormattedMessage {...messages[item.reversed.palindrome ? 'palindromeTrue' : 'palindromeFalse']}/>        
        </p>
      </motion.div>
    </motion.div>
  );
}

function ReversedList({
  items,
  onPressItem,
}) {
  const renderItems = () => (
    items !== undefined &&
    items.length > 0 ?
    <React.Fragment>
      {
        items.map(item => (
          <ListItem
            item={item}
            key={item.text}
            onPressItem={onPressItem}
          />
        ))
      }
      <h6 style={{ textAlign: 'center' }}>
        <FormattedMessage {...messages.removeMessage}/>
      </h6>
    </React.Fragment> :
    <h6 style={{ textAlign: 'center' }}>
      <FormattedMessage {...messages.emptyResults}/>
    </h6>
  );

  return (
    <div
      className="card list-wrapper flex-centered"
    >
      <div
        className="card-body"
      >
        <h3 className="mb-4">
          <FormattedMessage {...messages.resultsMessage} />
        </h3>

        {renderItems()}
      </div>
    </div>
  );
}

ReversedList.propTypes = {};
ReversedList.defaultProps = {
  onPressItem: () => {},
};

export default memo(ReversedList);
