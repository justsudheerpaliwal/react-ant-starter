import { combineReducers } from 'redux';
import SampleReducer from '../containers/SampleContainer/reducers';

const rootReducer = combineReducers({
  sample: SampleReducer,
});

export default rootReducer;
