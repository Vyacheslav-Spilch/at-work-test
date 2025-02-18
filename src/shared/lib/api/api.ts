import axios from 'axios';
import { APP_URL } from './url/app.url';

export const instance = axios.create({
  baseURL: APP_URL.rootPath,
});
