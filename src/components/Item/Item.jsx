import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = (props) => {


  const { onAdd , producto, detailProduct}=props

  const detailItem=()=>{
    detailProduct(producto.id,producto.name)


  }
 
  return (
    <div className='m-5'>
       <article className="card mt-5 ">
          <img className="card__image" src={producto.img} alt="..." />
          <div className="card__data">
            <div className="card__info">
              <h2 className='fs-5' >{producto.name}</h2>
              <p className='fs-6'>{producto.descripcion}</p>
              
            </div>
            <ItemCount stock={8} initial={1} onAdd={onAdd} producto={producto}/>
            <h3 className="card__price fs-5">${producto.price}</h3>
            <button className="card__add fs-6" onClick={detailItem}>Info</button>
          </div>
        </article>
    </div>
  )
}

export default Item