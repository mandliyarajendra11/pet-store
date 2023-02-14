
const CartReducer = (state,action) => {
  
    switch (action.type) {

        case "ADD_TO_CART":
           let {id,color,amount,product}=action.payload

            let cartProduct;
            cartProduct={
              id:id+color,
              name:product.name,
              color,
              amount, 
               image:product.image[0].url,
               price:product.price,
               max:product.stock
            } 
            
    let existingProduct = state.cart.find(
        (curItem) => curItem.id === id + color
      );
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;
  
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      }      
             return{
                 ...state,
                cart:[...state.cart,cartProduct]    
             }

             case "REMOVE":
             let newCart=state.cart.filter((ele)=>ele.id!==action.payload)
             return {
                    ...state,
                    cart:newCart
                }
                case "CLEAR":
                return{
                    ...state,
                    cart:[]
                }
        default:return state;
            
    }
}

export default CartReducer