import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {


  const {  producto}=props

  
 
  return (
    <div className='m-5'>
       <article className="card mt-5 w-75 ">
          <img className="card__image " src={producto.img} alt="..." />
          <div className="card__data">
            <div className="card__info">
              <h2 >{producto.name}</h2>
              <p >{producto.descripcion}</p>
              
            </div>
            <span>Categoria: {producto.category}</span>
            <h3 className="card__price fs-5">${producto.price}</h3>
            {producto.stock > 0 ?
            <Link to={`/item/${producto.id}`}><button className="card__add fs-6">Info</button></Link>
            :
            <img src={'https://i.postimg.cc/RhkDSJPT/soldOut.png'} className='opacity-50 w-100  position-absolute top-50 end-0' alt='...'/>
            }
          </div>
        </article>
    </div>
  )
}

export default Item