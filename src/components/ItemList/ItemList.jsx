import React from 'react'

import Item from '../Item/Item'




const ItemList = (props) => {

  const {productos}=props
  
  return (
    <div>
      <h2 className="display-4 text-center my-1">Menu</h2>
        <div className="d-flex flex-wrap justify-content-around">
            {productos.map((producto)=> <Item  producto={producto} key={producto.id} />)}
      </div>
      </div>
        
  )
}

export default ItemList