import React from "react"
import { Link } from "react-router-dom"
import { IoCloseSharp } from "react-icons/io5"
import styles from "./Header.module.scss"

const Sidebar = ({ open, handleOpen }) => {
   return (
      <>
         <ul
            className={styles.sidebar}
            style={
               open
                  ? { transform: "translateX(0px)" }
                  : { transform: "translateX(-250px)" }
            }
         >
            <div className={styles.closeIcon} onClick={() => handleOpen(false)}>
               <IoCloseSharp />
            </div>
            <Link to="/">
               <li>Home</li>
            </Link>
            <Link to="/products">
               <li>Products</li>
            </Link>
            <Link to="/signin">
               <li>SignIn</li>
            </Link>
            <Link to="/register">
               <li>Register</li>
            </Link>
         </ul>
         {open ? <div className={styles.backdrop}></div> : null}
      </>
   )
}

export default Sidebar
