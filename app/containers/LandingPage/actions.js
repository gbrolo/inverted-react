/*
 *
 * LandingPage actions
 *
 */

import {
  REVERSE_STRING,
  ADD_REVERSED_STRING,
  REMOVE_REVERSED_STRING,
} from './constants';

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
