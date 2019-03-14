import firebase from 'firebase';
import firestore from 'firebase/firestore';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAJ8E2BDXlz45wULXqoHBm0oduDh2Nr4SM",
  authDomain: "xorav-chat.firebaseapp.com",
  databaseURL: "https://xorav-chat.firebaseio.com",
  projectId: "xorav-chat",
  storageBucket: "xorav-chat.appspot.com",
  messagingSenderId: "722368824119"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
