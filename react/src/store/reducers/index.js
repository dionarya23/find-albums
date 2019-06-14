import {combineReducers} from 'redux';
import userReducer from './user';
import albumReducer from './album'
import loadingReducer from './loading'

export default combineReducers({
  album : albumReducer,
  user  : userReducer,
  loading : loadingReducer
})
