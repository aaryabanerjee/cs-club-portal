import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDCi0MH4l8FRvXSAqre2Jn1TD1uHKJb4HQ",
  authDomain: "cs-club-portal.firebaseapp.com",
  projectId: "cs-club-portal",
  storageBucket: "cs-club-portal.firebasestorage.app",
  messagingSenderId: "1083145297320",
  appId: "1:1083145297320:web:2cf76724741dfe341b919d",
  measurementId: "G-VZ6YHHXMLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

