import React, { useState } from "react";
import { Form } from 'semantic-ui-react'
import { collection,addDoc } from "firebase/firestore";
import {db} from '../Firebase/Firebase'

const FormExampleWidthField = () => {
    
const [inputValue,setInputValue] = useState()


const onChange = (e) =>{
    setInputValue(e.target.value)
    
}
    
const registrarCompra = async () =>{

    const docRef = await addDoc(collection(db,'compras'),{
        name:'Cualquier cosa',
    })
    console.log('el documento de la compra tiene el id:',docRef.id)

}


return(
  <Form onSubmit={registrarCompra}>
    <Form.Group>
      <Form.Input onChange={onChange} value={inputValue}label='First name' placeholder='First Name' width={6} />
      <Form.Input label='Middle Name' placeholder='Middle Name' width={4} />
      <Form.Input label='Last Name' placeholder='Last Name' width={6} />
    </Form.Group>
    <Form.Group>
      <Form.Input placeholder='2 Wide' width={2} />
      <Form.Input placeholder='12 Wide' width={12} />
      <Form.Input placeholder='2 Wide' width={2} />
    </Form.Group>
    <Form.Group>
      <Form.Input placeholder='8 Wide' width={8} />
      <Form.Input placeholder='6 Wide' width={6} />
      <Form.Input placeholder='2 Wide' width={2} />

      <button>Comprar</button>
    </Form.Group>
  </Form>
  )
}

export default FormExampleWidthField
