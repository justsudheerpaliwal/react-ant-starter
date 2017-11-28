import { takeLatest, call, put } from 'redux-saga/effects'; 
import { push } from 'react-router-redux';
import { LOGOUT_ACTION } from './constants';

function clearLocalStorage() {
  localStorage.clear();
}

function* performLogout() {
  yield call(clearLocalStorage);
  yield put(push('/input-number'));
}

export default function* logout() {
  yield takeLatest(LOGOUT_ACTION, performLogout);
}
