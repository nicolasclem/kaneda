import React, { useEffect, useState } from 'react'
import {Button, Card} from 'react-bootstrap'
import './ItemCount.css'
import productoPrueba from '../../img/imgProduct/fondo1.jpeg'


const ItemCount = (props) => {

const {stock ,initial, onAdd}=props

  const initialDisabled = ()=> valor===0?true:false
  const [valor ,setValor]=useState(initial)
  const [disabled ,setDisabled]=useState(initialDisabled) 

  const incremento = ()=>{
    valor < 1 && setDisabled(false)
    valor < stock ? setValor(valor+1): console.log("NO TENEMOS MAS!!");

  }
  const decremento = ()=>{
    
  valor === 1 && setDisabled(!disabled)
  
  valor > 0 && setValor(valor-1) 
  }

  const enviarCarrito = ()=>{
      onAdd(valor)

    }
    useEffect(()=>{
      console.log(`probando efecto con cambios en valor  ${valor}` )
    },[valor])



  return (
    <div>
        <h2   className='display-2  mb-5 text-center'>Entrega  Clase 5</h2>
      

   
    <Card border="info" style={{ width: '18rem' }} className="m-auto mb-5">
    <Card.Header>Desafio Components II</Card.Header>
    <Card.Body >
        <Card.Title>Nombre del producto </Card.Title>
        <Card.Text>
        descripcion del producto.
        </Card.Text>

        <div className='d-flex justify-content-center mt-3'>
        <img src={productoPrueba} alt=".." height="180px"/>
        </div>

        <div className='d-flex justify-content-between mt-3'>
        <Button variant="info" className='"d-flex align-items-center" btn-contador'onClick={decremento} disabled={disabled}> <span>-</span>  </Button>
        <span className='d-inline m-auto '>{valor}</span>
        <Button variant="info" className='"d-flex align-items-center" btn-contador'  onClick={incremento}>  <span>+</span>  </Button>        
        </div>

        <div className='d-flex justify-content-center mt-3'>
        <Button variant="outline-info" onClick={enviarCarrito} disabled={disabled} >Agregar a Carrtio</Button>
        </div>
    </Card.Body>
    </Card>

  
    </div>
    
  )
}

export default ItemCount