import {useState} from 'react'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';
import FormatPrice from '../Helpers/FormatPrice'
import CartAmountToggle from './CartAmoutToggle'

const CartItem = ({id,name,image,price,color,amount,max}) => {
    const {RemoveCart ,SetIncrement,SetDecrement} =useCartContext();
    return (
    <div className='cart_heading grid grid-five-column'>
        <div className="cart-image--name">
            <div><figure><img src={image} alt={id} /></figure></div>
            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>color :</p>
                    <div className='color-style' style={{backgroundColor:color,color:color}}></div>
                </div>
            </div>
        </div>
        <div className="cart-hide">
            <p><FormatPrice price={price}/></p>
        </div>
        <CartAmountToggle
         amount={amount} 
        setDecrease={()=>SetDecrement(id)}
        setIncrease={()=>SetIncrement(id)}/>
        <div className="cart-hide">
            <p><FormatPrice price={price*amount}/></p>
        </div>
        <div>
            <FaTrash className='remove_icon' onClick={()=>{RemoveCart(id)}}  />
        </div>
    </div>
  )
}

export default CartItem