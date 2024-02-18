import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB56F7W2FSjG4DlJuyDHPjENWgge3lLXoc",
  authDomain: "todo2-dd61c.firebaseapp.com",
  projectId: "todo2-dd61c",
  storageBucket: "todo2-dd61c.appspot.com",
  messagingSenderId: "24429222535",
  appId: "1:24429222535:web:66a79b43a3648f77c6f622",
  measurementId: "G-KRBMBKCW8T",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
