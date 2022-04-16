import React, { useContext, useEffect, useState }  from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import'./ItemDetail.css'
import 'animate.css'
import { Link, useNavigate } from 'react-router-dom'



const ItemDetail = (props) => {
  const {item}=props

   const [quantity, setQuantity] = useState(1)

  const [isMobile, setIsMobile]=useState(false)

  const history = useNavigate()


  const { addItem, isInCart } = useContext(CartContext)

  



  const handleAdd = ()=>{

  
      const productToCart ={
        id:item.id,
        name:item.name,
        price:item.price,
        categoria:item.category,
        cantidad:quantity
  
      }
    addItem(productToCart)

    
  }
  
  useEffect(()=>{

    setTimeout(()=>{
      
      if(isInCart(item.id)){
        toast.warn('🦄 ya estoy en el carrito !!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
  
      }
    },2000)

// eslint-disable-next-line
  },[])



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
  {item.sale&& <img src={'https://i.postimg.cc/RVmrxcKs/sale.png'} className='opacity-50 w-25 h-25 position-absolute top-50 end-0' alt='...'/>}
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
    {!isInCart(item.id)?
    <ItemCount 

    stock={item.stock} 
    handleAdd={handleAdd} 
    quantity={quantity}
    setQuantity={setQuantity}    
    />: 
    <div >
    <Link to="/" className=" mx-auto btn btn-outline-dark">CONTINUAR COMPRA</Link>
    <Link to="/cart" className="pt-1 btn btn-outline-success">FINALIZAR COMPRA</Link>
    </div>
    }
   <ToastContainer />
    </div>
  </div>
</div>
</div>
</div>

  
  )
}

export default ItemDetail