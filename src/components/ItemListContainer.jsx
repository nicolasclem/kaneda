import React, { useEffect, useState } from 'react'
//import { getProductId } from '../Helpers/ApisFetch'
//import ItemDetailContainer from './ItemDetailContainer'
//import ItemCount from './ItemCount/ItemCount'
import ItemList from './ItemList/ItemList'
import Spiner from './Spiner/Spiner'

const ItemListContainer = () => {

  const [productos ,setProductos]=useState([])
  
  const [loading, setLoading]=useState(true)


    let data = [
      {
        id : 1,
        name : "ROLL KANEDA",
        descripcion : "Lorem ipsum dolor sit amet.",
        img:"./img/menu6.png",
        price:500

      },
      {
        id : 2,
        name : "ROLL CALIFORNIA",
        descripcion : "Lorem ipsum dolor sit amet.",
        img:"./img/menu4.png",
        price:501
      },
      {
        id : 3,
        name : "ROLL SALMON ",
        descripcion : "Lorem ipsum dolor sit amet.",
        img:"./img/menu5.png",
        price:502
      },
      {
        id :4,
        name : "ONIGIRI",
        descripcion : "Lorem ipsum dolor sit amet.",
        img:"./img/menu7.png",
        price:503
      },
      {
        id :5,
        name :"ROLL PRIMAVERA",
        descripcion : "Lorem ipsum dolor sit amet.",
        img:"./img/menu11.png",
        price:503
      }


    ]

    const getData = new Promise((res,rej)=>{

      if(data){
        setTimeout(()=>{
          res(data)
        },2000)
      }
      else {
        rej(" ocurrio un error")
      }

    })


    useEffect(()=>{

      getData
      .then( 
        (res)=>setProductos(res) 
      )
      .catch(
        (err)=>console.log(err)
      )
      .finally(()=>setLoading(false))
      // eslint-disable-next-line
    },[])

    

    const onAdd= (name,valor)=>{
      console.log(`hola me voy al  carrito  soy : ${name} cantidades: ${valor}`);
    }

   

  return (
    <div>
        <div>
        {loading ? <Spiner />:<ItemList productos={productos}  onAdd={onAdd}  />}

        
        </div>
    </div>
  )
}

export default ItemListContainer