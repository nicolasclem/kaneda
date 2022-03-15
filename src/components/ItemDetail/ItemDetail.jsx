import React  from 'react'
import 'animate.css'



const ItemDetail = (props) => {
  const {detail}=props

  const prueba=()=>{
    console.log(`Envio al carrito  el producto ${detail.name}  con un valor de $ ${detail.price} `);
  }
  return (
    <div className="d-flex justify-content-center mb-5  ml-4 animate__animated animate__fadeInLeft animate__slow">
    <img src='./img/totoro2.png' className='w-25 mh-25 mr-5' alt='...'/>  
    
  <div className="container card w-50 mh-50 mt-5 shadow p-3 mb-5 bg-body rounded bg-light" >
  <div className="row mt-5">
  <div className=" col-4 h-100 bg-transparent position-relative ">
  <img src={detail.img} className="card-img-top position-absolute top-25 start-50 translate-middle " alt="..."/>
  </div>
  <div className="col-6 card-body">
    <h5 className="card-title fs-3">{detail.name}</h5>
    <hr></hr>
    <p className="card-text fs2 fst-italic">{detail.descripcion}</p>
    <p className='fs-4'>${detail.price}</p>
    <div className='w-50 '>
      <button className='btn btn-outline-dark fs-3' onClick={prueba}>Comprar</button>
    </div>
  </div>
</div>
</div>
</div>

  
  )
}

export default ItemDetail