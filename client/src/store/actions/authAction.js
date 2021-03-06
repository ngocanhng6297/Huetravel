import { SET_CURRENT_USER, LOGOUT, CHANGE_AVATAR } from './actionTypes'
import { setAuthToken, removeAuthToken } from '../../utils'
import jwt_decode from 'jwt-decode'

export const login = (token) => {
    try {
        const decoded = jwt_decode(token)
        setAuthToken(token)

        return {
            type: SET_CURRENT_USER,
            payload: decoded
        }     
    } catch (error) {
        return {
            type: SET_CURRENT_USER,
        }
    }
}

export const changeAvatar = (avatar) => {
    return {
        type: CHANGE_AVATAR,
        payload: avatar
    }
}

export const logout = () => {
    removeAuthToken()
    return {
        type: LOGOUT
    }
}

