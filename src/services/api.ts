import axios from 'axios';

const api = axios.create({
  baseURL: "http://testapp.axreng.com:4567/"
});

api.defaults.timeout = 60 * .3 * 1000;

export default api;