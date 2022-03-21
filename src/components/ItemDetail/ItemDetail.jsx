import React, { useEffect, useState }  from 'react'
import ItemCount from '../ItemCount/ItemCount'
import'./ItemDetail.css'
import 'animate.css'
import { useNavigate } from 'react-router-dom'



const ItemDetail = (props) => {
  const {item,onAdd}=props

  const [isMobile, setIsMobile]=useState(false)

  const history = useNavigate()

  useEffect(()=>{

    const CheckMobile =()=>{
      if (window.visualViewport.width <= 1024){
           setIsMobile(true)
      }else{
        setIsMobile(false)
      }
    }
    CheckMobile()

    window.addEventListener('resize',CheckMobile)

    return ()=>{
      window.removeEventListener('resize',CheckMobile)
    }
  },[])

  return (
    <div className="d-flex justify-content-center mb-5  ml-4 animate__animated animate__fadeInLeft animate__slow">
    {!isMobile&&<img src={'https://i.postimg.cc/qB6L9Fxh/totoro2.png'} className='w-25 mh-25 mr-5' alt='...'/>}  
    
  <div className="container card w-50 mh-50 mt-5 shadow p-3 mb-5 bg-body rounded bg-light" >
  <div className="row mt-5">
  <div className=" col-4 h-100 bg-transparent position-relative ">
  <img src={item.img} className="card-img-top position-absolute top-25 start-50 translate-middle " alt="..."/>
  </div>
  <div className="col-6 card-body">
    <button className="position-absolute  end-0 translate-middle  backbutton " onClick={()=>history(-1)}>Volver</button>
    <h5 className="card-title fs-3">{item.name}</h5> 
    <hr></hr>
    <p className="card-text fs2 fst-italic">{item.descripcion}</p>
    <p className='fs-4'>${item.price}</p>
    <p className='fs-6'>Stock :{item.stock}</p>
    <p className='fs-6'>Categoria :{item.category}</p>
    <div className='w-50 '>
    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} item={item}/>
    </div>
  </div>
</div>
</div>
</div>

  
  )
}

export default ItemDetail