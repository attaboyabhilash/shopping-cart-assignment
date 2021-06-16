import React, { useState } from "react"
import { Link } from "react-router-dom"
import { IoMdCart } from "react-icons/io"
import Sidebar from "./Sidebar"
import { GiHamburgerMenu } from "react-icons/gi"
import styles from "./Header.module.scss"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.main_nav}>
        <GiHamburgerMenu
          className={styles.menubar}
          onClick={() => setOpen(true)}
        />
        <img
          src="../../../static/images/logo_2x.png"
          alt="SABKA_BAZAAR"
          className={styles.logo}
        />
        <nav className={styles.navigations_one}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </nav>
      <div className={styles.cart_menu}>
        <nav className={styles.navigations_two}>
          <Link to="/signin">SignIn</Link>
          <Link to="/register">Register</Link>
        </nav>
        <div className={styles.cart}>
          <IoMdCart />0 items
        </div>
      </div>
      <Sidebar open={open} handleOpen={setOpen} />
    </header>
  )
}

export default Header
