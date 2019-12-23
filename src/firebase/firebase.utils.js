



import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';



const config = {
    apiKey: "AIzaSyCevwT_Wq_JUTObGA-Z_5az_NDHHbIPj2g",
    authDomain: "abdi-cloth.firebaseapp.com",
    databaseURL: "https://abdi-cloth.firebaseio.com",
    projectId: "abdi-cloth",
    storageBucket: "abdi-cloth.appspot.com",
    messagingSenderId: "257661876343",
    appId: "1:257661876343:web:2ee54618e6e1af1f8aee72",
    measurementId: "G-4JRXEMDPZX"
  };

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if (!userAuth) return;


}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle= ()=> auth.signInWithPopup(provider);
export default firebase;


  