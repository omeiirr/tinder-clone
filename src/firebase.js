import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDapnKUTXbUF4KPIWbWpsVQMKaO_DKul0s",
  authDomain: "tinder-clone-44b4e.firebaseapp.com",
  projectId: "tinder-clone-44b4e",
  storageBucket: "tinder-clone-44b4e.appspot.com",
  messagingSenderId: "525247805245",
  appId: "1:525247805245:web:0687d4d2e1901901fbb754",
  measurementId: "G-PB5XP5JS6Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
