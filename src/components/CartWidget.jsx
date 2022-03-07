
import React from 'react'
import bag from '../img/cart/shop-bag.png'

const CartWidget = () => {
  return (
    <div>
      <img  className='mx-2'  src={bag} width="70px" heigth="80px" alt="bag" />
    </div>
  )
}

export default CartWidget