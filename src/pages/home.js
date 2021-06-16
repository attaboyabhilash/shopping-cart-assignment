import React, { useState, useEffect } from "react"
import Layout from "../containers/Layout"
import Slider from "../components/Slider"
import HomepagePlaceholder from "../components/HomepagePlaceholder"

const Home = () => {
  document.title = "Home | Shopping Cart"
  const [category, setCategory] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:5000/categories", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err))
  }, [])

  return (
    <Layout>
      <Slider />
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        category
          .sort((a, b) => a.order - b.order)
          .map((cat) => {
            return (
              cat.enabled && (
                <HomepagePlaceholder key={cat.key} category={cat} />
              )
            )
          })
      )}
    </Layout>
  )
}

export default Home
