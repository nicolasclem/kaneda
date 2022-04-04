
import { toast } from 'react-toastify';
import {collection, addDoc, Timestamp,writeBatch, where ,documentId,query, getDocs} from 'firebase/firestore'
import {db} from '../firebase/config'







export const generateOrder = async (values,cart,pesosTotalCart,setOrderid,handleClose,clear,navigate) =>{
    const order = {
      buyer:values,
      items:cart,
      total:pesosTotalCart(),
      time: Timestamp.fromDate(new Date())
  }
  const batch = writeBatch(db)
  const orderRef= collection (db, 'orders')
  const productoRef= collection(db, 'productos')

  const q = query(productoRef, where(documentId(),'in',cart.map(x=>x.id)))
  
  const productos= await getDocs(q)

  const stockZero = []

  productos.docs.forEach(doc=>{
      const itemToUpdate =cart.find(x=> x.id === doc.id)
      
      if(doc.data().stock >= itemToUpdate.cantidad){
        batch.update(doc.ref,{
          stock:doc.data().stock -itemToUpdate.cantidad
        })
      } else{
        stockZero.push(itemToUpdate)
      }
  })
    if(stockZero.length === 0){
      addDoc(orderRef,order)
        .then(el=>{
          batch.commit()
          setOrderid(el.id)
          setTimeout(()=>{
              navigate('/')
              clear()
          },5000)
        })

    }else{
      stockZero.forEach( x =>{        
          toast.warn(`🦄 Producto :  ${x.name}  SIN STOCK`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    
          })
          setTimeout(()=>{
            
            handleClose()
          },6000)
    }
  }