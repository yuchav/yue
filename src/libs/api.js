import axios from 'axios';

let api = {};

api.getIndex = () => {
    return axios.get('/');
};

export default api;