import { CHANGE_LOADING } from './constants'

export const changeLoading = status => dispact => {
    return dispact({
        type    : CHANGE_LOADING,
        payload : status
    })
}