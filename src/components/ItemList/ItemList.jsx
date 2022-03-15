import React, { useEffect, useState } from 'react'
import { getProductId } from '../../Helpers/ApisFetch'
import Item from '../Item/Item'
import ItemDetailContainer from '../ItemDetailContainer'
import Totoro from '../Totoro'



const ItemList = (props) => {
  const {productos,onAdd }=props

  const [detail ,setDetail]=useState([])
  const [detailID ,setDetailID]=useState('')

  const [totoro ,setTotoro]=useState(true)

  


  const detailProduct = (id)=>{
    setDetailID(id)
  }

  useEffect(()=>{
  console.log(`Clikea info espera 2 segundos ..llega la info del producto con id:  ${detailID || "todavia no hay click"}`);
  if(detailID){
  setTimeout(()=> {  
    getProductId(detailID)
    .then((res)=>res.json())
    .then(res=>setDetail(res))
    .catch((err)=>console.log(err))
    .finally(()=>setTotoro(false))
    },2000)}else{
      console.log("Nadie  clickeo en info");
    }  
  },[detailID])
  
  return (
    <div>
      <h2 className="display-2 text-center mt-3 mb-5">Menu</h2>
        <div className="d-flex flex-wrap justify-content-around">
            {productos.map((producto)=> <Item  producto={producto} key={producto.id} onAdd={onAdd}  detailProduct={ detailProduct}/>)}
        </div>
        {totoro?<Totoro />:<ItemDetailContainer    onAdd={onAdd} detail={detail} />}
      </div>
        
  )
}

export default ItemList