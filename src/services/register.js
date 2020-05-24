import apiService from './apiUnauthorized';

export const registerUser = async (data) => {
    try {
        const response = await apiService.post('/users/register', data);
        return response;
    } catch (error) {
        return error.response;
    }
}