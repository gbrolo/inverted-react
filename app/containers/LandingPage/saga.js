import { takeLatest, put, select } from 'redux-saga/effects';
import { requestReverse } from '../../axios/providers/reverse';
import { addReversedString, toggleAlert } from './actions';
import { REVERSE_STRING } from './constants';
import makeSelectLandingPage from './selectors';

// Individual exports for testing
export default function* landingPageSaga() {
  yield takeLatest(REVERSE_STRING, reverseStringSaga);
}

export function* reverseStringSaga() {
  const landingPage = yield select(makeSelectLandingPage());  
  try {
    const response = yield requestReverse(landingPage.text);    
    yield put(addReversedString(response));
  } catch (error) {    
    yield put(toggleAlert(true, error.error));
  }
}
