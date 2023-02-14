import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmoutToggle = ({setIncrease,setDecrease,amount}) => {
  return (
    <div className='cart-button'>
      <div className="amount-toggle">
      <button onClick={setIncrease}><FaPlus/></button>
      <div className='amount-style'>{amount}</div>
      <button onClick={setDecrease}><FaMinus/></button>
    </div>
    </div>
  )
}

export default CartAmoutToggle