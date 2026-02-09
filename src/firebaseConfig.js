// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env. FIREBASE_SERVICE_ACCOUNT_FB_STUDY_APP,
  authDomain: "fb-study-app.firebaseapp.com",
  databaseURL: "https://fb-study-app-default-rtdb.firebaseio.com",
  projectId: "fb-study-app",
  storageBucket: "fb-study-app.firebasestorage.app",
  messagingSenderId: "116739584562",
  appId: "1:116739584562:web:db8d8da92c848842d4c22b",
  measurementId: "G-D523YZ1FJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
