
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDpvowxhO6T90zcV_SRKLJ_RPPrSZSE9rE",
  authDomain: "uttaramotors-e3d80.firebaseapp.com",
  projectId: "uttaramotors-e3d80",
  storageBucket: "uttaramotors-e3d80.appspot.com",
  messagingSenderId: "776547825689",
  appId: "1:776547825689:web:04c48fee08e31bac9d5288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;