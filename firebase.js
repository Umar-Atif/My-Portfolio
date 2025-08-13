import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBycyNmvc0v9htWF1QEX36xWezyBAOUecc",
  authDomain: "my-portfolio-6e3f1.firebaseapp.com",
  projectId: "my-portfolio-6e3f1",
  storageBucket: "my-portfolio-6e3f1.firebasestorage.app",
  messagingSenderId: "1093098711837",
  appId: "1:1093098711837:web:e58aa33b8cf4e83ab74ff4",
  measurementId: "G-T29FT425Q7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 