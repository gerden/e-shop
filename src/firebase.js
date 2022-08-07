import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnrbfzHx0df2q1SW4UAgQ9pCEVojBmFcE",
  authDomain: "laptop-e-shop.firebaseapp.com",
  projectId: "laptop-e-shop",
  storageBucket: "laptop-e-shop.appspot.com",
  messagingSenderId: "1098767673607",
  appId: "1:1098767673607:web:0e6fe028cfaf56ba273da2",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
