import {
  MOBILE_NUMBER_SUBMIT_REQUESTED, MOBILE_NUMBER_SUBMIT_FAILED, MOBILE_NUMBER_SUBMIT_SUCCESS,
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
    case MOBILE_NUMBER_SUBMIT_FAILED:
      return {
        ...state,
        numberSubmitSuccess: false,
      };
    case MOBILE_NUMBER_SUBMIT_SUCCESS:
      return {
        ...state,
        mobileNumber: action.payload,
      };
    default: return state;
  }
}
