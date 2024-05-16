// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.map(
        eachCartItem =>
          (totalPrice += eachCartItem.price * eachCartItem.quantity),
      )

      return (
        <>
          <div className="car-summary-container">
            <div className="cost-quantity-container">
              <h1 className="key-title">
                Order Total:
                <span className="price-value">Rs {totalPrice}/- </span>
              </h1>
              <p className="quantity">{cartList.length} Items in cart</p>
            </div>
            <button className="checkout-button" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
