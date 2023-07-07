import firebase from "firebase";

const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyBZGR8jY6bkBlJgfmJhTWXifOZquY25mfQ",
    authDomain: "messenger-clone-7b2b0.firebaseapp.com",
    projectId: "messenger-clone-7b2b0",
    storageBucket: "messenger-clone-7b2b0.appspot.com",
    messagingSenderId: "487766415029",
    appId: "1:487766415029:web:ac7d02cfd9d5749aa210fc",
    measurementId: "G-SB8EWP1BX9"
  });

  const db =firebaseApp.firestore();

  export default db;