import {
  MOBILE_NUMBER_SUBMIT_REQUESTED,
  MOBILE_NUMBER_SUBMIT_SUCCESS,
  PROCEED_TO_OTP_VERIFICATION,

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
    case MOBILE_NUMBER_SUBMIT_REQUESTED:
      return {
        ...state,
        mobileNumber: action.payload,
      };
    case MOBILE_NUMBER_SUBMIT_SUCCESS:
      return {
        ...state,
        mobileNumber: action.payload.mobileNumber,
        type: action.payload.type,
      };
    case PROCEED_TO_OTP_VERIFICATION:
      return {
        ...state,
        proceedToOtpVerification: true,
      };
    default: return state;
  }
}
