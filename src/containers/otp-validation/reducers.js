import {
  OTP_SUBMIT_REQUESTED, NUMBER_CHANGED, OTP_SUBMIT_FAILED, OTP_SUBMIT_SUCCESS,
} from './constants';

/**
 * The state argument is not application State,
 * only the state this reducer is responsible for.
 *
 * For initial app boot, the state will be undefined
 * hence a default value of null is assigned to it
 *
 * never mutate the state
 *
 * @param {Object} state
 * @param {Object} action
 */
export default function (state = null, action) {
  switch (action.type) {
    case OTP_SUBMIT_REQUESTED:
      return {
        ...state,
        mobileNumber: action.payload,
      };
    case NUMBER_CHANGED:
      return {
        ...state,
        partialMobileNumber: action.payload,
      };
    case OTP_SUBMIT_FAILED:
      return {
        ...state,
        numberSubmitSuccess: false,
      };
    case OTP_SUBMIT_SUCCESS:
      return {
        ...state,
        numberSubmitSuccess: true,
      };
    default: return state;
  }
}
