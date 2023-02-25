// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import firebaseConfig from './config';

// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import firebaseConfig from './config';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);