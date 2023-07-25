import React from "react"
import { Link } from "react-router-dom"
import { IoCloseSharp } from "react-icons/io5"
import styles from "./Header.module.scss"

const Sidebar = ({ open, handleOpen }) => {
  return (
    <>
      <aside
        className={styles.sidebar}
        style={
          open
            ? { transform: "translateX(0px)" }
            : { transform: "translateX(-300px)" }
        }
      >
        <div className={styles.closeIcon} onClick={() => handleOpen(false)}>
          <IoCloseSharp />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </aside>
      {open ? (
        <div
          className={styles.backdrop}
          onClick={() => handleOpen(false)}
        ></div>
      ) : null}
    </>
  )
}

export default Sidebar
