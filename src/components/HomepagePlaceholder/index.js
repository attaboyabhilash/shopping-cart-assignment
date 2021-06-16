import React from "react"
import { Link } from "react-router-dom"
import styles from "./HomepagePlaceholder.module.scss"

const HomepagePlaceholder = ({ category }) => {
  const { id, name, description, imageUrl, order } = category
  return order % 2 === 0 ? (
    <section className={styles.placeholder}>
      <img src={imageUrl} alt={name} className={styles.placeholderImg} />
      <div className={styles.description}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/products/${id}`}>Explore {name}</Link>
      </div>
    </section>
  ) : (
    <section className={styles.placeholder}>
      <div className={styles.description}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/products/${id}`}>Explore {name}</Link>
      </div>
      <img src={imageUrl} alt={name} className={styles.placeholderImg} />
    </section>
  )
}

export default HomepagePlaceholder
