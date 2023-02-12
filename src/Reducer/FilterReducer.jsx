const filterReducer=(state,action)=>{

switch(action.type){

    // case "Loading"
    case "LOAD_FILTER_PRODUCTS":
        return{
            ...state,
            //we does not want to change our orignal data so we use [...] 
            filter_products:[...action.payload],
            all_products: [...action.payload],
        }
     case "SET_GRIDVIEW" :
        return {
            ...state,
            grid_view:true,
        }  
        
     case "SET_LISTVIEW" :
        return {
            ...state,
            grid_view:false,
        } 
        case "GET_SORTVALUE" :
           return{
                ...state,
                sorting_value:action.payload
            }
            case "SORTING_PRODUCTS":
                let tempSortProduct=[...state.filter_products];
                let newSortData;
                switch(state.sorting_value){
                case "a-z":{
                newSortData=tempSortProduct.sort((a,b)=>a.name.localeCompare(b.name));
                break;}
                case "z-a":{
                newSortData=tempSortProduct.sort((a,b)=>b.name.localeCompare(a.name));
                break;}
                case "lowest":{
                newSortData=tempSortProduct.sort((a,b)=>a.price-b.price);
                break;}
                case "highest":{
                newSortData=tempSortProduct.sort((b,a)=>a.price-b.price);
                break;}
                default : newSortData=tempSortProduct.sort((a,b)=>a.price-b.price);
            }
                return {
                    ...state,
                    filter_products:newSortData
                }
                case "Update_Filters_Value":
                    const {name,val}=action.payload
                   
                    return {
                        ...state,
                        filters:{
                            ...state.filters,
                            [name]:val,

                        }
                    }
                    case "Filter_Products":
                        let {all_products}=state
                        let tempFilterProduct=[...all_products]

                        const {text}=state.filters
                        if(text){
                            tempFilterProduct=tempFilterProduct.filter((ele)=>ele.name.toLowerCase().includes(text));
                            console.log(tempFilterProduct)
                        }
                        return {
                            ...state,
                            filter_products:tempFilterProduct
                        }
    default : return state
}

}
export default filterReducer