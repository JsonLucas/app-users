import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCaYcECijGISbPqyGdwKeFYFP0uskKLp3g",
  authDomain: "app-users-ab550.firebaseapp.com",
  projectId: "app-users-ab550",
  storageBucket: "app-users-ab550.appspot.com",
  messagingSenderId: "16680978711",
  appId: "1:16680978711:web:21f84566707d285674cf52",
  measurementId: "G-QE087RCWJS"
};

if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };