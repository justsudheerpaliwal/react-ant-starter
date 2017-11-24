import {
  MOBILE_NUMBER_SUBMIT_REQUESTED, 
  MOBILE_NUMBER_SUBMIT_FAILED, 
  MOBILE_NUMBER_SUBMIT_SUCCESS,
  PROCEED_TO_OTP_VERIFICATION,
} from './constants';

export function onMobileNumberSubmit(payload) {
  return {
    type: MOBILE_NUMBER_SUBMIT_REQUESTED,
    payload,
  };
}

export function onNumberSubmitSuccess(payload) {
  return {
    type: MOBILE_NUMBER_SUBMIT_SUCCESS,
    payload,
  };
}

export function onNumberSuccessFail() {
  return {
    type: MOBILE_NUMBER_SUBMIT_FAILED,
  };
}

export function proceedToOtpVerification() {
  return {
    type: PROCEED_TO_OTP_VERIFICATION,
  };
}
