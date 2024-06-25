import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}> {/* Add a unique key for each item */}
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                {/* Calculate and display the item total */}
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' onClick={() => removeFromCart(e.id)} src={remove_icon} alt="" />
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>  {/* Call the function to get the overall total */}
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Free</p>
              <p>$Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>  {/* Call the function again to display the overall total */}
            </div>
          </div>
          <Link to='/payment'><button>PROCEED TO CHECKOUT</button></Link>
        </div>
       
      </div>
    </div>
  )
}

export default CartItems
