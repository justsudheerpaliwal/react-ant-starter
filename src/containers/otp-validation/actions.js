import {
  MOBILE_NUMBER_SUBMIT_REQUESTED, NUMBER_CHANGED, MOBILE_NUMBER_SUBMIT_FAILED, MOBILE_NUMBER_SUBMIT_SUCCESS,
} from './constants';

export function onMobileNumberChange(payload) {
  /**
   * action triggered when user changes his number in the otp form
   */
  return {
    type: NUMBER_CHANGED,
    payload,
  };
}

export function onMobileNumberSubmit(payload) {
  return {
    type: MOBILE_NUMBER_SUBMIT_REQUESTED,
    payload,
  };
}

export function onNumberSubmitSuccess() {
  return {
    type: MOBILE_NUMBER_SUBMIT_SUCCESS,
  };
}

export function onNumberSuccessFail() {
  return {
    type: MOBILE_NUMBER_SUBMIT_FAILED,
  };
}
