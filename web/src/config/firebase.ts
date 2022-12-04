import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCaYcECijGISbPqyGdwKeFYFP0uskKLp3g",
  authDomain: "app-users-ab550.firebaseapp.com",
  projectId: "app-users-ab550",
  storageBucket: "app-users-ab550.appspot.com",
  messagingSenderId: "16680978711",
  appId: "1:16680978711:web:21f84566707d285674cf52",
  measurementId: "G-QE087RCWJS"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);