import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByI_HEh1aRS0MKePMuOmMkl8zsqse_Eqs",
  authDomain: "practice-project-7b21b.firebaseapp.com",
  projectId: "practice-project-7b21b",
  storageBucket: "practice-project-7b21b.appspot.com",
  messagingSenderId: "982005264135",
  appId: "1:982005264135:web:810230bc7a921567dadfa2",
  measurementId: "G-Z3T0JK7YDV",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
