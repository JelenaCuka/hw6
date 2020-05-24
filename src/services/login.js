import apiService from './apiUnauthorized';

export const loginUser = async (data) => {
    try {
        const response = await apiService.post('/users/login', data, {
            validateStatus: function (status) {
                return status < 500;
            }
        });
        return response;
    } catch (error) {
        return error.response;
    }
}