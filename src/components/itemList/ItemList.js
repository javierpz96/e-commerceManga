import Item from './item/Item'
import React,{useState,useEffect} from 'react'
import './item/ItemList.css'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import {data} from '../../data'
import Spinner from '../../components/spinner/spinner'
import {useCart} from "../../Context"


const ItemList = () => {

    

    //Estados

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)


    useEffect(()=>{
        const productos = () =>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(data)
                },2000)
            },[])
        }
        productos().then((item)=>{
            setProductos(item)
            setCargando(false)
            
        })
    })



    return (
        <div className="items">
           
            {cargando ? 
            <div className="spinner-css">
            <Spinner/></div> : 
            
            
            productos.map((items)=>
            
            <div className="ItemList-Container">
                <div key={items.id}>
                    <Link to={`/detail/${items.id}`}>
                        <Item data={items} />
                    </Link>
                </div>
            </div>
            
            )
            }
            
          
        </div>
    )
}

export default ItemList