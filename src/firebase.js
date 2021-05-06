// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAdMg8zUPIJF2P-Y2K706pz7i7Ba929IeU",
  authDomain: "challenge-785e0.firebaseapp.com",
  projectId: "challenge-785e0",
  storageBucket: "challenge-785e0.appspot.com",
  messagingSenderId: "1037213810477",
  appId: "1:1037213810477:web:ef7c449e1ca879258fdda4",
  measurementId: "G-83VQ3R342Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//ye variable deta hai hmlog ko signin and register karne k lye
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
