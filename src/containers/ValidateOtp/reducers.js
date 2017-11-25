import {
  OTP_REQUESTED,
  OTP_REQUEST_FAILED,
  OTP_REQUEST_SUCCESS,
  OTP_VALIDATION_REQUESTED,
  OTP_VALIDATION_SUCCESS,
  OTP_VALIDATION_FAILED,
} from './constants';

const initialState = {
  otpRequested: false,
  otpRequestError: null,
  otpRequestSuccess: false,
  otpValidationRequested: false,
  otpValidationSuccess: false,
  otpValidationError: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OTP_REQUESTED:
      return {
        ...state,
        otpRequested: true,
        otpRequestError: null,
      };
    case OTP_REQUEST_SUCCESS:
      return {
        ...state,
        otpRequestSuccess: true,
        otpRequestError: null,
      };
    case OTP_REQUEST_FAILED:
      return {
        ...state,
        otpRequestSuccess: false,
        otpRequestError: action.payload,
      };
    case OTP_VALIDATION_REQUESTED:
      return {
        ...state,
        otpValidationRequested: true,
        otpValidationSuccess: false,
        otpValidationError: null,
      };
    case OTP_VALIDATION_SUCCESS:
      return {
        ...state,
        otpValidationRequested: false,
        otpValidationSuccess: true,
        otpValidationError: null,
      };
    case OTP_VALIDATION_FAILED:
      return {
        ...state,
        otpValidationRequested: false,
        otpValidationSuccess: false,
        otpValidationError: action.payload,
      };
    default:
      return state;
  }
}
