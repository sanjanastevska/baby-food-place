import Axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS } from '../constants/userConstants';

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
        const { data } = await Axios.post('/api/users/login', { email, password });
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