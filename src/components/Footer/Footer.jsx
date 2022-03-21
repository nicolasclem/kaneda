import React from 'react'

const Footer = () => {
  return (
   
    <div className="hstack gap-3  bg-dark   pb-2 px-5 text-white-50 position-absolute bottom-n2 w-100 fst-italic">
    <div className="bg-dark  ">
        KANEDA
    </div>
    <div className="bg-dark position-absolute bottom-0 ">
    <span>&copy; NC</span>
    </div>
    <div className="bg-dark  ms-auto">
        <div className="vstack gap-2 ">
                <div className="bg-dark m-auto ">CONTACTO</div>
                <p className='w-75 border-2 border-bottom  m-auto'></p>
                <div className="hstack gap-3">
                <div className="bg-dark">Instagram</div>
                <div className="vr"></div>
                <div className="bg-dark">Facebook</div>
                </div>
        </div>
    </div>
    <div className="vr"></div>
    <div className="bg-dark ">
        <div className="vstack gap-1 m-auto">
            <div className="bg-dark "></div>            
        </div>
     </div>
     </div>
    
  )
}

export default Footer