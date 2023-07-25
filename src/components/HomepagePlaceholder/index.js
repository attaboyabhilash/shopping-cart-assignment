import React from "react"
import { Link } from "react-router-dom"
import APIService from "../../utils/APIService"
import styles from "./HomepagePlaceholder.module.scss"

const HomepagePlaceholder = () => {
  const { response, isLoading } = APIService({
    apiRoute: "categories",
    method: "GET",
  })

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    response
      .sort((a, b) => a.order - b.order)
      .map((res) => {
        return (
          res.enabled &&
          (res.order % 2 === 0 ? (
            <section className={styles.placeholder} key={res.id}>
              <img
                src={res.imageUrl}
                alt={res.name}
                className={styles.placeholderImg}
              />
              <div className={styles.description}>
                <h2>{res.name}</h2>
                <p>{res.description}</p>
                <Link to={`/products/${res.id}`}>Explore {res.name}</Link>
              </div>
            </section>
          ) : (
            <section className={styles.placeholder} key={res.id}>
              <div className={styles.description}>
                <h2>{res.name}</h2>
                <p>{res.description}</p>
                <Link to={`/products/${res.id}`}>Explore {res.name}</Link>
              </div>
              <img
                src={res.imageUrl}
                alt={res.name}
                className={styles.placeholderImg}
              />
            </section>
          ))
        )
      })
  )
}

export default HomepagePlaceholder
