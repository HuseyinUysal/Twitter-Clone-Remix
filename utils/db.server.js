import admin, { credential } from 'firebase-admin'
import { applicationDefault, initializeApp as initializeAdminApp } from 'firebase-admin/app';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWpz4-8_-u8ChLZexqzj73eAbU5WLIOYg",
  authDomain: "remix-firebase-160b2.firebaseapp.com",
  projectId: "remix-firebase-160b2",
  storageBucket: "remix-firebase-160b2.appspot.com",
  messagingSenderId: "952465200796",
  appId: "1:952465200796:web:b9efaf7d791f962f65ff59"
};

if(!admin.apps.length) {
    initializeAdminApp({
        credential: applicationDefault(),
        databaseURL: "https://remix-firebase-3622f.firebaseio.com"
    })
}

const db = admin.firestore()

let Firebase;

if(!Firebase?.apps?.length){
    Firebase = initializeApp(firebaseConfig)
}

export {db}