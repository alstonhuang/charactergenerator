import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

// 在 GitHub Pages 上，這個變數不會被提供，所以給予一個預設值。
const appId = 'default-app-id';

// 從您的 Firebase 專案複製的配置資訊
const firebaseConfig = {
    apiKey: "AIzaSyClbRV0tMn4rcu7rvTc4lsM2G3Dfc73BTM",
    authDomain: "charactergenerator-1700c.firebaseapp.com",
    projectId: "charactergenerator-1700c",
    storageBucket: "charactergenerator-1700c.firebasestorage.app",
    messagingSenderId: "379178480455",
    appId: "1:379178480455:web:dc595c412a371c4e6ad262",
    measurementId: "G-3C5HE1R5DS"
};

// 初始化 Firebase 服務
setLogLevel('debug');
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 處理匿名登入
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
if (initialAuthToken) {
    signInWithCustomToken(auth, initialAuthToken).catch((error) => {
        console.error("客製化令牌登入失敗:", error);
    });
} else {
    signInAnonymously(auth).catch((error) => {
        console.error("匿名登入失敗:", error);
    });
}

// 匯出 (export) 初始化好的服務，供其他檔案使用
export { db, auth, appId, initialAuthToken };
