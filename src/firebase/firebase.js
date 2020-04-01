import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBWSScK_VZmLg9ti14kSvIJJkbDMETFrA0",
    authDomain: "halloween-spa.firebaseapp.com",
    databaseURL: "https://halloween-spa.firebaseio.com",
    projectId: "halloween-spa",
    storageBucket: "halloween-spa.appspot.com",
    messagingSenderId: "334414713624",
    appId: "1:334414713624:web:5b7898009c040427d0846d",
    measurementId: "G-NFLRQNHNL4"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  export default firebase;