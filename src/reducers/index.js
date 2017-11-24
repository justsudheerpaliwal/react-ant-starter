import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import MobileNumberReducer from '../containers/InputMobileNumber/reducers';
import ValidateOtpReducer from '../containers/ValidateOtp/reducers';



const rootReducer = combineReducers({
  mobileNumber: MobileNumberReducer,
  form: formReducer,
  otpValidation: ValidateOtpReducer,
  routing: routerReducer,
});

export default rootReducer;
