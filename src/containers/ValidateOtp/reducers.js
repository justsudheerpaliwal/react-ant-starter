import {
  OTP_REQUESTED,
  OTP_REQUEST_FAILED,
  OTP_REQUEST_SUCCESS,
  OTP_VALIDATION_REQUESTED,
  OTP_VALIDATION_SUCCESS,
  OTP_VALIDATION_FAILED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from './constants';

const initialState = {
  otpRequested: false,
  otpRequestError: null,
  otpRequestSuccess: false,
  otpValidationRequested: false,
  otpValidationSuccess: false,
  otpValidationError: null,
  accessToken: null,
  loginError: null,
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        loginError: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        accessToken: null,
        loginError: action.payload,
      };
    default:
      return state;
  }
}
