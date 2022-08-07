import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBR1-uObgs0YjxOBZrymeWbbqIsDbVG480",
    authDomain: "code-on-6634a.firebaseapp.com",
    projectId: "code-on-6634a",
    storageBucket: "code-on-6634a.appspot.com",
    messagingSenderId: "1072326405710",
    appId: "1:1072326405710:web:aacc0e6e79e4474f41dd1f",
    measurementId: "G-8MVMYN5KFJ"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;