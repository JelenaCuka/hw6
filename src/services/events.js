import apiService from './api';

export const getEvents = async (authToken) => {
  try {
    const response = await apiService(authToken).get('/events');
    return response;
  } catch (error) {
    return error.response;
  }
}
