import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import MobileNumberReducer from '../containers/InputMobileNumber/reducers';
import ValidateOtpReducer from '../containers/ValidateOtp/reducers';
import { LOGOUT_ACTION } from '../containers/Logout/constants';

const appReducer = combineReducers({
  mobileNumber: MobileNumberReducer,
  form: formReducer,
  otpValidation: ValidateOtpReducer,
  routing: routerReducer,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === LOGOUT_ACTION) {
    const { routing } = newState;
    newState = { routing };
  }
  return appReducer(newState, action);
};

export default rootReducer;
