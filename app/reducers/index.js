import { combineReducers } from 'redux';
import airports from './airports';
import banks from './banks';

const rootReducer = combineReducers({
  airports,
  banks
});

export default rootReducer;