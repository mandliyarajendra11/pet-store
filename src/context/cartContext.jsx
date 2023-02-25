import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/CartReducer'
const CartContext=createContext();

const getLocalCartData=()=>{
    let localCartData=localStorage.getItem("thapaCart");
    if(localCartData===[] || undefined)return [];
    else
    return JSON.parse(localCartData);
}
const CartProvider=({children})=>{
    const initialState={
        cart:getLocalCartData(),
        total_item:"",
        total_amount:"",
        shipping_fee:5000,
    }
    const [state,dispatch]=useReducer(reducer,initialState);

    const addToCart=(id,color,amount,product,name)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product,name}})
    }
    const SetIncrement=(id)=>{
        dispatch({type:"SET_INC",payload:id})
    }
    
    const SetDecrement=(id)=>{
        dispatch({type:"SET_DEC",payload:id})

    }
    const RemoveCart=(id)=>{
        dispatch({type:"REMOVE",payload:id})
    }
    const ClearCart=()=>{
        dispatch({type:"CLEAR"})
    }
    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"})
        localStorage.setItem("thapaCart", JSON.stringify(state.cart));
    },[state.cart])

    return <CartContext.Provider value={{...state,addToCart,RemoveCart,ClearCart,SetDecrement,SetIncrement}}>{children}</CartContext.Provider>
}
const useCartContext=()=>{
    return useContext(CartContext);
}
export {CartProvider,useCartContext};