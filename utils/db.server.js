// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWpz4-8_-u8ChLZexqzj73eAbU5WLIOYg",
  authDomain: "remix-firebase-160b2.firebaseapp.com",
  projectId: "remix-firebase-160b2",
  storageBucket: "remix-firebase-160b2.appspot.com",
  messagingSenderId: "952465200796",
  appId: "1:952465200796:web:b9efaf7d791f962f65ff59"
};

let Firebase;

if(!Firebase?.apps?.length){
    Firebase = initializeApp(firebaseConfig)
}