import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

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

const auth = getAuth();

let register_btn = document.getElementById("register_btn")

register_btn && register_btn.addEventListener("click", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

   console.log(email.value);
   console.log(password.value);
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
   //   alert('user login')
      console.log("user==>,user")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("error=>,errorMessage")
      // ..
    });
});
