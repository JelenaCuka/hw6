const baseURLSpeckAcademy = 'https://api-speck-academy.herokuapp.com';
const axios = require('axios').default;

const apiService = (authToken) => axios.create({
    baseURL: `${baseURLSpeckAcademy}`,
    headers: { Authorization: `Bearer ${authToken}` }
});

export default apiService;