import firebase from "firebase/app"

import "firebase/auth"


 export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBtmneLzwQ3A83uEMrPFxg7EFa3_l4dPvc",
    authDomain: "unicha5.vercel.app",
    projectId: "unichat-b7a7c",
    storageBucket: "unichat-b7a7c.appspot.com",
    messagingSenderId: "1061463156063",
    appId: "1:1061463156063:web:9e5c87ffbaaa95908902ea"
  }).auth()
