// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { collection, getDocs, where, query, getDoc,addDoc} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBCloWrCgvfvqvGirgatC3EsfOAneXNjKs",
  authDomain: "ecommercemanga18.firebaseapp.com",
  projectId: "ecommercemanga18",
  storageBucket: "ecommercemanga18.appspot.com",
  messagingSenderId: "938915354974",
  appId: "1:938915354974:web:6561bdc4d3aa28b78e17cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

//Función para traer todos los items de la base de datos

export const allItem = () => {
  const query = getDocs(collection(db, "items"));
  return query;
};

export const itemCat = (categoria) => {
    const q = (collection(db, "items"));
    const q2 = query(q, where('categoria', '==', categoria))
    const q3 = getDocs(q2)
    return q3
  };

export const only =(id)=>{
  const q = doc(db,'items',id)
  const q2 = getDoc(q)
  return q2
}
    


