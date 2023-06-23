import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = (props) => {
    const [cartData, setCartData] = useState([])
    const addToCart = (data) => {
        setCartData([...cartData, data])
    }

    const removeFromCart = (indexValue) => {
        const newCartData = cartData.filter((cartData, title) => title !== indexValue)
        setCartData(newCartData)
    }
    return(  
        <CartContext.Provider value={{cartData, addToCart, removeFromCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}