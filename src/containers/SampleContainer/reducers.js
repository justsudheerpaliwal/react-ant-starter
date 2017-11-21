import {
  OTP_SUBMIT_REQUESTED, NUMBER_CHANGED,
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
    default: return state;
  }
}
