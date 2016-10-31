import { combineReducers } from 'redux';
import airports from './airports';
import banks from './banks';
import paySDK from './paySDK';
import activity from './activity';

const rootReducer = combineReducers({
  airports,
  banks,
  paySDK,
  activity
});

export default rootReducer;