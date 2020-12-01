/*
 * ReversedList Messages
 *
 * This contains all the text for the ReversedList component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ReversedList';

export default defineMessages({
  resultsMessage: {
    id: `${scope}.resultsMessage`,
    defaultMessage: 'Your reversed strings results:',
  },
  emptyResults: {
    id: `${scope}.emptyResults`,
    defaultMessage: 'You have not reversed any string!',
  },
  removeMessage: {
    id: `${scope}.removeMessage`,
    defaultMessage: 'Press an item to remove!',
  },
  palindrome: {
    id: `${scope}.palindrome`,
    defaultMessage: 'Is palindrome: ',
  },
  palindromeTrue: {
    id: `${scope}.palindromeTrue`,
    defaultMessage: '✔️',
  },
  palindromeFalse: {
    id: `${scope}.palindromeFalse`,
    defaultMessage: '❌',
  },
});
