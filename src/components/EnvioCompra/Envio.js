import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import InfoEnvio from "../InfoEnvio/InfoEnvio";
import "./Envio.css"

export const ThemeContext = React.createContext()



const DatosProvider = () => {
  const [inputValue, setInputValue] = useState();
  const [apellido, setApellido] = useState();
  const [compras,setCompras] = useState(null)

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onChangeApellido = (e) => {
    setApellido(e.target.value);
  };

  const registrarCompra = async () => {
    const docRef = await addDoc(collection(db, "compras"), {
      name: inputValue,
      apellido: apellido,
    });
    console.log("el documento de la compra tiene el id:", docRef.id);
    setInputValue("");
    setApellido("");
    setCompras(docRef.id)
    
  };

  

  return (
    <Form onSubmit={registrarCompra}>
      <Form.Group>
        <Form.Input
          onChange={onChange}
          value={inputValue}
          label="First name"
          placeholder="First Name"
          width={6}
        />
        <Form.Input
          onChange={onChangeApellido}
          value={apellido}
          label="Middle Name"
          placeholder="Middle Name"
          width={4}
        />
        <Form.Input label="Last Name" placeholder="Last Name" width={6} />
      </Form.Group>
      <Form.Group>
        <Form.Input placeholder="2 Wide" width={2} />
        <Form.Input placeholder="12 Wide" width={12} />
        <Form.Input placeholder="2 Wide" width={2} />
      </Form.Group>
      <Form.Group>
        <Form.Input placeholder="8 Wide" width={8} />
        <Form.Input placeholder="6 Wide" width={6} />
        <Form.Input placeholder="2 Wide" width={2} />
      </Form.Group>

      
      <button onClick={registrarCompra}>Comprar!</button>

      {compras && <Message className="pMensaje">
    <Message.Header>Changes in Service</Message.Header>
    <p>
      Su id de compra es: {compras}
    </p>
  </Message>}


        

    </Form>
  );
};

export default DatosProvider;
