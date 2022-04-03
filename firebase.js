import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBC1dvsRSRU6yYWW9L5vRkGJa5lWsP76gU",
  authDomain: "nextjsblog-24dca.firebaseapp.com",
  projectId: "nextjsblog-24dca",
  storageBucket: "nextjsblog-24dca.appspot.com",
  messagingSenderId: "662913361053",
  appId: "1:662913361053:web:d81f25d8a688f3d7c2a074",
  measurementId: "G-DYFBL9Q21T"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, db, storage, serverTimestamp };
