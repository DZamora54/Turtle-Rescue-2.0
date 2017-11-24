import firebase from "firebase";

//initializing Firebase

const config= {
  apiKey: "AIzaSyBaHHNU14lMWh5UX-U8e_5bzIB866m8JI8",
  authDomain: "turtle-project-2-8bb11.firebaseapp.com",
  databaseURL: "https://turtle-project-2-8bb11.firebaseio.com",
  projectId: "turtle-project-2-8bb11",
  storageBucket: "turtle-project-2-8bb11.appspot.com",
  messagingSenderId: "691136396071"
};

export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();

export const storageKey = "";

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}

export default firebaseApp;