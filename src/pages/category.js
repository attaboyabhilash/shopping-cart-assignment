import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../containers/Layout"
import APIService from "../utils/APIService"
import styles from "./styles/Products.module.scss"
import ProductCard from "../components/ProductCard"
import SideNavbar from "../components/SideNavbar"

const Category = () => {
  document.title = "Products | Shopping Cart"
  const { categoryId } = useParams()
  const { response, isLoading } = APIService({
    apiRoute: "products",
    method: "GET",
  })

  return (
    <Layout>
      <div className={styles.products}>
        <SideNavbar />
        <main className={styles.product_layout}>
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            response
              .filter((product) => product.category === String(categoryId))
              .map((product) => {
                return <ProductCard key={product.id} product={product} />
              })
          )}
        </main>
      </div>
    </Layout>
  )
}

export default Category
