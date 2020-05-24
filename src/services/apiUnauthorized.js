const baseURLSpeckAcademy = 'https://api-speck-academy.herokuapp.com';
const axios = require('axios').default;

const apiService = axios.create({
    baseURL: `${baseURLSpeckAcademy}`
});

export default apiService;