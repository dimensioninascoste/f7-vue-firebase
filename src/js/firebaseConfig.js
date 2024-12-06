import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAaO97TAGstKPBjjTcdnHdt2pjnTkd5KNk",
  authDomain: "gta-befair.firebaseapp.com",
  databaseURL: "https://gta-befair.firebaseio.com",
  projectId: "gta-befair",
  storageBucket: "gta-befair.firebasestorage.app",
  messagingSenderId: "968074210001",
  appId: "1:968074210001:web:1e41d4822877bc679a33f0",
  measurementId: "G-TGE2FY4VYH"
});

const auth = getAuth(firebaseApp)

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in');
    } else {
        console.log('No user');
    }
})
