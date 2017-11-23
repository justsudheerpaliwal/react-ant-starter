/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import {
  MOBILE_NUMBER_SUBMIT_REQUESTED,
} from './constants';
import { API_BASE_URL_STAGING } from '../../constants';

import { onNumberSubmitSuccess, onNumberSuccessFail } from './actions';
import request from '../../utils/request';

function submitNumber(number) {
  const requestURL = `${API_BASE_URL_STAGING}/users/check`;
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{
      "mobile": ${number},
      "countryCode": 91
    }`,
  };
  return request(requestURL, options);
}

/**
 * get github data to mock a request
 */
export function* getMobileNumber(action) {
  try {
    // Call our request helper (see 'utils/request')
    yield call(submitNumber, action.payload);
    yield put(onNumberSubmitSuccess());
  } catch (err) {
    yield put(onNumberSuccessFail());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* submitMobileNumberWatcher() {
  yield takeLatest(MOBILE_NUMBER_SUBMIT_REQUESTED, getMobileNumber);
}
