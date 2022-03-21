import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
    const Navigate=useNavigate()

    const backHome=()=>{
        setTimeout(()=>{           
            Navigate(-1)
        },3000)
    }
    backHome()
  return (
    <div className='ConteinerError'>
    <div className="error">404</div>
    <br /><br />
    <span className="info">File not found</span>
    

    </div>
  )
}

export default Error404