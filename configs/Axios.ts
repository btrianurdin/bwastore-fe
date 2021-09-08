import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;

const instance = axios.create({
  baseURL: `${API_URL}`,
});

export default instance;
