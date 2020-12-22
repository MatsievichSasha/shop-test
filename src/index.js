import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'

const firebaseConfig ={
  apiKey: "AIzaSyBRka8qBsFJ3ofG9zz1Z84jrRgEgGnn-3g",
  authDomain: "shop-ba9ed.firebaseapp.com",
  databaseURL: "https://shop-ba9ed-default-rtdb.firebaseio.com",
  projectId: "shop-ba9ed",
  storageBucket: "shop-ba9ed.appspot.com",
  messagingSenderId: "619105676740",
  appId: "1:619105676740:web:9ea977a7be34f6412d4891",
  measurementId: "G-3FKTCF3S8V"
}

firebase.initializeApp(firebaseConfig)

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
