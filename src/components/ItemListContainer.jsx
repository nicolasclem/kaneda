import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount/ItemCount'

const ItemListContainer = () => {

    const greeting="HoLa MuNdO"

    const onAdd= valor=>{
      console.log(`hola me voy al  carrito  soy el PRODUCTO XX  cantidades: ${valor}`);
    }
    
  return (
    <div>
        <Item greeting={greeting}/>
        <ItemCount stock={8} initial={0} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer