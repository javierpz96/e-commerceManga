import Item from './item/Item'
import ItemCount from '../button/ItemCount'
import '../Imagenes/i1.jpg'
import React,{useState,useEffect} from 'react'
import './item/ItemList.css'

const data = [
    {   id:1,
        nombre:'La Chica A La Orilla Del Mar',
        descripcion:'La historia de dos adolescentes que tienen sexo sin amor para llegar a sentir algo, se mezcla con el desinterés de los adultos, la muerte de un miembro de la familia y unos pasajes con la belleza y el vuelo poético al que nos tiene acostumbrados este aclamado autor.',
        precio: 990,
        idioma: 'Castellano',
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/399/159/products/lachicaalaorilladelmar-cf770bf22551ccd45316220794913375-480-0.jpg'
        
    },
    { 
        id:2,
        nombre:'El Fin Del Mundo Y Antes Del Amanecer',
        descripcion: 'MAGNÍFICO RECOPILATORIO DE HISTORIAS CORTAS DEL GENIAL INIO ASANO Una estudiante de instituto que quiere dejar su pequeña ciudad, un oficinista de mediana edad que se queda en paro y se busca a sí mismo, una chica que se replantea su vida varios años tras acabar su adolescencia, un mangaka que vuelve a su pueblo natal...',
        precio: 1500,
        idioma: 'Castellano',
        imagen: 'https://www.normaeditorial.com/upload/media/albumes/0001/06/thumb_5041_albumes_big.jpeg'
    },
    {
        id:3,
        nombre: 'El Barrio De La Luz',
        descripcion : 'Los vecinos del Barrio de la luz pueden parecer personas cualquiera, como tú y como yo. Y en cierto modo lo son. Sin embargo, si miras a través de los ojos de Inio Asano, sus historias resultarán ser más conmovedoras y únicas de lo que a priori puede parecer. Otro genial recopilatorio de historias cortas del autor que mejor capta las inquietudes de las nuevas generaciones. ',
        precio: '1360',
        idioma: 'Castellano',
        imagen: 'https://www.normaeditorial.com/upload/media/albumes/0001/06/f9e0d6b000c4ad5bd93bb485c05ce4d32aa8c7d3.jpeg'
    }
]



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
        <div className=" d-flex ">
            {cargando ? <h2>Cargando.....</h2> : 
            
            
            productos.map((items)=>
            
            <div className='border border-secondary card m-4'>
                <div className="card-body">
                    <Item  key={items.key} nombre={items.nombre} descripcion ={items.descripcion} precio={items.precio} imagen={items.imagen} />
                </div>
            </div>
            
            )
            }
            
          
        </div>
    )
}

export default ItemList