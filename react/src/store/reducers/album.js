import {GET_ALBUM} from '../actions/constants'

const initialState = {
  album : {}
}
const albumReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_ALBUM:
        return payload
      default:
        return state
    }
}

export default albumReducer;
