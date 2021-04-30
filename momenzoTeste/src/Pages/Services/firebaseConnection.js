import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAwYqxwIm46EIbCDn3mATi-Y6XE8biwd3o",
    authDomain: "momenzo-488c7.firebaseapp.com",
    projectId: "momenzo-488c7",
    storageBucket: "momenzo-488c7.appspot.com",
    messagingSenderId: "332219566696",
    appId: "1:332219566696:web:447c15572e8c8bcf7109dd",
    measurementId: "G-CX13KWG962"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
