
// Write your code here
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalCost = 0
      for (let each of cartList) {
        totalCost += each.price * each.quantity
      }

      return (
        <div>
          <h1>
            Order Total: <span>Rs {totalCost}/-</span>
          </h1>
          <p>{cartList.length} items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
