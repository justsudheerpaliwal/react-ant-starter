import { all } from 'redux-saga/effects';
import mobileNumberSaga from './containers/InputMobileNumber/sagas';
import otpValidationSaga from './containers/ValidateOtp/sagas';
import logoutSaga from './containers/Logout/sagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    mobileNumberSaga(),
    otpValidationSaga(),
    logoutSaga(),
  ]);
}
