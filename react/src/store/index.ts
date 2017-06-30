import { createStore, applyMiddleware, Store } from 'redux';
import rootReducer, { RootState } from '../reducers';

export function configureStore(initialState?: RootState): Store<RootState> {
	const create = createStore;

	const store = createStore(rootReducer, initialState) as Store<RootState>;

	return store;
}
