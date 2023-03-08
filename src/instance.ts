import axios from 'axios';
import { apiUrl } from './constants';

const instance = axios.create({
    baseURL: apiUrl,
    withCredentials: false,
});

export default instance;
