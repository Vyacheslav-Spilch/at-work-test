import axios from 'axios';
import { APP_PATHS } from './paths/app.paths';

export const instance = axios.create({
  baseURL: APP_PATHS.rootPath,
});
