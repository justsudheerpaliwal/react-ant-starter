import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  MOBILE_NUMBER_SUBMIT_REQUESTED,
} from './constants';
import { API_BASE_URL_DEV } from '../../constants';
import { onNumberSubmitSuccess, onNumberSuccessFail, proceedToOtpVerification } from './actions';
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

function* processNumberSubmitSuccess(data) {
  if (data.status === 'success' && data.data.exists === 1 && data.data.signedUp === 1) {
    yield put(proceedToOtpVerification());
    yield put(push('/validate-otp'));
  } else {
    console.log('provide register flow');
  }
}

export function* getMobileNumber(action) {
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(submitNumber, action.payload);
    yield put(onNumberSubmitSuccess(action.payload));
    yield call(processNumberSubmitSuccess, data, action.payload);
  } catch (err) {
    console.log('on 404 show go to register and handle other errors accordingly');
    yield put(onNumberSuccessFail());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* submitMobileNumberWatcher() {
  yield takeLatest(MOBILE_NUMBER_SUBMIT_REQUESTED, getMobileNumber);
}
