import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBSwKsEhINFkg-ApRUbEBaKkXWKGAvjY1E",
  authDomain: "mexican-rest.firebaseapp.com",
  databaseURL: "https://mexican-rest.firebaseio.com",
  projectId: "mexican-rest",
  storageBucket: "mexican-rest.appspot.com",
  messagingSenderId: "339044541367",
  appId: "1:339044541367:web:cb2eddf55f79485d327e32",
};
firebase.initializeApp(config);
const db = firebase.firestore();

export const firebaseAuth = firebase.auth();
export const dbMenuRef = db.collection("menu");
export const dbOrdersRef = db.collection("orders");
