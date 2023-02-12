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
            let userSortValue=document.getElementById("sort");
           let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
        
           return{
                ...state,
                sorting_value:sort_value
            }
            case "SORTING_PRODUCTS":
                let tempSortProduct=[...action.payload];
                let newSortData;
                if(state.sorting_value==="a-z")
                newSortData=tempSortProduct.sort((a,b)=>a.name.localeCompare(b.name));
                
                if(state.sorting_value==="z-a")
                newSortData=tempSortProduct.sort((a,b)=>b.name.localeCompare(a.name));
                
                if(state.sorting_value==="lowest")
                newSortData=tempSortProduct.sort((a,b)=>a.price-b.price);
                
                if(state.sorting_value==="highest")
                newSortData=tempSortProduct.sort((b,a)=>a.price-b.price);
                console.log(newSortData) 
                return {
                    ...state,
                    filter_products:newSortData
                }
    default : return state
}

}
export default filterReducer