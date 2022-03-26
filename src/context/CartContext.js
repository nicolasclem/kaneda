import { createContext,useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children})=>{

    const [cart , setCart ]=useState([])



    const addItem = (item) => {
      setCart( [...cart, item] )

    }

    const isInCart = (id) => {
      return cart.some((producto) => producto.id === id)
    }

    const removeItem = (id)=>{

        setCart(cart.filter(item=>item.id!==id) )
    }
    const clear = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            removeItem,
            clear

          
        }}>
            {children}
        </CartContext.Provider>
    )


}