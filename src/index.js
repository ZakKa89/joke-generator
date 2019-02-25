import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const fixDevTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f;

const store = createStore(reducers, compose(applyMiddleware(thunk), fixDevTools));

console.log(store);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
