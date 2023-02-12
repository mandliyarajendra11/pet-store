import { createContext,useContext,useEffect,useReducer } from "react";
import { useProductContext } from "./productContext";
//benifit of default export we can import with any name
import reducer from '../Reducer/FilterReducer'
const FilterContext = createContext();
const initialState={
    filter_products:[],
    all_products:[],
    grid_view:false,
    sorting_value:"lowest"
}
export const FilterContextProvider=({children})=>{
    const {products}=useProductContext();

    const [state,dispatch]=useReducer(reducer,initialState);

    const set_grid=()=>{
        dispatch({type:"SET_GRIDVIEW"})
    }
    
    
    const set_list=()=>{
        dispatch({type:"SET_LISTVIEW"})
    }
    
    const sorting =()=>{
        dispatch({type:"GET_SORTVALUE"})
    }
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS",payload:products});
    },[state.sorting_value])

    useEffect(()=>{
dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
},[products])

return (
    <FilterContext.Provider value={{...state,set_grid,set_list,sorting}}>
        {children}
    </FilterContext.Provider>
)
}
export const useFilterContext=()=>{
return useContext(FilterContext);
}
