import {GET_USER} from '../actions/constants'

const userReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_USER:
        return payload
      default:
        return state
    }
}

export default userReducer;
