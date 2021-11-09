import React, { useContext } from "react";
import { Message } from "semantic-ui-react";
import {db} from '../Firebase/Firebase'
import { collection, getDocs, where, query, getDoc,addDoc} from "firebase/firestore";


const MessageExampleError = () => {
  


  return (
    <p>Hola</p>
  );
};

export default MessageExampleError;
