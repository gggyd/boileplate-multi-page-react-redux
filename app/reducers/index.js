import { combineReducers } from 'redux';
import airports from './airports';
import banks from './banks';
import paySDK from './paySDK';

const rootReducer = combineReducers({
  airports,
  banks,
  paySDK
});

export default rootReducer;