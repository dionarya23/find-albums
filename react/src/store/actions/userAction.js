import {GET_USER} from './constants'

export const getUser = () => dispatch => {
    fetch(process.env.REACT_APP_ENPOINT+'/api/auth/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            "Access-Control-Allow-Credentials": true
        }
    })
     .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        dispatch({
            type    : GET_USER,
            payload : {
                authenticated : true,
                user : responseJson.user
            } 
        })
      })
      .catch(error => {
        dispatch({
            type: GET_USER,
            payload: {
                    authenticated: false,
                    error: "Failed to authenticate user"
            }
        });
      });
  }