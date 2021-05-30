import Axios from "axios";
import {
    USER_UPDATE_FAIL,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS, 
    USER_LOGOUT} from '../constants/userConstants';

export const register = (firstName, lastName, email, password, birthday) => async(dispach) => {
    dispach({
        type: USER_REGISTER_REQUEST,
        payload: {
            firstName,
            lastName,
            email,
            password,
            birthday
        }
    });
    try {
        const { data } = await Axios.post('/api/users/register', { firstName, lastName, email, password, birthday });
        dispach({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });
        //In App.js we read sigin to authenticate user
        dispach({
            type:USER_LOGIN_SUCCESS,
            payload: data
        });
    } catch(err) {
        dispach({
            type: USER_REGISTER_FAIL,
            payload: err.message
        });
    }
}

export const login = (email, password) => async (dispach) => {
    dispach({
        type: USER_LOGIN_REQUEST,
        payload: {
            email,
            password
        }
    });
    try {
        const { data } = await Axios.post('http://localhost:9001/api/users/login', { email, password });
        dispach({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
    } catch(err) {
        dispach({
            type: USER_LOGIN_FAIL,
            payload: err.message
        });
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: USER_LOGOUT
    });
    document.location.href = '/login';
}


// EDIT USER    
export const updateUser = (user) => async(dispatch, getState) => {
    dispatch({
        type: USER_UPDATE_REQUEST,
        payload: user
    });

    const {
        userLogin: { userInfo } 
    } = getState();
    try  {
        const { data } = await Axios.patch(`/api/users/${user.id}`, user, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data
        });
    } catch(err) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: err.message
        });
    }
}