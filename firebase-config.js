// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot, query, where 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ★ ご自身のFirebaseプロジェクト設定に書き換えてください
const firebaseConfig = {
  apiKey: "AIzaSyBRC4LFi5zqFTtDZtrsAEFSs99F1nlnPYA",
  authDomain: "shift-app-2026-ddb1a.firebaseapp.com",
  projectId: "shift-app-2026-ddb1a",
  storageBucket: "shift-app-2026-ddb1a.firebasestorage.app",
  messagingSenderId: "645356176933",
  appId: "1:645356176933:web:2a01952e35d9382d4961cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// admin.html や index.html から使えるようにエクスポートします
export { db, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot, query, where };
