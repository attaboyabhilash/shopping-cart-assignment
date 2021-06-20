import React from "react"
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai"
import styles from "./Message.module.scss"

const Message = ({ response, responseMessage }) => {
   return response === "Success" ? (
      <div className={styles.message}>
         <AiFillCheckCircle style={{ color: "#52c41a" }} />
         <p>{responseMessage}</p>
      </div>
   ) : (
      <div className={styles.message}>
         <AiFillCloseCircle style={{ color: "#ff4d4f" }} />
         <p>{responseMessage}</p>
      </div>
   )
}

export default Message
