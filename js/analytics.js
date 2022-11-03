// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBleJs0Ro3v0Ud_iKTwuRjupPa8Kdg-DNg",
  authDomain: "nafi-v2.firebaseapp.com",
  projectId: "nafi-v2",
  storageBucket: "nafi-v2.appspot.com",
  messagingSenderId: "547563880601",
  appId: "1:547563880601:web:68aea49c1dd90b2bba7808",
  measurementId: "G-G2YWVBLS0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);