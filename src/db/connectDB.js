import { initializeApp } from "firebase/app";
import { getFirestore, collection} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAEWnVtkm48t4-a0isqVVzfd1kW3GTt4CU",
    authDomain: "t-test-f400e.firebaseapp.com",
    projectId: "t-test-f400e",
    storageBucket: "t-test-f400e.appspot.com",
    messagingSenderId: "752796719491",
    appId: "1:752796719491:web:61f13ea030da1538ff3eb6",
    measurementId: "G-0DHHGDPBE2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const dbPosts = collection(db, 'posts')
export const dbComments = collection(db, 'comments')



