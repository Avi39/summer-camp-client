// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:import.meta.env.VITE_apiKey,
//     authDomain:import.meta.env.VITE_authDomain,
//     projectId:import.meta.env.VITE_projectId,
//     storageBucket:import.meta.env.VITE_storageBucket,
//     messagingSenderId:import.meta.env.VITE_messagingSenderId,
//     appId:import.meta.env.VITE_appId
//   };

// // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  export default app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkH6QRQhy133JAKHX4LxSWG9EuWQPx5qI",
  authDomain: "assignment-tweleve-server.firebaseapp.com",
  projectId: "assignment-tweleve-server",
  storageBucket: "assignment-tweleve-server.appspot.com",
  messagingSenderId: "227099398837",
  appId: "1:227099398837:web:4f1e004bd0dacd10f8a4fc"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app