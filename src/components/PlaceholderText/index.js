import React from "react"
import styles from "./Placeholder.module.scss"

const PlaceholderText = ({ type }) => {
   return type === "signin" ? (
      <section className={styles.placeholder}>
         <h2>Login</h2>
         <p>Get access to your Orders, Wishlist, and Recommendations</p>
      </section>
   ) : (
      <section className={styles.placeholder}>
         <h2>Signup</h2>
         <p>We do not share your personal details with anyone.</p>
      </section>
   )
}

export default PlaceholderText
