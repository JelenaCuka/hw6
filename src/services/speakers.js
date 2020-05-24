import apiService from './api';

export const getSpeakers = async (authToken) => {
  try {
    const response = await apiService(authToken).get('/speakers');
    return response;

  } catch (error) {
    return error.response;
  }
}