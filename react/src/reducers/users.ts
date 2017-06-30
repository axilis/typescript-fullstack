import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';
import { UserStoreState, UserData } from '../models/User';

const initialState: UserData = {
	id: 0,
	name: 'NotLoggedIn'
};

export default handleActions<UserStoreState, UserData>(
	{

		[Actions.USER_LOGIN]: (state, action) => {
			return {
				id: action.payload.id,
				name: action.payload.name
			};
		}

	},
	initialState
);
