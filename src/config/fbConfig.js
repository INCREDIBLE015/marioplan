import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCzZL2M4EBtL3RKu-6ZB6o_T5EVsn_QAww",
    authDomain: "net-ninja-marioplan-b12ca.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-b12ca.firebaseio.com",
    projectId: "net-ninja-marioplan-b12ca",
    storageBucket: "net-ninja-marioplan-b12ca.appspot.com",
    messagingSenderId: "1073233773970",
    appId: "1:1073233773970:web:0ad07b710002c6eadf6d4b",
    measurementId: "G-RGG548T2XB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 