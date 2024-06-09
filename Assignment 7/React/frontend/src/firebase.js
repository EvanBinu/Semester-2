import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxLJuI_plEFyAFeAa7mIRQpMZJYkGI1NE",
  authDomain: "login-form-5017b.firebaseapp.com",
  projectId: "login-form-5017b",
  storageBucket: "login-form-5017b.appspot.com",
  messagingSenderId: "23885697754",
  appId: "1:23885697754:web:4259944e061e2e6be3cbe3",
  measurementId: "G-Z1DV6JWMLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
