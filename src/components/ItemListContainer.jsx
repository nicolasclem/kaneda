import { collection , getDocs, query, where, orderBy} from 'firebase/firestore'
import {db} from '../firebase/config'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemList from './ItemList/ItemList'
import Spiner from './Spiner/Spiner'

const ItemListContainer = () => {

  const [productos ,setProductos]=useState([])
  
  const [loading, setLoading]=useState(true)

  const {id} = useParams()

  

    useEffect(()=>{


      const productosRef = collection(db ,'productos');
      const q= id?query(productosRef, where('category','==',id)): query(productosRef,orderBy("category","desc"))

      getDocs(q)
      .then((res)=>{
        setProductos(res.docs.map((doc)=> {
          return{
            id: doc.id,
            ...doc.data()
          }
        })
        )
      })


   
      .finally(()=>setLoading(false))
   
    },[id])

    

    

   

  return (
    <div>
        <div className='mb-5'>
        {loading ? <Spiner />:<ItemList productos={productos}   />}

        
        </div>
    </div>
  )
}

export default ItemListContainer