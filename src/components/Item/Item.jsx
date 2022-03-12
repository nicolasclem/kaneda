import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = (props) => {


  const { onAdd , producto, detailProduct}=props

  const detailItem=()=>{
    detailProduct(producto.id)
  }
 
  return (
    <div className='m-5'>
       <article className="card mt-5 ">
          <img className="card__image" src={producto.img} alt="..." />
          <div className="card__data">
            <div className="card__info">
              <h2 >{producto.name}</h2>
              <p >{producto.descripcion}</p>
              
            </div>
            <ItemCount stock={8} initial={1} onAdd={onAdd} producto={producto}/>
            <h3 className="card__price fs-5">${producto.price}</h3>
            <button className="card__add" onClick={detailItem}>+</button>
          </div>
        </article>
    </div>
  )
}

export default Item