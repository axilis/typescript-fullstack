import * as React from 'react';
import * as UserActions from '../../actions/users';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers';
import { UserData } from '../../models/User';

export namespace Login {
	export interface Props extends RouteComponentProps<void> {
		userActions: typeof UserActions;
		users: UserData;
	}

	export interface State {
		/* empty */
	}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends React.Component<Login.Props, Login.State> {

	constructor(props: Login.Props) {
		super(props);
		this.addUser = this.addUser.bind(this);
	}

	addUser() {
		const { userActions } = this.props;
		const userData: UserData = {
			id: 1,
			name: 'Dummy user'
		};
		userActions.loginUser(userData);

	}

	render() {
		const { users } = this.props;

		return (
			<div>
				<h1 onClick={this.addUser}>
					Login page
				</h1>
				<br />
				<Link to="/">Home page</Link>
			</div>
		);
	}
}

function mapStateToProps(state: RootState) {
	return {
		users: state.users
	};
}

function mapDispatchToProps(dispatch: Dispatch<Function>) {
	return {
		userActions: bindActionCreators(UserActions as {}, dispatch)
	};
}
