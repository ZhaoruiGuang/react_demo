import './index.html';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route ,browserHistory } from 'react-router';

import { createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './redux/reducers.js';
import defaultState from './redux/defaultState.js';
console.log(defaultState)
const store = createStore(
	reducers,
	defaultState,
	applyMiddleware(thunkMiddleware)
);
store.subscribe(()=>{
	console.log('state 更新了~',store.getState())
})


import './index.css';
import App from './components/app.js';
import RouterDemo from './components/routerDemo.js';

const routes = {
	path: '/',
	component: App,
	childRoutes: [
		{ path: 'routerdemo', component: RouterDemo },
	]
}

render(
	// <Router routes={routes} />
	
	<Provider store={store}>
	    <App />
	</Provider>
,document.getElementById('root'));