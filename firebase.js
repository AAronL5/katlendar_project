// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTuJaKQC21vlUgRk1otODquWUIKmop3I4",
  authDomain: "katlendar-project.firebaseapp.com",
  projectId: "katlendar-project",
  storageBucket: "katlendar-project.appspot.com",
  messagingSenderId: "718677245351",
  appId: "1:718677245351:web:bf2a024f0b21d4d9ac8a82"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = firebase.auth()

export { auth };