import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAnIKDrWXGh4w6wpO--iS9uLsuPrfBB0nk",
    authDomain: "apiness-380cb.firebaseapp.com",
    projectId: "apiness-380cb",
    storageBucket: "apiness-380cb.appspot.com",
    messagingSenderId: "889275447878",
    appId: "1:889275447878:web:0b62faabc9a05a83a1e847"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase