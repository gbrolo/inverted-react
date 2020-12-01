/*
 * SearchBar Messages
 *
 * This contains all the text for the SearchBar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.SearchBar';

export default defineMessages({
  searchPlaceholder: {
    id: `${scope}.searchPlaceholder`,
    defaultMessage: 'Insert text to reverse',
  },
  reverseButton: {
    id: `${scope}.reverseButton`,
    defaultMessage: 'Reverse',
  },
});
