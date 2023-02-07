
const ProductReducer=(state,action)=>
{
    if(action.type==="LOADING")
        return {
            ...state,
            isLoading:true,
        }
    if(action.type==="MY_API_DATA"){
        const feature=action.payload.filter((e)=>e.featured===true);
        
    return {
        ...state,
        isLoading:false,
        products: action.payload,
        featureProducts:feature,
    }
}
    if(action.type==="API_ERROR")
    return {
        ...state,
        isLoading:false,
        isError:true
    }
    return state
}
export default ProductReducer