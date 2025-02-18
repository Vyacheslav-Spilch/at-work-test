import axios from 'axios';
import { APP_URL } from './urls/app.url';

export const instance = axios.create({
  baseURL: APP_URL.rootPath,
});
