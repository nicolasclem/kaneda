import { doc,getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/config'

import ItemDetail from './ItemDetail/ItemDetail'
import Spiner from './Spiner/Spiner'

const ItemDetailContainer = ({detail}) => {

  const [item,setItem]=useState(null)

  const [loading, setLoading]=useState(true)


  

  const {id}=useParams()



  useEffect(()=>{


    const itemRef =doc(db,'productos',id)

    getDoc(itemRef)
    .then((res)=>{
      setItem({
          id: res.id,
          ...res.data()
        })
      })
  
   

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