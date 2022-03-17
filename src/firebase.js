import {initializeApp} from 'firebase/app';
import { getDatabase} from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyDi-afwJc_KSwjP8M6dzeMzUP1LRznFdYU",
  authDomain: "react-d54a2.firebaseapp.com",
  projectId: "react-d54a2",
  storageBucket: "react-d54a2.appspot.com",
  messagingSenderId: "547606777173",
  appId: "1:547606777173:web:5cdbf5a39685a668a1f3dc"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);
export const db = getDatabase(app);
