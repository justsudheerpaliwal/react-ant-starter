/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import {
  MOBILE_NUMBER_SUBMIT_REQUESTED,
} from './constants';
import { API_BASE_URL_DEV } from '../../constants';

import { onNumberSubmitSuccess, onNumberSuccessFail } from './actions';
import request from '../../utils/request';

function submitNumber(number) {
  const requestURL = `${API_BASE_URL_DEV}/users/check`;
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

function requestOtp(number) {
  const requestURL = `${API_BASE_URL_DEV}/otp/generate`;
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

function* processNumberSubmitSuccess(data, number) {
  if (data.status === 'success' && data.data.exists === 1 && data.data.signedUp === 1) {
    try {
      const reqData = yield call(requestOtp, number);
      console.log(reqData);
    } catch (err) {
      console.log('something went wrong');
    }
  } else {
    console.log('provide register flow');
  }
}

/**
 * get github data to mock a request
 */
export function* getMobileNumber(action) {
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(submitNumber, action.payload);
    yield put(onNumberSubmitSuccess());
    yield call(processNumberSubmitSuccess, data);
  } catch (err) {
    console.log("on 404 show go to register and handle other errors accordingly");
    yield put(onNumberSuccessFail());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* submitMobileNumberWatcher() {
  yield takeLatest(MOBILE_NUMBER_SUBMIT_REQUESTED, getMobileNumber);
}
