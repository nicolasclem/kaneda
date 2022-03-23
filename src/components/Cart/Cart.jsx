import React from 'react'
import { Link } from 'react-router-dom'

const cart = () => {
  return (
    <div className="text-center my-5">
        <p>SOY EL CARRITO</p>

        <Link to="/" className="btn btn-outline-info fs-4 p-2">Inicio</Link>

    </div>
  )
}

export default cart