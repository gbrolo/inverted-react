/*
 *
 * LandingPage reducer
 *
 */
import produce from 'immer';
import {
  REVERSE_STRING,
  ADD_REVERSED_STRING,
} from './constants';

export const initialState = {
  text: "",
  fetching: false,
  reversedItems: [],
};

/* eslint-disable default-case, no-param-reassign */
const landingPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_REVERSED_STRING:  
        const reversedKeys = draft.reversedItems.map(i => {
          return i.text;
        });

        if (!reversedKeys.includes(draft.text)) {
          draft.reversedItems.push({
            text: draft.text,
            reversed: action.reversedItem,
          });
        }
        break;
      case REVERSE_STRING:
        draft.text = action.text;
        draft.fetching = true;
        break;
    }
  });

export default landingPageReducer;
