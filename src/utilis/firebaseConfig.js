import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCEOf1sjrrUmhE2bOH4pB959aUi4SVN8Vg",
  authDomain: "page-login-3c1dc.firebaseapp.com",
  projectId: "page-login-3c1dc",
  storageBucket: "page-login-3c1dc.firebasestorage.app",
  messagingSenderId: "701404812631",
  appId: "1:701404812631:web:cd13f7fa48f70999e95a12",
  measurementId: "G-F2XJ084PE6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export {db}