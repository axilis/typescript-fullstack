import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';
import { UserData } from '../models/User';

export const loginUser = createAction<UserData>(Actions.USER_LOGIN);
