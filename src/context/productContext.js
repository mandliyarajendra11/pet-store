import {useEffect,createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";
import axios from "axios";
 
const myContext=createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
//vo product jinko home page me dalna hai unki value true ha feature product me 
    featureProducts:[],
    SingleLoading:false,
    SingleProducts:{}
}
 const Provider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
   
   
    const getProduct=async(url)=>{
        dispatch({type:"LOADING"})
        try{
    const res=await axios.get(url);
const products=await res.data;
dispatch({type:"MY_API_DATA",payload:products});
    }catch(error){
        dispatch({type:"API_ERROR"})
    }
}

const getSingleProduct=async(url)=>{
    dispatch({type:"single_data_loading"})
    try{
    const res=await axios.get(url);
    const Singleproducts=await res.data;
    dispatch({type:"Set_Single_Product",payload:Singleproducts})
    }
    catch(error){
        dispatch({type:"Set_Single_Error"});
    }
}

useEffect(()=>{

    getProduct(API)

},[])

//always write children
return <myContext.Provider value={{...state,getSingleProduct}}>{children}</myContext.Provider>
}
const useProductContext=()=>{
    return useContext(myContext)
}
export {Provider,myContext,useProductContext}