
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDoqWmb7gtvdkwCjECrh4K-MonVdINGCA8",
  authDomain: "acessodb-6e412.firebaseapp.com",
  projectId: "acessodb-6e412",
  storageBucket: "acessodb-6e412.firebasestorage.app",
  messagingSenderId: "789277533203",
  appId: "1:789277533203:web:dd2f35c8fef6f353a34be6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };