import {
  OTP_REQUESTED,
  OTP_REQUEST_FAILED,
  OTP_REQUEST_SUCCESS,
  OTP_VALIDATION_REQUESTED,
  OTP_VALIDATION_SUCCESS,
  OTP_VALIDATION_FAILED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from './constants';

export function onOtpRequest(payload) {
  return {
    type: OTP_REQUESTED,
    payload,
  };
}

export function onOtpRequestSuccess() {
  return {
    type: OTP_REQUEST_SUCCESS,
  };
}

export function onOtpRequestFailure() {
  return {
    type: OTP_REQUEST_FAILED,
  };
}

export function onOtpValidationRequested(payload) {
  return {
    type: OTP_VALIDATION_REQUESTED,
    payload,
  };
}

export function onOtpValidationSuccess(payload) {
  return {
    type: OTP_VALIDATION_SUCCESS,
    payload,
  };
}

export function onOtpValidationFailure(payload) {
  return {
    type: OTP_VALIDATION_FAILED,
    payload,
  };
}

export function onLoginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function onLoginFailure(payload) {
  return {
    type: LOGIN_FAILED,
    payload,
  };
}

