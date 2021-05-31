import {
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS, 
    USER_LOGOUT} from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state };
        case USER_LOGIN_SUCCESS:
            return { ...state, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { ...state, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return { ...state };
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload
            };
        case USER_REGISTER_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};


export const updateUserReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_UPDATE_REQUEST:
            return { ...state };
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                success: true
            };
        case USER_UPDATE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

// vo slucaj ako treba dopolnitel update na user vidi kaj amazona proekt