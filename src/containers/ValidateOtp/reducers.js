import {
  OTP_REQUESTED,
  OTP_REQUEST_FAILED,
  OTP_REQUEST_SUCCESS,
  OPT_VALIDATION_REQUESTED,
  OPT_VALIDATION_SUCCESS,
  OPT_VALIDATION_FAILED,
} from './constants';

const initialState = {
  otpRequested: false,
  otpRequestSuccess: false,
  otpValidationRequested: false,
  otpValidationSuccess: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OTP_REQUESTED:
      return {
        ...state,
        otpRequested: true,
      };
    case OTP_REQUEST_SUCCESS:
      return {
        ...state,
        optRequestSuccess: true,
      };
    default:
      return state;
  }
}
