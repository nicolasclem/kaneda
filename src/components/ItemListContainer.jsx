import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../Helpers/ApisFetch'
import ItemList from './ItemList/ItemList'
import Spiner from './Spiner/Spiner'

const ItemListContainer = () => {

  const [productos ,setProductos]=useState([])
  
  const [loading, setLoading]=useState(true)

  const {id} = useParams()

  

    useEffect(()=>{

      getProduct().then((res)=>res.json())
      .then( 
        (res)=>{
          !id?setProductos(res): setProductos(res.filter(item=>item.category === id))
        }  
      )
      .catch(
        (err)=>console.log(err)
      )
      .finally(()=>setLoading(false))
      
    },[id])

    

    

   

  return (
    <div>
        <div>
        {loading ? <Spiner />:<ItemList productos={productos}   />}

        
        </div>
    </div>
  )
}

export default ItemListContainer