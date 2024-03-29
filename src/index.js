import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyCX8g1lrAAF8VJmmhjhMoHwVnHRCrFGrEw",
    authDomain: "xnote-c4a0f.firebaseapp.com",
    databaseURL: "https://xnote-c4a0f.firebaseio.com",
    projectId: "xnote-c4a0f",
    storageBucket: "xnote-c4a0f.appspot.com",
    messagingSenderId: "525086124891",
    appId: "1:525086124891:web:1cc49b3e63c1b1a151087e",
    measurementId: "G-LGLC3S0356"
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('xnote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
