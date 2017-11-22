import { all } from 'redux-saga/effects';
import mobileNumberSaga from './containers/otp-validation/saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    mobileNumberSaga(),
  ]);
}
