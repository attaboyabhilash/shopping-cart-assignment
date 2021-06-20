import React from "react"
import Layout from "../containers/Layout"
import APIService from "../utils/APIService"
import ProductCard from "../components/ProductCard"
import styles from "./styles/Products.module.scss"
import SideNavbar from "../components/SideNavbar"

const Products = () => {
  document.title = "Products | Shopping Cart"
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
            response.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })
          )}
        </main>
      </div>
    </Layout>
  )
}

export default Products
