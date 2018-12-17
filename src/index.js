import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

axios.interceptors.request.use(request => {
	console.log(request);
	// Always return the request, you can also edit it before returning it.
	return request
}, error => {
	console.log(error);
	return Promise.reject(error);
});

// It is important to use the response keyword here

axios.interceptors.response.use(response => {
	console.log(response);
	// Always return the request, you can also edit it before returning it.
	return response
}, error => {
	console.log(error);
	return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
