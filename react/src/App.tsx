import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Public pages
import HomeContainer from './containers/Home';

// Auth pages
import LoginContainer from './containers/Login';

import './styles/App.scss';

interface Props {}

class App extends React.Component<Props> {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact={true} path="/" component={HomeContainer} />
						<Route exact={true} path="/login" component={LoginContainer} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;