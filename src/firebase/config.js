import firebase from "firebase/app"
// import "firebase/firestore";
import { firestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCpViQHABU5N9buzDjAPU_5AkPviIgGbCQ",
    authDomain: "vue-blog-system-d3ffa.firebaseapp.com",
    projectId: "vue-blog-system-d3ffa",
    storageBucket: "vue-blog-system-d3ffa.appspot.com",
    messagingSenderId: "633431634387",
    appId: "1:633431634387:web:ffcef5d3a7ffceeb17bf26"
  };

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore();

export {db}