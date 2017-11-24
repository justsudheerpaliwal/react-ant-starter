import {
  OTP_REQUESTED,
  OTP_REQUEST_FAILED,
  OTP_REQUEST_SUCCESS,
  OPT_VALIDATION_REQUESTED,
  OPT_VALIDATION_SUCCESS,
  OPT_VALIDATION_FAILED,
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

