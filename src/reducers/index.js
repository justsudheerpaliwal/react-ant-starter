import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SampleReducer from '../containers/otp-validation/reducers';


const rootReducer = combineReducers({
  sample: SampleReducer,
  form: formReducer,
});

export default rootReducer;
