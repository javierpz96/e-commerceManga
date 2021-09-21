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
