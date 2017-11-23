import {
  OTP_SUBMIT_REQUESTED, NUMBER_CHANGED, OTP_SUBMIT_FAILED, OTP_SUBMIT_SUCCESS,
} from './constants';

export function onOtpNumberChange(payload) {
  /**
   * action triggered when user changes his number in the otp form
   */
  return {
    type: NUMBER_CHANGED,
    payload,
  };
}

export function onOtpNumberSubmit(payload) {
  return {
    type: OTP_SUBMIT_REQUESTED,
    payload,
  };
}

export function onNumberSubmitSuccess() {
  return {
    type: OTP_SUBMIT_SUCCESS,
  };
}

export function onNumberSuccessFail() {
  return {
    type: OTP_SUBMIT_FAILED,
  };
}
