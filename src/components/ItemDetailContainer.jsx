import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct} from '../Helpers/ApisFetch'
import ItemDetail from './ItemDetail/ItemDetail'
import Spiner from './Spiner/Spiner'

const ItemDetailContainer = ({detail}) => {

  const [item,setItem]=useState(null)

  const [loading, setLoading]=useState(true)


  

  const {id}=useParams()



  useEffect(()=>{

    getProduct()
    .then((res)=>res.json())
    .then((res)=> setItem(res.find((e)=>e.id === id)  ))
    .catch((err)=>console.log(err))

    .finally(()=>setLoading(false))
  
    // eslint-disable-next-line
  },[])

  return (
    <div>
        {loading?<Spiner />:<ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer