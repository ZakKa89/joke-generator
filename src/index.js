import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const fixDevTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f;
const store = createStore(reducers, persistedState, compose(applyMiddleware(thunk), fixDevTools));

store.subscribe(
	throttle(() => {
		saveState({ starredJokes: store.getState().starredJokes });
	}, 300)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
