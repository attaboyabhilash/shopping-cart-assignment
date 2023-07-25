import React from "react"
import Layout from "../containers/Layout"
import Slider from "../components/Slider"
import HomepagePlaceholder from "../components/HomepagePlaceholder"

const Home = () => {
  document.title = "Home | Shopping Cart"

  return (
    <Layout>
      <Slider />
      <HomepagePlaceholder />
    </Layout>
  )
}

export default Home
