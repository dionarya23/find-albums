import {CHANGE_LOADING} from '../actions/constants'

const initialState = {
  loading : false
}
const loadingReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case CHANGE_LOADING:
        return payload
      default:
        return state
    }
}

export default loadingReducer;
