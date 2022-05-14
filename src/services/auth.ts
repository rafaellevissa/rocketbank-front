import API from "./api"

interface RegisterUserData { name: string, email: string, password: string }

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

    register = async (userData: RegisterUserData) =>
    {
        const data = await API.post('/collaborator', { name: userData.name, email: userData.email, password: userData.password }).then((response) =>
        {
            if (response.data.auth)
            {
                const newData = { auth: true, token: response.data.token }

                localStorage.setItem('user', JSON.stringify(newData));
                return newData;
            }

            return { auth: false };
        });

        return data
    };
}

export default new AuthService();