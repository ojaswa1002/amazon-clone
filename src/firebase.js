// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlD9WJiaCgVmR6G3nUl9PKr9EE3TzMFoU",
  authDomain: "clone-c6fd1.firebaseapp.com",
  projectId: "clone-c6fd1",
  storageBucket: "clone-c6fd1.appspot.com",
  messagingSenderId: "98322544071",
  appId: "1:98322544071:web:b0b9c4f5e09780d87415e2",
  measurementId: "G-RKT10CCMH3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
