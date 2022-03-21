import React, {useState } from 'react'
import {Button} from 'react-bootstrap'
import './ItemCount.css'



const ItemCount = (props) => {

const {stock ,initial, onAdd,item}=props
 

  const initialDisabled = ()=> valor===0?true:false
  const [valor ,setValor]=useState(initial)
  const [disabled ,setDisabled]=useState( initialDisabled) 

  const incremento = ()=>{
    valor < 1 && setDisabled(false)
    valor < stock ? setValor(valor+1): console.log("NO TENEMOS MAS!!");

  }
  const decremento = ()=>{
    
  valor === 1 && setDisabled(!disabled)
  
  valor > 0 && setValor(valor-1) 
  }

  const enviarCarrito = ()=>{
      onAdd(item.name,valor)
   
    }



  return (
    <div>
      
        <div className='d-flex justify-content-evenly mt-3'>
        <Button variant="dark" className='"d-flex align-items-center" btn-contador fs-6'onClick={decremento} disabled={disabled}> <span>-</span>  </Button>
        <span className='d-inline m-auto fs-5'>{valor}</span>
        <Button variant="dark" className='"d-flex align-items-center" btn-contador fs-6'  onClick={incremento}>  <span>+</span>  </Button>        
        </div>

        <div className='d-flex justify-content-center mt-3'>
        <Button variant="outline-dark" onClick={enviarCarrito} disabled={disabled} >Agregar a Carrtio</Button>
        </div>
   
  
    </div>
    
  )
}

export default ItemCount