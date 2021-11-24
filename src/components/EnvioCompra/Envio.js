import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { Message, Button } from "semantic-ui-react";
import "./Envio.css";

export const ThemeContext = React.createContext();

const DatosProvider = () => {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [compras, setCompras] = useState(null);


  const onChange = (e) => {
    setNombre(e.target.value);
  };

  const onChangeApellido = (e) => {
    setApellido(e.target.value);
  };

  const registrarCompra = async () => {
    const docRef = await addDoc(collection(db, "compras"), {
      name: nombre,
      apellido: apellido,
    });
    console.log("el documento de la compra tiene el id:", docRef.id);
    setNombre("");
    setApellido("");
    setCompras(docRef.id);
    
  };

  


  return (
    <Form onSubmit={registrarCompra}>
      <div className="FormularioE">
        
      <Form.Group>
        <Form.Input
          onChange={onChange}
          value={nombre}
          label="Nombre"
          placeholder="Primer nombre"
          width={6}
        />
        <Form.Input
          onChange={onChangeApellido}
          value={apellido}
          label="Segundo nombre"
          placeholder="Segundo nombre"
          width={4}
        />
        <Form.Input label="Apellido" placeholder="Apellido" width={6} />
      </Form.Group>
      <Form.Group>
        <Form.Input placeholder="Codigo postal" width={2} />
        <Form.Input placeholder="Calle y entrecalle" width={12} />
        <Form.Input placeholder="Ciudad" width={2} />
      </Form.Group>
      <Form.Group>
        <Form.Input placeholder="Numero de telefono" width={8} />
  
      </Form.Group>
      </div>
      <div className="TerminarCompra">
      <Button onClick={registrarCompra} color='green'>Completar compra</Button>
      </div>

      {compras && (
        <Message className="pMensaje">
          <Message.Header>
            <div className="felicidades">
            <p>Felicidades su compra fue un exito 🎉</p>
            </div>
          </Message.Header>
          <p>
            Su id de compra es: {compras}
            
          </p>
        </Message>
      )}
    </Form>
  );
};

export default DatosProvider;
