import { call, put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { OTP_REQUESTED, OTP_VALIDATION_REQUESTED } from './constants';
import { API_BASE_URL_DEV, ACCESS_TOKEN } from '../../constants';
import {
  onOtpRequestSuccess,
  onOtpRequestFailure,
  onOtpValidationSuccess,
  onOtpValidationFailure,
  onLoginFailure,
  onLoginSuccess,
} from './actions';
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

function makeValidateOtpRequest(otpData) {
  const requestURL = `${API_BASE_URL_DEV}/otp/verify`;
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{
      "mobile": ${otpData.mobileNumber},
      "countryCode": 91,
      "otp": ${otpData.otp}
    }`,
  };
  return request(requestURL, options);
}

function makeLoginRequest(loginInfo) {
  const requestUrl = `${API_BASE_URL_DEV}/users/login`;
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{
      "type":${loginInfo.type},
      "mobile":${loginInfo.mobileNumber},
      "countryCode":91,
      "otpToken":"${loginInfo.otpToken}"
    }`,
  };
  return request(requestUrl, options);
}

function* requestOtp(action) {
  try {
    yield call(makeOtpRequest, action.payload);
    yield put(onOtpRequestSuccess());
  } catch (err) {
    console.log('something went wrong');
    yield put(onOtpRequestFailure());
  }
}

function setAuthToken(token) {
  localStorage.setItem(ACCESS_TOKEN, token);
}

function* manageLogin(data, actionPayload) {
  const loginPayload = {
    mobileNumber: actionPayload.mobileNumber,
    type: actionPayload.type,
    otpToken: data.data.otpToken,
  };
  try {
    const loginData = yield call(makeLoginRequest, loginPayload);
    yield call(setAuthToken, loginData.data.token);
    yield put(onLoginSuccess(loginData.data.token));
    yield put(push('/dashboard'));
  } catch (err) {
    console.log(err);
    yield put(onLoginFailure(err));
  }
}

function* otpRequestWatcher() {
  yield takeLatest(OTP_REQUESTED, requestOtp);
}

function* validateOtp(action) {
  try {
    const data = yield call(makeValidateOtpRequest, action.payload);
    yield put(onOtpValidationSuccess(data));
    yield call(manageLogin, data, action.payload);
  } catch (err) {
    console.log('something went wrong');
    yield put(onOtpValidationFailure(err));
  }
}

function* otpValidationWatcher() {
  yield takeLatest(OTP_VALIDATION_REQUESTED, validateOtp);
}

export default function* otpValidationSaga() {
  yield all([
    otpValidationWatcher(),
    otpRequestWatcher(),
  ]);
}

