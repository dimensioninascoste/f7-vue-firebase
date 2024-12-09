import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const firebaseApp = initializeApp({
-  da inserire in locale -
});

const auth = getAuth(firebaseApp)

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in');
    } else {
        console.log('No user');
    }
})
