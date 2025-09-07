import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',

});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('deburger:userData');

  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = token ? `Bearer ${token}`:'';

  return config;
});