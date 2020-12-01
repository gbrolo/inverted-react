/*
 *
 * LandingPage reducer
 *
 */
import produce from 'immer';
import {
  TOGGLE_ALERT,
  REVERSE_STRING,
  ADD_REVERSED_STRING,
  REMOVE_REVERSED_STRING,
} from './constants';

export const initialState = {
  text: "",
  fetching: false,
  reversedItems: [],
  alertMessage: null,
  showAlertMessage: false,
};

/* eslint-disable default-case, no-param-reassign */
const landingPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_ALERT:
        if (action.showAlertMessage === null) {
          draft.showAlertMessage = !draft.showAlertMessage;
        } else {
          draft.showAlertMessage = action.showAlertMessage;
        }

        draft.alertMessage = action.alertMessage;
        break;
      case REMOVE_REVERSED_STRING:
        draft.reversedItems = draft.reversedItems.filter(item => item.text !== action.id);
        break;
      case ADD_REVERSED_STRING:  
        const reversedKeys = draft.reversedItems.map(i => {
          return i.text;
        });

        if (!reversedKeys.includes(draft.text)) {
          draft.reversedItems.push({
            text: draft.text,
            reversed: action.reversedItem,
          });
        } else {
          draft.alertMessage = "Item already added to list";
          draft.showAlertMessage = true;
        }
        break;
      case REVERSE_STRING:
        draft.text = action.text;
        draft.fetching = true;
        break;
    }
  });

export default landingPageReducer;
