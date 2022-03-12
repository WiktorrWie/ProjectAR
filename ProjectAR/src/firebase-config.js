import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
    apiKey: "AIzaSyALetSsBrqgV7jvWfThKQuajXMrHZfl_as",
    authDomain: "project-ar-9bac5.firebaseapp.com",
    databaseURL: "https://project-ar-9bac5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-ar-9bac5",
    storageBucket: "project-ar-9bac5.appspot.com",
    messagingSenderId: "1017480582208",
    appId: "1:1017480582208:web:6244a3f3bcfdf13f33bba5",
    measurementId: "G-V86NGMWVH0"
  };
*/
const firebaseConfig = {
    apiKey: "AIzaSyDkrgquuXhFAgp67_qR6Ej2sBEQkocxXQ8",
    authDomain: "race-rest.firebaseapp.com",
    databaseURL: "https://race-rest-default-rtdb.firebaseio.com",
    projectId: "race-rest",
    storageBucket: "race-rest.appspot.com",
    messagingSenderId: "836529600088",
    appId: "1:836529600088:web:a7b2a4f07710f2458dfc2d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Create database reference
const database = getDatabase(app);
// Reference to posts in Realtime DB
export const postsRef = ref(database, "posts");
// Reference to users in Realtime DB
export const usersRef = ref(database, "users");
// Get reference to specific post using post id
export function getPostRef(postId) {
    return ref(database, "posts/" + postId);
}
// Get reference to specific user using user id
export function getUserRef(userId) {
    return ref(database, "users/" + userId);
}

export const db = getFirestore(app);