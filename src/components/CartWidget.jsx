
import React, { useContext } from 'react'
import bag from '../img/cart/shop-bag.png'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const {cantidadTotalCart,cart}=useContext(CartContext)
  return (
    <div className='me-4'>
      <img  className='mx-2'  src={bag} width="70px" heigth="80px" alt="bag" />
      {cart.length !==0?<span className="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger">
        {cantidadTotalCart()}
        </span>:''}
    </div>
  )
}

export default CartWidget