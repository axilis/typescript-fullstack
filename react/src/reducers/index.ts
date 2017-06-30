import { combineReducers, Reducer } from 'redux';
import users from './users';
import { UserStoreState } from '../models/User';

export interface RootState {
	users: UserStoreState;
}

export default combineReducers<RootState>({
	users
});
