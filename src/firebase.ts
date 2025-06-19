import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// IMPORTANT: Replace this with your own Firebase project configuration.
const firebaseConfig = {
    apiKey: "AIzaSyCy7jH5fO39hydXOo69Vgd26ZJrIHcHSUw",
    authDomain: "texas-parcels.firebaseapp.com",
    projectId: "texas-parcels",
    storageBucket: "texas-parcels.firebasestorage.app",
    messagingSenderId: "940870071417",
    appId: "1:940870071417:web:9a0d84405dd7c570b710a8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;