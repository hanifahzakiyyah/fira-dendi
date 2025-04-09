// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";

// Konfigurasi dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDN7gPpmtu8qtzQFwCCjernaf7i6Pw29l8",
  authDomain: "musfira-haryandi.firebaseapp.com",
  projectId: "musfira-haryandi",
  storageBucket: "musfira-haryandi.firebasestorage.app",
  messagingSenderId: "293591309597",
  appId: "1:293591309597:web:78e5fcfcf5a259544195f4",
  measurementId: "G-22WKTF8CXC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login anonymous otomatis saat pengguna membuka website
const signInUser = async () => {
  try {
    await signInAnonymously(auth);
  } catch (error) {
    console.error("Gagal login anon: ", error);
  }
};

// Pastikan pengguna login saat membuka website
onAuthStateChanged(auth, (user) => {
  if (!user) {
    signInUser();
  }
});

export { auth, db, collection, addDoc};

