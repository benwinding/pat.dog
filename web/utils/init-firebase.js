import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCdDnTja6S1-YyQiZNE13-bkWT01UHpMx4",
    authDomain: "pat-dog.firebaseapp.com",
    projectId: "pat-dog",
    storageBucket: "pat-dog.appspot.com",
    messagingSenderId: "575401471118",
    appId: "1:575401471118:web:245dd88cedcda9caf12ddf",
    measurementId: "G-H3BPCP9CTV"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export function GetLoggedInUser() {
    return new Promise((res, rej) => {
        const unsubscribe = APP.auth().onAuthStateChanged((u) => {
            res(u);
            unsubscribe();
        }, err => {
            rej(err);
            unsubscribe();
        })
    })
}

export const APP = firebase.app();
export const DB = firebase.firestore(); 