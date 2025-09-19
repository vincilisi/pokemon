// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMwCzgh0YZOrj7tyaDACC8et1aSiw7s7c",
    authDomain: "pokedexwolf.firebaseapp.com",
    projectId: "pokedexwolf",
    storageBucket: "pokedexwolf.appspot.com",
    messagingSenderId: "566652408095",
    appId: "1:566652408095:web:a3ae4331894fbfae90e02a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
