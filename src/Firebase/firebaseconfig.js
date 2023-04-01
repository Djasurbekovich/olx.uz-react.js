import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDKPnpktn03Zxvj6eHP_U5jsTnOwGhZDfg",
    authDomain: "olxuz-23c8e.firebaseapp.com",
    projectId: "olxuz-23c8e",
    storageBucket: "olxuz-23c8e.appspot.com",
    messagingSenderId: "897417416851",
    appId: "1:897417416851:web:aaa8811f723bd129edfd66",
    measurementId: "G-QKZ21JD6Y9"
};

const server = firebase.initializeApp(firebaseConfig)
const auth = server.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }