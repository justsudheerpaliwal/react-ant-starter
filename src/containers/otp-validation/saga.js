/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import {
  OTP_SUBMIT_REQUESTED, NUMBER_CHANGED, OTP_SUBMIT_FAILED, OTP_SUBMIT_SUCCESS,
} from './constants';

import { onNumberSubmitSuccess, onNumberSuccessFail } from './actions';

function request(username) {
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  return fetch(requestURL);
}

/**
 * get github data to mock a request
 */
export function* getMobileNumber(action) {

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, action.payload);
    yield put(onNumberSubmitSuccess());
  } catch (err) {
    yield put(onNumberSuccessFail());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* submitMobileNumberWatcher() {
  yield takeLatest(OTP_SUBMIT_REQUESTED, getMobileNumber);
}
