import {combineReducers} from 'redux';
import userReducer from './user';
import albumReducer from './album'

export default combineReducers({
  album : albumReducer,
  user  : userReducer
})
