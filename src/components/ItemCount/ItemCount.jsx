import React, {useState  } from 'react'
import {Button} from 'react-bootstrap'
import './ItemCount.css'



const ItemCount = (props) => {

const {stock , handleAdd,  setQuantity, quantity}=props
 



  const initialDisabled = ()=> quantity===0?true:false



  const [disabled ,setDisabled]=useState( initialDisabled) 


  const incremento = ()=>{
    quantity < 1 && setDisabled(false)
    quantity < stock && setQuantity(quantity+1);

  }
  const decremento = ()=>{
    
  quantity === 1 && setDisabled(!disabled)
  
  quantity > 0 && setQuantity(quantity-1) 
  }




  return (
    <div>
      
        <div className='d-flex justify-content-evenly mt-3'>
        <Button variant="dark" className='"d-flex align-items-center" btn-contador fs-6'onClick={decremento} disabled={disabled}> <span>-</span>  </Button>
        <span className='d-inline m-auto fs-5'>{quantity}</span>
        <Button variant="dark" className='"d-flex align-items-center" btn-contador fs-6'  onClick={incremento}>  <span>+</span>  </Button>        
        </div>

        <div className='d-flex justify-content-center mt-3'>
        <Button variant="outline-dark" onClick={handleAdd} disabled={disabled}>Agregar a Carrtio</Button>
        </div>
        
       
  
    </div>
    
  )
}

export default ItemCount