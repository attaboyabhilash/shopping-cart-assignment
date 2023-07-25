import React, { useState, useEffect } from "react"
import styles from "./ProductCard.module.scss"
import Message from "../Message"
import { useSelector, useDispatch } from "react-redux"
import {
  incrementCart,
  decrementCart,
  decrementCartItems,
  incrementCartItemsByZero,
  incrementCartItems,
} from "../../redux/features/addToCart"

const ProductCard = ({ product, index }) => {
  const { id, name, description, imageURL, price, stock } = product
  const [quantity, setQuantity] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({
    response: "",
    responseMessage: "",
  })
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const handleClickAndEnterDecrement = () => {
    if (quantity === 1) {
      dispatch(decrementCart(id))
    } else {
      dispatch(decrementCartItems(id))
    }
  }

  const handleClickAndEnterIncrement = () => {
    if (quantity === stock) {
      dispatch(incrementCartItemsByZero(id))
    } else {
      dispatch(incrementCartItems(id))
    }
  }

  const handleBuy = () => {
    setIsLoading(true)
    fetch(`${process.env.BACKEND_URL}/addToCart`, { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data)
        if (data.response === "Success") {
          dispatch(
            incrementCart({ id, name, imageURL, price, quantity: 1, stock })
          )
        }
        setShowMessage(true)
      })
      .then(() => {
        setIsLoading(false)
        setTimeout(() => {
          setShowMessage(false)
        }, 1000)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    const quantity = items.filter((item) => item.id === id)[0]?.quantity
    setQuantity(quantity)
  }, [items])

  return (
    <>
      <div
        className={styles.card}
        tabIndex={11 + index}
        aria-labelledby="Product Card"
      >
        <h2 tabIndex={11.1 + index} aria-labelledby={name}>
          {name}
        </h2>
        <div className={styles.flexer}>
          <img src={imageURL} alt={name} />
          <p
            className={styles.desc}
            tabIndex={11.2 + index}
            aria-describedby={description}
          >
            {description}
          </p>
        </div>
        <div className={styles.card_footer}>
          <p>MRP Rs. {price}</p>
          {items.filter((item) => item.id === id).length === 0 ? (
            <button
              tabIndex={11.3 + index}
              disabled={isLoading}
              aria-labelledby={`Buy ${name} @ MRP Rs. ${price}`}
              className={styles.buyBtn}
              onClick={() => handleBuy()}
            >
              Buy Now{" "}
              <span className={styles.buttonPrice}>@ MRP Rs. {price}</span>
            </button>
          ) : (
            <div className={styles.buttonGroup}>
              <button
                tabIndex={11.4 + index}
                onClick={handleClickAndEnterDecrement}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                tabIndex={11.5 + index}
                onClick={handleClickAndEnterIncrement}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
      {showMessage ? (
        <Message
          response={message.response}
          responseMessage={message.responseMessage}
        />
      ) : null}
    </>
  )
}

export default ProductCard
