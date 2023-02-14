import {useState} from 'react'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';
import FormatPrice from '../Helpers/FormatPrice'
import CartAmountToggle from './CartAmoutToggle'

const CartItem = ({id,name,image,price,color,amount,max}) => {
    const setDecrease=()=>{Amount>1?setAmount(Amount-1):setAmount(1)};
    const setIncrease=()=>{Amount<max?setAmount(Amount+1):setAmount(max)};
    const [Amount,setAmount]=useState(amount) 
    const {RemoveCart} =useCartContext();
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
         amount={Amount} 
        setDecrease={setDecrease}
        setIncrease={setIncrease}/>
        <div className="cart-hide">
            <p><FormatPrice price={price*Amount}/></p>
        </div>
        <div>
            <FaTrash className='remove_icon' onClick={()=>{RemoveCart(id)}}  />
        </div>
    </div>
  )
}

export default CartItem