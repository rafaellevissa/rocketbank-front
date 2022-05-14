import API from "./api";

class UserService
{
    getCollaborators()
    {
        return API.get('/clients')
    };

    getCollaborator(id: number)
    {
        return API.get(`/clients/${id}`)
    };

    doAddCollaborator(data: any)
    {
        return API.post('/clients', data);
    };

    doUpdateCollaborator(id: number, data: any)
    {
        return API.put(`/clients/${id}`, data);
    };

    doDeleteCollaborator(id: number)
    {
        return API.delete(`/clients/${id}`);
    };
}

export default new UserService();