import axios from 'axios';
import consts from './constants';

/**
 * Axios instance to perform api calls
 */
const instance = axios.create({
  baseURL: consts.API_BASE_URL,
  timeout: 1000 * 60 * 2,
});

export default instance;