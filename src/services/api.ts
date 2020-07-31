import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    throw error.response;
  }
);

export default api;
