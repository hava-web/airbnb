import axios from 'axios';
// import environment from './environment';

const http_instance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
  headers: {
    'Cache-Control': 'public',
    'Expires': '0',
  },
  params: {},
});

export default {
  airbnb: http_instance,
};
