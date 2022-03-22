import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
    const Navigate=useNavigate()

    useEffect(()=>{
      setTimeout(()=>{           
        Navigate(-1)
      },3000)
      // eslint-disable-next-line
    },[])
 
  return (
    <div className='ConteinerError'>
    <div className="error">404</div>
    <br /><br />
    <span className="info">File not found</span>
    

    </div>
  )
}

export default Error404