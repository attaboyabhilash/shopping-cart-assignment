import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./Cart.module.scss"
import { IoCloseSharp } from "react-icons/io5"
import { useSelector, useDispatch } from "react-redux"
import {
  clearCart,
  findTotalPrice,
  incrementCartItems,
  decrementCartItems,
  decrementCart,
  incrementCartItemsByZero,
} from "../../redux/features/addToCart"

const Cart = ({ setCartOpen }) => {
  const items = useSelector((state) => state.cart.items)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const dispatch = useDispatch()

  const handleClickAndEnterDecrement = (quantity, id) => {
    if (quantity === 1) {
      dispatch(decrementCart(id))
    } else {
      dispatch(decrementCartItems(id))
    }
  }

  const handleClickAndEnterIncrement = (quantity, stock, id) => {
    if (quantity === stock) {
      dispatch(incrementCartItemsByZero(id))
    } else {
      dispatch(incrementCartItems(id))
    }
  }

  useEffect(() => {
    dispatch(findTotalPrice())
    // eslint-disable-next-line
  }, [items])

  return (
    <div className={styles.cart}>
      <header className={styles.cart_head}>
        <div>
          <h3>My Cart</h3>
          <p>({items.length} items)</p>
        </div>
        <IoCloseSharp
          tabIndex="5.1"
          onClick={() => setCartOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCartOpen(false)
            }
          }}
        />
      </header>
      {items.length > 0 ? (
        <div className={styles.overflow_cart}>
          {items.map((item) => {
            return (
              <div key={item.id} className={styles.cart_item}>
                <div className={styles.flexer}>
                  <img src={item.imageURL} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <div className={styles.flexer2}>
                      <div>
                        <span
                          tabIndex="5.2"
                          className={styles.increment_decrement}
                          onClick={() =>
                            handleClickAndEnterDecrement(item.quantity, item.id)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleClickAndEnterDecrement(
                                item.quantity,
                                item.id
                              )
                            }
                          }}
                        >
                          -
                        </span>
                        <span>{item.quantity}</span>
                        <span
                          tabIndex="5.3"
                          className={styles.increment_decrement}
                          onClick={() =>
                            handleClickAndEnterIncrement(
                              item.quantity,
                              item.stock,
                              item.id
                            )
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleClickAndEnterIncrement(
                                item.quantity,
                                item.stock,
                                item.id
                              )
                            }
                          }}
                        >
                          +
                        </span>
                        <IoCloseSharp />
                        Rs. {item.price}
                      </div>
                      <p>Rs. {item.quantity * item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className={styles.best_price}>
            <img src="/static/images/lowest-price.png" alt="best-price" />
            <p>You won't find it cheaper anywhere</p>
          </div>
        </div>
      ) : (
        <div className={styles.empty_cart}>
          <div>
            <h3>No items in your cart</h3>
            <p>Your favourite items are just a click away</p>
          </div>
        </div>
      )}
      {items.length > 0 ? (
        <div className={styles.cart_nonEmpty_footer}>
          <p>Promo code can be applied on payment page</p>
          <button
            tabIndex="5.4"
            onClick={() => {
              dispatch(clearCart())
              setCartOpen(false)
            }}
          >
            <span>Proceed to Checkout</span>
            <span>
              Rs. {totalPrice} {`>`}
            </span>
          </button>
        </div>
      ) : (
        <div className={styles.cart_footer} onClick={() => setCartOpen(false)}>
          <Link to="/products" tabIndex="5.5">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
