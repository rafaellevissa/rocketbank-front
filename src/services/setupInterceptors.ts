import { AxiosRequestConfig } from "axios";
import API from "./api";
import { getLocalAccessToken, updateLocalAccessToken } from "./token";
import { refreshToken, logout } from "../states/actions/auth";

const setup = (store: any) =>
{
    API.interceptors.request.use(
        (config: AxiosRequestConfig) =>
        {
            if (config.headers === undefined) 
            {
                config.headers = {};
            }

            const token = getLocalAccessToken();
            if (token !== '')
            {
                config.headers['x-access-token'] = token;
            }

            return config;
        },

        (error) =>
        {
            return Promise.reject(error);
        }
    );

    const { dispatch } = store;
    API.interceptors.response.use(
        (res) =>
        {
            return res;
        },

        async (err) =>
        {
            if (err.config.url !== '/login' && err.response)
            {
                if (err.response.status === 401)
                {
                    try 
                    {
                        const oldToken = getLocalAccessToken();
                        const newRequest = await API.post('/relogin', { id: 1, refreshToken: oldToken })
                        const { token } = newRequest.data;

                        if (token)
                        {
                            dispatch(refreshToken(token));
                            updateLocalAccessToken(token);
                        }
                        else
                        {
                            dispatch(logout());
                        }

                    } 
                    catch (_error) 
                    {
                        return Promise.reject(_error);   
                    }
                }
            }
        }
    );

}

export default setup;