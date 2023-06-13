import firebase from "firebase"



const firebaseConfig = {
  apiKey: "AIzaSyCPoKouV9Ui0KUKdXkmetCRkIK63_yT6NU",
  authDomain: "firsttobuzz.firebaseapp.com",
  databaseURL: "https://firsttobuzz-default-rtdb.firebaseio.com",
  projectId: "firsttobuzz",
  storageBucket: "firsttobuzz.appspot.com",
  messagingSenderId: "274984194915",
  appId: "1:274984194915:web:dccce95a71cf49af2a3956",
  measurementId: "G-NM32NEXTD6"
};
firebase.initializeApp(firebaseConfig)

export default firebase.database()