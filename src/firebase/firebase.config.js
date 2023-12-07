// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe3OGVALGK-BtAmAPRlwWc-HKlw9wP5-A",
  authDomain: "dreamerslibrary-36210.firebaseapp.com",
  projectId: "dreamerslibrary-36210",
  storageBucket: "dreamerslibrary-36210.appspot.com",
  messagingSenderId: "571258805457",
  appId: "1:571258805457:web:beabd9406382f2dedb39f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;