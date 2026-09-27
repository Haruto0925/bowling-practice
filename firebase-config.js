// ============================================
//  Firebase 設定ファイル
//  アップロード手順.md「ステップB」を済ませたら、
//  下の値を Firebase コンソールで発行されたものに書き換えてください。
//  このまま(「ここに…」の状態)だと自動でローカルモード(端末内保存のみ)で動きます。
// ============================================
window.FIREBASE_CONFIG = {
  apiKey: "ここにAPIキー",
  authDomain: "ここにプロジェクトID.firebaseapp.com",
  projectId: "ここにプロジェクトID",
  storageBucket: "ここにプロジェクトID.appspot.com",
  messagingSenderId: "ここに送信者ID",
  appId: "ここにアプリID"
};
