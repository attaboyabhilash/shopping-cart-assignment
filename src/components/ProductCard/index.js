import React, { useState } from "react"
import APIService from "../../utils/APIService"
import styles from "./ProductCard.module.scss"
import Message from "../Message"
import { useSelector, useDispatch } from "react-redux"
import { incrementCart } from "../../redux/features/addToCart"

const ProductCard = ({ product }) => {
  const { id, name, description, imageURL, price, stock } = product
  const [showMessage, setShowMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({
    response: "",
    responseMessage: "",
  })
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

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

  return (
    <>
      <div className={styles.card}>
        <h2>{name}</h2>
        <div className={styles.flexer}>
          <img src={imageURL} alt={name} />
          <p className={styles.desc}>{description}</p>
        </div>
        <div className={styles.card_footer}>
          <p>MRP Rs. {price}</p>
          {items.filter((item) => item.id === id).length === 0 ? (
            <button
              disabled={isLoading}
              aria-labelledby={`Buy ${name} @ MRP Rs. ${price}`}
              className={styles.buyBtn}
              onClick={() => handleBuy()}
            >
              Buy Now{" "}
              <span className={styles.buttonPrice}>@ MRP Rs. {price}</span>
            </button>
          ) : (
            <button className={styles.addedBtn}>Added</button>
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
