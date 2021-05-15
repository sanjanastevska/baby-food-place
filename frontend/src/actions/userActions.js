import Axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../constants/userConstants';

export const login = (email, password) => async (dispach) => {
    dispach({
        type: USER_LOGIN_REQUEST,
        payload: {
            email,
            password
        }
    });
    try {
        const { data } = await Axios.post('http://localhost:3001/api/users/login', { email, password });
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