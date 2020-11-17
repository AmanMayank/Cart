import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCXYroxuSQZNBiuzPoUhFodGM1121negxQ",
    authDomain: "cart-dd881.firebaseapp.com",
    databaseURL: "https://cart-dd881.firebaseio.com",
    projectId: "cart-dd881",
    storageBucket: "cart-dd881.appspot.com",
    messagingSenderId: "535523118302",
    appId: "1:535523118302:web:74b08a4e3a44412606464f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App/>, document.getElementById('root'));

