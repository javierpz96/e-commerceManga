// import React,{ useState } from 'react'
// import faker from "faker"

// const UserList = () => {

//     //Creamos el useState que va tener
//     //users = estado actual
//     //setUser = lo que lo modifica
//     //El useState va empezar con un array vacio

//     const [users,setUser] = useState([])

//     //Vamos a crear una funcion flecha
//     //que va generar newUser 
//     //y este newUser va ser un objeto
//     //Que lo vamos a crear con los comandos de faker
//     //Va tener un nombre random y un uid Random


//     //Agregar nuevo usuario!

//     const handleAddUser = () =>{
//         const newUser = {

//             username: faker.internet.userName(),
//             avatar: faker.internet.avatar(),
//         }

//         //Usamos el sprade operator para que el valor que
//         //generamos se guarde!

//         setUser([...users,newUser])
//     }

//     //Remover usuario

//     const handleRemoveUser = (uid) =>{
//         const newUsers = users.filter((user)=> user.uid !== uid)
//         setUser(newUsers)
//     }




//     //Esto lo que va hacer el users.map, va hacer un mapeo
//     //en users y va generar el .name y el uid random
//     //que esta en newUser! 

//     return ( 
//         <>
//         <ul>
//             {users.map((pepito)=>
//             <li key={pepito.uuid}>{pepito.username} {pepito.avatar}</li>)}
            
            
//         </ul>
//         <button onClick={handleAddUser}>Agregar Usuario Random</button>
//         <button onClick={handleRemoveUser} >Remover usuario</button>
//         </>
//      );
// }
 
// export default UserList

// import React,{useState} from 'react'
// import './use.css'



// const Test = () => {
    
//     const [counter,setCounter] = useState(0)

//     const increment=() =>{
//         setCounter(counter+1)
//     }


//     return ( 
//         <>
//             <div className="contenedor">
//                 <p >{counter}</p>
//                 <button onClick={increment} >Incrementar</button>
//             </div>
//         </>
//      );
// }
 
// export default Test;

// import React,{useState} from 'react'
// import './use.css'


// const ConditionalApp = () => {

//     const [condition,setCondition] = useState(true) 

//     return (
//         <div>
//             <button onClick={()=>setCondition(!condition)}>
//                 Toggle
//             </button>
//             {
//                 condition
//                 ? <h1>show mensagge</h1>
//                 : null
//             }
            
//         </div>
//     )
// }

// export default ConditionalApp

// import React,{useState} from 'react'


// const ErrorApp = () => {

//     const[error,setError] = useState("")

//     return (
//         <div>

//             <button onClick={() => setError('Error con la API')} >
//                 Error
//             </button>

//             <button onClick={() => setError('Credenciales incorrectas')} >
//                 another error
//             </button>

//             <button onClick={() => setError('nice')} >
//                 proceso exitoso
//             </button>

//             { error && <h1>{error}</h1>}

            
//         </div>
//     )
// }

// export default ErrorApp

// import React,{useState} from 'react'

// const ProductApp = () => {

//     const initialProduct = {
//         title: "titulo",
//         description: "description"
//     }

//     const[product,setProduct] = useState(initialProduct)


//     const updateProducto = (property,value) =>{
//         setProduct({
//             ...product,
//             [property]: value
//         })
//     }

//     return (
//         <div>
//             <button onClick={()=>updateProducto("title","nuevo titulo")} >update</button>
//             <h1>{product.title}</h1>
//             <h1>{product.description}</h1>

//             <pre>{JSON.stringify(product,null, 2)}</pre>

//         </div>
//     )
// }

// export default ProductApp


// import React,{useState} from 'react'

// const ShoppingCart = () => {

//     const initialCart = [
//         {id:1, title: 'product', description: 'Desc'},
//         {id:2, title: 'product 2', description: 'Desc 2'},
//         {id:3, title: 'product 3', description: 'Desc 3'},
//     ]

//     const[cart,setCart] = useState(initialCart)

//     const deleteProduct=(productId) =>{
//         const changedCart = cart.filter(product => product.id !== productId)
//         setCart(changedCart)
//     }

//     const addProduct = (newProduct) =>{
//         newProduct.id = Date.now()
        
//         const changedCart =  [
//             ...cart,newProduct,
//         ]

//         setCart(changedCart)
//     }

//     const updateProduct = (editProduct) =>{
//         const changedCart = cart.map(product => (
//             product.id === editProduct.id
//             ? editProduct
//             : product
//         ))
//         setCart(changedCart)
//     }



//     return (


//         <div>

//             <button onClick={()=> updateProduct({id:1,title:"nuevo titulo",description:"nuevito"})} >update</button>

//             <button onClick={()=> addProduct({title:"nuevo titulo",description:"nuevito"})} >Agregar</button>

//             <button onClick={()=>deleteProduct(2)} >
//                     delete
//             </button>

//             {cart.map(product =>(
//                 <div key={product.id} >
//                     <h1>{product.title}</h1>
//                     <h1>{product.description}</h1>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default ShoppingCart

// useEffect

// import React,{useState,useEffect} from 'react'

// const LifeCycle = () => {

//     const[counter1,setCounter1] = useState(0)
//     const[counter2,setCounter2] = useState(0)


//     useEffect(()=>{
//         console.log('useEffect no dependency')
//     })

//     useEffect(()=>{
//         console.log('useEffect []')
//     },[])

//     useEffect(()=>{
//         console.log('useEffect [counter1]')
//     },[counter1])

//     useEffect(()=>{
//         console.log('useEffect [counter2]')
//     },[counter2])

//     const sumar= () =>{
//         setCounter1(counter1+1)
//     }
    

//     const sumar2= () =>{
//         setCounter2(counter2+1)
//     }

//     return (
//         <div>
//             <h1>Clicks c1 {counter1}</h1>
//             <h1>Clicks c2 {counter2}</h1>
//             <button onClick={sumar} >
//                 increment c1
//             </button>
//             <button onClick={sumar2} >
//                 increment c2
//             </button>
//         </div>
//     )
// }

// export default LifeCycle

// import React,{useState,useEffect} from 'react'
// import getUser from '../helpers/getUser'

// const FetchCard = () => {

//     const initialUser= {
//         name:"Luis",
//         email:"correo@correo.com"
//     }

//     const[user,setUser] = useState(initialUser)

//     const [posts,setsPosts] = useState(initialPosts)

//     const initialPosts

//     const updateUser = () =>{
//         getUser()
//             .then((newUser)=>{
//                 setUser(newUser)
//             })
//     }

//     useEffect(()=>{
//         updateUser()
//     },[])

    
//     return (
//         <div>
//             <button onClick={updateUser} >
//                 Another user
//             </button>

//             <h1>{user.name}</h1>
//             <h1>{user.email}</h1>
//         </div>
//     )
// }

// export default FetchCard
