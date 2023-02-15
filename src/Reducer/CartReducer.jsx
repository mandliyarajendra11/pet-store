
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
                case "SET_INC":
                  let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                  let incAmount = curElem.amount + 1;
          
                  if (incAmount >= curElem.max) {
                    incAmount = curElem.max;
                  }
          
                  return {
                    ...curElem,
                    amount: incAmount,
                  };
                } else {
                  return curElem;
                }});             
    return { ...state, cart: updatedProduct };
         
                case "SET_DEC":
                  let updatedProducts = state.cart.map((curElem) => {
                    if (curElem.id === action.payload) {
                      let decAmount = curElem.amount - 1;
              
                      if (decAmount <= 1) {
                        decAmount = 1;
                      }
              
                      return {
                        ...curElem,
                        amount: decAmount,
                      };
                    } else {
                      return curElem;
                    }
                  });
                  return { ...state, cart: updatedProducts };
                  case "CART_TOTAL_ITEM":
                   let updateAmount_Item=state.cart.reduce((acc,curr)=>{
                    acc.price+=(curr.price*curr.amount);
                    acc.item+=curr.amount;
                    return acc;
                  },
                  //using accumlator as a opject (accum receive initial value so we pass this price item)
                    {price:0,item:0})
                    return {
                      ...state,
                      total_item:updateAmount_Item.item,
                      total_amount:updateAmount_Item.price,
                      shipping_fee:updateAmount_Item.price/50 
                    }
                  default:return state;
            
    }
}

export default CartReducer