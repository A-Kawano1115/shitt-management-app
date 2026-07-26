// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot, query, where 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ★ Firebaseコンソールで取得した設定情報に差し替えてください
const firebaseConfig = {
  apiKey: "AIzaSyBRC4LFi5zqFTtDZtrsAEFSs99F1nlnPYA",
  authDomain: "shift-app-2026-ddb1a.firebaseapp.com",
  projectId: "shift-app-2026-ddb1a",
  storageBucket: "shift-app-2026-ddb1a.firebasestorage.app",
  messagingSenderId: "645356176933",
  appId: "1:645356176933:web:2a01952e35d9382d4961cc"
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot, query, where };