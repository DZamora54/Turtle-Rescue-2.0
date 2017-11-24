import firebase from "firebase";


firebase.initializeApp({
  apiKey: "AIzaSyBaHHNU14lMWh5UX-U8e_5bzIB866m8JI8",
  authDomain: "turtle-project-2-8bb11.firebaseapp.com",
  databaseURL: "https://turtle-project-2-8bb11.firebaseio.com",
  projectId: "turtle-project-2-8bb11",
  storageBucket: "turtle-project-2-8bb11.appspot.com",
  messagingSenderId: "691136396071"
}).auth()
  .setPersistence("local");

const auth = firebase.auth();

auth.createAndSetUserWithEmailAndPassword = function (email, password) {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      return setToken(user);
    });
};

function deleteCookie() {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + 60 * 1000 * 55);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}

function setToken(user) {
  if (!user) {
    return Promise.resolve().then(deleteCookie());
  } else {
    return user.getIdToken().then(function (token) {
      setCookie("token", token);
      return user;
    });
  }
}

export default auth;