import { combineReducers } from 'redux';
import CrimesReducer from './reducer_crimes';

const rootReducer = combineReducers({
  crimes: CrimesReducer
});

export default rootReducer;