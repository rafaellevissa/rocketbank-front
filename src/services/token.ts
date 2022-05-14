export const getLocalAccessToken = () =>
{
    const userData = JSON.parse(window.localStorage.getItem('user') || '{}');
    return userData.token;
}

export const updateLocalAccessToken = (token: string) =>
{
    const userData = JSON.parse(window.localStorage.getItem('user') || '{}')
    userData.token = token;

    window.localStorage.setItem('user', JSON.stringify(userData));
}