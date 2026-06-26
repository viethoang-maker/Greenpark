import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Thay thế bằng cấu hình Firebase của bạn lấy từ:
// Firebase Console -> Project Settings -> General -> Your apps (Web app)
const firebaseConfig = {
  apiKey: "AIzaSyAEDhL9CvVL8FYVE6L1UFo4fiJOn-qRuUE",
  authDomain: "greenpark-1094d.firebaseapp.com",
  projectId: "greenpark-1094d",
  storageBucket: "greenpark-1094d.firebasestorage.app",
  messagingSenderId: "531640597512",
  appId: "1:531640597512:web:f8fb7131940536d2e565bd",
  measurementId: "G-3CQD79YNR6"
};

// Khởi tạo ứng dụng Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore và export với biến đặt tên là 'db'
export const db = getFirestore(app);