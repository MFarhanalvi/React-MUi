import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8MEceLMvI4ywlu5sg9b4WY6q3GowJEIk",

  authDomain: "todo-app-cp-303a1.firebaseapp.com",
  projectId: "todo-app-cp-303a1",
  storageBucket: "todo-app-cp-303a1.appspot.com",

  messagingSenderId: "597699086623",

  appId: "1:597699086623:web:8a163b001c164ddd4e482a",

  measurementId: "G-X39RLS53VT",
});

const db=firebaseApp.firestore();

export default db;
