import { createContext,useContext,useEffect,useReducer } from "react";
import { useProductContext } from "./productContext";
//benifit of default export we can import with any name
import reducer from '../Reducer/FilterReducer'
const FilterContext = createContext();
const initialState={
    filter_products:[],
    all_products:[],
    grid_view:false,
    sorting_value:"lowest",
    filters:{
        text:"",
    }
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
    
    const sorting =(val)=>{
        dispatch({type:"GET_SORTVALUE",payload:val})
    }

    const updateFilterValue=(e)=>{
        let name=e.target.name
        let val=e.target.value;
        return dispatch({type:"Update_Filters_Value",payload:{name,val}})
    }

    useEffect(()=>{
        dispatch({type:"Filter_Products"})
        //note - after filter product we want sorting call again so we put in same use effect 
        dispatch({type:"SORTING_PRODUCTS"});
    },[state.sorting_value,state.filters])

    useEffect(()=>{
dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
},[products])

return (
    <FilterContext.Provider value={{...state,set_grid,set_list,sorting,updateFilterValue}}>
        {children}
    </FilterContext.Provider>
)
}
export const useFilterContext=()=>{
return useContext(FilterContext);
}
