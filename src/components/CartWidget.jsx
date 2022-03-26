
import React from 'react'
import bag from '../img/cart/shop-bag.png'

const CartWidget = () => {
  return (
    <div className='me-4'>
      <img  className='mx-2'  src={bag} width="70px" heigth="80px" alt="bag" />
      <span className="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger">10</span>
    </div>
  )
}

export default CartWidget