import { call, put, takeLatest } from 'redux-saga/effects';
import { OTP_REQUESTED } from './constants';
import { API_BASE_URL_DEV } from '../../constants';
import { onOtpRequestSuccess, onOtpRequestFailure } from './actions';
import request from '../../utils/request';

function makeOtpRequest(number) {
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

function* requestOtp(action) {
  try {
    console.log('inside otp saga', JSON.stringify(action));
    yield call(makeOtpRequest, action.payload);
    yield put(onOtpRequestSuccess());
  } catch (err) {
    console.log('something went wrong');
    yield put(onOtpRequestFailure());
  }
}

export default function* otpValidationWatcher() {
  yield takeLatest(OTP_REQUESTED, requestOtp);
}

