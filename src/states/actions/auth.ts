import { LOGIN_SUCCESS, LOGIN_FAIL, SET_MESSAGE, LOGOUT, REFRESH_TOKEN, REGISTER_SUCCESS } from '../types';
import AuthService from '../../services/auth';

export const doTryLogin = (username: string, password: string) => (dispatch: any) =>
{
    return AuthService.login(username, password).then((data: any) => 
    {
        dispatch(
        {
            type: LOGIN_SUCCESS,
            payload: { user: data }
        });

        return Promise.resolve();
    }, (error) => 
    {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch({
            type: SET_MESSAGE,
            payload: message
        });

        return Promise.reject();
    });
};

export const logout = () => (dispatch: any) =>
{
    AuthService.logout();
    dispatch(
    {
        type: LOGOUT
    });
};

export const refreshToken = (acessToken: any) => (dispatch: any) =>
{
    dispatch(
    {
        type: REFRESH_TOKEN,
        payload: acessToken
    });
};

interface RegisterUserData { name: string, email: string, password: string }
export const doRegisterUser = ( userData: RegisterUserData ) => (dispatch: any) =>
{
    return AuthService.register(userData).then((data: any) => 
    {
        dispatch(
        {
            type: REGISTER_SUCCESS,
            payload: { user: data }
        });

        return Promise.resolve();
    }, (error) => 
    {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch({
            type: SET_MESSAGE,
            payload: message
        });

        return Promise.reject();
    });
}