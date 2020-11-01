import firebase from 'firebase/app';
import "firebase/database"


var config = {
    apiKey: "AIzaSyC8F9iOu7M-XQOuDQ6D2KyJ30dFFmnShJ8",
    authDomain: "crud-typescript-app.firebaseapp.com",
    databaseURL: "https://crud-typescript-app.firebaseio.com",
    projectId: "crud-typescript-app",
    storageBucket: "crud-typescript-app.appspot.com",
    messagingSenderId: "987262568785",
    appId: "1:987262568785:web:37543e0ea7f11e474feb70",
    measurementId: "G-EB6371B5NW"
  };


firebase.initializeApp(config);
export default firebase.database();

