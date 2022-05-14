import API from "./api"

class AuthService
{
    login = async (username: string, password: string) =>
    {   
        const data = await API.post('/login', { email: username, password }).then((response) =>
        {

            if (response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data));

            return response.data;
        });

        return data
    };

    logout = () => localStorage.removeItem('user');

}

export default new AuthService();