import {
  OTP_SUBMIT_REQUESTED, NUMBER_CHANGED,
} from './constants';

export function onOtpNumberChange(payload) {
  /**
   * action triggered when user changes his number in the otp form
   */
  console.log(`otp number changed to ${payload}`);
  return {
    type: NUMBER_CHANGED,
    payload,
  };
}

export function onOtpNumberSubmit(payload) {
  console.log(`otp number submitted with payload ${payload}`);
  return {
    type: OTP_SUBMIT_REQUESTED,
    payload,
  };
}

