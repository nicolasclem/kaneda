import React from 'react'

const Reservas = () => {
  return (
    <div className='w-25 m-auto mb-5 '>
        <div  className='d-flex align-items-center flex-column'>
            <h2 className='display-6'>RESERVAS</h2>
            <span className='fs-5'>0266-4112233</span>
        </div>
        <p className='w-10 border-1 border-bottom  mt-3 mb-3'></p>
        <div className='d-flex align-items-center flex-column'>
            <p className='fs-5'>Lunes-Viernes  11 a 14 hs</p>
            <p className='w-75 border-2 border-bottom  m-auto'></p>
            <p className='fs-5 mt-3'>Jueves-Domingo 20-23.45 hs</p>
        </div>
        <div className='d-flex align-items-center flex-column my-4  '>
        <img src={'https://i.postimg.cc/Ssgn3jBW/totoro.png'}  alt='...'className='w-50 m-5 p-1'/>
        </div>
    </div>
  )
}

export default Reservas