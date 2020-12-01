/*
 *
 * LandingPage actions
 *
 */

import {
  TOGGLE_ALERT,
  REVERSE_STRING,
  ADD_REVERSED_STRING,
  REMOVE_REVERSED_STRING,
} from './constants';

export function toggleAlert(showAlertMessage = null, alertMessage = null) {
  return {
    type: TOGGLE_ALERT,
    alertMessage,
    showAlertMessage,
  };
}

export function reverseString(text) {
  return {
    type: REVERSE_STRING,
    text,
  };
}

export function addReversedString(reversedItem) {
  return {
    type: ADD_REVERSED_STRING,
    reversedItem,
  };
}

export function removeReversedString(id) {
  return {
    type: REMOVE_REVERSED_STRING,
    id,
  };
}
