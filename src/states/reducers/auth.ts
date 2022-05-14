import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REFRESH_TOKEN, REGISTER_SUCCESS } from "../types";

const user = JSON.parse(localStorage.getItem('user') || '{}');
const initialState = user ? { ...user } : { auth: false };

export default function (state = initialState, action: any)
{
    const { type, payload } = action;

    switch (type) 
    {
        case LOGIN_SUCCESS:
            return {
                ...state,
                auth: true
            };
    
        case LOGIN_FAIL:
            return {
                ...state,
                auth: false
            };

        case LOGOUT:
            return {
                ...state,
                auth: false,
                user: null
            };

        case REFRESH_TOKEN:
            return {
                ...state,
                user: { ...user, acessToken: payload }
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                auth: true,
                user: { ...user }
            };

        default:
            return state;
    }
}
