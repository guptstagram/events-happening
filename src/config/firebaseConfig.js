import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCEH3-dTPm1Q1S3qeyCPy0df4iV30tOFYg",
    authDomain: "evnet-app.firebaseapp.com",
    databaseURL: "https://evnet-app.firebaseio.com",
    projectId: "evnet-app",
    storageBucket: "evnet-app.appspot.com",
    messagingSenderId: "654638481561",
    appId: "1:654638481561:web:22400747ba1ccf1fdab808"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;