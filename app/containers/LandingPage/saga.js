import { takeLatest, call, put, select } from 'redux-saga/effects';
import { requestReverse } from '../../axios/providers/reverse';
import { addReversedString } from './actions';
import { REVERSE_STRING } from './constants';
import makeSelectLandingPage from './selectors';

// Individual exports for testing
export default function* landingPageSaga() {
  yield takeLatest(REVERSE_STRING, reverseStringSaga);
}

export function* reverseStringSaga() {
  const landingPage = yield select(makeSelectLandingPage());
  console.log(landingPage.text);
  try {
    const response = yield requestReverse(landingPage.text);
    console.log(response);
    yield put(addReversedString(response));
  } catch (error) {
    console.log(error);
  }
}