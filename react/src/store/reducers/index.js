import {combineReducers} from 'redux';
import userReducer from './customer';

export default combineReducers({
  customers: userReducer
})
