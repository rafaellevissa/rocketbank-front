import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../types";

const user = JSON.parse(localStorage.getItem('user') || '{}');
const initialState = user ? { ...user } : { auth: false };

export default function (state = initialState, action: any)
{
    const { type } = action;

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

        default:
            return state;
    }
}
