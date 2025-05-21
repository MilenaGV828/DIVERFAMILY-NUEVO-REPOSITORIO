
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCAeMlJaVuvbFw416G3AzWwSnJqMJeH01I",
    authDomain: "diverfamilybase-de-datos.firebaseapp.com",
    projectId: "diverfamilybase-de-datos",
    storageBucket: "diverfamilybase-de-datos.firebasestorage.app",
    messagingSenderId: "884142337611",
    appId: "1:884142337611:web:52a5d44d9cb34efac4e7ce",
    measurementId: "G-XVKBT2N8XJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


