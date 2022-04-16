import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

import cartVacio from '../../img/cart/totorollora.gif'

import {TiDeleteOutline} from 'react-icons/ti'
import {MdOutlineArrowRight} from 'react-icons/md'

import './Cart.css'

import Checkout from '../CheckOut/Checkout'


const Cart = () => {

  const {removeItem,clear,cart,pesosTotalCart}= useContext(CartContext)  
  
  const [show, setShow] = useState(false);
  
 

  if (cart.length === 0) {
    return <div className="container  w-50 h-50 m-auto">
              <div className="row">
              <span className='fs-1 col-5 m-2 p-1 cartFont'>CARRITO VACIO</span>
              <Link to="/" className="btn fs-1 col-3 my-2 cartFont"><MdOutlineArrowRight />INICIO</Link>
              <img className='mt-4 col-8' src={cartVacio} alt="..." />
              </div>    
            </div>
}else{
  return (
    <div className="w-50 text-center mx-auto mt-5">

    <table className="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio Unitario</th>
      <th scope="col">total</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    { cart.map((item)=>(

    <tr key={item.id}>
      <th scope="row">{item.name}</th>
      
      <td>{item.cantidad}</td>
      <td>$ {item.price}</td>
      <td>$ {item.cantidad * item.price}</td>
      <td ><span onClick={()=>removeItem(item.id)}><TiDeleteOutline className='fs-3 text-danger' /></span></td>
    </tr>

    ))
    }
    </tbody>

    </table>
        <hr/>
      <div className='fs-4 mx-auto'>
      <span className='fw-bolder'>TOTAL DE COMPRA : $ {pesosTotalCart()}</span>
      </div>
      <div>
        <button className='btn btn-outline-danger' onClick={clear}>Vaciar Carrito</button>
        <button className='btn btn-outline-success' onClick={()=>setShow(!show)}>PAGAR</button>
      </div>

      <Link to="/" className="btn fs-5 cartFont">Quiero Mas!</Link>

      <Checkout  show={show} setShow={setShow} />
    </div>
  )
}
}
export default Cart