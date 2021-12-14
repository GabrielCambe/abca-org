import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyC_EPGcxcIPNQmbwt8FF3OgF_LwhrUKSRw',
  authDomain: 'exemplo-login-associacao.firebaseapp.com',
  projectId: 'exemplo-login-associacao',
  storageBucket: 'exemplo-login-associacao.appspot.com',
  messagingSenderId: '529772759306',
  appId: '1:529772759306:web:bf45b2ea4b23f10aa412f3',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
