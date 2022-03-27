import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

import cartVacio from '../../img/cart/totorollora.gif'

import {TiDeleteOutline} from 'react-icons/ti'
import {MdOutlineArrowRight} from 'react-icons/md'

import './Cart.css'
import { Button, Modal } from 'react-bootstrap'


const Cart = () => {

  const {removeItem,clear,cart,pesosTotalCart}= useContext(CartContext)  
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const Navigate=useNavigate()
  
  const chekPostre = ()=>{
    if(cart.some((item)=>item.categoria==='postre')){
      pagar()
    }else{
      handleShow()

    }
  }
  const pagar=()=>{

    const prueba = cart.map((x)=>{
      return({
        nombre:x.name,
        totalItem: x.price * x.cantidad
      })
    })
    
    console.log(`le pego a la api de mercado-pago ======> 
    ${JSON.stringify(prueba)}      
    total $ ${pesosTotalCart()}`);

    handleClose()
    clear()
    Navigate('/')
  }


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
      {/* agregar contador para setear cantidad desde la vista del Cart */}
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
        <button className='btn btn-outline-success' onClick={chekPostre}>PAGAR</button>
      </div>

      <Link to="/" className="btn fs-5 cartFont">Quiero Mas!</Link>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='cartFont  mx-auto display-4'>Kaneda</Modal.Title>
        </Modal.Header>
        <Modal.Body className='cartFont mx-auto fs-3'>
         NO TE OLVIDES EL POSTRE
        <Button className='cartFont   btn-outline-dark text-white ms-4 p-2' as={Link}to="/category/postre">Buscar postre</Button>
        </Modal.Body>
        <Modal.Footer className='cartFont mx-auto fs-3'>
          NO QUIERO POSTRE !  <Button variant="success cartFont ms-4 p-2" onClick={pagar}>PAGAR</Button>
        </Modal.Footer>
      </Modal>
 

    </div>
  )
}
}
export default Cart