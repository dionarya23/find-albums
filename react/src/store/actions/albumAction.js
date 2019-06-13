import {GET_ALBUM} from './constants'

export const getAlbum = image => dispatch => {
    fetch('http://localhost:5000/api/albums', {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type':'multipart/form-data',
            "Access-Control-Allow-Credentials": true
        },
        body: image
    })
     .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        dispatch({
            type    : GET_ALBUM,
            payload : {
                user    : responseJson
            } 
        })
      })
      .catch(error => {
        dispatch({
            type: GET_ALBUM,
            payload: {
                    error   : "Failed to authenticate user"
            }
        });
      });
  }