import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyBH6mUhvGrqzKNNfd5Gs4qM2fbEUmjATJ4",
  authDomain: "clone-f29b9.firebaseapp.com",
  databaseURL: "https://clone-f29b9.firebaseio.com",
  projectId: "clone-f29b9",
  storageBucket: "clone-f29b9.appspot.com",
  messagingSenderId: "1125850526",
  appId: "1:1125850526:web:ba62690fc5954f72998a8f",
  measurementId: "G-BW72ECENZJ"

});
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};