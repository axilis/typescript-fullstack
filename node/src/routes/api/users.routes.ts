import {Express} from 'express';
import * as UsersController from '../../controllers/users.controller';

const UsersRoutes = (app: Express) => {

	app.get('/api/1.0/allUsers', UsersController.getAllUsers);

};

export default UsersRoutes;
