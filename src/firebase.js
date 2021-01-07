import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAZKVd7-TTw_GnJMe1i5220yt27WhIdCZk",
    authDomain: "chatapp-react-e7a4c.firebaseapp.com",
    projectId: "chatapp-react-e7a4c",
    storageBucket: "chatapp-react-e7a4c.appspot.com",
    messagingSenderId: "1063988935435",
    appId: "1:1063988935435:web:3843d124298ba2c989400e",
    measurementId: "G-YSQTDJJM8R"

});

const db = firebaseApp.firestore();

export default db;