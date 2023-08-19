import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAjXv6a6sE32ah67Cqx1nkW8-BiJhVN01c",
    authDomain: "blogging-app-11a8a.firebaseapp.com",
    projectId: "blogging-app-11a8a",
    storageBucket: "blogging-app-11a8a.appspot.com",
    messagingSenderId: "33220977101",
    appId: "1:33220977101:web:4e5bbaa4dbd07ff0f8e484",
    measurementId: "G-Y43WCTMWWZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);