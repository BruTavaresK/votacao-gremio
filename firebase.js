
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAjt_UcjMCLOjc3H9u_Knftn7PP9k6GIIg",
    authDomain: "votacaogremio-546ed.firebaseapp.com",
    projectId: "votacaogremio-546ed",
    storageBucket: "votacaogremio-546ed.firebasestorage.app",
    messagingSenderId: "331476699905",
    appId: "1:331476699905:web:858cf6176c41777f8d2900"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);