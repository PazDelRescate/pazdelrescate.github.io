import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-xhOiVvJ-GqZ2bCvbeNXl6h745LSWW-E",
    authDomain: "clone-9da05.firebaseapp.com",
    databaseURL: "https://clone-9da05-default-rtdb.firebaseio.com",
    projectId: "clone-9da05",
    storageBucket: "clone-9da05.appspot.com",
    messagingSenderId: "983643125014",
    appId: "1:983643125014:web:881311943924bfebcc8c37",
    measurementId: "G-Z98P2RTGJ0"
  });

  export const db = firebaseApp.firestore();
  export const auth = firebaseApp.auth();
  export const storage = firebaseApp.storage();


  export default firebaseApp;