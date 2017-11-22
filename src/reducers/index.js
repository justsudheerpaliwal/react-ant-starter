import { combineReducers } from 'redux';
import SampleReducer from '../containers/otp-validation/reducers';

const rootReducer = combineReducers({
  sample: SampleReducer,
});

export default rootReducer;
