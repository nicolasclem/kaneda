import React from 'react'
import Item from './Item'

const ItemListContainer = () => {

    let greeting="HoLa MuNdO"
    
  return (
    <div>
        <Item greeting={greeting}/>
    </div>
  )
}

export default ItemListContainer