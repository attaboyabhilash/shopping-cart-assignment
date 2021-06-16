import React, { useEffect } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
