import * as React from 'react';
import * as UserActions from '../../actions/users';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers';
import { UserData } from '../../models/User';

export namespace Home {
	export interface Props extends RouteComponentProps<void> {
		userActions: typeof UserActions;
		users: UserData;
	}

	export interface State {
		/* empty */
	}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component<Home.Props, Home.State> {

	constructor(props: Home.Props) {
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
					Home page
				</h1>
				<br />
				<Link to="/login">Login page</Link>
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
