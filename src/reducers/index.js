import { combineReducers } from 'redux';
import CrimesRedicer from './reducer_crimes';

const rootReducer = combineReducers({
  crimes: CrimesReducer
});