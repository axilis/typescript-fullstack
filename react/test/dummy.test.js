import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

test('adds 2 + 3 to equal 5', () => {
	const sum = (a, b) => (a + b);
	expect(2 + 3).toBe(5);
});