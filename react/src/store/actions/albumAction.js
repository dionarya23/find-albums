import {GET_ALBUM} from './constants'

export const getAlbum = image => dispatch => {
  console.log("mau ngirim nih :"+ image)
    fetch(process.env.REACT_APP_ENPOINT+'/api/album', {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            "Access-Control-Allow-Credentials": true,
            "x-api-key": process.env.REACT_APP_X_API_KEY,
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(image)
    })
     .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("tidak bisa mengambil albums");
      })
      .then(responseJson => {
        dispatch({
            type    : GET_ALBUM,
            payload : responseJson
        })
      })
      .catch(error => {
        dispatch({
            type: GET_ALBUM,
            payload: {
                    error   : "Seperti nya sedang rusak"
            }
        });
      });
  }