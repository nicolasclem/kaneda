import React from 'react'
import Item from '../Item/Item'



const ItemList = (props) => {
  const {productos,onAdd , detailProduct}=props
  
  return (
    <div>
      <h2 className="display-2 text-center mt-3 mb-5">Menu</h2>
        <div className="d-flex flex-wrap justify-content-around">
            {productos.map((producto)=> <Item  producto={producto} key={producto.id} onAdd={onAdd}  detailProduct={ detailProduct}/>)}
        </div>
      </div>
        
 
  )
}

export default ItemList