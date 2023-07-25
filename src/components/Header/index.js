import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { IoMdCart } from "react-icons/io"
import Sidebar from "./Sidebar"
import { GiHamburgerMenu } from "react-icons/gi"
import styles from "./Header.module.scss"
import Cart from "../../containers/Cart"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const items = useSelector((state) => state.cart.items)

  return (
    <header>
      <nav className={styles.main_nav}>
        <GiHamburgerMenu
          className={styles.menubar}
          onClick={() => setOpen(true)}
        />
        <img
          src="/static/images/logo_2x.png"
          alt="SABKA BAZAAR LOGO"
          className={styles.logo}
        />
        <nav className={styles.navigations_one}>
          <Link to="/" tabIndex="1">
            Home
          </Link>
          <Link to="/products" tabIndex="2">
            Products
          </Link>
          <div className={styles.signin_and_registration}>
            <Link to="/signin" tabIndex="3">
              SignIn
            </Link>
            <Link to="/register" tabIndex="4">
              Register
            </Link>
          </div>
        </nav>
      </nav>
      <div
        tabIndex="5"
        className={styles.cart_items}
        onClick={() => setCartOpen((prevVal) => !prevVal)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCartOpen((prevVal) => !prevVal)
          }
        }}
      >
        <IoMdCart />
        {items.length} items
      </div>
      <Sidebar open={open} handleOpen={setOpen} />
      {cartOpen ? <Cart setCartOpen={setCartOpen} /> : null}
    </header>
  )
}

export default Header
