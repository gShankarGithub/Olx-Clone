import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAQgV3zgrV17a2sIKr7Elh7A9pseV9KwRY",
    authDomain: "web-app-fab36.firebaseapp.com",
    projectId: "web-app-fab36",
    storageBucket: "web-app-fab36.appspot.com",
    messagingSenderId: "1022534097241",
    appId: "1:1022534097241:web:4a5148a913d2587cc31448"
  };

 export default firebase.initializeApp(firebaseConfig)
