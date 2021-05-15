import { localStorage } from 'App/storages';
import UserController from './UserController';

export const userController = new UserController(localStorage);
